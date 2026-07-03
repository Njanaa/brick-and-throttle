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
        "authorName": "Larry F.",
        "rating": 3,
        "date": "November 6, 2025",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Ronald H.",
        "rating": 5,
        "date": "July 24, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Jennifer K.",
        "rating": 5,
        "date": "December 28, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Matthew D.",
        "rating": 4,
        "date": "September 6, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Matthew P.",
        "rating": 5,
        "date": "December 23, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/low_real_porsche-911-rsr_3.jpg"
      },
      {
        "authorName": "Martha R.",
        "rating": 5,
        "date": "November 4, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/real_porsche-911-rsr_3.jpg"
      },
      {
        "authorName": "Lisa Z.",
        "rating": 5,
        "date": "July 24, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Carol B.",
        "rating": 5,
        "date": "November 8, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/real_porsche-911-rsr_2.jpg"
      },
      {
        "authorName": "Paul H.",
        "rating": 4,
        "date": "April 20, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "George E.",
        "rating": 5,
        "date": "June 3, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Linda L.",
        "rating": 3,
        "date": "June 10, 2026",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "George V.",
        "rating": 5,
        "date": "February 24, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/low_real_porsche-911-rsr_1.jpg"
      },
      {
        "authorName": "Kevin E.",
        "rating": 5,
        "date": "May 25, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Anna J.",
        "rating": 5,
        "date": "March 20, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/real_porsche-911-rsr_1.jpg"
      },
      {
        "authorName": "Henry Z.",
        "rating": 4,
        "date": "October 16, 2025",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Laura K.",
        "rating": 5,
        "date": "April 18, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/low_real_porsche-911-rsr_2.jpg"
      },
      {
        "authorName": "Jeffrey P.",
        "rating": 5,
        "date": "May 25, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Sarah S.",
        "rating": 5,
        "date": "April 9, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Arthur V.",
        "rating": 2,
        "date": "April 7, 2026",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating."
      },
      {
        "authorName": "Joyce F.",
        "rating": 5,
        "date": "March 11, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "John C.",
        "rating": 4,
        "date": "January 15, 2026",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Amanda S.",
        "rating": 5,
        "date": "September 6, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Marie J.",
        "rating": 5,
        "date": "October 26, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Linda M.",
        "rating": 5,
        "date": "March 1, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Kathleen B.",
        "rating": 5,
        "date": "May 21, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Daniel C.",
        "rating": 5,
        "date": "January 15, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "David J.",
        "rating": 5,
        "date": "October 9, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Jennifer N.",
        "rating": 5,
        "date": "February 1, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Debra W.",
        "rating": 4,
        "date": "July 1, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Timothy D.",
        "rating": 5,
        "date": "August 4, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Stephanie F.",
        "rating": 5,
        "date": "August 20, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Diane N.",
        "rating": 5,
        "date": "March 4, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Cynthia A.",
        "rating": 5,
        "date": "March 16, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Nancy B.",
        "rating": 5,
        "date": "January 1, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Maria Z.",
        "rating": 5,
        "date": "June 13, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Patricia A.",
        "rating": 5,
        "date": "December 25, 2025",
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
        "authorName": "George V.",
        "rating": 3,
        "date": "March 13, 2026",
        "text": "The gearbox is very stiff and sometimes gets stuck.",
        "reviewImage": "/images/reviews/real_gulf-racing-911_3.jpg"
      },
      {
        "authorName": "Kathleen K.",
        "rating": 4,
        "date": "October 2, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Walter A.",
        "rating": 5,
        "date": "March 9, 2026",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/real_gulf-racing-911_1.jpg"
      },
      {
        "authorName": "Scott A.",
        "rating": 5,
        "date": "November 12, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Laura W.",
        "rating": 5,
        "date": "April 9, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Jeffrey P.",
        "rating": 4,
        "date": "September 6, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly.",
        "reviewImage": "/images/reviews/low_real_gulf-racing-911_2.jpg"
      },
      {
        "authorName": "Scott S.",
        "rating": 5,
        "date": "July 22, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Jose D.",
        "rating": 5,
        "date": "August 22, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Amy T.",
        "rating": 5,
        "date": "July 7, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Matthew N.",
        "rating": 5,
        "date": "December 30, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Ronald R.",
        "rating": 3,
        "date": "March 21, 2026",
        "text": "Customer service was slow to respond when I asked for a replacement part.",
        "reviewImage": "/images/reviews/real_gulf-racing-911_2.jpg"
      },
      {
        "authorName": "Kimberly M.",
        "rating": 5,
        "date": "January 30, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Charles B.",
        "rating": 5,
        "date": "October 26, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Amy H.",
        "rating": 5,
        "date": "February 16, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Andrew H.",
        "rating": 5,
        "date": "February 3, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Rebecca A.",
        "rating": 5,
        "date": "June 16, 2025",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/low_real_gulf-racing-911_1.jpg"
      },
      {
        "authorName": "Robert C.",
        "rating": 5,
        "date": "March 5, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Nancy L.",
        "rating": 5,
        "date": "May 18, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Karen E.",
        "rating": 5,
        "date": "March 5, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Anna T.",
        "rating": 5,
        "date": "November 14, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/low_real_gulf-racing-911_3.jpg"
      },
      {
        "authorName": "Douglas K.",
        "rating": 5,
        "date": "June 1, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Linda Z.",
        "rating": 5,
        "date": "June 2, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Frank E.",
        "rating": 4,
        "date": "February 11, 2026",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Jason G.",
        "rating": 5,
        "date": "February 17, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Patricia A.",
        "rating": 2,
        "date": "October 23, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Patrick D.",
        "rating": 4,
        "date": "February 24, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Henry K.",
        "rating": 5,
        "date": "May 30, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Henry R.",
        "rating": 5,
        "date": "April 17, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Jennifer F.",
        "rating": 5,
        "date": "January 9, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Rebecca W.",
        "rating": 5,
        "date": "February 22, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Edward S.",
        "rating": 5,
        "date": "February 12, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
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
        "authorName": "Anna E.",
        "rating": 5,
        "date": "May 6, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Betty P.",
        "rating": 5,
        "date": "January 7, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Andrew M.",
        "rating": 4,
        "date": "December 19, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in.",
        "reviewImage": "/images/reviews/low_real_911-turbo-s_2.jpg"
      },
      {
        "authorName": "Steven G.",
        "rating": 5,
        "date": "March 19, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Jennifer H.",
        "rating": 5,
        "date": "June 10, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Michelle P.",
        "rating": 4,
        "date": "February 3, 2025",
        "text": "Good set, but a bit repetitive during the chassis assembly.",
        "reviewImage": "/images/reviews/low_real_911-turbo-s_3.jpg"
      },
      {
        "authorName": "Kenneth V.",
        "rating": 2,
        "date": "September 28, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Jason F.",
        "rating": 5,
        "date": "February 6, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Shirley P.",
        "rating": 5,
        "date": "October 28, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Virginia V.",
        "rating": 5,
        "date": "October 20, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/low_real_911-turbo-s_1.jpg"
      },
      {
        "authorName": "Ryan T.",
        "rating": 4,
        "date": "May 24, 2026",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "George E.",
        "rating": 5,
        "date": "April 3, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Andrew K.",
        "rating": 5,
        "date": "May 30, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/real_911-turbo-s_1.jpg"
      },
      {
        "authorName": "Martha R.",
        "rating": 5,
        "date": "March 22, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/real_911-turbo-s_2.jpg"
      },
      {
        "authorName": "Charles P.",
        "rating": 4,
        "date": "September 1, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly.",
        "reviewImage": "/images/reviews/real_911-turbo-s_3.jpg"
      },
      {
        "authorName": "Barbara G.",
        "rating": 5,
        "date": "May 14, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Gregory H.",
        "rating": 5,
        "date": "June 24, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Scott M.",
        "rating": 5,
        "date": "June 18, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "George W.",
        "rating": 5,
        "date": "March 29, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Jason S.",
        "rating": 4,
        "date": "December 24, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Joyce T.",
        "rating": 5,
        "date": "August 24, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Daniel E.",
        "rating": 5,
        "date": "September 28, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Susan Z.",
        "rating": 5,
        "date": "September 18, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Maria T.",
        "rating": 5,
        "date": "March 23, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Karen G.",
        "rating": 5,
        "date": "May 25, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Jerry H.",
        "rating": 2,
        "date": "December 15, 2025",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "Susan V.",
        "rating": 5,
        "date": "July 2, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Diane B.",
        "rating": 5,
        "date": "July 5, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Christopher K.",
        "rating": 5,
        "date": "June 28, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Virginia K.",
        "rating": 2,
        "date": "December 16, 2025",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Christine K.",
        "rating": 5,
        "date": "September 8, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Nancy L.",
        "rating": 5,
        "date": "April 19, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Betty A.",
        "rating": 5,
        "date": "January 5, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Mary C.",
        "rating": 5,
        "date": "May 18, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Janet J.",
        "rating": 5,
        "date": "July 25, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
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
        "authorName": "Cynthia B.",
        "rating": 5,
        "date": "July 1, 2026",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/real_cyber-v12-silver_1.jpg"
      },
      {
        "authorName": "Richard J.",
        "rating": 5,
        "date": "July 24, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "John M.",
        "rating": 5,
        "date": "July 13, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Matthew H.",
        "rating": 4,
        "date": "May 27, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Cynthia P.",
        "rating": 2,
        "date": "July 14, 2025",
        "text": "Box was completely crushed upon arrival. Luckily the parts inside were fine."
      },
      {
        "authorName": "Janet T.",
        "rating": 4,
        "date": "February 7, 2026",
        "text": "Good quality bricks, but the stickers were a bit tricky to align.",
        "reviewImage": "/images/reviews/low_real_cyber-v12-silver_3.jpg"
      },
      {
        "authorName": "David M.",
        "rating": 5,
        "date": "June 26, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Robert W.",
        "rating": 5,
        "date": "July 6, 2025",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/real_cyber-v12-silver_2.jpg"
      },
      {
        "authorName": "Ruth R.",
        "rating": 2,
        "date": "July 5, 2026",
        "text": "The RC motor works but it's very loud and squeaky.",
        "reviewImage": "/images/reviews/low_real_cyber-v12-silver_2.jpg"
      },
      {
        "authorName": "Kimberly T.",
        "rating": 2,
        "date": "October 28, 2025",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Kenneth M.",
        "rating": 5,
        "date": "May 30, 2026",
        "text": "Beautiful design. The aero features are a really cool addition.",
        "reviewImage": "/images/reviews/real_cyber-v12-silver_3.jpg"
      },
      {
        "authorName": "Virginia H.",
        "rating": 4,
        "date": "July 27, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly.",
        "reviewImage": "/images/reviews/low_real_cyber-v12-silver_1.jpg"
      },
      {
        "authorName": "Jennifer E.",
        "rating": 5,
        "date": "February 16, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Shirley A.",
        "rating": 5,
        "date": "July 6, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Maria B.",
        "rating": 5,
        "date": "January 3, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Raymond Z.",
        "rating": 5,
        "date": "March 5, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Carl T.",
        "rating": 5,
        "date": "June 16, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Helen L.",
        "rating": 5,
        "date": "May 5, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Virginia D.",
        "rating": 5,
        "date": "May 5, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Donald N.",
        "rating": 5,
        "date": "February 1, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Angela P.",
        "rating": 5,
        "date": "April 28, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Jessica Z.",
        "rating": 4,
        "date": "March 24, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Dorothy D.",
        "rating": 5,
        "date": "May 29, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Richard C.",
        "rating": 5,
        "date": "February 6, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Harold V.",
        "rating": 5,
        "date": "March 2, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Eric T.",
        "rating": 5,
        "date": "December 21, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Arthur H.",
        "rating": 5,
        "date": "April 2, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Marie Z.",
        "rating": 4,
        "date": "September 19, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Shirley C.",
        "rating": 5,
        "date": "May 31, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Jeffrey C.",
        "rating": 5,
        "date": "June 25, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Michelle R.",
        "rating": 5,
        "date": "January 11, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Daniel G.",
        "rating": 5,
        "date": "May 10, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "George M.",
        "rating": 5,
        "date": "January 10, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Stephanie Z.",
        "rating": 5,
        "date": "December 7, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Sarah W.",
        "rating": 5,
        "date": "October 22, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
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
        "authorName": "Sandra B.",
        "rating": 5,
        "date": "April 9, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/real_cyber-v12-gold_3.jpg"
      },
      {
        "authorName": "Michelle T.",
        "rating": 5,
        "date": "July 6, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Sharon W.",
        "rating": 4,
        "date": "February 15, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual.",
        "reviewImage": "/images/reviews/low_real_cyber-v12-gold_3.jpg"
      },
      {
        "authorName": "Stephen W.",
        "rating": 3,
        "date": "April 15, 2026",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Amy F.",
        "rating": 3,
        "date": "December 4, 2025",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Christopher R.",
        "rating": 5,
        "date": "June 10, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Jeffrey J.",
        "rating": 5,
        "date": "November 12, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/real_cyber-v12-gold_1.jpg"
      },
      {
        "authorName": "Donna N.",
        "rating": 5,
        "date": "July 27, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/low_real_cyber-v12-gold_2.jpg"
      },
      {
        "authorName": "Carl S.",
        "rating": 5,
        "date": "November 22, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/real_cyber-v12-gold_2.jpg"
      },
      {
        "authorName": "Gregory Z.",
        "rating": 5,
        "date": "August 27, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Debra T.",
        "rating": 5,
        "date": "August 25, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Jeffrey N.",
        "rating": 5,
        "date": "November 17, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Rebecca M.",
        "rating": 5,
        "date": "December 20, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast.",
        "reviewImage": "/images/reviews/low_real_cyber-v12-gold_1.jpg"
      },
      {
        "authorName": "Pamela J.",
        "rating": 3,
        "date": "September 26, 2025",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Kenneth W.",
        "rating": 5,
        "date": "February 1, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Cynthia M.",
        "rating": 5,
        "date": "October 17, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Brian E.",
        "rating": 5,
        "date": "November 1, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Dennis S.",
        "rating": 5,
        "date": "June 19, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Susan V.",
        "rating": 5,
        "date": "December 6, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Janet W.",
        "rating": 5,
        "date": "January 2, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Laura W.",
        "rating": 4,
        "date": "February 6, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Donald M.",
        "rating": 5,
        "date": "August 13, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Donna V.",
        "rating": 4,
        "date": "June 8, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Debra T.",
        "rating": 5,
        "date": "February 24, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Karen N.",
        "rating": 5,
        "date": "December 30, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Anna A.",
        "rating": 5,
        "date": "August 11, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Maria E.",
        "rating": 5,
        "date": "April 22, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Raymond R.",
        "rating": 5,
        "date": "February 27, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Dennis M.",
        "rating": 5,
        "date": "July 28, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Karen N.",
        "rating": 5,
        "date": "January 16, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Virginia J.",
        "rating": 5,
        "date": "June 3, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Amanda T.",
        "rating": 5,
        "date": "February 11, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Carl A.",
        "rating": 4,
        "date": "April 20, 2025",
        "text": "Good set, but a bit repetitive during the chassis assembly."
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
        "authorName": "Nancy N.",
        "rating": 5,
        "date": "August 26, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Margaret M.",
        "rating": 5,
        "date": "October 1, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Christine M.",
        "rating": 5,
        "date": "August 14, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/low_real_blue-bolide_3.jpg"
      },
      {
        "authorName": "Ronald G.",
        "rating": 4,
        "date": "March 30, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Mark W.",
        "rating": 5,
        "date": "January 22, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Dennis J.",
        "rating": 5,
        "date": "July 3, 2026",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/low_real_blue-bolide_2.jpg"
      },
      {
        "authorName": "Cynthia G.",
        "rating": 5,
        "date": "September 11, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Christine P.",
        "rating": 5,
        "date": "February 8, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/low_real_blue-bolide_1.jpg"
      },
      {
        "authorName": "Donna F.",
        "rating": 5,
        "date": "June 6, 2025",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/real_blue-bolide_3.jpg"
      },
      {
        "authorName": "John G.",
        "rating": 5,
        "date": "April 6, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Ruth V.",
        "rating": 5,
        "date": "November 11, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Brenda K.",
        "rating": 5,
        "date": "June 27, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/real_blue-bolide_2.jpg"
      },
      {
        "authorName": "Michael Z.",
        "rating": 5,
        "date": "April 15, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Daniel L.",
        "rating": 5,
        "date": "December 27, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/real_blue-bolide_1.jpg"
      },
      {
        "authorName": "Elizabeth E.",
        "rating": 5,
        "date": "September 5, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Joshua R.",
        "rating": 5,
        "date": "April 18, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Michael P.",
        "rating": 2,
        "date": "May 11, 2026",
        "text": "The front suspension sags a bit under the weight of the model."
      },
      {
        "authorName": "Anna N.",
        "rating": 5,
        "date": "March 27, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Sandra B.",
        "rating": 4,
        "date": "June 7, 2026",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "John S.",
        "rating": 5,
        "date": "May 2, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Daniel C.",
        "rating": 4,
        "date": "May 2, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Lisa A.",
        "rating": 4,
        "date": "June 23, 2026",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Eric M.",
        "rating": 2,
        "date": "January 14, 2025",
        "text": "Some pieces were missing from bag 3. They sent replacements but it delayed my build."
      },
      {
        "authorName": "Laura F.",
        "rating": 5,
        "date": "March 11, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Janet G.",
        "rating": 4,
        "date": "March 30, 2026",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Walter F.",
        "rating": 3,
        "date": "March 21, 2025",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Elizabeth E.",
        "rating": 5,
        "date": "May 15, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Amanda L.",
        "rating": 4,
        "date": "July 14, 2026",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Douglas S.",
        "rating": 5,
        "date": "May 6, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Carolyn Z.",
        "rating": 5,
        "date": "August 1, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Brenda Z.",
        "rating": 5,
        "date": "December 4, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Walter Z.",
        "rating": 5,
        "date": "September 22, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Margaret E.",
        "rating": 5,
        "date": "July 11, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Mary L.",
        "rating": 5,
        "date": "January 6, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Daniel V.",
        "rating": 5,
        "date": "January 19, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Thomas T.",
        "rating": 2,
        "date": "March 10, 2025",
        "text": "Box was completely crushed upon arrival. Luckily the parts inside were fine."
      },
      {
        "authorName": "Matthew N.",
        "rating": 5,
        "date": "March 21, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Harold P.",
        "rating": 5,
        "date": "May 11, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Angela P.",
        "rating": 5,
        "date": "April 24, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Nancy C.",
        "rating": 5,
        "date": "December 9, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Angela W.",
        "rating": 5,
        "date": "June 16, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Douglas G.",
        "rating": 5,
        "date": "March 14, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Helen F.",
        "rating": 5,
        "date": "October 27, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Carol H.",
        "rating": 5,
        "date": "September 26, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
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
        "authorName": "Frank S.",
        "rating": 4,
        "date": "July 30, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Jerry M.",
        "rating": 5,
        "date": "March 21, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Janet J.",
        "rating": 4,
        "date": "March 30, 2025",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Rebecca R.",
        "rating": 5,
        "date": "March 21, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/low_real_green-bull-hypercar_3.jpg"
      },
      {
        "authorName": "Patricia P.",
        "rating": 4,
        "date": "June 5, 2025",
        "text": "Shipping was okay, took about a week and a half.",
        "reviewImage": "/images/reviews/low_real_green-bull-hypercar_2.jpg"
      },
      {
        "authorName": "Sharon R.",
        "rating": 5,
        "date": "June 19, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Cynthia M.",
        "rating": 5,
        "date": "June 20, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/real_green-bull-hypercar_1.jpg"
      },
      {
        "authorName": "Joshua S.",
        "rating": 5,
        "date": "July 23, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/real_green-bull-hypercar_2.jpg"
      },
      {
        "authorName": "George N.",
        "rating": 5,
        "date": "November 30, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/real_green-bull-hypercar_3.jpg"
      },
      {
        "authorName": "Joshua P.",
        "rating": 5,
        "date": "April 23, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "George D.",
        "rating": 5,
        "date": "April 16, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Ruth C.",
        "rating": 5,
        "date": "May 4, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Sharon T.",
        "rating": 5,
        "date": "April 17, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Paul J.",
        "rating": 5,
        "date": "January 18, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "William L.",
        "rating": 2,
        "date": "June 2, 2026",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Joshua L.",
        "rating": 4,
        "date": "November 17, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Walter L.",
        "rating": 5,
        "date": "February 4, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/low_real_green-bull-hypercar_1.jpg"
      },
      {
        "authorName": "Patrick P.",
        "rating": 3,
        "date": "October 17, 2025",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating."
      },
      {
        "authorName": "Larry E.",
        "rating": 5,
        "date": "September 28, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Sarah W.",
        "rating": 5,
        "date": "March 29, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Harold D.",
        "rating": 5,
        "date": "June 11, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Sharon K.",
        "rating": 5,
        "date": "February 4, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Jose B.",
        "rating": 5,
        "date": "July 12, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Jeffrey S.",
        "rating": 2,
        "date": "June 15, 2026",
        "text": "Box was completely crushed upon arrival. Luckily the parts inside were fine."
      },
      {
        "authorName": "Jessica R.",
        "rating": 5,
        "date": "January 31, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Carl Z.",
        "rating": 5,
        "date": "December 20, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Steven D.",
        "rating": 5,
        "date": "April 11, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Kimberly R.",
        "rating": 4,
        "date": "January 20, 2026",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Janet B.",
        "rating": 5,
        "date": "March 13, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Sandra E.",
        "rating": 5,
        "date": "April 9, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Jerry R.",
        "rating": 5,
        "date": "August 18, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Mary D.",
        "rating": 5,
        "date": "August 17, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Janet H.",
        "rating": 5,
        "date": "September 17, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Martha S.",
        "rating": 5,
        "date": "April 30, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Donna J.",
        "rating": 5,
        "date": "July 1, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Lisa W.",
        "rating": 5,
        "date": "March 8, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Mark P.",
        "rating": 5,
        "date": "December 4, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Kathleen K.",
        "rating": 5,
        "date": "April 1, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
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
        "authorName": "Ryan M.",
        "rating": 4,
        "date": "February 3, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Ronald F.",
        "rating": 5,
        "date": "April 15, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Carolyn N.",
        "rating": 5,
        "date": "December 26, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Amanda N.",
        "rating": 5,
        "date": "August 27, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Jason G.",
        "rating": 5,
        "date": "June 20, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/real_black-warrior-v12_3.jpg"
      },
      {
        "authorName": "Helen G.",
        "rating": 3,
        "date": "January 6, 2025",
        "text": "Box was completely crushed upon arrival. Luckily the parts inside were fine.",
        "reviewImage": "/images/reviews/low_real_black-warrior-v12_1.jpg"
      },
      {
        "authorName": "Arthur N.",
        "rating": 3,
        "date": "July 29, 2025",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating.",
        "reviewImage": "/images/reviews/real_black-warrior-v12_1.jpg"
      },
      {
        "authorName": "Richard P.",
        "rating": 5,
        "date": "February 23, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Carol P.",
        "rating": 5,
        "date": "January 11, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Karen H.",
        "rating": 5,
        "date": "May 14, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Robert S.",
        "rating": 4,
        "date": "April 21, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Sarah T.",
        "rating": 5,
        "date": "October 10, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/low_real_black-warrior-v12_3.jpg"
      },
      {
        "authorName": "Joshua H.",
        "rating": 3,
        "date": "July 8, 2026",
        "text": "The gearbox is very stiff and sometimes gets stuck.",
        "reviewImage": "/images/reviews/low_real_black-warrior-v12_2.jpg"
      },
      {
        "authorName": "Edward J.",
        "rating": 5,
        "date": "September 25, 2025",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/real_black-warrior-v12_2.jpg"
      },
      {
        "authorName": "Amanda V.",
        "rating": 5,
        "date": "August 2, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Brenda D.",
        "rating": 4,
        "date": "August 30, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Brenda V.",
        "rating": 5,
        "date": "March 16, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Jennifer W.",
        "rating": 5,
        "date": "May 2, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Cynthia N.",
        "rating": 5,
        "date": "April 18, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Raymond T.",
        "rating": 4,
        "date": "January 21, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Larry E.",
        "rating": 5,
        "date": "July 21, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "William T.",
        "rating": 4,
        "date": "June 2, 2026",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Joshua N.",
        "rating": 5,
        "date": "September 12, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Karen W.",
        "rating": 2,
        "date": "December 20, 2025",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating."
      },
      {
        "authorName": "Susan V.",
        "rating": 5,
        "date": "January 6, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Stephanie N.",
        "rating": 5,
        "date": "March 19, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Elizabeth G.",
        "rating": 5,
        "date": "April 15, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Dorothy S.",
        "rating": 5,
        "date": "March 24, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Eric A.",
        "rating": 5,
        "date": "April 20, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Linda N.",
        "rating": 5,
        "date": "April 26, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Roger W.",
        "rating": 5,
        "date": "June 2, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Edward J.",
        "rating": 5,
        "date": "December 17, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Joseph M.",
        "rating": 5,
        "date": "March 16, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Dorothy C.",
        "rating": 5,
        "date": "February 9, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "John G.",
        "rating": 5,
        "date": "June 19, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Helen V.",
        "rating": 5,
        "date": "April 29, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Sarah G.",
        "rating": 5,
        "date": "May 6, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Anthony C.",
        "rating": 4,
        "date": "July 29, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Jose G.",
        "rating": 5,
        "date": "December 19, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Douglas S.",
        "rating": 5,
        "date": "March 26, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Maria K.",
        "rating": 5,
        "date": "June 12, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
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
        "authorName": "Virginia T.",
        "rating": 4,
        "date": "January 1, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Kathleen A.",
        "rating": 4,
        "date": "May 14, 2026",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Margaret L.",
        "rating": 5,
        "date": "June 27, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Richard W.",
        "rating": 5,
        "date": "April 4, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Brenda V.",
        "rating": 4,
        "date": "April 13, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing.",
        "reviewImage": "/images/reviews/low_real_pink-bull-edition_2.jpg"
      },
      {
        "authorName": "Joshua E.",
        "rating": 5,
        "date": "July 12, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Joseph T.",
        "rating": 2,
        "date": "June 9, 2025",
        "text": "The front suspension sags a bit under the weight of the model."
      },
      {
        "authorName": "Robert W.",
        "rating": 5,
        "date": "July 8, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Ruth V.",
        "rating": 5,
        "date": "August 29, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/real_pink-bull-edition_1.jpg"
      },
      {
        "authorName": "Nancy H.",
        "rating": 5,
        "date": "August 22, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/low_real_pink-bull-edition_3.jpg"
      },
      {
        "authorName": "Peter C.",
        "rating": 5,
        "date": "January 9, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Carol N.",
        "rating": 5,
        "date": "February 10, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Henry H.",
        "rating": 5,
        "date": "September 28, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Michelle D.",
        "rating": 5,
        "date": "July 24, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Susan N.",
        "rating": 5,
        "date": "January 18, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/real_pink-bull-edition_2.jpg"
      },
      {
        "authorName": "Karen C.",
        "rating": 5,
        "date": "July 17, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Brenda L.",
        "rating": 2,
        "date": "July 28, 2025",
        "text": "Box was completely crushed upon arrival. Luckily the parts inside were fine.",
        "reviewImage": "/images/reviews/real_pink-bull-edition_3.jpg"
      },
      {
        "authorName": "Matthew E.",
        "rating": 5,
        "date": "April 21, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Kenneth B.",
        "rating": 5,
        "date": "October 14, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/low_real_pink-bull-edition_1.jpg"
      },
      {
        "authorName": "Sandra G.",
        "rating": 5,
        "date": "May 19, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Pamela B.",
        "rating": 4,
        "date": "April 6, 2026",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Daniel B.",
        "rating": 5,
        "date": "December 27, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Jerry G.",
        "rating": 5,
        "date": "January 31, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "William W.",
        "rating": 5,
        "date": "June 16, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Debra M.",
        "rating": 5,
        "date": "January 3, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "James S.",
        "rating": 5,
        "date": "November 21, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Gary R.",
        "rating": 5,
        "date": "January 3, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Diane F.",
        "rating": 5,
        "date": "January 8, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Gary V.",
        "rating": 5,
        "date": "February 19, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Sandra C.",
        "rating": 5,
        "date": "March 9, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Jose R.",
        "rating": 5,
        "date": "August 6, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Jerry G.",
        "rating": 5,
        "date": "January 1, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Sharon Z.",
        "rating": 5,
        "date": "April 30, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Donald G.",
        "rating": 5,
        "date": "August 25, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Brian H.",
        "rating": 2,
        "date": "April 26, 2025",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Margaret K.",
        "rating": 5,
        "date": "September 11, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Mary L.",
        "rating": 4,
        "date": "December 8, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Donald B.",
        "rating": 5,
        "date": "November 8, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
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
        "authorName": "Walter E.",
        "rating": 2,
        "date": "January 4, 2025",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "Christopher P.",
        "rating": 3,
        "date": "May 19, 2026",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy.",
        "reviewImage": "/images/reviews/real_acrylic-display-box_3.jpg"
      },
      {
        "authorName": "Kenneth G.",
        "rating": 5,
        "date": "April 21, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Helen G.",
        "rating": 5,
        "date": "May 14, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Elizabeth M.",
        "rating": 5,
        "date": "August 15, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/real_acrylic-display-box_1.jpg"
      },
      {
        "authorName": "Rebecca P.",
        "rating": 5,
        "date": "August 16, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Patrick T.",
        "rating": 4,
        "date": "February 2, 2026",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Amy D.",
        "rating": 5,
        "date": "August 7, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Mark W.",
        "rating": 5,
        "date": "January 7, 2026",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/low_real_acrylic-display-box_2.jpg"
      },
      {
        "authorName": "Jeffrey T.",
        "rating": 5,
        "date": "May 20, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Carl S.",
        "rating": 5,
        "date": "June 14, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Jose Z.",
        "rating": 5,
        "date": "July 24, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Thomas W.",
        "rating": 5,
        "date": "March 7, 2026",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/low_real_acrylic-display-box_3.jpg"
      },
      {
        "authorName": "Scott H.",
        "rating": 5,
        "date": "August 27, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "James K.",
        "rating": 5,
        "date": "July 2, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Stephen G.",
        "rating": 5,
        "date": "May 15, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/real_acrylic-display-box_2.jpg"
      },
      {
        "authorName": "Charles R.",
        "rating": 5,
        "date": "January 11, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Charles J.",
        "rating": 5,
        "date": "March 17, 2026",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/low_real_acrylic-display-box_1.jpg"
      },
      {
        "authorName": "Marie Z.",
        "rating": 5,
        "date": "May 15, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Donald J.",
        "rating": 5,
        "date": "December 19, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Christopher L.",
        "rating": 5,
        "date": "November 21, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Amy Z.",
        "rating": 5,
        "date": "May 28, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "James E.",
        "rating": 2,
        "date": "October 29, 2025",
        "text": "Some pieces were missing from bag 3. They sent replacements but it delayed my build."
      },
      {
        "authorName": "Martha K.",
        "rating": 4,
        "date": "May 8, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Carl A.",
        "rating": 5,
        "date": "May 6, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Kimberly W.",
        "rating": 5,
        "date": "July 20, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Thomas L.",
        "rating": 5,
        "date": "January 8, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Brenda L.",
        "rating": 4,
        "date": "March 13, 2026",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Jennifer B.",
        "rating": 4,
        "date": "July 31, 2026",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Roger L.",
        "rating": 5,
        "date": "February 19, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Betty H.",
        "rating": 5,
        "date": "April 5, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Diane M.",
        "rating": 5,
        "date": "September 8, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Joshua B.",
        "rating": 5,
        "date": "April 8, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      }
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
