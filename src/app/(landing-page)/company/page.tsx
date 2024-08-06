import Image from "next/image";

export default function Company() {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center bg-orange-50 dark:bg-slate-950">
        <div className="relative">
          <Image
            src="/partner3.png"
            height={1600}
            width={1600}
            alt="instagram"
          />
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-2 text-white">
            <span className="text-4xl font-bold">Dream it, get it</span>
            <span className="text-center text-lg font-medium">
              Intuitive Interface, Intelligent Automation, Cost-Effective
              Solutions, Adaptive Flexibility, Engaging User Experience{" "}
            </span>
          </div>
        </div>
        <div className="relative z-0 flex h-96 w-full items-center justify-center bg-orange-100/40 dark:bg-slate-900/15">
          <div className="flex max-w-7xl flex-col items-center justify-center gap-32 px-10 pb-12">
            <div className="flex gap-64 pb-10 pt-16">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/icons1/maps.png"
                  height={90}
                  width={90}
                  alt="localization"
                  className="pb-8"
                ></Image>
                <span className="flex gap-1 text-5xl font-bold text-black dark:text-orange-500">
                  {" "}
                  2,000{" "}
                  <span className="text-3xl font-bold text-black dark:text-orange-600">
                    +
                  </span>
                </span>
                <hr className="mt-4 h-0.5 w-full bg-zinc-400 dark:bg-orange-900"></hr>
                <span className="dark: pt-2 tracking-wide text-zinc-900 dark:text-orange-100">
                  Countries with stores
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/icons1/store.png"
                  height={90}
                  width={90}
                  alt="store"
                  className="pb-8"
                ></Image>
                <span className="flex gap-1 text-5xl font-bold text-black dark:text-orange-500">
                  {" "}
                  100{" "}
                  <span className="text-3xl font-bold text-black dark:text-orange-600">
                    +
                  </span>
                </span>
                <hr className="mt-4 h-0.5 w-full bg-zinc-400 dark:bg-orange-900"></hr>
                <span className="pt-2 tracking-wide text-zinc-900 dark:text-orange-100">
                  Stores in Spain
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/icons1/patented1.png"
                  height={90}
                  width={90}
                  alt="patented"
                  className="pb-8"
                ></Image>
                <span className="flex gap-1 text-5xl font-bold text-black dark:text-orange-500">
                  {" "}
                  1,000{" "}
                  <span className="text-3xl font-bold text-black dark:text-orange-600">
                    +
                  </span>
                </span>
                <hr className="mt-4 h-0.5 w-full bg-zinc-400 dark:bg-orange-900"></hr>
                <span className="pt-2 tracking-wide text-zinc-900 dark:text-orange-100">
                  Patented softwares
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-w-7xl flex-col items-center justify-center gap-12 px-10 pb-12 pt-20">
          <div>
            <span className="text-3xl font-semibold tracking-wide text-slate-950 dark:text-slate-50">
              About{" "}
              <span className="text-3xl font-semibold text-orange-500 dark:text-orange-500">
                MANA
              </span>
            </span>
          </div>
          <div className="flex max-w-3xl flex-col font-light text-slate-950 dark:text-slate-100">
            <span className="flex flex-col text-sm">
              MANA is a cutting-edge life management platform designed to
              streamline and enhance the lives of individuals by helping them
              achieve their goals. Utilizing advanced artificial intelligence,
              MANA offers a personalized approach to life organization, tailored
              to each user's unique interests and aspirations. Our platform
              ensures a more productive and fulfilling future by integrating and
              managing various productivity tools seamlessly.{" "}
              <span className="pt-10 text-lg">Key Features</span>
              <ol>
                <li>
                  {" "}
                  <span>AI-Driven Personalization:</span> At the heart of MANA
                  is a powerful AI engine that understands and adapts to your
                  personal preferences, ensuring that the strategies and tools
                  you use are perfectly aligned with your goals.
                </li>
                <li>Intelligent Automation</li>
                <li>Cost-Effective Solutions</li>
                <li>Adaptive Flexibility</li>
                <li>Engaging User Experience</li>
              </ol>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
