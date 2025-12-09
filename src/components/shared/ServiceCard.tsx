import { Link } from "react-router-dom";
import { ArrowRight, Target, Palette, Globe, FileText, BarChart3, Layers } from "lucide-react";
import { Service } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Target,
  Palette,
  Globe,
  FileText,
  BarChart3,
  Layers,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Target;

  return (
    <Link
      to={`/services/${service.slug}`}
      className={cn(
        "group relative block bg-card rounded-xl p-8 border border-border shadow-sm",
        "hover:shadow-lg hover:border-accent/30 transition-all duration-300",
        "animate-fade-in-up opacity-0"
      )}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
            {service.title}
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {service.description}
          </p>
          <div className="mt-4 flex items-center text-sm font-medium text-accent">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </Link>
  );
}
