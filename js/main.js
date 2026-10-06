// NetData - Scripts básicos

document.addEventListener('DOMContentLoaded', function () {
  // Menu mobile
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });

    // Fecha o menu ao clicar em um link
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // Formulário de contato (feedback básico)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      // Remova o preventDefault quando o backend estiver pronto
      // e configure o action do formulário
      e.preventDefault();
      alert('Obrigado! Sua mensagem foi registrada.\n\nO programador precisa configurar o envio real do formulário (PHP, e-mail, etc.).');
    });
  }
});
