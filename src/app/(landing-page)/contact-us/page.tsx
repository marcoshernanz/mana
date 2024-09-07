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

// import ContactUs1 from "@/components/contact-us/contact-us1";
import ContactUs2 from "@/app/(landing-page)/contact-us/contact-us2";
import Image from "next/image";
import ContactUs1 from "./contact-us1";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-slate-50 dark:bg-slate-950">
      <Image
        src="/backround/lab3_2.png"
        height={1600}
        width={1600}
        alt="lab"
        className="pt-4"
      ></Image>
      <div className="flex max-w-7xl flex-col items-center justify-center px-10 pb-12">
        <ContactUs1 />
        <ContactUs2 />
      </div>
    </div>
  );
}
