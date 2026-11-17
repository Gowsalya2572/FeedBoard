
import { Link } from "react-router-dom";
import Logo from "../Logo";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

function Footer() {
  return (
    <footer className="bg-deep-teal px-5 py-12 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Logo light showTagline />
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
              Listen. Prioritize. Build Better.
              Helping businesses build products their customers love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col items-start gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/65 transition hover:text-mint"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">
              Follow Us
            </h3>

            <div className="flex flex-col items-start gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/65 transition hover:text-mint"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/55 sm:flex-row">
          <p>© 2026 FeedBoard. All rights reserved.</p>
          <p>Made for better products and happier customers.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;



