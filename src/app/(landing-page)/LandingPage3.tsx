import Image from "next/image";

export default function LandingPage3() {
  return (
    <div className="flex flex-col items-center justify-center gap-28 rounded-xl border-2 border-orange-100 py-32 dark:border-orange-900">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-base font-semibold tracking-wide text-orange-600 dark:text-orange-400">
          MEET OUR TEEM
        </span>
        <span className="text-center text-base text-zinc-700 dark:text-zinc-300">
          We are a passionate and dedicated group committed to enhancing peoples
          lives.
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-20">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-row items-center justify-center gap-20">
            <Image
              src="/people/natasha.png"
              height={170}
              width={170}
              alt="people"
              className="rounded-full"
            ></Image>
            <Image
              src="/people/marcos.png"
              height={170}
              width={170}
              alt="marcos"
              className="rounded-full"
            ></Image>
            <Image
              src="/people/noah.png"
              height={170}
              width={170}
              alt="noah"
              className="rounded-full"
            ></Image>
            <Image
              src="/people/xingi.png"
              height={170}
              width={170}
              alt="xingi"
              className="rounded-full"
            ></Image>
          </div>
          <div className="flex flex-row items-center justify-center gap-48 pr-5 text-lg text-zinc-800 dark:text-slate-200">
            <span>Natasha</span>
            <span>Marcos</span>
            <span>Noah</span>
            <span className="flex pl-6">Xingi</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-row justify-center gap-20">
            <Image
              src="/people/aiden.png"
              height={170}
              width={170}
              alt="aiden"
              className="rounded-full"
            ></Image>
            <Image
              src="/people/ethan.png"
              height={170}
              width={170}
              alt="ethan"
              className="rounded-full"
            ></Image>
            <Image
              src="/people/sara.png"
              height={170}
              width={170}
              alt="sara"
              className="rounded-full"
            ></Image>
            <Image
              src="/people/roberto.png"
              height={170}
              width={170}
              alt="roberto"
              className="rounded-full"
            ></Image>
          </div>
          <div className="flex flex-row items-center justify-center gap-52 pl-3 text-lg text-zinc-800 dark:text-slate-200">
            <span>Aiden</span>
            <span>Ethan</span>
            <span>Sara</span>
            <span>Roberto</span>
          </div>
        </div>
      </div>
    </div>
  );
}
