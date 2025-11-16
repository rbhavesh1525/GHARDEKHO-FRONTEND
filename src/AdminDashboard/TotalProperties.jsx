import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Trash2, XCircle, CheckCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Import dummy data
import { adminProperties } from "../DummyData/adminProperties";

export default function TotalProperties({ data, loading = false }) {

  // If no data passed → use dummy admin properties
  const properties = data && data.length > 0 ? data : adminProperties;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-900/10">

      <h2 className="text-3xl font-bold text-blue-900 mb-6">
        Manage Properties
      </h2>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((n) => (
            <Skeleton key={n} className="h-16 w-full rounded-xl" />
          ))}
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-900/10 hover:bg-blue-900/10">
              <TableHead className="font-semibold text-blue-900">Property</TableHead>
              <TableHead className="font-semibold text-blue-900">Type</TableHead>
              <TableHead className="font-semibold text-blue-900">Price</TableHead>
              <TableHead className="font-semibold text-blue-900">Owner</TableHead>
              <TableHead className="font-semibold text-blue-900">Status</TableHead>
              <TableHead className="font-semibold text-blue-900">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {properties.map((p) => (
              <TableRow
                key={p.id}
                className="hover:bg-blue-900/5 transition-all cursor-pointer"
              >

                {/* Property Column */}
                <TableCell>
                  <div className="flex items-center gap-4">
                    <img
                      src={p.images?.[0] || "/placeholder.jpg"}
                      className="w-14 h-14 rounded-xl object-cover border border-blue-900/20"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">{p.title}</div>
                      <div className="text-sm text-slate-500">{p.location}</div>
                    </div>
                  </div>
                </TableCell>

                {/* Type */}
                <TableCell>
                  <Badge className="bg-blue-900/10 text-blue-900 capitalize px-3 py-1">
                    {p.property_type}
                  </Badge>
                </TableCell>

                {/* Price */}
                <TableCell className="font-semibold text-blue-900">
                  ₹{p.price.toLocaleString()}
                </TableCell>

                {/* Owner */}
                <TableCell className="text-slate-700">{p.owner_name}</TableCell>

                {/* Status */}
                <TableCell>
                  <Badge
                    className={`px-3 py-1 ${
                      p.status === "available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.status}
                  </Badge>
                </TableCell>

                {/* Actions */}
                <TableCell>
                  <div className="flex items-center gap-2">

                    {/* View */}
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-900 text-blue-900 hover:bg-blue-50"
                    >
                      <Eye className="w-4" />
                    </Button>

                    {/* Toggle Featured */}
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-orange-500 text-orange-600 hover:bg-orange-50"
                    >
                      {p.featured ? (
                        <XCircle className="w-4" />
                      ) : (
                        <CheckCircle className="w-4" />
                      )}
                    </Button>

                    {/* Delete */}
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-600 text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4" />
                    </Button>

                  </div>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
