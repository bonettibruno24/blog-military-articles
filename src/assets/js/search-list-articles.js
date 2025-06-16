export const searchArticles = [
    {
      href: 'https://www.sociedademilitar.com.br/2025/05/a-debandada...',
      imgSrc: 'https://www.sociedademilitar.com.br/wp-content/uploads/2025/05/Oficiais-Superiores-pedem-baixa-das-Forcas-Armadas-debandada-chega-nos-altos-escaloes-350x250.png',
      title: 'A debandada de militares chegou aos oficiais superiores: Majores e Capitães de Corveta pedem baixa das Forças Armadas',
      author: 'Sociedade Militar',
      authorHref: 'https://www.sociedademilitar.com.br/author/smbr',
      date: '15/05/2025',
      paragraph: 'A debandada de militares das Forças Armadas parece escalar na mesma medida em que o governo insiste em manter seu ...'
    },
    {
      href: 'https://www.sociedademilitar.com.br/2025/05/exemplo-artigo-2',
      imgSrc: 'https://www.sociedademilitar.com.br/wp-content/uploads/2025/05/a-photograph-of-a-tense-military-operati_R0rTtH09QzijNym3Aomc_A_U_zO4QzWREuisgs-k1C46w-350x250.jpeg',
      title: 'Operação Roca: Argentina desafia fronteiras, mobiliza 10 Mil militares e envia Forças Armadas para Brasil, Paraguai e Bolívia, ação surpreendente e sem aviso prévio aos países vizinhos',
      author: 'Repórter Especial',
      authorHref: 'https://www.sociedademilitar.com.br/author/especial',
      date: '14/05/2025',
      paragraph: 'Este é um resumo de outro artigo importante que discute o papel dos militares em tempos de crise...'
    },
    {
      href: 'https://www.sociedademilitar.com.br/2025/05/exemplo-artigo-2',
      imgSrc: 'https://www.sociedademilitar.com.br/wp-content/uploads/2025/05/a-hyper-realistic-digital-illustration-d_tgsyhpWzRAqQ88PpW5UtDQ_6mhcO-ULTfCS31UmmLjWig-350x250.jpeg',
      title: 'Do futuro para o campo de batalha: torre com IA, sensores térmicos e canhão remoto transforma o blindado brasileiro Guarani em uma máquina de guerra inteligente',
      author: 'Repórter Especial',
      authorHref: 'https://www.sociedademilitar.com.br/author/especial',
      date: '14/05/2025',
      paragraph: 'Este é um resumo de outro artigo importante que discute o papel dos militares em tempos de crise...'
    },
    {
      href: 'https://www.sociedademilitar.com.br/2025/05/exemplo-artigo-2',
      imgSrc: 'https://www.sociedademilitar.com.br/wp-content/uploads/2025/05/a-photograph-of-a-tense-military-operati_R0rTtH09QzijNym3Aomc_A_U_zO4QzWREuisgs-k1C46w-350x250.jpeg',
      title: 'Operação Roca: Argentina desafia fronteiras, mobiliza 10 Mil militares e envia Forças Armadas para Brasil, Paraguai e Bolívia, ação surpreendente e sem aviso prévio aos países vizinhos',
      author: 'Repórter Especial',
      authorHref: 'https://www.sociedademilitar.com.br/author/especial',
      date: '14/05/2025',
      paragraph: 'Este é um resumo de outro artigo importante que discute o papel dos militares em tempos de crise...'
    },
    {
      href: 'https://www.sociedademilitar.com.br/2025/05/exemplo-artigo-2',
      imgSrc: 'https://www.sociedademilitar.com.br/wp-content/uploads/2025/05/a-hyper-realistic-digital-illustration-d_tgsyhpWzRAqQ88PpW5UtDQ_6mhcO-ULTfCS31UmmLjWig-350x250.jpeg',
      title: 'Do futuro para o campo de batalha: torre com IA, sensores térmicos e canhão remoto transforma o blindado brasileiro Guarani em uma máquina de guerra inteligente',
      author: 'Repórter Especial',
      authorHref: 'https://www.sociedademilitar.com.br/author/especial',
      date: '14/05/2025',
      paragraph: 'Este é um resumo de outro artigo importante que discute o papel dos militares em tempos de crise...'
    },
    {
      href: 'https://www.sociedademilitar.com.br/2025/05/exemplo-artigo-2',
      imgSrc: 'https://www.sociedademilitar.com.br/wp-content/uploads/2025/05/a-photograph-of-a-tense-military-operati_R0rTtH09QzijNym3Aomc_A_U_zO4QzWREuisgs-k1C46w-350x250.jpeg',
      title: 'Operação Roca: Argentina desafia fronteiras, mobiliza 10 Mil militares e envia Forças Armadas para Brasil, Paraguai e Bolívia, ação surpreendente e sem aviso prévio aos países vizinhos',
      author: 'Repórter Especial',
      authorHref: 'https://www.sociedademilitar.com.br/author/especial',
      date: '14/05/2025',
      paragraph: 'Este é um resumo de outro artigo importante que discute o papel dos militares em tempos de crise...'
    },
    {
      href: 'https://www.sociedademilitar.com.br/2025/05/exemplo-artigo-2',
      imgSrc: 'https://www.sociedademilitar.com.br/wp-content/uploads/2025/05/a-hyper-realistic-digital-illustration-d_tgsyhpWzRAqQ88PpW5UtDQ_6mhcO-ULTfCS31UmmLjWig-350x250.jpeg',
      title: 'Do futuro para o campo de batalha: torre com IA, sensores térmicos e canhão remoto transforma o blindado brasileiro Guarani em uma máquina de guerra inteligente',
      author: 'Repórter Especial',
      authorHref: 'https://www.sociedademilitar.com.br/author/especial',
      date: '14/05/2025',
      paragraph: 'Este é um resumo de outro artigo importante que discute o papel dos militares em tempos de crise...'
    }
    
  ];

export function searchListArticles(articles, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Elemento com ID '${containerId}' não encontrado.`);
      return;
    }
  
    const html = articles.map(article => `
      <article class="flex w-[720px] flex-col md:flex-row gap-4 border-b border-gray-200 pb-4 mb-6">
        <div class="w-full md:w-1/3">
          <a href="${article.href}" aria-label="Leia o artigo">
            <img
              src="${article.imgSrc}"
              alt="${article.title}"
              class="w-full h-auto object-cover"
              loading="lazy"
              width="350"
              height="250"
            />
          </a>
        </div>
        <div class="w-full md:w-2/3 flex flex-col">
          <h3 class="text-xl font-bold text-slate-900 leading-snug hover:text-blue-600 transition">
            <a href="${article.href}">${article.title}</a>
          </h3>
          <div class="flex flex-wrap text-sm text-gray-500 space-x-6 uppercase mt-2">
            <span>
              por 
              <a href="${article.authorHref}" class="font-medium hover:underline text-blue-600">${article.author}</a>
            </span>
            <span>
              <a href="${article.href}" class="flex items-center gap-1">
                <i class="fa fa-clock-o"></i> ${article.date}
              </a>
            </span>
          </div>
          <p class="mt-3 text-black text-base opacity-80 tracking-wide">${article.paragraph}</p>
        </div>
      </article>    
    `).join('');
  
    container.innerHTML = html;
  }
  