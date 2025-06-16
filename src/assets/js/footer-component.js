export function renderFooter(containerId) {
    const container = document.getElementById(containerId);
  
    if (!container) {
      console.error(`Elemento com ID '${containerId}' não encontrado.`);
      return;
    }
  
    container.innerHTML = `
      <div id="footer" class="text-gray-800 bg-white py-8">
          <div class="max-w-7xl mx-auto px-4">
            <div class="flex flex-wrap">
              <div class="w-full md:w-9/12 mb-6 md:mb-0">
                <ul class="flex flex-wrap space-x-4 text-sm">
                  <li>
                    <a href="https://www.sociedademilitar.com.br/sobre" class="hover:underline">Sobre nós</a>
                  </li>
                  <li>
                    <a href="https://www.sociedademilitar.com.br/contato" class="hover:underline">Contato</a>
                  </li>
                  <li>
                    <a href="https://www.sociedademilitar.com.br/anuncie" class="hover:underline">Anuncie</a>
                  </li>
                  <li>
                    <a href="https://www.sociedademilitar.com.br/privacidade" class="hover:underline">Política de Privacidade e Cookies</a>
                  </li>
                </ul>
              </div>
              <div class="w-full md:w-3/12">
                <div class="text-sm leading-relaxed text-end">
                  - Informações sobre artigos, denúncias, e erros: WhatsApp 21 96455 7653 (só WhatsApp / texto)<br>
                  - Contato comercial/publicidade/urgências: 21 98106 2723 e 
                  <a href="/cdn-cgi/l/email-protection" class="text-blue-400 hover:underline">[email&nbsp;protected]</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
  }
  