import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";

const projectData = [
  {
    id: 1,
    title: "Rural Banking System",
    description: "A comprehensive web platform designed to support rural banking operations with modern technology and user-friendly interfaces.",
    longDescription: "Developed a full-stack web application that digitizes rural banking processes, making financial services more accessible to rural communities. Features include account management, transaction processing, and reporting systems.",
    tags: ["Web", "Full-Stack"],
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    demoUrl: "#",
    githubUrl: "https://github.com/yashwanthspl",
    featured: true
  },
  {
    id: 2,
    title: "Mental Health AI Chatbot",
    description: "An AI-powered chatbot that provides mental health support, resources, and 24/7 assistance for users seeking help.",
    longDescription: "Built an intelligent chatbot using natural language processing to provide mental health support. Includes sentiment analysis, resource recommendations, and crisis intervention protocols.",
    tags: ["AI/ML", "Web"],
    tech: ["Python", "FastAPI", "OpenAI API", "React", "MongoDB"],
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=400&h=250&fit=crop",
    demoUrl: "#",
    githubUrl: "https://github.com/yashwanthspl",
    featured: true
  },
  {
    id: 3,
    title: "Smart Home Automation",
    description: "IoT-based home automation system using ESP32 microcontrollers for controlling lights, fans, and security systems.",
    longDescription: "Designed and implemented a complete smart home solution with ESP32 microcontrollers, mobile app control, and voice commands. Features real-time monitoring and energy consumption tracking.",
    tags: ["IoT", "Embedded"],
    tech: ["ESP32", "Arduino IDE", "React Native", "Firebase", "C++"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    demoUrl: "#",
    githubUrl: "https://github.com/yashwanthspl",
    featured: false
  },
  {
    id: 4,
    title: "Digital Signal Processing Lab",
    description: "Collection of DSP algorithms and implementations for various signal processing applications using MATLAB and Python.",
    longDescription: "Comprehensive collection of digital signal processing algorithms including FFT, filtering, modulation, and audio processing. Includes both MATLAB and Python implementations with detailed documentation.",
    tags: ["Signal Processing", "Academic"],
    tech: ["MATLAB", "Python", "NumPy", "SciPy", "Jupyter"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    demoUrl: "#",
    githubUrl: "https://github.com/yashwanthspl",
    featured: false
  },
  {
    id: 5,
    title: "PCB Design Portfolio",
    description: "Collection of PCB designs for various electronic projects including microcontroller boards and sensor modules.",
    longDescription: "Professional PCB designs created using KiCad and Eagle, including schematic design, layout optimization, and manufacturing files. Covers various applications from simple sensors to complex microcontroller boards.",
    tags: ["Hardware", "Design"],
    tech: ["KiCad", "Eagle", "Altium", "PCB Design", "Electronics"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
    demoUrl: "#",
    githubUrl: "https://github.com/yashwanthspl",
    featured: false
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website built with React and Next.js showcasing projects and skills.",
    longDescription: "Designed and developed a professional portfolio website with modern UI/UX principles, responsive design, and optimized performance. Features dark/light mode, smooth animations, and SEO optimization.",
    tags: ["Web", "Design"],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
    demoUrl: "#",
    githubUrl: "https://github.com/yashwanthspl",
    featured: true
  }
];

const allTags = ["All", ...Array.from(new Set(projectData.flatMap(project => project.tags)))];

export function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projectData.filter(project => 
    selectedTag === "All" || project.tags.includes(selectedTag)
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-title mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills in embedded systems, 
            web development, and electronics design. Each project represents a 
            learning journey and a step toward mastering my craft.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up">
          <Filter className="h-5 w-5 text-muted-foreground mr-2 mt-2" />
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "secondary"}
              className={`cursor-pointer transition-all hover:scale-105 ${
                selectedTag === tag 
                  ? "hero-gradient text-white" 
                  : "hover:bg-secondary-hover"
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`project-card group ${project.featured ? 'ring-2 ring-primary/20' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="hero-gradient text-white">Featured</Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" asChild>
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/90 hover:bg-white text-black"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/90 hover:bg-white text-black"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} className="text-xs skill-pill">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center animate-fade-in-up">
            <Button 
              variant="hero-outline" 
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : `Show All (${filteredProjects.length - 6} more)`}
            </Button>
          </div>
        )}

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">
              No projects found for "{selectedTag}"
            </p>
            <Button 
              variant="ghost" 
              onClick={() => setSelectedTag("All")}
            >
              Show All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}