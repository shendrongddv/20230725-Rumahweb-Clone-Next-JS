import Link from "next/link";

// Content
const dataFooterLink = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Hosting Murah",
    href: "/",
  },
  {
    id: 3,
    label: "Domain Murah",
    href: "/",
  },
  {
    id: 4,
    label: "VPS Murah",
    href: "/",
  },
  {
    id: 5,
    label: "Jasa Pembuatan Website",
    href: "/",
  },
  {
    id: 6,
    label: "Cara Membuat Website",
    href: "/",
  },
  {
    id: 7,
    label: "G-Suite",
    href: "/",
  },
  {
    id: 8,
    label: "Email",
    href: "/",
  },
  {
    id: 9,
    label: "Hosting",
    href: "/",
  },
  {
    id: 10,
    label: "SSL Murah",
    href: "/",
  },
  {
    id: 11,
    label: "Promo Domain",
    href: "/",
  },
  {
    id: 12,
    label: "Hosting Murah",
    href: "/",
  },
  {
    id: 13,
    label: "Promo domain .COM murah",
    href: "/",
  },
  {
    id: 14,
    label: "Promo domain .ID murah",
    href: "/",
  },
  {
    id: 15,
    label: "Hot Promo",
    href: "/",
  },
  {
    id: 16,
    label: "Domain & Hosting Gratis",
    href: "/",
  },
];

const FooterLink = () => {
  const items = dataFooterLink;

  return (
    <>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          aria-label={item.label}
          className="text-xs text-white/25 hover:text-white hover:underline"
        >
          {item.label}
        </Link>
      ))}
    </>
  );
};

export default FooterLink;
