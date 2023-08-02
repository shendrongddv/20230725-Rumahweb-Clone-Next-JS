import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const DomainSearch = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-lime-500 px-4 py-6 md:px-10 md:py-10">
      {/* # */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        {/* ## */}
        <div
          className="md:w-1/3
        "
        >
          <h2 className="h3 font-bold text-white">
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
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          repellat unde tempora illo culpa eveniet aut?
        </p>
      </div>
    </div>
  );
};

export default DomainSearch;
