import { useState } from "react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { CgSweden } from "react-icons/cg";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  return (
    <div
      style={{ backgroundColor: "#232338" }}
      className="mt-auto text-white p-8 gradient-background"
    >
      <div>
        <h1 className="text-2xl font-bold pb-2">Mer än en webbyrrå</h1>
        <p>
          På webbyrån Wasabi Web har vi skapat tillväxt för ett brett urval av
          branscher, med hjälp av alltifrån webbproduktion och onlinestrategier
          till digital marknadsföring och grafisk design. Ring oss för ta ta
          första steget mot ROI.
        </p>
        <div>
          <button className="hover:text-purple-600 font-bold border-b-2 border-purple-600  underline-offset-8 my-8">
            Få kostnadsfritt offertförslag
          </button>
        </div>
        <button className="bg-black px-2  rounded flex flex-row items-center">
          <CgSweden />
          <p className="p-1">Svenska</p>
          <IoIosArrowDown />
        </button>
      </div>

      <div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          class="flex justify-between h-10 pt-8 w-full"
        >
          <h1 className="font-bold">Sidkarta</h1>
          {!isOpen ? <IoIosArrowDown size={20} /> : <IoIosArrowUp size={20} />}
        </button>
        <hr className="h-0.5 mt-8  bg-gray-500 opacity-50" />
        {isOpen && (
          <div class="mt-2 py-2  w-full text-white">
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
          class="flex justify-between h-10 pt-4 w-full"
        >
          <h1 className="font-bold">Produkter</h1>
          {!isSecondOpen ? (
            <IoIosArrowDown size={20} />
          ) : (
            <IoIosArrowUp size={20} />
          )}
        </button>
        <hr className="h-0.5 mt-4 bg-gray-500 opacity-50" />
        {isSecondOpen && (
          <div class="mt-2 py-2  w-full text-white">
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
      <div className="mt-8">
        <h1 className="mb-6 font-bold">Kontakta oss</h1>
        <p>Kungängsgatan 17</p>
        <p>753 22 Uppsala</p>
        <p>info@infoinfo.se</p>
      </div>
      <div className="mt-8">
        <h1 className="mb-6 font-bold">Ring oss</h1>
        <p className="font-bold text-2xl">018-700 80 10</p>
      </div>
      <hr className="h-0.5 mt-4 bg-gray-200 opacity-50" />
      <div className="mt-8">
        <h1 className="mb-4 font-bold">Följ oss</h1>
        <div className="flex flex-row">
          <FaFacebook size={25} style={{ color: "LightCoral" }} />
          <FaInstagram
            className="mx-3"
            size={25}
            style={{ color: "LightCoral" }}
          />
          <FaYoutube size={25} style={{ color: "LightCoral" }} />
          <FaLinkedin
            className="mx-3"
            size={25}
            style={{ color: "LightCoral" }}
          />
        </div>
      </div>
    </div>
  );
}
