'use client'

import Image from "next/image";
import Header from "../components/header";
import { Separator } from "../components/ui/separator";
import { useState } from "react";

export default function Home() {
  const [liyuchi,setLiyuchi] = useState('true');
  

  return (
  
    <div className="whitespace-nowrap overflow-auto no-scrollbar">
      <div className="flex h-screen flex-col items-center">
        <div className="flex flex-row justify-center gap-3 text-4xl items-center w-full h-screen ">
          <h1 className="font-sans font-extralight">
          Hi, My name is
          </h1>
          <button className="font-sans font-extralight text-black-500 text-4xl hover:-translate-y-1 duration-300">
            Duc Anh Nguyen
          </button>
        </div>
        <Separator className=" bg-green-950"/>
        <div 
          className={`flex flex-row justify-center gap-2 text-4xl items-center w-full h-screen 
          hover:bg-gradient-to-r transition ease-in-out delay-150 bg bg-neutral-800 duration-300`}>
          <h1 className="font-jp text-white">
          初めまして、
          </h1>
          <button className="text-purple-300 text-4xl font-medium hover:-translate-y-1 duration-300">
            りゆちです。
          </button>
        </div>
      </div>
      <Separator className="bg-green-950"/>
      <div className="bg-gray-100 h-full w-full min-h-lvh">
        <DucAnhNguyen />
      </div>
    </div>
  );

  function getStyling(){
    return ["hover:- ", "hover:-"]
  }
}
