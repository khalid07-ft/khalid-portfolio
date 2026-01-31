import { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, Languages, Target } from 'lucide-react';

interface DataPoint {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const dataPoints: DataPoint[] = [
  { icon: <Calendar className="w-5 h-5" />, label: 'Age', value: '19' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Morocco' },
  { icon: <Languages className="w-5 h-5" />, label: 'Languages', value: 'AR, FR, EN' },
  { icon: <Target className="w-5 h-5" />, label: 'Focus', value: 'AI & Web Dev' },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sky-500 font-medium tracking-wide mb-2">
            &lt;About Me /&gt;
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-foreground">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Bio */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass rounded-2xl p-8 space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I'm a first-year <span className="text-sky-500 font-medium">Computer Science</span> student at 
                Université de Technologie, passionate about exploring the endless possibilities 
                of technology and software development.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech started with a curiosity about how things work, which quickly 
                evolved into a deep passion for coding. I enjoy solving complex problems, learning 
                new technologies, and building projects that make a difference.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm focusing on strengthening my foundation in <span className="text-indigo-500">algorithms</span>, 
                {' '}<span className="text-indigo-500">data structures</span>, and <span className="text-indigo-500">web development</span>. 
                I'm excited about the future of AI and its potential to transform how we interact with technology.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-500">1+</div>
                  <div className="text-sm text-muted-foreground">Year Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-500">10+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">5+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Data Points */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {dataPoints.map((point, index) => (
              <div
                key={point.label}
                className="glass rounded-xl p-6 hover:border-sky-500/30 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500/20 to-indigo-500/20 flex items-center justify-center text-sky-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <p className="text-sm text-muted-foreground mb-1">{point.label}</p>
                <p className="text-lg font-semibold text-foreground">{point.value}</p>
              </div>
            ))}

            {/* Motivation Card */}
            <div className="col-span-2 glass rounded-xl p-6 border-l-4 border-sky-500">
              <p className="text-foreground italic">
                "The only way to do great work is to love what you do. Every line of code 
                is a step toward mastering the craft."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
