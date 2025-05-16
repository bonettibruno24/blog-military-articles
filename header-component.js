export function renderHeader(containerId) {
    const container = document.getElementById(containerId);
  
    if (!container) {
      console.error(`Elemento com ID '${containerId}' não encontrado.`);
      return;
    }
  
    container.innerHTML = `
      <header>
        <div class="w-full bg-white">
          <div class="flex items-center justify-between">
            <div class="flex w-full justify-center">
              <a
                href="https://www.sociedademilitar.com.br/"
                aria-label="Visit Homepage"
                class="block"
              >
                <img
                  src="https://www.sociedademilitar.com.br/wp-content/uploads/2025/02/logo-azul-escuro-sociedade-militar.webp"
                  srcset="
                    https://www.sociedademilitar.com.br/wp-content/uploads/2025/02/logo-azul-escuro-sociedade-militar.webp 1x,
                    https://www.sociedademilitar.com.br/wp-content/uploads/2025/02/logo-azul-escuro-sociedade-militar.webp 2x
                  "
                  alt="RSM - Revista Sociedade Militar"
                />
              </a>
            </div>
          </div>
        </div>
      </header>
  
      <div class="w-full bg-white shadow">
        <div class="bg-gray-900 text-white shadow-md">
          <div class="w-[1150px] mx-auto px-4">
            <div class="flex items-center justify-between py-3">
              <div class="flex-1 flex justify-start">
                <a
                  href="#"
                  aria-label="Show Menu"
                  class="flex flex-col gap-1"
                >
                  <span class="block w-6 h-0.5 bg-white"></span>
                  <span class="block w-6 h-0.5 bg-white"></span>
                  <span class="block w-6 h-0.5 bg-white"></span>
                </a>
              </div>
              <div class="flex-1 flex justify-center"></div>
              <div class="flex justify-end p-4 font-roboto font-extrabold">
                <ul class="flex text-sm space-x-4 tracking-tighter">
                  <li>
                    <a
                      href="https://www.sociedademilitar.com.br/aovivo"
                      class="px-2 py-1 bg-red-600 text-white rounded"
                    >
                      AO VIVO
                    </a>
                  </li>
                  <li><a href="https://www.sociedademilitar.com.br/militares-forcas-armadas-seguranca-publica-defesa-e-geopolitica" class="hover:text-gray-300">Página Inicial</a></li>
                  <li><a href="https://www.sociedademilitar.com.br/ultimas-noticias" class="hover:text-gray-300">Últimas Notícias</a></li>
                  <li><a href="https://www.sociedademilitar.com.br/category/forcas-armadas-policia" class="hover:text-gray-300">Forças Armadas</a></li>
                  <li><a href="https://www.sociedademilitar.com.br/category/c34-geopolitica-internacional-defesa-etc" class="hover:text-gray-300">Defesa e Segurança</a></li>
                  <li><a href="https://www.sociedademilitar.com.br/category/setores-estrategicos" class="hover:text-gray-300">Setores Estratégicos</a></li>
                  <li><a href="https://www.sociedademilitar.com.br/category/concursos" class="hover:text-gray-300">Concursos e Cursos</a></li>
                  <li><a href="https://www.sociedademilitar.com.br/category/gente-militar-familia" class="hover:text-gray-300">Gente e Cultura</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  