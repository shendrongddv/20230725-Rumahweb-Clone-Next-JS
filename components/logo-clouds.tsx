import Image from "next/image";

// Content
const contentClientClouds = [
  {
    id: 1,
    img: "mandiri.png",
  },
  {
    id: 2,
    img: "jawapos.png",
  },
  {
    id: 3,
    img: "mayapada.png",
  },
  {
    id: 4,
    img: "zoya.jpg",
  },
];

export const ClientClouds = () => {
  const items = contentClientClouds;

  return (
    <div className="flex flex-wrap items-center justify-center">
      {items.map((item) => (
        <div key={item.id} className="border">
          <Image
            src={`/clients/${item.img}`}
            alt="Image"
            width={100}
            height={100}
            className=""
          />
        </div>
      ))}
    </div>
  );
};
