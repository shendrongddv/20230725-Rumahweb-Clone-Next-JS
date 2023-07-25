import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

// Content
const primaryFeatures = [
  {
    id: 1,
    title: "Domain",
    desc: "Daftarkan nama dan ide bisnis Anda dg berbagai pilihan ekstensi domain yang sesuai bidang bisnis.",
    price: "12.000",
    href: "/",
    img: "domain.webp",
  },
  {
    id: 2,
    title: "Hosting Unlimited",
    desc: "Web hosting Indonesia yang sesuai untuk website dan email bisnis kecil hingga menengah.",
    price: "15.000",
    href: "/",
    img: "hosting.webp",
  },
  {
    id: 3,
    title: "Cloud Hosting",
    desc: "Hosting dengan dedicated CPU, RAM, & storage, reliable untuk website dengan kunjungan tinggi.",
    price: "120.000",
    href: "/",
    img: "cloud.webp",
  },
];

export const PeimaryFeatureCard = () => {
  const items = primaryFeatures;

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-xl border border-lime-500"
        >
          {/* # */}
          <div className="my-gradient-1 p-4 text-center">
            <h3 className="h3 font-bold text-white">{item.title}</h3>
          </div>

          {/* # */}
          <div className="flex flex-col items-center bg-white px-4 py-8 text-center">
            {/* ## */}
            <Image
              src={`/${item.img}`}
              alt={item.title}
              width={400}
              height={300}
              className="h-40 w-auto"
            />

            {/* ## */}
            <p className="mt-4">{item.desc}</p>

            {/* ## */}
            <span className="mt-10">Harga Mulai</span>
            <span className="mt-2 flex items-center justify-center gap-0.5 text-2xl font-extrabold">
              <sup className="text-xs font-semibold opacity-80">Rp</sup>
              <span>{item.price}</span>
              <sub className="text-sm font-semibold opacity-80">/bulan</sub>
            </span>

            {/* ## */}
            <Link
              href={item.href}
              aria-label={item.title}
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "lg",
                  className:
                    "mt-8 rounded-full bg-lime-500 text-base font-semibold",
                }),
              )}
            >
              Detail Info
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export const SecondaryFeatureCard = () => {
  return (
    <div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis unde
        iure.
      </div>
    </div>
  );
};
