import { useState } from "react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  return (
    <div className="bg-violet-950 text-white p-8">
      <div>
        <h1 className="text-2xl font-bold pb-2">Mer än en webbyrrå</h1>
        <p>
          På webbyrån Wasabi Web har vi skapat tillväxt för ett brett urval av
          branscher, med hjälp av alltifrån webbproduktion och onlinestrategier
          till digital marknadsföring och grafisk design. Ring oss för ta ta
          första steget mot ROI.
        </p>
        <button>Få kostnadsfritt offertförslag</button>
      </div>

      <div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          class="flex justify-between h-10 pt-8 w-full"
        >
          <p>Sidkarta</p>
          {!isOpen ? <IoIosArrowDown size={20} /> : <IoIosArrowUp size={20} />}
        </button>
        <hr className="h-0 mt-8 bg-gray-500" />
        {isOpen && (
          <div class="mt-2 py-2  w-full bg-violet-950 text-white rounded-lg shadow-xl">
            <button class="block py-2  hover:text-rose-700">
              Webbyrå i Stockholm
            </button>
            <button class="block py-2  hover:text-rose-700">
              Om den digitala byrån
            </button>
            <button class="block py-2  hover:text-rose-700">
              Hur går det till?
            </button>
            <button class="block py-2  hover:text-rose-700">
              Webbyrå i Stockholm
            </button>
            <button class="block py-2  hover:text-rose-700">
              Utvalda projekt
            </button>
            <button class="block  py-2  hover:text-rose-700">Kundcase</button>
            <button class="block py-2  hover:text-rose-700">Nyheter</button>
            <button class="block py-2  hover:text-rose-700">Karriär</button>
            <button class="block py-2  hover:text-rose-700">Intranät</button>
            <button class="block py-2  hover:text-rose-700">Kontakt</button>
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => setIsSecondOpen((prev) => !prev)}
          class="flex justify-between h-10 pt-8 w-full"
        >
          <p>Produkter</p>
          {!isSecondOpen ? (
            <IoIosArrowDown size={20} />
          ) : (
            <IoIosArrowUp size={20} />
          )}
        </button>
        <hr className="h-0 mt-8 bg-gray-500" />
        {isSecondOpen && (
          <div class="mt-2 py-2  w-full bg-violet-950 text-white rounded-lg shadow-xl">
            <button class="block py-2  hover:text-rose-700">
              Webbyrå i Stockholm
            </button>
            <button class="block py-2  hover:text-rose-700">
              Om den digitala byrån
            </button>
            <button class="block py-2  hover:text-rose-700">
              Hur går det till?
            </button>
            <button class="block py-2  hover:text-rose-700">
              Webbyrå i Stockholm
            </button>
            <button class="block py-2  hover:text-rose-700">
              Utvalda projekt
            </button>
            <button class="block  py-2  hover:text-rose-700">Kundcase</button>
            <button class="block py-2  hover:text-rose-700">Nyheter</button>
            <button class="block py-2  hover:text-rose-700">Karriär</button>
            <button class="block py-2  hover:text-rose-700">Intranät</button>
            <button class="block py-2  hover:text-rose-700">Kontakt</button>
          </div>
        )}
      </div>
    </div>
  );
}
