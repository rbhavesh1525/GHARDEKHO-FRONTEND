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

  const [formData, setFormData] = useState({
    name: "Bhavesh Rathod",
    email: "bhavesh@example.com",
    phone: "+91 9876543210",
    role: "buyer",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully! (frontend only)");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="ml-64 min-h-screen p-12 bg-gray-50"
    >
      <Card className="shadow-md max-w-3xl mx-auto border border-blue-900/20 rounded-2xl">
        <CardHeader className="flex items-center justify-between pb-2">
          <CardTitle className="text-2xl font-bold text-blue-900">
            My Profile
          </CardTitle>

          {!isEditing && (
            <Button
              variant="outline"
              onClick={() => setIsEditing(true)}
              className="border-blue-900 text-blue-900 hover:bg-blue-50"
            >
              <Edit2 className="w-4 h-4 mr-2" /> Edit
            </Button>
          )}
        </CardHeader>

        <CardContent className="space-y-6 mt-3">
          {/* NAME */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-blue-900">
              Full Name
            </Label>

            {isEditing ? (
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-blue-900/30 focus:ring-orange-500"
              />
            ) : (
              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                <User className="w-5 h-5 text-blue-900" />
                <span className="text-blue-900 font-medium">{formData.name}</span>
              </div>
            )}
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-blue-900">
              Email Address
            </Label>

            <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
              <Mail className="w-5 h-5 text-blue-900" />
              <span className="text-blue-900 font-medium">{formData.email}</span>
            </div>

            <p className="text-sm text-gray-400">Email cannot be changed.</p>
          </div>

          {/* PHONE */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-blue-900">
              Phone Number
            </Label>

            {isEditing ? (
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-blue-900/30 focus:ring-orange-500"
              />
            ) : (
              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                <Phone className="w-5 h-5 text-blue-900" />
                <span className="text-blue-900 font-medium">
                  {formData.phone}
                </span>
              </div>
            )}
          </div>

          {/* ROLE */}
          <div className="space-y-2">
            <Label htmlFor="role" className="text-blue-900">
              I am a
            </Label>

            {isEditing ? (
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border border-blue-900/30 rounded-lg p-2 text-blue-900 focus:ring-orange-500"
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                <option value="agent">Agent</option>
              </select>
            ) : (
              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                <Briefcase className="w-5 h-5 text-blue-900" />
                <Badge className="bg-orange-500 text-white capitalize px-3 py-1 rounded-md">
                  {formData.role}
                </Badge>
              </div>
            )}
          </div>

          {/* ACTION BUTTONS */}
          {isEditing && (
            <div className="flex gap-3 mt-6">
              <Button
                onClick={() => setIsEditing(false)}
                variant="outline"
                className="flex-1 border-blue-900 text-blue-900 hover:bg-blue-50"
              >
                Cancel
              </Button>

              <Button
                onClick={handleSave}
                className="flex-1 bg-blue-900 hover:bg-blue-800 text-white"
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
