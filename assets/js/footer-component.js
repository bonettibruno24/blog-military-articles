export function renderFooter(containerId) {
    const container = document.getElementById(containerId);
  
    if (!container) {
      console.error(`Elemento com ID '${containerId}' não encontrado.`);
      return;
    }
  
    container.innerHTML = `
    <div id="footer" class="text-gray-800 bg-white py-8">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex flex-col  lg:flex-row lg:justify-between lg:items-start space-y-6 ">
      
      <!-- Lista de links (horizontal) -->
      <div class="w-full lg:w-9/12 flex flex-col items-center">
        <ul class="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm mb-2">
          <li><a href="https://www.sociedademilitar.com.br/sobre" class="hover:underline">Sobre nós</a></li>
          <li><a href="https://www.sociedademilitar.com.br/contato" class="hover:underline">Contato</a></li>
          <li><a href="https://www.sociedademilitar.com.br/anuncie" class="hover:underline">Anuncie</a></li>
        </ul>

        <!-- Política de Privacidade (separada abaixo da lista) -->
        <div class="text-sm text-center">
          <a href="https://www.sociedademilitar.com.br/privacidade" class="hover:underline">Política de Privacidade e Cookies</a>
        </div>
      </div>

      <!-- Informações de contato -->
      <div class="w-full lg:w-3/12 text-sm leading-relaxed text-center lg:text-end">
        <p>- Informações sobre artigos, denúncias, e erros: WhatsApp 21 96455 7653 (só WhatsApp / texto)</p>
        <p>
          - Contato comercial/publicidade/urgências: 21 98106 2723 e
          <a href="/cdn-cgi/l/email-protection" class="text-blue-400 hover:underline">[email&nbsp;protected]</a>
        </p>
      </div>
    </div>
  </div>
</div>
    `;
  }
  