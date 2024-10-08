import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#433878] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Transform Your Data Queries with Natural Language
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Ask questions in plain English and get accurate SQL queries
              instantly. sqltalk is your AI-powered SQL assistant.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="#sqltalk">
              <Button className="bg-white text-[#433878] hover:bg-gray-100">
                Start Chatting
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}