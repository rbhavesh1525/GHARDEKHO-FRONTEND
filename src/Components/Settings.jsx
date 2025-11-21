import React from "react";
import { motion } from "framer-motion";
import { Settings as SettingsIcon, Bell, Lock, Globe, Palette } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/Components/ui/card";
import { Switch } from "@/Components/ui/switch";
import { Label } from "@/Components/ui/label";

export default function Settings() {
  return (
    <div className="min-h-screen ml-64 py-22 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* Page Title */}
          <h1 className="text-4xl font-bold text-blue-900 mb-2 flex items-center gap-3">
            <SettingsIcon className="w-10 h-10 text-orange-500" />
            Settings
          </h1>

          <p className="text-gray-600 mb-8">Manage your account preferences</p>

          <div className="space-y-6">

            {/* Notifications */}
            <Card className="border border-blue-900/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Bell className="w-5 h-5 text-orange-500" />
                  Notifications
                </CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-blue-900">Email Notifications</Label>
                    <p className="text-sm text-gray-500">Receive email updates about new messages</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-blue-900">Property Updates</Label>
                    <p className="text-sm text-gray-500">Get notified about property status changes</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-blue-900">Marketing Emails</Label>
                    <p className="text-sm text-gray-500">Receive newsletters and offers</p>
                  </div>
                  <Switch />
                </div>

              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card className="border border-blue-900/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Lock className="w-5 h-5 text-orange-500" />
                  Privacy & Security
                </CardTitle>
                <CardDescription>Control your privacy settings</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-blue-900">Show Profile to Other Users</Label>
                    <p className="text-sm text-gray-500">Allow others to see your profile information</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-blue-900">Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">Add an extra layer of security</p>
                  </div>
                  <Switch />
                </div>

              </CardContent>
            </Card>

            {/* Language & Region */}
            <Card className="border border-blue-900/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Globe className="w-5 h-5 text-orange-500" />
                  Language & Region
                </CardTitle>
                <CardDescription>Customize your regional preferences</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">

                <div className="space-y-2">
                  <Label className="text-blue-900">Language</Label>
                  <p className="text-sm text-gray-700">English (US)</p>
                </div>

                <div className="space-y-2">
                  <Label className="text-blue-900">Currency</Label>
                  <p className="text-sm text-gray-700">INR (₹)</p>
                </div>

              </CardContent>
            </Card>

            {/* Appearance */}
            <Card className="border border-blue-900/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Palette className="w-5 h-5 text-orange-500" />
                  Appearance
                </CardTitle>
                <CardDescription>Customize how the app looks</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-blue-900">Dark Mode</Label>
                    <p className="text-sm text-gray-500">Use dark theme across the app</p>
                  </div>
                  <Switch />
                </div>

              </CardContent>
            </Card>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
