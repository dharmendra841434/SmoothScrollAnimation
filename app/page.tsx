"use client";

import { useRef } from "react";
import gsap from "gsap-trial/dist/gsap";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import useIsomorphicLayoutEffect from "../helpers/isomorphicEffect";

// This is needed only in Stackblitz
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const HomePage = () => {
  const container = useRef();
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".box-c",
        pin: true,
        start: "center center",
        end: "+=300",
        markers: true,
      });
    },
    {
      scope: container,
    }
  );

  return (
    <main className=" flex flex-col items-center w-full" ref={container}>
      <div className="flex flex-col items-center w-full">
        <div className=" bg-red-300 h-[30rem] w-[75%] text-4xl text-black flex flex-col items-center justify-center ">
          <p>First Box</p>
        </div>
        <div className=" bg-green-300 h-[30rem] w-[75%]">2 Box</div>
        <div className=" bg-purple-300 h-[30rem] w-[75%]">3 Box</div>
        <div className=" bg-pink-300 h-[30rem] w-[75%]">4 Box</div>
        <div className=" bg-orange-300 h-[30rem] w-[75%]">5 Box</div>
      </div>
    </main>
  );
};

export default HomePage;
