import Image from "next/image";
import Button from "../ui/Button";

export default function LandingPageHero() {
  return (
    <div className="flex flex-row gap-40 pt-36">
      <div className="flex max-w-xl flex-col">
        <div className="pb-6 text-5xl font-extrabold text-slate-800 dark:text-slate-200">
          <div>
            <span>
              The platform that helps to achieve{" "}
              <span className="text-orange-600 dark:text-orange-400">
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
          {/* <button className="rounded-lg bg-orange-500 px-6 py-3 text-lg font-bold text-white dark:bg-orange-500">
            Start organizing
          </button> */}
          <Button text="Start organizing" type="filled" size="large" />
          <Button text="Start organizing" type="outlined" size="large" />
          {/* <div className="flex items-center justify-center rounded-lg border-2 border-orange-400 px-6 py-3 text-lg font-bold text-slate-600 dark:border-orange-600 dark:text-slate-400">
            <button>Learn More</button>
          </div> */}
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
        <Image src="/more/Graph.png" height={500} width={500} alt="Graph" />
        <Image src="/icons1/Apps.png" height={100} width={100} alt="Apps" />
      </div>
    </div>
  );
}
