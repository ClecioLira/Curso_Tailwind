import hotel1 from "../img/hotel1.jpg";
import hotel2 from "../img/hotel2.jpg";
import hotel3 from "../img/hotel3.jpg";
import hotel4 from "../img/hotel4.jpg";

const Resorts = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div>
          <h3 className="text-2xl text-gray-700 text-center mb-8">
            Conheça mais resorts
          </h3>

          <div className="grid grid-cols-4 grid-rows-2 gap-6">
            <div className="relative col-span-2 row-span-2">
              <div className="cursor-pointer hover:underline absolute bottom-0 pl-4 pb-4 text-white font-bold">
                Lorem ipsum
              </div>
              <img
                src={`${hotel1}`}
                className="rounded-md overflow-hidden shadow-inner w-full h-full object-cover"
              ></img>
            </div>

            <div className="relative col-span-2 h-40">
              <div className="cursor-pointer hover:underline absolute bottom-0 pl-4 pb-4 text-white font-bold">
                Lorem ipsum
              </div>
              <img
                className="rounded-md overflow-hidden w-full h-full object-cover"
                src={`${hotel2}`}
              ></img>
            </div>

            <div className="relative h-40">
              <div className="cursor-pointer hover:underline absolute bottom-0 pl-4 pb-4 text-white font-bold">
                Lorem ipsum
              </div>
              <img
                className="rounded-md overflow-hidden w-full h-full object-cover"
                src={`${hotel3}`}
              ></img>
            </div>

            <div className="relative h-40">
              <div className="cursor-pointer hover:underline absolute bottom-0 pl-4 pb-4 text-white font-bold">
                Lorem ipsum
              </div>
              <img
                className="rounded-md overflow-hidden w-full h-full object-cover"
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
