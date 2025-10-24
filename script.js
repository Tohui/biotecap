 window.addEventListener('load', () => {
      const l = document.getElementById('loader');
      requestAnimationFrame(()=> l.classList.add('hidden'));
      setTimeout(()=> l.remove(), 450);
    });

    // Cortina open/close
    const curtain = document.getElementById('curtain');
    const toggleBtn = document.getElementById('toggleCurtain');

    function openCurtain(){
      curtain.classList.add('open');
      curtain.setAttribute('aria-hidden','false');
      toggleBtn.setAttribute('aria-expanded','true');
    }
    function closeCurtain(){
      curtain.classList.remove('open');
      curtain.setAttribute('aria-hidden','true');
      toggleBtn.setAttribute('aria-expanded','false');
    }
    function toggleCurtain(){
      curtain.classList.contains('open') ? closeCurtain() : openCurtain();
    }
    toggleBtn.addEventListener('click', toggleCurtain);

    // Cerrar con click fuera
    document.addEventListener('click', (e)=>{
      if(!curtain.classList.contains('open')) return;
      const withinCurtain = curtain.contains(e.target);
      const withinButton  = toggleBtn.contains(e.target);
      if(!withinCurtain && !withinButton) closeCurtain();
    });
    // Cerrar con ESC
    window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeCurtain() });

    // Tabs
    const tabs = Array.from(document.querySelectorAll('.tab'));
    const panels = Array.from(document.querySelectorAll('.panel'));

    function showPanel(id){
      panels.forEach(p=>{
        const active = p.id === id;
        p.classList.toggle('active', active);
        p.toggleAttribute('hidden', !active);
      });
      tabs.forEach(t=>{
        const isActive = t.dataset.target === id;
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    }
    tabs.forEach(t=> t.addEventListener('click', ()=> showPanel(t.dataset.target)));


    // Simple, eficiente y funcional
  document.getElementById('whatsappBtn').addEventListener('click', function (e) {
    e.preventDefault();
    window.open('https://wa.me/523787319554?text=Hola%20quiero%20más%20información%20sobre%20sus%20productos', '_blank');
  });

window.addEventListener('load', ajustarEspaciador);
window.addEventListener('resize', ajustarEspaciador);

function ajustarEspaciador() {
  const header = document.querySelector('.header');
  const espaciador = document.querySelector('.espaciador');
  
  if (!header || !espaciador) return;

  // Calcula y asigna la altura real del header al div espaciador
  const alturaHeader = header.offsetHeight;
  espaciador.style.height = `${alturaHeader}px`;
}


  // Ejecutar al cargar y al redimensionar


  window.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.btn-ficha');
  const container = document.getElementById('fichaContainer');

  botones.forEach(boton => {
    boton.addEventListener('click', async () => {
      const ficha = boton.dataset.ficha;
      if (!ficha) return;

      // Cargar HTML externo
      const resp = await fetch(`fichas/${ficha}`);
      const html = await resp.text();

      // Crear modal
      const overlay = document.createElement('div');
      overlay.className = 'ficha-overlay';
      overlay.innerHTML = `
        <div class="ficha-modal">
          <button class="ficha-close">×</button>
          ${html}
        </div>
      `;

      container.innerHTML = '';
      container.appendChild(overlay);

      const btnCerrar = overlay.querySelector('.ficha-close');
      const modal = overlay.querySelector('.ficha-modal');

      btnCerrar.addEventListener('click', () => overlay.remove());
      overlay.addEventListener('click', e => {
        if (!modal.contains(e.target)) overlay.remove();
      });
    });
  });
});



document.addEventListener('click', () => {
    const player = document.getElementById('player');
    player.play();
  }, { once: true });


  window.addEventListener('DOMContentLoaded', () => {
    const activeTab = document.querySelector('.tab[aria-selected="true"]');
    if (activeTab) {
      const targetId = activeTab.dataset.target;
      document.getElementById(targetId).hidden = false;
    }
  });
