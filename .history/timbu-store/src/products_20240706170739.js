import brantiLipstick from "./public/inventory-images/branti-lipstick.png";
// import jamiFaceCream from "./public/inventory-images/jami-face-cream.png";
// import koraBodyWash from "./public/inventory-images/kora-body-wash.png";
// import lanoSerum from "./public/inventory-images/lano-serum.png";
// import limLipGloss from "./public/inventory-images/lim-lip-gloss.png";
// import lipBalm from "./public/inventory-images/lip-balm.png";
// import loraStarterKit from "./public/inventory-images/lora-starter-kit.png";
// import oraFaceCream from "./public/inventory-images/ora-face-cream.png";
// import roladanKit from "./public/inventory-images/roladan-kit.png";
// import sekinSerum from "./public/inventory-images/sekin-serum.png";
// import sekinShowerGel from "./public/inventory-images/sekin-shower-gel.png";
// import sekineMakeupKit from "./public/inventory-images/sekine-makeup-kit.png";

export const inventory = [
  {
    productName: "Branti Lipstick",
    price: 19.99,
    discountPrice: 15.99,
    rating: 4.5,
    imageUrl: brantiLipstick,
    aboutProduct: "Long-lasting, vibrant color lipstick for all-day wear.",
    howToUse:
      "Apply to clean, dry lips. For best results, use with a lip liner.",
    reviews: [
      { user: "Emily", comment: "Love the color payoff!", rating: 5 },
      {
        user: "Sarah",
        comment: "Stays on all day, but a bit drying.",
        rating: 4,
      },
    ],
  },
  {
    productName: "Jami Face Cream",
    price: 29.99,
    discountPrice: 24.99,
    rating: 4.7,
    imageUrl: jamiFaceCream,
    aboutProduct: "Hydrating face cream suitable for all skin types.",
    howToUse: "Apply a small amount to clean face and neck, morning and night.",
    reviews: [
      {
        user: "Mike",
        comment: "Really improved my skin's texture!",
        rating: 5,
      },
      {
        user: "Laura",
        comment: "Great moisturizer, not too heavy.",
        rating: 4.5,
      },
    ],
  },
  {
    productName: "Kora Body Wash",
    price: 14.99,
    discountPrice: 12.99,
    rating: 4.3,
    imageUrl: koraBodyWash,
    aboutProduct: "Gentle, nourishing body wash with natural ingredients.",
    howToUse: "Lather on wet skin, rinse thoroughly.",
    reviews: [
      {
        user: "Alex",
        comment: "Smells amazing and leaves skin soft.",
        rating: 4.5,
      },
      { user: "Taylor", comment: "Good product, but a bit pricey.", rating: 4 },
    ],
  },
  {
    productName: "Lano Serum",
    price: 39.99,
    discountPrice: 34.99,
    rating: 4.8,
    imageUrl: lanoSerum,
    aboutProduct:
      "Powerful anti-aging serum with concentrated active ingredients.",
    howToUse: "Apply 2-3 drops to clean face and neck before moisturizer.",
    reviews: [
      {
        user: "Rachel",
        comment: "Saw visible results in just two weeks!",
        rating: 5,
      },
      {
        user: "John",
        comment: "A bit expensive, but worth every penny.",
        rating: 4.5,
      },
    ],
  },
  {
    productName: "Lim Lip Gloss",
    price: 15.99,
    discountPrice: 13.99,
    rating: 4.2,
    imageUrl: limLipGloss,
    aboutProduct: "Shiny, non-sticky lip gloss for a perfect pout.",
    howToUse: "Apply to lips alone or over lipstick for added shine.",
    reviews: [
      {
        user: "Jessica",
        comment: "Love the shine without the stickiness!",
        rating: 4.5,
      },
      {
        user: "Mia",
        comment: "Nice product, but doesn't last very long.",
        rating: 4,
      },
    ],
  },
  {
    productName: "Lip Balm",
    price: 7.99,
    discountPrice: 6.99,
    rating: 4.6,
    imageUrl: lipBalm,
    aboutProduct: "Moisturizing lip balm to keep lips soft and hydrated.",
    howToUse: "Apply liberally to lips as needed throughout the day.",
    reviews: [
      { user: "David", comment: "Best lip balm I've ever used!", rating: 5 },
      {
        user: "Emma",
        comment: "Very moisturizing, but wish it had SPF.",
        rating: 4,
      },
    ],
  },
  {
    productName: "Lora Starter Kit",
    price: 49.99,
    discountPrice: 39.99,
    rating: 4.4,
    imageUrl: loraStarterKit,
    aboutProduct: "Complete skincare starter kit for beginners.",
    howToUse: "Follow the included guide for a step-by-step skincare routine.",
    reviews: [
      {
        user: "Sophia",
        comment: "Great introduction to skincare!",
        rating: 4.5,
      },
      {
        user: "Ethan",
        comment: "Good value, but some products didn't work for me.",
        rating: 4,
      },
    ],
  },
  {
    productName: "Ora Face Cream",
    price: 34.99,
    discountPrice: 29.99,
    rating: 4.7,
    imageUrl: oraFaceCream,
    aboutProduct: "Rich, nourishing face cream for dry to normal skin.",
    howToUse: "Apply a dime-sized amount to face and neck, morning and night.",
    reviews: [
      {
        user: "Olivia",
        comment: "My skin feels so soft and hydrated!",
        rating: 5,
      },
      {
        user: "Liam",
        comment: "Great for winter, a bit heavy for summer.",
        rating: 4.5,
      },
    ],
  },
  {
    productName: "Roladan Kit",
    price: 59.99,
    discountPrice: 49.99,
    rating: 4.5,
    imageUrl: roladanKit,
    aboutProduct: "Professional-grade skincare kit for advanced users.",
    howToUse: "Follow the detailed instructions for each product in the kit.",
    reviews: [
      { user: "Ava", comment: "Transformed my skincare routine!", rating: 5 },
      {
        user: "Noah",
        comment: "Excellent products, but takes time to see results.",
        rating: 4,
      },
    ],
  },
  {
    productName: "Sekin Serum",
    price: 44.99,
    discountPrice: 39.99,
    rating: 4.6,
    imageUrl: sekinSerum,
    aboutProduct: "Lightweight, fast-absorbing serum for all skin types.",
    howToUse: "Apply 1-2 pumps to clean face before moisturizer.",
    reviews: [
      {
        user: "Isabella",
        comment: "My skin looks so much brighter!",
        rating: 5,
      },
      {
        user: "James",
        comment: "Good serum, but the scent is a bit strong.",
        rating: 4,
      },
    ],
  },
  {
    productName: "Sekin Shower Gel",
    price: 12.99,
    discountPrice: 10.99,
    rating: 4.3,
    imageUrl: sekinShowerGel,
    aboutProduct: "Refreshing shower gel with a luxurious lather.",
    howToUse: "Apply to wet skin, lather, and rinse thoroughly.",
    reviews: [
      {
        user: "Sophie",
        comment: "Love the scent, leaves skin feeling clean!",
        rating: 4.5,
      },
      {
        user: "Daniel",
        comment: "Nice product, but not very moisturizing.",
        rating: 4,
      },
    ],
  },
  {
    productName: "Sekine Makeup Kit",
    price: 79.99,
    discountPrice: 69.99,
    rating: 4.8,
    imageUrl: sekineMakeupKit,
    aboutProduct:
      "Comprehensive makeup kit with essential products for a full face.",
    howToUse: "Follow the included guide for application tips and techniques.",
    reviews: [
      {
        user: "Charlotte",
        comment: "Amazing quality products, great value!",
        rating: 5,
      },
      {
        user: "William",
        comment: "Bought for my wife, she loves it!",
        rating: 4.5,
      },
    ],
  },
];
