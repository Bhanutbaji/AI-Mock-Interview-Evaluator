"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const First = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#F9F7F2] border border-black shadow-lg flex flex-col items-center px-4 md:px-12">
      {/* Navigation Bar */}
      <div className="w-full max-w-[1208px] h-[85px] mt-6 bg-white border border-black shadow-md rounded-full flex items-center justify-between px-6 md:px-10">
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={42} height={42} />
          <h1 className="ml-2 text-lg md:text-2xl font-Antic text-transparent bg-gradient-to-r from-[#D28066] via-[#5E3D22] to-[#2B1C0F] bg-clip-text">
            Oraculum
          </h1>
        </div>
        <nav className="flex gap-6 md:gap-10">
          {["Home", "About", "Features", "Contact us"].map((item, index) => (
            <Link key={index} href={`#${item.toLowerCase()}`}>
              <p className="text-sm md:text-lg font-Antic text-transparent bg-gradient-to-r from-[#D28066] via-[#5E3D22] to-[#2B1C0F] bg-clip-text cursor-pointer">
                {item}
              </p>
            </Link>
          ))}
        </nav>
      </div>
      <div className="absolute top-[25%] left-0 w-full h-14 bg-gradient-to-r from-[#EFEBE2] via-[#DAAF88] to-[#6C3E18] opacity-40"></div>
      <div className="absolute top-[40%] left-0 w-full h-14 bg-gradient-to-r from-[#EFEBE2] via-[#DAAF88] to-[#6C3E18] opacity-30"></div>
      <div className="absolute top-[55%] left-0 w-full h-14 bg-gradient-to-r from-[#EFEBE2] via-[#DAAF88] to-[#6C3E18] opacity-20"></div>
      <div className="absolute top-[70%] left-0 w-full h-14 bg-gradient-to-r from-[#EFEBE2] via-[#DAAF88] to-[#6C3E18] opacity-10"></div>
      <div className="absolute top-[85%] right-0 w-1/2 h-14 bg-gradient-to-r from-[#EFEBE2] via-[#DAAF88] to-[#6C3E18] opacity-10"></div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-16">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-4xl md:text-6xl font-Antic text-[#4C2E15] drop-shadow-md leading-tight">
            CONFIDENCE THROUGH <br /> PRACTICE
          </h2>
          <p className="mt-4 text-lg md:text-xl font-Antic text-[#6C3E18]">
            Train with AI, refine your responses, and <br /> build confidence for your next <br /> interview.
          </p>
          {/* Login Button */}
          <div className="w-full flex justify-center">
  <div className="mt-8 w-48 md:w-64 h-12 md:h-16 bg-gradient-to-r from-[#EFEBE2] via-[#DAAF88] to-[#6C3E18] shadow-lg flex justify-center items-center rounded-md cursor-pointer">
    <p className="text-lg md:text-2xl font-Antic text-white shadow-md">Login</p>
  </div>
</div>
        </div>

        {/* Right Side: Image */}
<div className="w-full md:w-1/2 flex justify-center md:justify-center mt-10 md:mt-0">
  <Image
    src="/professionalwoman.png"
    alt="Professional Woman"
    width={604}
    height={906}
    className="w-auto h-auto drop-shadow-md"
  />
</div>

      </div>

      {/* Decorative Elements */}
      
    </div>
  );
};

export default First;