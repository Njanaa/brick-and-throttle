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
      },
      {
        authorName: "Greg P.",
        rating: 5,
        date: "January 8, 2026",
        text: "For the price, you cannot beat this. The clutch mechanism is a bit tight during assembly, but if you follow the manual closely it works perfectly. Highly recommend!"
      },
      {
        authorName: "Samuel H.",
        rating: 4,
        date: "February 22, 2026",
        text: "Great build! I was missing one small black pin, but I had spares from old sets so it wasn't a big deal. Looks amazing on the shelf."
      },
      {
        authorName: "Derek L.",
        rating: 5,
        date: "April 15, 2026",
        text: "The independent suspension works exactly like the real thing. Putting together the boxer engine was extremely satisfying."
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
      },
      {
        authorName: "Andrew B.",
        rating: 5,
        date: "December 11, 2025",
        text: "Honestly better than expected. The orange and blue contrast is spot on. RC motor is decent for indoor driving.",
        reviewImage: "/images/reviews/rev_gulf_2.jpg"
      },
      {
        authorName: "Tim W.",
        rating: 5,
        date: "March 5, 2026",
        text: "Bought this as a gift for my teenage son and he spent the whole weekend building it. He loves the working steering."
      },
      {
        authorName: "Chris N.",
        rating: 4,
        date: "May 19, 2026",
        text: "Awesome set. Box arrived a little dented from shipping but the bags inside were totally fine."
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
      },
      {
        authorName: "Steven C.",
        rating: 5,
        date: "January 28, 2026",
        text: "This is a massive set. Took me almost 15 hours. The active aero wing mechanism is genius."
      },
      {
        authorName: "Marcus G.",
        rating: 4,
        date: "April 3, 2026",
        text: "Loved the build. The instructions are very dense in some steps, so you really have to pay attention to where the pins go. End result is totally worth it."
      },
      {
        authorName: "Jonathan E.",
        rating: 5,
        date: "June 14, 2026",
        text: "The best 1:8 scale car I've built so far. The metallic rims make it pop!"
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
      },
      {
        authorName: "Paul M.",
        rating: 5,
        date: "March 9, 2026",
        text: "My fingers hurt but it was worth every minute. The V12 engine block with moving pistons is incredible to watch when the RC motor runs."
      },
      {
        authorName: "Aaron T.",
        rating: 4,
        date: "April 25, 2026",
        text: "Beautiful display model. The suspension is extremely stiff which makes it great for driving around the living room without sagging."
      },
      {
        authorName: "Leo S.",
        rating: 5,
        date: "July 1, 2026",
        text: "Fast shipping to the US (about 8 days). Everything was organized in numbered bags. Flawless experience."
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
      },
      {
        authorName: "Rich V.",
        rating: 5,
        date: "February 12, 2026",
        text: "Usually gold bricks look cheap but these actually look premium. The neon purple contrasts perfectly."
      },
      {
        authorName: "Nathan P.",
        rating: 4,
        date: "May 8, 2026",
        text: "Incredible model. Was a bit challenging around the rear gearbox assembly, just make sure the gears aren't pressed too tight against each other!"
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
      },
      {
        authorName: "Victor R.",
        rating: 5,
        date: "April 2, 2026",
        text: "The blue color pops beautifully. Fits right in with my other 1:12 scale sets. The RC motor is surprisingly quick!"
      },
      {
        authorName: "Dennis G.",
        rating: 5,
        date: "June 27, 2026",
        text: "Very aerodynamic shape. The build techniques for the front grill were super unique."
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
      },
      {
        authorName: "Jared D.",
        rating: 5,
        date: "May 14, 2026",
        text: "The scissor doors mechanism is addictive to play with. Everything clicks together just like the name brand."
      },
      {
        authorName: "Philip K.",
        rating: 4,
        date: "July 2, 2026",
        text: "Really fun build. Only giving 4 stars because the delivery took about 12 days, but the product itself is flawless."
      },
      {
        authorName: "Ethan B.",
        rating: 5,
        date: "August 11, 2026",
        text: "The gold wheels are a nice touch. RC controls work great out of the box."
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
      },
      {
        authorName: "Justin M.",
        rating: 5,
        date: "June 8, 2026",
        text: "Looks like the Batmobile. The neon red edge lights really make the angles stand out on the shelf."
      },
      {
        authorName: "Bradley W.",
        rating: 4,
        date: "August 20, 2026",
        text: "Some of the black pieces are hard to distinguish in the manual, you need good lighting while building this. But the end result is menacing."
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
      },
      {
        authorName: "Ryan T.",
        rating: 5,
        date: "July 17, 2026",
        text: "Bought this for my girlfriend and we built it together. The pink is very glossy and doesn't look cheap at all."
      },
      {
        authorName: "Amanda S.",
        rating: 5,
        date: "September 1, 2026",
        text: "Finally a supercar in a cute color! The RC motor works great and the wheels roll very smoothly."
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
      },
      {
        authorName: "Dan H.",
        rating: 5,
        date: "July 5, 2026",
        text: "The acrylic is very thick. Snaps together easily. Peeling off the protective film took longer than assembling it!"
      },
      {
        authorName: "Gregory F.",
        rating: 4,
        date: "August 30, 2026",
        text: "Does exactly what it says. Keeps the dust off my kits. Wish they made a slightly taller version for the 1:8 scales though."
      }
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
