
const Footer = () => {
  const companyLinks = [
    { name: "Contact Us", href: "#contact" },
    { name: "Blog", href: "#blog" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#instagram" },
    { name: "X", href: "#twitter" },
    { name: "LinkedIn", href: "#linkedin" },
    { name: "Facebook", href: "#facebook" },
  ];

  return (
    <footer className="bg-card border-t border-border/50 py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 group mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="M9 12h6" />
                    <path d="M12 9v6" />
                  </svg>
                </div>
                <div className="absolute -inset-1 bg-gradient-accent opacity-30 blur-md rounded-xl -z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 group-hover:from-blue-300 group-hover:via-blue-400 group-hover:to-purple-400 transition-all duration-300">
                TICPIN
              </span>
            </a>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="#app-store"
                className="flex items-center gap-3 bg-secondary hover:bg-muted hover:scale-105 transition-all duration-300 rounded-lg px-4 py-2 shadow-md hover:shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground fill-current">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Download on the</p>
                  <p className="text-sm font-semibold text-foreground">App Store</p>
                </div>
              </a>
              <a
                href="#google-play"
                className="flex items-center gap-3 bg-secondary hover:bg-muted hover:scale-105 transition-all duration-300 rounded-lg px-4 py-2 shadow-md hover:shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="#EA4335" d="M5.26 3.08L13.58 12 5.26 20.92c-.36-.36-.26-.92-.26-1.33V4.4c0-.41-.1-.97.26-1.32z" />
                  <path fill="#FBBC04" d="M18.1 9.96L15.7 8.47 13.58 12l2.12 3.53 2.4-1.49c.8-.5 1.25-1.3 1.25-2.04s-.45-1.54-1.25-2.04z" />
                  <path fill="#4285F4" d="M5.26 3.08c.36-.36.86-.5 1.37-.2l6.95 4.59-2.12 3.53L5.26 3.08z" />
                  <path fill="#34A853" d="M13.58 12l2.12 3.53-6.95 4.59c-.51.3-1.01.16-1.37-.2L13.58 12z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">GET IT ON</p>
                  <p className="text-sm font-semibold text-foreground">Google Play</p>
                </div>
              </a>
            </div>

            <p className="text-primary text-sm font-medium">
              Designed for events & made in India 🇮🇳
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Social</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} TICPIN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
