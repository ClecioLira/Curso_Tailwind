import img from "../img/hotel.jpg";

const Banner = () => {
  return (
    <div className="shadow-xl bg-no-repeat bg-cover" style={{ height: "340px", backgroundImage: `url(${img})` }}>
      <div className="container max-w-5xl h-full mx-auto px-4 flex flex-col items-center justify-center space-y-5">
        <div className="text-center space-y-2">
          <h1 className="text-white md:text-3xl max-sm:text-3xl">Onde você quer ir?</h1>
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
  );
};

export default Banner;
