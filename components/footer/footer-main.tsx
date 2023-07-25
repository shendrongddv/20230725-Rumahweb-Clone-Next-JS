import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FooterLink from "./footer-link";
import FooterMenu from "./footer-menu";

const FooterMain = () => {
  return (
    <footer className="bg-[#26274F] bg-primary-foreground bg-[url(/bg-footer.svg)] bg-left-bottom bg-no-repeat px-4 pt-16">
      <div className="container flex flex-col gap-16">
        {/* # */}
        <div className="flex flex-col gap-12 md:flex-row md:justify-evenly">
          {/* Col */}
          <div className="w-full md:w-1/4">
            <Link href="/">
              <Image
                src="/logo-white.svg"
                alt="Rumahweb"
                width={100}
                height={100}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* # Col */}
          <div className="w-full max-md:order-last md:w-1/4">
            {/* # */}
            <h4 className="h3 font-bold text-accent-foreground">
              Hubungi Kami
            </h4>

            {/* # */}
            <ul className="mt-4 space-y-3">
              <li className="flex gap-1">
                <span className="font-semibold text-white">Telepon:</span>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white hover:underline"
                >
                  0274-882257
                </Link>
                <span className="text-white/80">(Hunting)</span>
              </li>
              <li className="flex gap-1">
                <span className="font-semibold text-white">Email:</span>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white hover:underline"
                >
                  info@rumahweb.com
                </Link>
              </li>
              <li className="flex gap-1">
                <span className="font-semibold text-white">Support:</span>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white hover:underline"
                >
                  teknis@rumahweb.com
                </Link>
              </li>
            </ul>

            {/* # */}
            <ul className="mt-8 space-y-6">
              <li className="flex flex-col gap-1">
                <span className="font-semibold text-white">
                  Yogyakarta (Headquarter)
                </span>
                <span className="text-white/80">
                  Jalan Lempongsari No. 39C Sleman, Yogyakarta 55581
                </span>
                <Link
                  href="/"
                  className="mt-2 flex items-center text-white/80 hover:text-white hover:underline"
                >
                  <MapPin className="mr-4 h-4 w-auto" />
                  <span className="text-sm leading-none">View Map</span>
                </Link>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-semibold text-white">
                  Jakarta (Branch)
                </span>
                <span className="text-white/80">
                  CityLoft Sudirman Unit #2503 Jl. KH. Mas Mansyur No. 121 Karet
                  Tengsin, Jakarta Pusat
                </span>
                <Link
                  href="/"
                  className="mt-2 flex items-center text-white/80 hover:text-white hover:underline"
                >
                  <MapPin className="mr-4 h-4 w-auto" />
                  <span className="text-sm leading-none">View Map</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* # */}
          <FooterMenu />
        </div>

        {/* # */}
        <div className="flex flex-wrap gap-2 border-t border-white/10 py-4">
          <FooterLink />
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
