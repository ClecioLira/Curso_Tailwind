import hotel1 from "../img/hotel1.jpg";
import hotel2 from "../img/hotel2.jpg";
import hotel3 from "../img/hotel3.jpg";
import hotel4 from "../img/hotel4.jpg";

const Resorts = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto xl:max-w-5xl lg:max-w-4xl px-2">
        <div>
          <h3 className="text-2xl text-gray-700 text-center pt-5 mb-5">
            Conheça mais resorts
          </h3>

          <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-2 gap-3 pb-5">

            <div className="relative row-span-1 h-28 xl:col-span-2 xl:row-span-2 xl:h-full md:h-40 hover:scale-y-105 duration-150">

              <div className="cursor-pointer hover:underline absolute bottom-0 pl-4 pb-4 text-white font-bold">
                Lorem ipsum
              </div>
              <img
                src={`${hotel1}`}
                className="rounded-md overflow-hidden shadow-inner w-full h-full object-cover shadow-md shadow-gray-700"
              ></img>
            </div>

            <div className="relative row-span-1 h-28 md:h-40 xl:col-span-2 hover:scale-y-105 duration-150">
              <div className="cursor-pointer hover:underline absolute bottom-0 pl-4 pb-4 text-white font-bold">
                Lorem ipsum
              </div>
              <img
                className="rounded-md overflow-hidden w-full h-full object-cover shadow-md shadow-gray-700"
                src={`${hotel2}`}
              ></img>
            </div>

            <div className="relative row-span-1 h-28 md:h-40 hover:scale-y-105 duration-150">
              <div className="cursor-pointer hover:underline absolute bottom-0 pl-4 pb-4 text-white font-bold">
                Lorem ipsum
              </div>
              <img
                className="rounded-md overflow-hidden w-full h-full object-cover shadow-md shadow-gray-700"
                src={`${hotel3}`}
              ></img>
            </div>

            <div className="relative row-span-1 h-28 md:h-40 hover:scale-y-105 duration-150">
              <div className="cursor-pointer hover:underline absolute bottom-0 pl-4 pb-4 text-white font-bold">
                Lorem ipsum
              </div>
              <img
                className="rounded-md overflow-hidden w-full h-full object-cover shadow-md shadow-gray-700"
                src={`${hotel4}`}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resorts;
