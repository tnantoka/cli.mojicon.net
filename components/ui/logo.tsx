import Link from "next/link";

export default function Logo() {
  return (
    <Link href="https://mojicon.net/" className="inline-flex" aria-label="Cruip">
      <img src="https://mojicon.net/icon-180.png" width={28} height={28} className="rounded-full" />
    </Link>
  );
}
