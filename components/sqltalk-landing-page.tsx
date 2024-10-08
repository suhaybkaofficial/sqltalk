"use client";

import { Header } from "./header";
import { Hero } from "./hero";
import { Features } from "./features";
import { HowItWorks } from "./how-it-works";
import { Testimonials } from "./testimonials";
import { CallToAction } from "./call-to-action";
import { Footer } from "./footer";
import { SqltalkApp } from "./sqltalk-app";

export function SqltalkLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 w-full">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          id="sqltalk"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#433878]">
                  Try sqltalk Now
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Enter your query in plain English and see the magic happen.
                </p>
              </div>
              <div>
                <SqltalkApp />
              </div>
            </div>
          </div>
        </section>
        <Features />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}