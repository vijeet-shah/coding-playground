import FileSelector from "@/components/fileStructure";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <input placeholder="Enter your name" className="m-5" />
      <Link href={"/playground"}>
        <button className="bg-black text-gray-200 rounded-sm ">
          Enter Playground
        </button>
      </Link>
    </div>
  );
}
