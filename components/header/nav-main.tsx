import Link from "next/link";

// Content
import { MainNav } from "@/config/site";

const NavMain = () => {
  const items = MainNav;

  return (
    <nav className="hidden items-center justify-center gap-6 md:flex">
      {items?.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          aria-label={item.label}
          className="cursor-pointer font-semibold text-white"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavMain;
