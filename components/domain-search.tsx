import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

// Content
const contentDomainPromo = [
  {
    id: 1,
    price: 45000,
    img: "dot_id.webp",
  },
  {
    id: 2,
    price: 45000,
    img: "dot_com.webp",
  },
  {
    id: 3,
    price: 45000,
    img: "dot_xyz.webp",
  },
  {
    id: 4,
    price: 45000,
    img: "dot_online.webp",
  },
  {
    id: 5,
    price: 45000,
    img: "dot_store.webp",
  },
];

const DomainSearch = () => {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-lime-500 px-4 py-6 md:gap-10 md:px-10 md:py-10">
      {/* # */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        {/* ## */}
        <div
          className="md:w-1/3
        "
        >
          <h2 className="h3 font-bold text-white max-md:text-center">
            Website beken berawal dari domain keren
          </h2>
        </div>

        {/* ## */}
        <div className="md:w-2/3">
          <div className="flex flex-col gap-2 rounded-lg bg-white p-2 md:flex-row">
            <Input
              type="email"
              placeholder="Cek domainmu disini..."
              className="border-transparent"
            />
            <Button
              type="submit"
              variant="default"
              className="my-gradient-1 flex-none px-6 text-base font-semibold text-white shadow-lg"
            >
              Cari Domain
            </Button>
          </div>
        </div>
      </div>

      {/* # */}
      <div className="w-full">
        <ul className="flex flex-wrap items-center justify-center gap-6 md:justify-start md:gap-8">
          {contentDomainPromo?.map((item) => (
            <li key={item.id} className="flex items-end gap-2">
              <Image
                src={`/domains/${item.img}`}
                alt="Domain"
                width={100}
                height={100}
                className="h-4 w-auto md:h-6"
              />
              <span className="leading-none text-white">
                Rp&nbsp;{item.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DomainSearch;
