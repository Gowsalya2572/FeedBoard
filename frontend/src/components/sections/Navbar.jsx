
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

import Logo from "../Logo";
import Button from "../Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const handleGetStarted = () => {
    closeMenu();
    navigate("/signup");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-teal-900/5 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">

        {/* Logo */}
        <div className="shrink-0">
          <Logo />
        </div>

        {/* Desktop Navigation - Large screens only */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-app-text/75 transition hover:text-primary-teal"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <Link
            to="/signin"
            className="whitespace-nowrap text-sm font-semibold text-app-text transition hover:text-primary-teal"
          >
            Sign In
          </Link>

          <Button
            size="md"
            icon={ArrowUpRight}
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile & Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal-900/10 text-deep-teal transition hover:bg-pale-mint lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile & Tablet Navigation */}
      {menuOpen && (
        <div className="border-t border-teal-900/10 bg-white px-5 py-5 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-app-text transition hover:bg-pale-mint hover:text-primary-teal"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-3 flex flex-col gap-3 border-t border-slate-100 pt-4">
              <Link
                to="/signin"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-deep-teal transition hover:bg-pale-mint"
              >
                Sign In
              </Link>

              <Button
                fullWidth
                icon={ArrowUpRight}
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

