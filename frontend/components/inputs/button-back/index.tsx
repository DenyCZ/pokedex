"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

import backArrow from "@/public/arrow-back.svg";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button className="card--back" onClick={() => router.back()}>
      <Image src={backArrow} width={20} height={20} alt="back" />
    </button>
  );
};
