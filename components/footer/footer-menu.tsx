import Link from "next/link";

// Content
const dataFooterMenu = [
  {
    id: 1,
    title: "Layanan",
    links: [
      {
        id: 1,
        label: "Hosting Murah",
        href: "/",
      },
      {
        id: 2,
        label: "VPS Murah",
        href: "/",
      },
      {
        id: 3,
        label: "SSL Murah",
        href: "/",
      },
      {
        id: 4,
        label: "Domain Murah",
        href: "/",
      },
      {
        id: 5,
        label: "Google Workspace",
        href: "/",
      },
      {
        id: 6,
        label: "Jasa Pembuatan Website",
        href: "/",
      },
      {
        id: 7,
        label: "Journal",
        href: "/",
      },
      {
        id: 8,
        label: "Blog",
        href: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Informasi",
    links: [
      {
        id: 1,
        label: "Tentang Rumahweb",
        href: "/",
      },
      {
        id: 2,
        label: "Pembayaran",
        href: "/",
      },
      {
        id: 3,
        label: "Tutorial",
        href: "/",
      },
      {
        id: 4,
        label: "Manual",
        href: "/",
      },
      {
        id: 5,
        label: "Knowledgebase",
        href: "/",
      },
      {
        id: 6,
        label: "Service Level Agreement",
        href: "/",
      },
      {
        id: 7,
        label: "Acceptable Use Policy",
        href: "/",
      },
      {
        id: 8,
        label: "Perjanjian Layanan",
        href: "/",
      },
      {
        id: 9,
        label: "Kebijakan Privasi",
        href: "/",
      },
      {
        id: 10,
        label: "We're Hiring!",
        href: "/",
      },
    ],
  },
];

const FooterMenu = () => {
  const items = dataFooterMenu;

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="w-full md:flex-1">
          <h4 className="h3 font-bold text-accent-foreground">{item.title}</h4>

          {/* # */}
          <ul className="mt-4 max-md:grid max-md:grid-cols-2 max-md:gap-3 md:space-y-3">
            {item.links.map((subitem) => (
              <li key={subitem.id} className="flex gap-1">
                <Link
                  href={subitem.href}
                  className="text-white/80 hover:text-white hover:underline"
                >
                  {subitem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterMenu;
