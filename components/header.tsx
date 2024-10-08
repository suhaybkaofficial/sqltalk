import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function Header() {
  return (
    <header className="w-full px-4 lg:px-6 h-14 flex items-center border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <MessageCircle className="h-6 w-6 text-[#433878]" />
          <span className="ml-2 text-xl font-bold text-[#433878]">sqltalk</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-[#7E60BF] transition-colors"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#7E60BF] transition-colors"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#7E60BF] transition-colors"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#7E60BF] transition-colors"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}