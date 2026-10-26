export type VehicleType = "car" | "suv" | "van";

export interface PackageItem {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  duration: string;
  isPopular?: boolean;
  badge?: string;
  description: string;
  features: string[];
  freeBonus?: string;
  warranty?: string;
  ceramicBonus?: string;
  maintenanceNote?: string;
}

export interface AddOnItem {
  id: string;
  name: string;
  tag: string;
  price: number;
  perk?: string;
  description: string;
}

export interface CoatingOption {
  title: string;
  tag: string;
  description: string;
  pricingLabel: string;
  options: string[];
  perks: string[];
  maintenanceNote: string;
}

export interface VehiclePricingConfig {
  id: VehicleType;
  label: string;
  badge: string;
  subtitle: string;
  packages: PackageItem[];
  addOns: AddOnItem[];
  coatings: CoatingOption;
  maintenanceNote: string;
}

export const PRICING_DATA: Record<VehicleType, VehiclePricingConfig> = {
  car: {
    id: "car",
    label: "Car",
    badge: "Sedan / Hatchback / Coupe",
    subtitle: "Standard passenger cars, hatchbacks, and sedans",
    maintenanceNote: "* Maintenance wash must be done by carvibes.lk",
    packages: [
      {
        id: "basic-vibe-car",
        name: "Basic Vibe",
        category: "Essential Clean",
        originalPrice: 2000,
        price: 1500,
        duration: "1 – 2 hrs",
        description:
          "Fast-turnaround essential cleaning to keep your daily drive fresh, spotless, and dust-free.",
        features: [
          "Exterior Quick Wash",
          "Interior Vacuum Cleaning",
          "Interior Wipe Down",
        ],
      },
      {
        id: "refresh-vibe-car",
        name: "Refresh Vibe",
        category: "Deep Revitalization",
        originalPrice: 10000,
        price: 6900,
        duration: "3 – 5 hrs",
        isPopular: true,
        badge: "Most Comprehensive",
        description:
          "Comprehensive exterior and interior treatment designed to strip contaminants and condition high-wear surfaces.",
        features: [
          "2-Step Decontamination Wash",
          "Exterior Detail",
          "Interior Detail (Seats In)",
          "Engine Degrease",
          "Protective Body Wax",
          "Plastic Parts Conditioning",
          "Leather Conditioning",
        ],
        freeBonus: "1 Free Decontamination Wash within 2 months",
        warranty: "6 Months Warranty* on Plastic & Leather Conditioner",
        maintenanceNote: "* Maintenance wash must be done by carvibes.lk",
      },
      {
        id: "premium-vibe-car",
        name: "Premium Vibe",
        category: "Complete Transformation",
        originalPrice: 18000,
        price: 13900,
        duration: "1 Day",
        description:
          "Our signature, high-intensity showroom package featuring intensive steam sanitation and complete engine care.",
        features: [
          "2-Step Decontamination Wash",
          "Exterior Detail",
          "Interior Detail (Seats Out Deep Cleaning)",
          "Interior Steam Clean & Sanitization",
          "Engine Degrease with Steam Cleaning & Foam",
          "Plastic Parts Conditioning",
        ],
        freeBonus: "1 Free Decontamination Wash within 2 months",
        warranty: "6 Months Warranty* on Plastic & Leather Conditioner",
        ceramicBonus: "Free Ceramic Coating top up after 2 months (6 Months Warranty*)",
        maintenanceNote: "* Maintenance wash must be done by carvibes.lk",
      },
    ],
    addOns: [
      {
        id: "ceramic-car-shampoo-car",
        name: "Ceramic Car Shampoo",
        tag: "Maintenance Wash",
        price: 3900,
        description:
          "pH-neutral, SiO2-infused ceramic wash shampoo for superior lubricity, intense gloss, and hydrophobic self-cleaning protection.",
      },
      {
        id: "cut-and-polish-car",
        name: "Cut & Polish",
        tag: "Paint Correction",
        price: 11900,
        description:
          "Multi-stage machine paint correction to eliminate swirl marks, light scratches, and oxidation for a mirror-like showroom gloss.",
      },
      {
        id: "windscreen-ceramic-car",
        name: "Windscreen Spot Removal & Ceramic Spray Coating",
        tag: "Glass Protection",
        price: 7900,
        perk: "Free Wurth Windscreen Washer Fluid included",
        description:
          "Specialized mineral water spot extraction from the front windshield paired with hydrophobic ceramic spray seal for high rainy-drive clarity.",
      },
      {
        id: "all-glass-ceramic-car",
        name: "All Glass Spot Removal & Ceramic Spray Coating",
        tag: "Full Visibility",
        price: 11900,
        description:
          "Complete 360° water spot mineral removal and hydrophobic ceramic spray barrier across all vehicle windows and windshields.",
      },
    ],
    coatings: {
      title: "Advanced Coating Treatments",
      tag: "Permanent Shield",
      description:
        "Ultimate exterior surface protection with high molecular hardness against scratches, road grime, and harsh UV rays.",
      pricingLabel: "Contact us for pricing",
      options: [
        "Ceramic Coatings",
        "Graphene Coatings",
        "Nano Coatings",
      ],
      perks: [
        "Free Ceramic Coating top up after 2 months",
        "6 Months Warranty*",
      ],
      maintenanceNote: "* Maintenance wash must be done by carvibes.lk",
    },
  },

  suv: {
    id: "suv",
    label: "SUV",
    badge: "Compact / Mid-Size SUV / Crossover",
    subtitle: "Crossovers, mid-size SUVs, and compact 4x4 vehicles",
    maintenanceNote: "* Maintenance wash must be done by carvibes.lk",
    packages: [
      {
        id: "basic-vibe-suv",
        name: "Basic Vibe",
        category: "Essential Clean",
        originalPrice: 2500,
        price: 2000,
        duration: "1 – 2 hrs",
        description:
          "Fast-turnaround essential cleaning to keep your daily drive fresh, spotless, and dust-free.",
        features: [
          "Exterior Quick Wash",
          "Interior Vacuum Cleaning",
          "Interior Wipe Down",
        ],
      },
      {
        id: "refresh-vibe-suv",
        name: "Refresh Vibe",
        category: "Deep Revitalization",
        originalPrice: 13000,
        price: 9900,
        duration: "4 – 6 hrs",
        isPopular: true,
        badge: "Most Comprehensive",
        description:
          "Comprehensive exterior and interior treatment designed to strip contaminants and condition high-wear surfaces.",
        features: [
          "2-Step Decontamination Wash",
          "Exterior Detail",
          "Interior Detail (Seats In)",
          "Engine Degrease",
          "Protective Body Wax",
          "Plastic Parts Conditioning",
          "Leather Conditioning",
        ],
        freeBonus: "1 Free Decontamination Wash within 2 months",
        warranty: "6 Months Warranty* on Plastic & Leather Conditioner",
        maintenanceNote: "* Maintenance wash must be done by carvibes.lk",
      },
      {
        id: "premium-vibe-suv",
        name: "Premium Vibe",
        category: "Complete Transformation",
        originalPrice: 19000,
        price: 17900,
        duration: "1 Day",
        description:
          "Our signature, high-intensity showroom package featuring intensive steam sanitation and complete engine care.",
        features: [
          "2-Step Decontamination Wash",
          "Exterior Detail",
          "Interior Detail (Seats Out Deep Cleaning)",
          "Interior Steam Clean & Sanitization",
          "Engine Degrease with Steam Cleaning & Foam",
          "Plastic Parts Conditioning",
        ],
        freeBonus: "1 Free Decontamination Wash within 2 months",
        warranty: "6 Months Warranty* on Plastic & Leather Conditioner",
        ceramicBonus: "Free Ceramic Coating top up after 2 months (6 Months Warranty*)",
        maintenanceNote: "* Maintenance wash must be done by carvibes.lk",
      },
    ],
    addOns: [
      {
        id: "ceramic-car-shampoo-suv",
        name: "Ceramic Car Shampoo",
        tag: "Maintenance Wash",
        price: 4900,
        description:
          "pH-neutral, SiO2-infused ceramic wash shampoo for superior lubricity, intense gloss, and hydrophobic self-cleaning protection.",
      },
      {
        id: "cut-and-polish-suv",
        name: "Cut & Polish",
        tag: "Paint Correction",
        price: 16900,
        description:
          "Multi-stage machine paint correction to eliminate swirl marks, light scratches, and oxidation for a mirror-like showroom gloss.",
      },
      {
        id: "windscreen-ceramic-suv",
        name: "Windscreen Spot Removal & Ceramic Spray Coating",
        tag: "Glass Protection",
        price: 8900,
        perk: "Free Wurth Windscreen Washer Fluid included",
        description:
          "Specialized mineral water spot extraction from the front windshield paired with hydrophobic ceramic spray seal for high rainy-drive clarity.",
      },
      {
        id: "all-glass-ceramic-suv",
        name: "All Glass Spot Removal & Ceramic Spray Coating",
        tag: "Full Visibility",
        price: 11900,
        description:
          "Complete 360° water spot mineral removal and hydrophobic ceramic spray barrier across all vehicle windows and windshields.",
      },
    ],
    coatings: {
      title: "Advanced Coating Treatments",
      tag: "Permanent Shield",
      description:
        "Ultimate exterior surface protection with high molecular hardness against scratches, road grime, and harsh UV rays.",
      pricingLabel: "Contact us for pricing",
      options: [
        "Ceramic Coatings",
        "Graphene Coatings",
        "Nano Coatings",
      ],
      perks: [
        "Free Ceramic Coating top up after 2 months",
        "6 Months Warranty*",
      ],
      maintenanceNote: "* Maintenance wash must be done by carvibes.lk",
    },
  },

  van: {
    id: "van",
    label: "Van",
    badge: "Van / MPV / Full-Size SUV",
    subtitle: "Vans, passenger MPVs, and large three-row vehicles",
    maintenanceNote: "* Maintenance wash must be done by carvibes.lk",
    packages: [
      {
        id: "basic-vibe-van",
        name: "Basic Vibe",
        category: "Essential Clean",
        originalPrice: 2500,
        price: 2000,
        duration: "1 – 2 hrs",
        description:
          "Fast-turnaround essential cleaning to keep your daily drive fresh, spotless, and dust-free.",
        features: [
          "Exterior Quick Wash",
          "Interior Vacuum Cleaning",
          "Interior Wipe Down",
        ],
      },
      {
        id: "refresh-vibe-van",
        name: "Refresh Vibe",
        category: "Deep Revitalization",
        originalPrice: 15000,
        price: 11900,
        duration: "4 – 6 hrs",
        isPopular: true,
        badge: "Most Comprehensive",
        description:
          "Comprehensive exterior and interior treatment designed to strip contaminants and condition high-wear surfaces.",
        features: [
          "2-Step Decontamination Wash",
          "Exterior Detail",
          "Interior Detail (Seats In)",
          "Engine Degrease",
          "Protective Body Wax",
          "Plastic Parts Conditioning",
          "Leather Conditioning",
        ],
        freeBonus: "1 Free Decontamination Wash within 2 months",
        warranty: "6 Months Warranty* on Plastic & Leather Conditioner",
        maintenanceNote: "* Maintenance wash must be done by carvibes.lk",
      },
      {
        id: "premium-vibe-van",
        name: "Premium Vibe",
        category: "Complete Transformation",
        originalPrice: 21000,
        price: 19000,
        duration: "1 Day",
        description:
          "Our signature, high-intensity showroom package featuring intensive steam sanitation and complete engine care.",
        features: [
          "2-Step Decontamination Wash",
          "Exterior Detail",
          "Interior Detail (Seats Out Deep Cleaning)",
          "Interior Steam Clean & Sanitization",
          "Engine Degrease with Steam Cleaning & Foam",
          "Plastic Parts Conditioning",
        ],
        freeBonus: "1 Free Decontamination Wash within 2 months",
        warranty: "6 Months Warranty* on Plastic & Leather Conditioner",
        ceramicBonus: "Free Ceramic Coating top up after 2 months (6 Months Warranty*)",
        maintenanceNote: "* Maintenance wash must be done by carvibes.lk",
      },
    ],
    addOns: [
      {
        id: "ceramic-car-shampoo-van",
        name: "Ceramic Car Shampoo",
        tag: "Maintenance Wash",
        price: 4900,
        description:
          "pH-neutral, SiO2-infused ceramic wash shampoo for superior lubricity, intense gloss, and hydrophobic self-cleaning protection.",
      },
      {
        id: "cut-and-polish-van",
        name: "Cut & Polish",
        tag: "Paint Correction",
        price: 18900,
        description:
          "Multi-stage machine paint correction to eliminate swirl marks, light scratches, and oxidation for a mirror-like showroom gloss.",
      },
      {
        id: "windscreen-ceramic-van",
        name: "Windscreen Spot Removal & Ceramic Spray Coating",
        tag: "Glass Protection",
        price: 8900,
        perk: "Free Wurth Windscreen Washer Fluid included",
        description:
          "Specialized mineral water spot extraction from the front windshield paired with hydrophobic ceramic spray seal for high rainy-drive clarity.",
      },
      {
        id: "all-glass-ceramic-van",
        name: "All Glass Spot Removal & Ceramic Spray Coating",
        tag: "Full Visibility",
        price: 13900,
        description:
          "Complete 360° water spot mineral removal and hydrophobic ceramic spray barrier across all vehicle windows and windshields.",
      },
    ],
    coatings: {
      title: "Advanced Coating Treatments",
      tag: "Permanent Shield",
      description:
        "Ultimate exterior surface protection with high molecular hardness against scratches, road grime, and harsh UV rays.",
      pricingLabel: "Contact us for pricing",
      options: [
        "Ceramic Coatings",
        "Graphene Coatings",
        "Nano Coatings",
      ],
      perks: [
        "Free Ceramic Coating top up after 2 months",
        "6 Months Warranty*",
      ],
      maintenanceNote: "* Maintenance wash must be done by carvibes.lk",
    },
  },
};
