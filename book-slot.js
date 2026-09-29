// ---- Mock data (replace with API responses) ----
const CROPS = [
  { id: 'wheat',   name: 'Wheat',   season: 'Rabi 2026',   max: 50 },
  { id: 'paddy',   name: 'Paddy',   season: 'Kharif 2026', max: 60 },
  { id: 'mustard', name: 'Mustard', season: 'Rabi 2026',   max: 30 },
];

// Availability keyed by ISO date. Anything not listed is open.
const CLOSED = {
  '2026-10-02': 'Gandhi Jayanti: centre closed',
  '2026-10-03': 'Fully booked',
  '2026-10-04': 'Sunday: centre closed',
};

const SLOTS = [
  { id: 'm1', group: 'Morning',   time: '08:00 AM – 10:00 AM', tag: 'High Capacity', tone: 'emerald', left: 42, total: 60, ahead: 6 },
  { id: 'm2', group: 'Morning',   time: '10:30 AM – 12:30 PM', tag: 'Filling Fast',  tone: 'amber',   left: 9,  total: 60, ahead: 21 },
  { id: 'a1', group: 'Afternoon', time: '02:00 PM – 04:00 PM', tag: 'Available',     tone: 'slate',   left: 31, total: 60, ahead: 12 },
];
const TONES = {
  emerald: 'bg-emerald-100 text-emerald-800',
  amber:   'bg-amber-100 text-amber-800',
  slate:   'bg-slate-100 text-slate-700',
};

const state = { crop: null, qty: null, date: null, slot: null };
const $ = (id) => document.getElementById(id);
const iso = (d) => d.toISOString().slice(0, 10);
const fmtLong = (d) => d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });

// ---- Step 1: crops ----
$('cropList').innerHTML = CROPS.map((c) => `
  <button type="button" class="opt border border-slate-300 rounded-md px-3.5 py-3 text-left" data-crop="${c.id}" role="radio" aria-checked="false">
    <strong class="block text-[14.5px]">${c.name}</strong>
    <small class="text-[12.5px] text-slate-500">${c.season}</small>
  </button>`).join('');

$('cropList').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-crop]');
  if (!btn) return;
  state.crop = CROPS.find((c) => c.id === btn.dataset.crop);
  document.querySelectorAll('[data-crop]').forEach((b) => {
    const on = b === btn;
    b.classList.toggle('is-on', on);
    b.setAttribute('aria-checked', on);
  });
  validateQty();
  update();
});

// ---- Quantity ----
function validateQty() {
  const input = $('qty'), help = $('qtyHelp');
  const v = parseFloat(input.value);
  const max = state.crop?.max;
  input.setAttribute('aria-invalid', 'false');
  help.className = 'mt-1.5 text-[12.5px] text-slate-500';

  if (!state.crop) { help.textContent = 'Select a crop to see the limit per slot.'; state.qty = null; return; }
  help.textContent = `Maximum ${max} quintal per slot for ${state.crop.name}. For a bigger lot, book a second slot.`;

  if (!input.value) { state.qty = null; return; }
  if (!(v > 0)) {
    input.setAttribute('aria-invalid', 'true');
    help.textContent = 'Enter a quantity greater than 0.';
    help.className = 'mt-1.5 text-[12.5px] text-orange-700';
    state.qty = null; return;
  }
  if (v > max) {
    input.setAttribute('aria-invalid', 'true');
    help.textContent = `${v} quintal is over the ${max} quintal limit. Reduce it or split across two slots.`;
    help.className = 'mt-1.5 text-[12.5px] text-orange-700';
    state.qty = null; return;
  }
  state.qty = v;
}
$('qty').addEventListener('input', () => { validateQty(); update(); });

// ---- Step 2: next 7 days ----
const today = new Date();
const days = Array.from({ length: 7 }, (_, i) => {
  const d = new Date(today); d.setDate(today.getDate() + i); return d;
});
$('dates').innerHTML = days.map((d, i) => {
  const key = iso(d), closed = CLOSED[key];
  return `
  <button type="button" role="radio" aria-checked="false" ${closed ? 'disabled' : ''} data-date="${key}"
    class="opt ${closed ? 'is-off' : ''} shrink-0 w-[74px] border border-slate-300 rounded-md py-2.5 text-center">
    <span class="block text-[11.5px] ${closed ? '' : 'text-slate-500'}">${i === 0 ? 'Today' : d.toLocaleDateString('en-IN', { weekday: 'short' })}</span>
    <strong class="block text-xl leading-tight tabular-nums ${closed ? 'line-through' : ''}">${d.getDate()}</strong>
    <span class="block text-[11.5px] ${closed ? '' : 'text-slate-500'}">${d.toLocaleDateString('en-IN', { month: 'short' })}</span>
  </button>`;
}).join('');

$('dates').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-date]');
  if (!btn || btn.disabled) return;
  state.date = days.find((d) => iso(d) === btn.dataset.date);
  document.querySelectorAll('[data-date]').forEach((b) => {
    const on = b === btn;
    b.classList.toggle('is-on', on);
    b.setAttribute('aria-checked', on);
  });
  $('dateNote').textContent = '';
  update();
});
// Explain greyed-out dates on hover / focus
$('dates').addEventListener('mouseover', (e) => {
  const b = e.target.closest('[data-date]');
  $('dateNote').textContent = b && CLOSED[b.dataset.date] ? CLOSED[b.dataset.date] : '';
});

// ---- Step 3: slots ----
function renderSlots() {
  const groups = [...new Set(SLOTS.map((s) => s.group))];
  $('slots').innerHTML = groups.map((g) => `
    <div>
      <h3 class="text-[13px] font-semibold text-slate-600 mb-2">${g}</h3>
      <div class="grid sm:grid-cols-2 gap-2.5">
        ${SLOTS.filter((s) => s.group === g).map((s) => `
          <button type="button" role="radio" aria-checked="false" data-slot="${s.id}" class="opt border border-slate-300 rounded-md px-4 py-3 text-left">
            <span class="flex items-center justify-between gap-2">
              <strong class="text-[14.5px] tabular-nums">${s.time}</strong>
            </span>
            <span class="mt-2 flex items-center gap-2">
              <span class="text-[11.5px] font-semibold rounded px-1.5 py-0.5 ${TONES[s.tone]}">${s.tag}</span>
              <span class="text-[12.5px] text-slate-500">${s.left} of ${s.total} tokens left</span>
            </span>
          </button>`).join('')}
      </div>
    </div>`).join('');
}
renderSlots();

$('slots').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-slot]');
  if (!btn) return;
  state.slot = SLOTS.find((s) => s.id === btn.dataset.slot);
  document.querySelectorAll('[data-slot]').forEach((b) => {
    const on = b === btn;
    b.classList.toggle('is-on', on);
    b.setAttribute('aria-checked', on);
  });
  update();
});

// ---- Step 4: summary ----
function update() {
  const { crop, qty, date, slot } = state;
  $('sCrop').textContent = crop ? `${crop.name} – ${crop.season}` : '—';
  $('sQty').textContent = qty ? `${qty} quintal` : '—';
  $('sDate').textContent = date ? fmtLong(date) : '—';
  $('sTime').textContent = slot ? slot.time : '—';
  $('sLoad').textContent = slot
    ? `${slot.left > 30 ? 'Light' : slot.left > 15 ? 'Moderate' : 'Busy'} · ~${slot.ahead} farmers ahead`
    : '—';

  const step1 = crop && qty, step2 = !!date, step3 = !!slot;
  document.querySelector('[data-step="1"]').classList.toggle('done', !!step1);
  document.querySelector('[data-step="2"]').classList.toggle('done', step2);
  document.querySelector('[data-step="3"]').classList.toggle('done', step3);
  document.querySelectorAll('.step.done .step-dot').forEach((d) => (d.textContent = '✓'));
  document.querySelectorAll('.step:not(.done) .step-dot').forEach((d) => (d.textContent = d.closest('.step').dataset.step));

  const ready = step1 && step2 && step3;
  $('confirmBtn').disabled = !ready;
  $('dot4').classList.toggle('done', ready);
  $('hint').textContent = ready ? '' :
    !step1 ? 'Add a crop and quantity to continue.' :
    !step2 ? 'Pick a date to continue.' : 'Choose a time window to continue.';
}

// ---- Confirm ----
$('confirmBtn').addEventListener('click', () => {
  const { crop, qty, date, slot } = state;
  $('doneText').textContent = `${qty} quintal ${crop.name} · ${fmtLong(date)}, ${slot.time} at Dadri Procurement Centre.`;
  $('done').showModal();
  // TODO: POST state to your API and use the token it returns
});
$('closeDone').addEventListener('click', () => $('done').close());

update();
