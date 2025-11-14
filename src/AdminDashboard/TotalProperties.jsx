import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Trash2, XCircle, CheckCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Later: fetch with react-query
export default function TotalProperties({ data = [], loading = false }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg overflow-x-auto">

      <h2 className="text-2xl font-bold mb-6">Manage Properties</h2>

      {loading ? (
        <div className="space-y-4">
          {[1,2,3].map(n => <Skeleton key={n} className="h-16 w-full" />)}
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((p) => (
              <TableRow key={p.id}>

                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={p.images?.[0] || "/placeholder.jpg"}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <div className="font-medium">{p.title}</div>
                      <div className="text-sm text-slate-500">{p.location}</div>
                    </div>
                  </div>
                </TableCell>

                <TableCell><Badge>{p.property_type}</Badge></TableCell>

                <TableCell className="font-medium">₹{p.price}</TableCell>

                <TableCell>{p.owner_name}</TableCell>

                <TableCell>
                  <Badge className={p.status === "available" ? "bg-green-100 text-green-700" : ""}>
                    {p.status}
                  </Badge>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline"><Eye className="w-4" /></Button>
                    <Button size="sm" variant="outline">
                      {p.featured ? <XCircle className="w-4 text-orange-500" /> : <CheckCircle className="w-4 text-green-500" />}
                    </Button>
                    <Button size="sm" variant="outline"><Trash2 className="w-4 text-red-500" /></Button>
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
