import { Link } from "@tanstack/react-router";
import { AlertTriangle, Flame } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const footerLinks = {
  Shop: [
    { label: "All Crackers", category: "all" },
    { label: "Sparklers", category: "Sparklers" },
    { label: "Rockets", category: "Rockets" },
    { label: "Aerial Shots", category: "AerialShots" },
    { label: "Flower Pots", category: "FlowerPots" },
  ],
  Crackers: [
    { label: "Ground Chakkar", category: "GroundChakkar" },
    { label: "Bombs", category: "Bombs" },
    { label: "Novelty", category: "Novelty" },
  ],
};

const socialLinks = [
  { icon: SiInstagram, label: "Instagram" },
  { icon: SiFacebook, label: "Facebook" },
  { icon: SiX, label: "X" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const utmUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer className="bg-foreground text-card mt-auto" data-ocid="footer">
      {/* Safety Banner */}
      <div className="bg-primary/90 border-b border-card/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 mt-0.5 text-accent shrink-0" />
            <p className="text-xs text-primary-foreground/90 leading-relaxed">
              <strong className="text-primary-foreground">Safety First:</strong>{" "}
              Always read instructions before use. Keep away from children
              unless supervised by an adult. Use only in open, outdoor spaces.
              Never hold lit fireworks in hand (except rated sparklers). Keep a
              bucket of water or sand nearby. Check local regulations before
              bursting crackers.
            </p>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-accent/20 rounded-lg flex items-center justify-center border border-accent/30">
                <Flame className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="font-display text-base font-bold text-card leading-none block">
                  Fireworks Bazaar
                </span>
                <span className="text-xs text-card/50 font-body">
                  Diwali Crackers & Pyrotechnics
                </span>
              </div>
            </div>
            <p className="text-sm text-card/70 leading-relaxed max-w-sm mb-5">
              Bringing the brilliance of Diwali to your doorstep since 2010.
              Certified fireworks from trusted manufacturers — sparklers,
              rockets, aerial shots, and more for an unforgettable celebration.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="w-8 h-8 bg-card/10 rounded-lg flex items-center justify-center hover:bg-card/20 transition-colors"
                  data-ocid={`footer-social-${label.toLowerCase()}`}
                >
                  <Icon className="w-4 h-4 text-card/70" />
                </button>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-display font-semibold text-xs tracking-widest uppercase text-card/50 mb-4">
                {heading}
              </h3>
              <ul className="space-y-2.5">
                {links.map(({ label, category }) => (
                  <li key={label}>
                    <Link
                      to="/"
                      search={{ q: "", category }}
                      className="text-sm text-card/70 hover:text-card transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Safety & Info links */}
        <div className="border-t border-card/10 pt-6 mb-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-card/50">
            <span className="hover:text-card/80 transition-colors cursor-pointer">
              Safety Guidelines
            </span>
            <span className="hover:text-card/80 transition-colors cursor-pointer">
              About Us
            </span>
            <span className="hover:text-card/80 transition-colors cursor-pointer">
              Contact
            </span>
            <span className="hover:text-card/80 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-card/80 transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-card/40">
          <p>
            © {year} Fireworks Bazaar. Built with love using{" "}
            <a
              href={utmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-card/70 underline underline-offset-2 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-card/30">
            🎆 Celebrate responsibly. Burst safely.
          </p>
        </div>
      </div>
    </footer>
  );
}
