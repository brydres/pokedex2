"use client";
import React from "react";
import Link from "next/link";
import Pokedex from "@/public/pokedex.webp";
import Image from "next/image";

async function getData(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
}
async function page({ params }) {
  const data = await getData(params.id);
  /* console.log(data);
  console.log(typeof (data.types[0].type.name)) */
  //color de fondo
  function cambioColor(tipo) {
    const colorBg = [
      "bg-[#A4ACAF]",
      "bg-[#D56723]",
      "bg-[#3DC6EF]",
      "bg-[#B97FC9]",
      "bg-[#AB9842]",
      "bg-[#A38C21]",
      "bg-[#729F3F]",
      "bg-[#7B62A3]",
      "bg-[#9EB7B8]",
      "bg-[#FD7D24]",
      "bg-[#4592C4]",
      "bg-[#9BCC50]",
      "bg-[#EED535]",
      "bg-[#F366B9]",
      "bg-[#51C4E7]",
      "bg-[#F16E57]",
      "bg-[#707070]",
      "bg-[#FDB9E9]",
    ];
    let index = 0;
    if (tipo === "normal") {
      index += 0;
    } else if (tipo === "fighting") {
      index += 1;
    } else if (tipo === "flying") {
      index += 2;
    } else if (tipo === "poison") {
      index += 3;
    } else if (tipo === "ground") {
      index += 4;
    } else if (tipo === "rock") {
      index += 5;
    } else if (tipo === "bug") {
      index += 6;
    } else if (tipo === "ghost") {
      index += 7;
    } else if (tipo === "steel") {
      index += 8;
    } else if (tipo === "fire") {
      index += 9;
    } else if (tipo === "water") {
      index += 10;
    } else if (tipo === "grass") {
      index += 11;
    } else if (tipo === "electric") {
      index += 12;
    } else if (tipo === "psychic") {
      index += 13;
    } else if (tipo === "ice") {
      index += 14;
    } else if (tipo === "dragon") {
      index += 15;
    } else if (tipo === "dark") {
      index += 16;
    } else if (tipo === "fairy") {
      index += 17;
    } else {
      index += 18;
    }
    /* console.log(index) */
    return colorBg[index];
  }
  const bgColor = cambioColor(data.types[0].type.name);

  return (
    <div className="flex flex-col justify-center items-center h-1/2 ">
      <div className=" flex justify-center items-center bg-red-600 h-16 text-white font-bold text-2xl rounded-3xl px-6 border-black border-2 m-5">
        <Link href={`/`}>VER OTROS POKEMONS</Link>
      </div>
      <div className="border-solid border-4 border-black rounded-3xl object-contain p-4 bg-gray-900">
        <div className={bgColor}>
          <div className="flex justify-center items-center">
            <img
              className=" w-[400px]"
              src={data.sprites.other.home.front_default}
              alt="Front"
            />
          </div>
          <div className=" w-full h-1/2">
            <div className=" w-full bg-white flex flex-col justify-center items-center rounded-t-3xl h-1/3 p-3">
              <div className=" m-4 ">
                <h1 className=" text-3xl font-bold"> {data.name}</h1>
              </div>
              <div className=" flex flex-col md:flex-row justify-center items-center w-[80%] flex-wrap bg-slate-200 p-5 rounded-3xl">
                <div className=" flex flex-col justify-center items-center w-2/5">
                  <p className=" text-lg font-bold text-center">
                    Base experience
                  </p>
                  <p className=" font-semibold text-stone-500">
                    {data.base_experience}
                  </p>
                </div>
                <div className=" flex flex-col justify-center items-center w-2/5">
                  <p className=" text-lg font-bold text-center">Type</p>
                  <p className=" font-semibold text-stone-500">
                    {data.types[0].type.name}
                  </p>
                </div>
                <div className=" flex flex-col justify-center items-center w-2/5">
                  <p className=" text-lg font-bold text-center">
                    {data.stats[0].stat.name}
                  </p>
                  <p className=" font-semibold text-stone-500">
                    {data.stats[0].base_stat}
                  </p>
                </div>
                <div className=" flex flex-col justify-center items-center w-2/5">
                  <p className=" text-lg font-bold text-center">
                    {data.stats[1].stat.name}
                  </p>
                  <p className=" font-semibold text-stone-500">
                    {data.stats[1].base_stat}
                  </p>
                </div>
                <div className=" flex flex-col justify-center items-center w-2/5">
                  <p className=" text-lg font-bold text-center">
                    {data.stats[2].stat.name}
                  </p>
                  <p className=" font-semibold text-stone-500">
                    {data.stats[2].base_stat}
                  </p>
                </div>
                <div className=" flex flex-col justify-center items-center w-2/5">
                  <p className=" text-lg font-bold text-center">
                    {data.stats[3].stat.name}
                  </p>
                  <p className=" font-semibold text-stone-500">
                    {data.stats[3].base_stat}
                  </p>
                </div>
                <div className=" flex flex-col justify-center items-center w-2/5">
                  <p className=" text-lg font-bold text-center">
                    {data.stats[4].stat.name}
                  </p>
                  <p className=" font-semibold text-stone-500">
                    {data.stats[4].base_stat}
                  </p>
                </div>
                <div className=" flex flex-col justify-center items-center w-2/5">
                  <p className=" text-lg font-bold text-center">
                    {data.stats[5].stat.name}
                  </p>
                  <p className=" font-semibold text-stone-500">
                    {data.stats[5].base_stat}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default page;
