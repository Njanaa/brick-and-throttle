export interface Review {
  authorName: string;
  rating: number;
  date: string;
  text: string;
  reviewImage?: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  pieces: number;
  image: string;
  gallery: string[];
  variantId: string;
  badge?: string;
  description: string;
  scale: string;
  dimensions: string;
  features: string[];
  difficulty: "Medium" | "Hard" | "Expert";
  estimatedBuildTime: string;
  manualUrl: string;
  reviews: Review[];
}

export const products: Product[] = [
  {
    id: "porsche-911-rsr",
    name: "Porsche 911 RSR",
    price: "$119.99",
    pieces: 1580,
    image: "/images/porsche-rsr.jpg",
    gallery: [
      "/images/porsche-rsr.jpg",
      "/images/porsche-rsr.jpg",
      "/images/porsche-rsr.jpg",
      "/images/porsche-rsr.jpg"
    ],
    variantId: "51946708861213", // Porsche 911 Black & White
    badge: "BESTSELLER",
    description: "Replicate the pinnacle of endurance racing. This premium kit comes fully loaded with the high-performance RC (Remote Control) motorization package directly in the box. Features functional steering, independent suspension, and a detailed six-cylinder boxer engine linked directly to twin high-torque L-motors.",
    scale: "1:10",
    dimensions: "50cm L x 20cm W x 14cm H",
    features: [
      "INCLUDED: High-speed RC Motorization Upgrade (Battery, 2.4GHz remote controller, L-motors, and servo steering)",
      "Authentic aerodynamic bodywork with rear wing, active diffuser and specially designed side mirrors",
      "Black spoke rims, realistic head and tail lights, and detailed racing decals",
      "Functional independent double-wishbone suspension"
    ],
    difficulty: "Expert",
    estimatedBuildTime: "8 - 10 hours",
    manualUrl: "/manuals/assembly-guide.txt",
    reviews: [
      {
        authorName: "Michael T.",
        rating: 5,
        date: "October 12, 2025",
        text: "Absolutely stunning replica. The RC motors are surprisingly torquey and the steering is very responsive. Took me about 9 hours to complete.",
        reviewImage: "/images/reviews/rev_porsche_1.jpg"
      }
    ]
  },
  {
    id: "gulf-racing-911",
    name: "Gulf Racing 911",
    price: "$99.99",
    pieces: 1250,
    image: "/images/gulf-racing.jpg",
    gallery: [
      "/images/gulf-racing.jpg",
      "/images/gulf-racing.jpg",
      "/images/gulf-racing.jpg",
      "/images/gulf-racing.jpg"
    ],
    variantId: "51946614423837", // Porsche 911 Gulf Blue
    badge: "NEW",
    description: "Celebrate motorsport heritage with the iconic Gulf Oil light blue and orange racing livery. This premium set includes the complete RC remote control motor kit. Features openable doors, custom printed racing elements, low-profile sport tires, and an adjustable rear spoiler.",
    scale: "1:12",
    dimensions: "38cm L x 16cm W x 11cm H",
    features: [
      "INCLUDED: Full 2.4GHz Remote Control package with steering servo, drive motors, and rechargeable smart hub",
      "Officially inspired Gulf Oil light-blue and vibrant-orange racing livery",
      "Openable doors, hood, and rear engine cover",
      "Detailed cockpit with racing bucket seats, roll cage, and steering column"
    ],
    difficulty: "Hard",
    estimatedBuildTime: "6 - 8 hours",
    manualUrl: "/manuals/assembly-guide.txt",
    reviews: [
      {
        authorName: "Jason M.",
        rating: 5,
        date: "September 4, 2025",
        text: "The Gulf livery looks incredible on the shelf. The build process was smooth, instructions were clear, and the final model is sturdy.",
        reviewImage: "/images/reviews/rev_gulf_1.jpg"
      },
      {
        authorName: "David K.",
        rating: 4,
        date: "August 22, 2025",
        text: "Great build! The colors are vibrant. The only issue was the rear spoiler took a bit of adjusting to sit perfectly flat.",
        reviewImage: "/images/reviews/rev_gulf_3.jpg"
      }
    ]
  },
  {
    id: "911-turbo-s",
    name: "911 Turbo S",
    price: "$144.99",
    pieces: 1890,
    image: "/images/turbo-s.jpg",
    gallery: [
      "/images/turbo-s.jpg",
      "/images/turbo-s.jpg",
      "/images/turbo-s.jpg",
      "/images/turbo-s.jpg"
    ],
    variantId: "51946704568605", // Cyber Porsche 911
    badge: "SPECIAL",
    description: "The ultimate modern street supercar. This sleek black and gold edition of the 911 Turbo S is fully motor-driven with the included high-speed RC power pack. Features complex gear changes, active aerodynamics including a deployable rear wing, and custom metallic rims.",
    scale: "1:8",
    dimensions: "57cm L x 25cm W x 16cm H",
    features: [
      "INCLUDED: High-torque RC Motorization pack with battery box and wireless remote controller",
      "Stunning custom black carbon aesthetic with premium gold rim accents",
      "Active front spoiler and motorized active rear wing",
      "Working 4-speed sequential gearbox with paddle shifters in the cabin"
    ],
    difficulty: "Expert",
    estimatedBuildTime: "12 - 15 hours",
    manualUrl: "/manuals/assembly-guide.txt",
    reviews: [
      {
        authorName: "Alex R.",
        rating: 5,
        date: "November 2, 2025",
        text: "The gold accents on this black body are gorgeous. The gearbox is complex but works flawlessly if you take your time.",
        reviewImage: "/images/reviews/rev_porsche_1.jpg"
      }
    ]
  },
  {
    id: "cyber-v12-silver",
    name: "Cyber V12 (Silver)",
    price: "$144.99",
    pieces: 2100,
    image: "/images/cyber-v12.jpg",
    gallery: [
      "/images/cyber-v12.jpg",
      "/images/cyber-v12.jpg",
      "/images/cyber-v12.jpg",
      "/images/cyber-v12.jpg"
    ],
    variantId: "51946624123165", // Cyber Lamborghini V12 Starry Sky
    badge: "FUTURISTIC",
    description: "A vision of future street performance. This futuristic Cyber V12 hypercar comes complete with the high-speed RC control kit. Features a metallic silver body accented by glowing neon cyan trim, pneumatically opening vertical scissor doors, and full mechanical suspension.",
    scale: "1:8",
    dimensions: "58cm L x 26cm W x 15cm H",
    features: [
      "INCLUDED: Integrated RC Motorization Hub & Controller set",
      "Metallic silver brick structure with glowing cyber-cyan detailing",
      "Piston-driven V12 replica engine situated under rear glass cover",
      "Pneumatically opening vertical scissor doors"
    ],
    difficulty: "Expert",
    estimatedBuildTime: "14 - 16 hours",
    manualUrl: "/manuals/assembly-guide.txt",
    reviews: [
      {
        authorName: "Chris B.",
        rating: 5,
        date: "January 14, 2026",
        text: "A truly massive set! The cyber details look awesome in low light, and the scissor doors mechanism is very well engineered.",
        reviewImage: "/images/reviews/rev_lambo_2.jpg"
      }
    ]
  },
  {
    id: "cyber-v12-gold",
    name: "Cyber V12 (Gold)",
    price: "$154.99",
    pieces: 2150,
    image: "/images/cyber-v12-gold.jpg",
    gallery: [
      "/images/cyber-v12-gold.jpg",
      "/images/cyber-v12-gold.jpg",
      "/images/cyber-v12-gold.jpg",
      "/images/cyber-v12-gold.jpg"
    ],
    variantId: "51939840688413", // cyber V12 (second variant)
    badge: "LIMITLESS",
    description: "The ultimate luxury hypercar. This exclusive Gold Edition of the Cyber V12 includes the full RC motorization pack. Turns heads with deep chrome gold bricks and glowing neon purple highlights.",
    scale: "1:8",
    dimensions: "58cm L x 26cm W x 15cm H",
    features: [
      "INCLUDED: Complete wireless RC power functions kit in package",
      "Limited edition chrome gold panels matched with neon purple trim accents",
      "Detailed cockpit detailing with working shift paddle and digital gauge display",
      "Exposeable engine block and functional steering"
    ],
    difficulty: "Expert",
    estimatedBuildTime: "14 - 16 hours",
    manualUrl: "/manuals/assembly-guide.txt",
    reviews: [
      {
        authorName: "Sarah J.",
        rating: 5,
        date: "December 5, 2025",
        text: "Bought this for my husband and he loved it. The gold chrome bricks are very high quality, no scratches out of the box."
      }
    ]
  },
  {
    id: "blue-bolide",
    name: "Blue Bolide Hypercar",
    price: "$99.99",
    pieces: 1100,
    image: "/images/blue-bo.jpg",
    gallery: [
      "/images/blue-bo.jpg",
      "/images/blue-bo.jpg",
      "/images/blue-bo.jpg",
      "/images/blue-bo.jpg"
    ],
    variantId: "51946655645981", // Lamborghini Blue Bo Starry Sky
    description: "Unleash track performance with the legendary Blue Bolide hypercar kit, featuring the fully integrated RC motors upgrade pack in the box. Modeled in racing blue and midnight black, this aerodynamic speed machine showcases a W16 engine mock-up and extreme rear wings.",
    scale: "1:12",
    dimensions: "35cm L x 15cm W x 10cm H",
    features: [
      "INCLUDED: High-torque RC Motorization pack with battery box and wireless remote controller",
      "Vibrant French-racing blue and carbon-black contrast blocks",
      "Simulated W16 engine with movable pistons",
      "Signature horseshoe radiator grill and low roof scoop detail"
    ],
    difficulty: "Hard",
    estimatedBuildTime: "5 - 7 hours",
    manualUrl: "/manuals/assembly-guide.txt",
    reviews: [
      {
        authorName: "Tom H.",
        rating: 4,
        date: "February 18, 2026",
        text: "Fun weekend project. The W16 engine is neat, though I wish the doors opened a bit wider. Still a 9/10 for the price.",
        reviewImage: "/images/reviews/rev_bolide_1.jpg"
      }
    ]
  },
  {
    id: "green-bull-hypercar",
    name: "Green Bull Hypercar",
    price: "$119.99",
    pieces: 1720,
    image: "/images/green-bull.jpg",
    gallery: [
      "/images/green-bull.jpg",
      "/images/green-bull.jpg",
      "/images/green-bull.jpg",
      "/images/green-bull.jpg"
    ],
    variantId: "51946674782493", // Lamborghini Green Bull
    badge: "POPULAR",
    description: "The masterpiece of Italian performance. This Green Bull supercar includes the high-speed RC power pack directly in the box. Built in lime green with contrasting gold wheels, it features operational scissor doors and working steering wheel linkages.",
    scale: "1:10",
    dimensions: "49cm L x 22cm W x 13cm H",
    features: [
      "INCLUDED: Remote Control Motor & Receiver kit, ready to run",
      "Iconic lime green body panels with premium gold wheel hub accents",
      "Fully operational scissor doors and adjustable rear stabilizer spoiler",
      "V12 engine block replicas with working piston cylinders"
    ],
    difficulty: "Expert",
    estimatedBuildTime: "10 - 12 hours",
    manualUrl: "/manuals/assembly-guide.txt",
    reviews: [
      {
        authorName: "Mark L.",
        rating: 5,
        date: "March 30, 2026",
        text: "Incredible value compared to the official brand. The lime green color is super vibrant and the suspension is surprisingly bouncy.",
        reviewImage: "/images/reviews/rev_lambo_1.jpg"
      }
    ]
  },
  {
    id: "black-warrior-v12",
    name: "Black Warrior V12",
    price: "$119.99",
    pieces: 1850,
    image: "/images/black-warrior.jpg",
    gallery: [
      "/images/black-warrior.jpg",
      "/images/black-warrior.jpg",
      "/images/black-warrior.jpg",
      "/images/black-warrior.jpg"
    ],
    variantId: "51946665443613", // Lamborghini Black Warrior V12
    description: "The dark knight of hypercars. Styled in custom matte black with neon red edge lights, this V12 supercar features a complex sequential gearbox, working steering column, and comes fully motorized with the included RC smart hub kit.",
    scale: "1:10",
    dimensions: "50cm L x 22cm W x 12cm H",
    features: [
      "INCLUDED: Complete 2.4GHz RC motorization kit directly in the box",
      "Stunning matte black construction with glowing neon red chassis lines",
      "Working multi-speed mechanical gearbox shifter inside cabin",
      "Opening engine cover reveals fully detailed V12 cylinders"
    ],
    difficulty: "Expert",
    estimatedBuildTime: "11 - 13 hours",
    manualUrl: "/manuals/assembly-guide.txt",
    reviews: [
      {
        authorName: "Kevin P.",
        rating: 5,
        date: "April 12, 2026",
        text: "The matte black finish looks incredibly stealthy. It's huge when completed. RC features are a nice bonus.",
        reviewImage: "/images/reviews/rev_lambo_2.jpg"
      }
    ]
  },
  {
    id: "pink-bull-edition",
    name: "Pink Bull Edition",
    price: "$119.99",
    pieces: 1650,
    image: "/images/pink-bull.jpg",
    gallery: [
      "/images/pink-bull.jpg",
      "/images/pink-bull.jpg",
      "/images/pink-bull.jpg",
      "/images/pink-bull.jpg"
    ],
    variantId: "51946701717789", // Lamboghini Sakura Pink
    description: "Make a statement with the Pink Bull edition supercar. Re-designed in hot gloss pink with neon detailing, this model brings unique aesthetics combined with the included RC motor and receiver system.",
    scale: "1:10",
    dimensions: "48cm L x 21cm W x 13cm H",
    features: [
      "INCLUDED: Full RC steering and drive motor kit, battery box and controller",
      "Vibrant high-gloss pink panels combined with custom black alloy wheels",
      "Functional steering and openable scissor doors",
      "Detailed interior with customizable dashboard parts"
    ],
    difficulty: "Hard",
    estimatedBuildTime: "9 - 11 hours",
    manualUrl: "/manuals/assembly-guide.txt",
    reviews: [
      {
        authorName: "Emily W.",
        rating: 4,
        date: "May 5, 2026",
        text: "Love the unique color! The build was slightly repetitive around the chassis, but the final bodywork looks stunning."
      }
    ]
  },
  {
    id: "acrylic-display-box",
    name: "Premium Display Case",
    price: "$69.99",
    pieces: 8,
    image: "/images/display-box.jpg",
    gallery: [
      "/images/display-box.jpg",
      "/images/display-box.jpg",
      "/images/display-box.jpg",
      "/images/display-box.jpg"
    ],
    variantId: "51946706305309", // Acrylic Display Cover 1:14 Scale (No Car)
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
    estimatedBuildTime: "15 minutes",
    manualUrl: "/manuals/assembly-guide.txt",
    reviews: [
      {
        authorName: "Robert C.",
        rating: 5,
        date: "June 20, 2026",
        text: "Crystal clear and sturdy. Fits my 1:12 scale models perfectly with room to spare."
      }
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
