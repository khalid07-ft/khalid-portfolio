import { Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:khalid.ftaita@email.com' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }} className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-heading text-foreground">
                Khalid<span className="text-sky-500">.</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Computer Science student passionate about building innovative solutions and learning new technologies.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-sky-500 hover:border-sky-500/50 transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-sky-500 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-sky-500" />
                khalid.ftaita@email.com
              </li>
              <li className="text-muted-foreground text-sm">
                Based in Morocco
              </li>
              <li className="text-muted-foreground text-sm">
                Open to opportunities
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              &copy; {currentYear} Khalid Ftaita. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and lots of <span className="text-sky-500">code</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
