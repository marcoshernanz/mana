import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MessageCircleIcon,
  PhoneCall,
  XIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";

export default function ContactUs2() {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center justify-center gap-4 pt-28">
        <span className="items-center justify-center text-4xl font-bold text-slate-900 dark:text-orange-500">
          Contact Us
        </span>
        <hr className="mt-4 size-10/12 h-1 w-full bg-slate-900 dark:bg-red-100"></hr>
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col items-center gap-24 rounded-lg bg-slate-200/30 px-16 pb-14 pt-14 dark:bg-slate-900/30">
          <div className="flex flex-col items-center gap-24">
            <span className="text-xl font-medium text-slate-950 dark:text-orange-50">
              Phone Support
            </span>
            <PhoneCall size={80} color="#020617" strokeWidth={1.2} />
          </div>
          <div className="pt-1.5 text-center">
            <span className="text-slate-600 dark:text-orange-200">
              We serve you 24/7. Call us at{" "}
              <span className="text-cyan-700">+34 600 960 824</span>
            </span>
          </div>
        </div>
        {/* w-72 */}
        <div className="flex flex-col items-center gap-24 rounded-lg bg-slate-200/30 px-8 pb-14 pt-14 dark:bg-slate-900/30">
          <div className="flex flex-col items-center gap-24">
            <span className="text-xl font-medium text-slate-950 dark:text-orange-50">
              Whatsapp assistant
            </span>
            <MessageCircleIcon size={80} color="#020617" strokeWidth={1.2} />
          </div>
          <div className="pt-5 text-center">
            <span className="text-slate-600 dark:text-orange-200">
              Hi Im Xingi, your WhatsApp virtual assistant! In what can I help
              you?
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-20 rounded-lg bg-slate-200/30 px-8 pb-14 pt-14 dark:bg-slate-900/30">
          {" "}
          <div className="flex flex-col items-center gap-24">
            <span className="text-xl font-medium text-slate-950 dark:text-orange-50">
              Email Support
            </span>
            <MailIcon size={80} color="#020617" strokeWidth={1.2} />
          </div>
          <div className="px-8 pt-3 text-center">
            <span className="text-slate-600 dark:text-orange-200">
              MANA@gmail.com
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-16 rounded-lg bg-slate-200/30 px-2 pb-14 pt-14 dark:bg-slate-900/30">
          <span className="text-xl font-medium text-slate-950 dark:text-orange-50">
            Media Contact
          </span>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-4">
              <YoutubeIcon
                size={60}
                color="#020617"
                strokeWidth={1.2}
                className="-rotate-12"
              />
              <FacebookIcon
                size={50}
                color="#020617"
                strokeWidth={1.4}
                className="rotate-12"
              />
            </div>
            <div className="items-center justify-center">
              <LinkedinIcon
                size={50}
                color="#020617"
                strokeWidth={1.5}
                className="-rotate-3"
              />
            </div>
            <div className="flex items-center justify-center gap-6">
              <XIcon
                size={50}
                color="#020617"
                strokeWidth={1.5}
                className="-rotate-6"
              />
              <InstagramIcon
                size={50}
                color="#020617"
                strokeWidth={1.5}
                className="rotate-6"
              />
            </div>
          </div>
          <div className="px-2 text-center">
            <span className="text-slate-600 dark:text-orange-200">
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
  );
}
