import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
      <p className="text-sm uppercase text-gray-400">Portfolio</p>
      <h1 className=" text-6xl font-bold text-center">
        All Projects
      </h1>
      <div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
        <div className="rounded w-80 h-60 shadow-xl relative grayscale hover:grayscale-0">
          <Image
            src={"/project3.jpg"}
            alt="3"
            layout="fill"
            objectFit="cover"
            className="p-2 rounded cursor-pointer"
          />
        </div>
        <div className="rounded w-80 h-60 shadow-xl relative grayscale hover:grayscale-0">
          <Image
            src={"/project 2.jpg"}
            alt="2"
            layout="fill"
            objectFit="cover"
            className="p-2 rounded cursor-pointer"
          />
        </div>
        
        <div className="rounded w-80 h-60 shadow-xl relative grayscale hover:grayscale-0">
          <Image
            src={"/project4.avif"}
            alt="4"
            layout="fill"
            objectFit="cover"
            className="p-2 rounded cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
