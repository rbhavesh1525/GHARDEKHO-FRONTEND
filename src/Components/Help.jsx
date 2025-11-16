import React, { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, Search, ChevronDown, MessageCircle, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/Components/ui/collapsible";

const faqs = [
  {
    question: "How do I post a property?",
    answer:
      "If you're an admin, navigate to the Admin Dashboard and click on 'Post Property'. Fill in all the required details including property information, images, and pricing. Your property will be listed immediately after submission.",
  },
  {
    question: "How can I contact property owners?",
    answer:
      "When viewing a property detail page, click the 'Send Message' button. You can either use predefined quick messages or write your own custom message. The owner will receive a notification and can respond through the chat system.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Payment methods are arranged directly between tenants/buyers and property owners. Ghar Dekho serves as a platform to connect both parties. We recommend discussing payment terms directly with the property owner.",
  },
  {
    question: "Can I save my favorite properties?",
    answer:
      "Currently, the favorite properties feature is under development. You can bookmark properties in your browser or contact owners directly to express interest.",
  },
  {
    question: "How do I edit my profile?",
    answer:
      "Go to your profile page by clicking on your user avatar in the navigation bar, then select 'My Profile'. Click the 'Edit Profile' button to update your information.",
  },
  {
    question: "Are the property listings verified?",
    answer:
      "All properties are reviewed by our admin team before being marked as featured. We recommend verifying property details during your visit and conducting proper due diligence before making any commitments.",
  },
];

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-22 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-orange-500" />
            </div>

            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              How Can We <span className="text-orange-500">Help?</span>
            </h1>

            <p className="text-lg text-gray-600">
              Find answers to common questions or get in touch with our support team
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg border-blue-900/20 focus:ring-blue-900"
              />
            </div>
          </div>

          {/* FAQs */}
          <Card className="mb-8 border border-blue-900/10">
            <CardHeader>
              <CardTitle className="text-blue-900">Frequently Asked Questions</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
              {filteredFaqs.map((faq, index) => (
                <Collapsible
                  key={index}
                  open={openIndex === index}
                  onOpenChange={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between p-4 hover:bg-blue-900/5 rounded-lg transition-colors cursor-pointer">
                      <h3 className="text-left font-semibold text-blue-900">{faq.question}</h3>

                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <div className="px-4 pb-4 text-gray-700 leading-relaxed">{faq.answer}</div>
                  </CollapsibleContent>
                </Collapsible>
              ))}

              {filteredFaqs.length === 0 && (
                <p className="text-center py-8 text-gray-500">No results found. Try different keywords.</p>
              )}
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="border border-blue-900/10">
            <CardHeader>
              <CardTitle className="text-blue-900">Still Need Help?</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is here to help!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Live Chat */}
                <Button
                  variant="outline"
                  className="h-auto py-4 flex-col gap-2 border-blue-900 text-blue-900 hover:bg-blue-900/10"
                >
                  <MessageCircle className="w-6 h-6 text-orange-500" />
                  <span className="font-semibold">Live Chat</span>
                  <span className="text-xs text-gray-500">Available 9 AM - 6 PM</span>
                </Button>

                {/* Email */}
                <Button
                  variant="outline"
                  className="h-auto py-4 flex-col gap-2 border-blue-900 text-blue-900 hover:bg-blue-900/10"
                >
                  <Mail className="w-6 h-6 text-orange-500" />
                  <span className="font-semibold">Email Us</span>
                  <span className="text-xs text-gray-500">support@ghardekho.com</span>
                </Button>

                {/* Phone */}
                <Button
                  variant="outline"
                  className="h-auto py-4 flex-col gap-2 border-blue-900 text-blue-900 hover:bg-blue-900/10"
                >
                  <Phone className="w-6 h-6 text-orange-500" />
                  <span className="font-semibold">Call Us</span>
                  <span className="text-xs text-gray-500">1800-123-4567</span>
                </Button>
              </div>
            </CardContent>
          </Card>

        </motion.div>
      </div>
    </div>
  );
}
