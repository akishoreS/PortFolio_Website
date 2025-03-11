import React from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors: string[];
  courses: string[];
  achievements: string[];
}

interface EducationSectionProps {
  title?: string;
  subtitle?: string;
  educationList?: Education[];
}

const EducationSection = ({
  title = "Education",
  subtitle = "Academic qualifications and achievements",
  educationList = [
    {
      degree: "Bachelor of Laws (LL.B.)",
      institution: "Lloyd Law College",
      location: "Greater Noida",
      startDate: "2023",
      endDate: "2026 (Pursuing)",
      gpa: "",
      honors: [
        "Moot Society Student Member",
        "Lloyd Legal Aid & Services Clinic Member",
        "Volunteer for SK Misra Memorial International Mediation and Negotiation Competitions 5.0",
      ],
      courses: [
        "Constitutional Law",
        "Criminal Law",
        "Contract Law",
        "Legal Research and Writing",
        "Mediation and Negotiation",
      ],
      achievements: [
        "Publication: Legal aspects of cybersecurity incidents prevention and response (International Journal of Novel and Development)",
        "Certification: Contract drafting and Negotiation (CREDENTIAL ID 120457887-145200275 1276E1D99) LAWCTOPUS LAW SCHOOL",
      ],
    },
    {
      degree: "Bachelor of Arts in English (Honours)",
      institution: "Marwari College",
      location: "Ranchi",
      startDate: "2020",
      endDate: "2023",
      gpa: "62.23%",
      honors: [],
      courses: [
        "English Literature",
        "Communication Skills",
        "Literary Analysis",
        "Academic Writing",
        "Critical Thinking",
      ],
      achievements: [],
    },
    {
      degree: "Higher Secondary Education (Class 12)",
      institution: "DAV Public School Hehal",
      location: "Ranchi",
      startDate: "2018",
      endDate: "2019",
      gpa: "76.3%",
      honors: [],
      courses: [],
      achievements: [],
    },
    {
      degree: "Secondary Education (Class 10)",
      institution: "DAV Public School Hehal",
      location: "Ranchi",
      startDate: "2016",
      endDate: "2017",
      gpa: "77.5%",
      honors: [],
      courses: [],
      achievements: [],
    },
  ],
}: EducationSectionProps) => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-2">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {educationList.map((education, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white hover:border-[#D4AF37] animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-[#0A2463]">
                      {education.degree}
                    </CardTitle>
                    <div className="flex items-center mt-1 text-gray-600">
                      <GraduationCap size={16} className="mr-1" />
                      <CardDescription className="text-sm font-medium">
                        {education.institution}
                      </CardDescription>
                    </div>
                    <div className="flex items-center mt-1 text-gray-600">
                      <MapPin size={16} className="mr-1" />
                      <CardDescription className="text-sm">
                        {education.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center mt-1 text-gray-600">
                      <Calendar size={16} className="mr-1" />
                      <CardDescription className="text-sm">
                        {education.startDate} - {education.endDate}
                      </CardDescription>
                    </div>
                  </div>
                  {education.gpa && (
                    <Badge className="bg-[#D4AF37] text-white border-none">
                      GPA: {education.gpa}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {education.honors.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#0A2463] mb-2 flex items-center">
                      <Award size={16} className="mr-1" /> Honors & Awards
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {education.honors.map((honor, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-[#F5F5F5] text-[#0A2463] border-[#D4AF37]"
                        >
                          {honor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {education.courses.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#0A2463] mb-2">
                      Relevant Coursework
                    </h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-gray-700">
                      {education.courses.map((course, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {education.achievements.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-[#0A2463] mb-2">
                      Key Achievements
                    </h4>
                    <ul className="list-disc pl-5 text-sm text-gray-700">
                      {education.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
