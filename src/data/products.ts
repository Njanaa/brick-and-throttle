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
    "id": "porsche-911-rsr",
    "name": "Porsche 911 RSR",
    "price": "$119.99",
    "pieces": 1580,
    "image": "/images/porsche-rsr.jpg",
    "gallery": [
      "/images/porsche-rsr.jpg"
    ],
    "variantId": "51946708861213",
    "badge": "BESTSELLER",
    "description": "Replicate the pinnacle of endurance racing. This premium kit comes fully loaded with the high-performance RC (Remote Control) motorization package directly in the box. Features functional steering, independent suspension, and a detailed six-cylinder boxer engine linked directly to twin high-torque L-motors.",
    "scale": "1:10",
    "dimensions": "50cm L x 20cm W x 14cm H",
    "features": [
      "INCLUDED: High-speed RC Motorization Upgrade (Battery, 2.4GHz remote controller, L-motors, and servo steering)",
      "Authentic aerodynamic bodywork with rear wing, active diffuser and specially designed side mirrors",
      "Black spoke rims, realistic head and tail lights, and detailed racing decals",
      "Functional independent double-wishbone suspension"
    ],
    difficulty: "Expert",
    "estimatedBuildTime": "8 - 10 hours",
    "manualUrl": "/manuals/assembly-guide.txt",
    "reviews": [
      {
        "authorName": "Jerry D.",
        "rating": 4,
        "date": "March 4, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Amy W.",
        "rating": 5,
        "date": "October 12, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Brenda R.",
        "rating": 5,
        "date": "April 29, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Anna V.",
        "rating": 5,
        "date": "May 30, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Sharon H.",
        "rating": 3,
        "date": "July 1, 2026",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Matthew J.",
        "rating": 4,
        "date": "May 31, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Jerry V.",
        "rating": 5,
        "date": "July 29, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Rebecca V.",
        "rating": 5,
        "date": "February 11, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Jason T.",
        "rating": 5,
        "date": "April 2, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Eric K.",
        "rating": 5,
        "date": "November 1, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Margaret G.",
        "rating": 5,
        "date": "February 10, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Joshua S.",
        "rating": 5,
        "date": "May 24, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Dennis N.",
        "rating": 5,
        "date": "November 7, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Debra S.",
        "rating": 5,
        "date": "June 6, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Patricia E.",
        "rating": 5,
        "date": "October 17, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Anthony D.",
        "rating": 5,
        "date": "December 1, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Carol P.",
        "rating": 5,
        "date": "April 28, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Angela B.",
        "rating": 5,
        "date": "December 25, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Sandra F.",
        "rating": 3,
        "date": "April 28, 2026",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Dorothy N.",
        "rating": 4,
        "date": "May 24, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Henry T.",
        "rating": 3,
        "date": "August 29, 2025",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Amanda T.",
        "rating": 4,
        "date": "June 17, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Arthur L.",
        "rating": 5,
        "date": "April 27, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Jeffrey V.",
        "rating": 5,
        "date": "September 6, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "John S.",
        "rating": 5,
        "date": "April 16, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Maria D.",
        "rating": 5,
        "date": "July 31, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Kenneth T.",
        "rating": 2,
        "date": "July 16, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Catherine N.",
        "rating": 5,
        "date": "May 28, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Michael V.",
        "rating": 5,
        "date": "February 16, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "George D.",
        "rating": 5,
        "date": "September 6, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Peter K.",
        "rating": 5,
        "date": "July 25, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Carolyn C.",
        "rating": 5,
        "date": "February 11, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Richard Z.",
        "rating": 4,
        "date": "December 26, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Stephanie W.",
        "rating": 5,
        "date": "November 25, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Amy N.",
        "rating": 5,
        "date": "December 5, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "David R.",
        "rating": 5,
        "date": "July 20, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Ann A.",
        "rating": 5,
        "date": "December 17, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Steven B.",
        "rating": 4,
        "date": "June 10, 2026",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Roger K.",
        "rating": 5,
        "date": "July 20, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Joyce B.",
        "rating": 5,
        "date": "May 31, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      }
    ]
  },
  {
    "id": "gulf-racing-911",
    "name": "Gulf Racing 911",
    "price": "$99.99",
    "pieces": 1250,
    "image": "/images/gulf-racing.jpg",
    "gallery": [
      "/images/gulf-racing.jpg"
    ],
    "variantId": "51946614423837",
    "badge": "NEW",
    "description": "Celebrate motorsport heritage with the iconic Gulf Oil light blue and orange racing livery. This premium set includes the complete RC remote control motor kit. Features openable doors, custom printed racing elements, low-profile sport tires, and an adjustable rear spoiler.",
    "scale": "1:12",
    "dimensions": "38cm L x 16cm W x 11cm H",
    "features": [
      "INCLUDED: Full 2.4GHz Remote Control package with steering servo, drive motors, and rechargeable smart hub",
      "Officially inspired Gulf Oil light-blue and vibrant-orange racing livery",
      "Openable doors, hood, and rear engine cover",
      "Detailed cockpit with racing bucket seats, roll cage, and steering column"
    ],
    difficulty: "Hard",
    "estimatedBuildTime": "6 - 8 hours",
    "manualUrl": "/manuals/assembly-guide.txt",
    "reviews": [
      {
        "authorName": "Amy B.",
        "rating": 2,
        "date": "November 3, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Joseph D.",
        "rating": 3,
        "date": "November 3, 2025",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Dorothy D.",
        "rating": 5,
        "date": "November 10, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Kenneth B.",
        "rating": 5,
        "date": "January 23, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Brian D.",
        "rating": 5,
        "date": "February 8, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Harold E.",
        "rating": 5,
        "date": "November 3, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Carol J.",
        "rating": 5,
        "date": "December 24, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Kenneth E.",
        "rating": 5,
        "date": "September 2, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Donald H.",
        "rating": 5,
        "date": "April 23, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Charles T.",
        "rating": 5,
        "date": "February 6, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Sandra P.",
        "rating": 5,
        "date": "January 2, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Christine N.",
        "rating": 5,
        "date": "June 19, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Stephanie H.",
        "rating": 5,
        "date": "March 26, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Dorothy A.",
        "rating": 4,
        "date": "July 9, 2026",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Virginia F.",
        "rating": 5,
        "date": "March 19, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Christine H.",
        "rating": 5,
        "date": "January 14, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Rebecca D.",
        "rating": 5,
        "date": "May 20, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Anna V.",
        "rating": 5,
        "date": "September 11, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Ryan K.",
        "rating": 5,
        "date": "January 23, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Raymond N.",
        "rating": 5,
        "date": "March 25, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Ryan R.",
        "rating": 5,
        "date": "March 7, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Ann E.",
        "rating": 4,
        "date": "February 15, 2026",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "George N.",
        "rating": 5,
        "date": "February 13, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Sarah S.",
        "rating": 5,
        "date": "April 1, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Jessica C.",
        "rating": 5,
        "date": "September 26, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Gregory G.",
        "rating": 5,
        "date": "January 20, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Laura K.",
        "rating": 2,
        "date": "December 31, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Ruth Z.",
        "rating": 4,
        "date": "March 26, 2026",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Charles Z.",
        "rating": 4,
        "date": "April 10, 2026",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Joyce L.",
        "rating": 5,
        "date": "January 23, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Scott G.",
        "rating": 5,
        "date": "July 23, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Amanda P.",
        "rating": 5,
        "date": "April 6, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Kathleen B.",
        "rating": 5,
        "date": "June 8, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Carolyn C.",
        "rating": 4,
        "date": "July 17, 2025",
        "text": "Looks great, but the doors are a bit stiff to open."
      }
    ]
  },
  {
    "id": "911-turbo-s",
    "name": "911 Turbo S",
    "price": "$144.99",
    "pieces": 1890,
    "image": "/images/turbo-s.jpg",
    "gallery": [
      "/images/turbo-s.jpg"
    ],
    "variantId": "51946704568605",
    "badge": "SPECIAL",
    "description": "The ultimate modern street supercar. This sleek black and gold edition of the 911 Turbo S is fully motor-driven with the included high-speed RC power pack. Features complex gear changes, active aerodynamics including a deployable rear wing, and custom metallic rims.",
    "scale": "1:8",
    "dimensions": "57cm L x 25cm W x 16cm H",
    "features": [
      "INCLUDED: High-torque RC Motorization pack with battery box and wireless remote controller",
      "Stunning custom black carbon aesthetic with premium gold rim accents",
      "Active front spoiler and motorized active rear wing",
      "Working 4-speed sequential gearbox with paddle shifters in the cabin"
    ],
    difficulty: "Expert",
    "estimatedBuildTime": "12 - 15 hours",
    "manualUrl": "/manuals/assembly-guide.txt",
    "reviews": [
      {
        "authorName": "Donna W.",
        "rating": 3,
        "date": "June 10, 2026",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating."
      },
      {
        "authorName": "Karen P.",
        "rating": 5,
        "date": "January 15, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Frank W.",
        "rating": 5,
        "date": "July 11, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Ryan V.",
        "rating": 3,
        "date": "April 30, 2025",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating."
      },
      {
        "authorName": "Virginia A.",
        "rating": 5,
        "date": "May 28, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Jerry K.",
        "rating": 5,
        "date": "May 27, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Douglas T.",
        "rating": 4,
        "date": "July 27, 2026",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Kenneth C.",
        "rating": 5,
        "date": "January 1, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Jerry C.",
        "rating": 5,
        "date": "March 29, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Laura M.",
        "rating": 2,
        "date": "January 27, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Sandra E.",
        "rating": 5,
        "date": "July 26, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Nancy M.",
        "rating": 5,
        "date": "May 3, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Matthew A.",
        "rating": 5,
        "date": "May 30, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "David Z.",
        "rating": 5,
        "date": "February 14, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Anthony F.",
        "rating": 5,
        "date": "November 15, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Kathleen P.",
        "rating": 5,
        "date": "February 4, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Timothy E.",
        "rating": 4,
        "date": "May 5, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Eric S.",
        "rating": 5,
        "date": "July 9, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Michelle D.",
        "rating": 5,
        "date": "February 27, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Virginia R.",
        "rating": 5,
        "date": "May 19, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Ronald V.",
        "rating": 5,
        "date": "March 10, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Janet D.",
        "rating": 4,
        "date": "February 25, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Daniel E.",
        "rating": 5,
        "date": "April 30, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Christine P.",
        "rating": 5,
        "date": "March 23, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Kevin V.",
        "rating": 5,
        "date": "June 11, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Angela A.",
        "rating": 5,
        "date": "February 8, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Deborah J.",
        "rating": 5,
        "date": "May 7, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Patrick S.",
        "rating": 4,
        "date": "April 2, 2026",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Cynthia S.",
        "rating": 5,
        "date": "March 16, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Helen H.",
        "rating": 5,
        "date": "March 16, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Ruth T.",
        "rating": 4,
        "date": "March 22, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Jessica S.",
        "rating": 5,
        "date": "July 3, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Eric Z.",
        "rating": 5,
        "date": "August 10, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Joshua K.",
        "rating": 5,
        "date": "March 3, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Frank M.",
        "rating": 5,
        "date": "March 24, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Dorothy H.",
        "rating": 5,
        "date": "March 29, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Paul S.",
        "rating": 5,
        "date": "April 14, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Michael A.",
        "rating": 5,
        "date": "January 18, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Joshua G.",
        "rating": 5,
        "date": "August 10, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      }
    ]
  },
  {
    "id": "cyber-v12-silver",
    "name": "Cyber V12 (Silver)",
    "price": "$144.99",
    "pieces": 2100,
    "image": "/images/cyber-v12.jpg",
    "gallery": [
      "/images/cyber-v12.jpg"
    ],
    "variantId": "51946624123165",
    "badge": "FUTURISTIC",
    "description": "A vision of future street performance. This futuristic Cyber V12 hypercar comes complete with the high-speed RC control kit. Features a metallic silver body accented by glowing neon cyan trim, pneumatically opening vertical scissor doors, and full mechanical suspension.",
    "scale": "1:8",
    "dimensions": "58cm L x 26cm W x 15cm H",
    "features": [
      "INCLUDED: Integrated RC Motorization Hub & Controller set",
      "Metallic silver brick structure with glowing cyber-cyan detailing",
      "Piston-driven V12 replica engine situated under rear glass cover",
      "Pneumatically opening vertical scissor doors"
    ],
    difficulty: "Expert",
    "estimatedBuildTime": "14 - 16 hours",
    "manualUrl": "/manuals/assembly-guide.txt",
    "reviews": [
      {
        "authorName": "Harold A.",
        "rating": 5,
        "date": "May 23, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Brenda F.",
        "rating": 5,
        "date": "January 5, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Cynthia F.",
        "rating": 5,
        "date": "January 24, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Shirley P.",
        "rating": 3,
        "date": "July 29, 2026",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Robert F.",
        "rating": 5,
        "date": "April 3, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Edward A.",
        "rating": 4,
        "date": "November 28, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Amy L.",
        "rating": 5,
        "date": "January 19, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Melissa D.",
        "rating": 5,
        "date": "January 31, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Kevin B.",
        "rating": 4,
        "date": "May 29, 2026",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Rebecca B.",
        "rating": 5,
        "date": "April 21, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Sharon M.",
        "rating": 4,
        "date": "February 17, 2026",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Roger N.",
        "rating": 5,
        "date": "March 28, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Patrick R.",
        "rating": 5,
        "date": "July 26, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Kenneth S.",
        "rating": 3,
        "date": "March 21, 2025",
        "text": "Some pieces were missing from bag 3. They sent replacements but it delayed my build."
      },
      {
        "authorName": "Robert D.",
        "rating": 5,
        "date": "April 4, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Jerry Z.",
        "rating": 5,
        "date": "March 24, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Nancy Z.",
        "rating": 5,
        "date": "March 10, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Sandra H.",
        "rating": 5,
        "date": "June 19, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Virginia N.",
        "rating": 5,
        "date": "May 29, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Richard T.",
        "rating": 5,
        "date": "March 11, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Marie K.",
        "rating": 5,
        "date": "October 15, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Brian V.",
        "rating": 5,
        "date": "February 6, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Betty R.",
        "rating": 4,
        "date": "August 16, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Harold F.",
        "rating": 5,
        "date": "June 26, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Pamela B.",
        "rating": 5,
        "date": "June 13, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Walter H.",
        "rating": 5,
        "date": "June 6, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "David Z.",
        "rating": 5,
        "date": "May 31, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Amy H.",
        "rating": 2,
        "date": "April 9, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Rebecca A.",
        "rating": 4,
        "date": "October 11, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Michelle P.",
        "rating": 5,
        "date": "November 30, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Ryan V.",
        "rating": 5,
        "date": "December 22, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Sandra V.",
        "rating": 5,
        "date": "June 11, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Andrew S.",
        "rating": 5,
        "date": "May 29, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Catherine D.",
        "rating": 5,
        "date": "November 2, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Frank F.",
        "rating": 5,
        "date": "March 7, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      }
    ]
  },
  {
    "id": "cyber-v12-gold",
    "name": "Cyber V12 (Gold)",
    "price": "$154.99",
    "pieces": 2150,
    "image": "/images/cyber-v12-gold.jpg",
    "gallery": [
      "/images/cyber-v12-gold.jpg"
    ],
    "variantId": "51939840688413",
    "badge": "LIMITLESS",
    "description": "The ultimate luxury hypercar. This exclusive Gold Edition of the Cyber V12 includes the full RC motorization pack. Turns heads with deep chrome gold bricks and glowing neon purple highlights.",
    "scale": "1:8",
    "dimensions": "58cm L x 26cm W x 15cm H",
    "features": [
      "INCLUDED: Complete wireless RC power functions kit in package",
      "Limited edition chrome gold panels matched with neon purple trim accents",
      "Detailed cockpit detailing with working shift paddle and digital gauge display",
      "Exposeable engine block and functional steering"
    ],
    difficulty: "Expert",
    "estimatedBuildTime": "14 - 16 hours",
    "manualUrl": "/manuals/assembly-guide.txt",
    "reviews": [
      {
        "authorName": "Nancy D.",
        "rating": 5,
        "date": "June 18, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Carl J.",
        "rating": 5,
        "date": "February 10, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Donald K.",
        "rating": 5,
        "date": "December 20, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Richard N.",
        "rating": 5,
        "date": "February 6, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Carolyn A.",
        "rating": 5,
        "date": "May 21, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Anna Z.",
        "rating": 3,
        "date": "April 14, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Donna W.",
        "rating": 5,
        "date": "June 17, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Frances P.",
        "rating": 5,
        "date": "April 8, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Martha W.",
        "rating": 5,
        "date": "December 27, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Joshua P.",
        "rating": 2,
        "date": "June 29, 2026",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Brian M.",
        "rating": 5,
        "date": "January 6, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Michelle L.",
        "rating": 5,
        "date": "November 1, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Joyce F.",
        "rating": 5,
        "date": "June 19, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Catherine W.",
        "rating": 3,
        "date": "May 6, 2026",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "Lisa H.",
        "rating": 4,
        "date": "August 16, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Carolyn R.",
        "rating": 5,
        "date": "March 4, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Brenda A.",
        "rating": 5,
        "date": "April 19, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Jason B.",
        "rating": 5,
        "date": "April 11, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Kenneth W.",
        "rating": 5,
        "date": "October 12, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Stephanie S.",
        "rating": 5,
        "date": "February 3, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Mary V.",
        "rating": 5,
        "date": "July 17, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Henry P.",
        "rating": 5,
        "date": "January 29, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Debra R.",
        "rating": 4,
        "date": "September 7, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Andrew J.",
        "rating": 5,
        "date": "October 21, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Thomas J.",
        "rating": 5,
        "date": "April 11, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Dennis F.",
        "rating": 5,
        "date": "November 18, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Patrick A.",
        "rating": 4,
        "date": "October 4, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "James B.",
        "rating": 4,
        "date": "March 16, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Michelle W.",
        "rating": 5,
        "date": "April 1, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Barbara H.",
        "rating": 5,
        "date": "July 9, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Donna R.",
        "rating": 5,
        "date": "July 28, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Peter J.",
        "rating": 5,
        "date": "July 2, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Deborah V.",
        "rating": 4,
        "date": "April 16, 2026",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Henry N.",
        "rating": 5,
        "date": "January 24, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      }
    ]
  },
  {
    "id": "blue-bolide",
    "name": "Blue Bolide Hypercar",
    "price": "$99.99",
    "pieces": 1100,
    "image": "/images/blue-bo.jpg",
    "gallery": [
      "/images/blue-bo.jpg"
    ],
    "variantId": "51946655645981",
    "description": "Unleash track performance with the legendary Blue Bolide hypercar kit, featuring the fully integrated RC motors upgrade pack in the box. Modeled in racing blue and midnight black, this aerodynamic speed machine showcases a W16 engine mock-up and extreme rear wings.",
    "scale": "1:12",
    "dimensions": "35cm L x 15cm W x 10cm H",
    "features": [
      "INCLUDED: High-torque RC Motorization pack with battery box and wireless remote controller",
      "Vibrant French-racing blue and carbon-black contrast blocks",
      "Simulated W16 engine with movable pistons",
      "Signature horseshoe radiator grill and low roof scoop detail"
    ],
    difficulty: "Hard",
    "estimatedBuildTime": "5 - 7 hours",
    "manualUrl": "/manuals/assembly-guide.txt",
    "reviews": [
      {
        "authorName": "Jose W.",
        "rating": 4,
        "date": "June 10, 2026",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Brenda W.",
        "rating": 5,
        "date": "July 18, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Robert E.",
        "rating": 5,
        "date": "November 30, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Cynthia H.",
        "rating": 2,
        "date": "October 20, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Carolyn G.",
        "rating": 5,
        "date": "January 9, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Andrew D.",
        "rating": 5,
        "date": "April 12, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Donald Z.",
        "rating": 5,
        "date": "February 10, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Helen Z.",
        "rating": 5,
        "date": "July 16, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Gregory Z.",
        "rating": 5,
        "date": "March 25, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "John W.",
        "rating": 5,
        "date": "May 11, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Charles E.",
        "rating": 5,
        "date": "April 19, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Virginia W.",
        "rating": 2,
        "date": "November 5, 2025",
        "text": "The gearbox is very stiff and sometimes gets stuck."
      },
      {
        "authorName": "Linda K.",
        "rating": 5,
        "date": "April 25, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Stephen T.",
        "rating": 5,
        "date": "June 16, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Donna Z.",
        "rating": 5,
        "date": "February 20, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Frances W.",
        "rating": 5,
        "date": "May 2, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Mark B.",
        "rating": 5,
        "date": "February 9, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Timothy N.",
        "rating": 5,
        "date": "January 26, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Brian M.",
        "rating": 5,
        "date": "August 7, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Richard H.",
        "rating": 5,
        "date": "August 5, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Linda Z.",
        "rating": 5,
        "date": "May 10, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Anna T.",
        "rating": 5,
        "date": "June 22, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Patricia W.",
        "rating": 4,
        "date": "September 27, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Sandra S.",
        "rating": 5,
        "date": "October 14, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Frances T.",
        "rating": 5,
        "date": "August 2, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Angela P.",
        "rating": 5,
        "date": "November 21, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Virginia K.",
        "rating": 5,
        "date": "April 16, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Catherine W.",
        "rating": 2,
        "date": "November 17, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Laura S.",
        "rating": 5,
        "date": "April 19, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Debra E.",
        "rating": 3,
        "date": "October 27, 2025",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Brenda F.",
        "rating": 4,
        "date": "July 5, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Barbara N.",
        "rating": 5,
        "date": "November 3, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Richard H.",
        "rating": 5,
        "date": "May 3, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Timothy J.",
        "rating": 5,
        "date": "September 11, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Virginia L.",
        "rating": 5,
        "date": "August 8, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Larry V.",
        "rating": 5,
        "date": "July 9, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Angela N.",
        "rating": 5,
        "date": "June 26, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Donna L.",
        "rating": 5,
        "date": "June 15, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Donna J.",
        "rating": 5,
        "date": "April 23, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Ryan M.",
        "rating": 4,
        "date": "April 29, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Larry P.",
        "rating": 4,
        "date": "February 28, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Betty D.",
        "rating": 4,
        "date": "November 1, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Marie B.",
        "rating": 5,
        "date": "October 9, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      }
    ]
  },
  {
    "id": "green-bull-hypercar",
    "name": "Green Bull Hypercar",
    "price": "$119.99",
    "pieces": 1720,
    "image": "/images/green-bull.jpg",
    "gallery": [
      "/images/green-bull.jpg"
    ],
    "variantId": "51946674782493",
    "badge": "POPULAR",
    "description": "The masterpiece of Italian performance. This Green Bull supercar includes the high-speed RC power pack directly in the box. Built in lime green with contrasting gold wheels, it features operational scissor doors and working steering wheel linkages.",
    "scale": "1:10",
    "dimensions": "49cm L x 22cm W x 13cm H",
    "features": [
      "INCLUDED: Remote Control Motor & Receiver kit, ready to run",
      "Iconic lime green body panels with premium gold wheel hub accents",
      "Fully operational scissor doors and adjustable rear stabilizer spoiler",
      "V12 engine block replicas with working piston cylinders"
    ],
    difficulty: "Expert",
    "estimatedBuildTime": "10 - 12 hours",
    "manualUrl": "/manuals/assembly-guide.txt",
    "reviews": [
      {
        "authorName": "Jeffrey R.",
        "rating": 4,
        "date": "January 6, 2026",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Raymond C.",
        "rating": 4,
        "date": "April 27, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Marie L.",
        "rating": 3,
        "date": "March 20, 2025",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating."
      },
      {
        "authorName": "Lisa R.",
        "rating": 4,
        "date": "January 3, 2026",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Walter W.",
        "rating": 5,
        "date": "August 27, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Harold J.",
        "rating": 5,
        "date": "April 4, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Michael S.",
        "rating": 5,
        "date": "January 21, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Daniel K.",
        "rating": 5,
        "date": "March 11, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Martha D.",
        "rating": 5,
        "date": "September 14, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Dennis F.",
        "rating": 5,
        "date": "June 6, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Peter V.",
        "rating": 5,
        "date": "July 26, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Michael L.",
        "rating": 3,
        "date": "June 11, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Kenneth D.",
        "rating": 5,
        "date": "February 8, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Patricia H.",
        "rating": 5,
        "date": "July 14, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Elizabeth G.",
        "rating": 5,
        "date": "July 14, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Susan G.",
        "rating": 4,
        "date": "August 30, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Jerry K.",
        "rating": 5,
        "date": "January 25, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Timothy A.",
        "rating": 5,
        "date": "April 19, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "James S.",
        "rating": 5,
        "date": "March 23, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Scott D.",
        "rating": 5,
        "date": "February 8, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Thomas J.",
        "rating": 5,
        "date": "March 11, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Brenda S.",
        "rating": 5,
        "date": "March 10, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Dorothy K.",
        "rating": 5,
        "date": "August 10, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Kimberly F.",
        "rating": 5,
        "date": "September 25, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Raymond T.",
        "rating": 5,
        "date": "January 15, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Joseph E.",
        "rating": 5,
        "date": "May 25, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Nancy M.",
        "rating": 2,
        "date": "May 10, 2026",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Frank N.",
        "rating": 5,
        "date": "July 22, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Amanda C.",
        "rating": 5,
        "date": "March 30, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Margaret T.",
        "rating": 5,
        "date": "September 11, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Edward L.",
        "rating": 5,
        "date": "May 10, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      }
    ]
  },
  {
    "id": "black-warrior-v12",
    "name": "Black Warrior V12",
    "price": "$119.99",
    "pieces": 1850,
    "image": "/images/black-warrior.jpg",
    "gallery": [
      "/images/black-warrior.jpg"
    ],
    "variantId": "51946665443613",
    "description": "The dark knight of hypercars. Styled in custom matte black with neon red edge lights, this V12 supercar features a complex sequential gearbox, working steering column, and comes fully motorized with the included RC smart hub kit.",
    "scale": "1:10",
    "dimensions": "50cm L x 22cm W x 12cm H",
    "features": [
      "INCLUDED: Complete 2.4GHz RC motorization kit directly in the box",
      "Stunning matte black construction with glowing neon red chassis lines",
      "Working multi-speed mechanical gearbox shifter inside cabin",
      "Opening engine cover reveals fully detailed V12 cylinders"
    ],
    difficulty: "Expert",
    "estimatedBuildTime": "11 - 13 hours",
    "manualUrl": "/manuals/assembly-guide.txt",
    "reviews": [
      {
        "authorName": "Deborah V.",
        "rating": 4,
        "date": "January 1, 2025",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Jose W.",
        "rating": 5,
        "date": "January 10, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Jerry E.",
        "rating": 5,
        "date": "December 20, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Sharon P.",
        "rating": 2,
        "date": "January 12, 2026",
        "text": "The gearbox is very stiff and sometimes gets stuck."
      },
      {
        "authorName": "Sandra H.",
        "rating": 4,
        "date": "September 17, 2025",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Scott L.",
        "rating": 5,
        "date": "March 1, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Arthur A.",
        "rating": 2,
        "date": "July 30, 2026",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating."
      },
      {
        "authorName": "Deborah S.",
        "rating": 5,
        "date": "May 15, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Jessica N.",
        "rating": 5,
        "date": "March 13, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Jerry N.",
        "rating": 4,
        "date": "June 3, 2026",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Ruth V.",
        "rating": 5,
        "date": "January 16, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Betty V.",
        "rating": 5,
        "date": "March 4, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Susan W.",
        "rating": 5,
        "date": "July 2, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Joseph L.",
        "rating": 5,
        "date": "June 27, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Richard D.",
        "rating": 5,
        "date": "December 22, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Rebecca D.",
        "rating": 5,
        "date": "August 6, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Christine R.",
        "rating": 5,
        "date": "May 27, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "James M.",
        "rating": 5,
        "date": "April 4, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Linda Z.",
        "rating": 5,
        "date": "January 25, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Sharon G.",
        "rating": 3,
        "date": "April 21, 2026",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Paul K.",
        "rating": 5,
        "date": "November 26, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Ann D.",
        "rating": 5,
        "date": "March 3, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Edward M.",
        "rating": 4,
        "date": "August 2, 2025",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Shirley M.",
        "rating": 5,
        "date": "September 11, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Mark C.",
        "rating": 5,
        "date": "January 20, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Kathleen G.",
        "rating": 5,
        "date": "January 3, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Rebecca W.",
        "rating": 5,
        "date": "October 16, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "John L.",
        "rating": 5,
        "date": "January 21, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Donna T.",
        "rating": 4,
        "date": "May 6, 2025",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Jennifer D.",
        "rating": 5,
        "date": "June 12, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Diane H.",
        "rating": 5,
        "date": "March 23, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "James L.",
        "rating": 5,
        "date": "May 25, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Jason A.",
        "rating": 5,
        "date": "January 24, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Paul E.",
        "rating": 4,
        "date": "June 13, 2026",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Amanda P.",
        "rating": 5,
        "date": "April 18, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Roger N.",
        "rating": 2,
        "date": "May 15, 2026",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "James G.",
        "rating": 5,
        "date": "April 3, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Angela R.",
        "rating": 5,
        "date": "February 2, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Cynthia L.",
        "rating": 5,
        "date": "April 28, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Steven H.",
        "rating": 5,
        "date": "September 15, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Dorothy H.",
        "rating": 5,
        "date": "May 10, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Janet J.",
        "rating": 5,
        "date": "June 26, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Paul B.",
        "rating": 5,
        "date": "April 6, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Carl G.",
        "rating": 5,
        "date": "November 5, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Brenda W.",
        "rating": 5,
        "date": "January 6, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      }
    ]
  },
  {
    "id": "pink-bull-edition",
    "name": "Pink Bull Edition",
    "price": "$119.99",
    "pieces": 1650,
    "image": "/images/pink-bull.jpg",
    "gallery": [
      "/images/pink-bull.jpg"
    ],
    "variantId": "51946701717789",
    "description": "Make a statement with the Pink Bull edition supercar. Re-designed in hot gloss pink with neon detailing, this model brings unique aesthetics combined with the included RC motor and receiver system.",
    "scale": "1:10",
    "dimensions": "48cm L x 21cm W x 13cm H",
    "features": [
      "INCLUDED: Full RC steering and drive motor kit, battery box and controller",
      "Vibrant high-gloss pink panels combined with custom black alloy wheels",
      "Functional steering and openable scissor doors",
      "Detailed interior with customizable dashboard parts"
    ],
    difficulty: "Hard",
    "estimatedBuildTime": "9 - 11 hours",
    "manualUrl": "/manuals/assembly-guide.txt",
    "reviews": [
      {
        "authorName": "Michelle B.",
        "rating": 5,
        "date": "February 1, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Brenda J.",
        "rating": 5,
        "date": "June 18, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Elizabeth T.",
        "rating": 5,
        "date": "March 26, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Kimberly H.",
        "rating": 5,
        "date": "March 24, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Sandra P.",
        "rating": 5,
        "date": "August 31, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Scott N.",
        "rating": 5,
        "date": "March 9, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Matthew W.",
        "rating": 5,
        "date": "July 27, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Joseph G.",
        "rating": 2,
        "date": "March 7, 2025",
        "text": "Box was completely crushed upon arrival. Luckily the parts inside were fine."
      },
      {
        "authorName": "Debra L.",
        "rating": 2,
        "date": "April 26, 2026",
        "text": "The gearbox is very stiff and sometimes gets stuck."
      },
      {
        "authorName": "Debra S.",
        "rating": 5,
        "date": "April 12, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Angela K.",
        "rating": 5,
        "date": "March 16, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Deborah F.",
        "rating": 4,
        "date": "June 6, 2026",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Brian F.",
        "rating": 5,
        "date": "February 16, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Barbara H.",
        "rating": 5,
        "date": "August 19, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Barbara J.",
        "rating": 5,
        "date": "October 29, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "John E.",
        "rating": 5,
        "date": "July 31, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Stephanie F.",
        "rating": 5,
        "date": "April 30, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Betty H.",
        "rating": 5,
        "date": "March 9, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Virginia H.",
        "rating": 5,
        "date": "July 29, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Susan W.",
        "rating": 3,
        "date": "October 27, 2025",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating."
      },
      {
        "authorName": "Jose W.",
        "rating": 5,
        "date": "April 3, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Margaret T.",
        "rating": 5,
        "date": "April 7, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Stephanie D.",
        "rating": 5,
        "date": "September 18, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Andrew J.",
        "rating": 5,
        "date": "March 7, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Lisa K.",
        "rating": 5,
        "date": "October 30, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Melissa P.",
        "rating": 4,
        "date": "June 20, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Douglas J.",
        "rating": 5,
        "date": "December 20, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Brenda Z.",
        "rating": 5,
        "date": "March 13, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Walter F.",
        "rating": 5,
        "date": "March 6, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Shirley P.",
        "rating": 5,
        "date": "June 4, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Angela Z.",
        "rating": 5,
        "date": "October 31, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Patrick L.",
        "rating": 4,
        "date": "June 10, 2026",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Ann T.",
        "rating": 5,
        "date": "November 11, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Shirley D.",
        "rating": 4,
        "date": "May 31, 2025",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Kathleen W.",
        "rating": 5,
        "date": "April 21, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Dorothy J.",
        "rating": 5,
        "date": "July 30, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Melissa Z.",
        "rating": 4,
        "date": "December 11, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Mark R.",
        "rating": 5,
        "date": "April 18, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Robert E.",
        "rating": 5,
        "date": "January 5, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Jennifer C.",
        "rating": 3,
        "date": "January 7, 2025",
        "text": "The front suspension sags a bit under the weight of the model."
      },
      {
        "authorName": "Kathleen S.",
        "rating": 4,
        "date": "January 12, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Henry D.",
        "rating": 5,
        "date": "March 4, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      }
    ]
  },
  {
    "id": "acrylic-display-box",
    "name": "Premium Display Case",
    "price": "$69.99",
    "pieces": 8,
    "image": "/images/display-box.jpg",
    "gallery": [
      "/images/display-box.jpg"
    ],
    "variantId": "51946706305309",
    "description": "Protect and showcase your hard work. This crystal-clear acrylic display case is dustproof, scratch-resistant, and custom-sized to fit all 1:10 and 1:12 scale supercars in the garage. Heavy-duty black base included.",
    "scale": "N/A",
    "dimensions": "60cm L x 30cm W x 20cm H",
    "features": [
      "High transparency, 3mm thick premium acrylic sheet assembly",
      "Solid 10mm glossy black base for structured mounting",
      "Simple snap-fit locks (no glue or screws required)",
      "Protects models from dust, UV light, and accidental handling"
    ],
    difficulty: "Medium",
    "estimatedBuildTime": "15 minutes",
    "manualUrl": "/manuals/assembly-guide.txt",
    "reviews": [
      {
        "authorName": "Margaret P.",
        "rating": 5,
        "date": "November 8, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Paul W.",
        "rating": 3,
        "date": "June 2, 2026",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Catherine R.",
        "rating": 5,
        "date": "May 26, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Jason A.",
        "rating": 5,
        "date": "April 5, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Jerry T.",
        "rating": 5,
        "date": "March 8, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Elizabeth P.",
        "rating": 5,
        "date": "October 11, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Arthur T.",
        "rating": 4,
        "date": "February 16, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Angela S.",
        "rating": 5,
        "date": "March 4, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Peter N.",
        "rating": 5,
        "date": "October 28, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Scott T.",
        "rating": 5,
        "date": "December 29, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Jennifer J.",
        "rating": 5,
        "date": "July 16, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Maria C.",
        "rating": 5,
        "date": "April 8, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Janet W.",
        "rating": 5,
        "date": "March 2, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Eric F.",
        "rating": 5,
        "date": "December 9, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Mark L.",
        "rating": 4,
        "date": "September 7, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Frances A.",
        "rating": 5,
        "date": "February 24, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Diane B.",
        "rating": 5,
        "date": "April 13, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Harold G.",
        "rating": 4,
        "date": "June 4, 2026",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Michelle G.",
        "rating": 5,
        "date": "January 14, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Eric H.",
        "rating": 5,
        "date": "March 18, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Daniel E.",
        "rating": 5,
        "date": "April 8, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "William L.",
        "rating": 4,
        "date": "March 14, 2026",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Carolyn C.",
        "rating": 5,
        "date": "October 21, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Ann G.",
        "rating": 5,
        "date": "July 30, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Scott E.",
        "rating": 3,
        "date": "October 3, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Kathleen V.",
        "rating": 3,
        "date": "June 29, 2025",
        "text": "Some pieces were missing from bag 3. They sent replacements but it delayed my build."
      },
      {
        "authorName": "Arthur R.",
        "rating": 5,
        "date": "June 25, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "David H.",
        "rating": 5,
        "date": "September 29, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Virginia P.",
        "rating": 5,
        "date": "May 25, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Donna F.",
        "rating": 4,
        "date": "March 4, 2026",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Susan J.",
        "rating": 5,
        "date": "June 14, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Raymond N.",
        "rating": 5,
        "date": "March 11, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Roger J.",
        "rating": 5,
        "date": "May 27, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Maria F.",
        "rating": 5,
        "date": "April 28, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      }
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
