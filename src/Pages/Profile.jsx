import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Briefcase, Edit2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data
  const [formData, setFormData] = useState({
    name: "Bhavesh Rathod",
    email: "bhavesh@example.com",
    phone: "+91 9876543210",
    role: "buyer",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully (frontend only)");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="ml-64 min-h-screen p-20 bg-gray-50"
    >
      <Card className="shadow-md max-w-3xl mx-auto">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold text-gray-800">
            My Profile
          </CardTitle>
          {!isEditing && (
            <Button variant="outline" onClick={() => setIsEditing(true)}>
              <Edit2 className="w-4 h-4 mr-2" />
              Edit
            </Button>
          )}
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            {isEditing ? (
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            ) : (
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                <User className="w-5 h-5 text-gray-500" />
                <span className="text-gray-800">{formData.name}</span>
              </div>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <Mail className="w-5 h-5 text-gray-500" />
              <span className="text-gray-800">{formData.email}</span>
            </div>
            <p className="text-sm text-gray-400">Email cannot be changed.</p>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            {isEditing ? (
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            ) : (
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                <Phone className="w-5 h-5 text-gray-500" />
                <span className="text-gray-800">{formData.phone}</span>
              </div>
            )}
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label htmlFor="role">I am a</Label>
            {isEditing ? (
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 text-gray-800"
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                <option value="agent">Agent</option>
              </select>
            ) : (
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                <Briefcase className="w-5 h-5 text-gray-500" />
                <Badge className="capitalize bg-blue-100 text-blue-800">
                  {formData.role}
                </Badge>
              </div>
            )}
          </div>

          {/* Save / Cancel Buttons */}
          {isEditing && (
            <div className="flex gap-3 mt-6">
              <Button
                onClick={() => setIsEditing(false)}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
