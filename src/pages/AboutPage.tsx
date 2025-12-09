import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Shield, Award, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTAButton } from "@/components/shared/CTAButton";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Lightbulb,
  Shield,
  Award,
  Users,
};

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 animate-fade-in">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight animate-fade-in-up">
              Building the Future of Digital Business
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
              {company.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-6">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {company.mission}
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 animate-fade-in-up delay-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-6">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Vision</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {company.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Our Values"
            title="What We Stand For"
            description="These core principles guide everything we do and shape how we work with our clients."
          />
          
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.values.map((value, index) => {
              const Icon = iconMap[value.icon] || Lightbulb;
              return (
                <div
                  key={value.title}
                  className="bg-card border border-border rounded-xl p-6 text-center animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              label="Our Story"
              title="A Journey of Growth"
              align="center"
            />
            
            <div className="mt-12 prose prose-lg max-w-none text-muted-foreground">
              {company.history.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Our Team"
            title="Meet the People Behind Our Success"
            description="Our diverse team of experts brings together decades of experience across strategy, design, and technology."
          />
          
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {company.team.map((member, index) => (
              <div
                key={member.id}
                className="text-center animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-accent">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-accent font-medium mt-1">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
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
              Want to Work With Us?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              We're always looking for talented people and exciting projects. Let's create something amazing together.
            </p>
            <div className="mt-10">
              <Button asChild variant="accent" size="xl" className="group">
                <Link to="/contact">
                  Get in Touch
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
