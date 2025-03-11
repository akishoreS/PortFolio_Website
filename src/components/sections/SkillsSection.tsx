import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Briefcase, Scale, GraduationCap, BookOpen, Gavel } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    proficiency: number;
  }[];
}

interface SkillsSectionProps {
  title?: string;
  subtitle?: string;
  categories?: SkillCategory[];
}

const SkillsSection = ({
  title = "Legal Skills & Expertise",
  subtitle = "A comprehensive overview of my legal competencies and specialized knowledge areas.",
  categories = [
    {
      name: "Legal Research & Analysis",
      icon: <BookOpen className="h-6 w-6 text-[#D4AF37]" />,
      skills: [
        { name: "Case Law Research", proficiency: 85 },
        { name: "Legal Writing", proficiency: 80 },
        { name: "Statutory Interpretation", proficiency: 75 },
        { name: "Legal Analysis", proficiency: 80 },
      ],
    },
    {
      name: "Legal Drafting",
      icon: <Gavel className="h-6 w-6 text-[#D4AF37]" />,
      skills: [
        { name: "Contract Drafting", proficiency: 85 },
        { name: "Legal Notices", proficiency: 80 },
        { name: "Consultancy Agreements", proficiency: 75 },
        { name: "Mediation Invitations", proficiency: 80 },
      ],
    },
    {
      name: "Dispute Resolution",
      icon: <Briefcase className="h-6 w-6 text-[#D4AF37]" />,
      skills: [
        { name: "Mediation", proficiency: 80 },
        { name: "Negotiation", proficiency: 75 },
        { name: "Arbitration", proficiency: 70 },
        { name: "Conflict Resolution", proficiency: 75 },
      ],
    },
    {
      name: "Communication",
      icon: <Scale className="h-6 w-6 text-[#D4AF37]" />,
      skills: [
        { name: "Interpersonal Skills", proficiency: 90 },
        { name: "Written Communication", proficiency: 85 },
        { name: "Public Speaking", proficiency: 75 },
        { name: "Client Interaction", proficiency: 80 },
      ],
    },
    {
      name: "Technical Skills",
      icon: <GraduationCap className="h-6 w-6 text-[#D4AF37]" />,
      skills: [
        { name: "MS Word", proficiency: 90 },
        { name: "MS Excel", proficiency: 85 },
        { name: "MS PowerPoint", proficiency: 85 },
        { name: "Legal Research Platforms", proficiency: 80 },
      ],
    },
  ],
}: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[#D4AF37] hover:translate-y-[-5px] animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  {category.icon}
                  <CardTitle className="text-xl text-[#0A2463]">
                    {category.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <Badge
                          variant="outline"
                          className="bg-[#F5F5F5] text-[#0A2463] border-[#D4AF37]"
                        >
                          {skill.proficiency}%
                        </Badge>
                      </div>
                      <Progress
                        value={skill.proficiency}
                        className="h-2 bg-gray-200"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-[#0A2463] mb-4">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Negotiation",
              "Client Counseling",
              "Alternative Dispute Resolution",
              "Legal Ethics",
              "Intellectual Property",
              "Environmental Law",
              "International Law",
              "Administrative Law",
              "Criminal Procedure",
              "Family Law",
            ].map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-[#F5F5F5] text-[#0A2463] border-[#D4AF37] px-3 py-1 text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
