import React, { useState } from "react";
import { BriefcaseIcon, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import TimelineItem from "../timeline/TimelineItem";

interface ExperienceItem {
  id: string;
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

interface ExperienceSectionProps {
  title?: string;
  subtitle?: string;
  experiences?: ExperienceItem[];
}

const ExperienceSection = ({
  title = "Professional Experience",
  subtitle = "My journey in the legal field has equipped me with diverse skills and expertise across various legal domains.",
  experiences = [
    {
      id: "exp1",
      title: "Legal Intern",
      company: "National Company Law Appellate Tribunal",
      location: "New Delhi",
      startDate: "Feb 2025",
      endDate: "Feb 2025",
      description:
        "Internship at the National Company Law Appellate Tribunal in New Delhi.",
      responsibilities: [
        "Legal research and case analysis",
        "Assisting with documentation and filing",
        "Observing tribunal proceedings",
        "Supporting legal officers with case preparation",
      ],
      achievements: [],
      skills: [
        "Corporate Law",
        "Legal Research",
        "Case Analysis",
        "Documentation",
      ],
    },
    {
      id: "exp2",
      title: "Legal Intern",
      company: "FOURFOLD LEGAL (Law Firm)",
      location: "Noida",
      startDate: "Dec 2024",
      endDate: "Dec 2024",
      description:
        "Conducted legal research and drafted various legal documents for a law firm specializing in financial and corporate matters.",
      responsibilities: [
        "Researched applications under Section 138 of the Negotiable Instruments Act",
        "Prepared applications under Section 25 of the Payment and Settlement Act",
        "Drafted consultancy agreements and legal notices for loan settlements",
        "Composed requests for debt settlement and EMI restructuring",
      ],
      achievements: [
        "Successfully drafted legal notices and invitations to mediation under the Arbitration and Conciliation Act, 1996",
      ],
      skills: [
        "Legal Drafting",
        "Financial Law",
        "Contract Analysis",
        "Dispute Resolution",
      ],
    },
    {
      id: "exp3",
      title: "Research Intern",
      company:
        "Ministry of Law and Justice - Institute of Legislative Drafting and Research (ILDR)",
      location: "New Delhi",
      startDate: "Oct 2024",
      endDate: "Oct 2024",
      description:
        "Assisted with research and drafting for legislative proposals and amendments at the Institute of Legislative Drafting and Research.",
      responsibilities: [
        "Researched on the National Commission for Indian System of Medicine notification",
        "Contributed to drafting proposals, notifications, and amendments",
        "Analyzed key legislative acts such as the Arbitration and Conciliation Act, 1996",
        "Studied global implications of legislation (UNCITRAL influence)",
      ],
      achievements: ["Contributed to the Nalanda University Act amendments"],
      skills: [
        "Legislative Research",
        "Legal Drafting",
        "Policy Analysis",
        "Comparative Law",
      ],
    },
    {
      id: "exp4",
      title: "Legal Intern",
      company: "Public Prosecutor's Office (District and Sessions Court)",
      location: "Ranchi, Jharkhand",
      startDate: "Jul 2024",
      endDate: "Jul 2024",
      description:
        "Assisted in criminal proceedings at the District and Sessions Court in Ranchi, Jharkhand.",
      responsibilities: [
        "Assisted in criminal proceedings and preparation of chargesheet",
        "Conducted research for chief examination",
        "Gained hands-on experience in 313/311 proceedings",
        "Learned cross-examination techniques",
      ],
      achievements: [],
      skills: [
        "Criminal Law",
        "Court Procedures",
        "Legal Research",
        "Case Analysis",
      ],
    },
    {
      id: "exp5",
      title: "Legal Intern",
      company: "Office of Sr. Advocate Pradeep Rai",
      location: "New Delhi",
      startDate: "Mar 2024",
      endDate: "Mar 2024",
      description:
        "Interned with Senior Advocate Pradeep Rai, assisting with legal research and case preparation.",
      responsibilities: [
        "Assisted in legal research and case preparation",
        "Supported in drafting legal documents",
        "Analyzed case materials",
        "Observed court proceedings",
      ],
      achievements: [],
      skills: [
        "Legal Research",
        "Legal Drafting",
        "Case Analysis",
        "Court Procedures",
      ],
    },
    {
      id: "exp6",
      title: "Legal Intern",
      company: "Jharkhand State Legal Services Authority",
      location: "Jharkhand",
      startDate: "Feb 2024",
      endDate: "Feb 2024",
      description:
        "Participated in legal aid programs and mediation processes with the Jharkhand State Legal Services Authority.",
      responsibilities: [
        "Participated in mediation processes to resolve disputes amicably",
        "Assisted in providing legal aid and advice to underprivileged individuals",
        "Conducted legal awareness and literacy programs",
        "Supported the implementation of the victim compensation scheme",
      ],
      achievements: [
        "Organized programs focused on marginalized and vulnerable groups",
      ],
      skills: ["Mediation", "Legal Aid", "Public Awareness", "Social Justice"],
    },
    {
      id: "exp7",
      title: "Intern",
      company: "Delhi Commission for Women",
      location: "New Delhi",
      startDate: "Dec 2023",
      endDate: "Dec 2023",
      description:
        "Participated in field training and case analysis at the Delhi Commission for Women.",
      responsibilities: [
        "Participated in field training addressing women and children safety issues",
        "Analyzed case studies and legal frameworks for women's rights",
        "Reviewed case files and documentation",
        "Contributed to safeguarding efforts for women and children",
      ],
      achievements: ["Assisted in policy evolution and case handling"],
      skills: [
        "Women's Rights",
        "Case Analysis",
        "Documentation",
        "Policy Research",
      ],
    },
  ],
}: ExperienceSectionProps) => {
  const [activeExperience, setActiveExperience] = useState<string | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-12 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center mb-4"
          >
            <BriefcaseIcon className="text-[#D4AF37] mr-2" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463]">
              {title}
            </h2>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={itemVariants}>
            <Separator className="mt-8 bg-[#D4AF37] h-0.5 w-24 mx-auto" />
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="relative"
        >
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 z-0"></div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#0A2463] text-white absolute left-1/2 transform -translate-x-1/2 z-10">
                  <Clock size={20} />
                </div>
                <div
                  className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <TimelineItem
                    title={experience.title}
                    company={experience.company}
                    location={experience.location}
                    startDate={experience.startDate}
                    endDate={experience.endDate}
                    description={experience.description}
                    responsibilities={experience.responsibilities}
                    achievements={experience.achievements}
                    skills={experience.skills}
                  />
                </div>
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center text-[#0A2463] hover:text-[#D4AF37] transition-colors duration-300"
          >
            <span className="font-medium">Contact me to learn more</span>
            <ChevronRight size={16} className="ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
