import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Target, Palette, Globe, FileText, BarChart3, Layers } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { CTAButton } from "@/components/shared/CTAButton";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services, Service } from "@/data/services";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Target,
  Palette,
  Globe,
  FileText,
  BarChart3,
  Layers,
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <CTAButton href="/services">View All Services</CTAButton>
          </div>
        </div>
      </Layout>
    );
  }

  const Icon = iconMap[service.icon] || Target;
  const currentIndex = services.findIndex(s => s.slug === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 text-accent mb-6 animate-scale-in">
              <Icon className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight animate-fade-in-up">
              {service.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up delay-100">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {service.content.split('\n\n').map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed mb-6 animate-fade-in-up opacity-0"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Features */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">What's Included</h2>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 animate-fade-in-up opacity-0"
                      style={{ animationDelay: `${(index + 3) * 100}ms`, animationFillMode: "forwards" }}
                    >
                      <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Benefits Card */}
                <div className="bg-card border border-border rounded-xl p-6 animate-fade-in-up delay-200">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-hero rounded-xl p-6 text-primary-foreground animate-fade-in-up delay-300">
                  <h3 className="text-lg font-semibold mb-2">Ready to Get Started?</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Let's discuss how {service.title.toLowerCase()} can transform your business.
                  </p>
                  <Button asChild variant="accent" className="w-full">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {prevService ? (
              <Link
                to={`/services/${prevService.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider">Previous</div>
                  <div className="font-medium">{prevService.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {nextService ? (
              <Link
                to={`/services/${nextService.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider">Next</div>
                  <div className="font-medium">{nextService.title}</div>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
