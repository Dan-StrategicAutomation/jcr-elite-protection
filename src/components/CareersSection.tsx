"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import useWeb3Forms from "@web3forms/react";
import { CheckCircle2, Upload } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import AnimatedSection from "./AnimatedSection";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(6, { message: "Phone number is required" }),
  position: z.string().min(1, { message: "Position is required" }),
  experience: z.string().min(1, { message: "Experience is required" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CareersSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      message: "",
    },
  });

  // Web3Forms access key (client-side safe, designed to be public)
  const accessKey = "410a65f8-a304-452f-bb93-5936354653c3";

  const { submit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "JCR Elite Protection Careers",
      subject: "New Job Application",
    },
    onSuccess: () => {
      setSubmitSuccess(true);
      setSubmitError(null);
      setIsSubmitting(false);
      form.reset();
      setResumeFile(null);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    },
    onError: () => {
      setSubmitSuccess(false);
      setIsSubmitting(false);
      setSubmitError(
        "Failed to send application. Please try again or contact us directly at info@jcreliteprotection.co.uk"
      );
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    // Prepare form data with additional fields and file attachment
    const formData = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      position: data.position,
      experience: data.experience,
      message: data.message || "",
      to_email: "info@jcreliteprotection.co.uk",
      subject: `New Job Application from ${data.fullName} for ${data.position}`,
      attachment: resumeFile,
    };

    await submit(formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  // Current openings data
  const openings = [
    {
      title: "Security Officer",
      location: "London",
      type: "Contract",
      description:
        "We're looking for experienced SIA-licensed security officers to join our contractor network for hotel security in central London.",
    },
    {
      title: "Event Security Specialist",
      location: "London & Surrounding Areas",
      type: "Contract",
      description:
        "Provide security for high-profile events and ensure guest safety and venue protection as part of our specialist contractor team.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary font-medium">Join Our Team</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Careers at JCR Elite Protection
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Join London's premier security team as a contractor and grow your career with flexible
            opportunities that value integrity, excellence, and professional development.
          </p>
        </AnimatedSection>

        {/* Company Benefits Overview - Desktop optimized */}
        <AnimatedSection className="mb-16">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Competitive Rates</h3>
                <p className="text-muted-foreground text-sm">
                  Industry-leading contractor rates with reliable payment terms
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Flexible Work</h3>
                <p className="text-muted-foreground text-sm">
                  Choose assignments that fit your schedule with flexible contractor arrangements
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Professional Support</h3>
                <p className="text-muted-foreground text-sm">
                  Ongoing support and access to additional training opportunities
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality Assignments</h3>
                <p className="text-muted-foreground text-sm">
                  Work with prestigious clients and high-profile venues across London
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Desktop: 3-column layout, Tablet: 2-column, Mobile: 1-column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20">
          {/* Job Openings - Takes 1 column */}
          <AnimatedSection animation="fade-in-right" className="lg:col-span-1">
            <div className="glass-card rounded-lg p-6 h-full">
              <h2 className="text-2xl font-bold mb-6">Current Openings</h2>

              <div className="space-y-6">
                {openings.map((job, index) => (
                  <div
                    key={index}
                    className="border border-gray-100 rounded-lg p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{job.location}</p>
                    <p className="mt-2">{job.description}</p>
                    <a
                      href="#application-form"
                      className="mt-4 inline-block text-primary font-medium hover:underline"
                    >
                      Apply Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Application Form - Takes 2 columns on desktop */}
          <AnimatedSection animation="fade-in-left" id="application-form" className="lg:col-span-2">
            <div className="glass-card rounded-lg p-6 lg:p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">Apply Now</h2>

              {submitSuccess ? (
                <div className="bg-green-50 text-green-700 rounded-md p-4 flex items-center">
                  <CheckCircle2 className="mr-2" size={20} />
                  <p>Your application has been submitted successfully! We'll be in touch soon.</p>
                </div>
              ) : (
                <>
                  {submitError && (
                    <div className="bg-red-50 text-red-700 rounded-md p-4 mb-4">
                      <p>{submitError}</p>
                    </div>
                  )}
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Name and Email Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Smith" {...field} />
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
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.co.uk" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Phone and Position Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+44 (0) 7700 900000" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="position"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Position Applying For</FormLabel>
                              <FormControl>
                                <Input placeholder="Security Officer" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Experience and File Upload Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                        <FormField
                          control={form.control}
                          name="experience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Years of Experience</FormLabel>
                              <FormControl>
                                <Input placeholder="3 years" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div>
                          <FormLabel htmlFor="resume">Upload CV/Resume</FormLabel>
                          <div className="mt-1 flex items-center">
                            <label
                              htmlFor="resume"
                              className="cursor-pointer flex items-center space-x-2 border border-gray-300 rounded-md px-4 py-2 w-full bg-white text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                              <Upload size={18} />
                              <span className="truncate">
                                {resumeFile ? resumeFile.name : "Choose file"}
                              </span>
                              <input
                                id="resume"
                                type="file"
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                              />
                            </label>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            PDF, DOC, DOCX (Max 5MB)
                          </p>
                        </div>
                      </div>

                      {/* Message Field - Full Width */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your qualifications, certifications, or any additional information..."
                                className="h-32 resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" disabled={isSubmitting} className="w-full">
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          "Submit Application"
                        )}
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
