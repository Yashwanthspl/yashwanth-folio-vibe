import { Button } from "@/components/ui/button";
import { ChevronDown, Download, ExternalLink } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-5"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 container-custom py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-left">
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-2 font-medium">
                Hello, I'm
              </p>
              <h1 className="text-hero hero-text-gradient mb-4">
                Yashwanth S
              </h1>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6">
                ECE Student & Aspiring Embedded Systems Engineer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I build reliable, user-centered products that balance speed and quality. 
                Passionate about core electronics and system-level design, currently studying 
                at Vidyavardhaka College of Engineering, Mysuru.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                View Projects
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group"
              >
                Get in Touch
                <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">ECE</div>
                <div className="text-sm text-muted-foreground">Specialization</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Yashwanth S - ECE Student and Embedded Systems Engineer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 hero-gradient rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-white font-bold text-sm">ECE</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xs font-semibold text-secondary-foreground">VVCE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("about")}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}