import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/site-path";

type LogoProps = {
  light?: boolean;
  href?: string;
};

export function Logo({ light = true, href = "#top" }: LogoProps) {
  return (
    <Link
      href={href}
      className="inline-flex focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
      aria-label="Fuori Forno, torna all’inizio"
    >
      <Image
        src={withBasePath(light ? "/images/logo-fuori-forno-bianco.png" : "/images/logo-fuori-forno-nero.png")}
        alt=""
        width={1200}
        height={307}
        sizes="(max-width: 639px) 120px, 152px"
        className="h-auto w-[7.5rem] sm:w-[9.5rem]"
      />
    </Link>
  );
}
