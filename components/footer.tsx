import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6 flex flex-col gap-2 sm:flex-row items-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 sqltalk. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-[#7E60BF]"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-[#7E60BF]"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}