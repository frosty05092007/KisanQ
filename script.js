// Profile dropdown
const profileBtn = document.getElementById('profileBtn');
const profileMenu = document.getElementById('profileMenu');

function setMenu(open) {
  profileMenu.hidden = !open;
  profileBtn.setAttribute('aria-expanded', String(open));
}
profileBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  setMenu(profileMenu.hidden);
});
document.addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Queue alerts toggle (persists in-memory only; wire to your API later)
document.getElementById('alertToggle').addEventListener('change', (e) => {
  console.log('Queue alerts:', e.target.checked ? 'on' : 'off');
});

// Demo: simulate the live queue moving forward
const turnNo = document.getElementById('turnNo');
const aheadText = document.getElementById('aheadText');
let position = 5;

function render() {
  turnNo.textContent = '#' + position;
  aheadText.textContent = position + (position === 1 ? ' farmer ahead of you' : ' farmers ahead of you');
}
// Replace this interval with a real fetch/WebSocket call
setInterval(() => { if (position > 1) { position--; render(); } }, 20000);
