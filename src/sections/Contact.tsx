import { useEffect, useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'khalid.ftaita@email.com',
      href: 'mailto:khalid.ftaita@email.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+212 6XX XXX XXX',
      href: 'tel:+212600000000',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Morocco',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
        
        {/* Radar Grid Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03]"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0deg, rgba(14, 165, 233, 0.3) 60deg, transparent 120deg)',
              animation: 'spin 20s linear infinite',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sky-500 font-medium tracking-wide mb-2">
            &lt;Contact /&gt;
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-foreground">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's <span className="text-gradient">Connect</span>
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-foreground/5 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500/20 to-indigo-500/20 flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground group-hover:text-sky-500 transition-colors duration-300">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-sky-500 hover:border-sky-500/50 transition-all duration-300 hover:scale-110"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-sky-500/20 text-foreground placeholder:text-muted-foreground focus:border-sky-500 focus:ring-sky-500/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-sky-500/20 text-foreground placeholder:text-muted-foreground focus:border-sky-500 focus:ring-sky-500/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background border-sky-500/20 text-foreground placeholder:text-muted-foreground focus:border-sky-500 focus:ring-sky-500/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:shadow-glow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
