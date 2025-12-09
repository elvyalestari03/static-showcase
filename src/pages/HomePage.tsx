import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { CTAButton } from "@/components/shared/CTAButton";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { company } from "@/data/company";

const stats = [
  { label: "Years of Excellence", value: `${new Date().getFullYear() - company.foundedYear}+` },
  { label: "Projects Delivered", value: "500+" },
  { label: "Happy Clients", value: "200+" },
  { label: "Team Members", value: "50+" },
];

const features = [
  "Data-driven strategy development",
  "Award-winning creative design",
  "Cutting-edge technology solutions",
  "Dedicated support & partnership",
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHpNNDAgMzBoNHY0aC00ek0yOCAyMmg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        
        <div className="container mx-auto px-6 lg:px-8 py-24 md:py-32 lg:py-40 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
              Welcome to {company.name}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground tracking-tight leading-tight animate-fade-in-up">
              {company.tagline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
              {company.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              <Button asChild variant="accent" size="xl" className="group">
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 100V50C240 83.3333 480 100 720 100C960 100 1200 83.3333 1440 50V100H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="text-4xl md:text-5xl font-bold text-accent">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-in-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Your Partner in Digital Excellence
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Since {company.foundedYear}, we've been helping businesses transform their digital presence 
                and achieve remarkable growth. Our team combines strategic thinking with creative 
                excellence to deliver solutions that make a real impact.
              </p>
              <ul className="mt-8 space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton href="/about">Learn More About Us</CTAButton>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-square bg-primary/5 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-4 bg-gradient-to-br from-accent/20 to-primary/10 rounded-xl" />
                <div className="absolute inset-8 border-2 border-accent/30 rounded-lg" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-6xl md:text-7xl font-bold text-accent">{new Date().getFullYear() - company.foundedYear}</div>
                  <div className="text-muted-foreground font-medium mt-2">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="What We Offer"
            title="Services That Drive Results"
            description="From strategy to execution, we provide comprehensive solutions tailored to your unique business challenges."
          />
          
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <CTAButton href="/services">View All Services</CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHpNNDAgMzBoNHY0aC00ek0yOCAyMmg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals. Get in touch with our team today for a free consultation.
            </p>
            <div className="mt-10">
              <Button asChild variant="accent" size="xl" className="group">
                <Link to="/contact">
                  Start Your Project
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
