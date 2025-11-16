import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Heart, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/Components/ui/card";

export default function AboutUs() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To revolutionize the real estate experience by connecting people with their dream properties seamlessly.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "We prioritize customer satisfaction, ensuring trust, transparency and a smooth experience.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Using modern technologies to make property search and transactions quicker and smarter.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to delivering unmatched quality in service and verified property listings.",
    },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-orange-500">Ghar Dekho</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Your trusted partner in finding the perfect home — powered by modern 
              technology, verified listings, and customer-first focus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "350k+", label: "Properties Listed" },
              { number: "120k+", label: "Happy Customers" },
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Cities Covered" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Ghar Dekho started with a bold vision: making real estate simple, transparent, and accessible.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Today, we are one of the most trusted platforms, helping thousands of families find their dream homes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every listing is verified, every customer supported — because your dream home deserves nothing less.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900"
                alt="About Us"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-3">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision, every interaction, and every service we provide.
            </p>
          </motion.div>

          {/* Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-blue-900/10 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-700">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/10 to-blue-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Meet Our Team
            </h2>

            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
              A passionate team of real estate professionals and innovators shaping the future of home finding.
            </p>

            <div className="flex items-center justify-center gap-3 mb-8">
              <Users className="w-16 h-16 text-orange-500" />
            </div>

            <p className="text-gray-700 text-lg">
              Our mission is powered by people who care deeply about your home journey.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
