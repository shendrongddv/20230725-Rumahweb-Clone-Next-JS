import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

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

const secondaryFeatures = [
  {
    id: 1,
    title: "Jasa Pembuatan Website",
    desc: "Jasa pembuatan website instan, hanya dalam 2 x 24 jam.",
    href: "/",
    img: "website.svg",
  },
  {
    id: 2,
    title: "VPS Murah",
    desc: "VPS dengan SSD/NVME untuk performa terbaik.",
    href: "/",
    img: "vps.svg",
  },
  {
    id: 3,
    title: "Email Bisnis",
    desc: "Email bisnis kapasitas besar yg dilengkapi tools kolaborasi.",
    href: "/",
    img: "email.svg",
  },
  {
    id: 4,
    title: "Dedicated Server",
    desc: "Layanan sewa server branded dengan spesifikasi terbaik.",
    href: "/",
    img: "server.svg",
  },
];

export const PeimaryFeatureCard = () => {
  const items = primaryFeatures;

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-3xl border border-slate-100 p-2 transition duration-300 ease-linear hover:bg-slate-50"
        >
          {/* # */}
          <div className="my-gradient-1 rounded-2xl p-3 text-center">
            <h3 className="h3 font-bold text-white">{item.title}</h3>
          </div>

          {/* # */}
          <div className="mt-4 flex flex-col items-center p-2 text-center">
            {/* ## */}
            <Image
              src={`/${item.img}`}
              alt={item.title}
              width={400}
              height={300}
              className="h-32 w-auto md:h-40"
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
                  variant: "destructive",
                  size: "lg",
                  className:
                    "mt-8 rounded-full text-base font-semibold text-white",
                }),
              )}
            >
              Detail Info
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export const SecondaryFeatureCard = () => {
  const items = secondaryFeatures;

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-start rounded-3xl p-4 transition duration-300 ease-linear hover:bg-slate-50 md:flex-col md:items-center md:p-6"
        >
          {/* # */}
          <Image
            src={`/${item.img}`}
            alt={item.title}
            width={100}
            height={100}
            className="h-16 w-auto flex-none"
          />

          {/* # */}
          <div className="flex flex-col items-start max-md:ml-4 md:mt-4 md:items-center md:text-center">
            <h3 className="h4 font-bold">{item.title}</h3>
            <p className="mt-2">{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};
