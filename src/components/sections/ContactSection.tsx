import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, Send, Linkedin, Twitter, Github } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  email?: string;
  phone?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const ContactSection = ({
  title = "Get In Touch",
  subtitle = "I'm always open to discussing new opportunities and connections in the legal field.",
  email = "Kshmapriya0@gmail.com",
  phone = "+91-7461044824",
  socialLinks = {
    linkedin: "https://www.linkedin.com/in/kshma-priya-29553028b",
    twitter: "#",
    github: "#",
  },
}: ContactSectionProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // This would typically send the form data to a server
    console.log(data);
    alert("Form submitted successfully! (This is a demo)");
    form.reset();
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-[#F5F5F5] p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-[#0A2463] mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-[#D4AF37] mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-[#0A2463]">Email</h4>
                  <a
                    href={`mailto:${email}`}
                    className="text-gray-600 hover:text-[#D4AF37] transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-[#D4AF37] mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-[#0A2463]">Phone</h4>
                  <a
                    href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                    className="text-gray-600 hover:text-[#D4AF37] transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium text-[#0A2463] mb-4">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full text-[#0A2463] hover:text-[#D4AF37] transition-colors shadow-sm"
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
                    className="p-2 bg-white rounded-full text-[#0A2463] hover:text-[#D4AF37] transition-colors shadow-sm"
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
                    className="p-2 bg-white rounded-full text-[#0A2463] hover:text-[#D4AF37] transition-colors shadow-sm"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:border-[#D4AF37] hover:shadow-md animate-slide-in-right">
            <h3 className="text-2xl font-semibold text-[#0A2463] mb-6">
              Send a Message
            </h3>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0A2463]">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          {...field}
                          className="border-gray-300 focus:border-[#D4AF37]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0A2463]">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your email address"
                          {...field}
                          className="border-gray-300 focus:border-[#D4AF37]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0A2463]">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Message subject"
                          {...field}
                          className="border-gray-300 focus:border-[#D4AF37]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0A2463]">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          {...field}
                          className="min-h-[120px] border-gray-300 focus:border-[#D4AF37]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#0A2463] hover:bg-[#0A2463]/90 text-white"
                >
                  <Send className="mr-2" size={16} />
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
