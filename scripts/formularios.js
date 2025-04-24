document.addEventListener('DOMContentLoaded', () => {
  const formEncomenda = document.getElementById('form-encomenda');

  if (formEncomenda) {
    formEncomenda.addEventListener('submit', async (e) => {
      e.preventDefault();

      const dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        produto: document.getElementById('produto').value,
        quantidade: document.getElementById('quantidade').value,
        mensagem: document.getElementById('mensagem').value,
      };

      try {
        const res = await fetch('http://localhost:3000/enviar-pedido', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dados),
        });

        const resposta = await res.json();
        alert(resposta.message || resposta.error);
      } catch (erro) {
        alert('Erro ao enviar pedido.');
        console.error(erro);
      }
    });
  }

  const formFeedback = document.getElementById('form-feedback');

  if (formFeedback) {
    formFeedback.addEventListener('submit', async (e) => {
      e.preventDefault();

      const dados = {
        nome: document.getElementById('nome-feedback').value,
        email: document.getElementById('email-feedback').value,
        mensagem: document.getElementById('mensagem-feedback').value,
      };

      try {
        const res = await fetch('http://localhost:3000/enviar-feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dados),
        });

        const resposta = await res.json();
        alert(resposta.message || resposta.error);
      } catch (erro) {
        alert('Erro ao enviar feedback.');
        console.error(erro);
      }
    });
  }
});