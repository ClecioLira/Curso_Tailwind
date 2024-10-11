import React from "react";

const Form = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 flex justify-center">
        <form className="space-x-4">
          <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded-md text-gray-500">
            <option value="">Escolha o estado</option>
          </select>

          <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded-md text-gray-500">
            <option value="">Escolha a cidade</option>
          </select>

          <button className="text-yellow-500 bg-yellow-900 font-medium px-3 py-2 inline-flex items-center rounded-md hover:scale-105 duration-150">
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
  );
};

export default Form;
