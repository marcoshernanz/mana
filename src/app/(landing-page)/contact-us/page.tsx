//NEW
//text-center (by Tailwind CSS)
//rotate-12 (by me)

import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="flex items-center justify-center bg-orange-50 dark:bg-slate-950">
      <div className="flex max-w-7xl flex-col items-center justify-center gap-12 px-10 pb-14">
        <div className="flex flex-col items-center justify-center gap-4 pt-36">
          <span className="items-center justify-center text-5xl font-bold text-orange-500 dark:text-orange-500">
            Contact Us
          </span>
          <hr className="mt-4 size-10/12 h-1 w-full bg-red-900 dark:bg-red-100"></hr>
        </div>
        <div className="flex gap-8">
          <div className="max-h-5/6 flex w-80 flex-col items-center gap-24 rounded-lg bg-orange-200/20 pb-16 pt-14 dark:bg-slate-900/30">
            <div className="max-h-5/6 flex flex-col items-center gap-24">
              <span className="text-2xl font-semibold text-orange-950 dark:text-orange-50">
                Phone Support
              </span>
              <Image
                src="/icons1/phone.png"
                height={90}
                width={90}
                alt="phone"
              ></Image>
            </div>
            <div className="max-w-60 text-center">
              <span className="text-lg text-orange-700 dark:text-orange-100">
                +34 600 960 824
              </span>
            </div>
          </div>
          <div className="max-h-5/6 flex w-80 flex-col items-center gap-24 rounded-lg bg-orange-200/20 pb-16 pt-14 dark:bg-slate-900/30">
            <span className="text-2xl font-semibold text-orange-950 dark:text-orange-50">
              Whatsapp assistant
            </span>
            <Image
              src="/icons1/WhatsApp1.png"
              height={75}
              width={75}
              alt="Whatsapp"
            ></Image>
            <div className="max-w-60 text-center">
              <span className="text-lg text-orange-700 dark:text-orange-100">
                Hi I'm Xingi, your WhatsApp virtual assistant! In what I can
                help you?
              </span>
            </div>
          </div>
          <div className="max-h-5/6 flex w-80 flex-col items-center gap-20 rounded-lg bg-orange-200/20 pb-16 pt-14 dark:bg-slate-900/30">
            {" "}
            <span className="text-2xl font-semibold text-orange-950 dark:text-orange-50">
              Email Support
            </span>
            <Image
              src="/icons1/emailwhite.png"
              height={100}
              width={100}
              alt="email white"
            ></Image>
            <div className="max-w-60 text-center">
              <span className="text-lg text-orange-700 dark:text-orange-100">
                MANA@gmail.com
              </span>
            </div>
          </div>
          <div className="max-h-5/6 flex w-80 flex-col items-center gap-16 rounded-lg bg-orange-200/20 pb-16 pt-14 dark:bg-slate-900/30">
            <span className="text-2xl font-semibold text-orange-950 dark:text-slate-200">
              Media Contact
            </span>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/icons1/youtube.png"
                  height={61}
                  width={61}
                  alt="youtube"
                  className="-rotate-12"
                ></Image>
                <Image
                  src="/icons1/facebook.png"
                  height={51}
                  width={51}
                  alt="facebook"
                  className="rotate-12"
                ></Image>
              </div>
              <div className="items-center justify-center">
                <Image
                  src="/icons1/linkedin.png"
                  height={55}
                  width={55}
                  alt="linkedin"
                  className="-rotate-3"
                ></Image>
              </div>
              <div className="flex items-center justify-center gap-6">
                <Image
                  src="/icons1/Xwhite.png"
                  height={52}
                  width={52}
                  alt="X"
                  className="-rotate-6"
                ></Image>
                <Image
                  src="/icons1/instagram.png"
                  height={45}
                  width={45}
                  alt="instagram"
                  className="rotate-6"
                ></Image>
              </div>
            </div>
            <div className="max-w-60 text-center">
              <span className="text-lg text-orange-700 dark:text-orange-50">
                You can also contact us throught Facebook, X, YouTube, Instagram
                and LinkedIn.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
