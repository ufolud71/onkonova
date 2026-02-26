(function(){
  // Aktywny link w nawigacji
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    if(a.getAttribute('href') === path) a.classList.add('active');
  });

  // Mobile menu
  const btn = document.getElementById('mobileToggle');
  const nav = document.getElementById('nav');
  if(btn && nav){
    btn.addEventListener('click', () => nav.classList.toggle('open'));
    // Zamknij menu po kliknięciu linku
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // Rok w stopce
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
})();
