import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/20 pb-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/727/727606.png"
              alt="Ghar Dekho"
              className="h-8 w-8"
            />
            <h2 className="text-2xl font-bold">Ghar Dekho</h2>
          </div>
          <p className="text-white/90 leading-relaxed text-sm max-w-xs">
            Your trusted partner in finding the perfect home. We make property
            discovery simple, transparent, and secure.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/90 text-sm">
            {["Home", "Properties", "About Us", "Contact"].map((link) => (
              <li
                key={link}
                className="hover:text-white transition-all cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-white/90 text-sm">
            {["Help Center", "FAQs", "Terms of Service", "Privacy Policy"].map(
              (link) => (
                <li
                  key={link}
                  className="hover:text-white transition-all cursor-pointer"
                >
                  {link}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <p className="text-white/90 text-sm mb-4">
            Stay updated with the latest properties
          </p>
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
            >
              <Facebook className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-white/80 text-sm pt-8">
        © {new Date().getFullYear()} <span className="font-semibold">Ghar Dekho</span>. All rights reserved.
      </div>
    </footer>
  );
}
