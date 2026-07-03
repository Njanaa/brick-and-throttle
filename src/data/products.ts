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
        "authorName": "Maria T.",
        "rating": 5,
        "date": "March 28, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Dennis M.",
        "rating": 4,
        "date": "January 25, 2025",
        "text": "Looks great, but the doors are a bit stiff to open.",
        "reviewImage": "/images/reviews/blur_rev_gulf_3.jpg"
      },
      {
        "authorName": "Timothy Z.",
        "rating": 5,
        "date": "May 22, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/rev_lambo_2.jpg"
      },
      {
        "authorName": "Kenneth Z.",
        "rating": 5,
        "date": "March 1, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Helen W.",
        "rating": 5,
        "date": "May 12, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Donald B.",
        "rating": 5,
        "date": "December 14, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/blur_rev_porsche_1.jpg"
      },
      {
        "authorName": "David G.",
        "rating": 5,
        "date": "March 30, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Joseph B.",
        "rating": 2,
        "date": "May 24, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Virginia J.",
        "rating": 5,
        "date": "October 18, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/low_rev_lambo_1.jpg"
      },
      {
        "authorName": "Gregory M.",
        "rating": 5,
        "date": "February 24, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Ann R.",
        "rating": 5,
        "date": "August 9, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Ruth G.",
        "rating": 5,
        "date": "May 10, 2025",
        "text": "Beautiful design. The aero features are a really cool addition.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
      },
      {
        "authorName": "Jessica C.",
        "rating": 5,
        "date": "January 5, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/blur_rev_lambo_2.jpg"
      },
      {
        "authorName": "Eric J.",
        "rating": 5,
        "date": "February 16, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Laura W.",
        "rating": 5,
        "date": "February 5, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Larry G.",
        "rating": 5,
        "date": "January 10, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "John N.",
        "rating": 5,
        "date": "July 7, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/low_rev_gulf_2.jpg"
      },
      {
        "authorName": "Timothy H.",
        "rating": 5,
        "date": "January 19, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/low_rev_gulf_1.jpg"
      },
      {
        "authorName": "Carolyn T.",
        "rating": 5,
        "date": "March 27, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Jerry S.",
        "rating": 4,
        "date": "June 21, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Raymond R.",
        "rating": 4,
        "date": "November 25, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Roger N.",
        "rating": 5,
        "date": "August 7, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/low_rev_gulf_3.jpg"
      },
      {
        "authorName": "Edward T.",
        "rating": 5,
        "date": "January 11, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Brian W.",
        "rating": 5,
        "date": "May 1, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Raymond P.",
        "rating": 5,
        "date": "January 21, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
      },
      {
        "authorName": "Donald R.",
        "rating": 4,
        "date": "October 25, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Janet A.",
        "rating": 2,
        "date": "June 17, 2025",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Mary C.",
        "rating": 5,
        "date": "July 14, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Jason D.",
        "rating": 5,
        "date": "October 1, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Elizabeth E.",
        "rating": 5,
        "date": "July 1, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Maria E.",
        "rating": 5,
        "date": "June 30, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Joshua A.",
        "rating": 2,
        "date": "August 10, 2025",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "Matthew A.",
        "rating": 4,
        "date": "August 24, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Virginia K.",
        "rating": 5,
        "date": "June 12, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
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
        "authorName": "Betty F.",
        "rating": 5,
        "date": "June 20, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Mark W.",
        "rating": 4,
        "date": "October 30, 2025",
        "text": "Shipping was okay, took about a week and a half.",
        "reviewImage": "/images/reviews/blur_rev_bolide_1.jpg"
      },
      {
        "authorName": "Nancy E.",
        "rating": 3,
        "date": "February 7, 2026",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "Ruth D.",
        "rating": 4,
        "date": "May 15, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Susan F.",
        "rating": 5,
        "date": "July 4, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Donna Z.",
        "rating": 5,
        "date": "March 7, 2026",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/blur_rev_lambo_2.jpg"
      },
      {
        "authorName": "Christine P.",
        "rating": 5,
        "date": "December 17, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Paul S.",
        "rating": 4,
        "date": "February 17, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Brian Z.",
        "rating": 5,
        "date": "June 13, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Shirley B.",
        "rating": 5,
        "date": "May 19, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Nancy S.",
        "rating": 5,
        "date": "February 25, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Anna F.",
        "rating": 5,
        "date": "January 20, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Jessica J.",
        "rating": 5,
        "date": "July 11, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Debra E.",
        "rating": 5,
        "date": "October 17, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Donna P.",
        "rating": 2,
        "date": "January 21, 2025",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Andrew G.",
        "rating": 5,
        "date": "July 29, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/blur_rev_gulf_2.jpg"
      },
      {
        "authorName": "Marie S.",
        "rating": 5,
        "date": "January 10, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/rev_bolide_1.jpg"
      },
      {
        "authorName": "Christopher W.",
        "rating": 5,
        "date": "January 23, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Gregory C.",
        "rating": 5,
        "date": "February 20, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/blur_rev_gulf_3.jpg"
      },
      {
        "authorName": "Jerry J.",
        "rating": 5,
        "date": "June 14, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/low_rev_gulf_2.jpg"
      },
      {
        "authorName": "Jason F.",
        "rating": 5,
        "date": "June 10, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Henry V.",
        "rating": 4,
        "date": "June 15, 2025",
        "text": "Good set, but a bit repetitive during the chassis assembly.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Douglas N.",
        "rating": 5,
        "date": "June 23, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Elizabeth R.",
        "rating": 3,
        "date": "July 19, 2025",
        "text": "The front suspension sags a bit under the weight of the model."
      },
      {
        "authorName": "Gary H.",
        "rating": 5,
        "date": "February 1, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Daniel F.",
        "rating": 5,
        "date": "July 8, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Thomas F.",
        "rating": 5,
        "date": "January 15, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/low_rev_lambo_1.jpg"
      },
      {
        "authorName": "Robert S.",
        "rating": 5,
        "date": "July 21, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/rev_lambo_2.jpg"
      },
      {
        "authorName": "Marie P.",
        "rating": 5,
        "date": "September 29, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Angela P.",
        "rating": 5,
        "date": "April 8, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Brenda L.",
        "rating": 5,
        "date": "October 5, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Catherine V.",
        "rating": 5,
        "date": "March 7, 2025",
        "text": "Beautiful design. The aero features are a really cool addition.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Karen W.",
        "rating": 4,
        "date": "July 5, 2025",
        "text": "Good set, but a bit repetitive during the chassis assembly.",
        "reviewImage": "/images/reviews/rev_gulf_1.jpg"
      },
      {
        "authorName": "Christopher H.",
        "rating": 5,
        "date": "December 2, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
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
        "authorName": "Sandra G.",
        "rating": 2,
        "date": "April 14, 2025",
        "text": "Box was completely crushed upon arrival. Luckily the parts inside were fine.",
        "reviewImage": "/images/reviews/low_rev_lambo_2.jpg"
      },
      {
        "authorName": "Elizabeth W.",
        "rating": 5,
        "date": "August 18, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Kimberly W.",
        "rating": 5,
        "date": "September 30, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Joshua K.",
        "rating": 5,
        "date": "December 25, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast.",
        "reviewImage": "/images/reviews/blur_rev_gulf_3.jpg"
      },
      {
        "authorName": "Timothy F.",
        "rating": 4,
        "date": "August 25, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Helen Z.",
        "rating": 5,
        "date": "January 21, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/low_rev_lambo_1.jpg"
      },
      {
        "authorName": "Larry N.",
        "rating": 4,
        "date": "February 3, 2026",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Kathleen J.",
        "rating": 5,
        "date": "April 14, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Jerry H.",
        "rating": 5,
        "date": "May 6, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Cynthia L.",
        "rating": 5,
        "date": "July 2, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Angela D.",
        "rating": 5,
        "date": "January 21, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Marie C.",
        "rating": 5,
        "date": "September 25, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Amanda B.",
        "rating": 5,
        "date": "October 6, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Jason J.",
        "rating": 5,
        "date": "March 18, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/low_rev_gulf_2.jpg"
      },
      {
        "authorName": "Martha N.",
        "rating": 5,
        "date": "May 22, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/blur_rev_lambo_2.jpg"
      },
      {
        "authorName": "Melissa C.",
        "rating": 5,
        "date": "August 23, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Dorothy B.",
        "rating": 5,
        "date": "January 8, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Diane B.",
        "rating": 5,
        "date": "August 3, 2025",
        "text": "Beautiful design. The aero features are a really cool addition.",
        "reviewImage": "/images/reviews/rev_lambo_1.jpg"
      },
      {
        "authorName": "Raymond L.",
        "rating": 4,
        "date": "March 9, 2026",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Christine C.",
        "rating": 5,
        "date": "July 15, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Kathleen B.",
        "rating": 5,
        "date": "July 14, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Scott R.",
        "rating": 3,
        "date": "February 4, 2025",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Kathleen W.",
        "rating": 5,
        "date": "February 15, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Angela E.",
        "rating": 5,
        "date": "June 4, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Joseph H.",
        "rating": 5,
        "date": "June 1, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Anna V.",
        "rating": 5,
        "date": "March 16, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Robert B.",
        "rating": 5,
        "date": "July 27, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Linda F.",
        "rating": 5,
        "date": "August 15, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Carl M.",
        "rating": 5,
        "date": "October 27, 2025",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Brenda W.",
        "rating": 3,
        "date": "May 25, 2026",
        "text": "Customer service was slow to respond when I asked for a replacement part.",
        "reviewImage": "/images/reviews/blur_rev_bolide_1.jpg"
      },
      {
        "authorName": "Deborah S.",
        "rating": 5,
        "date": "August 3, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/low_rev_bolide_1.jpg"
      },
      {
        "authorName": "Sarah P.",
        "rating": 5,
        "date": "July 19, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Janet L.",
        "rating": 4,
        "date": "February 28, 2025",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Peter F.",
        "rating": 5,
        "date": "March 17, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast.",
        "reviewImage": "/images/reviews/rev_bolide_1.jpg"
      },
      {
        "authorName": "Maria F.",
        "rating": 5,
        "date": "July 13, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Christopher H.",
        "rating": 4,
        "date": "October 27, 2025",
        "text": "Good set, but a bit repetitive during the chassis assembly.",
        "reviewImage": "/images/reviews/rev_gulf_1.jpg"
      },
      {
        "authorName": "Kimberly J.",
        "rating": 2,
        "date": "June 21, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part.",
        "reviewImage": "/images/reviews/blur_rev_gulf_1.jpg"
      },
      {
        "authorName": "Patricia R.",
        "rating": 5,
        "date": "May 16, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Melissa E.",
        "rating": 5,
        "date": "July 7, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/blur_rev_porsche_1.jpg"
      },
      {
        "authorName": "Harold H.",
        "rating": 4,
        "date": "May 5, 2026",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing.",
        "reviewImage": "/images/reviews/blur_rev_gulf_2.jpg"
      },
      {
        "authorName": "Paul E.",
        "rating": 5,
        "date": "January 28, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Barbara R.",
        "rating": 5,
        "date": "March 17, 2026",
        "text": "Beautiful design. The aero features are a really cool addition.",
        "reviewImage": "/images/reviews/low_rev_gulf_3.jpg"
      },
      {
        "authorName": "Raymond G.",
        "rating": 5,
        "date": "October 14, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Ronald M.",
        "rating": 5,
        "date": "April 19, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Marie K.",
        "rating": 5,
        "date": "April 9, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
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
        "authorName": "Ronald P.",
        "rating": 5,
        "date": "May 3, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/blur_rev_gulf_3.jpg"
      },
      {
        "authorName": "Michelle D.",
        "rating": 2,
        "date": "January 13, 2025",
        "text": "I was missing two small technic pins. Had to use spares from my own collection.",
        "reviewImage": "/images/reviews/low_rev_gulf_3.jpg"
      },
      {
        "authorName": "George D.",
        "rating": 2,
        "date": "April 20, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Brenda T.",
        "rating": 5,
        "date": "August 28, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast.",
        "reviewImage": "/images/reviews/blur_rev_porsche_1.jpg"
      },
      {
        "authorName": "Deborah E.",
        "rating": 5,
        "date": "June 11, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/rev_lambo_1.jpg"
      },
      {
        "authorName": "Peter D.",
        "rating": 5,
        "date": "November 8, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Janet T.",
        "rating": 5,
        "date": "April 17, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Cynthia B.",
        "rating": 4,
        "date": "November 23, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented.",
        "reviewImage": "/images/reviews/rev_gulf_3.jpg"
      },
      {
        "authorName": "Edward E.",
        "rating": 5,
        "date": "January 18, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/blur_rev_gulf_2.jpg"
      },
      {
        "authorName": "John A.",
        "rating": 3,
        "date": "March 10, 2026",
        "text": "Box was completely crushed upon arrival. Luckily the parts inside were fine."
      },
      {
        "authorName": "Linda L.",
        "rating": 5,
        "date": "May 14, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Robert T.",
        "rating": 5,
        "date": "May 3, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Anthony P.",
        "rating": 5,
        "date": "August 15, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/low_rev_bolide_1.jpg"
      },
      {
        "authorName": "Timothy N.",
        "rating": 4,
        "date": "June 3, 2025",
        "text": "Looks great, but the doors are a bit stiff to open.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
      },
      {
        "authorName": "Joshua A.",
        "rating": 5,
        "date": "July 20, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Christine W.",
        "rating": 5,
        "date": "August 9, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/rev_gulf_1.jpg"
      },
      {
        "authorName": "Rebecca S.",
        "rating": 5,
        "date": "March 2, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Maria N.",
        "rating": 5,
        "date": "June 5, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/low_rev_lambo_2.jpg"
      },
      {
        "authorName": "Ruth N.",
        "rating": 2,
        "date": "January 10, 2026",
        "text": "The front suspension sags a bit under the weight of the model."
      },
      {
        "authorName": "Frances B.",
        "rating": 5,
        "date": "October 27, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Henry D.",
        "rating": 5,
        "date": "August 1, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Rebecca W.",
        "rating": 5,
        "date": "March 15, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Ryan V.",
        "rating": 5,
        "date": "November 22, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Douglas E.",
        "rating": 5,
        "date": "December 19, 2025",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/low_rev_gulf_2.jpg"
      },
      {
        "authorName": "Patrick N.",
        "rating": 5,
        "date": "June 13, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/rev_bolide_1.jpg"
      },
      {
        "authorName": "Gregory P.",
        "rating": 4,
        "date": "May 20, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Margaret E.",
        "rating": 5,
        "date": "February 23, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Marie M.",
        "rating": 4,
        "date": "November 20, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Betty Z.",
        "rating": 5,
        "date": "August 16, 2025",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/rev_lambo_2.jpg"
      },
      {
        "authorName": "Walter P.",
        "rating": 5,
        "date": "June 1, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Angela T.",
        "rating": 5,
        "date": "September 2, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Cynthia C.",
        "rating": 5,
        "date": "April 14, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Raymond G.",
        "rating": 5,
        "date": "May 6, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "John L.",
        "rating": 5,
        "date": "June 28, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Gary S.",
        "rating": 5,
        "date": "January 29, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Joyce P.",
        "rating": 5,
        "date": "February 23, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Gregory Z.",
        "rating": 4,
        "date": "March 28, 2026",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Margaret A.",
        "rating": 5,
        "date": "January 16, 2025",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/low_rev_lambo_1.jpg"
      },
      {
        "authorName": "Sharon V.",
        "rating": 5,
        "date": "January 12, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Patricia F.",
        "rating": 5,
        "date": "July 26, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/blur_rev_bolide_1.jpg"
      },
      {
        "authorName": "Amy S.",
        "rating": 5,
        "date": "November 16, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/blur_rev_lambo_2.jpg"
      },
      {
        "authorName": "Mary E.",
        "rating": 5,
        "date": "December 6, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast.",
        "reviewImage": "/images/reviews/blur_rev_gulf_1.jpg"
      },
      {
        "authorName": "Thomas T.",
        "rating": 4,
        "date": "September 4, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Raymond P.",
        "rating": 5,
        "date": "June 7, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Angela N.",
        "rating": 5,
        "date": "March 5, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/low_rev_gulf_1.jpg"
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
        "authorName": "Donna E.",
        "rating": 5,
        "date": "April 30, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Ronald D.",
        "rating": 5,
        "date": "April 12, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Helen R.",
        "rating": 2,
        "date": "March 17, 2026",
        "text": "Box was completely crushed upon arrival. Luckily the parts inside were fine.",
        "reviewImage": "/images/reviews/blur_rev_gulf_1.jpg"
      },
      {
        "authorName": "Richard L.",
        "rating": 3,
        "date": "June 22, 2026",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Nancy P.",
        "rating": 5,
        "date": "April 6, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Melissa E.",
        "rating": 5,
        "date": "December 11, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Ronald A.",
        "rating": 2,
        "date": "January 2, 2025",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy.",
        "reviewImage": "/images/reviews/blur_rev_bolide_1.jpg"
      },
      {
        "authorName": "Scott C.",
        "rating": 5,
        "date": "December 26, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/blur_rev_gulf_3.jpg"
      },
      {
        "authorName": "Ruth H.",
        "rating": 5,
        "date": "April 10, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/rev_gulf_3.jpg"
      },
      {
        "authorName": "Angela M.",
        "rating": 4,
        "date": "December 16, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Jose T.",
        "rating": 5,
        "date": "March 1, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/low_rev_gulf_3.jpg"
      },
      {
        "authorName": "Linda M.",
        "rating": 5,
        "date": "September 10, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
      },
      {
        "authorName": "Jessica H.",
        "rating": 5,
        "date": "July 12, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Carol J.",
        "rating": 4,
        "date": "November 10, 2025",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Henry L.",
        "rating": 5,
        "date": "July 7, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "George V.",
        "rating": 5,
        "date": "October 1, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Harold W.",
        "rating": 5,
        "date": "April 20, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Donna H.",
        "rating": 5,
        "date": "July 3, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Pamela P.",
        "rating": 5,
        "date": "November 23, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Barbara H.",
        "rating": 5,
        "date": "March 1, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/low_rev_lambo_2.jpg"
      },
      {
        "authorName": "Sarah E.",
        "rating": 5,
        "date": "May 21, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/rev_bolide_1.jpg"
      },
      {
        "authorName": "David A.",
        "rating": 4,
        "date": "February 25, 2026",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual.",
        "reviewImage": "/images/reviews/blur_rev_gulf_2.jpg"
      },
      {
        "authorName": "Jason F.",
        "rating": 5,
        "date": "June 16, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Charles P.",
        "rating": 5,
        "date": "May 20, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Daniel K.",
        "rating": 4,
        "date": "February 24, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Timothy K.",
        "rating": 5,
        "date": "May 13, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Donald A.",
        "rating": 5,
        "date": "April 24, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/low_rev_gulf_1.jpg"
      },
      {
        "authorName": "Betty D.",
        "rating": 5,
        "date": "August 21, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Cynthia A.",
        "rating": 5,
        "date": "July 29, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/rev_lambo_1.jpg"
      },
      {
        "authorName": "Jennifer D.",
        "rating": 5,
        "date": "August 28, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/blur_rev_lambo_2.jpg"
      },
      {
        "authorName": "Gregory C.",
        "rating": 5,
        "date": "June 10, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Carolyn P.",
        "rating": 5,
        "date": "April 27, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Janet R.",
        "rating": 5,
        "date": "April 10, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
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
        "authorName": "Martha L.",
        "rating": 5,
        "date": "February 22, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/blur_rev_gulf_2.jpg"
      },
      {
        "authorName": "Henry J.",
        "rating": 5,
        "date": "April 30, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Patrick C.",
        "rating": 3,
        "date": "December 5, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Roger E.",
        "rating": 2,
        "date": "May 8, 2025",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Donna F.",
        "rating": 5,
        "date": "July 23, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/low_rev_gulf_3.jpg"
      },
      {
        "authorName": "Richard B.",
        "rating": 5,
        "date": "March 25, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/blur_rev_gulf_3.jpg"
      },
      {
        "authorName": "Ronald B.",
        "rating": 5,
        "date": "July 31, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Dorothy B.",
        "rating": 4,
        "date": "July 17, 2025",
        "text": "Shipping was okay, took about a week and a half.",
        "reviewImage": "/images/reviews/low_rev_lambo_1.jpg"
      },
      {
        "authorName": "Ruth R.",
        "rating": 5,
        "date": "March 5, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/rev_gulf_3.jpg"
      },
      {
        "authorName": "Frank L.",
        "rating": 5,
        "date": "October 22, 2025",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/blur_rev_bolide_1.jpg"
      },
      {
        "authorName": "Brian E.",
        "rating": 2,
        "date": "February 2, 2025",
        "text": "The gearbox is very stiff and sometimes gets stuck."
      },
      {
        "authorName": "Joseph P.",
        "rating": 5,
        "date": "February 22, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
      },
      {
        "authorName": "Carolyn L.",
        "rating": 5,
        "date": "November 9, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Dorothy J.",
        "rating": 5,
        "date": "May 21, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Nancy T.",
        "rating": 5,
        "date": "July 20, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Carl E.",
        "rating": 5,
        "date": "February 26, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Catherine C.",
        "rating": 4,
        "date": "January 15, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Martha A.",
        "rating": 5,
        "date": "April 5, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Carolyn R.",
        "rating": 5,
        "date": "September 30, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Amy S.",
        "rating": 4,
        "date": "March 20, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly.",
        "reviewImage": "/images/reviews/blur_rev_porsche_1.jpg"
      },
      {
        "authorName": "Mark Z.",
        "rating": 5,
        "date": "April 6, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Jennifer H.",
        "rating": 5,
        "date": "September 9, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Dennis A.",
        "rating": 5,
        "date": "July 5, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Ronald W.",
        "rating": 5,
        "date": "April 20, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Lisa J.",
        "rating": 5,
        "date": "October 13, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Karen D.",
        "rating": 5,
        "date": "April 9, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "John F.",
        "rating": 4,
        "date": "December 12, 2025",
        "text": "Good set, but a bit repetitive during the chassis assembly.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
      },
      {
        "authorName": "Ryan E.",
        "rating": 5,
        "date": "February 24, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Timothy M.",
        "rating": 5,
        "date": "February 4, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/low_rev_bolide_1.jpg"
      },
      {
        "authorName": "Sharon F.",
        "rating": 5,
        "date": "June 29, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Richard C.",
        "rating": 5,
        "date": "January 6, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/low_rev_gulf_1.jpg"
      },
      {
        "authorName": "Karen T.",
        "rating": 5,
        "date": "June 8, 2026",
        "text": "Beautiful design. The aero features are a really cool addition.",
        "reviewImage": "/images/reviews/blur_rev_lambo_2.jpg"
      },
      {
        "authorName": "Matthew E.",
        "rating": 4,
        "date": "March 30, 2025",
        "text": "Looks great, but the doors are a bit stiff to open.",
        "reviewImage": "/images/reviews/low_rev_gulf_2.jpg"
      },
      {
        "authorName": "Kevin M.",
        "rating": 5,
        "date": "December 20, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Linda R.",
        "rating": 5,
        "date": "March 15, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
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
        "authorName": "Daniel B.",
        "rating": 5,
        "date": "June 20, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/low_rev_lambo_1.jpg"
      },
      {
        "authorName": "Steven D.",
        "rating": 5,
        "date": "July 16, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Maria S.",
        "rating": 2,
        "date": "February 24, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Linda K.",
        "rating": 4,
        "date": "March 4, 2026",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing.",
        "reviewImage": "/images/reviews/low_rev_gulf_2.jpg"
      },
      {
        "authorName": "George C.",
        "rating": 4,
        "date": "July 16, 2026",
        "text": "Shipping was okay, took about a week and a half.",
        "reviewImage": "/images/reviews/low_rev_lambo_2.jpg"
      },
      {
        "authorName": "Debra M.",
        "rating": 5,
        "date": "January 4, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Donald A.",
        "rating": 3,
        "date": "July 24, 2026",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "Amy D.",
        "rating": 5,
        "date": "May 15, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Frances L.",
        "rating": 5,
        "date": "December 21, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Cynthia F.",
        "rating": 5,
        "date": "June 26, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
      },
      {
        "authorName": "Diane B.",
        "rating": 4,
        "date": "February 12, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Deborah R.",
        "rating": 5,
        "date": "March 22, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Sharon M.",
        "rating": 5,
        "date": "December 6, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/low_rev_gulf_1.jpg"
      },
      {
        "authorName": "Raymond V.",
        "rating": 5,
        "date": "November 28, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Edward F.",
        "rating": 3,
        "date": "March 16, 2026",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Catherine A.",
        "rating": 5,
        "date": "November 5, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/blur_rev_porsche_1.jpg"
      },
      {
        "authorName": "Debra E.",
        "rating": 5,
        "date": "August 31, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Larry G.",
        "rating": 5,
        "date": "February 6, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Nancy B.",
        "rating": 5,
        "date": "January 30, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/rev_lambo_2.jpg"
      },
      {
        "authorName": "Frances B.",
        "rating": 5,
        "date": "July 20, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
      },
      {
        "authorName": "Walter B.",
        "rating": 5,
        "date": "April 15, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Stephen G.",
        "rating": 5,
        "date": "October 13, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/rev_gulf_1.jpg"
      },
      {
        "authorName": "Henry S.",
        "rating": 5,
        "date": "January 21, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/low_rev_bolide_1.jpg"
      },
      {
        "authorName": "Laura G.",
        "rating": 5,
        "date": "June 26, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/rev_bolide_1.jpg"
      },
      {
        "authorName": "Carl V.",
        "rating": 5,
        "date": "March 4, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/blur_rev_gulf_3.jpg"
      },
      {
        "authorName": "Andrew F.",
        "rating": 5,
        "date": "January 16, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/low_rev_gulf_3.jpg"
      },
      {
        "authorName": "Paul R.",
        "rating": 5,
        "date": "June 9, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Raymond R.",
        "rating": 5,
        "date": "April 25, 2026",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/rev_gulf_3.jpg"
      },
      {
        "authorName": "William H.",
        "rating": 4,
        "date": "April 28, 2026",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Peter T.",
        "rating": 4,
        "date": "January 22, 2026",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Martha M.",
        "rating": 5,
        "date": "February 26, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Amy S.",
        "rating": 5,
        "date": "February 15, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/blur_rev_bolide_1.jpg"
      },
      {
        "authorName": "Thomas J.",
        "rating": 5,
        "date": "May 9, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/blur_rev_lambo_2.jpg"
      },
      {
        "authorName": "Janet J.",
        "rating": 5,
        "date": "April 30, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Virginia F.",
        "rating": 5,
        "date": "January 10, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
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
        "authorName": "Carolyn G.",
        "rating": 4,
        "date": "June 15, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Anthony A.",
        "rating": 4,
        "date": "December 7, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Raymond A.",
        "rating": 5,
        "date": "December 9, 2025",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/low_rev_gulf_3.jpg"
      },
      {
        "authorName": "William P.",
        "rating": 5,
        "date": "July 23, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Jason N.",
        "rating": 5,
        "date": "June 23, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Ann S.",
        "rating": 5,
        "date": "June 12, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Laura R.",
        "rating": 5,
        "date": "June 19, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Nancy R.",
        "rating": 5,
        "date": "July 25, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "George V.",
        "rating": 5,
        "date": "October 16, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Cynthia W.",
        "rating": 5,
        "date": "August 19, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Walter L.",
        "rating": 5,
        "date": "March 10, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/low_rev_gulf_2.jpg"
      },
      {
        "authorName": "Richard A.",
        "rating": 4,
        "date": "December 25, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Amanda T.",
        "rating": 5,
        "date": "December 2, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Pamela D.",
        "rating": 5,
        "date": "October 17, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/blur_rev_gulf_1.jpg"
      },
      {
        "authorName": "Christopher K.",
        "rating": 5,
        "date": "May 6, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/rev_lambo_2.jpg"
      },
      {
        "authorName": "Amanda J.",
        "rating": 5,
        "date": "April 9, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/blur_rev_gulf_3.jpg"
      },
      {
        "authorName": "Steven D.",
        "rating": 5,
        "date": "November 3, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/low_rev_bolide_1.jpg"
      },
      {
        "authorName": "Richard F.",
        "rating": 5,
        "date": "February 12, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Dorothy Z.",
        "rating": 4,
        "date": "December 16, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Elizabeth Z.",
        "rating": 5,
        "date": "April 10, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/low_rev_lambo_2.jpg"
      },
      {
        "authorName": "Christopher J.",
        "rating": 5,
        "date": "January 12, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Eric R.",
        "rating": 5,
        "date": "January 14, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Douglas M.",
        "rating": 4,
        "date": "July 5, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "James R.",
        "rating": 5,
        "date": "June 8, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Paul S.",
        "rating": 3,
        "date": "March 17, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "James T.",
        "rating": 5,
        "date": "October 30, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Joseph S.",
        "rating": 5,
        "date": "June 19, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Karen F.",
        "rating": 5,
        "date": "July 26, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Barbara V.",
        "rating": 3,
        "date": "September 17, 2025",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating."
      },
      {
        "authorName": "Jeffrey V.",
        "rating": 5,
        "date": "January 26, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Patricia K.",
        "rating": 2,
        "date": "April 9, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Gary D.",
        "rating": 5,
        "date": "February 26, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Joshua S.",
        "rating": 5,
        "date": "May 27, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Arthur J.",
        "rating": 5,
        "date": "May 8, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
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
        "authorName": "Lisa F.",
        "rating": 4,
        "date": "December 15, 2025",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Ann J.",
        "rating": 5,
        "date": "July 3, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Rebecca Z.",
        "rating": 4,
        "date": "February 7, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Harold P.",
        "rating": 5,
        "date": "April 13, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/low_rev_lambo_2.jpg"
      },
      {
        "authorName": "Christopher G.",
        "rating": 5,
        "date": "September 11, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Ruth D.",
        "rating": 5,
        "date": "January 2, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/low_rev_gulf_1.jpg"
      },
      {
        "authorName": "Brenda L.",
        "rating": 5,
        "date": "April 1, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Carl E.",
        "rating": 4,
        "date": "June 12, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
      },
      {
        "authorName": "Rebecca C.",
        "rating": 5,
        "date": "June 7, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/rev_lambo_2.jpg"
      },
      {
        "authorName": "Paul B.",
        "rating": 5,
        "date": "March 27, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Gary J.",
        "rating": 5,
        "date": "June 29, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/blur_rev_bolide_1.jpg"
      },
      {
        "authorName": "Christopher A.",
        "rating": 5,
        "date": "December 15, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/rev_gulf_3.jpg"
      },
      {
        "authorName": "Joyce V.",
        "rating": 4,
        "date": "January 13, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Richard N.",
        "rating": 5,
        "date": "May 22, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/low_rev_bolide_1.jpg"
      },
      {
        "authorName": "Douglas K.",
        "rating": 5,
        "date": "November 18, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Peter P.",
        "rating": 2,
        "date": "December 4, 2025",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Douglas Z.",
        "rating": 5,
        "date": "July 17, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Henry E.",
        "rating": 5,
        "date": "August 21, 2025",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Carolyn K.",
        "rating": 5,
        "date": "January 20, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Joshua N.",
        "rating": 5,
        "date": "July 31, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Frances C.",
        "rating": 5,
        "date": "November 18, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Timothy M.",
        "rating": 5,
        "date": "June 13, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Sarah S.",
        "rating": 5,
        "date": "May 8, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Douglas F.",
        "rating": 5,
        "date": "June 27, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Debra J.",
        "rating": 5,
        "date": "March 6, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/rev_lambo_1.jpg"
      },
      {
        "authorName": "Eric V.",
        "rating": 5,
        "date": "May 2, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/low_rev_gulf_2.jpg"
      },
      {
        "authorName": "Mark V.",
        "rating": 3,
        "date": "July 4, 2025",
        "text": "Some pieces were missing from bag 3. They sent replacements but it delayed my build."
      },
      {
        "authorName": "Lisa J.",
        "rating": 3,
        "date": "February 5, 2026",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Helen G.",
        "rating": 5,
        "date": "November 18, 2025",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
      },
      {
        "authorName": "Henry T.",
        "rating": 5,
        "date": "March 31, 2026",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/rev_gulf_1.jpg"
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
        "authorName": "Jessica C.",
        "rating": 5,
        "date": "April 25, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast.",
        "reviewImage": "/images/reviews/blur_rev_lambo_2.jpg"
      },
      {
        "authorName": "Jeffrey G.",
        "rating": 5,
        "date": "September 3, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Barbara F.",
        "rating": 5,
        "date": "April 2, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/blur_rev_gulf_3.jpg"
      },
      {
        "authorName": "Richard K.",
        "rating": 5,
        "date": "January 9, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Carol F.",
        "rating": 5,
        "date": "July 4, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/blur_rev_porsche_1.jpg"
      },
      {
        "authorName": "Shirley V.",
        "rating": 5,
        "date": "July 19, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Paul Z.",
        "rating": 5,
        "date": "March 14, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Roger K.",
        "rating": 4,
        "date": "February 12, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Jessica S.",
        "rating": 5,
        "date": "February 4, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Kathleen D.",
        "rating": 5,
        "date": "February 18, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Carolyn T.",
        "rating": 4,
        "date": "October 26, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Virginia C.",
        "rating": 5,
        "date": "January 2, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Frank E.",
        "rating": 5,
        "date": "October 29, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Ryan R.",
        "rating": 2,
        "date": "January 8, 2026",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Christine B.",
        "rating": 5,
        "date": "March 14, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Carol R.",
        "rating": 5,
        "date": "January 10, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Kevin C.",
        "rating": 5,
        "date": "June 28, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Arthur D.",
        "rating": 5,
        "date": "October 14, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Arthur S.",
        "rating": 4,
        "date": "July 14, 2025",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Joshua M.",
        "rating": 5,
        "date": "June 20, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Ronald S.",
        "rating": 4,
        "date": "July 6, 2026",
        "text": "Good quality bricks, but the stickers were a bit tricky to align.",
        "reviewImage": "/images/reviews/rev_gulf_3.jpg"
      },
      {
        "authorName": "Larry D.",
        "rating": 3,
        "date": "May 29, 2025",
        "text": "Box was completely crushed upon arrival. Luckily the parts inside were fine."
      },
      {
        "authorName": "James N.",
        "rating": 5,
        "date": "April 9, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Henry A.",
        "rating": 3,
        "date": "March 15, 2025",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Sarah R.",
        "rating": 5,
        "date": "July 7, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Richard L.",
        "rating": 5,
        "date": "February 3, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Brenda Z.",
        "rating": 5,
        "date": "July 7, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/low_rev_gulf_1.jpg"
      },
      {
        "authorName": "Richard B.",
        "rating": 4,
        "date": "April 3, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly.",
        "reviewImage": "/images/reviews/blur_rev_gulf_2.jpg"
      },
      {
        "authorName": "Dennis B.",
        "rating": 5,
        "date": "August 26, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Angela W.",
        "rating": 5,
        "date": "April 5, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Cynthia J.",
        "rating": 5,
        "date": "July 15, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Ann W.",
        "rating": 5,
        "date": "February 19, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Michael N.",
        "rating": 5,
        "date": "April 30, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Kathleen S.",
        "rating": 5,
        "date": "April 28, 2025",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      }
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
