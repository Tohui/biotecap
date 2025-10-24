export function initCurtain() {
  const curtain = document.getElementById('curtain');
  const toggleBtn = document.getElementById('toggleCurtain');
  if (!curtain || !toggleBtn) return;

  // --- Funciones base ---
  function openCurtain() {
    curtain.classList.add('open');
    curtain.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeCurtain() {
    curtain.classList.remove('open');
    curtain.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleCurtain() {
    curtain.classList.contains('open') ? closeCurtain() : openCurtain();
  }

  toggleBtn.addEventListener('click', toggleCurtain);

  // --- Cerrar con click fuera ---
  document.addEventListener('click', (e) => {
    if (!curtain.classList.contains('open')) return;
    const withinCurtain = curtain.contains(e.target);
    const withinButton = toggleBtn.contains(e.target);
    if (!withinCurtain && !withinButton) closeCurtain();
  });

  // --- Cerrar con ESC ---
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCurtain();
  });

  // --- Tabs ---
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const panels = Array.from(document.querySelectorAll('.panel'));

  function showPanel(id) {
    panels.forEach((p) => {
      const active = p.id === id;
      p.classList.toggle('active', active);
      p.toggleAttribute('hidden', !active);
    });
    tabs.forEach((t) => {
      const isActive = t.dataset.target === id;
      t.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }

  tabs.forEach((t) => t.addEventListener('click', () => showPanel(t.dataset.target)));
}
