import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="Lifetime Auto Sales"
        width={300}
        height={85}
        className="h-[54px] w-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
        priority
      />
    </Link>
  );
}
