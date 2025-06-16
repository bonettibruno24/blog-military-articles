export const articles = [
  {
    title: 'Nova debandada de pilotos da FAB: lista inclui oficial pioneira...',
    link: 'https://www.sociedademilitar.com.br/2025/05/nova-debandada-de-pilotos-da-fab-lista-inclui-oficial-pioneira-piloto-do-helicoptero-caracal-que-atuou-em-brumadinho.html',
    imgSrc:
      'https://www.sociedademilitar.com.br/wp-content/uploads/2025/05/Imagem-com-militar-afundando-junto-de-bilhete-de-pagamento-de-sargento-750x469.jpg',
    imgAlt:
      'Imagem com militar afundando junto de bilhete de pagamento de sargento',
    category: 'Forças Armadas',
    paragraph:
      'A força aérea brasileira figura entre as 25 mais poderosas do mundo em 2025, segundo os rankings do World Directory of Modern Military Aircraft (WDMMA) e do Global Fire Power, com destaque absoluto na América Latina. As listas avaliam a...'
  },
  {
    title: 'Nova debandada de pilotos da FAB: lista inclui oficial pioneira...',
    link: 'https://www.sociedademilitar.com.br/2025/05/nova-debandada-de-pilotos-da-fab-lista-inclui-oficial-pioneira-piloto-do-helicoptero-caracal-que-atuou-em-brumadinho.html',
    imgSrc:
      'https://www.sociedademilitar.com.br/wp-content/uploads/2025/05/Imagem-com-militar-afundando-junto-de-bilhete-de-pagamento-de-sargento-750x469.jpg',
    imgAlt:
      'Imagem com militar afundando junto de bilhete de pagamento de sargento',
    category: 'Forças Armadas',
    paragraph:
      'A força aérea brasileira figura entre as 25 mais poderosas do mundo em 2025, segundo os rankings do World Directory of Modern Military Aircraft (WDMMA) e do Global Fire Power, com destaque absoluto na América Latina. As listas avaliam a...'
  },
  {
    title: 'Nova debandada de pilotos da FAB: lista inclui oficial pioneira...',
    link: 'https://www.sociedademilitar.com.br/2025/05/nova-debandada-de-pilotos-da-fab-lista-inclui-oficial-pioneira-piloto-do-helicoptero-caracal-que-atuou-em-brumadinho.html',
    imgSrc:
      'https://www.sociedademilitar.com.br/wp-content/uploads/2025/05/Imagem-com-militar-afundando-junto-de-bilhete-de-pagamento-de-sargento-750x469.jpg',
    imgAlt:
      'Imagem com militar afundando junto de bilhete de pagamento de sargento',
    category: 'Forças Armadas',
    paragraph:
      'A força aérea brasileira figura entre as 25 mais poderosas do mundo em 2025, segundo os rankings do World Directory of Modern Military Aircraft (WDMMA) e do Global Fire Power, com destaque absoluto na América Latina. As listas avaliam a...'
  },
  // Adicione mais objetos conforme necessário
]

export function categoryArticle(articles, containerId) {
  const container = document.getElementById(containerId)

  if (!container) {
    console.error(`Elemento com ID '${containerId}' não encontrado.`)
    return
  }

  const articleHTML = articles
    .map(
      (article) => `
      <article class="flex flex-col w-[720px] mb-10">
        <div class="flex flex-col justify-between gap-3">
          <div class="text-start">
            <h3 class="p-0 text-3xl font-bold text-slate-950 tracking-tighter">
              <a href="${article.link}">
                ${article.title}
              </a>
            </h3>
  
            <div class="flex flex-row justify-start items-center text-sm text-gray-500 space-x-7">
              <span>
                por
                <a href="https://www.sociedademilitar.com.br/author/smbr"
                   class="text-blue-600 font-semibold text-xs hover:underline uppercase">
                  Sociedade Militar
                </a>
              </span>
              <span>
                <a href="${article.link}">
                  ${article.date || 'Data não informada'}
                </a>
              </span>
            </div>
          </div>
  
          <div class="w-full relative items-end">
            <a href="${article.link}">
              <img
                fetchpriority="high"
                width="960"
                height="469"
                src="${article.imgSrc}"
                alt="${article.imgAlt || 'Imagem do artigo'}"
                decoding="async"
              />
              <div class="absolute top-0 left-2 uppercase bg-blue-600 text-white font-normal px-2 py-1 rounded mt-3">
                <p class="tracking-widest text-[10px]">${article.category}</p>
              </div>
            </a>
          </div>
  
          <div class="flex flex-col justify-start text-grayGelato text-lg font-normal opacity-70 space-y-5">
            <p>${article.paragraph}</p>
              <div class="flex max-w-24 h-10  rounded-sm border border-gray-300 justify-center text-center items-center
            text-gray-500 hover:bg-blue-700 hover:text-gray-100 transition duration-200 ease-in-out">
              <a class="uppercase text-xs font-semibold ">
                Ler mais
              <span class="sr-only"> detalhes</span>
              </a>    
            </div>
          </div>
        </div>
      </article>
    `
    )
    .join('')

  container.innerHTML = articleHTML
}