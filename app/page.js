"use client";

import Center from "@/components/Center";
import airpodsGif from "../public/apple-airpods-pro.gif";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [addToFav, setAddToFav] = useState(false);

  const handleClick = () => {
    setAddToFav((prev) => !prev);
  };

  const favourite =
    "w-6 h-6 fill-red-500 absolute top-32 right-1 sm:top-0 sm:right-3 bg-red-500 scale-75";
  const notFavourite =
    "w-6 h-6 text-[#5b5a5a] absolute top-32 right-1 sm:top-0 sm:right-3 hover:scale-75";

  return (
    <Center>
      <div
        className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-20 py-5 px-3
       bg-[#f3f1f1] rounded-lg shadow-md relative '
      >
        <div className='mx-auto'>
          <Image
            src={airpodsGif}
            alt='airpods'
            height='350'
            width='350'
            className='object-contain bg-center rounded-xl shadow-md'
          />
        </div>
        <div className='flex flex-col justify-center items-center relative sm:items-start'>
          <h1 className='text-[#272626] text-[40px] font-bold'>
            Apple Airpods
          </h1>
          <p className='text-[#636161] mt-2 w-[300px] text-center sm:text-left'>
            AirPods deliver an unparalleled wireless headphone experience, from
            magical setup to high-quality sound.
          </p>

          <div className='absolute top-1 right-2'>
            <p
              className={
                addToFav
                  ? "hidden text-[12px] bg-red-400 rounded-lg text-red-700 absolute bottom-2 p-1 right-0 sm:block"
                  : "hidden"
              }
            >
              Added!
            </p>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              onClick={() => setAddToFav((prev) => !prev)}
              className={
                addToFav
                  ? "w-6 h-6 fill-red-500 -translate-y-1 text-red-500 absolute right-1 top-[125px] sm:right-3 sm:top-0 scale-105 transform transition ease-out delay-150 duration-200"
                  : "w-6 h-6 right-1 absolute top-[120px] text-[#676666] sm:right-3 sm:top-0"
              }
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
              />
            </svg>
          </div>
        </div>
      </div>
    </Center>
  );
}
