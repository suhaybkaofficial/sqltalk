import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#433878] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          How It Works
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Step number={1} title="Input Schema" description="Paste or generate your database schema" />
          <Step number={2} title="Ask Questions" description="Use natural language to query your data" />
          <Step number={3} title="Receive SQL" description="Get accurate SQL queries tailored to your database type" />
          <Step number={4} title="Execute & Analyze" description="Run the queries on your database effortlessly" />
        </div>
      </div>
    </section>
  );
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="flex flex-col items-center space-y-2 border-r border-[#7E60BF] px-4 last:border-r-0">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#433878]">
        {number}
      </span>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-200 text-center">{description}</p>
    </div>
  );
}