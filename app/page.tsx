"use client";

import { useState } from "react";
import { Mail, Phone, Github, Linkedin, MapPin, ChevronDown, Globe, Calendar, Award, Cpu, Menu, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const projects = [
  {
    title: "Enterprise E-commerce Platform",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    description: "Led development of a scalable enterprise e-commerce solution",
    tech: ["React", "Node.js", "AWS"]
  },
  {
    title: "AI-Powered Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=800&q=80",
    description: "Built real-time analytics dashboard with AI insights",
    tech: ["Python", "TensorFlow", "React"]
  },
  {
    title: "Mobile Banking Application",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    description: "Developed secure cross-platform banking application",
    tech: ["React Native", "Firebase", "Node.js"]
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              John Doe
            </span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors rounded-md"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Banner */}
      <div className="relative h-[40vh] mb-[-100px] mt-16" id="about">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 mix-blend-multiply" />
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="animate-bounce text-white mb-8">
            <ChevronDown className="h-8 w-8" />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Profile Card */}
        <Card className="p-4 sm:p-8 mb-12 shadow-xl backdrop-blur-sm bg-white/90 relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-3/4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                    John Doe
                  </h1>
                  <h2 className="text-xl sm:text-2xl text-primary mt-2">Senior Software Engineer</h2>
                  <div className="flex flex-wrap gap-4 mt-4 text-muted-foreground">
                    <div className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Mail className="h-4 w-4" />
                      <span>john.doe@example.com</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>+1 234 567 890</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-primary transition-colors">
                      <MapPin className="h-4 w-4" />
                      <span>New York, USA</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-4 md:mt-0">
                  <a href="https://github.com" className="text-gray-600 hover:text-primary transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://linkedin.com" className="text-gray-600 hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Passionate software engineer with over 8 years of experience in developing scalable web applications.
                Specialized in React, Node.js, and cloud technologies. Strong focus on code quality and team collaboration.
              </p>
            </div>
            <div className="w-full md:w-1/4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg transform rotate-6"></div>
                <AspectRatio ratio={1} className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80"
                    alt="Profile"
                    fill
                    className="rounded-lg object-cover shadow-lg"
                    priority
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </Card>

        {/* Projects Carousel */}
        <Card className="p-4 sm:p-8 mb-12 shadow-lg bg-white/95" id="projects">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Featured Projects
          </h2>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative">
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                      <AspectRatio ratio={16/9}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </AspectRatio>
                      <div className="p-4 sm:p-6 relative">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="bg-primary/10">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </Card>

        {/* Experience Section */}
        <Card className="p-4 sm:p-8 mb-12 shadow-lg bg-white/95" id="experience">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            <div className="group">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium group-hover:text-primary transition-colors">
                    Senior Software Engineer
                  </h3>
                  <p className="text-primary text-base sm:text-lg">Tech Solutions Inc.</p>
                </div>
                <span className="text-muted-foreground bg-primary/5 px-3 py-1 rounded-full mt-2 sm:mt-0">2020 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 text-base sm:text-lg">
                <li>Led a team of 5 developers in building a cloud-native e-commerce platform</li>
                <li>Improved application performance by 40% through optimization techniques</li>
                <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
              </ul>
            </div>

            <div className="group">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium group-hover:text-primary transition-colors">
                    Software Engineer
                  </h3>
                  <p className="text-primary text-base sm:text-lg">Digital Innovations Co.</p>
                </div>
                <span className="text-muted-foreground bg-primary/5 px-3 py-1 rounded-full mt-2 sm:mt-0">2017 - 2020</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 text-base sm:text-lg">
                <li>Developed and maintained multiple React-based web applications</li>
                <li>Collaborated with UX team to implement responsive designs</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Skills Section */}
        <Card className="p-4 sm:p-8 mb-12 shadow-lg bg-white/95" id="skills">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Skills
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-medium mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "TypeScript", "GraphQL", "AWS", "Docker", "Kubernetes"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-medium mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Team Leadership", "Project Management", "Problem Solving", "Communication", "Mentoring"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base hover:bg-primary/5 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Education Section */}
        <Card className="p-4 sm:p-8 shadow-lg bg-white/95" id="education">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Education
          </h2>
          
          <div className="space-y-6">
            <div className="group">
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium group-hover:text-primary transition-colors">
                    Master of Science in Computer Science
                  </h3>
                  <p className="text-primary text-base sm:text-lg">Stanford University</p>
                </div>
                <span className="text-muted-foreground bg-primary/5 px-3 py-1 rounded-full mt-2 sm:mt-0">2015 - 2017</span>
              </div>
            </div>
            
            <div className="group">
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium group-hover:text-primary transition-colors">
                    Bachelor of Science in Software Engineering
                  </h3>
                  <p className="text-primary text-base sm:text-lg">MIT</p>
                </div>
                <span className="text-muted-foreground bg-primary/5 px-3 py-1 rounded-full mt-2 sm:mt-0">2011 - 2015</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="relative mt-24 mb-12" id="contact">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-4 -bottom-4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute right-1/4 -bottom-8 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>

          {/* Stats Section */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-16">
            {[
              { icon: Globe, label: "Projects Completed", value: "50+" },
              { icon: Calendar, label: "Years Experience", value: "8+" },
              { icon: Award, label: "Awards Won", value: "12" },
              { icon: Cpu, label: "Technologies", value: "15+" }
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 sm:p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg
                          transform hover:-translate-y-1 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3" />
                <span className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-white p-4 sm:p-8">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="absolute inset-0 bg-primary/90" />
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-primary-foreground/80 max-w-md">
                  Looking for new opportunities to create amazing software solutions.
                  Feel free to reach out!
                </p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                <a
                  href="mailto:john.doe@example.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary
                           hover:bg-primary-foreground transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>
                <a
                  href="https://linkedin.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white
                           hover:bg-white/20 transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg
                viewBox="0 0 1440 120"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-12 -mb-1 fill-background"
                preserveAspectRatio="none"
              >
                <path d="M0,0 C480,100 960,100 1440,0 L1440,120 L0,120 Z" />
              </svg>
            </div>
          </Card>

          {/* Copyright */}
          <div className="text-center text-muted-foreground mt-8">
            <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </main>
  );
}