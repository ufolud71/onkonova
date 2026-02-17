(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });

  const btn = document.getElementById('mobileToggle');
  const nav = document.getElementById('nav');
  if(btn && nav){
    btn.addEventListener('click', ()=> nav.classList.toggle('open'));
  }

  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const fd = new FormData(form);
      const name = (fd.get('name')||'').toString().trim() || 'Dziękujemy';
      const status = document.getElementById('status');
      if(status) status.textContent = 'Wysłano (formularz demo).';
      alert(`Dziękujemy, ${name}! Formularz jest demonstracyjny — mogę go podłączyć do maila lub Google Sheets.`);
      form.reset();
    });
  }
})();
