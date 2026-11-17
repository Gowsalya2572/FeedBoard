
import { useState } from "react";
import { Link } from "react-router-dom";
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-teal-900/5 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-app-text/75 transition hover:text-primary-teal"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/signin"
            className="text-sm font-semibold text-app-text transition hover:text-primary-teal"
          >
            Sign In
          </Link>

          <Button
            size="md"
            icon={ArrowUpRight}
            onClick={() => {
              window.location.href = "/signup";
            }}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-deep-teal transition hover:bg-pale-mint md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-teal-900/10 bg-white px-5 py-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-medium text-app-text transition hover:text-primary-teal"
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-3 border-t border-slate-100 pt-4">
              <Link
                to="/signin"
                onClick={closeMenu}
                className="text-sm font-semibold text-deep-teal"
              >
                Sign In
              </Link>

              <Button
                fullWidth
                onClick={() => {
                  closeMenu();
                  window.location.href = "/signup";
                }}
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
