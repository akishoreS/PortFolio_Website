import React from "react";
import Navbar from "./layout/Navbar";
import HeroSection from "./sections/HeroSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import PublicationsSection from "./sections/PublicationsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./layout/Footer";

interface HomeProps {
  studentName?: string;
  studentTitle?: string;
  studentIntro?: string;
  profileImage?: string;
}

const Home = ({
  studentName = "KSHMA PRIYA",
  studentTitle = "Law Student & Legal Intern",
  studentIntro = "Dedicated law student pursuing LL.B. at Lloyd Law College with experience in legal research, drafting, and mediation. Passionate about women's rights and providing legal aid to underprivileged individuals.",
  profileImage = "/Kshma_professional.svg",
}: HomeProps) => {
  // Social media links used across components
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/kshma-priya-29553028b",
    twitter: "#",
    github: "#",
  };

  // Contact information
  const contactInfo = {
    email: "Kshmapriya0@gmail.com",
    phone: "+91-7461044824",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar logo={studentName.split(",")[0]} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <HeroSection
            name={studentName}
            title={studentTitle}
            introduction={studentIntro}
            imageUrl={profileImage}
            specialties={[
              "Legal Research",
              "Legal Drafting",
              "Mediation",
              "Contract Analysis",
            ]}
            resumeUrl="#"
          />
        </section>

        {/* Education Section */}
        <EducationSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Publications Section */}
        <PublicationsSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Contact Section */}
        <ContactSection
          email={contactInfo.email}
          phone={contactInfo.phone}
          socialLinks={socialLinks}
        />
      </main>

      {/* Footer */}
      <Footer
        name={studentName}
        email={contactInfo.email}
        socialLinks={socialLinks}
      />
    </div>
  );
};

export default Home;
