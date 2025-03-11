import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItem {
  label: string;
  href: string;
  dropdown?: NavItem[];
}

interface NavbarProps {
  logo?: string;
  navItems?: NavItem[];
}

const Navbar = ({
  logo = "J.D.",
  navItems = [
    { label: "Home", href: "#home" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Publications", href: "#publications" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0A2463] text-white shadow-md animate-fade-in">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              className="text-2xl font-bold text-[#D4AF37]"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
            >
              {logo}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-white hover:text-[#D4AF37] hover:bg-[#0A2463]/80 flex items-center"
                      >
                        {item.label}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#0A2463] border-[#D4AF37]">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <DropdownMenuItem
                          key={dropdownIndex}
                          className="text-white hover:text-[#D4AF37] hover:bg-[#0A2463]/80 cursor-pointer"
                          onClick={() => scrollToSection(dropdownItem.href)}
                        >
                          {dropdownItem.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a
                    href={item.href}
                    className="text-white hover:text-[#D4AF37] transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </React.Fragment>
            ))}
            <Button
              className="bg-[#D4AF37] text-[#0A2463] hover:bg-[#D4AF37]/90 ml-2"
              onClick={() => scrollToSection("#contact")}
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#0A2463] text-white border-l border-[#D4AF37] p-0"
              >
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b border-[#D4AF37]/20">
                    <div className="text-2xl font-bold text-[#D4AF37]">
                      {logo}
                    </div>
                  </div>
                  <div className="flex-1 overflow-auto py-4">
                    {navItems.map((item, index) => (
                      <div key={index} className="px-4 py-2">
                        {item.dropdown ? (
                          <div className="space-y-2">
                            <div className="font-medium text-[#D4AF37]">
                              {item.label}
                            </div>
                            <div className="pl-4 space-y-2 border-l border-[#D4AF37]/20">
                              {item.dropdown.map(
                                (dropdownItem, dropdownIndex) => (
                                  <a
                                    key={dropdownIndex}
                                    href={dropdownItem.href}
                                    className="block text-white hover:text-[#D4AF37] py-1"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      scrollToSection(dropdownItem.href);
                                    }}
                                  >
                                    {dropdownItem.label}
                                  </a>
                                ),
                              )}
                            </div>
                          </div>
                        ) : (
                          <a
                            href={item.href}
                            className="block text-white hover:text-[#D4AF37] py-1"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(item.href);
                            }}
                          >
                            {item.label}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-[#D4AF37]/20">
                    <Button
                      className="w-full bg-[#D4AF37] text-[#0A2463] hover:bg-[#D4AF37]/90"
                      onClick={() => scrollToSection("#contact")}
                    >
                      Contact Me
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
