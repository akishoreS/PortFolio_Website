import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface FooterProps {
  name?: string;
  email?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  copyrightYear?: number;
}

const Footer = ({
  name = "KSHMA PRIYA",
  email = "Kshmapriya0@gmail.com",
  socialLinks = {
    linkedin: "https://www.linkedin.com/in/kshma-priya-29553028b",
    twitter: "#",
    github: "#",
  },
  copyrightYear = new Date().getFullYear(),
}: FooterProps) => {
  return (
    <footer className="w-full bg-[#0A2463] text-white py-8 px-4 md:px-8 animate-fade-in">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-[#D4AF37]">{name}</h3>
            <p className="text-sm mt-1">Legal Professional</p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter size={20} />
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="hover:text-[#D4AF37] transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>

        <Separator className="bg-gray-700 my-4" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {copyrightYear} {name}. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
