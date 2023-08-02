import Image from "next/image";
import Link from "next/link";

const LogoBrand = () => {
  return (
    <Link href="/">
      <Image
        src="/logo-white.svg"
        alt="Rumahweb"
        width={100}
        height={100}
        className="h-8 w-auto md:h-10"
      />
    </Link>
  );
};

export default LogoBrand;
