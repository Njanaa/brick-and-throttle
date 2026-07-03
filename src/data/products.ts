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
      "/images/porsche-rsr.jpg",
      "/images/porsche-rsr.jpg",
      "/images/porsche-rsr.jpg",
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
        "authorName": "Christine L.",
        "rating": 5,
        "date": "January 14, 2025",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/rev_bolide_1.jpg"
      },
      {
        "authorName": "Ronald H.",
        "rating": 5,
        "date": "February 19, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Kimberly B.",
        "rating": 3,
        "date": "May 29, 2026",
        "text": "The front suspension sags a bit under the weight of the model.",
        "reviewImage": "/images/reviews/rev_lambo_2.jpg"
      },
      {
        "authorName": "Virginia V.",
        "rating": 5,
        "date": "October 2, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Stephen L.",
        "rating": 4,
        "date": "October 23, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Raymond B.",
        "rating": 5,
        "date": "March 31, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Margaret W.",
        "rating": 5,
        "date": "April 1, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Karen J.",
        "rating": 4,
        "date": "May 8, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though.",
        "reviewImage": "/images/reviews/rev_gulf_3.jpg"
      },
      {
        "authorName": "Brenda M.",
        "rating": 5,
        "date": "March 5, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Martha J.",
        "rating": 5,
        "date": "April 7, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Catherine M.",
        "rating": 2,
        "date": "August 24, 2025",
        "text": "The RC motor works but it's very loud and squeaky.",
        "reviewImage": "/images/reviews/low_rev_gulf_1.jpg"
      },
      {
        "authorName": "Jessica R.",
        "rating": 5,
        "date": "May 13, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/rev_bolide_1.jpg"
      },
      {
        "authorName": "Michael M.",
        "rating": 3,
        "date": "March 23, 2025",
        "text": "The front suspension sags a bit under the weight of the model."
      },
      {
        "authorName": "Frances E.",
        "rating": 5,
        "date": "May 31, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Jerry L.",
        "rating": 5,
        "date": "May 15, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/low_rev_bolide_1.jpg"
      },
      {
        "authorName": "Raymond V.",
        "rating": 4,
        "date": "May 30, 2026",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Ruth S.",
        "rating": 5,
        "date": "July 16, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Matthew A.",
        "rating": 5,
        "date": "January 12, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Ann H.",
        "rating": 5,
        "date": "September 3, 2025",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
      },
      {
        "authorName": "Douglas B.",
        "rating": 5,
        "date": "September 9, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/rev_gulf_1.jpg"
      },
      {
        "authorName": "Peter H.",
        "rating": 5,
        "date": "September 18, 2025",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Eric V.",
        "rating": 4,
        "date": "June 12, 2026",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Elizabeth G.",
        "rating": 5,
        "date": "April 25, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Donald C.",
        "rating": 5,
        "date": "December 15, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Sandra Z.",
        "rating": 5,
        "date": "October 22, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast.",
        "reviewImage": "/images/reviews/low_rev_lambo_2.jpg"
      },
      {
        "authorName": "Gregory G.",
        "rating": 5,
        "date": "April 27, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Robert W.",
        "rating": 5,
        "date": "July 21, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Paul S.",
        "rating": 5,
        "date": "August 31, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Robert L.",
        "rating": 5,
        "date": "May 18, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/blur_rev_bolide_1.jpg"
      },
      {
        "authorName": "Gregory H.",
        "rating": 5,
        "date": "June 3, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Sandra G.",
        "rating": 5,
        "date": "May 16, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Thomas D.",
        "rating": 5,
        "date": "September 5, 2025",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
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
      "/images/gulf-racing.jpg",
      "/images/gulf-racing.jpg",
      "/images/gulf-racing.jpg",
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
        "authorName": "Barbara T.",
        "rating": 3,
        "date": "November 7, 2025",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "Roger T.",
        "rating": 5,
        "date": "April 12, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
      },
      {
        "authorName": "Brenda F.",
        "rating": 5,
        "date": "July 16, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Larry D.",
        "rating": 5,
        "date": "April 16, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "John V.",
        "rating": 5,
        "date": "February 23, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/low_rev_lambo_1.jpg"
      },
      {
        "authorName": "Donald L.",
        "rating": 5,
        "date": "October 28, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/rev_lambo_1.jpg"
      },
      {
        "authorName": "Daniel W.",
        "rating": 5,
        "date": "February 18, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Ryan S.",
        "rating": 5,
        "date": "March 22, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Matthew B.",
        "rating": 5,
        "date": "April 14, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
      },
      {
        "authorName": "Scott A.",
        "rating": 5,
        "date": "October 21, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Anthony Z.",
        "rating": 5,
        "date": "May 7, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/low_rev_bolide_1.jpg"
      },
      {
        "authorName": "Barbara L.",
        "rating": 5,
        "date": "January 16, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/blur_rev_gulf_2.jpg"
      },
      {
        "authorName": "Gregory A.",
        "rating": 5,
        "date": "April 20, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Joyce E.",
        "rating": 5,
        "date": "December 23, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/blur_rev_gulf_2.jpg"
      },
      {
        "authorName": "Amanda A.",
        "rating": 3,
        "date": "August 21, 2025",
        "text": "I was missing two small technic pins. Had to use spares from my own collection.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Brenda Z.",
        "rating": 5,
        "date": "February 4, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/rev_lambo_1.jpg"
      },
      {
        "authorName": "Carl W.",
        "rating": 5,
        "date": "March 2, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Ronald A.",
        "rating": 4,
        "date": "May 17, 2026",
        "text": "Nice build overall. Some of the pins were a bit tight to push in.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Nancy H.",
        "rating": 5,
        "date": "May 6, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Patrick V.",
        "rating": 4,
        "date": "January 7, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Mary G.",
        "rating": 4,
        "date": "March 24, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Pamela E.",
        "rating": 5,
        "date": "June 1, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Daniel W.",
        "rating": 4,
        "date": "September 7, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in.",
        "reviewImage": "/images/reviews/low_rev_gulf_1.jpg"
      },
      {
        "authorName": "Christopher H.",
        "rating": 5,
        "date": "January 24, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Jessica P.",
        "rating": 5,
        "date": "July 26, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Steven H.",
        "rating": 5,
        "date": "January 22, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Donna H.",
        "rating": 5,
        "date": "June 7, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Laura T.",
        "rating": 4,
        "date": "June 5, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "George H.",
        "rating": 5,
        "date": "December 25, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Marie H.",
        "rating": 5,
        "date": "May 23, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Melissa S.",
        "rating": 4,
        "date": "June 4, 2025",
        "text": "Good set, but a bit repetitive during the chassis assembly.",
        "reviewImage": "/images/reviews/rev_bolide_1.jpg"
      },
      {
        "authorName": "George Z.",
        "rating": 5,
        "date": "July 14, 2026",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Anthony V.",
        "rating": 5,
        "date": "January 23, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Jeffrey W.",
        "rating": 2,
        "date": "June 17, 2025",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Linda K.",
        "rating": 5,
        "date": "April 10, 2026",
        "text": "Beautiful design. The aero features are a really cool addition.",
        "reviewImage": "/images/reviews/blur_rev_gulf_3.jpg"
      },
      {
        "authorName": "Edward L.",
        "rating": 5,
        "date": "December 28, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Pamela F.",
        "rating": 2,
        "date": "August 17, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out.",
        "reviewImage": "/images/reviews/rev_bolide_1.jpg"
      },
      {
        "authorName": "Rebecca Z.",
        "rating": 5,
        "date": "May 29, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/blur_rev_gulf_1.jpg"
      },
      {
        "authorName": "Mark K.",
        "rating": 5,
        "date": "January 7, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Steven F.",
        "rating": 5,
        "date": "November 22, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/rev_lambo_1.jpg"
      },
      {
        "authorName": "Mary A.",
        "rating": 5,
        "date": "June 10, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Raymond F.",
        "rating": 5,
        "date": "April 14, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
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
      "/images/turbo-s.jpg",
      "/images/turbo-s.jpg",
      "/images/turbo-s.jpg",
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
        "authorName": "Angela H.",
        "rating": 2,
        "date": "April 19, 2025",
        "text": "The front suspension sags a bit under the weight of the model."
      },
      {
        "authorName": "Marie P.",
        "rating": 2,
        "date": "February 1, 2025",
        "text": "The gearbox is very stiff and sometimes gets stuck."
      },
      {
        "authorName": "Nancy V.",
        "rating": 5,
        "date": "January 5, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Mary S.",
        "rating": 5,
        "date": "December 12, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Raymond E.",
        "rating": 5,
        "date": "May 20, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/blur_rev_gulf_2.jpg"
      },
      {
        "authorName": "Paul L.",
        "rating": 5,
        "date": "September 11, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Diane B.",
        "rating": 5,
        "date": "June 14, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Anthony G.",
        "rating": 4,
        "date": "April 10, 2026",
        "text": "Looks great, but the doors are a bit stiff to open.",
        "reviewImage": "/images/reviews/rev_gulf_3.jpg"
      },
      {
        "authorName": "Maria Z.",
        "rating": 4,
        "date": "November 5, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Arthur F.",
        "rating": 5,
        "date": "October 6, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Roger F.",
        "rating": 5,
        "date": "June 13, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Roger A.",
        "rating": 5,
        "date": "November 9, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/blur_rev_bolide_1.jpg"
      },
      {
        "authorName": "Rebecca C.",
        "rating": 3,
        "date": "January 6, 2026",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "Scott N.",
        "rating": 2,
        "date": "February 4, 2025",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Debra M.",
        "rating": 5,
        "date": "January 2, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Stephen A.",
        "rating": 5,
        "date": "January 18, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/low_rev_gulf_2.jpg"
      },
      {
        "authorName": "Edward M.",
        "rating": 4,
        "date": "June 16, 2026",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Virginia Z.",
        "rating": 5,
        "date": "August 7, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Sharon E.",
        "rating": 5,
        "date": "July 19, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Susan K.",
        "rating": 5,
        "date": "February 9, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Stephen K.",
        "rating": 5,
        "date": "August 1, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Margaret F.",
        "rating": 5,
        "date": "August 24, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
      },
      {
        "authorName": "Anthony W.",
        "rating": 4,
        "date": "September 7, 2025",
        "text": "Shipping was okay, took about a week and a half.",
        "reviewImage": "/images/reviews/low_rev_lambo_1.jpg"
      },
      {
        "authorName": "Michael G.",
        "rating": 5,
        "date": "April 21, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Richard T.",
        "rating": 4,
        "date": "August 22, 2025",
        "text": "Looks great, but the doors are a bit stiff to open.",
        "reviewImage": "/images/reviews/blur_rev_gulf_2.jpg"
      },
      {
        "authorName": "Sarah V.",
        "rating": 5,
        "date": "April 17, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Kevin Z.",
        "rating": 5,
        "date": "July 13, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/low_rev_bolide_1.jpg"
      },
      {
        "authorName": "George W.",
        "rating": 5,
        "date": "July 14, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Maria Z.",
        "rating": 5,
        "date": "July 19, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Kimberly V.",
        "rating": 5,
        "date": "April 30, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Lisa F.",
        "rating": 5,
        "date": "May 20, 2026",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/low_rev_gulf_2.jpg"
      },
      {
        "authorName": "Pamela P.",
        "rating": 5,
        "date": "May 10, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
      },
      {
        "authorName": "Sharon S.",
        "rating": 5,
        "date": "April 21, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/low_rev_gulf_2.jpg"
      },
      {
        "authorName": "Martha T.",
        "rating": 5,
        "date": "July 21, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Brenda S.",
        "rating": 4,
        "date": "June 28, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual.",
        "reviewImage": "/images/reviews/low_rev_lambo_2.jpg"
      },
      {
        "authorName": "Lisa R.",
        "rating": 5,
        "date": "September 15, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Henry T.",
        "rating": 5,
        "date": "April 29, 2026",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/blur_rev_bolide_1.jpg"
      },
      {
        "authorName": "Robert F.",
        "rating": 5,
        "date": "September 21, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
      },
      {
        "authorName": "Joseph H.",
        "rating": 5,
        "date": "August 8, 2025",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/blur_rev_lambo_2.jpg"
      },
      {
        "authorName": "Anna G.",
        "rating": 5,
        "date": "October 21, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/blur_rev_gulf_2.jpg"
      },
      {
        "authorName": "Sarah F.",
        "rating": 5,
        "date": "January 31, 2025",
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
      "/images/cyber-v12.jpg",
      "/images/cyber-v12.jpg",
      "/images/cyber-v12.jpg",
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
        "authorName": "David B.",
        "rating": 5,
        "date": "May 7, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Jerry Z.",
        "rating": 4,
        "date": "May 18, 2026",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Kathleen K.",
        "rating": 2,
        "date": "May 19, 2025",
        "text": "The gearbox is very stiff and sometimes gets stuck."
      },
      {
        "authorName": "Shirley H.",
        "rating": 3,
        "date": "February 28, 2026",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out.",
        "reviewImage": "/images/reviews/rev_lambo_2.jpg"
      },
      {
        "authorName": "Dennis N.",
        "rating": 5,
        "date": "June 28, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Stephanie N.",
        "rating": 5,
        "date": "June 22, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Timothy G.",
        "rating": 5,
        "date": "April 10, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Daniel W.",
        "rating": 5,
        "date": "January 9, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Joshua L.",
        "rating": 5,
        "date": "February 11, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Eric L.",
        "rating": 5,
        "date": "October 23, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Anna R.",
        "rating": 4,
        "date": "July 6, 2025",
        "text": "Overall satisfied, but the box arrived slightly dented."
      },
      {
        "authorName": "Helen W.",
        "rating": 5,
        "date": "April 15, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/rev_gulf_3.jpg"
      },
      {
        "authorName": "Brian E.",
        "rating": 5,
        "date": "January 3, 2026",
        "text": "Beautiful design. The aero features are a really cool addition.",
        "reviewImage": "/images/reviews/rev_bolide_1.jpg"
      },
      {
        "authorName": "James N.",
        "rating": 4,
        "date": "April 21, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though.",
        "reviewImage": "/images/reviews/low_rev_lambo_1.jpg"
      },
      {
        "authorName": "Martha A.",
        "rating": 2,
        "date": "May 27, 2025",
        "text": "Some pieces were missing from bag 3. They sent replacements but it delayed my build."
      },
      {
        "authorName": "Patrick C.",
        "rating": 5,
        "date": "January 7, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Kathleen M.",
        "rating": 5,
        "date": "September 2, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Gary K.",
        "rating": 5,
        "date": "December 20, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Joyce A.",
        "rating": 5,
        "date": "March 22, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Raymond G.",
        "rating": 5,
        "date": "November 28, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Harold C.",
        "rating": 5,
        "date": "March 25, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Frances T.",
        "rating": 4,
        "date": "January 9, 2026",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Scott B.",
        "rating": 5,
        "date": "August 10, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Ann P.",
        "rating": 5,
        "date": "October 13, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Dennis K.",
        "rating": 5,
        "date": "June 15, 2026",
        "text": "Beautiful design. The aero features are a really cool addition.",
        "reviewImage": "/images/reviews/rev_lambo_1.jpg"
      },
      {
        "authorName": "Karen M.",
        "rating": 5,
        "date": "December 15, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Robert W.",
        "rating": 5,
        "date": "November 6, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/low_rev_lambo_1.jpg"
      },
      {
        "authorName": "Joshua J.",
        "rating": 5,
        "date": "February 19, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/low_rev_gulf_2.jpg"
      },
      {
        "authorName": "Carolyn C.",
        "rating": 5,
        "date": "April 14, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Michelle W.",
        "rating": 5,
        "date": "August 11, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Linda N.",
        "rating": 5,
        "date": "March 28, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Ann F.",
        "rating": 5,
        "date": "May 14, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
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
      "/images/cyber-v12-gold.jpg",
      "/images/cyber-v12-gold.jpg",
      "/images/cyber-v12-gold.jpg",
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
        "authorName": "Mary M.",
        "rating": 5,
        "date": "March 5, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/low_rev_lambo_2.jpg"
      },
      {
        "authorName": "Thomas V.",
        "rating": 3,
        "date": "November 3, 2025",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "Brian V.",
        "rating": 5,
        "date": "May 19, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Ruth A.",
        "rating": 3,
        "date": "May 27, 2025",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Rebecca K.",
        "rating": 5,
        "date": "July 12, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Kimberly A.",
        "rating": 5,
        "date": "June 29, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Anna A.",
        "rating": 3,
        "date": "February 14, 2025",
        "text": "The front suspension sags a bit under the weight of the model."
      },
      {
        "authorName": "Carl A.",
        "rating": 5,
        "date": "May 23, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Gary K.",
        "rating": 4,
        "date": "July 13, 2026",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Catherine W.",
        "rating": 4,
        "date": "April 13, 2026",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Douglas N.",
        "rating": 5,
        "date": "February 17, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Gregory E.",
        "rating": 5,
        "date": "February 19, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
      },
      {
        "authorName": "Richard H.",
        "rating": 4,
        "date": "November 15, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "John W.",
        "rating": 5,
        "date": "May 15, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Roger R.",
        "rating": 5,
        "date": "December 6, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Walter S.",
        "rating": 5,
        "date": "February 20, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Carolyn R.",
        "rating": 4,
        "date": "July 27, 2026",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Mark C.",
        "rating": 5,
        "date": "February 21, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/rev_gulf_1.jpg"
      },
      {
        "authorName": "Betty T.",
        "rating": 5,
        "date": "June 3, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Jennifer M.",
        "rating": 5,
        "date": "November 26, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Charles C.",
        "rating": 5,
        "date": "March 20, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/rev_gulf_3.jpg"
      },
      {
        "authorName": "Sarah G.",
        "rating": 4,
        "date": "September 14, 2025",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Christine C.",
        "rating": 5,
        "date": "January 28, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Frances T.",
        "rating": 5,
        "date": "February 1, 2026",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Stephanie S.",
        "rating": 5,
        "date": "December 24, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Brenda W.",
        "rating": 5,
        "date": "February 11, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Mark G.",
        "rating": 5,
        "date": "September 30, 2025",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
      },
      {
        "authorName": "Edward J.",
        "rating": 5,
        "date": "July 28, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/blur_rev_bolide_1.jpg"
      },
      {
        "authorName": "Sandra M.",
        "rating": 5,
        "date": "February 10, 2026",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
      },
      {
        "authorName": "Deborah M.",
        "rating": 5,
        "date": "March 18, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Frank B.",
        "rating": 5,
        "date": "January 18, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/blur_rev_porsche_1.jpg"
      },
      {
        "authorName": "Mark A.",
        "rating": 5,
        "date": "March 9, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Gregory R.",
        "rating": 5,
        "date": "February 22, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Dorothy G.",
        "rating": 5,
        "date": "November 3, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
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
      "/images/blue-bo.jpg",
      "/images/blue-bo.jpg",
      "/images/blue-bo.jpg",
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
        "authorName": "Sarah J.",
        "rating": 5,
        "date": "April 13, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Henry B.",
        "rating": 5,
        "date": "April 13, 2026",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/rev_bolide_1.jpg"
      },
      {
        "authorName": "Ann W.",
        "rating": 5,
        "date": "November 18, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Carol B.",
        "rating": 5,
        "date": "March 25, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/low_rev_lambo_1.jpg"
      },
      {
        "authorName": "Laura J.",
        "rating": 5,
        "date": "October 10, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Roger T.",
        "rating": 5,
        "date": "October 29, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
      },
      {
        "authorName": "Ryan M.",
        "rating": 5,
        "date": "June 1, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/low_rev_gulf_2.jpg"
      },
      {
        "authorName": "Raymond D.",
        "rating": 3,
        "date": "February 15, 2026",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating.",
        "reviewImage": "/images/reviews/blur_rev_lambo_2.jpg"
      },
      {
        "authorName": "Peter H.",
        "rating": 4,
        "date": "January 19, 2026",
        "text": "Good set, but a bit repetitive during the chassis assembly."
      },
      {
        "authorName": "Ryan G.",
        "rating": 5,
        "date": "July 9, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
      },
      {
        "authorName": "Stephanie P.",
        "rating": 5,
        "date": "April 7, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/blur_rev_gulf_1.jpg"
      },
      {
        "authorName": "Helen E.",
        "rating": 4,
        "date": "February 5, 2025",
        "text": "Looks great, but the doors are a bit stiff to open.",
        "reviewImage": "/images/reviews/rev_gulf_3.jpg"
      },
      {
        "authorName": "Matthew B.",
        "rating": 2,
        "date": "February 22, 2026",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Richard R.",
        "rating": 5,
        "date": "January 1, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
      },
      {
        "authorName": "Michael C.",
        "rating": 5,
        "date": "April 19, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Joseph S.",
        "rating": 5,
        "date": "August 2, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Jennifer N.",
        "rating": 5,
        "date": "June 19, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Joseph S.",
        "rating": 5,
        "date": "July 11, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Martha K.",
        "rating": 5,
        "date": "January 21, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Maria Z.",
        "rating": 5,
        "date": "May 18, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Jennifer F.",
        "rating": 4,
        "date": "October 13, 2025",
        "text": "Looks great, but the doors are a bit stiff to open.",
        "reviewImage": "/images/reviews/rev_lambo_2.jpg"
      },
      {
        "authorName": "Janet Z.",
        "rating": 5,
        "date": "February 27, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Susan L.",
        "rating": 5,
        "date": "April 27, 2026",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Maria C.",
        "rating": 5,
        "date": "May 6, 2025",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Joyce K.",
        "rating": 5,
        "date": "June 27, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/rev_lambo_1.jpg"
      },
      {
        "authorName": "Karen P.",
        "rating": 5,
        "date": "July 29, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/rev_lambo_2.jpg"
      },
      {
        "authorName": "Joshua L.",
        "rating": 5,
        "date": "July 30, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/low_rev_gulf_1.jpg"
      },
      {
        "authorName": "Kimberly R.",
        "rating": 2,
        "date": "August 30, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Gregory B.",
        "rating": 4,
        "date": "July 29, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Harold C.",
        "rating": 5,
        "date": "May 19, 2026",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
      },
      {
        "authorName": "Anna S.",
        "rating": 5,
        "date": "February 13, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Daniel S.",
        "rating": 5,
        "date": "April 12, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/low_rev_gulf_1.jpg"
      },
      {
        "authorName": "Ruth G.",
        "rating": 4,
        "date": "August 18, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Betty F.",
        "rating": 5,
        "date": "December 22, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/blur_rev_porsche_1.jpg"
      },
      {
        "authorName": "Brenda S.",
        "rating": 2,
        "date": "March 9, 2026",
        "text": "Box was completely crushed upon arrival. Luckily the parts inside were fine."
      },
      {
        "authorName": "Steven K.",
        "rating": 5,
        "date": "July 12, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Roger W.",
        "rating": 5,
        "date": "May 18, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/rev_gulf_3.jpg"
      },
      {
        "authorName": "Raymond T.",
        "rating": 5,
        "date": "July 14, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Henry E.",
        "rating": 4,
        "date": "July 16, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Joseph Z.",
        "rating": 5,
        "date": "March 6, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Carl E.",
        "rating": 5,
        "date": "February 24, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
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
      "/images/green-bull.jpg",
      "/images/green-bull.jpg",
      "/images/green-bull.jpg",
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
        "authorName": "Arthur Z.",
        "rating": 4,
        "date": "March 11, 2026",
        "text": "Good set, but a bit repetitive during the chassis assembly.",
        "reviewImage": "/images/reviews/rev_bolide_1.jpg"
      },
      {
        "authorName": "Karen N.",
        "rating": 5,
        "date": "February 22, 2025",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/low_rev_lambo_1.jpg"
      },
      {
        "authorName": "Cynthia A.",
        "rating": 5,
        "date": "June 10, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Margaret H.",
        "rating": 5,
        "date": "September 5, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/rev_lambo_2.jpg"
      },
      {
        "authorName": "Ryan R.",
        "rating": 4,
        "date": "August 5, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
      },
      {
        "authorName": "Gary T.",
        "rating": 4,
        "date": "July 27, 2025",
        "text": "The finished car is nice, but I had a hard time distinguishing the black and dark grey pieces in the manual."
      },
      {
        "authorName": "Brenda B.",
        "rating": 5,
        "date": "July 12, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/rev_lambo_1.jpg"
      },
      {
        "authorName": "David P.",
        "rating": 5,
        "date": "July 7, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Gregory T.",
        "rating": 5,
        "date": "August 31, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Kenneth D.",
        "rating": 5,
        "date": "July 31, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing."
      },
      {
        "authorName": "Kathleen E.",
        "rating": 5,
        "date": "January 29, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Dorothy R.",
        "rating": 5,
        "date": "January 10, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Angela H.",
        "rating": 5,
        "date": "June 8, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Dorothy G.",
        "rating": 5,
        "date": "July 28, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/low_rev_gulf_2.jpg"
      },
      {
        "authorName": "Joseph L.",
        "rating": 5,
        "date": "February 28, 2025",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/blur_rev_porsche_1.jpg"
      },
      {
        "authorName": "Elizabeth N.",
        "rating": 3,
        "date": "December 27, 2025",
        "text": "The RC motor works but it's very loud and squeaky."
      },
      {
        "authorName": "Laura N.",
        "rating": 5,
        "date": "November 1, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Mark A.",
        "rating": 5,
        "date": "January 29, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Charles B.",
        "rating": 5,
        "date": "January 13, 2026",
        "text": "Beautiful design. The aero features are a really cool addition.",
        "reviewImage": "/images/reviews/blur_rev_gulf_2.jpg"
      },
      {
        "authorName": "Henry E.",
        "rating": 4,
        "date": "October 14, 2025",
        "text": "Shipping was okay, took about a week and a half.",
        "reviewImage": "/images/reviews/rev_gulf_1.jpg"
      },
      {
        "authorName": "Brian P.",
        "rating": 5,
        "date": "December 1, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Peter G.",
        "rating": 2,
        "date": "January 6, 2026",
        "text": "Some pieces were missing from bag 3. They sent replacements but it delayed my build.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Daniel Z.",
        "rating": 5,
        "date": "May 13, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Arthur N.",
        "rating": 5,
        "date": "October 2, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Jennifer G.",
        "rating": 5,
        "date": "January 13, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
      },
      {
        "authorName": "Gregory Z.",
        "rating": 5,
        "date": "June 5, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Timothy E.",
        "rating": 5,
        "date": "February 10, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Angela L.",
        "rating": 3,
        "date": "October 17, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out.",
        "reviewImage": "/images/reviews/blur_rev_gulf_3.jpg"
      },
      {
        "authorName": "Cynthia F.",
        "rating": 4,
        "date": "November 3, 2025",
        "text": "It's a nice model, but a few steps in the manual were a bit confusing."
      },
      {
        "authorName": "Roger M.",
        "rating": 5,
        "date": "June 7, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
      },
      {
        "authorName": "Michael Z.",
        "rating": 5,
        "date": "January 1, 2026",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/low_rev_gulf_1.jpg"
      },
      {
        "authorName": "George W.",
        "rating": 5,
        "date": "July 24, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Martha W.",
        "rating": 5,
        "date": "June 15, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast.",
        "reviewImage": "/images/reviews/rev_gulf_1.jpg"
      },
      {
        "authorName": "Jennifer P.",
        "rating": 5,
        "date": "March 23, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/low_rev_gulf_2.jpg"
      },
      {
        "authorName": "Shirley J.",
        "rating": 5,
        "date": "January 4, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Cynthia B.",
        "rating": 5,
        "date": "May 4, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/low_rev_gulf_3.jpg"
      },
      {
        "authorName": "Kevin S.",
        "rating": 5,
        "date": "June 15, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Carl E.",
        "rating": 5,
        "date": "September 17, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind."
      },
      {
        "authorName": "Ryan P.",
        "rating": 5,
        "date": "January 25, 2026",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/blur_rev_lambo_2.jpg"
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
      "/images/black-warrior.jpg",
      "/images/black-warrior.jpg",
      "/images/black-warrior.jpg",
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
        "authorName": "Michelle P.",
        "rating": 5,
        "date": "March 12, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
      },
      {
        "authorName": "Scott C.",
        "rating": 2,
        "date": "November 3, 2025",
        "text": "I was missing two small technic pins. Had to use spares from my own collection."
      },
      {
        "authorName": "Gary E.",
        "rating": 5,
        "date": "December 3, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Stephen K.",
        "rating": 5,
        "date": "April 6, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Arthur N.",
        "rating": 4,
        "date": "June 4, 2025",
        "text": "Good quality bricks, but the stickers were a bit tricky to align.",
        "reviewImage": "/images/reviews/rev_gulf_3.jpg"
      },
      {
        "authorName": "Frances C.",
        "rating": 5,
        "date": "September 12, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
      },
      {
        "authorName": "Elizabeth F.",
        "rating": 5,
        "date": "April 11, 2026",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/blur_rev_porsche_1.jpg"
      },
      {
        "authorName": "Nancy J.",
        "rating": 5,
        "date": "June 22, 2026",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/low_rev_gulf_3.jpg"
      },
      {
        "authorName": "Lisa J.",
        "rating": 5,
        "date": "April 5, 2026",
        "text": "Beautiful design. The aero features are a really cool addition.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
      },
      {
        "authorName": "Lisa L.",
        "rating": 4,
        "date": "February 9, 2026",
        "text": "Looks great, but the doors are a bit stiff to open."
      },
      {
        "authorName": "Deborah V.",
        "rating": 4,
        "date": "April 4, 2026",
        "text": "Overall satisfied, but the box arrived slightly dented.",
        "reviewImage": "/images/reviews/rev_lambo_2.jpg"
      },
      {
        "authorName": "Martha F.",
        "rating": 5,
        "date": "January 15, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Kevin Z.",
        "rating": 5,
        "date": "May 27, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Michael V.",
        "rating": 5,
        "date": "January 16, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/rev_gulf_3.jpg"
      },
      {
        "authorName": "Walter D.",
        "rating": 5,
        "date": "March 4, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Carolyn C.",
        "rating": 5,
        "date": "January 6, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Michael T.",
        "rating": 5,
        "date": "March 29, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/blur_rev_bolide_1.jpg"
      },
      {
        "authorName": "Catherine N.",
        "rating": 4,
        "date": "March 16, 2026",
        "text": "Nice build overall. Some of the pins were a bit tight to push in.",
        "reviewImage": "/images/reviews/blur_rev_gulf_2.jpg"
      },
      {
        "authorName": "George G.",
        "rating": 5,
        "date": "March 22, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/blur_rev_lambo_2.jpg"
      },
      {
        "authorName": "Brian G.",
        "rating": 5,
        "date": "November 6, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/blur_rev_gulf_3.jpg"
      },
      {
        "authorName": "Ruth C.",
        "rating": 2,
        "date": "June 28, 2026",
        "text": "Customer service was slow to respond when I asked for a replacement part."
      },
      {
        "authorName": "Jason T.",
        "rating": 5,
        "date": "July 13, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Ryan W.",
        "rating": 5,
        "date": "February 11, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/blur_rev_gulf_3.jpg"
      },
      {
        "authorName": "Amanda D.",
        "rating": 3,
        "date": "January 14, 2026",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Joyce N.",
        "rating": 5,
        "date": "July 22, 2026",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Timothy C.",
        "rating": 5,
        "date": "January 24, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Kathleen Z.",
        "rating": 5,
        "date": "April 17, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "George F.",
        "rating": 5,
        "date": "April 12, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/low_rev_bolide_1.jpg"
      },
      {
        "authorName": "Charles T.",
        "rating": 5,
        "date": "February 8, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Raymond H.",
        "rating": 5,
        "date": "November 19, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/low_rev_lambo_2.jpg"
      },
      {
        "authorName": "Karen J.",
        "rating": 4,
        "date": "October 1, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in."
      },
      {
        "authorName": "Janet M.",
        "rating": 5,
        "date": "August 25, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models.",
        "reviewImage": "/images/reviews/rev_bolide_1.jpg"
      },
      {
        "authorName": "Andrew G.",
        "rating": 5,
        "date": "November 15, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Christopher J.",
        "rating": 5,
        "date": "April 13, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/low_rev_lambo_1.jpg"
      },
      {
        "authorName": "Amy E.",
        "rating": 5,
        "date": "August 12, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/low_rev_gulf_1.jpg"
      },
      {
        "authorName": "Arthur V.",
        "rating": 5,
        "date": "December 2, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Rebecca J.",
        "rating": 5,
        "date": "September 14, 2025",
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
      "/images/pink-bull.jpg",
      "/images/pink-bull.jpg",
      "/images/pink-bull.jpg",
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
        "authorName": "Susan L.",
        "rating": 5,
        "date": "March 5, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand."
      },
      {
        "authorName": "Catherine G.",
        "rating": 5,
        "date": "April 26, 2026",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/blur_rev_lambo_2.jpg"
      },
      {
        "authorName": "Angela D.",
        "rating": 5,
        "date": "January 11, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Nancy R.",
        "rating": 5,
        "date": "November 12, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Barbara C.",
        "rating": 5,
        "date": "June 11, 2026",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/blur_rev_gulf_3.jpg"
      },
      {
        "authorName": "Elizabeth E.",
        "rating": 5,
        "date": "August 3, 2025",
        "text": "Instructions were clear and the pieces fit together snugly.",
        "reviewImage": "/images/reviews/rev_gulf_3.jpg"
      },
      {
        "authorName": "Susan S.",
        "rating": 5,
        "date": "August 19, 2025",
        "text": "Five stars! The finished model is huge and very heavy."
      },
      {
        "authorName": "Margaret A.",
        "rating": 4,
        "date": "July 1, 2025",
        "text": "Nice build overall. Some of the pins were a bit tight to push in.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Kenneth W.",
        "rating": 5,
        "date": "April 14, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Edward J.",
        "rating": 4,
        "date": "September 16, 2025",
        "text": "Solid build. Wish the steering angle was a bit sharper though."
      },
      {
        "authorName": "Ryan B.",
        "rating": 3,
        "date": "February 18, 2026",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating.",
        "reviewImage": "/images/reviews/low_rev_lambo_2.jpg"
      },
      {
        "authorName": "Debra D.",
        "rating": 5,
        "date": "August 7, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Thomas T.",
        "rating": 4,
        "date": "February 9, 2025",
        "text": "Decent kit. The motor is fun but drains the battery fairly quickly."
      },
      {
        "authorName": "Diane J.",
        "rating": 5,
        "date": "June 23, 2025",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/rev_lambo_2.jpg"
      },
      {
        "authorName": "Angela R.",
        "rating": 5,
        "date": "October 26, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Shirley F.",
        "rating": 5,
        "date": "September 11, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/rev_lambo_1.jpg"
      },
      {
        "authorName": "Ryan G.",
        "rating": 5,
        "date": "May 15, 2026",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "George F.",
        "rating": 5,
        "date": "February 8, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "John M.",
        "rating": 2,
        "date": "August 22, 2025",
        "text": "Box was completely crushed upon arrival. Luckily the parts inside were fine."
      },
      {
        "authorName": "Anthony N.",
        "rating": 5,
        "date": "June 24, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Kevin V.",
        "rating": 5,
        "date": "June 21, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Donna H.",
        "rating": 5,
        "date": "March 13, 2025",
        "text": "Five stars! The finished model is huge and very heavy.",
        "reviewImage": "/images/reviews/blur_rev_gulf_3.jpg"
      },
      {
        "authorName": "Jennifer C.",
        "rating": 5,
        "date": "July 17, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Mary Z.",
        "rating": 4,
        "date": "September 16, 2025",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Laura R.",
        "rating": 5,
        "date": "July 15, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Diane K.",
        "rating": 5,
        "date": "September 28, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Mark S.",
        "rating": 5,
        "date": "February 13, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Robert V.",
        "rating": 5,
        "date": "July 21, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
      },
      {
        "authorName": "Ann L.",
        "rating": 5,
        "date": "May 16, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/rev_gulf_1.jpg"
      },
      {
        "authorName": "Amy D.",
        "rating": 5,
        "date": "October 22, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "James F.",
        "rating": 4,
        "date": "July 19, 2026",
        "text": "Looks great, but the doors are a bit stiff to open.",
        "reviewImage": "/images/reviews/low_rev_gulf_1.jpg"
      },
      {
        "authorName": "Diane N.",
        "rating": 5,
        "date": "October 1, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch."
      },
      {
        "authorName": "Daniel Z.",
        "rating": 5,
        "date": "January 29, 2025",
        "text": "Amazing value for the price. The suspension is fully functional."
      },
      {
        "authorName": "Sarah G.",
        "rating": 5,
        "date": "August 7, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Ann H.",
        "rating": 5,
        "date": "February 25, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/blur_rev_lambo_1.jpg"
      },
      {
        "authorName": "Janet B.",
        "rating": 3,
        "date": "April 12, 2025",
        "text": "Not a fan of how the rear spoiler attaches, it feels a bit flimsy."
      },
      {
        "authorName": "Kathleen C.",
        "rating": 5,
        "date": "April 12, 2026",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Cynthia P.",
        "rating": 5,
        "date": "July 4, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Henry Z.",
        "rating": 5,
        "date": "August 17, 2025",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/low_rev_gulf_1.jpg"
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
      "/images/display-box.jpg",
      "/images/display-box.jpg",
      "/images/display-box.jpg",
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
        "authorName": "Richard B.",
        "rating": 5,
        "date": "October 11, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/low_rev_gulf_3.jpg"
      },
      {
        "authorName": "Marie G.",
        "rating": 2,
        "date": "December 24, 2025",
        "text": "Instructions had a misprint on page 42, took me an hour to figure it out."
      },
      {
        "authorName": "Gregory K.",
        "rating": 3,
        "date": "May 5, 2026",
        "text": "Shipping took almost 3 weeks! The model is okay but the delay was frustrating."
      },
      {
        "authorName": "Margaret S.",
        "rating": 5,
        "date": "October 30, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Carol M.",
        "rating": 4,
        "date": "February 5, 2026",
        "text": "Shipping was okay, took about a week and a half."
      },
      {
        "authorName": "Margaret M.",
        "rating": 5,
        "date": "February 4, 2025",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Betty H.",
        "rating": 5,
        "date": "October 20, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price."
      },
      {
        "authorName": "Steven B.",
        "rating": 4,
        "date": "July 7, 2025",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Melissa J.",
        "rating": 5,
        "date": "December 15, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "Elizabeth N.",
        "rating": 5,
        "date": "April 3, 2026",
        "text": "My son loved building this over the weekend. Great alternative to the name brand.",
        "reviewImage": "/images/reviews/rev_gulf_2.jpg"
      },
      {
        "authorName": "David W.",
        "rating": 5,
        "date": "September 29, 2025",
        "text": "Instructions were clear and the pieces fit together snugly."
      },
      {
        "authorName": "John E.",
        "rating": 4,
        "date": "March 1, 2026",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Karen V.",
        "rating": 4,
        "date": "May 25, 2025",
        "text": "Good quality bricks, but the stickers were a bit tricky to align."
      },
      {
        "authorName": "Amanda G.",
        "rating": 5,
        "date": "November 9, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site.",
        "reviewImage": "/images/reviews/rev_lambo_1.jpg"
      },
      {
        "authorName": "Margaret W.",
        "rating": 5,
        "date": "March 25, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Daniel P.",
        "rating": 5,
        "date": "October 15, 2025",
        "text": "Looks stunning on my shelf. I'll be buying more from this site."
      },
      {
        "authorName": "Charles F.",
        "rating": 5,
        "date": "April 1, 2025",
        "text": "Very fast shipping. The box was in perfect condition and the build is amazing.",
        "reviewImage": "/images/reviews/rev_lambo_2.jpg"
      },
      {
        "authorName": "Cynthia A.",
        "rating": 5,
        "date": "January 18, 2026",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      },
      {
        "authorName": "Linda Z.",
        "rating": 5,
        "date": "March 31, 2025",
        "text": "Best set I've ever built. The RC features alone make it worth the price.",
        "reviewImage": "/images/reviews/rev_lambo_2.jpg"
      },
      {
        "authorName": "Joshua F.",
        "rating": 5,
        "date": "January 13, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Ruth D.",
        "rating": 5,
        "date": "June 7, 2025",
        "text": "The color is so vibrant. Everything clicked together perfectly."
      },
      {
        "authorName": "Robert P.",
        "rating": 5,
        "date": "December 13, 2025",
        "text": "Highly detailed! The gearbox actually works which blew my mind.",
        "reviewImage": "/images/reviews/blur_rev_lambo_2.jpg"
      },
      {
        "authorName": "Amanda E.",
        "rating": 5,
        "date": "July 17, 2026",
        "text": "Perfect for display. The moving engine pistons are a really nice touch.",
        "reviewImage": "/images/reviews/rev_lambo_2.jpg"
      },
      {
        "authorName": "Elizabeth R.",
        "rating": 5,
        "date": "August 3, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it.",
        "reviewImage": "/images/reviews/blur_rev_lambo_2.jpg"
      },
      {
        "authorName": "John D.",
        "rating": 5,
        "date": "December 18, 2025",
        "text": "Absolutely incredible build. Took me a few days, but totally worth it."
      },
      {
        "authorName": "Sharon T.",
        "rating": 5,
        "date": "June 29, 2025",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Karen S.",
        "rating": 3,
        "date": "July 20, 2026",
        "text": "The gearbox is very stiff and sometimes gets stuck.",
        "reviewImage": "/images/reviews/rev_porsche_1.jpg"
      },
      {
        "authorName": "Rebecca L.",
        "rating": 5,
        "date": "April 15, 2025",
        "text": "Amazing value for the price. The suspension is fully functional.",
        "reviewImage": "/images/reviews/low_rev_porsche_1.jpg"
      },
      {
        "authorName": "Jason S.",
        "rating": 5,
        "date": "February 9, 2026",
        "text": "Beautiful design. The aero features are a really cool addition."
      },
      {
        "authorName": "Jessica W.",
        "rating": 5,
        "date": "December 25, 2025",
        "text": "I'm a seasoned builder and this challenged me in a good way."
      },
      {
        "authorName": "Jason V.",
        "rating": 5,
        "date": "July 18, 2026",
        "text": "Great quality bricks. The RC motors work perfectly and are very fast."
      },
      {
        "authorName": "Kimberly C.",
        "rating": 5,
        "date": "June 22, 2025",
        "text": "I was skeptical but the quality is 10/10. Will definitely order the other models."
      }
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
