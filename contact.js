document.querySelectorAll('[data-contact-form]').forEach((form) => {
  let sending = false;

  form.addEventListener('input', (event) => {
    if (typeof event.target.setCustomValidity === 'function') {
      event.target.setCustomValidity('');
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (sending) return;

    for (const field of form.querySelectorAll('[required]')) {
      if (!field.value.trim()) {
        field.setCustomValidity(field.name === 'message' ? 'Conte-nos sobre sua necessidade.' : 'Preencha este campo.');
      }
    }
    if (!form.reportValidity()) return;

    const button = form.querySelector('[type="submit"]');
    const status = form.querySelector('[data-form-status]');
    const originalText = button.textContent;
    const formData = new FormData(form);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    let failureMessage = 'Não foi possível enviar sua mensagem. Seus campos foram mantidos. Tente novamente.';

    sending = true;
    status.textContent = 'Enviando sua mensagem…';
    status.classList.remove('error');
    status.classList.add('show');
    button.textContent = 'Enviando...';
    button.disabled = true;
    button.setAttribute('aria-busy', 'true');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          name: String(formData.get('name') || '').trim(),
          email: String(formData.get('email') || '').trim(),
          whatsapp: String(formData.get('whatsapp') || '').trim(),
          subject: formData.get('subject'),
          message: String(formData.get('message') || '').trim()
        })
      });

      if (!response.ok) {
        if (response.status === 400) {
          failureMessage = 'Revise seu nome, e-mail e mensagem antes de tentar novamente.';
        } else if (response.status === 429) {
          failureMessage = 'Foram feitas muitas tentativas. Aguarde alguns minutos antes de tentar novamente.';
        }
        throw new Error('Falha no envio');
      }

      status.textContent = 'Mensagem enviada. Nossa equipe entrará em contato em breve.';
      status.classList.add('show');
      form.reset();
    } catch (error) {
      if (error.name === 'AbortError') {
        failureMessage = 'O envio demorou mais que o esperado e não foi possível confirmar o recebimento. Seus campos foram mantidos.';
      }
      const emailLink = document.createElement('a');
      emailLink.href = `mailto:contato@upscrum.com.br?subject=${encodeURIComponent(String(formData.get('subject') || 'Contato pelo site UpScrum'))}`;
      emailLink.textContent = 'contato@upscrum.com.br';
      status.textContent = failureMessage;
      status.append(' Você também pode escrever para ', emailLink, '.');
      status.classList.add('show', 'error');
    } finally {
      window.clearTimeout(timeout);
      sending = false;
      button.textContent = originalText;
      button.disabled = false;
      button.removeAttribute('aria-busy');
    }
  });
});
