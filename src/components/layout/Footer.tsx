import { Link } from "react-router-dom";
import { Linkedin, Instagram, Github, Facebook } from "lucide-react";
import logoOrbit from "@/assets/logo-orbit.png";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center" aria-label="Orbit P1 home">
              <img
                src={logoOrbit}
                alt="Orbit P1"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Orbit P1 provides SEO, AI SEO, website development and lead generation services to help businesses increase visibility, generate qualified leads and grow online.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { Icon: Linkedin, url: "https://www.linkedin.com/company/orbit-p1/" },
                { Icon: Instagram, url: "https://www.instagram.com/orbit_p1/" },
                { Icon: Facebook, url: "https://www.facebook.com/orbitp1agency/" },
              ].map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground">SEO & AI SEO</Link></li>
              <li><Link to="/web-development" className="hover:text-foreground">Website Development</Link></li>
              <li><Link to="/lead-generation" className="hover:text-foreground">Lead Generation</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Get started</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground">Free SEO audit</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Book a call</Link></li>
              <li><a href="mailto:contact@orbitp1.com" className="hover:text-foreground">contact@orbitp1.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Orbit P1. All rights reserved.</p>
          <p>Crafted for growth.</p>
        </div>
      </div>
    </footer>
  );
};
