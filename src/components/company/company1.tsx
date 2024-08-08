import Image from "next/image";

export default function Company1() {
  return (
    <div className="relative">
      <Image src="/partner3.png" height={1600} width={1600} alt="instagram" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-2 text-white">
        <span className="text-4xl font-bold">Dream it, get it</span>
        <span className="text-center text-lg font-medium">
          Intuitive Interface, Intelligent Automation, Cost-Effective Solutions,
          Adaptive Flexibility, Engaging User Experience{" "}
        </span>
      </div>
    </div>
  );
}
