import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  MessageCircle,
  Home as HomeIcon,
  Check,
  CheckCheck,
  Trash2,
} from "lucide-react";

import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import { Skeleton } from "@/Components/ui/skeleton";
import { useNavigate } from "react-router-dom";

export default function Notifications() {
  const navigate = useNavigate();

  // 🔥 Dummy Notifications
  const dummyNotifications = [
    {
      id: 1,
      title: "New Message",
      message: "Aman Rathod: Can I schedule a visit?",
      type: "message",
      created_at: new Date(),
      is_read: false,
    },
    {
      id: 2,
      title: "Property Approved",
      message: "Your property '3BHK Luxury Flat' is now live!",
      type: "property_update",
      created_at: new Date(),
      is_read: false,
    },
    {
      id: 3,
      title: "Booking Request",
      message: "Rahul has requested a visit for '2BHK in Baner'.",
      type: "property_update",
      created_at: new Date(),
      is_read: true,
    },
    {
      id: 4,
      title: "Message Received",
      message: "Owner: The rent is ₹28,000 per month.",
      type: "message",
      created_at: new Date(),
      is_read: true,
    },
  ];

  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 🔹 Fake loading effect
  useEffect(() => {
    setTimeout(() => {
      setNotifications(dummyNotifications);
      setIsLoading(false);
    }, 600);
  }, []);

  // 🔹 Mark a single notification as read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, is_read: true } : n
      )
    );
  };

  // 🔹 Mark all as read
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, is_read: true }))
    );
  };

  // 🔹 Delete notification
  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "message":
        return MessageCircle;
      case "property_update":
        return HomeIcon;
      default:
        return Bell;
    }
  };

  const unreadCount = notifications.filter((n) => !n.is_read).length;

  return (
    <div className="min-h-screen py-22 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-2 flex items-center gap-3">
              <Bell className="w-10 h-10 text-orange-500" />
              Notifications
            </h1>
            <p className="text-gray-600">
              {unreadCount > 0
                ? `You have ${unreadCount} unread notification${unreadCount > 1 ? "s" : ""}`
                : "All caught up!"}
            </p>
          </div>

          {unreadCount > 0 && (
            <Button
              onClick={markAllAsRead}
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-50"
            >
              <CheckCheck className="w-4 h-4 mr-2" />
              Mark All as Read
            </Button>
          )}
        </div>

        {/* Notifications */}
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-24 w-full rounded-xl" />
            ))}
          </div>
        ) : notifications.length > 0 ? (
          <div className="space-y-4">

            {notifications.map((notification, index) => {
              const Icon = getNotificationIcon(notification.type);
              return (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group"
                >
                  <div
                    onClick={() => markAsRead(notification.id)}
                    className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                      !notification.is_read
                        ? "border-l-4 border-blue-900"
                        : "border border-gray-200"
                    }`}
                  >
                    <div className="flex items-start gap-4">

                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          notification.type === "message"
                            ? "bg-blue-100"
                            : "bg-orange-100"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            notification.type === "message"
                              ? "text-blue-900"
                              : "text-orange-600"
                          }`}
                        />
                      </div>

                      {/* Message */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-blue-900">
                            {notification.title}
                          </h3>

                          {!notification.is_read && (
                            <Badge className="bg-blue-900 text-white">
                              New
                            </Badge>
                          )}
                        </div>

                        <p className="text-gray-700 mb-2">
                          {notification.message}
                        </p>

                        <p className="text-sm text-gray-500">
                          {new Date(notification.created_at).toLocaleString()}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">

                        {!notification.is_read && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              markAsRead(notification.id);
                            }}
                          >
                            <Check className="w-4 h-4" />
                          </Button>
                        )}

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteNotification(notification.id);
                          }}
                          className="text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-12 shadow-lg text-center"
          >
            <div className="w-20 h-20 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bell className="w-10 h-10 text-blue-900" />
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              No notifications yet
            </h3>

            <p className="text-gray-600 mb-6">
              You'll see alerts and activity updates here.
            </p>

            <Button
              onClick={() => navigate("/home")}
              className="bg-blue-900 hover:bg-blue-800 text-white"
            >
              Browse Properties
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
