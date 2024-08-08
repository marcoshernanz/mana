/* NEW THINGS: */
//style={{ backgroundColor: "#f7f7f7" }} (by chatGPT)
//leading-x (by Tailwind)
//w-5/12 (by Tailwind)
//w-{lo que quiera} (marquitos)
//high, width image (by HTML)
//import React from "react";
//import { Rate } from "antd";
//<Rate disabled defaultValue={4} /> (by Ant Design)
//tracking-normal (by Tailwind)
// list-disc (by Tailwind)

import LandingPage2 from "@/components/landing-page/LandingPage2";
import LandingPage3 from "@/components/landing-page/LandingPage3";
import LandingPageHero from "@/components/landing-page/LandingPageHero";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex items-center justify-center bg-orange-50 dark:bg-slate-950">
      <div className="max-w-7xl px-10">
        <LandingPageHero />
        <div className="flex flex-col gap-40 py-24">
          <LandingPage2 />
          <LandingPage3 />
        </div>
      </div>
    </div>
  );
}
