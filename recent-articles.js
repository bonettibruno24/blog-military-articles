export const textArticles = [
    {
      title: 'Exército reformula doutrina dos Kids Pretos: aulas de ética, noções de operações psicológicas e aquisição de "blindados urbanos"',
      url: 'https://www.sociedademilitar.com.br/2025/05/exercito-reformula-doutrina-dos-kids-pretos-integracao-com-etica-operacoes-psicologicas-e-aquisicao-de-blindados-urbanos.html'
    },
    {
      title: 'Exército reformula doutrina dos Kids Pretos: aulas de ética, noções de operações psicológicas e aquisição de "blindados urbanos"',
      url: 'https://www.sociedademilitar.com.br/2025/05/exercito-reformula-doutrina-dos-kids-pretos-integracao-com-etica-operacoes-psicologicas-e-aquisicao-de-blindados-urbanos.html'
    },
    {
      title: 'Exército reformula doutrina dos Kids Pretos: aulas de ética, noções de operações psicológicas e aquisição de "blindados urbanos"',
      url: 'https://www.sociedademilitar.com.br/2025/05/exercito-reformula-doutrina-dos-kids-pretos-integracao-com-etica-operacoes-psicologicas-e-aquisicao-de-blindados-urbanos.html'
    },
    {
      title: 'Exército reformula doutrina dos Kids Pretos: aulas de ética, noções de operações psicológicas e aquisição de "blindados urbanos"',
      url: 'https://www.sociedademilitar.com.br/2025/05/exercito-reformula-doutrina-dos-kids-pretos-integracao-com-etica-operacoes-psicologicas-e-aquisicao-de-blindados-urbanos.html'
    },
    {
      title: 'Exército reformula doutrina dos Kids Pretos: aulas de ética, noções de operações psicológicas e aquisição de "blindados urbanos"',
      url: 'https://www.sociedademilitar.com.br/2025/05/exercito-reformula-doutrina-dos-kids-pretos-integracao-com-etica-operacoes-psicologicas-e-aquisicao-de-blindados-urbanos.html'
    },
    {
      title: 'Exército reformula doutrina dos Kids Pretos: aulas de ética, noções de operações psicológicas e aquisição de "blindados urbanos"',
      url: 'https://www.sociedademilitar.com.br/2025/05/exercito-reformula-doutrina-dos-kids-pretos-integracao-com-etica-operacoes-psicologicas-e-aquisicao-de-blindados-urbanos.html'
    },
    {
      title: 'Exército reformula doutrina dos Kids Pretos: aulas de ética, noções de operações psicológicas e aquisição de "blindados urbanos"',
      url: 'https://www.sociedademilitar.com.br/2025/05/exercito-reformula-doutrina-dos-kids-pretos-integracao-com-etica-operacoes-psicologicas-e-aquisicao-de-blindados-urbanos.html'
    },
    {
      title: 'Exército reformula doutrina dos Kids Pretos: aulas de ética, noções de operações psicológicas e aquisição de "blindados urbanos"',
      url: 'https://www.sociedademilitar.com.br/2025/05/exercito-reformula-doutrina-dos-kids-pretos-integracao-com-etica-operacoes-psicologicas-e-aquisicao-de-blindados-urbanos.html'
    },
    {
      title: 'Exército reformula doutrina dos Kids Pretos: aulas de ética, noções de operações psicológicas e aquisição de "blindados urbanos"',
      url: 'https://www.sociedademilitar.com.br/2025/05/exercito-reformula-doutrina-dos-kids-pretos-integracao-com-etica-operacoes-psicologicas-e-aquisicao-de-blindados-urbanos.html'
    },
    // Adicione mais objetos...
  ];

  export function renderRecentArticles(data, containerId) {
    const container = document.getElementById(containerId);
  
    if (!container) {
      console.error(`Container com ID "${containerId}" não encontrado.`);
      return;
    }
  
    container.innerHTML = '';
  
    data.forEach(item => {
      const articleHTML = `
        <article class="bg-white rounded-lg shadow p-4 text-start">
          <h3 class="text-sm font-bold text-gray-800 tracking-wide">
            <a href="${item.url}" class="flex items-start gap-2">
              <span class="text-[10px] text-blue-600">▶</span>
              ${item.title}
            </a>
          </h3>
        </article>
      `;
      container.insertAdjacentHTML('beforeend', articleHTML);
    });
  }