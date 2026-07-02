export interface Product {
  id: string;
  name: string;
  price: string;
  pieces: number;
  image: string;
  variantId: string;
  badge?: string;
  description: string;
  scale: string;
  dimensions: string;
  features: string[];
  difficulty: "Medium" | "Hard" | "Expert";
  estimatedBuildTime: string;
}

export const products: Product[] = [
  {
    id: "porsche-911-rsr",
    name: "Porsche 911 RSR",
    price: "$249.99",
    pieces: 1580,
    image: "/images/porsche-rsr.jpg",
    variantId: "51939840950557",
    badge: "BESTSELLER",
    description: "Replicate the pinnacle of endurance racing. This meticulously engineered model captures the aggressive aerodynamics, custom rear wing, and extended rear diffusers of the legendary 911 RSR. Features functional steering, independent suspension, and a detailed six-cylinder boxer engine with moving pistons.",
    scale: "1:10",
    dimensions: "50cm L x 20cm W x 14cm H",
    features: [
      "Authentic aerodynamic bodywork with rear wing, extended diffuser and specially designed side mirrors",
      "Black spoke rims, realistic head and tail lights, and detailed racing decals",
      "Functional independent double-wishbone suspension",
      "A working six-cylinder boxer engine with pistons that move when the car rolls"
    ],
    difficulty: "Expert",
    estimatedBuildTime: "8 - 10 hours"
  },
  {
    id: "gulf-racing-911",
    name: "Gulf Racing 911",
    price: "$199.99",
    pieces: 1250,
    image: "/images/gulf-racing.jpg",
    variantId: "51939839050013",
    badge: "NEW",
    description: "Celebrate motorsport heritage with the iconic Gulf Oil light blue and orange racing livery. This build-and-display model honors decades of endurance dominance with custom printed racing elements, low-profile sport tires, and an adjustable rear spoiler. Compatible with RC upgrades.",
    scale: "1:12",
    dimensions: "38cm L x 16cm W x 11cm H",
    features: [
      "Officially inspired Gulf Oil light-blue and vibrant-orange racing livery",
      "Openable doors, hood, and rear engine cover",
      "Easily upgradable to Remote Control (RC motor kits sold separately)",
      "Detailed cockpit with racing bucket seats, roll cage, and steering column"
    ],
    difficulty: "Hard",
    estimatedBuildTime: "6 - 8 hours"
  },
  {
    id: "911-turbo-s",
    name: "911 Turbo S",
    price: "$279.99",
    pieces: 1890,
    image: "/images/turbo-s.jpg",
    variantId: "51939840819485",
    description: "The ultimate modern street supercar. This sleek black and gold edition of the 911 Turbo S features complex gear changes, active aerodynamics including a deployable rear wing, and custom metallic rims. Designed for the experienced builder seeking premium detail.",
    scale: "1:8",
    dimensions: "57cm L x 25cm W x 16cm H",
    features: [
      "Stunning custom black carbon aesthetic with premium gold rim accents",
      "Active front spoiler and motorized active rear wing",
      "Working 4-speed sequential gearbox with paddle shifters in the cabin",
      "All-wheel drive drivetrain with working front-axle steering"
    ],
    difficulty: "Expert",
    estimatedBuildTime: "12 - 15 hours"
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
