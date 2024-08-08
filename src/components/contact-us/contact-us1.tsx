import Image from "next/image";

export default function ContactUs1() {
  return (
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
  );
}
