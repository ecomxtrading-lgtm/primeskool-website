import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../images/logo.svg";

const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hizmetler", href: "#features" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Başarılar", href: "#success" },
  { label: "İletişim", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const logoSizeClass = isScrolled ? "h-8 md:h-10" : "h-16 md:h-20";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 w-full">
        <div
          className={`flex items-center gap-4 md:gap-6 w-full ${
            isScrolled ? "h-[55px]" : "py-4 md:py-5"
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className={`flex items-center ${isScrolled ? "" : "ml-3 md:ml-6"}`}
            aria-label="Prime Skool Ana Sayfa"
          >
            <img
              src={logo}
              alt="Prime Skool logo"
              className={`w-auto transition-all duration-300 ${logoSizeClass}`}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* CTA Button */}
          <a
            href="#consultation"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#consultation");
            }}
            className="hidden md:inline-flex btn-primary text-sm px-6 py-2.5"
          >
            Ücretsiz Strateji Görüşmesi
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-foreground ml-auto"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#consultation"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#consultation");
                }}
                className="btn-primary text-center text-sm py-3"
              >
                Ücretsiz Danışmanlık
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
