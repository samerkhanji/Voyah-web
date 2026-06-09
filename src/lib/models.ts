export type Model = {
  slug: string;
  name: string;
  tagline: string;
  bodyStyle: string;
  powertrain: string;
  startingPrice: string;
  rangeKm: number;
  zeroToHundred: string;
  powerHp: number;
  seats: number;
  highlights: string[];
  description: string;
};

export const models: Model[] = [
  {
    slug: "free",
    name: "Voyah Free",
    tagline: "The all-rounder mid-size SUV",
    bodyStyle: "Mid-size SUV",
    powertrain: "EREV / BEV",
    startingPrice: "From $48,900",
    rangeKm: 605,
    zeroToHundred: "4.5s",
    powerHp: 694,
    seats: 5,
    highlights: [
      "Dual-motor intelligent AWD",
      "Extended-range and full-electric options",
      "Air suspension with adaptive damping",
    ],
    description:
      "The Voyah Free blends a spacious five-seat cabin with genuine performance. Choose extended-range for worry-free long trips or the full-electric drivetrain for pure efficiency around town.",
  },
  {
    slug: "dream",
    name: "Voyah Dream",
    tagline: "A first-class lounge on wheels",
    bodyStyle: "Luxury MPV",
    powertrain: "EREV / BEV",
    startingPrice: "From $63,500",
    rangeKm: 580,
    zeroToHundred: "7.9s",
    powerHp: 469,
    seats: 7,
    highlights: [
      "Aviation-grade reclining second row",
      "Dual 12.3-inch displays + rear entertainment",
      "Active noise cancellation cabin",
    ],
    description:
      "Designed for families and executives alike, the Voyah Dream turns every journey into a calm, quiet retreat with its lounge seating, panoramic glass roof, and effortless electric drive.",
  },
  {
    slug: "passion",
    name: "Voyah Passion",
    tagline: "A sculpted electric grand tourer",
    bodyStyle: "Luxury sedan",
    powertrain: "BEV",
    startingPrice: "From $54,200",
    rangeKm: 680,
    zeroToHundred: "4.0s",
    powerHp: 670,
    seats: 5,
    highlights: [
      "800V architecture, fast charging",
      "Rear-wheel steering",
      "Frameless doors and flush handles",
    ],
    description:
      "Low, wide and unmistakably modern, the Voyah Passion pairs a long electric range with sports-car acceleration and a driver-focused cabin wrapped in premium materials.",
  },
  {
    slug: "courage",
    name: "Voyah Courage",
    tagline: "Compact SUV, full-size confidence",
    bodyStyle: "Compact SUV",
    powertrain: "BEV",
    startingPrice: "From $39,900",
    rangeKm: 520,
    zeroToHundred: "6.2s",
    powerHp: 322,
    seats: 5,
    highlights: [
      "Approachable entry into the Voyah range",
      "Level 2 driver assistance suite",
      "Vehicle-to-load (V2L) power output",
    ],
    description:
      "The Voyah Courage makes premium electric mobility accessible. Right-sized for the city yet ready for the weekend, it carries the same design language and technology as its larger siblings.",
  },
];

export function getModel(slug: string): Model | undefined {
  return models.find((m) => m.slug === slug);
}
