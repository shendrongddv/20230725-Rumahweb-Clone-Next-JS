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

const serviceProviders = [
  {
    id: 1,
    title: "ICANN Accredited Registrar",
    href: "/",
    img: "icann.webp",
  },
  {
    id: 2,
    title: "Google Cloud Partner",
    href: "/",
    img: "google-cloud.webp",
  },
  {
    id: 3,
    title: "cPanel NOC Partner",
    href: "/",
    img: "cpanel.webp",
  },
  {
    id: 4,
    title: "Alibaba Cloud Partner",
    href: "/",
    img: "alibaba-cloud.webp",
  },
  {
    id: 5,
    title: "Litespeed Hosting Partner",
    href: "/",
    img: "litespeed.webp",
  },
];

const customerSupports = [
  {
    id: 1,
    title: "Siaga 24 x 7",
    desc: "Jangan ragu untuk menghubungi kami melalui livechat, telepon, dan email kapanpun Anda butuh bantuan.",
    img: "siaga.svg",
  },
  {
    id: 2,
    title: "Tutorial Lengkap",
    desc: "Tersedia tutorial yang sangat lengkap dalam bentuk artikel dan video untuk memandu Anda dalam menggunakan web hosting.",
    img: "tutorial.svg",
  },
  {
    id: 3,
    title: "Garansi Uptime",
    desc: "Garansi uptime 99% didukung multi backbone internet dilengkapi anti DDOS, server yang handal, dan dynamic firewall.",
    img: "uptime.svg",
  },
];

export const PeimaryFeatureCard = () => {
  const items = primaryFeatures;

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-3xl border border-slate-100 p-2 transition duration-300 ease-linear hover:bg-slate-100"
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
          className="flex items-center justify-start rounded-3xl p-4 transition duration-300 ease-linear hover:bg-slate-100 md:flex-col md:items-center md:p-6"
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

// Service Providers
export const ServiceProviderCard = () => {
  const items = serviceProviders;

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex w-1/3 flex-col items-center gap-4 p-3 text-center sm:w-1/2 sm:p-4 md:w-1/5"
        >
          {/* # */}
          <Image
            src={`/${item.img}`}
            alt={item.title}
            width={134}
            height={134}
            className="h-16 w-auto sm:h-20"
          />

          {/* # */}
          <h3 className="h4 text-xs font-bold text-white sm:w-4/5 sm:text-base">
            {item.title}
          </h3>
        </div>
      ))}
    </>
  );
};

// Customer Supports
export const CustomerSupportCard = () => {
  const items = customerSupports;

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:items-center md:text-center"
        >
          {/* # */}
          <div className="flex items-center md:flex-col">
            {/* ## */}
            <Image
              src={`/${item.img}`}
              alt={item.title}
              width={64}
              height={64}
              className="h-10 w-10 md:h-16 md:w-16"
            />

            {/* ## */}
            <h3 className="h3 font-bold text-white max-md:ml-4 md:mt-4">
              {item.title}
            </h3>
          </div>

          {/* # */}
          <p className="mt-4 text-white">{item.desc}</p>
        </div>
      ))}
    </>
  );
};
