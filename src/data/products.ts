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
    variantId: "51939840950557", // Porsche 911 · Classic
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
    variantId: "51939839050013", // Porsche 911 · Gulf Blue
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
    variantId: "51939840819485", // Porsche cyber 911
    badge: "SPECIAL",
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
  },
  {
    id: "cyber-v12-silver",
    name: "Cyber V12 (Silver)",
    price: "$289.99",
    pieces: 2100,
    image: "/images/cyber-v12.jpg",
    variantId: "51939839181085", // Cyber V12
    badge: "FUTURISTIC",
    description: "A vision of future street performance. This futuristic Cyber V12 hypercar features a metallic silver body accented by glowing neon cyan trim. Fully equipped with scissor doors, detailed V12 piston engine, and independent steering wheels.",
    scale: "1:8",
    dimensions: "58cm L x 26cm W x 15cm H",
    features: [
      "Metallic silver brick structure with glowing cyber-cyan detailing",
      "Piston-driven V12 replica engine situated under rear glass cover",
      "Pneumatically opening vertical scissor doors",
      "Full mechanical suspension on all 4 corners"
    ],
    difficulty: "Expert",
    estimatedBuildTime: "14 - 16 hours"
  },
  {
    id: "cyber-v12-gold",
    name: "Cyber V12 (Gold)",
    price: "$299.99",
    pieces: 2150,
    image: "/images/cyber-v12-gold.jpg",
    variantId: "51939840688413", // cyber V12 (second variant)
    badge: "LIMITLESS",
    description: "The ultimate luxury hypercar. This exclusive Gold Edition of the Cyber V12 turns heads with deep chrome gold bricks and glowing neon purple highlights. A beautiful design center-piece for custom collectors.",
    scale: "1:8",
    dimensions: "58cm L x 26cm W x 15cm H",
    features: [
      "Limited edition chrome gold panels matched with neon purple trim accents",
      "Detailed cockpit detailing with working shift paddle and digital gauge display",
      "Exposeable engine block and functional steering",
      "Collectible unique model plate included in set"
    ],
    difficulty: "Expert",
    estimatedBuildTime: "14 - 16 hours"
  },
  {
    id: "blue-bolide",
    name: "Blue Bolide Hypercar",
    price: "$189.99",
    pieces: 1100,
    image: "/images/blue-bo.jpg",
    variantId: "51939839508765", // Blue Bo
    description: "Unleash track performance with the legendary Blue Bolide hypercar kit. Modeled in racing blue and midnight black, this aerodynamic speed machine showcases a distinctive roof scoop, W16 engine mock-up, and extreme rear wings.",
    scale: "1:12",
    dimensions: "35cm L x 15cm W x 10cm H",
    features: [
      "Vibrant French-racing blue and carbon-black contrast blocks",
      "Simulated W16 engine with movable pistons",
      "Signature horseshoe radiator grill and low roof scoop detail",
      "Functional steering wheel linked directly to front tires"
    ],
    difficulty: "Hard",
    estimatedBuildTime: "5 - 7 hours"
  },
  {
    id: "green-bull-hypercar",
    name: "Green Bull Hypercar",
    price: "$269.99",
    pieces: 1720,
    image: "/images/green-bull.jpg",
    variantId: "51939840229661", // Lamborghini Green Bull
    badge: "POPULAR",
    description: "The masterpiece of Italian performance. Built in lime green with contrasting gold wheels, this Green Bull supercar replication matches aggressive scissor doors, active rear wings, and working steering wheel linkages.",
    scale: "1:10",
    dimensions: "49cm L x 22cm W x 13cm H",
    features: [
      "Iconic lime green body panels with premium gold wheel hub accents",
      "Fully operational scissor doors and adjustable rear stabilizer spoiler",
      "V12 engine block replicas with working piston cylinders",
      "Full front and rear independent racing suspension"
    ],
    difficulty: "Expert",
    estimatedBuildTime: "10 - 12 hours"
  },
  {
    id: "black-warrior-v12",
    name: "Black Warrior V12",
    price: "$279.99",
    pieces: 1850,
    image: "/images/black-warrior.jpg",
    variantId: "51939839836445", // Black Warior V12
    description: "The dark knight of hypercars. Styled in custom matte black with neon red edge lights, this V12 supercar features a complex sequential gearbox, working steering column, and openable cockpit details.",
    scale: "1:10",
    dimensions: "50cm L x 22cm W x 12cm H",
    features: [
      "Stunning matte black construction with glowing neon red chassis lines",
      "Working multi-speed mechanical gearbox shifter inside cabin",
      "Opening engine cover reveals fully detailed V12 cylinders",
      "Low profile racing tires with custom black spokes"
    ],
    difficulty: "Expert",
    estimatedBuildTime: "11 - 13 hours"
  },
  {
    id: "pink-bull-edition",
    name: "Pink Bull Edition",
    price: "$259.99",
    pieces: 1650,
    image: "/images/pink-bull.jpg",
    variantId: "51939840426269", // Lamborghini Pink
    description: "Make a statement with the Pink Bull edition supercar. Re-designed in hot gloss pink with neon detailing, this model brings unique aesthetics combined with premium supercar mechanical linkages.",
    scale: "1:10",
    dimensions: "48cm L x 21cm W x 13cm H",
    features: [
      "Vibrant high-gloss pink panels combined with custom black alloy wheels",
      "Functional steering and openable scissor doors",
      "Detailed interior with customizable dashboard parts",
      "V12 piston cylinder blocks that turn with wheels"
    ],
    difficulty: "Hard",
    estimatedBuildTime: "9 - 11 hours"
  },
  {
    id: "acrylic-display-box",
    name: "Premium Display Case",
    price: "$49.99",
    pieces: 8,
    image: "/images/display-box.jpg",
    variantId: "51939840852253", // Acrylic Display Box
    description: "Protect and showcase your hard work. This crystal-clear acrylic display case is dustproof, scratch-resistant, and custom-sized to fit all 1:10 and 1:12 scale supercars in the garage. Heavy-duty black base included.",
    scale: "N/A",
    dimensions: "60cm L x 30cm W x 20cm H",
    features: [
      "High transparency, 3mm thick premium acrylic sheet assembly",
      "Solid 10mm glossy black base for structured mounting",
      "Simple snap-fit locks (no glue or screws required)",
      "Protects models from dust, UV light, and accidental handling"
    ],
    difficulty: "Medium",
    estimatedBuildTime: "15 minutes"
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
