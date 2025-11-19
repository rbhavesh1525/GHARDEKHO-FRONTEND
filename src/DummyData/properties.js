// 📦 Industrial Property Categories (EXTENDED + REALISTIC)

export const industrialCategories = [
  {
    id: 1,
    title: "Factory / Manufacturing Unit",
    type: "factory",
    image: "/assets/factory.jpg",

    // CARD INFO
    priceRange: "₹40,000 – ₹3,50,000 / Month",
    areaRange: "2,000 – 60,000 sq ft",

    // PROPERTY DETAILS PAGE FIELDS
    description:
      "Ideal for manufacturing, production units, assembly lines, fabrication & heavy industries. Includes good connectivity, labour availability and utility infrastructure.",

    specs: {
      factorySize: "5,000 – 50,000 sq ft",
      landArea: "8,000 – 1,00,000 sq ft",
      power: "65 – 200 HP",
      height: "20 – 40 ft",
      craneSupport: true,
      waterAvailability: true,
    },

    facilities: [
      "High Power Supply",
      "24x7 Water",
      "Fire NOC",
      "CCTV Surveillance",
      "Crane Provision",
      "Parking Space",
      "Wide Road Access",
      "Industrial Zone Approved",
    ],
  },

  {
    id: 2,
    title: "Warehouse / Godown",
    type: "warehouse",
    image: "/assets/warehouse.jpg",

    priceRange: "₹25,000 – ₹2,50,000 / Month",
    areaRange: "1,500 – 80,000 sq ft",

    description:
      "Best suited for storage, logistics, cold storage, FMCG, stock keeping and distribution hubs. Located near highways for fast transport movement.",

    specs: {
      factorySize: "8,000 – 60,000 sq ft",
      landArea: "10,000 – 2,00,000 sq ft",
      height: "22 – 45 ft",
      parking: true,
      waterAvailability: true,
      ventilation: "Natural + Turbo Fans",
    },

    facilities: [
      "RCC Flooring",
      "CCTV Surveillance",
      "Dock Leveler",
      "Heavy Vehicle Access",
      "Fire Safety",
      "Loading / Unloading Zone",
      "24x7 Security",
    ],
  },

  {
    id: 3,
    title: "Open Industrial Land / Plot",
    type: "open-land",
    image: "/assets/open_land.jpg",

    priceRange: "₹10 – ₹40 per sq ft (Sale)",
    areaRange: "5,000 – 5,00,000 sq ft",

    description:
      "Great for future construction, storage yards, transport hubs, container parking, brick kiln, fabrication yard etc.",

    specs: {
      landArea: "10,000 – 10,00,000 sq ft",
      fencing: true,
      roadAccess: "Main Road Access",
      waterAvailability: false,
      electricity: true,
    },

    facilities: [
      "Wide Road Approach",
      "Industrial Zone",
      "Truck Friendly Area",
      "Easy Highway Access",
      "Future Expansion Possible",
    ],
  },

  {
    id: 4,
    title: "Multi-Storey Industrial Building",
    type: "big-building",
    image: "/assets/industrial_building.jpg",

    priceRange: "₹60,000 – ₹5,00,000 / Month",
    areaRange: "10,000 – 1,20,000 sq ft",

    description:
      "Premium industrial RCC buildings suitable for corporate production, pharmaceuticals, textile units & large-scale industries.",

    specs: {
      floors: "2 – 4 Floors",
      floorLoadCapacity: "1 – 3 Ton / sq m",
      lift: "Goods Lift (2–5 Ton)",
      power: "100 – 300 HP",
      securityCabin: true,
    },

    facilities: [
      "Fire Compliance Certified",
      "Goods Lift",
      "24x7 Water & Power",
      "Parking",
      "Security Cabin",
      "CCTV",
      "Wide Roads",
    ],
  },

  {
    id: 5,
    title: "Open Industrial Shed",
    type: "open-shed",
    image: "/assets/open_shed.jpg",

    priceRange: "₹20,000 – ₹1,20,000 / Month",
    areaRange: "1,000 – 40,000 sq ft",

    description:
      "Budget-friendly sheds for storage, fabrication, workshop, automobile, godown and small-scale units.",

    specs: {
      shedSize: "3,000 – 30,000 sq ft",
      landArea: "4,000 – 50,000 sq ft",
      height: "18 – 30 ft",
      flooring: "Industrial Flooring",
      power: "30 – 80 HP",
    },

    facilities: [
      "Wide Road",
      "Parking",
      "Water Source",
      "Electricity",
      "Natural Ventilation",
      "Industrial Location",
    ],
  },
];
