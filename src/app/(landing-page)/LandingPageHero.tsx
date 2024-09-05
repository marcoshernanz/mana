import Image from "next/image";
// import Chart from "@/components/landing-page/Chart";
import { Button } from "@/components/ui/Button";
import { LandingPageChart } from "./LandingPageChart";

export default function LandingPageHero() {
  return (
    <div className="flex flex-row gap-40 pt-36">
      <div className="flex max-w-xl flex-col">
        <div className="pb-6 text-5xl font-extrabold text-slate-800 dark:text-slate-200">
          <div>
            <span>
              The platform that helps to achieve{" "}
              <span className="text-cyan-600 dark:text-orange-400">
                your goals
              </span>
            </span>
          </div>
        </div>
        <div className="pb-8 text-lg font-medium text-zinc-600 dark:text-zinc-400">
          <span>
            The all-in-one 365-day life management platform that will help you
            streamline your life and reach your goals. Customized to your
            personal interests and aspirations, ensuring a more productive and
            fulfilling future.
          </span>
        </div>
        <div className="flex gap-6 pb-16">
          <Button className="h-20 px-10 text-lg">Start organizing</Button>
          <Button
            variant="outline"
            className="h-20 px-10 text-lg text-slate-900"
          >
            Online quote
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/more/People.png"
            height={200}
            width={200}
            alt="People"
          ></Image>
          <span className="flex font-semibold text-slate-500 dark:text-slate-500">
            Trusted by 100,000+ people
          </span>
        </div>
        <div className="flex items-center">
          <Image
            src="/icons1/StarRating.png"
            height={150}
            width={150}
            alt="StarRating"
          ></Image>
        </div>
      </div>
      <div className="item-center flex flex-col justify-center gap-10">
        <LandingPageChart></LandingPageChart>
        {/* <Image src="/more/Graph.png" height={500} width={500} alt="Graph" /> */}
        <Image src="/icons1/Apps.png" height={100} width={100} alt="Apps" />
      </div>
    </div>
  );
}
