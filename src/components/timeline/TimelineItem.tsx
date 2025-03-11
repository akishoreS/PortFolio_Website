import React, { useState } from "react";
import { ChevronDown, ChevronUp, Building, Calendar } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface TimelineItemProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
}

const TimelineItem = ({
  title = "Legal Intern",
  company = "Smith & Associates Law Firm",
  location = "Boston, MA",
  startDate = "Jan 2022",
  endDate = "Present",
  description = "Worked on various legal cases providing research and documentation support to senior attorneys.",
  responsibilities = [
    "Conducted legal research on precedent cases",
    "Drafted legal memoranda and briefs",
    "Assisted in client consultations",
    "Prepared case documentation",
  ],
  achievements = [
    "Successfully contributed to winning 3 major cases",
    "Recognized for exceptional research skills",
  ],
  skills = [
    "Legal Research",
    "Brief Writing",
    "Case Analysis",
    "Client Communication",
  ],
}: TimelineItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 bg-white border-l-4 border-[#D4AF37] pl-4 transition-all duration-300 hover:shadow-md hover:translate-x-1 animate-slide-in-left">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <Card className="border-none shadow-none bg-white">
          <CardHeader className="p-4">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <CardTitle className="text-xl font-bold text-[#0A2463]">
                  {title}
                </CardTitle>
                <div className="flex items-center mt-1 text-gray-600">
                  <Building size={16} className="mr-1" />
                  <CardDescription className="text-sm">
                    {company} | {location}
                  </CardDescription>
                </div>
                <div className="flex items-center mt-1 text-gray-600">
                  <Calendar size={16} className="mr-1" />
                  <CardDescription className="text-sm">
                    {startDate} - {endDate}
                  </CardDescription>
                </div>
              </div>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </Button>
              </CollapsibleTrigger>
            </div>
          </CardHeader>
          <CollapsibleContent>
            <CardContent className="p-4 pt-0">
              <div className="mb-4">
                <p className="text-gray-700">{description}</p>
              </div>

              {responsibilities.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-[#0A2463] mb-2">
                    Key Responsibilities
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    {responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-[#0A2463] mb-2">
                    Achievements
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    {achievements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {skills.length > 0 && (
                <div>
                  <h4 className="font-semibold text-[#0A2463] mb-2">
                    Skills Applied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-[#F5F5F5] text-[#0A2463] border-[#D4AF37]"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </div>
  );
};

export default TimelineItem;
