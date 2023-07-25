import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// Icons
import { ArrowRight, MessageSquare } from "lucide-react";

// Components
import DomainSearch from "@/components/domain-search";
import {
  CustomerSupportCard,
  PeimaryFeatureCard,
  SecondaryFeatureCard,
  ServiceProviderCard,
} from "@/components/feature-card";

export default function Homepage() {
  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="bg-[url(/bg-hero.webp)] bg-cover bg-center bg-no-repeat"
      >
        {/* # */}
        <div className="px-4 py-16">
          <div className="container">
            <div className="relative flex w-full pb-28 sm:pb-0">
              {/* Col */}
              <div className="z-[1] w-full text-white md:w-3/5 md:py-16">
                <span className="text-3xl font-bold leading-tight md:text-6xl">
                  #ThinkBig#GrowBigger
                </span>
                <h1 className="mt-4 text-lg font-semibold md:text-xl">
                  Onlinekan Bisnismu Sekarang dengan Web Hosting Indonesia
                </h1>
                <p className="mt-4 opacity-90 md:w-4/5 md:text-lg">
                  Buat website dan email untuk bisnismu dan mulai mendunia
                  dengan layanan web hosting Indonesia dari Rumahweb. Dapatkan
                  hosting dengan kecepatan dan keamanan terbaik hanya Rp 99.000
                  setahun.
                </p>
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({
                      variant: "destructive",
                      size: "default",
                      className:
                        "my-gradient-1 mt-8 px-6 text-base font-semibold",
                    }),
                  )}
                >
                  Mulai
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <Image
                src="/hero-img.webp"
                priority
                alt="Image"
                width={720}
                height={720}
                className="absolute bottom-0 right-0 h-auto w-1/2 md:w-1/2"
              />
            </div>
          </div>
        </div>

        {/* # */}
        <div className="bg-gradient-to-b from-transparent from-50% to-white to-50% px-4">
          <div className="container">
            <DomainSearch />
          </div>
        </div>
      </section>
      {/* ./ Hero */}

      {/* Features */}
      <section className="px-4 py-16">
        <div className="container flex flex-col gap-12">
          {/* Primary Features */}
          <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3">
            <PeimaryFeatureCard />
          </div>

          {/* Secondary Features */}
          <div className="grid w-full sm:grid-cols-2 md:grid-cols-4">
            <SecondaryFeatureCard />
          </div>
        </div>
      </section>
      {/* ./ Features */}

      {/* Credits */}
      <section className="my-gradient-2 px-4 py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            {/* # Heading */}
            <div className="flex flex-col items-center text-center md:w-3/5">
              <h2 className="h2 font-bold text-white">
                155.000+ Pelanggan memilih Rumahweb karena ...
              </h2>
              <span className="mt-4 h-1 w-20 rounded-full bg-destructive"></span>
            </div>

            {/* # Content */}
            <div className="flex w-full flex-wrap justify-center">
              <ServiceProviderCard />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Credits */}

      {/* Solution */}
      <section className="px-4 py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            {/* # Heading */}
            <div className="flex flex-col items-center text-center md:w-3/5">
              <h2 className="h2 font-bold text-primary-foreground">
                Solusi Apa yang Tepat untuk Saya?
              </h2>
              <span className="mt-4 h-1 w-20 rounded-full bg-destructive"></span>
            </div>

            {/* # Content */}
            <div></div>
          </div>
        </div>
      </section>
      {/* ./ Solution */}

      {/* FAQ */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            {/* # Heading */}
            <div className="flex flex-col items-center text-center md:w-3/5">
              <h2 className="h2 font-bold text-primary-foreground">FAQ</h2>
              <p className="mt-4 text-xl">
                Pertanyaan seputar web hosting Indonesia dan pendaftaran nama
                domain di Rumahweb
              </p>
              <span className="mt-4 h-1 w-20 rounded-full bg-destructive"></span>
            </div>

            {/* # Content */}
            <div></div>
          </div>
        </div>
      </section>
      {/* ./ FAQ */}

      {/* Review */}
      <section className="px-4 py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            {/* # Heading */}
            <div className="flex flex-col items-center text-center md:w-3/5">
              <h2 className="h2 font-bold text-primary-foreground">Review</h2>
              <p className="mt-4 text-xl">
                Apa kata pelanggan tentang Rumahweb sebagai layanan hosting
                terbaik sejak tahun 2002
              </p>
              <span className="mt-4 h-1 w-20 rounded-full bg-destructive"></span>
            </div>

            {/* # Content */}
            <div></div>
          </div>
        </div>
      </section>
      {/* ./ Review */}

      {/* Clients */}
      <section className="px-4 py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            {/* # Heading */}
            <div className="flex flex-col items-center text-center md:w-4/5">
              <h2 className="h2 font-bold text-primary-foreground">
                Mereka yang menggunakan layanan kami...
              </h2>
              <span className="mt-4 h-1 w-20 rounded-full bg-destructive"></span>
            </div>

            {/* # Content */}
            <div></div>
          </div>
        </div>
      </section>
      {/* ./ Clients */}

      {/* CTA */}
      <section className="bg-slate-50 px-4 pt-16">
        <div className="container">
          <div className="flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between">
            {/* # Col Content */}
            <div className="text-center md:w-6/12 md:text-start">
              {/* # */}
              <h2 className="h2 font-semibold text-primary-foreground">
                <span className="font-extrabold">&quot;Orang Rumah&quot;</span>
                &nbsp;selalu ada untuk Anda
              </h2>
              {/* # */}
              <p className="mt-4">
                Jangan ragu memulai langkah di dunia maya bersama Rumahweb. Tak
                peduli apakah Anda seorang newbie atau ahli, Orang Rumah(web)
                akan selalu siap membantu.
              </p>
              {/* # */}
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "destructive",
                    size: "lg",
                    className: "mt-8 rounded-full px-6",
                  }),
                )}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Live Chat
              </Link>
            </div>

            {/* # Col Image */}
            <div className="md:w-4/12">
              <Image
                src="/orangrumah.webp"
                alt="Orang Rumah"
                width={500}
                height={450}
                className="mx-auto h-auto w-2/3 md:w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ./ CTA */}

      {/* Supports */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="container">
          <div className="grid gap-8 rounded-3xl bg-secondary-foreground px-4 py-8 shadow-lg sm:grid-cols-2 md:grid-cols-3 md:gap-14 md:p-10">
            {/* # Col */}
            <CustomerSupportCard />
          </div>
        </div>
      </section>
      {/* ./ Supports */}
    </>
  );
}
