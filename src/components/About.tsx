import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, GraduationCap, Code, Cpu, Zap } from "lucide-react";

const skills = {
  "Programming Languages": [
    "C/C++", "Python", "JavaScript", "TypeScript", "VHDL", "Assembly"
  ],
  "Embedded Systems": [
    "Arduino", "Raspberry Pi", "STM32", "ESP32", "PIC", "AVR"
  ],
  "Web Technologies": [
    "React", "Next.js", "Node.js", "HTML/CSS", "Tailwind CSS", "Git"
  ],
  "Electronics & Design": [
    "PCB Design", "KiCad", "Altium", "MATLAB", "Simulink", "LTSpice"
  ],
  "Tools & Platforms": [
    "VS Code", "Git", "Docker", "Linux", "Arduino IDE", "Quartus"
  ]
};

const timeline = [
  {
    year: "2022 - Present",
    title: "B.E. Electronics & Communication",
    organization: "Vidyavardhaka College of Engineering",
    location: "Mysuru, India",
    description: "Specializing in embedded systems and digital electronics with focus on real-world applications.",
    icon: GraduationCap
  },
  {
    year: "2024",
    title: "Rural Banking System Project",
    organization: "College Project",
    location: "VVCE, Mysuru",
    description: "Developed a supportive platform for rural banking with modern web technologies.",
    icon: Code
  },
  {
    year: "2024",
    title: "Mental Health AI Chatbot",
    organization: "Personal Project",
    location: "Open Source",
    description: "Created an AI-powered chatbot to provide mental health support and resources.",
    icon: Zap
  }
];

export function About() {
  return (
    <section id="about" className="py-section section-bg">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-title mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate ECE student at VVCE with a deep interest in embedded systems 
            and system-level design. I love bridging the gap between hardware and software 
            to create innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Professional Bio */}
          <div className="animate-fade-in-left">
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Cpu className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-heading font-semibold">My Journey</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Currently pursuing my Bachelor's degree in Electronics & Communication Engineering 
                    at Vidyavardhaka College of Engineering, Mysuru. My passion lies in creating 
                    embedded systems that solve real-world problems.
                  </p>
                  <p>
                    I specialize in the intersection of hardware and software, with experience in 
                    microcontroller programming, circuit design, and full-stack web development. 
                    My goal is to become a leading embedded systems engineer.
                  </p>
                  <p>
                    When I'm not coding or designing circuits, you can find me exploring new 
                    technologies, contributing to open-source projects, or sharing my knowledge 
                    with the developer community.
                  </p>
                </div>
                <div className="mt-8">
                  <Button variant="hero-outline" className="group">
                    <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-heading font-semibold mb-8">Timeline</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="bg-card p-6 rounded-lg border border-border hover:shadow-project-card transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-card-foreground">{item.title}</h4>
                        <span className="text-sm text-primary font-medium">{item.year}</span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-1">{item.organization}</p>
                      <p className="text-xs text-muted-foreground mb-3">{item.location}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-heading font-semibold text-center mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="project-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4 text-card-foreground">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="skill-pill text-xs py-1 px-3"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16 text-center animate-fade-in-up">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-semibold mb-6">Quick Facts</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎓</div>
                  <div className="font-semibold">ECE Student</div>
                  <div className="text-sm text-muted-foreground">VVCE Mysuru</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="font-semibold">Embedded Systems</div>
                  <div className="text-sm text-muted-foreground">Passionate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌍</div>
                  <div className="font-semibold">Mysuru, India</div>
                  <div className="text-sm text-muted-foreground">Based in</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💻</div>
                  <div className="font-semibold">Open Source</div>
                  <div className="text-sm text-muted-foreground">Contributor</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}