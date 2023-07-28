"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Loading() {
  return (
    <svg
      xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="spinner"
      x="0px"
      y="0px"
      width="100px"
      height="100px"
      viewBox="0 0 864 864"
    >
      <circle fillRule="evenodd" cx="447.178" cy="447.632" r="348.003" />
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#FFFFFF"
          d="M573.713,473.543c-11.995,58.904-64.089,103.231-126.535,103.231 c-62.447,0-114.54-44.327-126.535-103.231H141.169c13.155,157.485,145.125,281.202,306.008,281.202 c160.884,0,292.855-123.717,306.011-281.202H573.713z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#FFFFFF"
          d="M447.178,357.277c-49.904,0-90.36,40.456-90.36,90.362   c0,49.904,40.456,90.361,90.36,90.361c49.906,0,90.361-40.457,90.361-90.361C537.539,397.733,497.084,357.277,447.178,357.277z    M447.179,492.218c-24.621,0-44.579-19.958-44.579-44.578c0-24.621,19.958-44.579,44.579-44.579   c24.62,0,44.578,19.958,44.578,44.579C491.757,472.26,471.799,492.218,447.179,492.218z"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#ED1C24"
        d="M447.178,318.504c62.446,0,114.54,44.327,126.535,103.232h179.475  c-13.155-157.485-145.127-281.203-306.011-281.203c-160.882,0-292.852,123.718-306.008,281.203h179.474  C332.638,362.831,384.73,318.504,447.178,318.504z"
      />
    </svg>
  );
}

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

function CardPokemon({ url }) {
  const [poke, setPoke] = useState(true);
  const [dataPokemon, setDataPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getData(url);
      setDataPokemon(pokemonData);
      setPoke(false);
    };

    fetchData();
  }, [url]);

  if (poke) {
    return (
      <div className=" rounded-2xl border border-black border-solid p-2 bg-slate-900">
        <div>
          <div className=" flex flex-row w-[400px] items-center justify-center">
            <div className="flex flex-col w-1/3 ">
              <h1 className=" text-xl font-bold text-white">Cargando ...</h1>
              <p className=" text-2xl font-medium text-white">Cargando ...</p>
            </div>
            <div className=" gap-1 flex">
              <div className=" animate-spin">{<Loading />}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const imagePokemon = dataPokemon.sprites.other.home.front_default;
  const tipo = dataPokemon.types[0].type.name;

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
  const bgColor = cambioColor(dataPokemon.types[0].type.name);

  return (
    <Link href={`info/${dataPokemon.id}`}>
      <div className=" rounded-2xl border border-black border-solid p-2 bg-slate-900">
        <div className={bgColor}>
          <div className=" flex flex-row w-[400px] items-center justify-center">
            <div className="flex flex-col w-1/3 ">
              <h1 className=" text-xl font-bold text-white">
                {dataPokemon.name}
              </h1>
              <p className=" text-2xl font-medium text-white">{tipo}</p>
            </div>
            <div className=" gap-1 flex">
              <div className={bgColor}>
                <img
                  src={imagePokemon}
                  alt="imagen de pokemon"
                  className=" w-[200px] h-[200px] rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardPokemon;
