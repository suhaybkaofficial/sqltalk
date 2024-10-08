import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Database, Zap, Globe, LucideIcon } from "lucide-react";
import { ReactElement } from "react";

// Add this type definition
interface FeatureCardProps {
  icon: ReactElement<LucideIcon>;
  title: string;
  description: string;
}

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<MessageCircle className="h-12 w-12 text-[#433878]" />}
            title="Natural Language Processing"
            description="Interact with your database using everyday language"
          />
          <FeatureCard
            icon={<Database className="h-12 w-12 text-[#433878]" />}
            title="Schema Management"
            description="Easily input or generate table schemas"
          />
          <FeatureCard
            icon={<Globe className="h-12 w-12 text-[#433878]" />}
            title="Multi-Dialect Support"
            description="Compatible with MySQL, PostgreSQL, and more"
          />
          <FeatureCard
            icon={<Zap className="h-12 w-12 text-[#433878]" />}
            title="Real-Time Responses"
            description="Get instant SQL queries for your questions"
          />
        </div>
      </div>
    </section>
  );
}

// Update the function signature
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-[#7E60BF]">
      <CardContent className="flex flex-col items-center space-y-2 p-6">
        {icon}
        <h3 className="text-xl font-bold text-[#433878]">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}