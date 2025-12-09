import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { company } from "@/data/company";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Digital Strategy", href: "/services/digital-strategy" },
    { name: "Brand Development", href: "/services/brand-development" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Content Marketing", href: "/services/content-marketing" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">
                Nexus<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              {company.tagline}. Helping businesses thrive in the digital age since {company.foundedYear}.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={company.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  {company.contact.address}<br />
                  {company.contact.city}<br />
                  {company.contact.country}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${company.contact.phone}`}
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  {company.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  {company.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
