import React, { useState } from "react";
import { Search, Filter, BookOpen, Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface Publication {
  id: string;
  title: string;
  journal: string;
  date: string;
  type: "article" | "journal" | "book" | "research";
  description: string;
  link?: string;
  tags: string[];
}

interface PublicationsSectionProps {
  publications?: Publication[];
  title?: string;
  description?: string;
}

const PublicationsSection = ({
  publications = [
    {
      id: "1",
      title: "Legal Aspects of Cybersecurity Incidents Prevention and Response",
      journal: "International Journal of Novel and Development",
      date: "2023",
      type: "article",
      description:
        "An analysis of legal frameworks and best practices for preventing and responding to cybersecurity incidents, with a focus on regulatory compliance and liability issues.",
      link: "#",
      tags: [
        "Cybersecurity",
        "Legal Compliance",
        "Incident Response",
        "Digital Law",
      ],
    },
  ],
  title = "Publications",
  description = "A collection of my published legal works, research papers, and articles in prestigious law journals.",
}: PublicationsSectionProps) => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("all");

  // Extract unique years from publications
  const years = [
    ...new Set(
      publications.map((pub) => {
        const parts = pub.date.split(" ");
        return parts.length > 1 ? parts[1] : pub.date;
      }),
    ),
  ].sort((a, b) => parseInt(b) - parseInt(a));

  // Filter publications based on active tab, search term, and year
  const filteredPublications = publications.filter((pub) => {
    const matchesTab = activeTab === "all" || pub.type === activeTab;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesYear = yearFilter === "all" || pub.date.includes(yearFilter);

    return matchesTab && matchesSearch && matchesYear;
  });

  return (
    <section id="publications" className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="mb-6 sm:mb-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search publications..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A2463] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex items-center">
              <Filter className="mr-2 h-5 w-5 text-[#0A2463]" />
              <span className="text-sm font-medium text-gray-700">
                Filter by:
              </span>
            </div>

            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger className="w-[120px] border-gray-300 focus:ring-[#0A2463]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-8"
        >
          <TabsList className="w-full md:w-auto bg-gray-100 p-1 rounded-md">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-[#0A2463] data-[state=active]:text-white"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="article"
              className="data-[state=active]:bg-[#0A2463] data-[state=active]:text-white"
            >
              Articles
            </TabsTrigger>
            <TabsTrigger
              value="journal"
              className="data-[state=active]:bg-[#0A2463] data-[state=active]:text-white"
            >
              Journals
            </TabsTrigger>
            <TabsTrigger
              value="research"
              className="data-[state=active]:bg-[#0A2463] data-[state=active]:text-white"
            >
              Research
            </TabsTrigger>
            <TabsTrigger
              value="book"
              className="data-[state=active]:bg-[#0A2463] data-[state=active]:text-white"
            >
              Books
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <PublicationsList publications={filteredPublications} />
          </TabsContent>
          <TabsContent value="article" className="mt-6">
            <PublicationsList publications={filteredPublications} />
          </TabsContent>
          <TabsContent value="journal" className="mt-6">
            <PublicationsList publications={filteredPublications} />
          </TabsContent>
          <TabsContent value="research" className="mt-6">
            <PublicationsList publications={filteredPublications} />
          </TabsContent>
          <TabsContent value="book" className="mt-6">
            <PublicationsList publications={filteredPublications} />
          </TabsContent>
        </Tabs>

        {filteredPublications.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">
              No publications found
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Try adjusting your search or filter criteria to find what you're
              looking for.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

interface PublicationsListProps {
  publications: Publication[];
}

const PublicationsList = ({ publications = [] }: PublicationsListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {publications.map((publication) => (
        <Card
          key={publication.id}
          className="overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300 hover:border-[#D4AF37] animate-fade-in"
        >
          <CardHeader className="bg-gray-50 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl font-bold text-[#0A2463]">
                {publication.title}
              </CardTitle>
            </div>
            <div className="flex items-center mt-2 text-sm text-gray-600">
              <BookOpen size={16} className="mr-1" />
              <span>{publication.journal}</span>
              <span className="mx-2">•</span>
              <Calendar size={16} className="mr-1" />
              <span>{publication.date}</span>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-gray-700 mb-4">{publication.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {publication.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-[#F5F5F5] text-[#0A2463] border-[#D4AF37]"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            {publication.link && (
              <div className="mt-4">
                <Button
                  variant="outline"
                  className="text-[#0A2463] border-[#0A2463] hover:bg-[#0A2463] hover:text-white"
                  onClick={() => window.open(publication.link, "_blank")}
                >
                  Read Publication
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PublicationsSection;
