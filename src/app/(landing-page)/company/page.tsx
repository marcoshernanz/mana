/* NEW THINGS: */
//list-decimal (by Tailwind)
//indent (by Tailwind) --> lists has their own indentation so we use pl- instead

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
              <span className="pb-4 pt-10 text-lg">Key Features</span>
              <ol className="flex list-decimal flex-col gap-2 pl-6">
                <li>
                  {" "}
                  <span className="font-semibold">
                    AI-Driven Personalization:
                  </span>{" "}
                  At the heart of MANA is a powerful AI engine that understands
                  and adapts to your personal preferences, ensuring that the
                  strategies and tools you use are perfectly aligned with your
                  goals.
                </li>
                <li>
                  <span className="font-semibold">
                    AI-Driven Personalization:
                  </span>{" "}
                  MANA brings together the best of productivity tools, including
                  Notion, Google Calendar, and Google Sheets, under one cohesive
                  platform. This integration allows for effortless planning,
                  tracking, and execution of tasks.
                </li>
                <li>
                  <span className="font-semibold">
                    Comprehensive Tool Integration:
                  </span>{" "}
                  Whether it's managing your daily schedule, tracking your
                  long-term goals, or organizing your personal projects, MANA
                  provides a comprehensive solution that covers all aspects of
                  life management.
                </li>
                <li>
                  <span className="font-semibold">
                    Holistic Life Management:
                  </span>{" "}
                  With a presence in over 2,000 countries and more than 100
                  stores in Spain alone, MANA is a global leader in life
                  management solutions. Our extensive network ensures that
                  support and resources are always within reach.
                </li>
                <li>
                  <span className="font-semibold">Global Reach:</span> MANA
                  boasts a portfolio of over 1,000 patented software solutions,
                  reflecting our commitment to innovation and excellence in the
                  field of life management.
                </li>
                <li>
                  <span className="font-semibold">Innovative Technology: </span>{" "}
                </li>
              </ol>
              <span className="pb-4 pt-10 text-lg">Our Mission</span>
              At MANA, we believe that effective life management is key to
              unlocking a person's full potential. Our mission is to empower
              individuals to organize their lives efficiently, allowing them to
              focus on what truly matters. By offering a tailored and integrated
              platform, we help users achieve a balance between their personal
              and professional lives, paving the way for a more fulfilling
              future.
              <span className="pb-4 pt-10 text-lg">Why Choose MANA?</span>
              <ul className="flex list-disc flex-col gap-1 pl-6">
                <li>
                  <span className="font-semibold">Personalization:</span> MANA's
                  AI customizes your experience based on your specific needs and
                  goals.
                </li>
                <li>
                  <span className="font-semibold">Integration:</span> Seamlessly
                  manage all your favorite productivity tools in one place.
                </li>
                <li>
                  <span className="font-semibold">Global Support:</span> Access
                  MANA's resources and support from anywhere in the world.
                </li>
                <li>
                  <span className="font-semibold">Innovation:</span> Benefit
                  from cutting-edge technology and patented solutions that set
                  us apart from the competition.
                </li>
              </ul>
              <span className="pb-4 pt-10 text-lg">
                Join the MANA Community
              </span>
              Discover the future of life management with MANA. Join millions of
              users worldwide who are taking control of their lives and
              achieving their dreams with the help of our innovative platform.
              Visit one of our stores or explore our online resources to get
              started today.
            </span>
            <div className="pt-6">
              <hr className="mt-4 h-0.5 w-full bg-zinc-400 dark:bg-orange-900"></hr>
              <span className="flex pt-6 text-lg">
                MANA: Your Partner in Achieving Life's Goals
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
