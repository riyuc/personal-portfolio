

import Image from "next/image";
import Header from "../components/header";
import Separator from "../components/separator";

export default function Home() {
  return (
    <div className="whitespace-nowrap overflow-auto no-scrollbar">
      <div className="flex h-screen flex-col items-center">
        <div className="flex flex-row justify-center gap-3 text-4xl items-center w-full h-screen">
          <h1 className="font-sans font-extralight">
          Hi, My name is
          </h1>
          <button className="font-sans font-extralight text-black-500 text-4xl">
            Duc Anh Nguyen
          </button>
        </div>
        <Separator />
        <div className="flex flex-row justify-center gap-2 text-4xl items-center w-full h-screen">
          <h1 className="font-jp">
          初めまして、
          </h1>
          <button className="text-purple-300 text-4xl font-medium">
            りゆちです。
          </button>
        </div>
      </div>
    </div>
  );
}
