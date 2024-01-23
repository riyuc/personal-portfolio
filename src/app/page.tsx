

import Image from "next/image";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="whitespace-nowrap overflow-auto no-scrollbar">
      <div className="flex h-screen flex-col items-center">
        <div className="flex flex-row justify-center gap-2 items-center w-full h-screen">
          <h1 className="font-jp">
          私の名前は
          </h1>
          <button>
            Hello
          </button>
        </div>
        <div>
          cdf
        </div>
      </div>
    </div>
  );
}
