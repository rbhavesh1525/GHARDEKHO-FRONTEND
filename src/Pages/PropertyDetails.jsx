import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Heart,
  Share2,
  MessageCircle,
  Mail,
  User,
} from "lucide-react";

import {
  Warehouse,
  Ruler,
  Droplet,
  Zap,
  Flame,
  Construction,
  ParkingCircle,
  Cctv,
} from "lucide-react";

import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import { useNavigate } from "react-router-dom";

import ImageGallery from "@/Components/ImageGallery";
import PropertyMap from "@/Components/PropertyMap";
import ChatModal from "@/Components/ChatModal";

import { PopularPropertyOwnerData } from "../DummyData/PopularOwnerProperties";

export default function PropertyDetail() {
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [showChatModal, setShowChatModal] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const propertyId = Number(params.get("id"));

    const selected = PopularPropertyOwnerData.find((p) => p.id === propertyId);
    setProperty(selected || null);
  }, []);

  const formatPrice = (price) => {
    if (!price) return "₹0";
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
    return `₹${price.toLocaleString()}`;
  };

  if (!property) return null;

  return (
    <div className="min-h-screen bg-white pt-7">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 border-[#0B2A55] text-[#0B2A55] hover:bg-[#0B2A55]/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Listings
          </Button>
        </motion.div>

        {/* Image Gallery */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
          <ImageGallery images={[property.image]} />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* Header Section */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

              <div className="flex justify-between">
                <div>
                  <Badge className="bg-[#0B2A55] text-white">
                    Industrial Property
                  </Badge>

                  <h1 className="text-4xl font-bold text-[#0B2A55] mt-2">
                    {property.title}
                  </h1>

                  <div className="flex items-center text-slate-700 mt-2">
                    <MapPin className="w-5 h-5 mr-2 text-[#FF6B1A]" />
                    {property.location}
                  </div>
                </div>

                {/* Action Icons */}
                <div className="flex gap-3">
                  <Button size="icon" variant="outline" className="rounded-full border-[#0B2A55]">
                    <Heart className="w-5 h-5 text-[#FF6B1A]" />
                  </Button>

                  <Button size="icon" variant="outline" className="rounded-full border-[#0B2A55]">
                    <Share2 className="w-5 h-5 text-[#0B2A55]" />
                  </Button>
                </div>
              </div>

              {/* SIZE + LAND AREA */}
              <div className="flex flex-col gap-3 text-lg text-[#0B2A55] mt-5">

                <div className="flex items-center gap-2">
                  <Warehouse className="w-5 h-5 text-[#FF6B1A]" />
                  <strong>Factory Size:</strong> {property.factorySize}
                </div>

                <div className="flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-[#FF6B1A]" />
                  <strong>Land Area:</strong> {property.landArea}
                </div>

              </div>
            </motion.div>

            {/* Description */}
            <div className="bg-white border border-[#0B2A55]/20 rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-[#0B2A55] mb-4">Property Description</h2>
              <p className="text-slate-700 leading-relaxed">
                This industrial property is ideal for manufacturing, warehousing,
                storage, production units and commercial expansion. Located in a
                prime industrial belt, the property offers excellent road access,
                nearby workforce availability and strong infrastructure support.
              </p>
            </div>

            {/* Facilities */}
            <div className="bg-white border border-[#0B2A55]/20 rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-[#0B2A55] mb-4">Available Facilities</h2>

              <div className="grid grid-cols-2 gap-4 text-[#0B2A55]">

                {property.facilities.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">

                    {/* ICON MATCHING AUTOMATICALLY */}
                    {f.includes("Power") && <Zap className="w-5 h-5 text-[#FF6B1A]" />}
                    {f.includes("Water") && <Droplet className="w-5 h-5 text-[#FF6B1A]" />}
                    {f.includes("Crane") && <Construction className="w-5 h-5 text-[#FF6B1A]" />}
                    {f.includes("Parking") && <ParkingCircle className="w-5 h-5 text-[#FF6B1A]" />}
                    {f.includes("Fire") && <Flame className="w-5 h-5 text-[#FF6B1A]" />}
                    {f.includes("CCTV") && <Cctv className="w-5 h-5 text-[#FF6B1A]" />}

                    <span>{f}</span>
                  </div>
                ))}

              </div>
            </div>

            {/* Nearby */}

            <div className="bg-white border border-[#0B2A55]/20 rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-[#0B2A55] mb-4">Nearby Infrastructure</h2>
              <ul className="space-y-3 text-[#0B2A55]">
                <li>✔ Close to Highway</li>
                <li>✔ Good Approach Road</li>
                <li>✔ Industrial Zone Nearby</li>
                <li>✔ Labour Market Nearby</li>
                <li>✔ Shops & Transport Accessible</li>
              </ul>
            </div>

            {/* Security */}
            <div className="bg-white border border-[#0B2A55]/20 rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-[#0B2A55] mb-4">Security & Compliance</h2>
              <ul className="space-y-3 text-[#0B2A55]">
                <li>✔ CCTV Surveillance</li>
                <li>✔ Fire Safety Equipment</li>
                <li>✔ Clear Documentation</li>
                <li>✔ Industrial Approved Zone</li>
              </ul>
            </div>

            {/* Map */}
            <div className="bg-white border border-[#0B2A55]/20 rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-[#0B2A55] mb-4">Location</h2>
              <PropertyMap location={property.location} />
            </div>

          </div>

          {/* SIDEBAR */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-[#0B2A55]/20 sticky top-24">

              <div className="text-4xl font-bold text-[#0B2A55] mb-2">
                {formatPrice(property.priceValue)}
              </div>

              <p className="text-slate-600 mb-6">Total Price</p>

              <h3 className="font-bold text-[#0B2A55] mb-4">Contact Owner</h3>

              <div className="space-y-3 text-[#0B2A55]">
                <div className="flex gap-3">
                  <User className="w-5 h-5" />
                  {property.owner_name}
                </div>

                {property.owner_email && (
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5" />
                    {property.owner_email}
                  </div>
                )}
              </div>

              <Button
                className="bg-[#FF6B1A] hover:bg-[#e55f15] text-white rounded-xl w-full mt-6"
                onClick={() => setShowChatModal(true)}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Owner
              </Button>

            </div>
          </div>
        </div>
      </div>

      <ChatModal
        open={showChatModal}
        onClose={() => setShowChatModal(false)}
        property={property}
      />
    </div>
  );
}
