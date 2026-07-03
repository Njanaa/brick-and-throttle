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
        "authorName": "George N.",
        "rating": 2,
        "date": "March 17, 2026",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Jose M.",
        "rating": 5,
        "date": "June 11, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Matthew T.",
        "rating": 5,
        "date": "February 2, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Brian C.",
        "rating": 4,
        "date": "July 8, 2026",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Janet W.",
        "rating": 5,
        "date": "April 30, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Angela H.",
        "rating": 5,
        "date": "August 11, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Maria T.",
        "rating": 5,
        "date": "February 23, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Anna V.",
        "rating": 5,
        "date": "May 26, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Brian M.",
        "rating": 5,
        "date": "February 10, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "George Z.",
        "rating": 5,
        "date": "May 27, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Kimberly S.",
        "rating": 4,
        "date": "December 31, 2025",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Joshua G.",
        "rating": 4,
        "date": "January 19, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Joseph G.",
        "rating": 5,
        "date": "December 23, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Betty L.",
        "rating": 5,
        "date": "March 14, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Matthew D.",
        "rating": 5,
        "date": "November 6, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Donna G.",
        "rating": 5,
        "date": "September 6, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Karen N.",
        "rating": 5,
        "date": "July 28, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Janet J.",
        "rating": 5,
        "date": "December 5, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Frank G.",
        "rating": 5,
        "date": "January 28, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Patrick D.",
        "rating": 2,
        "date": "May 25, 2025",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "Helen G.",
        "rating": 5,
        "date": "October 13, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Roger H.",
        "rating": 3,
        "date": "June 28, 2025",
        "text": "The front suspension sags a bit under the weight of the model."
      },
      {
        "authorName": "Patricia S.",
        "rating": 5,
        "date": "July 26, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Ruth D.",
        "rating": 5,
        "date": "June 17, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Betty C.",
        "rating": 5,
        "date": "April 12, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Margaret F.",
        "rating": 5,
        "date": "January 20, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Deborah Z.",
        "rating": 5,
        "date": "April 14, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Gregory F.",
        "rating": 5,
        "date": "April 13, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Roger T.",
        "rating": 4,
        "date": "February 3, 2026",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Peter N.",
        "rating": 5,
        "date": "January 18, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Melissa P.",
        "rating": 4,
        "date": "March 6, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Laura M.",
        "rating": 5,
        "date": "February 10, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Carolyn J.",
        "rating": 5,
        "date": "February 4, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Donna S.",
        "rating": 5,
        "date": "April 24, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Stephen E.",
        "rating": 5,
        "date": "May 12, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Melissa V.",
        "rating": 5,
        "date": "September 6, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Jessica T.",
        "rating": 5,
        "date": "February 25, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
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
        "authorName": "Mark K.",
        "rating": 5,
        "date": "November 13, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Eric V.",
        "rating": 5,
        "date": "July 28, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Ronald N.",
        "rating": 5,
        "date": "August 17, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Cynthia W.",
        "rating": 3,
        "date": "August 10, 2025",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Patricia F.",
        "rating": 5,
        "date": "March 21, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Karen B.",
        "rating": 5,
        "date": "February 5, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Kathleen S.",
        "rating": 5,
        "date": "February 22, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Jessica G.",
        "rating": 4,
        "date": "May 25, 2025",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Kimberly K.",
        "rating": 5,
        "date": "February 7, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Kathleen L.",
        "rating": 5,
        "date": "September 29, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Christopher N.",
        "rating": 5,
        "date": "July 16, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Raymond M.",
        "rating": 4,
        "date": "February 5, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Virginia L.",
        "rating": 5,
        "date": "September 28, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Karen B.",
        "rating": 5,
        "date": "June 15, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Donald T.",
        "rating": 5,
        "date": "May 14, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "John J.",
        "rating": 4,
        "date": "April 27, 2026",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Jessica B.",
        "rating": 5,
        "date": "September 8, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Mark S.",
        "rating": 5,
        "date": "April 1, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Cynthia D.",
        "rating": 4,
        "date": "October 6, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "James T.",
        "rating": 4,
        "date": "October 13, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Martha A.",
        "rating": 2,
        "date": "February 25, 2026",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Ryan N.",
        "rating": 5,
        "date": "August 21, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Christopher B.",
        "rating": 2,
        "date": "July 20, 2025",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating."
      },
      {
        "authorName": "Scott V.",
        "rating": 5,
        "date": "April 13, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Melissa R.",
        "rating": 5,
        "date": "June 28, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Paul S.",
        "rating": 5,
        "date": "February 28, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Barbara G.",
        "rating": 5,
        "date": "November 22, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Sharon N.",
        "rating": 5,
        "date": "July 12, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Kenneth Z.",
        "rating": 5,
        "date": "August 12, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Christine V.",
        "rating": 5,
        "date": "March 19, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Diane R.",
        "rating": 5,
        "date": "January 2, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Paul B.",
        "rating": 5,
        "date": "January 11, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Jessica L.",
        "rating": 5,
        "date": "May 15, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "George B.",
        "rating": 5,
        "date": "March 22, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Helen K.",
        "rating": 5,
        "date": "February 3, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Sandra V.",
        "rating": 5,
        "date": "September 18, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
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
        "authorName": "Jason C.",
        "rating": 5,
        "date": "December 12, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Janet A.",
        "rating": 4,
        "date": "June 29, 2025",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Margaret B.",
        "rating": 4,
        "date": "April 13, 2025",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "William H.",
        "rating": 5,
        "date": "February 27, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Sarah H.",
        "rating": 5,
        "date": "September 24, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Elizabeth R.",
        "rating": 4,
        "date": "June 10, 2025",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Cynthia R.",
        "rating": 5,
        "date": "May 10, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Barbara H.",
        "rating": 5,
        "date": "April 5, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Jessica N.",
        "rating": 5,
        "date": "June 4, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Thomas H.",
        "rating": 5,
        "date": "June 14, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Daniel A.",
        "rating": 2,
        "date": "March 9, 2025",
        "text": "The front suspension sags a bit under the weight of the model."
      },
      {
        "authorName": "Kimberly G.",
        "rating": 5,
        "date": "April 8, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Melissa L.",
        "rating": 4,
        "date": "December 31, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Mary J.",
        "rating": 5,
        "date": "January 25, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Karen J.",
        "rating": 3,
        "date": "November 27, 2025",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "Kimberly E.",
        "rating": 5,
        "date": "November 15, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Jerry F.",
        "rating": 5,
        "date": "May 10, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Nancy C.",
        "rating": 5,
        "date": "February 14, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Nancy S.",
        "rating": 5,
        "date": "October 22, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "William E.",
        "rating": 5,
        "date": "August 7, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Amy L.",
        "rating": 5,
        "date": "October 23, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Robert B.",
        "rating": 5,
        "date": "April 26, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Jeffrey L.",
        "rating": 5,
        "date": "January 15, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "William F.",
        "rating": 5,
        "date": "May 20, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Christine J.",
        "rating": 5,
        "date": "March 12, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Scott L.",
        "rating": 5,
        "date": "November 28, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Angela B.",
        "rating": 5,
        "date": "August 22, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Dennis M.",
        "rating": 3,
        "date": "July 18, 2025",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Patrick P.",
        "rating": 5,
        "date": "December 28, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Michael L.",
        "rating": 5,
        "date": "August 1, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Gary R.",
        "rating": 5,
        "date": "February 23, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Andrew C.",
        "rating": 5,
        "date": "December 5, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Douglas P.",
        "rating": 5,
        "date": "September 12, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Mark J.",
        "rating": 3,
        "date": "October 24, 2025",
        "text": "The front suspension sags a bit under the weight of the model."
      },
      {
        "authorName": "John G.",
        "rating": 5,
        "date": "April 3, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Elizabeth T.",
        "rating": 5,
        "date": "March 19, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Scott R.",
        "rating": 4,
        "date": "July 8, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Stephen C.",
        "rating": 5,
        "date": "July 21, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Jessica P.",
        "rating": 5,
        "date": "June 21, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Brenda B.",
        "rating": 4,
        "date": "April 13, 2026",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Diane H.",
        "rating": 5,
        "date": "January 6, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
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
        "authorName": "Joshua T.",
        "rating": 4,
        "date": "October 10, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Robert K.",
        "rating": 5,
        "date": "June 19, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Michael S.",
        "rating": 2,
        "date": "April 15, 2026",
        "text": "The gearbox is very stiff and sometimes gets stuck."
      },
      {
        "authorName": "Karen T.",
        "rating": 5,
        "date": "January 19, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Scott Z.",
        "rating": 5,
        "date": "July 29, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Angela V.",
        "rating": 5,
        "date": "November 15, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Rebecca R.",
        "rating": 4,
        "date": "July 15, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Jessica E.",
        "rating": 5,
        "date": "July 28, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Edward J.",
        "rating": 4,
        "date": "May 9, 2026",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Robert E.",
        "rating": 5,
        "date": "December 16, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Lisa L.",
        "rating": 5,
        "date": "January 18, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Roger D.",
        "rating": 4,
        "date": "February 8, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Donald K.",
        "rating": 5,
        "date": "August 7, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Edward J.",
        "rating": 5,
        "date": "November 16, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Arthur Z.",
        "rating": 5,
        "date": "December 31, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Matthew T.",
        "rating": 5,
        "date": "June 11, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Donald A.",
        "rating": 5,
        "date": "August 17, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Michael K.",
        "rating": 4,
        "date": "January 28, 2025",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "James L.",
        "rating": 5,
        "date": "April 28, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "James C.",
        "rating": 5,
        "date": "October 26, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Pamela P.",
        "rating": 5,
        "date": "January 11, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Daniel G.",
        "rating": 5,
        "date": "December 31, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Linda B.",
        "rating": 5,
        "date": "January 31, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Maria E.",
        "rating": 5,
        "date": "September 22, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Henry F.",
        "rating": 3,
        "date": "May 13, 2025",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "Andrew K.",
        "rating": 5,
        "date": "May 31, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Catherine P.",
        "rating": 5,
        "date": "March 20, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Anna F.",
        "rating": 5,
        "date": "July 8, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Larry A.",
        "rating": 5,
        "date": "July 30, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Helen H.",
        "rating": 2,
        "date": "May 7, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Raymond M.",
        "rating": 4,
        "date": "September 11, 2025",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Karen Z.",
        "rating": 5,
        "date": "May 18, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Barbara N.",
        "rating": 5,
        "date": "February 7, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Kathleen L.",
        "rating": 5,
        "date": "January 20, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Carl B.",
        "rating": 2,
        "date": "December 7, 2025",
        "text": "Box was completely crushed upon arrival. Luckily the parts inside were fine."
      },
      {
        "authorName": "James E.",
        "rating": 5,
        "date": "March 13, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Scott Z.",
        "rating": 5,
        "date": "June 5, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "David H.",
        "rating": 5,
        "date": "September 18, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Jose N.",
        "rating": 5,
        "date": "August 22, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Kevin L.",
        "rating": 5,
        "date": "March 25, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Barbara J.",
        "rating": 5,
        "date": "April 6, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Walter P.",
        "rating": 5,
        "date": "July 10, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Margaret F.",
        "rating": 5,
        "date": "March 18, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
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
        "authorName": "Shirley D.",
        "rating": 5,
        "date": "June 17, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Betty C.",
        "rating": 5,
        "date": "August 23, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Daniel D.",
        "rating": 3,
        "date": "May 11, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Lisa B.",
        "rating": 5,
        "date": "March 11, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Raymond N.",
        "rating": 5,
        "date": "May 7, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Stephen G.",
        "rating": 4,
        "date": "January 4, 2026",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Brian C.",
        "rating": 5,
        "date": "January 24, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Charles W.",
        "rating": 4,
        "date": "February 2, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Anna W.",
        "rating": 5,
        "date": "March 2, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Sarah C.",
        "rating": 5,
        "date": "May 29, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Jeffrey L.",
        "rating": 5,
        "date": "July 12, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Amanda H.",
        "rating": 5,
        "date": "May 26, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "George H.",
        "rating": 5,
        "date": "May 9, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Maria J.",
        "rating": 2,
        "date": "April 12, 2026",
        "text": "The front suspension sags a bit under the weight of the model."
      },
      {
        "authorName": "Ann V.",
        "rating": 5,
        "date": "February 8, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Barbara M.",
        "rating": 5,
        "date": "July 17, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Edward W.",
        "rating": 4,
        "date": "December 7, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Brenda P.",
        "rating": 5,
        "date": "April 20, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Ruth K.",
        "rating": 4,
        "date": "May 8, 2026",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Joshua V.",
        "rating": 5,
        "date": "October 9, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Jason V.",
        "rating": 5,
        "date": "May 21, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Thomas K.",
        "rating": 5,
        "date": "February 23, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Daniel R.",
        "rating": 5,
        "date": "February 14, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Patrick J.",
        "rating": 5,
        "date": "April 11, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Nancy H.",
        "rating": 5,
        "date": "June 28, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Marie W.",
        "rating": 5,
        "date": "August 3, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Roger M.",
        "rating": 5,
        "date": "June 5, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Margaret D.",
        "rating": 5,
        "date": "January 27, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Michelle W.",
        "rating": 5,
        "date": "January 23, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Betty P.",
        "rating": 5,
        "date": "December 28, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Mary J.",
        "rating": 5,
        "date": "November 1, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Shirley R.",
        "rating": 5,
        "date": "March 28, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Edward P.",
        "rating": 4,
        "date": "February 11, 2026",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Virginia C.",
        "rating": 3,
        "date": "February 13, 2025",
        "text": "The gearbox is very stiff and sometimes gets stuck."
      },
      {
        "authorName": "Amanda G.",
        "rating": 5,
        "date": "April 7, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Stephanie L.",
        "rating": 5,
        "date": "July 4, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Michael B.",
        "rating": 2,
        "date": "November 29, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Susan G.",
        "rating": 5,
        "date": "February 12, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Jessica R.",
        "rating": 4,
        "date": "November 25, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Shirley P.",
        "rating": 5,
        "date": "April 25, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Stephen P.",
        "rating": 5,
        "date": "April 29, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
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
        "authorName": "Jason M.",
        "rating": 4,
        "date": "June 5, 2026",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Sandra D.",
        "rating": 4,
        "date": "November 26, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "George V.",
        "rating": 5,
        "date": "February 8, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Walter H.",
        "rating": 5,
        "date": "January 16, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Ryan L.",
        "rating": 4,
        "date": "November 21, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Steven K.",
        "rating": 5,
        "date": "February 2, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Nancy M.",
        "rating": 2,
        "date": "April 24, 2025",
        "text": "Some pieces were missing from bag 3. They sent replacements but it delayed my build."
      },
      {
        "authorName": "Richard P.",
        "rating": 5,
        "date": "February 6, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Charles N.",
        "rating": 5,
        "date": "April 16, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Stephen Z.",
        "rating": 5,
        "date": "February 9, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Carol N.",
        "rating": 3,
        "date": "October 15, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Joseph T.",
        "rating": 5,
        "date": "March 27, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Nancy N.",
        "rating": 5,
        "date": "September 27, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Karen W.",
        "rating": 5,
        "date": "January 19, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Melissa A.",
        "rating": 5,
        "date": "October 25, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Anna E.",
        "rating": 5,
        "date": "February 19, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Jose D.",
        "rating": 5,
        "date": "April 10, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Dennis P.",
        "rating": 5,
        "date": "August 11, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Jose B.",
        "rating": 5,
        "date": "January 5, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Thomas P.",
        "rating": 3,
        "date": "March 21, 2026",
        "text": "The front suspension sags a bit under the weight of the model."
      },
      {
        "authorName": "Thomas H.",
        "rating": 4,
        "date": "January 26, 2026",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Gary R.",
        "rating": 5,
        "date": "March 21, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Walter G.",
        "rating": 5,
        "date": "May 1, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Raymond Z.",
        "rating": 5,
        "date": "May 24, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Joyce T.",
        "rating": 5,
        "date": "January 6, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Pamela M.",
        "rating": 5,
        "date": "May 26, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Margaret S.",
        "rating": 5,
        "date": "May 11, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Kevin V.",
        "rating": 5,
        "date": "November 8, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Timothy D.",
        "rating": 4,
        "date": "November 8, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Kevin H.",
        "rating": 5,
        "date": "May 18, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Mark G.",
        "rating": 5,
        "date": "July 13, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Jason S.",
        "rating": 5,
        "date": "October 17, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Mary K.",
        "rating": 5,
        "date": "November 13, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Carl F.",
        "rating": 5,
        "date": "September 20, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
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
        "authorName": "Jerry N.",
        "rating": 5,
        "date": "August 1, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Stephanie B.",
        "rating": 2,
        "date": "July 12, 2026",
        "text": "The front suspension sags a bit under the weight of the model."
      },
      {
        "authorName": "Lisa L.",
        "rating": 5,
        "date": "November 5, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Melissa F.",
        "rating": 5,
        "date": "June 7, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Donald E.",
        "rating": 3,
        "date": "December 9, 2025",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Michael W.",
        "rating": 3,
        "date": "July 31, 2026",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Ronald T.",
        "rating": 5,
        "date": "October 6, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "John W.",
        "rating": 5,
        "date": "June 11, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Kathleen S.",
        "rating": 4,
        "date": "February 28, 2026",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "David E.",
        "rating": 5,
        "date": "December 2, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Jerry F.",
        "rating": 5,
        "date": "June 5, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "James H.",
        "rating": 5,
        "date": "August 12, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Arthur E.",
        "rating": 5,
        "date": "July 28, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Debra P.",
        "rating": 5,
        "date": "July 13, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Brenda K.",
        "rating": 5,
        "date": "November 22, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Joseph H.",
        "rating": 5,
        "date": "December 21, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Nancy C.",
        "rating": 5,
        "date": "April 22, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Linda B.",
        "rating": 5,
        "date": "July 5, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Charles E.",
        "rating": 4,
        "date": "December 31, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Kevin H.",
        "rating": 5,
        "date": "July 8, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Melissa A.",
        "rating": 5,
        "date": "February 16, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Arthur W.",
        "rating": 5,
        "date": "November 30, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Donna S.",
        "rating": 5,
        "date": "September 28, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Joseph G.",
        "rating": 5,
        "date": "February 15, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Amy N.",
        "rating": 5,
        "date": "June 15, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Dorothy P.",
        "rating": 5,
        "date": "August 21, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Deborah R.",
        "rating": 4,
        "date": "October 13, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Larry Z.",
        "rating": 5,
        "date": "December 2, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Ann J.",
        "rating": 5,
        "date": "March 4, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Nancy A.",
        "rating": 5,
        "date": "February 24, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Kenneth T.",
        "rating": 4,
        "date": "March 9, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Amanda N.",
        "rating": 5,
        "date": "March 25, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
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
        "authorName": "Pamela D.",
        "rating": 5,
        "date": "January 22, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Margaret L.",
        "rating": 5,
        "date": "February 24, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Mary Z.",
        "rating": 5,
        "date": "July 4, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Stephen V.",
        "rating": 5,
        "date": "July 7, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Anthony W.",
        "rating": 5,
        "date": "February 8, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Anna G.",
        "rating": 5,
        "date": "September 11, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Walter L.",
        "rating": 5,
        "date": "June 27, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Raymond N.",
        "rating": 5,
        "date": "June 1, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Cynthia W.",
        "rating": 5,
        "date": "May 29, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Jessica L.",
        "rating": 4,
        "date": "October 4, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Larry A.",
        "rating": 5,
        "date": "September 24, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Timothy J.",
        "rating": 5,
        "date": "October 10, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Ronald W.",
        "rating": 5,
        "date": "December 1, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Donna C.",
        "rating": 2,
        "date": "January 10, 2025",
        "text": "The gearbox is very stiff and sometimes gets stuck."
      },
      {
        "authorName": "Joshua K.",
        "rating": 5,
        "date": "January 1, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Jessica R.",
        "rating": 5,
        "date": "August 27, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Kenneth E.",
        "rating": 5,
        "date": "July 13, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Maria J.",
        "rating": 5,
        "date": "February 3, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Helen G.",
        "rating": 5,
        "date": "June 21, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Joseph W.",
        "rating": 2,
        "date": "September 25, 2025",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "John F.",
        "rating": 5,
        "date": "October 10, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Timothy W.",
        "rating": 5,
        "date": "May 23, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Anna D.",
        "rating": 4,
        "date": "March 23, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Ryan R.",
        "rating": 5,
        "date": "January 8, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Roger S.",
        "rating": 5,
        "date": "May 11, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Carol V.",
        "rating": 5,
        "date": "July 26, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "David F.",
        "rating": 5,
        "date": "July 16, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Laura C.",
        "rating": 3,
        "date": "May 2, 2026",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Steven P.",
        "rating": 4,
        "date": "January 22, 2026",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Andrew P.",
        "rating": 5,
        "date": "April 21, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Joseph B.",
        "rating": 5,
        "date": "April 3, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Kenneth D.",
        "rating": 4,
        "date": "November 25, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Arthur R.",
        "rating": 5,
        "date": "April 11, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Daniel E.",
        "rating": 5,
        "date": "April 19, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Mary A.",
        "rating": 4,
        "date": "June 23, 2026",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Steven D.",
        "rating": 5,
        "date": "March 27, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Stephen M.",
        "rating": 5,
        "date": "December 13, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Dorothy F.",
        "rating": 4,
        "date": "January 18, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Donald T.",
        "rating": 3,
        "date": "March 7, 2026",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Christopher C.",
        "rating": 5,
        "date": "May 23, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Dennis V.",
        "rating": 5,
        "date": "January 5, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
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
        "authorName": "Cynthia G.",
        "rating": 5,
        "date": "December 11, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Ruth K.",
        "rating": 5,
        "date": "April 27, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Anna C.",
        "rating": 5,
        "date": "March 30, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Douglas Z.",
        "rating": 5,
        "date": "March 18, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Cynthia W.",
        "rating": 5,
        "date": "January 2, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Jason C.",
        "rating": 5,
        "date": "June 28, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Amy V.",
        "rating": 5,
        "date": "June 2, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Kenneth V.",
        "rating": 4,
        "date": "February 16, 2026",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Charles J.",
        "rating": 5,
        "date": "March 10, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Frances G.",
        "rating": 2,
        "date": "January 16, 2026",
        "text": "Some pieces were missing from bag 3. They sent replacements but it delayed my build."
      },
      {
        "authorName": "Melissa L.",
        "rating": 5,
        "date": "July 1, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Jerry L.",
        "rating": 5,
        "date": "June 8, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "John Z.",
        "rating": 5,
        "date": "December 29, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Karen S.",
        "rating": 2,
        "date": "January 22, 2025",
        "text": "Some pieces were missing from bag 3. They sent replacements but it delayed my build."
      },
      {
        "authorName": "Amanda A.",
        "rating": 3,
        "date": "October 3, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Jeffrey G.",
        "rating": 5,
        "date": "May 29, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Michael V.",
        "rating": 5,
        "date": "January 4, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Mark V.",
        "rating": 5,
        "date": "May 19, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Michael J.",
        "rating": 5,
        "date": "January 2, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Lisa E.",
        "rating": 5,
        "date": "April 14, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Amanda V.",
        "rating": 5,
        "date": "June 15, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Douglas M.",
        "rating": 4,
        "date": "January 14, 2026",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Sandra Z.",
        "rating": 5,
        "date": "December 13, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Walter B.",
        "rating": 5,
        "date": "June 30, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Joyce H.",
        "rating": 5,
        "date": "January 3, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Sarah T.",
        "rating": 5,
        "date": "February 5, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Brenda J.",
        "rating": 5,
        "date": "May 18, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Michael M.",
        "rating": 5,
        "date": "January 31, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Ann W.",
        "rating": 5,
        "date": "November 8, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Rebecca K.",
        "rating": 4,
        "date": "June 9, 2025",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Margaret W.",
        "rating": 5,
        "date": "February 21, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Charles N.",
        "rating": 4,
        "date": "December 18, 2025",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Douglas E.",
        "rating": 5,
        "date": "July 10, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Karen V.",
        "rating": 5,
        "date": "March 19, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Janet P.",
        "rating": 4,
        "date": "August 12, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Jennifer L.",
        "rating": 5,
        "date": "May 30, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
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
        "authorName": "Melissa E.",
        "rating": 5,
        "date": "September 28, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Betty C.",
        "rating": 3,
        "date": "February 23, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Douglas W.",
        "rating": 5,
        "date": "May 13, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Edward F.",
        "rating": 4,
        "date": "February 12, 2026",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Cynthia P.",
        "rating": 5,
        "date": "June 29, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Carl J.",
        "rating": 5,
        "date": "May 28, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Virginia F.",
        "rating": 5,
        "date": "June 2, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Brian N.",
        "rating": 5,
        "date": "June 10, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Sarah V.",
        "rating": 5,
        "date": "January 28, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Catherine J.",
        "rating": 5,
        "date": "April 19, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Douglas R.",
        "rating": 5,
        "date": "April 30, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Virginia W.",
        "rating": 5,
        "date": "August 14, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Frank H.",
        "rating": 3,
        "date": "October 2, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Karen S.",
        "rating": 5,
        "date": "November 20, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Linda T.",
        "rating": 5,
        "date": "February 1, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Patricia G.",
        "rating": 4,
        "date": "January 20, 2026",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Andrew C.",
        "rating": 5,
        "date": "February 26, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Ryan R.",
        "rating": 5,
        "date": "May 25, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Timothy D.",
        "rating": 5,
        "date": "July 2, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Daniel L.",
        "rating": 5,
        "date": "April 7, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Patrick V.",
        "rating": 4,
        "date": "December 10, 2025",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Ronald T.",
        "rating": 5,
        "date": "March 11, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Donna Z.",
        "rating": 5,
        "date": "April 17, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Karen N.",
        "rating": 5,
        "date": "July 3, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Steven S.",
        "rating": 5,
        "date": "January 13, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Deborah R.",
        "rating": 3,
        "date": "March 16, 2025",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Karen J.",
        "rating": 5,
        "date": "July 17, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Nancy K.",
        "rating": 5,
        "date": "August 3, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Gary V.",
        "rating": 5,
        "date": "December 10, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Harold P.",
        "rating": 4,
        "date": "May 8, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Daniel E.",
        "rating": 5,
        "date": "January 8, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      }
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
