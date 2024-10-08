import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#433878] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Transform Your Data Queries?
            </h2>
            <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of users who are already simplifying their
              database interactions with sqltalk.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Link href="#sqltalk">
              <Button
                className="w-full bg-white text-[#433878] hover:bg-gray-100"
                size="lg"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}