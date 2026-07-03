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
        "authorName": "Thomas F.",
        "rating": 5,
        "date": "February 13, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/real_porsche-rsr_3.jpg"
      },
      {
        "authorName": "Patricia R.",
        "rating": 5,
        "date": "July 20, 2025",
        "text": "Beautiful design. The aero features are a really cool addition.",
        "reviewImage": "/images/reviews/real_porsche-rsr_2.jpg"
      },
      {
        "authorName": "Margaret V.",
        "rating": 5,
        "date": "March 29, 2025",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/real_porsche-rsr_1.jpg"
      },
      {
        "authorName": "Mary R.",
        "rating": 5,
        "date": "June 29, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Diane K.",
        "rating": 4,
        "date": "October 26, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Susan R.",
        "rating": 5,
        "date": "January 17, 2025",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/low_real_porsche-rsr_2.jpg"
      },
      {
        "authorName": "Elizabeth C.",
        "rating": 5,
        "date": "June 28, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Jennifer N.",
        "rating": 5,
        "date": "December 4, 2025",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/low_real_porsche-rsr_1.jpg"
      },
      {
        "authorName": "Christine T.",
        "rating": 5,
        "date": "May 16, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/low_real_porsche-rsr_3.jpg"
      },
      {
        "authorName": "Sharon J.",
        "rating": 5,
        "date": "June 30, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Daniel B.",
        "rating": 5,
        "date": "January 15, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "George V.",
        "rating": 5,
        "date": "January 2, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Dorothy P.",
        "rating": 5,
        "date": "July 5, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Jessica D.",
        "rating": 3,
        "date": "February 1, 2026",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Karen S.",
        "rating": 5,
        "date": "March 19, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Frances D.",
        "rating": 5,
        "date": "December 3, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Sarah J.",
        "rating": 3,
        "date": "September 17, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Jose K.",
        "rating": 5,
        "date": "May 8, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Elizabeth J.",
        "rating": 5,
        "date": "December 28, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Kevin S.",
        "rating": 5,
        "date": "April 24, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Larry N.",
        "rating": 5,
        "date": "February 8, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Walter T.",
        "rating": 3,
        "date": "June 7, 2026",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "Debra H.",
        "rating": 4,
        "date": "July 21, 2026",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Jessica N.",
        "rating": 5,
        "date": "February 17, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Steven P.",
        "rating": 5,
        "date": "July 28, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Sharon N.",
        "rating": 5,
        "date": "October 10, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Mary J.",
        "rating": 5,
        "date": "January 10, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Daniel T.",
        "rating": 5,
        "date": "May 9, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Diane A.",
        "rating": 5,
        "date": "December 20, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Carolyn Z.",
        "rating": 5,
        "date": "October 3, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Harold B.",
        "rating": 4,
        "date": "December 27, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Kathleen C.",
        "rating": 5,
        "date": "May 7, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Lisa R.",
        "rating": 4,
        "date": "January 19, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Gary P.",
        "rating": 5,
        "date": "May 17, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Betty J.",
        "rating": 5,
        "date": "November 7, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Carolyn D.",
        "rating": 4,
        "date": "December 19, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Barbara D.",
        "rating": 5,
        "date": "November 25, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Michael C.",
        "rating": 5,
        "date": "April 24, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
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
        "authorName": "Scott N.",
        "rating": 5,
        "date": "September 10, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/real_gulf-racing_1.jpg"
      },
      {
        "authorName": "Karen L.",
        "rating": 2,
        "date": "February 21, 2026",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Donna V.",
        "rating": 5,
        "date": "April 7, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/low_real_gulf-racing_2.jpg"
      },
      {
        "authorName": "Anthony S.",
        "rating": 5,
        "date": "January 11, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Stephanie E.",
        "rating": 5,
        "date": "December 11, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Patrick M.",
        "rating": 5,
        "date": "June 19, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Harold S.",
        "rating": 5,
        "date": "January 4, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Jennifer V.",
        "rating": 5,
        "date": "December 1, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Jeffrey F.",
        "rating": 4,
        "date": "March 22, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual.",
        "reviewImage": "/images/reviews/low_real_gulf-racing_1.jpg"
      },
      {
        "authorName": "Ryan W.",
        "rating": 4,
        "date": "June 28, 2026",
        "text": "Nice build overall. Some of the pins were a bit tight to push in.",
        "reviewImage": "/images/reviews/real_gulf-racing_3.jpg"
      },
      {
        "authorName": "Karen B.",
        "rating": 5,
        "date": "July 5, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/low_real_gulf-racing_3.jpg"
      },
      {
        "authorName": "Kathleen A.",
        "rating": 5,
        "date": "April 24, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/real_gulf-racing_2.jpg"
      },
      {
        "authorName": "Maria D.",
        "rating": 4,
        "date": "April 20, 2026",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Steven T.",
        "rating": 3,
        "date": "September 26, 2025",
        "text": "Some pieces were missing from bag 3. They sent replacements but it delayed my build."
      },
      {
        "authorName": "Walter W.",
        "rating": 5,
        "date": "June 5, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Donald V.",
        "rating": 5,
        "date": "September 14, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Michael G.",
        "rating": 4,
        "date": "December 26, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Thomas H.",
        "rating": 5,
        "date": "March 8, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Michael V.",
        "rating": 5,
        "date": "April 19, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Donald Z.",
        "rating": 3,
        "date": "June 29, 2026",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Sarah N.",
        "rating": 5,
        "date": "June 11, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Stephen T.",
        "rating": 5,
        "date": "May 25, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Lisa E.",
        "rating": 5,
        "date": "July 22, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Joyce V.",
        "rating": 5,
        "date": "November 9, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Virginia V.",
        "rating": 5,
        "date": "March 16, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Andrew Z.",
        "rating": 4,
        "date": "June 12, 2026",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Dorothy A.",
        "rating": 5,
        "date": "July 23, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Maria H.",
        "rating": 5,
        "date": "January 3, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Kenneth B.",
        "rating": 5,
        "date": "September 20, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Stephen E.",
        "rating": 5,
        "date": "September 29, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "James T.",
        "rating": 5,
        "date": "January 3, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Lisa C.",
        "rating": 5,
        "date": "March 8, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Edward S.",
        "rating": 5,
        "date": "March 20, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Joseph A.",
        "rating": 5,
        "date": "June 6, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Helen K.",
        "rating": 5,
        "date": "March 2, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Carl S.",
        "rating": 5,
        "date": "March 26, 2026",
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
        "authorName": "Dennis W.",
        "rating": 5,
        "date": "April 18, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "William F.",
        "rating": 3,
        "date": "April 1, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Brian H.",
        "rating": 5,
        "date": "July 21, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Kimberly B.",
        "rating": 5,
        "date": "February 27, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Patricia P.",
        "rating": 5,
        "date": "September 11, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Stephen E.",
        "rating": 5,
        "date": "July 12, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Frank R.",
        "rating": 4,
        "date": "January 25, 2026",
        "text": "Solid build. Wish the steering angle was a bit sharper though.",
        "reviewImage": "/images/reviews/real_turbo-s_1.jpg"
      },
      {
        "authorName": "Ryan K.",
        "rating": 5,
        "date": "July 14, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/low_real_turbo-s_2.jpg"
      },
      {
        "authorName": "Daniel E.",
        "rating": 5,
        "date": "September 6, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Karen M.",
        "rating": 5,
        "date": "July 5, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Elizabeth H.",
        "rating": 5,
        "date": "September 13, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Brian W.",
        "rating": 5,
        "date": "May 29, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Karen A.",
        "rating": 5,
        "date": "May 30, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Brian G.",
        "rating": 5,
        "date": "February 1, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast.",
        "reviewImage": "/images/reviews/real_turbo-s_2.jpg"
      },
      {
        "authorName": "Betty K.",
        "rating": 5,
        "date": "April 8, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Amy G.",
        "rating": 5,
        "date": "August 19, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Carol W.",
        "rating": 4,
        "date": "July 31, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Joyce L.",
        "rating": 5,
        "date": "July 4, 2026",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/low_real_turbo-s_3.jpg"
      },
      {
        "authorName": "Harold D.",
        "rating": 5,
        "date": "July 15, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Kimberly A.",
        "rating": 5,
        "date": "June 10, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/real_turbo-s_3.jpg"
      },
      {
        "authorName": "Brenda G.",
        "rating": 5,
        "date": "July 10, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Lisa B.",
        "rating": 4,
        "date": "March 26, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in.",
        "reviewImage": "/images/reviews/low_real_turbo-s_1.jpg"
      },
      {
        "authorName": "Melissa J.",
        "rating": 2,
        "date": "August 27, 2025",
        "text": "Some pieces were missing from bag 3. They sent replacements but it delayed my build."
      },
      {
        "authorName": "Jeffrey S.",
        "rating": 5,
        "date": "December 27, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "George P.",
        "rating": 5,
        "date": "February 24, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Pamela T.",
        "rating": 4,
        "date": "February 15, 2026",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Jessica N.",
        "rating": 5,
        "date": "March 26, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "David V.",
        "rating": 5,
        "date": "June 4, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "George P.",
        "rating": 5,
        "date": "December 11, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Jessica T.",
        "rating": 5,
        "date": "September 19, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Sandra M.",
        "rating": 5,
        "date": "January 24, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Dorothy E.",
        "rating": 5,
        "date": "September 21, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Harold P.",
        "rating": 5,
        "date": "October 25, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Gregory V.",
        "rating": 5,
        "date": "April 25, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Frances G.",
        "rating": 2,
        "date": "February 7, 2025",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating."
      },
      {
        "authorName": "Kevin A.",
        "rating": 3,
        "date": "December 21, 2025",
        "text": "The front suspension sags a bit under the weight of the model."
      },
      {
        "authorName": "Joshua H.",
        "rating": 4,
        "date": "June 19, 2026",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Donald W.",
        "rating": 5,
        "date": "February 13, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Virginia K.",
        "rating": 5,
        "date": "August 5, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Carol L.",
        "rating": 5,
        "date": "November 21, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Scott F.",
        "rating": 4,
        "date": "April 6, 2026",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Deborah L.",
        "rating": 5,
        "date": "September 24, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Carl V.",
        "rating": 5,
        "date": "June 9, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Elizabeth R.",
        "rating": 5,
        "date": "February 16, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Thomas N.",
        "rating": 5,
        "date": "March 19, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
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
        "authorName": "Raymond E.",
        "rating": 5,
        "date": "December 14, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/low_real_cyber-v12_2.jpg"
      },
      {
        "authorName": "Matthew P.",
        "rating": 5,
        "date": "August 26, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/real_cyber-v12_1.jpg"
      },
      {
        "authorName": "Brian G.",
        "rating": 5,
        "date": "March 27, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Sandra L.",
        "rating": 5,
        "date": "February 4, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Debra N.",
        "rating": 5,
        "date": "May 8, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Ann R.",
        "rating": 3,
        "date": "August 11, 2025",
        "text": "Some pieces were missing from bag 3. They sent replacements but it delayed my build."
      },
      {
        "authorName": "Rebecca N.",
        "rating": 2,
        "date": "February 7, 2025",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Henry F.",
        "rating": 5,
        "date": "July 11, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Eric H.",
        "rating": 5,
        "date": "April 6, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Andrew C.",
        "rating": 5,
        "date": "August 31, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/real_cyber-v12_2.jpg"
      },
      {
        "authorName": "Scott T.",
        "rating": 5,
        "date": "July 22, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Joyce T.",
        "rating": 5,
        "date": "April 25, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Henry C.",
        "rating": 4,
        "date": "June 18, 2026",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Roger B.",
        "rating": 5,
        "date": "January 26, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "John C.",
        "rating": 5,
        "date": "August 18, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "James D.",
        "rating": 5,
        "date": "April 14, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Pamela B.",
        "rating": 5,
        "date": "December 30, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/low_real_cyber-v12_3.jpg"
      },
      {
        "authorName": "Anthony Z.",
        "rating": 5,
        "date": "July 19, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Robert Z.",
        "rating": 5,
        "date": "April 30, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Frances V.",
        "rating": 3,
        "date": "December 24, 2025",
        "text": "The RC motor works but it's very loud and squeaky.",
        "reviewImage": "/images/reviews/real_cyber-v12_3.jpg"
      },
      {
        "authorName": "Douglas L.",
        "rating": 5,
        "date": "May 20, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/low_real_cyber-v12_1.jpg"
      },
      {
        "authorName": "Jason N.",
        "rating": 4,
        "date": "April 25, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Walter P.",
        "rating": 5,
        "date": "January 15, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Harold S.",
        "rating": 4,
        "date": "March 20, 2026",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Patrick V.",
        "rating": 5,
        "date": "January 8, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Michael S.",
        "rating": 5,
        "date": "May 14, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Jose V.",
        "rating": 3,
        "date": "May 26, 2025",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Christopher W.",
        "rating": 4,
        "date": "May 30, 2025",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Mark M.",
        "rating": 5,
        "date": "June 3, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Jerry P.",
        "rating": 5,
        "date": "January 31, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Thomas A.",
        "rating": 4,
        "date": "September 9, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Scott L.",
        "rating": 5,
        "date": "December 14, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Thomas T.",
        "rating": 5,
        "date": "November 26, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Marie D.",
        "rating": 5,
        "date": "February 1, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Nancy N.",
        "rating": 5,
        "date": "April 14, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Frank J.",
        "rating": 4,
        "date": "March 30, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Larry P.",
        "rating": 5,
        "date": "January 21, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Susan V.",
        "rating": 5,
        "date": "March 5, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Kenneth M.",
        "rating": 5,
        "date": "April 12, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Andrew S.",
        "rating": 5,
        "date": "June 28, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Scott F.",
        "rating": 5,
        "date": "May 22, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Timothy T.",
        "rating": 5,
        "date": "May 3, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
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
        "authorName": "Patricia S.",
        "rating": 5,
        "date": "December 11, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "William W.",
        "rating": 5,
        "date": "May 19, 2026",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/real_cyber-v12_1.jpg"
      },
      {
        "authorName": "Nancy D.",
        "rating": 3,
        "date": "March 3, 2026",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Arthur C.",
        "rating": 4,
        "date": "March 19, 2026",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Andrew E.",
        "rating": 3,
        "date": "July 12, 2025",
        "text": "The RC motor works but it's very loud and squeaky.",
        "reviewImage": "/images/reviews/low_real_cyber-v12_3.jpg"
      },
      {
        "authorName": "Ann M.",
        "rating": 5,
        "date": "September 4, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/real_cyber-v12_2.jpg"
      },
      {
        "authorName": "William V.",
        "rating": 5,
        "date": "February 12, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Donna B.",
        "rating": 5,
        "date": "April 22, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Pamela C.",
        "rating": 5,
        "date": "August 5, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Paul J.",
        "rating": 4,
        "date": "July 12, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "John F.",
        "rating": 5,
        "date": "March 5, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Angela H.",
        "rating": 5,
        "date": "May 18, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Peter G.",
        "rating": 5,
        "date": "August 10, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Janet B.",
        "rating": 4,
        "date": "October 10, 2025",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Kenneth W.",
        "rating": 5,
        "date": "February 26, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Frances S.",
        "rating": 5,
        "date": "February 24, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Janet D.",
        "rating": 5,
        "date": "April 1, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/real_cyber-v12_3.jpg"
      },
      {
        "authorName": "David R.",
        "rating": 5,
        "date": "March 21, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Thomas V.",
        "rating": 5,
        "date": "August 28, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/low_real_cyber-v12_1.jpg"
      },
      {
        "authorName": "Kevin K.",
        "rating": 3,
        "date": "May 19, 2026",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Dorothy E.",
        "rating": 5,
        "date": "April 28, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Carol G.",
        "rating": 5,
        "date": "February 2, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Jason C.",
        "rating": 5,
        "date": "December 14, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast.",
        "reviewImage": "/images/reviews/low_real_cyber-v12_2.jpg"
      },
      {
        "authorName": "Joshua K.",
        "rating": 5,
        "date": "November 17, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Steven J.",
        "rating": 4,
        "date": "April 23, 2025",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Brenda V.",
        "rating": 5,
        "date": "April 22, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Ruth D.",
        "rating": 5,
        "date": "June 2, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Stephen G.",
        "rating": 5,
        "date": "November 21, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Amanda D.",
        "rating": 5,
        "date": "June 17, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Daniel D.",
        "rating": 4,
        "date": "May 30, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Kathleen H.",
        "rating": 5,
        "date": "May 1, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Patricia P.",
        "rating": 5,
        "date": "July 15, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Elizabeth R.",
        "rating": 5,
        "date": "November 27, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Joseph G.",
        "rating": 5,
        "date": "September 10, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
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
        "authorName": "Michael D.",
        "rating": 5,
        "date": "January 23, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Angela H.",
        "rating": 5,
        "date": "March 31, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Eric F.",
        "rating": 5,
        "date": "March 14, 2026",
        "text": "Beautiful design. The aero features are a really cool addition.",
        "reviewImage": "/images/reviews/low_real_blue-bolide_2.jpg"
      },
      {
        "authorName": "Virginia A.",
        "rating": 5,
        "date": "January 24, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Stephanie E.",
        "rating": 4,
        "date": "February 16, 2026",
        "text": "Solid build. Wish the steering angle was a bit sharper though.",
        "reviewImage": "/images/reviews/real_blue-bolide_3.jpg"
      },
      {
        "authorName": "Patrick S.",
        "rating": 5,
        "date": "April 1, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Jeffrey E.",
        "rating": 4,
        "date": "May 3, 2026",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Timothy D.",
        "rating": 5,
        "date": "July 2, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Larry H.",
        "rating": 4,
        "date": "January 5, 2026",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Nancy H.",
        "rating": 5,
        "date": "June 24, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Jessica W.",
        "rating": 4,
        "date": "March 13, 2026",
        "text": "Overall satisfied, but the box arrived slightly dented.",
        "reviewImage": "/images/reviews/low_real_blue-bolide_1.jpg"
      },
      {
        "authorName": "Stephen N.",
        "rating": 5,
        "date": "June 12, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Marie R.",
        "rating": 5,
        "date": "August 13, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/low_real_blue-bolide_3.jpg"
      },
      {
        "authorName": "Paul C.",
        "rating": 5,
        "date": "April 14, 2025",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/real_blue-bolide_2.jpg"
      },
      {
        "authorName": "Carolyn Z.",
        "rating": 5,
        "date": "July 24, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/real_blue-bolide_1.jpg"
      },
      {
        "authorName": "Sharon E.",
        "rating": 5,
        "date": "June 25, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Jeffrey E.",
        "rating": 5,
        "date": "June 11, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Richard V.",
        "rating": 5,
        "date": "November 4, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Henry S.",
        "rating": 5,
        "date": "March 26, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Jason J.",
        "rating": 5,
        "date": "March 27, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Kimberly R.",
        "rating": 5,
        "date": "June 14, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Jennifer K.",
        "rating": 5,
        "date": "August 15, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Harold R.",
        "rating": 5,
        "date": "January 5, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Brian K.",
        "rating": 5,
        "date": "February 15, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Ryan P.",
        "rating": 5,
        "date": "January 6, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Gregory K.",
        "rating": 5,
        "date": "September 19, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Anna G.",
        "rating": 5,
        "date": "July 11, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Arthur V.",
        "rating": 5,
        "date": "April 23, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Donald A.",
        "rating": 5,
        "date": "October 29, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Barbara J.",
        "rating": 4,
        "date": "January 25, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Patricia Z.",
        "rating": 5,
        "date": "May 30, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "John A.",
        "rating": 2,
        "date": "October 17, 2025",
        "text": "Some pieces were missing from bag 3. They sent replacements but it delayed my build."
      },
      {
        "authorName": "Larry E.",
        "rating": 3,
        "date": "November 29, 2025",
        "text": "The gearbox is very stiff and sometimes gets stuck."
      },
      {
        "authorName": "Dennis T.",
        "rating": 5,
        "date": "August 3, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Christopher P.",
        "rating": 5,
        "date": "September 16, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Robert T.",
        "rating": 3,
        "date": "October 29, 2025",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating."
      },
      {
        "authorName": "Robert S.",
        "rating": 5,
        "date": "June 29, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
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
        "authorName": "Patricia G.",
        "rating": 5,
        "date": "May 11, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/low_real_green-bull_3.jpg"
      },
      {
        "authorName": "Thomas M.",
        "rating": 5,
        "date": "March 5, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Helen B.",
        "rating": 4,
        "date": "March 16, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Ruth Z.",
        "rating": 5,
        "date": "May 12, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Shirley A.",
        "rating": 5,
        "date": "March 21, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Anthony W.",
        "rating": 2,
        "date": "September 17, 2025",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Sandra T.",
        "rating": 5,
        "date": "June 9, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "William J.",
        "rating": 3,
        "date": "February 12, 2026",
        "text": "The RC motor works but it's very loud and squeaky.",
        "reviewImage": "/images/reviews/real_green-bull_2.jpg"
      },
      {
        "authorName": "Kevin H.",
        "rating": 4,
        "date": "April 10, 2025",
        "text": "Good quality bricks, but the stickers were a bit tricky to align.",
        "reviewImage": "/images/reviews/low_real_green-bull_1.jpg"
      },
      {
        "authorName": "Edward W.",
        "rating": 5,
        "date": "July 20, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/low_real_green-bull_2.jpg"
      },
      {
        "authorName": "Donna N.",
        "rating": 5,
        "date": "November 22, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Pamela G.",
        "rating": 3,
        "date": "December 5, 2025",
        "text": "The gearbox is very stiff and sometimes gets stuck."
      },
      {
        "authorName": "Eric T.",
        "rating": 5,
        "date": "December 31, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Ronald H.",
        "rating": 5,
        "date": "April 1, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Maria H.",
        "rating": 5,
        "date": "September 30, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Maria J.",
        "rating": 5,
        "date": "July 31, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Robert P.",
        "rating": 5,
        "date": "January 28, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Peter R.",
        "rating": 5,
        "date": "May 18, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "John F.",
        "rating": 4,
        "date": "September 24, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in.",
        "reviewImage": "/images/reviews/real_green-bull_3.jpg"
      },
      {
        "authorName": "Betty Z.",
        "rating": 5,
        "date": "July 21, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Brian R.",
        "rating": 5,
        "date": "May 28, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Susan D.",
        "rating": 5,
        "date": "May 9, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Christine Z.",
        "rating": 5,
        "date": "June 23, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Raymond V.",
        "rating": 5,
        "date": "June 24, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Douglas Z.",
        "rating": 5,
        "date": "January 29, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Michael Z.",
        "rating": 5,
        "date": "July 9, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/real_green-bull_1.jpg"
      },
      {
        "authorName": "Deborah L.",
        "rating": 4,
        "date": "March 2, 2026",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Matthew A.",
        "rating": 5,
        "date": "January 17, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Carl M.",
        "rating": 5,
        "date": "July 9, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Larry S.",
        "rating": 5,
        "date": "October 30, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Brian T.",
        "rating": 5,
        "date": "April 4, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Joseph F.",
        "rating": 5,
        "date": "July 17, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Susan S.",
        "rating": 5,
        "date": "April 2, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Amanda H.",
        "rating": 5,
        "date": "November 4, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Jeffrey B.",
        "rating": 5,
        "date": "June 29, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Steven F.",
        "rating": 4,
        "date": "February 28, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Ruth N.",
        "rating": 3,
        "date": "September 3, 2025",
        "text": "The gearbox is very stiff and sometimes gets stuck."
      },
      {
        "authorName": "Raymond E.",
        "rating": 5,
        "date": "June 1, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Frank K.",
        "rating": 4,
        "date": "January 5, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Debra K.",
        "rating": 5,
        "date": "October 26, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Shirley Z.",
        "rating": 5,
        "date": "May 21, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
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
        "authorName": "Matthew A.",
        "rating": 3,
        "date": "April 30, 2025",
        "text": "Box was completely crushed upon arrival. Luckily the parts inside were fine.",
        "reviewImage": "/images/reviews/real_black-warrior_3.jpg"
      },
      {
        "authorName": "Andrew V.",
        "rating": 5,
        "date": "June 27, 2026",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/low_real_black-warrior_2.jpg"
      },
      {
        "authorName": "Sarah R.",
        "rating": 4,
        "date": "February 14, 2026",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Sharon T.",
        "rating": 2,
        "date": "February 21, 2025",
        "text": "Some pieces were missing from bag 3. They sent replacements but it delayed my build.",
        "reviewImage": "/images/reviews/low_real_black-warrior_1.jpg"
      },
      {
        "authorName": "Jason A.",
        "rating": 5,
        "date": "July 6, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Henry H.",
        "rating": 5,
        "date": "November 18, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/real_black-warrior_2.jpg"
      },
      {
        "authorName": "Kevin G.",
        "rating": 5,
        "date": "March 19, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Amy E.",
        "rating": 5,
        "date": "October 8, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Arthur P.",
        "rating": 5,
        "date": "November 10, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Donald Z.",
        "rating": 5,
        "date": "August 1, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/real_black-warrior_1.jpg"
      },
      {
        "authorName": "George R.",
        "rating": 5,
        "date": "April 26, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Scott N.",
        "rating": 5,
        "date": "May 8, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/low_real_black-warrior_3.jpg"
      },
      {
        "authorName": "Jason F.",
        "rating": 5,
        "date": "July 20, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Kevin P.",
        "rating": 4,
        "date": "March 23, 2026",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Timothy P.",
        "rating": 5,
        "date": "November 4, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Melissa Z.",
        "rating": 4,
        "date": "May 29, 2026",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Karen V.",
        "rating": 2,
        "date": "January 17, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Charles V.",
        "rating": 5,
        "date": "June 10, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "William V.",
        "rating": 5,
        "date": "August 27, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Carl K.",
        "rating": 5,
        "date": "August 7, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Michael T.",
        "rating": 5,
        "date": "February 4, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Frank D.",
        "rating": 5,
        "date": "May 22, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Edward L.",
        "rating": 5,
        "date": "December 22, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Mary J.",
        "rating": 5,
        "date": "February 8, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Patricia Z.",
        "rating": 5,
        "date": "June 10, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Jose W.",
        "rating": 5,
        "date": "February 12, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Brenda Z.",
        "rating": 5,
        "date": "May 4, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Gregory P.",
        "rating": 4,
        "date": "February 8, 2025",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Walter C.",
        "rating": 5,
        "date": "August 25, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Debra D.",
        "rating": 5,
        "date": "June 7, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Ruth L.",
        "rating": 5,
        "date": "May 14, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Charles C.",
        "rating": 5,
        "date": "February 26, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Peter N.",
        "rating": 5,
        "date": "April 9, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Sandra A.",
        "rating": 5,
        "date": "May 1, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Lisa L.",
        "rating": 5,
        "date": "April 21, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Jose L.",
        "rating": 4,
        "date": "September 18, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Carol W.",
        "rating": 5,
        "date": "October 14, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Mark H.",
        "rating": 5,
        "date": "March 14, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
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
        "authorName": "Virginia C.",
        "rating": 5,
        "date": "January 22, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Harold C.",
        "rating": 5,
        "date": "July 28, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Paul L.",
        "rating": 3,
        "date": "November 16, 2025",
        "text": "Box was completely crushed upon arrival. Luckily the parts inside were fine.",
        "reviewImage": "/images/reviews/low_real_pink-bull_2.jpg"
      },
      {
        "authorName": "Martha W.",
        "rating": 4,
        "date": "August 27, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Brian M.",
        "rating": 4,
        "date": "October 24, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Brenda T.",
        "rating": 5,
        "date": "January 12, 2025",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/real_pink-bull_1.jpg"
      },
      {
        "authorName": "Shirley K.",
        "rating": 5,
        "date": "July 7, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Walter S.",
        "rating": 5,
        "date": "June 19, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Nancy A.",
        "rating": 5,
        "date": "September 19, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/low_real_pink-bull_3.jpg"
      },
      {
        "authorName": "Joshua C.",
        "rating": 5,
        "date": "June 2, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Donna P.",
        "rating": 4,
        "date": "August 6, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Jessica P.",
        "rating": 3,
        "date": "December 10, 2025",
        "text": "The RC motor works but it's very loud and squeaky.",
        "reviewImage": "/images/reviews/real_pink-bull_2.jpg"
      },
      {
        "authorName": "Stephanie H.",
        "rating": 5,
        "date": "September 24, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/real_pink-bull_3.jpg"
      },
      {
        "authorName": "Stephen E.",
        "rating": 2,
        "date": "July 13, 2026",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "Stephanie T.",
        "rating": 5,
        "date": "April 18, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Deborah W.",
        "rating": 5,
        "date": "June 28, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast.",
        "reviewImage": "/images/reviews/low_real_pink-bull_1.jpg"
      },
      {
        "authorName": "David G.",
        "rating": 4,
        "date": "June 9, 2026",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Amy P.",
        "rating": 5,
        "date": "May 3, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Barbara P.",
        "rating": 5,
        "date": "November 5, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Diane A.",
        "rating": 5,
        "date": "January 18, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Nancy D.",
        "rating": 5,
        "date": "June 1, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Eric E.",
        "rating": 5,
        "date": "December 22, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Jerry N.",
        "rating": 5,
        "date": "May 17, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "David E.",
        "rating": 5,
        "date": "May 6, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Douglas G.",
        "rating": 5,
        "date": "April 28, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Joseph J.",
        "rating": 5,
        "date": "March 11, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Joyce P.",
        "rating": 5,
        "date": "July 5, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Kimberly L.",
        "rating": 5,
        "date": "June 6, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Cynthia L.",
        "rating": 5,
        "date": "October 20, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Brian W.",
        "rating": 5,
        "date": "January 24, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
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
        "authorName": "Jeffrey M.",
        "rating": 5,
        "date": "April 3, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/real_porsche-rsr_3.jpg"
      },
      {
        "authorName": "Paul T.",
        "rating": 4,
        "date": "February 20, 2026",
        "text": "Solid build. Wish the steering angle was a bit sharper though.",
        "reviewImage": "/images/reviews/low_real_porsche-rsr_3.jpg"
      },
      {
        "authorName": "Jason Z.",
        "rating": 5,
        "date": "April 27, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Maria V.",
        "rating": 5,
        "date": "May 14, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Brenda K.",
        "rating": 5,
        "date": "December 28, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Christopher D.",
        "rating": 5,
        "date": "April 24, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/low_real_porsche-rsr_2.jpg"
      },
      {
        "authorName": "Linda A.",
        "rating": 5,
        "date": "July 26, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Margaret E.",
        "rating": 5,
        "date": "July 8, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Harold S.",
        "rating": 4,
        "date": "March 23, 2026",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "David M.",
        "rating": 5,
        "date": "April 15, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/real_porsche-rsr_1.jpg"
      },
      {
        "authorName": "Brenda A.",
        "rating": 5,
        "date": "December 26, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Virginia Z.",
        "rating": 5,
        "date": "May 9, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Angela Z.",
        "rating": 5,
        "date": "August 16, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Sarah B.",
        "rating": 3,
        "date": "March 16, 2026",
        "text": "The gearbox is very stiff and sometimes gets stuck.",
        "reviewImage": "/images/reviews/real_porsche-rsr_2.jpg"
      },
      {
        "authorName": "James B.",
        "rating": 5,
        "date": "May 5, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Kathleen B.",
        "rating": 5,
        "date": "May 25, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Larry L.",
        "rating": 5,
        "date": "September 7, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Scott M.",
        "rating": 2,
        "date": "January 28, 2025",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "Rebecca J.",
        "rating": 4,
        "date": "March 30, 2026",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "George Z.",
        "rating": 2,
        "date": "May 29, 2025",
        "text": "Some pieces were missing from bag 3. They sent replacements but it delayed my build."
      },
      {
        "authorName": "Mary Z.",
        "rating": 5,
        "date": "November 26, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Betty K.",
        "rating": 5,
        "date": "November 13, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Sandra B.",
        "rating": 5,
        "date": "June 24, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Edward S.",
        "rating": 5,
        "date": "January 16, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "David E.",
        "rating": 5,
        "date": "January 30, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Kenneth L.",
        "rating": 4,
        "date": "July 23, 2026",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Joyce M.",
        "rating": 5,
        "date": "March 25, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Joshua H.",
        "rating": 4,
        "date": "November 28, 2025",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Maria G.",
        "rating": 5,
        "date": "March 13, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Martha R.",
        "rating": 5,
        "date": "November 13, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Sharon B.",
        "rating": 5,
        "date": "April 18, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Donna A.",
        "rating": 5,
        "date": "August 7, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Jose Z.",
        "rating": 5,
        "date": "April 24, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Michael M.",
        "rating": 5,
        "date": "April 24, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Harold T.",
        "rating": 5,
        "date": "November 4, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/low_real_porsche-rsr_1.jpg"
      },
      {
        "authorName": "Deborah V.",
        "rating": 5,
        "date": "June 28, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Jason C.",
        "rating": 5,
        "date": "October 19, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "John R.",
        "rating": 5,
        "date": "August 20, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      }
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
