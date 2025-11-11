import React from "react";
import { motion } from "framer-motion";
import { Building2, Users, Award, Heart, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize the real estate experience by connecting people with their dream properties seamlessly."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize customer satisfaction above everything else, ensuring a smooth and trustworthy experience."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to make property search and transactions faster and easier."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to maintaining the highest standards in service quality and property verification."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">About Ghar Dekho</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner in finding the perfect home. We're revolutionizing the real estate industry with innovative technology and exceptional service.
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
              { number: "50+", label: "Cities Covered" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Founded with a vision to transform the real estate industry, Ghar Dekho has grown from a small startup to one of the most trusted property platforms in the country.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We understand that finding the right home is more than just a transaction—it's about finding a place where memories are made, families grow, and dreams come true.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of dedicated professionals works tirelessly to ensure every property listing meets our high standards, and every customer receives personalized attention.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Passionate professionals dedicated to helping you find your dream home
            </p>
            
            <div className="flex items-center justify-center gap-3 mb-8">
              <Users className="w-16 h-16 text-blue-600" />
            </div>
            
            <p className="text-gray-700 text-lg">
              Our diverse team of real estate experts, technology innovators, and customer service specialists work together to deliver an exceptional experience for every customer.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}