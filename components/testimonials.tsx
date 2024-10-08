import { Card, CardContent } from "@/components/ui/card";

// Add types for the testimonial data
type TestimonialData = {
  quote: string;
  author: string;
};

// Add type for the TestimonialCard props
interface TestimonialCardProps {
  quote: string;
  author: string;
}

export function Testimonials() {
  // Define the testimonials array with the new type
  const testimonials: TestimonialData[] = [
    {
      quote: "sqltalk has revolutionized how I interact with our databases. It's like having a SQL expert at my fingertips!",
      author: "Sarah K., Data Analyst",
    },
    {
      quote: "As a non-technical user, sqltalk has empowered me to extract the data I need without bothering our dev team.",
      author: "Mike R., Marketing Manager",
    },
    {
      quote: "The multi-dialect support is a game-changer. I can switch between MySQL and PostgreSQL queries effortlessly.",
      author: "Alex T., Database Administrator",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-[#433878]">
          What Our Users Say
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Add the props type to the TestimonialCard component
function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <Card className="border-[#7E60BF]">
      <CardContent className="flex flex-col space-y-2 p-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">{quote}</p>
        <p className="font-semibold text-[#433878]">- {author}</p>
      </CardContent>
    </Card>
  );
}