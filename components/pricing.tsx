import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#433878]">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Free Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-4">$0 <span className="text-base font-normal">/month</span></p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>100 queries per month</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Basic SQL dialects support</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Community support</span>
                </li>
              </ul>
              <Button className="w-full bg-[#433878] text-white hover:bg-[#7E60BF]">
                Get Started
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full border-[#433878] border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Enterprise Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-4">Custom</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Unlimited queries</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Advanced SQL dialects support</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>24/7 Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <Button className="w-full bg-[#433878] text-white hover:bg-[#7E60BF]">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}