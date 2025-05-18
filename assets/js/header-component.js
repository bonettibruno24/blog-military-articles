export function renderHeader(containerId) {
    const container = document.getElementById(containerId);
  
    if (!container) {
      console.error(`Elemento com ID '${containerId}' não encontrado.`);
      return;
    }
  
    container.innerHTML = `
      <header>
        <div class="w-full lg:max-h-32 hidden lg:justify-center lg:items-center lg:flex bg-white">
          <div class="flex items-center justify-between">
            <div class="flex w-full ">
              <a
                href="https://www.sociedademilitar.com.br/"
                aria-label="Visit Homepage"
                
              >
                <img 
                  class="h-28 "
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

      <div class="w-full hi bg-white shadow flex items-center">
        <div class="bg-gray-900 lg:flex w-full text-white lg:justify-center lg:items-center shadow-md p-2">
            <div class="flex flex-row lg:w-[1150px] md:flex-row items-center py-1 gap-20">
                <div class="flex justify  font-semibold-center md:justify-start w-full md:w-auto">
                <a href="#" aria-label="Show Menu" class="flex flex-col gap-1">
                  <span class="block w-6 h-0.5 bg-white"></span>
                  <span class="block w-6 h-0.5 bg-white"></span>
                  <span class="block w-6 h-0.5 bg-white"></span>
                </a>
              </div>
        
              <!-- Logo Mobile -->
              <div class="flex justify-center w-full lg:w-auto lg:hidden">
                <img
                  class="max-w-[100px] h-auto"
                  src="https://www.sociedademilitar.com.br/wp-content/uploads/2025/02/logo-branco-fundo-azul-sociedade-militar-25.png"
                  alt="Logo Sociedade Militar"
                />
              </div>
        
              <!-- Ícone de busca -->
              <div class="flex lg:justify-end w-full md:w-auto lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                  />
                </svg>
              </div>
              <div class="hidden lg:flex p-2 font-roboto font-extrabold">
                <ul class="lg:justify-center text-sm space-x-4 tracking-tighter hidden md:flex">
                  <li>
                    <a
                      href="https://www.sociedademilitar.com.br/aovivo"
                      class="px-2 py-1 bg-red-600 text-white rounded"
                    >
                      AO VIVO
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sociedademilitar.com.br/militares-forcas-armadas-seguranca-publica-defesa-e-geopolitica"
                      class="hover:text-gray-300"
                      >Página Inicial</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.sociedademilitar.com.br/ultimas-noticias"
                      class="hover:text-gray-300"
                      >Últimas Notícias</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.sociedademilitar.com.br/category/forcas-armadas-policia"
                      class="hover:text-gray-300"
                      >Forças Armadas</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.sociedademilitar.com.br/category/c34-geopolitica-internacional-defesa-etc"
                      class="hover:text-gray-300"
                      >Defesa e Segurança</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.sociedademilitar.com.br/category/setores-estrategicos"
                      class="hover:text-gray-300"
                      >Setores Estratégicos</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.sociedademilitar.com.br/category/concursos"
                      class="hover:text-gray-300"
                      >Concursos e Cursos</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.sociedademilitar.com.br/category/gente-militar-familia"
                      class="hover:text-gray-300"
                      >Gente e Cultura</a
                    >
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    `;
  }
  