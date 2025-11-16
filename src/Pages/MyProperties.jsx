import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home as HomeIcon,
  Plus,
  Eye,
  Trash2,
  AlertCircle,
} from "lucide-react";

import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Skeleton } from "@/Components/ui/skeleton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/Components/ui/alert-dialog";

import { useNavigate } from "react-router-dom";

export default function MyProperties() {
  const navigate = useNavigate();

  // 🔥 Dummy User
  const [user] = useState({
    email: "demo@gmail.com",
    name: "Demo User",
  });

  // 🔥 2 Dummy Properties
  const dummyProperties = [
    {
      id: 1,
      title: "Luxury 3BHK Apartment",
      area: "Andheri West",
      city: "Mumbai",
      price: 32000000,
      type: "sale",
      status: "available",
      bedrooms: 3,
      bathrooms: 2,
      area_sqft: 1450,
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1400"
      ],
    },
    {
      id: 2,
      title: "Modern 2BHK for Rent",
      area: "Baner",
      city: "Pune",
      price: 28000,
      type: "rent",
      status: "available",
      bedrooms: 2,
      bathrooms: 2,
      area_sqft: 1050,
      images: [
        "https://images.unsplash.com/photo-1600607687920-4c71a4e1e4d0?q=80&w=1400"
      ],
    },
  ];

  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fake Loading for Demo Look
  useEffect(() => {
    setTimeout(() => {
      setProperties(dummyProperties);
      setIsLoading(false);
    }, 800); // Just for smooth loading feel
  }, []);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [propertyToDelete, setPropertyToDelete] = useState(null);

  const confirmDelete = () => {
    setProperties((prev) =>
      prev.filter((p) => p.id !== propertyToDelete.id)
    );
    setDeleteDialogOpen(false);
    setPropertyToDelete(null);
  };

  const handleDeleteClick = (property) => {
    setPropertyToDelete(property);
    setDeleteDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 ml-64">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-2 flex items-center gap-3">
              <HomeIcon className="w-10 h-10 text-orange-500" />
              My Properties
            </h1>
            <p className="text-gray-600">Manage your property listings</p>
          </div>

          <Button
            onClick={() => navigate("/PostProperty")}
            className="bg-blue-900 hover:bg-blue-800 text-white rounded-lg shadow-md flex items-center gap-2"
          >
            <Plus className="w-5 h-5" /> Add New Property
          </Button>
        </div>

        {/* LOADING SKELETONS */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(2)].map((_, i) => (
              <Skeleton key={i} className="h-96 rounded-2xl" />
            ))}
          </div>
        ) : (
          /* PROPERTIES GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.08 }}
              >
                <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl border border-blue-900/20 transition-all">
                  
                  {/* IMAGE */}
                  <div className="relative h-48 bg-gray-200">
                    <img
                      src={
                        property.images?.[0] ||
                        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500"
                      }
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />

                    {/* BADGES */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge
                        className={`${
                          property.type === "rent"
                            ? "bg-orange-500"
                            : "bg-green-600"
                        } text-white px-3 py-1 rounded-md`}
                      >
                        {property.type === "rent" ? "Rent" : "Sale"}
                      </Badge>

                      <Badge
                        className={`${
                          property.status === "available"
                            ? "bg-blue-900/10 text-blue-900"
                            : "bg-gray-200 text-gray-700"
                        } px-3 py-1 rounded-md`}
                      >
                        {property.status}
                      </Badge>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2 line-clamp-1">
                      {property.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {property.area}, {property.city}
                    </p>

                    {/* PRICE */}
                    <div className="mb-4">
                      <p className="text-2xl font-bold text-blue-900">
                        ₹{property.price?.toLocaleString()}
                        {property.type === "rent" && (
                          <span className="text-sm text-gray-600">/mo</span>
                        )}
                      </p>
                    </div>

                    {/* STATS */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      {property.bedrooms && (
                        <span className="text-blue-900/90">
                          {property.bedrooms} Beds
                        </span>
                      )}
                      {property.bathrooms && (
                        <span className="text-blue-900/90">
                          {property.bathrooms} Baths
                        </span>
                      )}
                      {property.area_sqft && (
                        <span className="text-blue-900/90">
                          {property.area_sqft} sqft
                        </span>
                      )}
                    </div>

                    {/* ACTIONS */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/property/${property.id}`)}
                        className="flex-1 border-blue-900 text-blue-900 hover:bg-blue-50"
                      >
                        <Eye className="w-4 h-4 mr-1" /> View
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteClick(property)}
                        className="border-red-600 text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

          </div>
        )}

      </div>

      {/* DELETE DIALOG */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="border border-blue-900/20">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-blue-900">
              <AlertCircle className="w-5 h-5 text-red-600" />
              Delete Property
            </AlertDialogTitle>

            <AlertDialogDescription className="text-gray-700">
              Are you sure you want to delete “
              <span className="font-semibold">{propertyToDelete?.title}</span>”?  
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel className="hover:bg-gray-100">
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
