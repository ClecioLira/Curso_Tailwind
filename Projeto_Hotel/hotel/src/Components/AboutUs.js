import img from "../img/hotel.jpg";

const Featured = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto space-y-4 mb-5">
        <h2 className="text-2xl text-center font-semibold mb-3 pt-2">Sobre Nós</h2>
        <p className="px-3 md:max-w-xl mx-auto text-gray-700">
          Bem-vindo ao LOGO, sua plataforma confiável para encontrar e reservar
          os melhores hotéis ao redor do mundo. Com anos de experiência no
          mercado de hospedagem, nos orgulhamos em oferecer uma experiência
          simples, segura e eficiente para nossos clientes. Nosso objetivo é
          facilitar a sua viagem, proporcionando acomodações de qualidade que se
          adequam ao seu estilo e orçamento.
        </p>
        <p className="px-3 md:max-w-xl mx-auto text-gray-700">
          Nossa equipe está sempre pronta para ajudar, garantindo que você
          encontre a melhor opção de hospedagem. Seja uma viagem a trabalho ou
          lazer, estamos aqui para fazer a sua reserva com confiança e
          tranquilidade. Explore centenas de hotéis, leia avaliações de hóspedes
          e encontre o local ideal para sua próxima estadia.
        </p>
      </div>
      <div
        className="shadow-xl bg-no-repeat bg-cover"
        style={{ height: "340px", backgroundImage: `url(${img})` }}
      >
        <div className="container max-w-5xl h-full mx-auto px-4 flex flex-col items-center justify-center space-y-5">
          <div className="text-center space-y-2">
            <h1 className="text-white md:text-3xl max-sm:text-3xl">
              Onde você quer ir?
            </h1>
            <p className="text-white text-md font-semibold">
              Escolha o estado e cidade para achar os melhores resorts.
            </p>
          </div>

          <div>
            <form className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <select className="bg-gray-50 px-1 py-1 border border-gray-300 rounded-md text-gray-500">
                <option value="">Escolha o estado</option>
              </select>

              <select className="bg-gray-50 border px-1 py-1 border-gray-300 rounded-md text-gray-500">
                <option value="">Escolha a cidade</option>
              </select>

              <button className="text-yellow-500 bg-yellow-900 font-medium px-3 py-2 inline-flex items-center justify-center rounded-md hover:scale-105 duration-150 col-span-2 lg:col-span-1">
                Pesquisar resorts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
