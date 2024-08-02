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

export default function Home() {
  return (
    <div>
      <div
        className="flex h-screen w-screen flex-row gap-40 px-36 py-24"
        style={{ backgroundColor: "#fdf2e9" }}
      >
        <div className="flex h-44 w-5/12 flex-col gap-12">
          {/* h-44 w-5/12 */}
          <div className="flex h-full w-full gap-1 text-5xl font-extrabold text-zinc-800">
            <div>
              <span>
                {/* Let us help you turn your dreams into plans and your plans into a
              beautiful future */}
                The platform that helps to achieve your goals
              </span>
              <span className="text-orange-700"> each day</span>
            </div>
          </div>
          {/* w-5/12 */}
          <div className="flex gap-1 text-lg font-medium leading-8 text-zinc-600">
            <span>
              The all-in-one 365-day life management platform that will help you
              streamline your life and reach your goals. Customized to your
              personal interests and aspirations, ensuring a more productive and
              fulfilling future.
            </span>
          </div>
          <div className="flex flex-row gap-6">
            <div className="rounded-lg bg-orange-500 px-6 py-3 text-lg font-bold text-white">
              <button>Start Orginizing Now</button>
            </div>
            <div className="flex flex-row rounded-lg bg-white px-6 py-3 text-lg font-bold text-zinc-600">
              <button>Learn More</button>
              <img src="DownArrow.png" width="30" height="30"></img>
            </div>
          </div>
          <div className="flex flex-row">
            <img src="People.png" width="200" height="200"></img>
            <div className="text-md flex p-4 font-semibold text-zinc-600">
              <span>Trusted by 100,000+ people</span>
            </div>
          </div>
          <div className="flex items-center">
            <img src="StarRating.png" height="150" width="150"></img>
          </div>
        </div>
        <div className="item-center flex flex-col justify-center gap-10">
          <img src="Graph.png" height="500" width="500"></img>
          <img src="Apps.png" height="100" width="100"></img>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-row gap-40 bg-white px-36 py-24">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-2">
            <div className="flex text-base font-semibold tracking-wide text-orange-600">
              <span>HOW IT WORKS</span>
            </div>
            <div className="flex w-96 text-base text-zinc-700">
              <span>
                Organizing life effectively often requires a combination of
                tools that cater to different aspects of planning and
                productivity. MANA manages this tools for you.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-28">
            <div className="flex flex-row gap-60">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="flex text-8xl font-extrabold text-zinc-200">
                    01
                  </span>
                  <span className="flex text-zinc-400">
                    Initial Setup and Planning
                  </span>
                  <span className="flex text-3xl font-bold text-zinc-700">
                    Tell us what you want to do
                  </span>
                </div>
                <div className="flex h-20 w-96 text-base text-zinc-700">
                  <span>
                    Never again waste time thinking about when to do something.
                    MANA IA will help you plan your day, week, month, and year.
                  </span>
                </div>
              </div>
              <div>
                <img src="phone3.png" height="385" width="385"></img>
              </div>
            </div>
            <div className="flex flex-row gap-60">
              <div>
                <img src="phone3.png" height="385" width="385"></img>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <span className="flex text-8xl font-extrabold text-zinc-200">
                    02
                  </span>
                  <span className="flex text-zinc-400">
                    Setting Up Notion for Centralized Planning
                  </span>
                  <span className="flex text-3xl font-bold text-zinc-700">
                    Tell us your commitment
                  </span>
                </div>
                <div className="flex h-20 w-96 flex-col gap-1 text-base text-zinc-700">
                  <span>MANA will:</span>
                  <ul className="ml-5 list-disc">
                    <li>Set up a new Notion workspace for you</li>
                    <li>
                      Design a central dashboard with links to different areas
                      you added before
                    </li>
                    <li>Create Pages and Databases</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-60">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="flex text-8xl font-extrabold text-zinc-200">
                    03
                  </span>
                  <span className="flex text-zinc-400">
                    Initial Setup and Planning
                  </span>
                  <span className="flex text-3xl font-bold text-zinc-700">
                    Tell us what you want to do
                  </span>
                </div>
                <div className="flex h-20 w-96 text-base text-zinc-700">
                  <span>
                    Never again waste time thinking about when to do something.
                    MANA IA will help you plan your day, week, month, and year.
                  </span>
                </div>
              </div>
              <div>
                <img src="phone3.png" height="385" width="385"></img>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center text-base font-semibold tracking-wide text-orange-600">
            <span>SET UP YOUR PLAN</span>
          </div>
          <div className="flex flex-row items-center justify-center gap-16">
            <div className="flex h-96 w-96 flex-col rounded-xl border-2 border-orange-100 p-14">
              <span className="flex items-center justify-center text-5xl font-bold text-zinc-800">
                800$
              </span>
            </div>
            <div className="flex h-96 w-96 flex-col rounded-xl border-2 border-orange-100 bg-orange-100 p-14">
              <span className="flex items-center justify-center text-5xl font-bold text-zinc-800">
                800$
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
