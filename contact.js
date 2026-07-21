document.querySelectorAll('[data-contact-form]').forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const button = form.querySelector('[type="submit"]');
    const status = form.querySelector('[data-form-status]');
    const originalText = button.textContent;
    const formData = new FormData(form);

    status.textContent = '';
    status.classList.remove('show', 'error');
    button.textContent = 'Enviando...';
    button.disabled = true;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          whatsapp: formData.get('whatsapp'),
          subject: formData.get('subject'),
          message: formData.get('message')
        })
      });

      if (!response.ok) {
        throw new Error('Falha no envio');
      }

      status.textContent = 'Mensagem enviada. Nossa equipe entrará em contato em breve.';
      status.classList.add('show');
      button.textContent = 'Enviado';
      form.reset();
    } catch (error) {
      status.textContent = 'Não foi possível enviar a mensagem. Tente novamente em alguns minutos.';
      status.classList.add('show', 'error');
      button.textContent = originalText;
      button.disabled = false;
    }
  });
});
