//NEW THING
//Underline: by tailwind
//flex-wrap: by someone's mistake in stackoverflow

import Avatar from "@/components/ui/Avatar";
import Table from "@/components/ui/Table";
import Progress from "@/components/ui/Progress";
import AlertDialog from "@/components/ui/AlertDialog";
import Image from "next/image";
import Product from "@/components/ui/product";

export default function Products() {
  const ProductData = [
    {
      name: "MANA Planner",
      image: { src: "/product1.png" },
    },
    {
      name: "MANA Habit Tracker",
      image: { src: "/product2.png" },
    },
    {
      name: "MANA Goal Setter",
      image: { src: "/product3.png" },
    },
    {
      name: "MANA Time Manager",
      image: { src: "/product4.png" },
    },
    {
      name: "MANA Finance Tracker",
      image: { src: "/product5.png" },
    },
    {
      name: "MANA Project Manager",
      image: { src: "/product6.png" },
    },
    {
      name: "MANA Health & Wellness",
      image: { src: "/product7.png" },
    },
    {
      name: "MANA Learning Hub",
      image: { src: "/product8.png" },
    },
    {
      name: "MANA Communication Suite",
      image: { src: "/product9.png" },
    },
  ];
  return (
    <div className="flex items-center justify-center bg-orange-50 dark:bg-slate-950">
      <div className="max-w-7xl items-center justify-center px-10 pb-20 pt-28">
        <div className="flex h-full w-full flex-col items-center justify-center gap-16">
          <div className="pb-10 text-4xl font-semibold text-orange-500 dark:text-orange-500">
            <span>Our Products</span>
          </div>
          <div className="gap flex flex-wrap items-center justify-center">
            {ProductData.map(function (product, i) {
              return (
                <div key={i}>
                  <div className="rounded-md px-10 py-10 transition hover:bg-orange-100/60 dark:hover:bg-slate-900/60">
                    <Product
                      name={product.name}
                      series={i}
                      image={product.image}
                    ></Product>
                  </div>
                  <div className="h-10"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
