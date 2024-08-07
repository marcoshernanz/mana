//NEW
//text-center (by Tailwind CSS)
//rotate-12 (by me)
//href (by me)
// a (by html in W)
//underline (by me)

//NECESITO SABER
//1. Como hacer que el haya texto en el centro de la imagen
//2. Como hacer que los iconos se vean en dark mode (poner otra imagen)

//POLIZA: Es lo que entendemos comúnmente como un “seguro”. Se trata del contrato que adquiere un usuario con una compañía, mediante el cual una persona o un bien quedan cubiertos ante determinados incidentes.

import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-orange-50 dark:bg-slate-950">
      <Image
        src="/backround/lab3_2.png"
        height={1600}
        width={1600}
        alt="lab"
      ></Image>
      <div className="flex max-w-7xl flex-col items-center justify-center px-10 pb-12">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col gap-20">
            <span className="text-5xl font-bold text-orange-500 dark:text-orange-500">
              Service Support Center
            </span>
            <div className="flex items-center justify-center gap-20">
              <div className="flex flex-col items-center justify-center gap-4">
                <Image
                  src="/icons1/policy.png"
                  height={60}
                  width={60}
                  alt="policy"
                ></Image>
                <span className="text-lg font-medium">After-sales Policy</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col items-center justify-center gap-4 pt-28">
            <span className="items-center justify-center text-5xl font-bold text-orange-500 dark:text-orange-500">
              Contact Us
            </span>
            <hr className="mt-4 size-10/12 h-1 w-full bg-red-900 dark:bg-red-100"></hr>
          </div>
          <div className="flex gap-8">
            <div className="max-h-5/6 flex w-72 flex-col items-center gap-24 rounded-lg bg-orange-200/20 pb-14 pt-14 dark:bg-slate-900/30">
              <div className="max-h-5/6 flex flex-col items-center gap-24">
                <span className="text-xl font-medium text-orange-950 dark:text-orange-50">
                  Phone Support
                </span>
                <Image
                  src="/icons1/phone.png"
                  height={90}
                  width={90}
                  alt="phone"
                ></Image>
              </div>
              <div className="max-w-56 pt-1.5 text-center">
                <span className="text-orange-700 dark:text-orange-200">
                  We serve you 24/7. Call us at +34 600 960 824
                </span>
              </div>
            </div>
            <div className="max-h-5/6 flex w-72 flex-col items-center gap-24 rounded-lg bg-orange-200/20 pb-14 pt-14 dark:bg-slate-900/30">
              <div className="max-h-5/6 flex flex-col items-center gap-24">
                <span className="text-xl font-medium text-orange-950 dark:text-orange-50">
                  Whatsapp assistant
                </span>
                <Image
                  src="/icons1/WhatsApp1.png"
                  height={75}
                  width={75}
                  alt="Whatsapp"
                ></Image>
              </div>
              <div className="max-w-56 pt-5 text-center">
                <span className="text-orange-700 dark:text-orange-200">
                  Hi Im Xingi, your WhatsApp virtual assistant! In what can I
                  help you?
                </span>
              </div>
            </div>
            <div className="max-h-5/6 flex w-72 flex-col items-center gap-20 rounded-lg bg-orange-200/20 pb-14 pt-14 dark:bg-slate-900/30">
              {" "}
              <div className="max-h-5/6 flex flex-col items-center gap-24">
                <span className="text-xl font-medium text-orange-950 dark:text-orange-50">
                  Email Support
                </span>
                <Image
                  src="/icons1/emailwhite.png"
                  height={100}
                  width={100}
                  alt="email white"
                ></Image>
              </div>
              <div className="max-w-56 pt-3 text-center">
                <span className="text-orange-700 dark:text-orange-200">
                  MANA@gmail.com
                </span>
              </div>
            </div>
            <div className="max-h-5/6 flex w-72 flex-col items-center gap-16 rounded-lg bg-orange-200/20 pb-14 pt-14 dark:bg-slate-900/30">
              <span className="text-xl font-medium text-orange-950 dark:text-orange-50">
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
              <div className="max-w-56 text-center">
                <span className="text-orange-700 dark:text-orange-200">
                  You can also contact us throught{" "}
                  <a
                    className="underline"
                    href="https://www.facebook.com/profile.php?id=61563843962924"
                  >
                    Facebook
                  </a>
                  ,{" "}
                  <a className="underline" href="https://x.com/HernanNata67563">
                    X
                  </a>
                  ,{" "}
                  <a
                    className="underline"
                    href="https://www.youtube.com/@natashahernan4458/featured"
                  >
                    YouTube
                  </a>
                  ,{" "}
                  <a
                    className="underline"
                    href="https://www.instagram.com/natashahernan/"
                  >
                    Instagram
                  </a>{" "}
                  and{" "}
                  <a
                    className="underline"
                    href="https://www.linkedin.com/in/natasha-hernan-a02781224/"
                  >
                    LinkedIn
                  </a>
                  .
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
