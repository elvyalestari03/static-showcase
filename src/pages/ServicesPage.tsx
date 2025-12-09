import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 animate-fade-in">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight animate-fade-in-up">
              Comprehensive Solutions for Digital Success
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
              From strategy to execution, we provide end-to-end services designed to transform your business and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="How We Work"
            title="Our Proven Process"
            description="A structured approach that ensures consistency, quality, and measurable results for every engagement."
          />
          
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We dive deep to understand your goals, challenges, and opportunities." },
              { step: "02", title: "Strategy", description: "We develop a tailored roadmap aligned with your business objectives." },
              { step: "03", title: "Execution", description: "Our team brings the strategy to life with precision and creativity." },
              { step: "04", title: "Optimization", description: "We measure, analyze, and refine for continuous improvement." },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative text-center animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="text-6xl font-bold text-accent/20">{item.step}</div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHpNNDAgMzBoNHY0aC00ek0yOCAyMmg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Contact us today to discuss your project and discover how we can help you achieve your goals.
            </p>
            <div className="mt-10">
              <Button asChild variant="accent" size="xl" className="group">
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
