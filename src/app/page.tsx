/* NEW THINGS: */
// justify-center(by chatGPT)
//style={{ backgroundColor: "#f7f7f7" }} (by chatGPT)
//leading-x (by Tailwind)
//w-5/12 (by Tailwind)

export default function Home() {
  return (
    <div
      className="flex h-screen w-screen px-36 py-24"
      style={{ backgroundColor: "#fdf2e9" }}
    >
      <div className="flex flex-col gap-12">
        <div className="flex h-44 w-5/12 flex-col gap-1 text-5xl font-extrabold text-zinc-800">
          <span>
            Let us help you turn your dreams into plans and your plans into a
            beautiful future
          </span>
        </div>
        <div className="flex w-5/12 gap-1 text-lg font-medium leading-8 text-zinc-600">
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
          <div className="rounded-lg bg-white px-6 py-3 text-lg font-bold text-zinc-600">
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
