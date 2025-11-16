import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Heart,
  Share2,
  MessageCircle,
  Phone,
  Mail,
  User,
} from "lucide-react";

import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import { useNavigate } from "react-router-dom";

import ImageGallery from "@/Components/ImageGallery";
import PropertyMap from "../Components/PropertyMap.jsx";

import { mostVisitedProperties } from "../DummyData/MostVisitedProperties";
import ChatModal from "@/Components/ChatModal.jsx";

export default function PropertyDetail() {
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [showChatModal, setShowChatModal] = useState(false);

  const [selectedProperty, setSelectedProperty] = useState(null);

  // Load property from dummy data using ?id=
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const propertyId = Number(params.get("id"));

    const selectedProperty = mostVisitedProperties.find(
      (p) => p.id === propertyId
    );

    setProperty(selectedProperty || null);
  }, []);

  const formatPrice = (price) => {
    if (!price) return "₹0";
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
    return `₹${price.toLocaleString()}`;
  };

  if (!property) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-3">Property not found</h2>
          <Button onClick={() => navigate(-1)}>Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-7">
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
            className="flex items-center gap-2 border-blue-900 text-blue-900 hover:bg-blue-50"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Listings
          </Button>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <ImageGallery images={property.images} />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header Section */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex justify-between items-start">
                <div>
                  <Badge className="bg-blue-900 text-white">{property.bhk || "Property"}</Badge>

                  <h1 className="text-4xl font-bold text-slate-900 mt-2">
                    {property.title}
                  </h1>

                  <div className="flex items-center text-slate-600 mt-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    {property.location}
                  </div>
                </div>

                {/* Icons */}
                <div className="flex gap-3">
                  <Button size="icon" variant="outline" className="rounded-full border-blue-900">
                    <Heart className="w-5 h-5 text-red-500" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full border-blue-900">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Icons Row */}
              <div className="flex items-center gap-6 text-lg text-slate-700 mt-5">
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5" /> {property.bedrooms} Bedrooms
                </div>

                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5" /> {property.bathrooms} Bathrooms
                </div>

                <div className="flex items-center gap-2">
                  <Maximize className="w-5 h-5" /> {property.area} sqft
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-slate-700 leading-relaxed">{property.description}</p>
            </motion.div>

            {/* Amenities */}
            <motion.div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities?.map((am, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700">
                    <div className="w-2 h-2 bg-blue-900 rounded-full" />
                    {am}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Location Map */}
            <motion.div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <PropertyMap
                location={property.location}
                city={property.city || property.location}
              />
            </motion.div>

          </div>

          {/* Sidebar */}
          <div>
            <motion.div className="bg-white rounded-2xl p-8 shadow-lg sticky top-24">
              
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-2">
                {formatPrice(property.priceValue)}
              </div>
              <p className="text-slate-600 mb-6">Total Price</p>

             {/* Owner Info */}
<h3 className="font-bold text-slate-900 mb-4">Contact Owner</h3>

<div className="space-y-3">
  <div className="flex gap-3 text-slate-700">
    <User className="w-5 h-5" />
    {property.owner_name}
  </div>

  {/* Email (optional) */}
  {property.owner_email && (
    <div className="flex gap-3 text-slate-700">
      <Mail className="w-5 h-5" />
      {property.owner_email}
    </div>
  )}
</div>

{/* Chat Button Only */}
<div className="space-y-3 mt-6">
  <Button
    className="bg-blue-900 hover:bg-blue-800 text-white rounded-xl w-full"
    onClick={() => {
      setSelectedProperty(property);
      setShowChatModal(true);
    }}
  >
    <MessageCircle className="w-5 h-5 mr-2" />
    Chat with Owner
  </Button>
</div>


            </motion.div>
          </div>

        </div>
      </div>

      {/* Chat Modal */}
      <ChatModal
        open={showChatModal}
        onClose={() => setShowChatModal(false)}
        property={selectedProperty}
        onSend={(message) => {
          console.log("MESSAGE SENT:", message);
        }}
      />
    </div>
  );
}
