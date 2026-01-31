import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background">
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse-glow dark:bg-sky-500/10 bg-sky-500/20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        
        {/* Noise Overlay */}
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-sky-500 font-medium tracking-wide text-lg">
                &lt;Hello, I'm /&gt;
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-foreground leading-tight">
                Khalid{' '}
                <span className="text-gradient">Ftaita</span>
              </h1>
              <p className="text-xl sm:text-2xl text-indigo-500 font-medium">
                Computer Science Student
              </p>
            </div>

            {/* Tagline */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Building the future, one line of code at a time. Passionate about 
              algorithms, web development, and creating impactful digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:shadow-glow-lg hover:scale-105"
              >
                View My Work
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-sky-500/30 text-sky-500 hover:bg-sky-500/10 px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-sky-500 hover:border-sky-500/50 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-sky-500 hover:border-sky-500/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:khalid.ftaita@email.com"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-sky-500 hover:border-sky-500/50 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Image Container with Glow */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl blur-2xl opacity-30 animate-pulse-glow" />
              
              {/* Profile Image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-sky-500/20 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Khalid Ftaita"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Available for work</span>
                </div>
              </div>

              {/* Code Snippet Decoration */}
              <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 hidden sm:block">
                <code className="text-xs text-sky-500 font-mono">
                  const passion = "code";
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-sky-500/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-sky-500 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
