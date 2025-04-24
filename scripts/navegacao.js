function mostrarSecao(id) {
  // Esconde todas as seções
  document.querySelectorAll('main section').forEach((secao) => {
    secao.classList.add('hidden');
  });

  // Mostra a seção selecionada
  const secaoSelecionada = document.getElementById(id);
  if (secaoSelecionada) {
    secaoSelecionada.classList.remove('hidden');
  }
}