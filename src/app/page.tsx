/* NEW THINGS: */
// justify-center(by chatGPT)
//style={{ backgroundColor: "#f7f7f7" }} (by chatGPT)

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col bg-slate-50">
      <div className="flex w-full flex-row bg-slate-200 p-4">
        <div className="flex w-full items-center justify-between">
          <span className="font-serif text-2xl text-slate-800">MANA</span>
          <button className="font-serif text-xl text-slate-800">Menu</button>
          <div className="flex gap-x-4">
            <button>
              <img
                src="search-icon-2-614x460.png"
                alt="Search"
                width="50"
                height="50"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="item-center flex flex-col justify-center">
        <div
          className="flex flex-col justify-center gap-2 p-6 text-center"
          style={{ backgroundColor: "#f7f7f7" }}
        >
          <span className="font-serif text-lg text-slate-800">
            "Let us help you turn your dreams into plans{" "}
          </span>
          <span className="font-serif text-lg text-slate-800">
            {" "}
            and your plans into a beautiful future"
          </span>
        </div>
        <div>
          <img
            src="openart-f7ec3ca94487451d97a7c505cb7dd86f_raw.jpg"
            alt=""
            width="1920"
            height="100"
          />
        </div>
      </div>
    </div>
  );
}
