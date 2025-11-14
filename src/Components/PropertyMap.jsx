import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Dummy coordinates for Indian cities
const cityCoordinates = {
  "New Delhi": [28.6139, 77.2090],
  "Delhi": [28.6139, 77.2090],
  "Mumbai": [19.0760, 72.8777],
  "Bangalore": [12.9716, 77.5946],
  "Hyderabad": [17.3850, 78.4867],
  "Chennai": [13.0827, 80.2707],
  "Kolkata": [22.5726, 88.3639],
  "Pune": [18.5204, 73.8567],
  "Ahmedabad": [23.0225, 72.5714],
  "Jaipur": [26.9124, 75.7873],
  "Lucknow": [26.8467, 80.9462],
  "Noida": [28.5355, 77.3910],
  "Gurgaon": [28.4595, 77.0266],
  "Alibaug": [18.6414, 72.8722],
};

export default function PropertyMap({ location, city }) {
  const [coordinates, setCoordinates] = useState([28.6139, 77.2090]); // Default to Delhi

  useEffect(() => {
    // Try to find coordinates for the city
    const cityCoords = cityCoordinates[city] || cityCoordinates["New Delhi"];
    
    // Add some random offset to make each property unique (within ~2km radius)
    const randomLat = cityCoords[0] + (Math.random() - 0.5) * 0.02;
    const randomLng = cityCoords[1] + (Math.random() - 0.5) * 0.02;
    
    setCoordinates([randomLat, randomLng]);
  }, [city]);

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden border-2 border-slate-200">
      <MapContainer
        center={coordinates}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            <div className="text-center">
              <p className="font-semibold text-slate-900">{location}</p>
              <p className="text-sm text-slate-600">{city}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}