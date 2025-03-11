import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  introduction?: string;
  specialties?: string[];
  imageUrl?: string;
  resumeUrl?: string;
}

const HeroSection = ({
  name = "Jane Doe, J.D.",
  title = "Law Student & Legal Researcher",
  introduction = "Dedicated law student with a focus on constitutional law and human rights. Passionate about leveraging legal expertise to advocate for social justice and policy reform.",
  specialties = [
    "Constitutional Law",
    "Human Rights",
    "Legal Research",
    "Policy Analysis",
  ],
  imageUrl = "/kshma-profile.jpg",
  resumeUrl = "#",
}: HeroSectionProps) => {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A2463] mb-4 animate-slide-in-left">
              {name}
            </h1>
            <h2
              className="text-xl md:text-2xl font-medium text-[#D4AF37] mb-6 animate-slide-in-left"
              style={{ animationDelay: "0.2s" }}
            >
              {title}
            </h2>
            <p
              className="text-lg text-gray-700 mb-8 leading-relaxed animate-slide-in-left"
              style={{ animationDelay: "0.4s" }}
            >
              {introduction}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {specialties.map((specialty, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-[#F5F5F5] text-[#0A2463] border-[#D4AF37] px-3 py-1 transition-all duration-300 hover:bg-[#D4AF37] hover:text-white animate-fade-in"
                  style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                >
                  {specialty}
                </Badge>
              ))}
            </div>

            <div
              className="flex flex-wrap gap-4 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <Button
                className="bg-[#0A2463] hover:bg-[#061539] text-white transition-all duration-300 hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-[#D4AF37] text-[#0A2463] hover:bg-[#D4AF37] hover:text-white transition-all duration-300 hover:scale-105"
                onClick={() => window.open(resumeUrl, "_blank")}
              >
                Download CV{" "}
                <Download className="ml-2 h-4 w-4 animate-bounce-light" />
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="#"
                className="text-gray-600 hover:text-[#0A2463] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#0A2463] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#0A2463] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#0A2463] transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative animate-float">
              <div className="absolute -inset-1 rounded-full bg-[#D4AF37] opacity-20 blur animate-pulse"></div>
              <img
                src={imageUrl}
                alt={name}
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
