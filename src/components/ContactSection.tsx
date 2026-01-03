"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import useWeb3Forms from "@web3forms/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
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
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  // Web3Forms access key (client-side safe, designed to be public)
  const accessKey = "410a65f8-a304-452f-bb93-5936354653c3";

  const { submit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "JCR Elite Protection Website",
      subject: "New Contact Form Submission",
    },
    onSuccess: () => {
      setSubmitSuccess(true);
      setSubmitError(null);
      setIsSubmitting(false);
      form.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    },
    onError: () => {
      setSubmitSuccess(false);
      setIsSubmitting(false);
      setSubmitError(
        "Failed to send message. Please try again or contact us directly at info@jcreliteprotection.co.uk"
      );
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    // Prepare form data with additional fields
    const formData = {
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      company: data.company || "",
      message: data.message,
      to_email: "info@jcreliteprotection.co.uk",
      subject: `New Contact Form Submission from ${data.name}`,
    };

    await submit(formData);
  };

  return (
    <section id="contact" className="py-0 bg-transparent">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatedSection
            className="lg:col-span-2 glass-card rounded-lg p-6 sm:p-8 lg:p-10"
            animation="fade-in-right"
          >
            {submitSuccess ? (
              <div className="bg-green-50 text-green-700 rounded-md p-4 flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <>
                {submitError && (
                  <div className="bg-red-50 text-red-700 rounded-md p-4 mb-4">
                    <p>{submitError}</p>
                  </div>
                )}
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-3 sm:space-y-4 lg:space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" className="text-sm" {...field} />
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
                              <Input
                                placeholder="john@example.co.uk"
                                className="text-sm"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+44 (0) 7700 900000"
                                className="text-sm"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company" className="text-sm" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How can we help?</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your security needs..."
                              className="resize-none min-h-[100px] text-sm"
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
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </>
            )}
          </AnimatedSection>

          <AnimatedSection animation="fade-in-left">
            <div className="glass-card rounded-lg p-6 sm:p-8 h-full">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">Contact Information</h3>

              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 sm:p-3 mr-3 flex-shrink-0 text-primary">
                    <Phone size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-sm sm:text-base">Phone</h4>
                    <p className="text-muted-foreground mt-1 break-words text-sm sm:text-base">
                      02080874233
                    </p>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      24/7 Support Available
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 sm:p-3 mr-3 flex-shrink-0 text-primary">
                    <Mail size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-sm sm:text-base">Email</h4>
                    <p className="text-muted-foreground mt-1 break-all text-xs sm:text-sm">
                      info@jcreliteprotection.co.uk
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 sm:p-3 mr-3 flex-shrink-0 text-primary">
                    <MapPin size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-sm sm:text-base">Office</h4>
                    <p className="text-muted-foreground mt-1 text-xs sm:text-sm leading-relaxed">
                      JCR Elite Protection
                      <br />
                      Riverbank House
                      <br />
                      1 Putney Bridge Approach
                      <br />
                      London SW6 3JD
                    </p>
                  </div>
                </div>

                <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-gray-100">
                  <h4 className="font-medium mb-3 text-sm sm:text-base">Contact Us</h4>

                  {/* Phone call button - prominent for mobile */}
                  <div className="space-y-3">
                    <a
                      href="tel:+442080874233"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-white hover:bg-green-700 h-11 px-4 py-2 min-h-[44px] w-full"
                      aria-label="Call JCR Elite Protection now at 020 8087 4233"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      Call Now: 020 8087 4233
                    </a>

                    <a
                      href="mailto:info@jcreliteprotection.co.uk"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-11 px-4 py-2 min-h-[44px] w-full"
                      aria-label="Send email to JCR Elite Protection"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
