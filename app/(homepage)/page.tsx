import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// Icons
import { ArrowRight } from "lucide-react";

// Components
import DomainSearch from "@/components/domain-search";
import {
  PeimaryFeatureCard,
  SecondaryFeatureCard,
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
    </>
  );
}
