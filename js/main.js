/* NetData Computadores — V2 */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    }));
  }

  // Formulário: abre uma conversa no WhatsApp com os dados preenchidos.
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const message = [
        'Olá! Gostaria de atendimento da NetData Computadores.',
        '',
        'Nome: ' + (data.get('nome') || ''),
        'E-mail: ' + (data.get('email') || ''),
        'Telefone: ' + (data.get('telefone') || ''),
        'Assunto: ' + (data.get('assunto') || ''),
        'Mensagem: ' + (data.get('mensagem') || '')
      ].join('\\n');
      window.open('https://wa.me/554836222726?text=' + encodeURIComponent(message), '_blank', 'noopener');
    });
  }

  // Atualiza automaticamente o ano do rodapé quando houver um elemento dedicado.
  document.querySelectorAll('[data-current-year]').forEach(el => el.textContent = new Date().getFullYear());
});
