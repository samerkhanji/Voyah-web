export type InventoryUnit = {
  id: string;
  modelSlug: string;
  modelName: string;
  trim: string;
  year: number;
  exteriorColor: string;
  interiorColor: string;
  status: "Available" | "In transit" | "Reserved";
  vin: string;
};

export const inventory: InventoryUnit[] = [
  {
    id: "VF-2025-001",
    modelSlug: "free",
    modelName: "Voyah Free",
    trim: "Extended Range AWD",
    year: 2025,
    exteriorColor: "Glacier White",
    interiorColor: "Obsidian Black",
    status: "Available",
    vin: "LXVF1A2B3C4D50001",
  },
  {
    id: "VF-2025-002",
    modelSlug: "free",
    modelName: "Voyah Free",
    trim: "Full Electric AWD",
    year: 2025,
    exteriorColor: "Storm Grey",
    interiorColor: "Saddle Tan",
    status: "In transit",
    vin: "LXVF1A2B3C4D50002",
  },
  {
    id: "VD-2025-014",
    modelSlug: "dream",
    modelName: "Voyah Dream",
    trim: "7-Seat Executive",
    year: 2025,
    exteriorColor: "Champagne Gold",
    interiorColor: "Ivory",
    status: "Available",
    vin: "LXVD1A2B3C4D50014",
  },
  {
    id: "VP-2025-007",
    modelSlug: "passion",
    modelName: "Voyah Passion",
    trim: "Performance RWD",
    year: 2025,
    exteriorColor: "Phantom Black",
    interiorColor: "Carbon Red",
    status: "Reserved",
    vin: "LXVP1A2B3C4D50007",
  },
  {
    id: "VC-2025-022",
    modelSlug: "courage",
    modelName: "Voyah Courage",
    trim: "Long Range",
    year: 2025,
    exteriorColor: "Aurora Blue",
    interiorColor: "Slate Grey",
    status: "Available",
    vin: "LXVC1A2B3C4D50022",
  },
  {
    id: "VC-2025-023",
    modelSlug: "courage",
    modelName: "Voyah Courage",
    trim: "Standard Range",
    year: 2025,
    exteriorColor: "Glacier White",
    interiorColor: "Obsidian Black",
    status: "Available",
    vin: "LXVC1A2B3C4D50023",
  },
];
