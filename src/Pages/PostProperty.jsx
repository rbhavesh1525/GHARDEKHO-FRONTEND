import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Upload, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

const propertyFeatures = [
  "WiFi", "Security", "Parking", "Garden", "Swimming Pool",
  "Gym", "Power Backup", "Elevator", "CCTV", "Gated Community",
];

export default function PostProperty() {
  const navigate = useNavigate();

  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [propertyData, setPropertyData] = useState({
    title: "",
    description: "",
    type: "rent",
    category: "1BHK",
    price: "",
    city: "",
    area: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    area_sqft: "",
    features: [],
    nearby_station: "",
    owner_name: "",
    owner_contact: "",
    status: "available",
    image_url: "",
  });

  // Upload Image
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        "https://your-backend.com/api/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setPropertyData({ ...propertyData, image_url: res.data.url });
    } catch (err) {
      alert("Failed to upload image");
    }

    setUploading(false);
  };

  // Select feature
  const toggleFeature = (feature) => {
    const features = propertyData.features.includes(feature)
      ? propertyData.features.filter((f) => f !== feature)
      : [...propertyData.features, feature];

    setPropertyData({ ...propertyData, features });
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await axios.post("https://your-backend.com/api/properties", {
        ...propertyData,
      });

      if (res.status === 201) {
        alert("Property posted successfully!");
        navigate("/my-properties");
      }
    } catch (err) {
      alert("Failed to post property");
    }

    setSubmitting(false);
  };

  return (
    <div className="min-h-screen py-22 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate("/home")}
            className="border-blue-900 text-blue-900 hover:bg-blue-50"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <div>
            <h1 className="text-4xl font-bold text-blue-900 flex items-center gap-3">
              <Home className="w-10 h-10 text-orange-500" />
              Post New Property
            </h1>
            <p className="text-gray-600 mt-1">
              Fill in the details to list your property
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Basic Info */}
          <Card className="mb-6 border-blue-900/20 shadow">
            <CardHeader>
              <CardTitle className="text-blue-900">Basic Information</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <Label className="text-blue-900">Property Title *</Label>
                <Input
                  value={propertyData.title}
                  onChange={(e) =>
                    setPropertyData({ ...propertyData, title: e.target.value })
                  }
                  placeholder="e.g., Spacious 2BHK Apartment"
                  className="border-blue-900/30"
                  required
                />
              </div>

              <div>
                <Label className="text-blue-900">Description</Label>
                <Textarea
                  value={propertyData.description}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      description: e.target.value,
                    })
                  }
                  placeholder="Describe the property..."
                  rows={4}
                  className="border-blue-900/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-blue-900">Listing Type *</Label>
                  <Select
                    value={propertyData.type}
                    onValueChange={(v) =>
                      setPropertyData({ ...propertyData, type: v })
                    }
                  >
                    <SelectTrigger className="border-blue-900/30">
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rent">For Rent</SelectItem>
                      <SelectItem value="sell">For Sale</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-blue-900">Property Category *</Label>
                  <Select
                    value={propertyData.category}
                    onValueChange={(v) =>
                      setPropertyData({ ...propertyData, category: v })
                    }
                  >
                    <SelectTrigger className="border-blue-900/30">
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>

                    <SelectContent>
                      {["1BHK", "2BHK", "3BHK", "Bungalow", "Villa"].map(
                        (type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="text-blue-900">Price (₹)*</Label>
                <Input
                  type="number"
                  value={propertyData.price}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      price: e.target.value,
                    })
                  }
                  placeholder="Enter price"
                  className="border-blue-900/30"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="mb-6 border-blue-900/20 shadow">
            <CardHeader>
              <CardTitle className="text-blue-900">Location</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-blue-900">City *</Label>
                  <Input
                    className="border-blue-900/30"
                    value={propertyData.city}
                    onChange={(e) =>
                      setPropertyData({ ...propertyData, city: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label className="text-blue-900">Area *</Label>
                  <Input
                    className="border-blue-900/30"
                    value={propertyData.area}
                    onChange={(e) =>
                      setPropertyData({ ...propertyData, area: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <Label className="text-blue-900">Full Address</Label>
                <Input
                  className="border-blue-900/30"
                  value={propertyData.address}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      address: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <Label className="text-blue-900">Nearby Station</Label>
                <Input
                  className="border-blue-900/30"
                  value={propertyData.nearby_station}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      nearby_station: e.target.value,
                    })
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Property Details */}
          <Card className="mb-6 border-blue-900/20 shadow">
            <CardHeader>
              <CardTitle className="text-blue-900">Property Details</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">

              <div className="grid grid-cols-3 gap-4">
                <Input
                  type="number"
                  placeholder="Bedrooms"
                  className="border-blue-900/30"
                  value={propertyData.bedrooms}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      bedrooms: e.target.value,
                    })
                  }
                />

                <Input
                  type="number"
                  placeholder="Bathrooms"
                  className="border-blue-900/30"
                  value={propertyData.bathrooms}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      bathrooms: e.target.value,
                    })
                  }
                />

                <Input
                  type="number"
                  placeholder="Area (sqft)"
                  className="border-blue-900/30"
                  value={propertyData.area_sqft}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      area_sqft: e.target.value,
                    })
                  }
                />
              </div>

              {/* Features */}
              <div>
                <Label className="mb-3 block text-blue-900">
                  Features & Amenities
                </Label>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {propertyFeatures.map((feature) => (
                    <div
                      key={feature}
                      onClick={() => toggleFeature(feature)}
                      className={`p-3 rounded-lg border-2 cursor-pointer transition-all
                        ${
                          propertyData.features.includes(feature)
                            ? "border-blue-900 bg-blue-50"
                            : "border-gray-300 hover:border-blue-900/60"
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{feature}</span>
                        {propertyData.features.includes(feature) && (
                          <Check className="w-4 h-4 text-blue-900" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Owner Info */}
          <Card className="mb-6 border-blue-900/20 shadow">
            <CardHeader>
              <CardTitle className="text-blue-900">Owner Information</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <Input
                placeholder="Your Name"
                className="border-blue-900/30"
                value={propertyData.owner_name}
                onChange={(e) =>
                  setPropertyData({
                    ...propertyData,
                    owner_name: e.target.value,
                  })
                }
              />

              <Input
                placeholder="Contact Number"
                className="border-blue-900/30"
                value={propertyData.owner_contact}
                onChange={(e) =>
                  setPropertyData({
                    ...propertyData,
                    owner_contact: e.target.value,
                  })
                }
                required
              />
            </CardContent>
          </Card>

          {/* Upload */}
          <Card className="mb-6 border-blue-900/20 shadow">
            <CardHeader>
              <CardTitle className="text-blue-900">Property Image</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="border-2 border-dashed border-blue-900/40 rounded-lg p-8 text-center">

                {propertyData.image_url ? (
                  <div className="space-y-4">
                    <img
                      src={propertyData.image_url}
                      alt="Property"
                      className="w-full h-64 object-cover rounded-lg"
                    />

                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        setPropertyData({ ...propertyData, image_url: "" })
                      }
                      className="border-blue-900 text-blue-900 hover:bg-blue-50"
                    >
                      Change Image
                    </Button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-blue-900/40 mx-auto mb-4" />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <span className="text-blue-900 font-medium">
                        {uploading ? "Uploading..." : "Click to upload"}
                      </span>
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={uploading}
                        className="hidden"
                      />
                    </label>
                    <p className="text-sm text-gray-500 mt-2">
                      PNG, JPG up to 10MB
                    </p>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/home")}
              className="flex-1 border-blue-900 text-blue-900 hover:bg-blue-50"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={submitting}
              className="flex-1 bg-blue-900 hover:bg-blue-800 text-white"
            >
              {submitting ? "Posting..." : "Post Property"}
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
}
