"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import InputModal from "@/components/InputPopup";
import { useState } from "react";
import InputButton from "@/components/InputButton";
import { trpc } from "./_trpc/client";

export default function Home() {
  // populate Db with minutes entered value
  const { mutate: populateDb } = trpc.populateDb.useMutation();

  const [isPopUp, setIsPopUp] = useState(false);
  const popupSubmit = (minutes: number) => {
    console.log(minutes);
    setIsPopUp(false);
  };

  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-32 sm:mt-44 flex flex-col items-center justify-center text-center">
        <div className="mx-auto flex max-w-fit mb-3 items-center justify-center space-x-2 px-2 py-2 backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <h1 className="font-semibold text-center text-green-600 text-6xl">
            AeroGrow
          </h1>
        </div>

        <h1 className="max-w-3xl text-5xl font-bold md:text-1-xl lg:text-3xl">
          The fitness app to achieve your basic fitness target
        </h1>

        <InputButton />
        <Image
          className="mt-auto flex p-2 sm:p-8 md:p-20"
          src="/tree.png"
          alt="Starter page graphic"
          width={5000}
          height={5000}
        />
      </MaxWidthWrapper>
    </>
  );
}
