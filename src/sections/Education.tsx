import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  courses: string[];
  achievements?: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor's in Computer Science",
    institution: 'Université de Technologie',
    period: '2023 - 2026',
    description: 'Currently pursuing a degree in Computer Science with a focus on software engineering, algorithms, and data structures.',
    courses: ['Data Structures', 'Algorithms', 'Object-Oriented Programming', 'Database Systems', 'Web Development'],
    achievements: ['Dean\'s List - First Semester', 'Top 10% of Class'],
  },
  {
    degree: 'High School Diploma',
    institution: 'Lycée Scientifique',
    period: '2020 - 2023',
    description: 'Completed high school with a focus on mathematics and sciences, laying the foundation for my technical journey.',
    courses: ['Mathematics', 'Physics', 'Computer Science'],
    achievements: ['Honor Roll', 'Science Fair Winner'],
  },
];

const Education = () => {
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
      id="education"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-indigo-500 font-medium tracking-wide mb-2">
            &lt;Education /&gt;
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-foreground">
            My <span className="text-gradient">Learning</span> Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-indigo-500/50 to-purple-500/50 md:-translate-x-1/2" />

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={item.degree}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-sky-500 border-4 border-background md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 rounded-full bg-sky-400 animate-ping opacity-50" />
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-[calc(50%+2rem)]'}`}>
                  <div className="glass rounded-2xl p-6 lg:p-8 hover:border-sky-500/30 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                          <p className="text-indigo-500">{item.institution}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6">{item.description}</p>

                    {/* Courses */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <BookOpen className="w-4 h-4" />
                        <span>Key Courses</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.courses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 rounded-full text-sm bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    {item.achievements && (
                      <div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Award className="w-4 h-4" />
                          <span>Achievements</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement) => (
                            <span
                              key={achievement}
                              className="px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
