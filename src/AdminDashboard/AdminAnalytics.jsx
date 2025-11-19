import React from "react";
import { Card } from "@/components/ui/card";
import ReactApexChart from "react-apexcharts";

export default function AdminAnalytics() {
  const lineOptions = {
    chart: { type: "line", height: 160, toolbar: { show: false } },
    stroke: { curve: "smooth", width: 2 },
    xaxis: {
      categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      labels: { style: { fontSize: "8px" } }
    },
    legend: { position: "top", fontSize: "8px" },
    colors: ["#16a34a", "#2563eb"],
  };

  const lineSeries = [
    { name: "Sold", data: [40, 55, 35, 60, 45, 70, 50, 65, 40, 72, 55, 60] },
    { name: "Rented", data: [20, 30, 25, 35, 28, 40, 33, 30, 22, 34, 29, 32] },
  ];

  const donutOptions = {
    labels: ["Sold", "Available", "Rented"],
    legend: { position: "bottom", fontSize: "8px" },
    colors: ["#16a34a", "#2563eb", "#f97316"],
    stroke: { width: 0 },
  };

  const donutSeries = [480, 320, 200];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 px-2">

      {/* SMALL LINE CHART CARD */}
      <Card className="p-3 bg-white rounded-lg shadow border min-h-[200px]">
        <h2 className="text-sm font-semibold mb-1">Real Estate Trends</h2>
        <p className="text-gray-500 text-[10px] mb-2">Sold vs Rented</p>

        <ReactApexChart
          options={lineOptions}
          series={lineSeries}
          type="line"
          height={160}
        />
      </Card>

      {/* SMALL DONUT CARD */}
      <Card className="p-3 bg-white rounded-lg shadow border flex flex-col items-center min-h-[200px]">
        <h2 className="text-sm font-semibold mb-1">Property Status</h2>
        <p className="text-gray-500 text-[10px] mb-2">Market</p>

        <ReactApexChart
          options={donutOptions}
          series={donutSeries}
          type="donut"
          height={160}
        />

        <div className="text-center mt-1">
          <p className="text-lg font-bold">1000+</p>
          <p className="text-gray-500 text-[10px]">Total Properties</p>
        </div>
      </Card>
    </div>
  );
}
