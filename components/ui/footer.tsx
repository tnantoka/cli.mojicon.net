import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="text-center pb-10">
        <div className="text-sm text-gray-600">
          &copy; <a href="https://x.com/tnantoka">tnantoka</a>
        </div>
      </div>
    </footer>
  );
}
