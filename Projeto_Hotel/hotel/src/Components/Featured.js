import hotel1 from "../img/hotel1.jpg";

const Featured = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-10">
        <div className="flex space-x-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-600">
              RESORT EM DESTAQUE
            </p>

            <h2 className="text-2xl ">Lorem ipsum</h2>

            <p className="text-sm font-medium text-gray-600">
              Hotel qualidade 5 estrelas.
            </p>

            <p className="text-sm font-medium text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              doloremque corporis, tenetur ducimus doloribus ad esse ullam
              adipisci, sapiente ea reprehenderit numquam laboriosam nulla enim
              laudantium! Reprehenderit ea repellendus incidunt.
            </p>

            <p className="text-sm font-medium text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              doloremque corporis, tenetur ducimus doloribus ad esse ullam
              adipisci.
            </p>

            <button className="text-yellow-900 bg-yellow-500 font-medium px-3 py-1 inline-flex items-center rounded-md hover:scale-105 duration-150">
              Solicitar reserva
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex-shrink-0 ml-auto">
            <img width="450px" src={`${hotel1}`}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
