// Sourced directly from Fish Bazar API (https://api.selfeb.com)
const categoriesData = [
  {
    "id": "68a443a1e64b3cb40732dc40",
    "name": "Steaks and Fillet",
    "logo": "https://cdnnew.selfeb.com/images/view/selfeb-category-image-steaks-fillet-1755595635376"
  },
  {
    "id": "6893b72178c11056a038e427",
    "name": "Shrimp  (চিংড়ি)",
    "logo": "https://cdnnew.selfeb.com/images/view/selfeb-category-image-shrimp-1757197037563"
  },
  {
    "id": "6893b30278c11056a038b14e",
    "name": "Seafood (সামুদ্রিক মাছ)",
    "logo": "https://cdnnew.selfeb.com/images/view/selfeb-category-image-seafood-1754510901875"
  },
  {
    "id": "6893b01a78c11056a038896f",
    "name": "Combo Pack",
    "logo": "https://cdnnew.selfeb.com/images/view/selfeb-category-image-combo-pack-1754509368620"
  },
  {
    "id": "6893a80378c11056a0381438",
    "name": "Crab and Others (কাকড়া এবং অন্যান্য)",
    "logo": "https://cdnnew.selfeb.com/images/view/selfeb-category-image-crab-others-1754507167643"
  },
  {
    "id": "6893a32578c11056a037d205",
    "name": "Fish Egg  (মাছের ডিম)",
    "logo": "https://cdnnew.selfeb.com/images/view/selfeb-category-image-fish-egg-1754506433001"
  },
  {
    "id": "6868d9c7d99d6345bdaa44f5",
    "name": "Fresh Water Fish  (আস্ত মাছ)",
    "logo": "https://cdnnew.selfeb.com/images/view/selfeb-category-image-whole-fish-1754506453711"
  },
  {
    "id": "6817732bcebbe65baee5cbc0",
    "name": "Meat (মাংস)",
    "logo": "https://cdnnew.selfeb.com/images/view/images_category_image__1746367251742.png"
  },
  {
    "id": "681772c8cebbe65baee5b552",
    "name": "Dried Fish (শুটকি)",
    "logo": "https://cdnnew.selfeb.com/images/view/images_category_image_Dried_Fish_1746367174124.png"
  },
  {
    "id": "681765aacebbe65baee3e2f3",
    "name": "Special Items",
    "logo": "https://cdnnew.selfeb.com/images/view/images_category_image_Special_Items_1746365713642.png"
  }
];
const productsData = [
  {
    "id": "6978c8629cc90ee49616f7c8",
    "name": "Premium Combo-4",
    "categoryIds": [
      "6893b01a78c11056a038896f"
    ],
    "categoryNames": [
      "Combo Pack"
    ],
    "weight": "Big ",
    "price": 3520,
    "oldPrice": 3520,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-a7a45051-77d8-476e-b347-5aec458c8582-1769523231652.jpg",
    "isSuperOffer": false
  },
  {
    "id": "69645916e2eebfb56f534c83",
    "name": "Premium Combo-1",
    "categoryIds": [
      "6893b01a78c11056a038896f"
    ],
    "categoryNames": [
      "Combo Pack"
    ],
    "weight": "Big ",
    "price": 4350,
    "oldPrice": 4350,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-ae08cad8-ca5a-4740-85f4-095c38b1bb9a-1768184069754.jpg",
    "isSuperOffer": false
  },
  {
    "id": "692f1970efed4e4bfe1a1ecc",
    "name": "River Chitol Fish 2kg  (নদীর চিতল মাছ ১পিস ২কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1 piece",
    "price": 1560,
    "oldPrice": 1560,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-color-defaultcolor-1764694323399",
    "isSuperOffer": false
  },
  {
    "id": "68f4b496af6d536487b17940",
    "name": "River Fish 1pcs 1kg. curry cut  নদীর চিতল মাছ ১পিস ১কেজি",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 780,
    "oldPrice": 780,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-fish-curry-cut-1kg-1760867461952.-Fish-Bazar-Steaks-and-Fillet",
    "isSuperOffer": false
  },
  {
    "id": "68f4b3cfaf6d536487b15e7b",
    "name": "Kathali Chingri  500gm - কাঠালি চিংড়ি",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "500gm",
    "price": 500,
    "oldPrice": 500,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-kathali-shrimp-whole-big-size-500gm-fish-bazar-shrimp-1760867276688",
    "isSuperOffer": false
  },
  {
    "id": "68f4b37caf6d536487b15032",
    "name": "Kathali Shrimp (whole) medium size 1kg - কাঠালি চিংড়ি",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-kathali-shrimp-whole-medium-size-1kg-fish-bazar-shrimp-1760867189033",
    "isSuperOffer": false
  },
  {
    "id": "68f4b2dfaf6d536487b13fc7",
    "name": "Kathali Shrimp (whole) big size 1kg - কাঠালি চিংড়ি",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1kg",
    "price": 1090,
    "oldPrice": 1090,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-kathali-shrimp-whole-big-size-1kg-fish-bazar-shrimp-1760867033929",
    "isSuperOffer": false
  },
  {
    "id": "68e78fb6a697bc7bb05413aa",
    "name": "Deshi Patihash  1.8-2kg, 1pcs (clean & dressed)",
    "categoryIds": [
      "6817732bcebbe65baee5cbc0"
    ],
    "categoryNames": [
      "Meat (মাংস)"
    ],
    "weight": "1 piece",
    "price": 1200,
    "oldPrice": 1200,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-patihash-meat-clean-and-dressed-net-weight-1kg-1760006061234.-(-)-Fish-Bazar-Meat-()",
    "isSuperOffer": false
  },
  {
    "id": "68e78f2fa697bc7bb0540aaf",
    "name": "Chinahash 3kg+ 1pcs (clean &dressed) চিনাহাঁস ",
    "categoryIds": [
      "6817732bcebbe65baee5cbc0"
    ],
    "categoryNames": [
      "Meat (মাংস)"
    ],
    "weight": "1 piece",
    "price": 2070,
    "oldPrice": 2070,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chinahash-meat-clean-anddressed-net-weight-1gm-1760005928261.-(-)-Fish-Bazar-Meat-()",
    "isSuperOffer": false
  },
  {
    "id": "68e78e42a697bc7bb053e3bb",
    "name": "Deshi Patihash 500gm meat (Curry Cut) ",
    "categoryIds": [
      "6817732bcebbe65baee5cbc0"
    ],
    "categoryNames": [
      "Meat (মাংস)"
    ],
    "weight": "500gm",
    "price": 470,
    "oldPrice": 470,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chinahash-meat-curry-cut-net-weight-500gm-1760005695550.-(-)-Fish-Bazar-Meat-()",
    "isSuperOffer": false
  },
  {
    "id": "68e78d3f6deb1e74c5675862",
    "name": "Deshi Patihash 1.8-2kg, 1pcs (Curry Cut)  500gm. ",
    "categoryIds": [
      "6817732bcebbe65baee5cbc0"
    ],
    "categoryNames": [
      "Meat (মাংস)"
    ],
    "weight": "1 piece",
    "price": 1200,
    "oldPrice": 1200,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-patihash-meat-curry-cut-net-weight-500gm-1760005407082.-(-)-Fish-Bazar-Meat-()",
    "isSuperOffer": false
  },
  {
    "id": "68e78b4e9eccc36161534c11",
    "name": "Rajhash Meat 1kg (Curry Cut) রাজহাঁসের মাংস",
    "categoryIds": [
      "6817732bcebbe65baee5cbc0"
    ],
    "categoryNames": [
      "Meat (মাংস)"
    ],
    "weight": "1 kg",
    "price": 1080,
    "oldPrice": 1080,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-rajhash-meat-curry-cut-net-weight-500gm-1760004936454.-(-)-Fish-Bazar-Meat-()",
    "isSuperOffer": false
  },
  {
    "id": "68e778368ed743209f6647b9",
    "name": "Talapia Fish Clean & Dressed - (Size: 2pcs kg. Net Weight: 1kg. (তেলাপিয়া মাছ)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 440,
    "oldPrice": 440,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-talapia-fish-clean-and-dressed-size-2pcs-kg-net-weight-1kg-1760000049744.-(-)-Fish-Bazar-Steaks-and-Fillet",
    "isSuperOffer": false
  },
  {
    "id": "68e777a08ed743209f663e57",
    "name": "Talapia Fish Clean & Dressed - (Size:3-4pcs kg. Net Weight: 1kg. (তেলাপিয়া মাছ)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1 kg",
    "price": 380,
    "oldPrice": 380,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759999641169",
    "isSuperOffer": false
  },
  {
    "id": "68e775fa8ed743209f66154e",
    "name": "Sea Suri Fish (steaks include head pieces) Net Weight: 1kg. (সুরি মাছ)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Steaks and Fillet",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 650,
    "oldPrice": 650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759996732889",
    "isSuperOffer": false
  },
  {
    "id": "68e76b1c41d2b3849c981ff9",
    "name": "Pangash Fish (whole) Size: 1-3kg. Weight: 1kg. (পাঙ্গাশ মাছ ফার্ম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 290,
    "oldPrice": 290,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759996522050",
    "isSuperOffer": false
  },
  {
    "id": "68e76a3b41d2b3849c980385",
    "name": "Sea Chapa Shurma Fish (whole) Size: 1-4kg. Weight: 1kg. (সামুদ্রিক চ্যাপা সুরমা)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 490,
    "oldPrice": 490,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-chapa-shurma-fish-whole-size-1-4kg-weight-1kg-1759996472883.-(-)-Fish-Bazar-Seafood-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e7699741d2b3849c97f380",
    "name": "Sea Chapa Shurma Fish (whole) Size: 2-3pcs kg. Weight: 1kg. (সামুদ্রিক চ্যাপা সুরমা)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 450,
    "oldPrice": 450,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-chapa-shurma-fish-whole-size-2-3pcs-kg-weight-1kg-1759996302226.-(-)-Fish-Bazar-Seafood-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e6bec841d2b3849c8c6811",
    "name": "Chaga Shrimp (whole) - Size: Big.  Net weight: 500gm. (চাগা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "500gm",
    "price": 470,
    "oldPrice": 470,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chaga-shrimp-whole-size-big-net-weight-500gm-1759952582653.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6be8041d2b3849c8c62ef",
    "name": "Chaga Shrimp (whole) - Size: Big.  Net weight: 1kg. (চাগা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1kg",
    "price": 940,
    "oldPrice": 940,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chaga-shrimp-whole-size-big-net-weight-1kg-1759952509182.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6bd9b41d2b3849c8c4e5b",
    "name": "Chaga Shrimp (whole) - চাগা চিংড়ি (মিডিয়াম ৫০০গ্রাম)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "500gm",
    "price": 440,
    "oldPrice": 440,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chaga-shrimp-whole-fish-bazar-shrimp-1759952232354",
    "isSuperOffer": false
  },
  {
    "id": "68e6bc1641d2b3849c8c359e",
    "name": "River Dima Shrimp (whole) ডিমা চিংড়ি (৫০০গ্রাম)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "500gm",
    "price": 790,
    "oldPrice": 790,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-dima-shrimp-whole-fish-bazar-shrimp-1759951892170",
    "isSuperOffer": false
  },
  {
    "id": "68e6bb5f41d2b3849c8c2aad",
    "name": "Chali Shrimp (whole) - চালি চিংড়ি (৫০০গ্রাম)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "500gm",
    "price": 390,
    "oldPrice": 390,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chali-shrimp-whole-fish-bazar-shrimp-1759951702577",
    "isSuperOffer": false
  },
  {
    "id": "68e6ba9b41d2b3849c8c156b",
    "name": "Golda Shrimp (whole) Size: 28-32pcs kg. Net weight: 500gm. (গলদা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "500gm",
    "price": 540,
    "oldPrice": 540,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-golda-shrimp-whole-size-28-32pcs-kg-net-weight-500gm-1759951503854.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6ba3c41d2b3849c8c1009",
    "name": "Golda Shrimp (whole) Size: 28-32pcs kg. Net weight: 1kg. (গলদা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1 kg",
    "price": 1080,
    "oldPrice": 1080,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-golda-shrimp-whole-size-28-32pcs-kg-net-weight-1kg-1759951410810.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6b9a441d2b3849c8c0197",
    "name": "Golda Shrimp (whole) Size: 18-22pcs kg. Net weight: 500gm. (গলদা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "500gm",
    "price": 650,
    "oldPrice": 650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-golda-shrimp-whole-size-18-22pcs-kg-net-weight-500gm-1759951262005.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6b94041d2b3849c8bf0ed",
    "name": "Golda Shrimp (whole) Size: 18-22pcs kg. Net weight: 1kg. (গলদা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1kg",
    "price": 1290,
    "oldPrice": 1290,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-golda-shrimp-whole-size-18-22pcs-kg-net-weight-1kg-1759951165275.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6b84741d2b3849c8be1f1",
    "name": "Golda Shrimp (whole) Size: 10-12pcs kg. Net weight: 500gm. (গলদা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "500gm",
    "price": 790,
    "oldPrice": 790,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-golda-shrimp-whole-size-10-12pcs-kg-net-weight-500gm-1759950897233.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6b7de41d2b3849c8bd82e",
    "name": "Golda Shrimp (whole) Size: 10-12pcs kg. Net weight: 1kg. (গলদা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1kg",
    "price": 1580,
    "oldPrice": 1580,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759950647924",
    "isSuperOffer": false
  },
  {
    "id": "68e6b56741d2b3849c8b9e4d",
    "name": "Bagda Shrimp Clean & Dressed (head included) Size: Small. Net Weight: 1kg. (বাগদা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1 kg",
    "price": 1080,
    "oldPrice": 1080,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bagda-shrimp-clean-and-dressed-head-included-size-small-net-weight-1kg-1759950180043.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6b4fb41d2b3849c8b95e3",
    "name": "Bagda Shrimp Clean & Dressed (head included) Size: Small. Net Weight 500gm. (বাগদা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "500gm",
    "price": 540,
    "oldPrice": 540,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bagda-shrimp-clean-and-dressed-head-included-size-small-net-weight-500gm-1759950065156.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6b48d41d2b3849c8b899e",
    "name": "Bagda Shrimp Clean & Dressed (head included) Size: 18-24pcs kg. Net Weight: 1kg. (বাগদা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1kg",
    "price": 1480,
    "oldPrice": 1480,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bagda-shrimp-clean-and-dressed-head-included-size-18-24pcs-kg-net-weight-1kg-1759949962314.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6b40c41d2b3849c8b7f69",
    "name": "Bagda Shrimp Clean & Dressed (head included) Size: 18-24pcs kg. Net Weight 500gm. (বাগদা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "500gm",
    "price": 740,
    "oldPrice": 740,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bagda-shrimp-clean-and-dressed-head-included-size-18-24pcs-kg-net-weight-500gm-1759949829489.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6b3a441d2b3849c8b7513",
    "name": "Bagda Shrimp Clean & Dressed (head included) Size: 28-32pcs kg. Net Weight: 1kg. (বাগদা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1kg",
    "price": 1290,
    "oldPrice": 1290,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bagda-shrimp-clean-and-dressed-head-included-size-28-32pcs-kg-net-weight-1kg-1759949729791.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6b34241d2b3849c8b6e09",
    "name": "Bagda Shrimp Clean & Dressed (head included) Size: 28-32pcs kg. Net Weight 500gm. (বাগদা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "500gm",
    "price": 650,
    "oldPrice": 650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bagda-shrimp-clean-and-dressed-head-included-size-28-32pcs-kg-net-weight-500gm-1759949629902.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6b20a41d2b3849c8b558b",
    "name": "Bagda Shrimp (whole) Size: 18-24pcs kg. Net Weight 500gm. (বাগদা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "500gm",
    "price": 630,
    "oldPrice": 630,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bagda-shrimp-whole-size-18-24pcs-kg-net-weight-500gm-1759949319844.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6b19e41d2b3849c8b4e47",
    "name": "Bagda Shrimp (whole) Size: 28-32pcs kg. Net Weight 500gm. (বাগদা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "500gm",
    "price": 580,
    "oldPrice": 580,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bagda-shrimp-whole-size-28-32pcs-kg-net-weight-500gm-1759949203178.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6b0a141d2b3849c8b38a7",
    "name": "Bagda Shrimp (whole) Size: Small - Net Weight 500gm. (বাগদা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "500gm",
    "price": 470,
    "oldPrice": 470,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bagda-shrimp-whole-size-small-net-weight-500gm-1759948954943.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6b02c41d2b3849c8b2ec6",
    "name": "Bagda Shrimp (whole) Size: Small - Net Weight 1kg. (বাগদা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1kg",
    "price": 940,
    "oldPrice": 940,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bagda-shrimp-whole-size-small-net-weight-1kg-1759948838071.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6aefe41d2b3849c8b0ee6",
    "name": "Horina Shrimp Peeled - হরিনা চিংড়ি (৫০০গ্রাম)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "500gm",
    "price": 940,
    "oldPrice": 940,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-horina-shrimp-peeled-fish-bazar-shrimp-1759948525613",
    "isSuperOffer": false
  },
  {
    "id": "68e6acc841d2b3849c8ad55c",
    "name": "Horina Chingri Clean & Dressed (head Included) - 500gm. (হরিনা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "500gm",
    "price": 490,
    "oldPrice": 490,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-horina-chingri-clean-and-dressed-head-included-500gm-1759947969987.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e6ac2041d2b3849c8abf29",
    "name": "Horina Chingri Clean & Dressed (head Included) - 1kg. (হরিনা চিংড়ি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1kg",
    "price": 980,
    "oldPrice": 980,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-horina-chingri-clean-and-dressed-head-included-1kg-1759947804550.-(-)-Fish-Bazar-Shrimp-()",
    "isSuperOffer": false
  },
  {
    "id": "68e63b1e41d2b3849c7e095a",
    "name": "Sea Black Snapper (whole) (২-৪কেজি সাইজ ১কেজি)  সামুদ্রিক কৈ কোরাল",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1 kg",
    "price": 750,
    "oldPrice": 750,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-black-snapper-whole-fish-bazar-seafood-1759918873518",
    "isSuperOffer": false
  },
  {
    "id": "68e63aab41d2b3849c7dfe02",
    "name": "Sea Black Snapper (whole) (১-১.৫কেজি সাইজ ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 650,
    "oldPrice": 650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-black-snapper-whole-1759918760628.-)-Fish-Bazar-Seafood-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e63a0f41d2b3849c7decb6",
    "name": "Red Snappper (whole) (২-৪কেজি সাইজ, ১কেজি) লাল কোরাল",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-red-snappper-whole-fish-bazar-seafood-1759918605150",
    "isSuperOffer": false
  },
  {
    "id": "68e5da5741d2b3849c7356ef",
    "name": "River Pangash Fish (whole) - (২-৩কেজি সাইজ, ১কেজি) (নদীর পাঙ্গাশ)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 850,
    "oldPrice": 850,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-pangash-fish-whole-fish-bazar-fresh-water-fish-1759894099198",
    "isSuperOffer": false
  },
  {
    "id": "68e5d98b41d2b3849c734945",
    "name": "Chandana Hilsha Belly Clean & Dressed 1kg. (চন্দনা ইলিশ)",
    "categoryIds": [
      "6893b30278c11056a038b14e",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)",
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 600,
    "oldPrice": 600,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chandana-hilsha-belly-clean-and-dressed-1kg-1759893894606.-(-)-Fish-Bazar-Seafood-(-)-Steaks-and-Fillet",
    "isSuperOffer": false
  },
  {
    "id": "68e5d1a841d2b3849c72bf2a",
    "name": "Sea Fut Poa Fish (whole) ১.১.৫কেজি সাইজ, ১কেজি (ফুট পোয়া মাছ)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 690,
    "oldPrice": 690,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-fut-poa-fish-whole-1759891863937.-(-)-Fish-Bazar-Seafood-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e5d0b841d2b3849c72ad4a",
    "name": "Sea Fut Poa Fish (whole) ২পিসে ১কেজি (ফুট পোয়া মাছ)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1 kg",
    "price": 650,
    "oldPrice": 650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-fut-poa-fish-whole-fish-bazar-seafood-1759891611592",
    "isSuperOffer": false
  },
  {
    "id": "68e5ab6e41d2b3849c70bcb8",
    "name": "Sea Octopus (whole) Big Size 1kg. (সামুদ্রিক অক্টোপাস)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-octopus-whole-big-size-1kg-1759882079498.-(-)-Fish-Bazar-Seafood-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e5aa9a41d2b3849c70b544",
    "name": "Sea Squid (whole) Small Size 1kg. (সামুদ্রিক স্কুইড)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 590,
    "oldPrice": 590,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-squid-whole-small-size-1kg-1759881855373.-(-)-Fish-Bazar-Seafood-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e5a9ba41d2b3849c70ae92",
    "name": "Sea Squid (whole) Big Size 1kg. (সামুদ্রিক স্কুইড)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 890,
    "oldPrice": 890,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759881467698",
    "isSuperOffer": false
  },
  {
    "id": "68e5a79341d2b3849c709b9d",
    "name": "River Rita Fish (whole) ৫০০/৭০০গ্রাম সাইজ, ১কেজি (নদীর রিঠা মাছ)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 1250,
    "oldPrice": 1250,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-rita-fish-whole-fish-bazar-fresh-water-fish-1759881100089",
    "isSuperOffer": false
  },
  {
    "id": "68e5a6fe41d2b3849c709669",
    "name": "River Rita Fish (whole) ১.১.৫কেজি সাইজ, ১কেজি (নদীর রিঠা মাছ)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 1550,
    "oldPrice": 1550,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-rita-fish-whole-1759880946964.-(-)-Fish-Bazar-Fresh-Water-Fish-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e5a5ff41d2b3849c708d59",
    "name": "Sea Java Coral Fish (whole) ২-৩কেজি সাইজ, ১কেজি (জাভা কোরাল)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 850,
    "oldPrice": 850,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-java-coral-fish-whole-fish-bazar-seafood-1759880684786",
    "isSuperOffer": false
  },
  {
    "id": "68e5a58e41d2b3849c708b41",
    "name": "Sea Java Coral Fish (whole) ১-১.৫কেজি সাইজ, ১কেজি (জাভা কোরাল)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 790,
    "oldPrice": 790,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-java-coral-fish-whole-1759880547019.-(-)-Fish-Bazar-Seafood-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e4a12041d2b3849c589e4a",
    "name": "River Meni Fish (belly Clean & Dressed) 1kg. (মেনি মাছ) ready to cook",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 960,
    "oldPrice": 960,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-meni-fish-belly-clean-and-dressed-1kg-1759813911268.-(-)-ready-to-cook-Fish-Bazar-Steaks-and-Fillet",
    "isSuperOffer": false
  },
  {
    "id": "68e4a0c841d2b3849c5890fc",
    "name": "River Meni Fish (belly Clean & Dressed) 500gm. (মেনি মাছ) ready to cook",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 480,
    "oldPrice": 480,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-meni-fish-belly-clean-and-dressed-500gm-1759813806640.-(-)-ready-to-cook-Fish-Bazar-Steaks-and-Fillet",
    "isSuperOffer": false
  },
  {
    "id": "68e4a00741d2b3849c5883e1",
    "name": "River Topshe Fish (Belly Clean & Dressed) 1kg. (তপসে মাছ)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 980,
    "oldPrice": 980,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-topshe-fish-belly-clean-and-dressed-1kg-1759813622212.-(-)-Fish-Bazar-Steaks-and-Fillet",
    "isSuperOffer": false
  },
  {
    "id": "68e49f9241d2b3849c58790a",
    "name": "River Topshe Fish (Belly Clean & Dressed) 500gm. (তপসে মাছ)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 490,
    "oldPrice": 490,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759813396604",
    "isSuperOffer": false
  },
  {
    "id": "68e49ed641d2b3849c586915",
    "name": "River Kajoli Fish (whole) - কাজুলি মাছ (মিডিয়াম সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 590,
    "oldPrice": 590,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-kajoli-fish-whole-fish-bazar-fresh-water-fish-1759813331299",
    "isSuperOffer": false
  },
  {
    "id": "68e49e8041d2b3849c585f46",
    "name": "River Kajoli Fish (whole) - কাজুলি মাছ (বিগ সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 720,
    "oldPrice": 720,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-kajoli-fish-whole-fish-bazar-fresh-water-fish-1759813192302",
    "isSuperOffer": false
  },
  {
    "id": "68e48df041d2b3849c56ea8b",
    "name": "Deshi Mrigel Fish (whole) - size: 2-3kg. Weight: 1kg. (মৃগেল মাছ)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 390,
    "oldPrice": 390,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-mrigel-fish-whole-size-2-3kg-weight-1kg-1759808970825.-(-)-Fish-Bazar-Fresh-Water-Fish-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e48d4141d2b3849c56d842",
    "name": "Deshi Mrigel Fish (whole) - size: 1kg. Weight: 1kg. (মৃগেল মাছ)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 280,
    "oldPrice": 280,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-mrigel-fish-whole-size-1kg-weight-1kg-1759808819563.-(-)-Fish-Bazar-Fresh-Water-Fish-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e48c4641d2b3849c56c6d0",
    "name": "Deshi Shortuti Fish (whole) (দেশি সরপুঁটি) size: big - 1kg.",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 420,
    "oldPrice": 420,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-shortuti-fish-whole-size-big-1kg-1759808577052.-Fish-Bazar-Fresh-Water-Fish-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e48b7641d2b3849c56bb46",
    "name": "River Puli Fish (whole) - নদীর পিউলি মাছ (৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 430,
    "oldPrice": 430,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-puli-fish-whole-fish-bazar-fresh-water-fish-1759808370690",
    "isSuperOffer": false
  },
  {
    "id": "68e48b2241d2b3849c56b719",
    "name": "River Puli Fish (whole) - নদীর পিউলি মাছ (১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 860,
    "oldPrice": 860,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759808096806",
    "isSuperOffer": false
  },
  {
    "id": "68e489f441d2b3849c56a259",
    "name": "Hybrid Koi Fish (whole) - হাইব্রীড কৈ মাছ (১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 390,
    "oldPrice": 390,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759807817940",
    "isSuperOffer": false
  },
  {
    "id": "68e488c441d2b3849c569152",
    "name": "River Chitol Fish (whole) - চিতল মাছ (৫-৮কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-chitol-fish-whole-fish-bazar-fresh-water-fish-1759807682485",
    "isSuperOffer": false
  },
  {
    "id": "68e4886441d2b3849c568daa",
    "name": "River Chitol Fish (whole) - চিতল মাছ (২-৩কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 790,
    "oldPrice": 790,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-chitol-fish-whole-fish-bazar-fresh-water-fish-1759807575318",
    "isSuperOffer": false
  },
  {
    "id": "68e487a841d2b3849c567abb",
    "name": "River Chitol Fish (whole) - নদীর চিতল মাছ (১-১.৫কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 590,
    "oldPrice": 590,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759807276732",
    "isSuperOffer": false
  },
  {
    "id": "68e486c441d2b3849c566f1f",
    "name": "Sea Rita Fish (whole) - সামুদ্রিক রিঠা (১-৩কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1 kg",
    "price": 480,
    "oldPrice": 480,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759807045581",
    "isSuperOffer": false
  },
  {
    "id": "68e485e341d2b3849c56635e",
    "name": "Sea Sardin Fish (whole)  1kg.",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 380,
    "oldPrice": 380,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-sardin-fish-whole-1kg-1759806932712.-Fish-Bazar-Seafood-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e4197641d2b3849c51c8bd",
    "name": "Sea Med Fish (whole) - মেদ মাছ (৫-৮কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759778900804",
    "isSuperOffer": false
  },
  {
    "id": "68e4178d41d2b3849c51a898",
    "name": "Hamur / Grouper Fish (whole) - হামুর মাছ (১-৩কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 640,
    "oldPrice": 640,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-hamur-grouper-fish-whole-fish-bazar-seafood-1759778699458",
    "isSuperOffer": false
  },
  {
    "id": "68e4169841d2b3849c51997f",
    "name": "Surma Fish (whole) - সুরমা মাছ (১-২কেজি সাইজ ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 820,
    "oldPrice": 820,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759778355013",
    "isSuperOffer": false
  },
  {
    "id": "68e415a041d2b3849c51877f",
    "name": "Suri Fish Skinless Stacks Without Head (সুরি মাছ ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Steaks and Fillet",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 760,
    "oldPrice": 760,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759777964383",
    "isSuperOffer": false
  },
  {
    "id": "68e4146741d2b3849c516b85",
    "name": "Red Snapper Belly Clean & Dressed - লাল কোরাল (১-২কেজি সাইজ ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Steaks and Fillet",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-red-snapper-belly-clean-and-dressed-steaks-and-fillet-seafood-1759777866686",
    "isSuperOffer": false
  },
  {
    "id": "68e4133c41d2b3849c515300",
    "name": "Red Snappper (whole) (১-১.৫কেজি সাইজ, ১কেজি) লাল কোরাল",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 950,
    "oldPrice": 950,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-red-snappper-whole-fish-bazar-seafood-1759777584630",
    "isSuperOffer": false
  },
  {
    "id": "68e40ffe41d2b3849c510aef",
    "name": "River Pabda Fish whole (size: 22 to 25 Pcs Kg) 1kg. (পাবদা মাছ)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 540,
    "oldPrice": 540,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-pabda-fish-whole-size-22-to-25-pcs-kg-1kg-1759776763449.-(-)-Fish-Bazar-Fresh-Water-Fish-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e40de141d2b3849c50e105",
    "name": "River Pabda Fish whole (size: 14to 18 Pcs Kg) 1kg. (পাবদা মাছ)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 660,
    "oldPrice": 660,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-pabda-fish-whole-size-14to-18-pcs-kg-1kg-1759776218622.-(-)-Fish-Bazar-Fresh-Water-Fish-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e406e341d2b3849c5039aa",
    "name": "River Pabda Fish (ready to cook) big size: 1kg. (পাবদা মাছ)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 660,
    "oldPrice": 660,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-pabda-fish-clean-and-dressed-ready-to-cook-big-size-1kg-1759774421415.-(-)-Fish-Bazar-Steaks-and-Fillet",
    "isSuperOffer": false
  },
  {
    "id": "68e4066441d2b3849c50306a",
    "name": "River Pabda Fish Clean & Dressed (ready to cook)  big size 500gm (পাবদা মাছ)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 330,
    "oldPrice": 330,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759774125818",
    "isSuperOffer": false
  },
  {
    "id": "68e4054c41d2b3849c500827",
    "name": "River Bele Fish Clean & Dressed (ready to cook) - বেলে মাছ (ছোট সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 490,
    "oldPrice": 490,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-bele-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759774006219",
    "isSuperOffer": false
  },
  {
    "id": "68e404b341d2b3849c4ff689",
    "name": "River Bele Fish Clean & Dressed (ready to cook) - বেলে মাছ (ছোট সাইজ ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1 kg",
    "price": 980,
    "oldPrice": 980,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759773677304",
    "isSuperOffer": false
  },
  {
    "id": "68e4033d41d2b3849c4fc8e0",
    "name": "Sea Queen Poa Fish (whole) - কুইন পোয়া মাছ (বিগ সাইজ ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 450,
    "oldPrice": 450,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759773330687",
    "isSuperOffer": false
  },
  {
    "id": "68e4026541d2b3849c4fab74",
    "name": "River Gutum Fish (whole) - গুতুম মাছ (৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 420,
    "oldPrice": 420,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-gutum-fish-whole-fish-bazar-fresh-water-fish-1759773282594",
    "isSuperOffer": false
  },
  {
    "id": "68e4020341d2b3849c4f9a0c",
    "name": "River Gutum Fish (whole) - গুতুম মাছ (১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 840,
    "oldPrice": 840,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759773034302",
    "isSuperOffer": false
  },
  {
    "id": "68e4015041d2b3849c4f7bbf",
    "name": "Pasmishali Fish (ready to cook) - পাঁচমিশালী মাছ (৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)",
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 330,
    "oldPrice": 330,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-pasmishali-fish-ready-to-cook-fish-bazar-fresh-water-fish-steaks-and-fillet-1759773001806",
    "isSuperOffer": false
  },
  {
    "id": "68e400d841d2b3849c4f608c",
    "name": "Pasmishali Fish (ready to cook) - পাঁচমিশালী মাছ (১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)",
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 650,
    "oldPrice": 650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-pasmishali-fish-ready-to-cook-steaks-and-fillet-fresh-water-fish-1759772851375",
    "isSuperOffer": false
  },
  {
    "id": "68e4000741d2b3849c4f3553",
    "name": "Deshi Tatkini Fish (whole) - টাটকিনি মাছ (১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 450,
    "oldPrice": 450,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759772474306",
    "isSuperOffer": false
  },
  {
    "id": "68e3fecc41d2b3849c4f0b37",
    "name": "Tangra Fish (whole) - খুলনা অঞ্চলের টেংরা (মিডিয়াম সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 340,
    "oldPrice": 340,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-tangra-fish-whole-fish-bazar-fresh-water-fish-1759772361236",
    "isSuperOffer": false
  },
  {
    "id": "68e3fe5d41d2b3849c4efbd2",
    "name": "Tangra Fish (whole) - খুলনা অঞ্চলের টেংরা (বিগ সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 390,
    "oldPrice": 390,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-tangra-fish-whole-fish-bazar-fresh-water-fish-1759772247738",
    "isSuperOffer": false
  },
  {
    "id": "68e3fe0741d2b3849c4eeb90",
    "name": "Tangra Fish (whole) - খুলনা অঞ্চলের টেংরা (মিডিয়াম সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 680,
    "oldPrice": 680,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-tangra-fish-whole-fish-bazar-fresh-water-fish-1759772163878",
    "isSuperOffer": false
  },
  {
    "id": "68e3fd9a41d2b3849c4ed289",
    "name": "Tangra Fish (whole) - খুলনা অঞ্চলের টেংরা (বিগ সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 780,
    "oldPrice": 780,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759771827501",
    "isSuperOffer": false
  },
  {
    "id": "68e3e3ed41d2b3849c4b72d3",
    "name": "Deshi Mola Fish (whole) - মলা মাছ (মিডিয়াম সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 250,
    "oldPrice": 250,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-mola-fish-whole-fish-bazar-fresh-water-fish-1759765481788",
    "isSuperOffer": false
  },
  {
    "id": "68e3e35841d2b3849c4b65cc",
    "name": "Deshi Mola Fish (whole) - মলা মাছ (মিডিয়াম সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 500,
    "oldPrice": 500,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-mola-fish-whole-fish-bazar-fresh-water-fish-1759765327260",
    "isSuperOffer": false
  },
  {
    "id": "68e3e2dc41d2b3849c4b5933",
    "name": "Deshi Mola Fish (whole) - মলা মাছ (বিগ সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 340,
    "oldPrice": 340,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-mola-fish-whole-fish-bazar-fresh-water-fish-1759765210671",
    "isSuperOffer": false
  },
  {
    "id": "68e3e27441d2b3849c4b4f40",
    "name": "Deshi Mola Fish (whole) - মলা মাছ (বিগ সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 680,
    "oldPrice": 680,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759764991308",
    "isSuperOffer": false
  },
  {
    "id": "68e3e16d41d2b3849c4b33ad",
    "name": "Deshi Katol Fish (whole) - কাতল মাছ (২-৩কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 550,
    "oldPrice": 550,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-katol-fish-whole-fish-bazar-fresh-water-fish-1759764838304",
    "isSuperOffer": false
  },
  {
    "id": "68e3e0e241d2b3849c4b2ad8",
    "name": "Deshi Katol Fish (whole) - কাতল মাছ (১-১.৫কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 450,
    "oldPrice": 450,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759764379627",
    "isSuperOffer": false
  },
  {
    "id": "68e3dda541d2b3849c4ad3a8",
    "name": "River Tpshe Fish (whole) - তপসে মাছ (বিগ সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 440,
    "oldPrice": 440,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-tpshe-fish-whole-fish-bazar-fresh-water-fish-1759763875096",
    "isSuperOffer": false
  },
  {
    "id": "68e3dd3341d2b3849c4ac66b",
    "name": "River Tpshe Fish (whole) - তপসে মাছ (বিগ সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 880,
    "oldPrice": 880,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759763663094",
    "isSuperOffer": false
  },
  {
    "id": "68e3dc5941d2b3849c4ab4e4",
    "name": "River Tita Fish (whole) - রিঠা মাছ (৩-৪পিসে ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 1090,
    "oldPrice": 1090,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759763447885",
    "isSuperOffer": false
  },
  {
    "id": "68e3dbd341d2b3849c4aa3ff",
    "name": "River Meni Fish (whole) - মেনি মাছ (বিগ সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 390,
    "oldPrice": 390,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-meni-fish-whole-fish-bazar-fresh-water-fish-1759763409068",
    "isSuperOffer": false
  },
  {
    "id": "68e3db9541d2b3849c4a9c3c",
    "name": "River Meni Fish (whole) - মেনি মাছ (বিগ সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 780,
    "oldPrice": 780,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-meni-fish-whole-fish-bazar-fresh-water-fish-1759763344288",
    "isSuperOffer": false
  },
  {
    "id": "68e3daec41d2b3849c4a8d78",
    "name": "Silver Carp (whole) - সিলভার কার্প (২-৪কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 270,
    "oldPrice": 270,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-silver-carp-whole-fish-bazar-fresh-water-fish-1759763178476",
    "isSuperOffer": false
  },
  {
    "id": "68e3da3441d2b3849c4a78bd",
    "name": "Deshi Karfu Fish (whole) - কার্ফু মাছ (১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 290,
    "oldPrice": 290,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759762894602",
    "isSuperOffer": false
  },
  {
    "id": "68e3d92f41d2b3849c4a6027",
    "name": "River Batashi Fish (whole) - বাতাসি মাছ (৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 690,
    "oldPrice": 690,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-batashi-fish-whole-fish-bazar-fresh-water-fish-1759762727997",
    "isSuperOffer": false
  },
  {
    "id": "68e3d89941d2b3849c4a53a0",
    "name": "River Batashi Fish (whole) - বাতাসি মাছ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 1150,
    "oldPrice": 1150,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759762476840",
    "isSuperOffer": false
  },
  {
    "id": "68e3d5ae41d2b3849c4a1034",
    "name": "Kaski Fish (ready to cook) - কাচকি মাছ (ফ্রেশ ৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)",
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 390,
    "oldPrice": 390,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-kaski-fish-ready-to-cook-fish-bazar-fresh-water-fish-steaks-and-fillet-1759761828017",
    "isSuperOffer": false
  },
  {
    "id": "68e3d50e41d2b3849c4a025f",
    "name": "Kaski Fish (ready to cook) - কাচকি মাছ (ফ্রেশ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)",
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 780,
    "oldPrice": 780,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-kaski-fish-whole-fish-bazar-fresh-water-fish-1759761674454",
    "isSuperOffer": false
  },
  {
    "id": "68e07703ac9aeaf560053497",
    "name": "Chiring Fish 1kg- clean & Dressed (ready to cook) - ফুল চিরিং মাছ (বড় সাইজ ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 960,
    "oldPrice": 960,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chiring-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759540990016",
    "isSuperOffer": false
  },
  {
    "id": "68e07658ac9aeaf560052f33",
    "name": "Fulchiring Fish 500gm- Clean & Dressed (ready to cook) - ফুল চিরিং মাছ (বড় সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 480,
    "oldPrice": 480,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chiring-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759540819702",
    "isSuperOffer": false
  },
  {
    "id": "68e074feac9aeaf560051cf8",
    "name": "Chiring Fish (Whole) - ফুল চিরিং মাছ (বড় সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 380,
    "oldPrice": 380,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chiring-fish-whole-fish-bazar-fresh-water-fish-1759540463942",
    "isSuperOffer": false
  },
  {
    "id": "68e0743fac9aeaf56005167f",
    "name": "Chiring Fish (Whole) - ফুল চিরিং মাছ (বড় সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 750,
    "oldPrice": 750,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chiring-fish-whole-fish-bazar-fresh-water-fish-1759540283709",
    "isSuperOffer": false
  },
  {
    "id": "68e06f51ac9aeaf56004f11b",
    "name": "River Poa Fish Curry Cut (ready to cook) - পোয়া মাছ (মিডিয়াম সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 340,
    "oldPrice": 340,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-poa-fish-curry-cut-ready-to-cook-fish-bazar-steaks-and-fillet-1759539020778",
    "isSuperOffer": false
  },
  {
    "id": "68e06ed6ac9aeaf56004ecae",
    "name": "River Poa Fish Curry Cut (ready to cook) - পোয়া মাছ (মিডিয়াম সাইজ ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1 kg",
    "price": 680,
    "oldPrice": 680,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-poa-fish-curry-cut-ready-to-cook-fish-bazar-steaks-and-fillet-1759538890479",
    "isSuperOffer": false
  },
  {
    "id": "68e06d02ac9aeaf56004db7a",
    "name": "Taki Fish Clean & Dressed (ready to cook) - টাকি মাছ (বড় সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 270,
    "oldPrice": 270,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-taki-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759538426871",
    "isSuperOffer": false
  },
  {
    "id": "68e06c4aac9aeaf56004d63a",
    "name": "Taki Fish Clean & Dressed (ready to cook) - টাকি মাছ (বড় সাইজ ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 540,
    "oldPrice": 540,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759538106732",
    "isSuperOffer": false
  },
  {
    "id": "68e06b1dac9aeaf56004cbe1",
    "name": "River Khalla Fish Clean & Dressed (ready to cook) - খল্লা মাছ (বড় সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 400,
    "oldPrice": 400,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-khalla-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759537946188",
    "isSuperOffer": false
  },
  {
    "id": "68e06a86ac9aeaf56004c7c3",
    "name": "River Khalla Fish Clean & Dressed (ready to cook) - খল্লা মাছ (বড় সাইজ ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1 kg",
    "price": 790,
    "oldPrice": 790,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759537627739",
    "isSuperOffer": false
  },
  {
    "id": "68e06932ac9aeaf56004bdae",
    "name": "Hilsha Fish Belly Clean & Dressed (ready to cook) নদীর ইলিশ ২পিসে ১.২কেজি",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 1650,
    "oldPrice": 1650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-hilsha-fish-belly-clean-and-dressed-ready-to-cook-1759537453019.-Fish-Bazar-Steaks-and-Fillet",
    "isSuperOffer": false
  },
  {
    "id": "68e0684bac9aeaf56004b8ca",
    "name": "Hilsha Fish Curry Cut (ready to cook) নদীর ইলিশ ২পিসে ১.২কেজি",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 1650,
    "oldPrice": 1650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759537025276",
    "isSuperOffer": false
  },
  {
    "id": "68e06707ac9aeaf56004aede",
    "name": "Vetki/Coral Fish Belly Clean & Dressed (ready to cook) ২পিসে ১.৩কেজি",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 790,
    "oldPrice": 790,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-vetkicoral-fish-belly-clean-and-dressed-ready-to-cook-1759536883101.-Fish-Bazar-Steaks-and-Fillet",
    "isSuperOffer": false
  },
  {
    "id": "68e0662cac9aeaf56004a8a0",
    "name": "Vetki/Coral Fish Belly Clean & Dressed (ready to cook) ১.৩কেজি সাইজ ১পিস",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-vetkicoral-fish-belly-clean-and-dressed-ready-to-cook-1759536677243.-Fish-Bazar-Steaks-and-Fillet",
    "isSuperOffer": false
  },
  {
    "id": "68e0652fac9aeaf56004a04e",
    "name": "Vetki/Coral Fish Curry Cut (ready to cook)  ২.৫কেজি সাইজ ১কেজি",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 1050,
    "oldPrice": 1050,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-vetkicoral-fish-curry-cut-ready-to-cook-1759536420426.-Fish-Bazar-Steaks-and-Fillet",
    "isSuperOffer": false
  },
  {
    "id": "68e06473ac9aeaf560049a13",
    "name": "Vetki/Coral Fish Curry Cut (ready to cook)  ১.২৫কেজি ১পিস",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759536058644",
    "isSuperOffer": false
  },
  {
    "id": "68e06374ac9aeaf5600492b7",
    "name": "Ruhi Fish Curry Cut (ready to cook) রুই মাছ (২.৫কেজি সাইজ ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 550,
    "oldPrice": 550,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-ruhi-fish-curry-cut-ready-to-cook-1759535977709.-)-Fish-Bazar-Steaks-and-Fillet",
    "isSuperOffer": false
  },
  {
    "id": "68e062b4ac9aeaf560048f7c",
    "name": "Ruhi Fish Curry Cut (ready to cook) রুই মাছ (১.৩কেজি ১পিস)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 450,
    "oldPrice": 450,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759535447721",
    "isSuperOffer": false
  },
  {
    "id": "68e060afac9aeaf560047baf",
    "name": "Ayer Fish Curry Cut (ready to cook) - আইড় মাছ ( ৫-৬কেজি সাইজ ৫০০গ্রাম প্যাক)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 740,
    "oldPrice": 740,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-ayer-fish-curry-cut-ready-to-cook-fish-bazar-steaks-and-fillet-1759535272895",
    "isSuperOffer": false
  },
  {
    "id": "68e05fe1ac9aeaf5600478dd",
    "name": "Ayer Fish Curry Cut (ready to cook) - আইড় মাছ ( ৫-৬কেজি সাইজ ১কেজি প্যাক)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 1650,
    "oldPrice": 1650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759534771161",
    "isSuperOffer": false
  },
  {
    "id": "68e05ba5ac9aeaf560046149",
    "name": "Bagair Fish (whole) - বাঘাআইড় মাছ (২-৫কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 1050,
    "oldPrice": 1050,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bagair-fish-whole-fish-bazar-fresh-water-fish-1759533985728",
    "isSuperOffer": false
  },
  {
    "id": "68e05aecac9aeaf560045c79",
    "name": "River Basa Fish (whole) - বাসা মাছ (মিডিয়াম সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 880,
    "oldPrice": 880,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759533699137",
    "isSuperOffer": false
  },
  {
    "id": "68e05a1cac9aeaf56004586b",
    "name": "Dogra Fish (whole) - ডগরা মাছ (বিগ/মিডিয়াম ৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 390,
    "oldPrice": 390,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-dogra-fish-whole-fish-bazar-fresh-water-fish-1759533592890",
    "isSuperOffer": false
  },
  {
    "id": "68e059a9ac9aeaf560045561",
    "name": "Dogra Fish (whole) - ডগরা মাছ (বিগ/মিডিয়াম ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 780,
    "oldPrice": 780,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-dogra-fish-whole-fish-bazar-fresh-water-fish-1759533473749",
    "isSuperOffer": false
  },
  {
    "id": "68e058caac9aeaf560044ff1",
    "name": "Chewa Fish (whole) - চেওয়া মাছ (মিডিয়াম সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 280,
    "oldPrice": 280,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chewa-fish-whole-fish-bazar-fresh-water-fish-1759533254289",
    "isSuperOffer": false
  },
  {
    "id": "68e05842ac9aeaf560044c7e",
    "name": "Chewa Fish (whole) - চেওয়া মাছ (মিডিয়াম সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 580,
    "oldPrice": 580,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chewa-fish-whole-fish-bazar-fresh-water-fish-1759533120052",
    "isSuperOffer": false
  },
  {
    "id": "68e057a6ac9aeaf5600449fe",
    "name": "Chewa Fish (whole) - চেওয়া মাছ (বিগ সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 350,
    "oldPrice": 350,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chewa-fish-whole-fish-bazar-fresh-water-fish-1759532958235",
    "isSuperOffer": false
  },
  {
    "id": "68e05702ac9aeaf5600444cc",
    "name": "Chewa Fish (whole) - চেওয়া মাছ (বিগ সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 690,
    "oldPrice": 690,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759532677483",
    "isSuperOffer": false
  },
  {
    "id": "68e055faac9aeaf560043e63",
    "name": "River Pabda Fish whole (size: 14to 18 Pcs Kg) 500gm (পাবদা মাছ)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 330,
    "oldPrice": 330,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-pabda-fish-whole-fish-bazar-fresh-water-fish-1759532531395",
    "isSuperOffer": false
  },
  {
    "id": "68e05560ac9aeaf560043b4e",
    "name": "River Pabda Fish whole (size: 22 to 25 Pcs Kg) 500gm (পাবদা মাছ)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 270,
    "oldPrice": 270,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759532268586",
    "isSuperOffer": false
  },
  {
    "id": "68e0537aac9aeaf560043282",
    "name": "River Khalla Fish (whole) - খল্লা মাছ (বড় সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 590,
    "oldPrice": 590,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759531638497",
    "isSuperOffer": false
  },
  {
    "id": "68e051fbac9aeaf5600423be",
    "name": "River Kaine Magur Fish (whole) - নদীর কাইন মাগুর (১-৩কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 590,
    "oldPrice": 590,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759531319367",
    "isSuperOffer": false
  },
  {
    "id": "68e0503dac9aeaf56004181b",
    "name": "Vetki/Coral Fish (whole) - ভেটকি/কোরাল মাছ (৩-৪কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-vetkicoral-fish-whole-fish-bazar-fresh-water-fish-1759531067239",
    "isSuperOffer": false
  },
  {
    "id": "68e04fd2ac9aeaf560041404",
    "name": "Vetki/Coral Fish (whole) - ভেটকি/কোরাল মাছ (১.৫-২কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 950,
    "oldPrice": 950,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-vetkicoral-fish-whole-1759530959446.-)-Fish-Bazar-Fresh-Water-Fish-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e04f67ac9aeaf56004121b",
    "name": "Vetki/Coral Fish (whole) - ভেটকি/কোরাল মাছ (১-১.৩কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 890,
    "oldPrice": 890,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-vetkicoral-fish-whole-1759530835800.-)-Fish-Bazar-Fresh-Water-Fish-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e04ea1ac9aeaf560040a48",
    "name": "Vetki/Coral Fish (whole) - ভেটকি/কোরাল মাছ (৩পিসে ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 690,
    "oldPrice": 690,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-vetkicoral-fish-whole-fish-bazar-fresh-water-fish-1759530652896",
    "isSuperOffer": false
  },
  {
    "id": "68e04e13ac9aeaf5600405b8",
    "name": "Vetki/Coral Fish (whole) - ভেটকি/কোরাল মাছ (২পিসে ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 790,
    "oldPrice": 790,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-vetkicoral-fish-whole-fish-bazar-fresh-water-fish-1759530504282",
    "isSuperOffer": false
  },
  {
    "id": "68e04d0cac9aeaf56003ff71",
    "name": "Vangal Fish (whole) - ভাংগাল মাছ (১-২কেজি সাইজ, ১কেজি।",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 850,
    "oldPrice": 850,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-vangal-fish-whole-fish-bazar-fresh-water-fish-1759530237323",
    "isSuperOffer": false
  },
  {
    "id": "68e04c81ac9aeaf56003fc73",
    "name": "Vangal Fish (whole) - ভাংগাল মাছ (৫০০-৭০০গ্রাম সাইজ, ১কেজি।",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 750,
    "oldPrice": 750,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-vangal-fish-whole-fish-bazar-fresh-water-fish-1759530101216",
    "isSuperOffer": false
  },
  {
    "id": "68e04babac9aeaf56003f796",
    "name": "Gulsha Tangra Fish (whole) - গুলশা টেংরা (মিডিয়াম সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 850,
    "oldPrice": 850,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-gulsha-tangra-fish-whole-fish-bazar-fresh-water-fish-1759529881792",
    "isSuperOffer": false
  },
  {
    "id": "68e04afcac9aeaf56003f0da",
    "name": "Gulsha Tangra Fish (whole) - গুলশা টেংরা (বড় সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-gulsha-tangra-fish-whole-fish-bazar-fresh-water-fish-1759529716895",
    "isSuperOffer": false
  },
  {
    "id": "68e04a15ac9aeaf56003ebe2",
    "name": "Deshi Tangra Fish (whole) - দেশি টেংরা (মিডিয়াম সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 750,
    "oldPrice": 750,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-tangra-fish-whole-fish-bazar-fresh-water-fish-1759529490748",
    "isSuperOffer": false
  },
  {
    "id": "68e04977ac9aeaf56003e99a",
    "name": "Deshi Tangra Fish (whole) - দেশি টেংরা (বড় সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 850,
    "oldPrice": 850,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-tangra-fish-whole-fish-bazar-fresh-water-fish-1759529298923",
    "isSuperOffer": false
  },
  {
    "id": "68e04793ac9aeaf56003de87",
    "name": "Bele Fish Clean & Dressed (ready to cook) - বেলে মাছ (বিগ সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 590,
    "oldPrice": 590,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bele-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759528847443",
    "isSuperOffer": false
  },
  {
    "id": "68e046e0ac9aeaf56003d887",
    "name": "Bele Fish Clean & Dressed (ready to cook) - বেলে মাছ (ব��গ সাইজ ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 1180,
    "oldPrice": 1180,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bele-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759528666088",
    "isSuperOffer": false
  },
  {
    "id": "68e0461dac9aeaf56003d52d",
    "name": "Bele Fish Clean & Dressed (ready to cook) - বেলে মাছ (মিসিয়াম সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 550,
    "oldPrice": 550,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bele-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759528467485",
    "isSuperOffer": false
  },
  {
    "id": "68e0454dac9aeaf56003d0c5",
    "name": "Bele Fish Clean & Dressed (ready to cook) - বেলে মাছ (মিসিয়াম সাইজ ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 1090,
    "oldPrice": 1090,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bele-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759528252680",
    "isSuperOffer": false
  },
  {
    "id": "68e04417ac9aeaf56003c709",
    "name": "Bele Fish (whole) - বেলে মাছ (ছোট সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 650,
    "oldPrice": 650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bele-fish-whole-fish-bazar-fresh-water-fish-1759527953463",
    "isSuperOffer": false
  },
  {
    "id": "68e043a6ac9aeaf56003c34f",
    "name": "Bele Fish (whole) - বেলে মাছ (মিডিয়াম সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 850,
    "oldPrice": 850,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bele-fish-whole-fish-bazar-fresh-water-fish-1759527840826",
    "isSuperOffer": false
  },
  {
    "id": "68e0430aac9aeaf56003bf90",
    "name": "Bele Fish (whole) - বেলে মাছ (বড় সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 1050,
    "oldPrice": 1050,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bele-fish-whole-fish-bazar-fresh-water-fish-1759527685693",
    "isSuperOffer": false
  },
  {
    "id": "68e04089ac9aeaf56003aaf8",
    "name": "Sea Blue Sun Crab (whole) - 7-10piece, 1kg.",
    "categoryIds": [
      "6893a80378c11056a0381438",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Crab and Others (কাকড়া এবং অন্যান্য)",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 490,
    "oldPrice": 490,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-blue-sun-crab-whole-7-10piece-1kg-1759527045320.-Fish-Bazar-Crab-and-Others-(-)-Seafood-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e03fa8ac9aeaf56003a196",
    "name": "Mud Crab Sundarban (whole) 6-8piece - 1kg.",
    "categoryIds": [
      "6893a80378c11056a0381438",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Crab and Others (কাকড়া এবং অন্যান্য)",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 490,
    "oldPrice": 490,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-mud-crab-sundarban-whole-6-8piece-1kg-1759526819811.-Fish-Bazar-Crab-and-Others-(-)-Seafood-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e03eeeac9aeaf560039b49",
    "name": "Mud Crab Clean & Dressed (ready to cook) 6-8piece - 1kg.",
    "categoryIds": [
      "6893a80378c11056a0381438",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Crab and Others (কাকড়া এবং অন্যান্য)",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 590,
    "oldPrice": 590,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-mud-crab-clean-and-dressed-ready-to-cook-6-8piece-1kg-1759526633631.-Fish-Bazar-Crab-and-Others-(-)-Seafood-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e03e1dac9aeaf5600393a9",
    "name": "Sea Blue Sun Crab Clean & Dressed (ready to cook) 7-10piece - 1kg.",
    "categoryIds": [
      "6893a80378c11056a0381438",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Crab and Others (কাকড়া এবং অন্যান্য)",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1 kg",
    "price": 650,
    "oldPrice": 650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-blue-sun-crab-clean-and-dressed-ready-to-cook-7-10piece-1kg-1759526423889.-Fish-Bazar-Crab-and-Others-(-)-Seafood-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e03c1eac9aeaf5600377f9",
    "name": "Sea Tree Spot Crab Clean & Dressed (ready to cook) 7-10piece - 1kg.",
    "categoryIds": [
      "6893a80378c11056a0381438",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Crab and Others (কাকড়া এবং অন্যান্য)",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 650,
    "oldPrice": 650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-tree-spot-crab-clean-and-dressed-ready-to-cook-7-10piece-1kg-1759525898025.-Fish-Bazar-Crab-and-Others-(-)-Seafood-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e03adeac9aeaf560036f2d",
    "name": "Sea Tree Spot Crab (whole) 7-10piece - 1kg.",
    "categoryIds": [
      "6893a80378c11056a0381438",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Crab and Others (কাকড়া এবং অন্যান্য)",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 490,
    "oldPrice": 490,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-tree-spot-crab-whole-7-10piece-1kg-1759525585260.-Fish-Bazar-Crab-and-Others-(-)-Seafood-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e035dbac9aeaf56003427f",
    "name": "Ayer Fish (Whole) - আইড় মাছ (৪-৬কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 1690,
    "oldPrice": 1690,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-ayer-fish-whole-fish-bazar-fresh-water-fish-1759524304039",
    "isSuperOffer": false
  },
  {
    "id": "68e03537ac9aeaf560033a0e",
    "name": "Ayer Fish (Whole) - আইড় মাছ (২-২.৮কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 1590,
    "oldPrice": 1590,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-ayer-fish-whole-1759524145616.-)-Fish-Bazar-Fresh-Water-Fish-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68e0342fac9aeaf560032ee7",
    "name": "Ayer Fish (whole) - আইড় মাছ (১-১.৫কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 1290,
    "oldPrice": 1290,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-ayer-fish-whole-1759523876144.-)-Fish-Bazar-Fresh-Water-Fish-(-)",
    "isSuperOffer": false
  },
  {
    "id": "68dc6a2424fab62beb995889",
    "name": "Hilsha Fish (whole) - পদ্মার ইলিশ ৯০০-১কেজি সাইজ প্রতি কেজি ২৭৮০টাকা))",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)",
      "Steaks and Fillet"
    ],
    "weight": "1 kg",
    "price": 2780,
    "oldPrice": 2780,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-hilsha-fish-whole-fish-bazar-fresh-water-fish-1759275530121",
    "isSuperOffer": false
  },
  {
    "id": "68dc695124fab62beb995290",
    "name": "Hilsha Fish (whole) - পদ্মার ইলিশ (১২০০-১৩০০গ্রাম সাইজ প্রতি কেজি ৩০৯০টাকা)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 3090,
    "oldPrice": 3090,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-hilsha-fish-whole-fish-bazar-fresh-water-fish-1759275321462",
    "isSuperOffer": false
  },
  {
    "id": "68dc687d24fab62beb994d16",
    "name": "Hilsha Fish (whole) - পদ্মার ইলিশ (৮০০-৯০০গ্রাম সাইজ প্রতি কেজি ২৩৮০ টাকা))",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 2380,
    "oldPrice": 2380,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-hilsha-fish-whole-fish-bazar-fresh-water-fish-1759275122915",
    "isSuperOffer": false
  },
  {
    "id": "68dc67d024fab62beb994959",
    "name": "Hilsha Fish (whole) - পদ্মার ইলিশ (৬০০-৭০০গ্রাম সাইজ প্রতি কেজি ১৮৮০ টাকা।)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 1980,
    "oldPrice": 1980,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-hilsha-fish-whole-fish-bazar-fresh-water-fish-1759274928764",
    "isSuperOffer": false
  },
  {
    "id": "68dc663624fab62beb993ca7",
    "name": "Hilsha Fish (whole) - পদ্মার ইলিশ ৪৫০-৫০০গ্রাম সাইজ প্রতি কেজি ১৩৮০ টাকা)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 1380,
    "oldPrice": 1380,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-hilsha-fish-whole-fish-bazar-fresh-water-fish-1759274539686",
    "isSuperOffer": false
  },
  {
    "id": "68dc652824fab62beb9934ff",
    "name": "Hilsha Fish (whole) - পদ্মার ইলিশ (৩পিসে ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 1290,
    "oldPrice": 1290,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-hilsha-fish-whole-fish-bazar-1759274225170",
    "isSuperOffer": false
  },
  {
    "id": "68dc63fa24fab62beb992fb8",
    "name": "Hilsha Fish (whole) - পদ্মার ইলিশ (৫-৬পিসে ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 790,
    "oldPrice": 790,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759273807320",
    "isSuperOffer": false
  },
  {
    "id": "68dc631224fab62beb992ba3",
    "name": "Shol Fish (whole) - বিলের শোল (৩পিসে ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 590,
    "oldPrice": 590,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-shol-fish-whole-fish-bazar-fresh-water-fish-1759273742638",
    "isSuperOffer": false
  },
  {
    "id": "68dc626224fab62beb992827",
    "name": "Shol Fish (whole) - বিলের শোল (২পিসে ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 750,
    "oldPrice": 750,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-shol-fish-whole-fish-bazar-fresh-water-fish-1759273533198",
    "isSuperOffer": false
  },
  {
    "id": "68dc61b224fab62beb992473",
    "name": "Shol Fish (whole) - বিলের শোল (১পিসে ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-shol-fish-whole-fish-bazar-fresh-water-fish-1759273380400",
    "isSuperOffer": false
  },
  {
    "id": "68dc611224fab62beb992107",
    "name": "Shol Fish Curry Cut (ready to cook) - বিলের শোল (৩পিসে ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 750,
    "oldPrice": 750,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-shol-fish-curry-cut-ready-to-cook-fish-bazar-steaks-and-fillet-1759273225710",
    "isSuperOffer": false
  },
  {
    "id": "68dc605624fab62beb991dc2",
    "name": "Shol Fish Curry Cut (ready to cook) - বিলের শোল (২পিসে ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 880,
    "oldPrice": 880,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-shol-fish-curry-cut-ready-to-cook-fish-bazar-steaks-and-fillet-1759273024518",
    "isSuperOffer": false
  },
  {
    "id": "68dc5f7424fab62beb99182a",
    "name": "Shol Fish Curry Cut (ready to cook) - বিলের শোল (১পিসে ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1 kg",
    "price": 1150,
    "oldPrice": 1150,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759272541618",
    "isSuperOffer": false
  },
  {
    "id": "68dc5dc524fab62beb990ad6",
    "name": "Lal Poa Fish (whole) - লালপোয়া মাছ (৩-৪পিসে ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 590,
    "oldPrice": 590,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-lal-poa-fish-whole-fish-bazar-seafood-1759272384964",
    "isSuperOffer": false
  },
  {
    "id": "68dc5d3f24fab62beb990559",
    "name": "Lal Poa Fish (whole) - লালপোয়া মাছ (২পিসে ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1 kg",
    "price": 650,
    "oldPrice": 650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-lal-poa-fish-whole-fish-bazar-1759272234195",
    "isSuperOffer": false
  },
  {
    "id": "68dc5c4f24fab62beb98ff57",
    "name": "Sea Sholali Baim (whole) - সামুদ্রিক শোনালি বাইম (২-৬কেজি সাইজ ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 750,
    "oldPrice": 750,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-sholali-baim-whole-fish-bazar-seafood-1759272006130",
    "isSuperOffer": false
  },
  {
    "id": "68dc5b4b24fab62beb98f479",
    "name": "Lakkha Fish Curry Cut (Only Steak)  - লাক্ষা মাছ (২-৪কেজি সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Steaks and Fillet",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "500gm",
    "price": 700,
    "oldPrice": 700,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-lakkha-fish-curry-cut-only-steak-fish-bazar-steaks-and-fillet-seafood-1759271748478",
    "isSuperOffer": false
  },
  {
    "id": "68dc5aab24fab62beb98f018",
    "name": "Lakkha Fish Curry Cut (Only Steak)  - লাক্ষা মাছ (২-৪কেজি সাইজ ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Steaks and Fillet",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 1390,
    "oldPrice": 1390,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-lakkha-fish-curry-cut-only-steak-fish-bazar-steaks-and-fillet-seafood-1759271557935",
    "isSuperOffer": false
  },
  {
    "id": "68dc598524fab62beb98e560",
    "name": "Lakkha Fish (Whole) - লাক্ষা মাছ (২-৪কেজি সাইজ ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1 kg",
    "price": 1190,
    "oldPrice": 1190,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-lakkha-fish-whole-fish-bazar-seafood-1759271271151",
    "isSuperOffer": false
  },
  {
    "id": "68dc588424fab62beb98df18",
    "name": "Salmon Fish (whole) - সালমন মাছ (১পিসে ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 890,
    "oldPrice": 890,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-salmon-fish-whole-fish-bazar-seafood-1759271030689",
    "isSuperOffer": false
  },
  {
    "id": "68dc577324fab62beb98d6f2",
    "name": "Salmon Fish Curry Cut (ready to cook) - সালমন মাছ (১পিসে কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Steaks and Fillet",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759270599374",
    "isSuperOffer": false
  },
  {
    "id": "68dc55d424fab62beb98c876",
    "name": "Parshe Fish (Whole) - পারশে মাছ (মিডিয়াম সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 790,
    "oldPrice": 790,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-parshe-fish-whole-fish-bazar-fresh-water-fish-1759270328934",
    "isSuperOffer": false
  },
  {
    "id": "68dc54ef24fab62beb98c34b",
    "name": "Parshe Fish (Whole) - পারশে মাছ (বিগ সাইজ ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 890,
    "oldPrice": 890,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-parshe-fish-whole-fish-bazar-fresh-water-fish-1759270095652",
    "isSuperOffer": false
  },
  {
    "id": "68dc53de24fab62beb98b955",
    "name": "Parshe Fish Clean & Dressed (ready to cook) - পারশে মাছ (বিগ সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 500,
    "oldPrice": 500,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-parshe-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759269851095",
    "isSuperOffer": false
  },
  {
    "id": "68dc536924fab62beb98b51b",
    "name": "Parshe Fish Clean & Dressed (ready to cook) - পারশে মাছ (মিডিয়াম ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 430,
    "oldPrice": 430,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-parshe-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759269728754",
    "isSuperOffer": false
  },
  {
    "id": "68dc52eb24fab62beb98b22a",
    "name": "Parshe Fish Clean & Dressed (ready to cook) - পারশে মাছ (মিডিয়াম ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1 kg",
    "price": 860,
    "oldPrice": 860,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-parshe-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759269587242",
    "isSuperOffer": false
  },
  {
    "id": "68dc521d24fab62beb98ac00",
    "name": "Parshe Fish Clean & Dressed (ready to cook) - পারশে মাছ (বিগ সাইজ ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759269147678",
    "isSuperOffer": false
  },
  {
    "id": "68dc4fd824fab62beb989ce0",
    "name": "Deshi/Shal Baim (whole) - দেশি/শাল বাইম (বিগ, ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshishal-baim-whole-fish-bazar-fresh-water-fish-1759268813906",
    "isSuperOffer": false
  },
  {
    "id": "68dc4edd24fab62beb989467",
    "name": "Deshi/Shal Baim Clean & Dressed (ready to cook) - দেশি/শাল বাইম (বিগ, ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 1350,
    "oldPrice": 1350,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshishal-baim-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759268542014",
    "isSuperOffer": false
  },
  {
    "id": "68dc4dd724fab62beb988ab6",
    "name": "Deshi/Shal Baim Curry Cut (ready to cook) - দেশি/শাল বাইম (বিগ, ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 720,
    "oldPrice": 720,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshishal-baim-curry-cut-ready-to-cook-fish-bazar-steaks-and-fillet-1759268300727",
    "isSuperOffer": false
  },
  {
    "id": "68dc4cff24fab62beb988478",
    "name": "Deshi/Shal Baim Curry Cut (ready to cook) - দেশি/শাল বাইম (বিগ, ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 1340,
    "oldPrice": 1340,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759267612597",
    "isSuperOffer": false
  },
  {
    "id": "68dc4acb24fab62beb9872a1",
    "name": "River Gojal Fish (whole) - গজাল মাছ (১পিসে ১কেজি)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 690,
    "oldPrice": 690,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759267386651",
    "isSuperOffer": false
  },
  {
    "id": "68dc49f824fab62beb986b9e",
    "name": "River Gojal Fish Curry Cut (ready to cook) - গজাল মাছ (১পিসে ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1 kg",
    "price": 690,
    "oldPrice": 690,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759266992266",
    "isSuperOffer": false
  },
  {
    "id": "68dc480624fab62beb985563",
    "name": "River Piyali Fish (ready to cook) - পিয়ালি মাছ (৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 430,
    "oldPrice": 430,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-piyali-fish-ready-to-cook-fish-bazar-steaks-and-fillet-1759266817234",
    "isSuperOffer": false
  },
  {
    "id": "68dc474a24fab62beb984d92",
    "name": "River Piyali Fish (ready to cook) - পিয়ালি মাছ ( ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 850,
    "oldPrice": 850,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759266499230",
    "isSuperOffer": false
  },
  {
    "id": "68dc462624fab62beb984222",
    "name": "Deshi Koi 1kg big 13/14pcs (whole) দেশি কৈ ",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 1450,
    "oldPrice": 1450,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-koi-fish-whole-fish-bazar-fresh-water-fish-1759266319000",
    "isSuperOffer": false
  },
  {
    "id": "68dc458724fab62beb983b54",
    "name": "Deshi Koi 500gm- big 6/7pcs দেশি কৈ",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "500gm",
    "price": 730,
    "oldPrice": 730,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-koi-fish-whole-fish-bazar-fresh-water-fish-1759266173241",
    "isSuperOffer": false
  },
  {
    "id": "68dc449524fab62beb982fbe",
    "name": "Deshi Koi Fish Clean & Dressed (ready to cook) - দেশি কই ( বড় সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 550,
    "oldPrice": 550,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-koi-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759265919343",
    "isSuperOffer": false
  },
  {
    "id": "68dc43b724fab62beb98265c",
    "name": "Deshi Koi Fish Clean & Dressed (ready to cook) - দেশি কই ( বড় সাইজ ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 1090,
    "oldPrice": 1090,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759265442165",
    "isSuperOffer": false
  },
  {
    "id": "68dc427d24fab62beb981acd",
    "name": "Loitta fish (whole) - লৈট্টা মাছ (বড় সাইজ ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 390,
    "oldPrice": 390,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-loitta-fish-whole-fish-bazar-seafood-1759265392716",
    "isSuperOffer": false
  },
  {
    "id": "68dc41ae24fab62beb980c39",
    "name": "Loitta fish (Clean & Dressed (ready to cook) - লৈট্টা মাছ (বড় সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Steaks and Fillet",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "500gm",
    "price": 230,
    "oldPrice": 230,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-loitta-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-seafood-1759265189278",
    "isSuperOffer": false
  },
  {
    "id": "68dc410e24fab62beb980010",
    "name": "Loitta fish (Clean & Dressed (ready to cook) - লৈট্টা মাছ (বড় সাইজ ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Steaks and Fillet",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 450,
    "oldPrice": 450,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759264878260",
    "isSuperOffer": false
  },
  {
    "id": "68dc401324fab62beb97f20e",
    "name": "Ayla/ Macrel Fish (whole) - আইলা/ম্যাক্রেল (৬পিসে ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1 kg",
    "price": 390,
    "oldPrice": 390,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759264572516",
    "isSuperOffer": false
  },
  {
    "id": "68dc3f0724fab62beb97e038",
    "name": "Black Pomfret Curry Cut (ready to cook) - কালো চাঁন্দা (২-৩পিসে ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Steaks and Fillet",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 650,
    "oldPrice": 650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-black-pomfret-curry-cut-ready-to-cook-fish-bazar-steaks-and-fillet-seafood-1759264504527",
    "isSuperOffer": false
  },
  {
    "id": "68dc3de724fab62beb97d06a",
    "name": "Black Pomfret (whole) - কালো চাঁন্দা (২-৩পিসে ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 650,
    "oldPrice": 650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-black-pomfret-whole-fish-bazar-seafood-1759264223240",
    "isSuperOffer": false
  },
  {
    "id": "68dbf12224fab62beb8f0904",
    "name": "Silver Pomfret Clean & Dressed (ready to cook) - রুপচাঁদা (৬পিসে ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Steaks and Fillet",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "500gm",
    "price": 630,
    "oldPrice": 630,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-silver-pomfret-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-seafood-1759244574314",
    "isSuperOffer": false
  },
  {
    "id": "68dbf07124fab62beb8efa73",
    "name": "Silver Pomfret Clean & Dressed (ready to cook) - রুপচাঁদা (৪পিসে ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Steaks and Fillet",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "500gm",
    "price": 840,
    "oldPrice": 840,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-silver-pomfret-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-seafood-1759244380954",
    "isSuperOffer": false
  },
  {
    "id": "68dbef9d24fab62beb8edf21",
    "name": "Silver Pomfret Clean & Dressed (ready to cook) - রুপচাঁদা (৬-৭পিসে ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)",
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 1680,
    "oldPrice": 1680,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-silver-pomfret-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-seafood-1759244182163",
    "isSuperOffer": false
  },
  {
    "id": "68dbef1124fab62beb8ecdf7",
    "name": "Silver Pomfret Clean & Dressed (ready to cook) - রুপচাঁদা (১১-১২পিসে ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Steaks and Fillet",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1 kg",
    "price": 1250,
    "oldPrice": 1250,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-silver-pomfret-clean-and-dressed-ready-to-cook-steaks-and-fillet-seafood-1759244041881",
    "isSuperOffer": false
  },
  {
    "id": "68dbeccd24fab62beb8e8f60",
    "name": "Silver Pomfret (whole) - রুপচাঁদা (৫-৬পিসে ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 1550,
    "oldPrice": 1550,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-silver-pomfret-whole-fish-bazar-seafood-1759243442874",
    "isSuperOffer": false
  },
  {
    "id": "68dbea2824fab62beb8e4190",
    "name": "Silver Pomfret (whole) - রুপচাঁদা (৭-৮পিসে ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 1450,
    "oldPrice": 1450,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-silver-pomfret-whole-fish-bazar-seafood-1759242789508",
    "isSuperOffer": false
  },
  {
    "id": "68dbe99524fab62beb8e2e3b",
    "name": "Silver Pomfret (whole) - রুপচাঁদা (৯-১০পিসে ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 1250,
    "oldPrice": 1250,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-silver-pomfret-whole-seafood-1759242629827",
    "isSuperOffer": false
  },
  {
    "id": "68dbe8f524fab62beb8e2055",
    "name": "Silver Pomfret (whole) - রুপচাঁদা (১১-১২পিসে ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 1090,
    "oldPrice": 1090,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-silver-pomfret-whole-fish-bazar-seafood-1759242441592",
    "isSuperOffer": false
  },
  {
    "id": "68dbe63924fab62beb8de45c",
    "name": "Tuna Fish (whole) - টুনা ফিস (২-৪কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 550,
    "oldPrice": 550,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-tuna-fish-whole-fish-bazar-steaks-and-fillet-1759241782011",
    "isSuperOffer": false
  },
  {
    "id": "68dbe5a224fab62beb8dd3d6",
    "name": "Tuna Fish (whole) - টুনা ফিস (১-১.৫কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 490,
    "oldPrice": 490,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-tuna-fish-whole-fish-bazar-seafood-1759241618293",
    "isSuperOffer": false
  },
  {
    "id": "68dbe4ca24fab62beb8db80e",
    "name": "Tuna Fish Curry Cut (ready to cook) - টুনা ফিস (২-৪কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Steaks and Fillet",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 690,
    "oldPrice": 690,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-tuna-fish-curry-cut-ready-to-cook-fish-bazar-steaks-and-fillet-1759241415042",
    "isSuperOffer": false
  },
  {
    "id": "68dbe44424fab62beb8da70b",
    "name": "Tuna Fish Curry Cut (ready to cook) - টুনা ফিস (১-২কেজি সাইজ, ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Steaks and Fillet",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 590,
    "oldPrice": 590,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759240931829",
    "isSuperOffer": false
  },
  {
    "id": "68dbe28424fab62beb8d7145",
    "name": "Mola Fish Clean & Dressed (ready to cook) - মলা মাছ (মিডিয়াম সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 320,
    "oldPrice": 320,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-mola-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759240831545",
    "isSuperOffer": false
  },
  {
    "id": "68dbe1b024fab62beb8d5a36",
    "name": "Mola Fish Clean & Dressed (ready to cook) - মলা মাছ (মিডিয়াম সাইজ ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 640,
    "oldPrice": 640,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-mola-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759240609955",
    "isSuperOffer": false
  },
  {
    "id": "68dbe07024fab62beb8d3a14",
    "name": "Deshi Puti Fish Clean & Dressed (ready to cook) -  দেশি পুঁটি (বিগ সাইজ ৫০০গ্রাম)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 360,
    "oldPrice": 360,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-puti-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759240275350",
    "isSuperOffer": false
  },
  {
    "id": "68dbdf9b24fab62beb8d2afe",
    "name": "Deshi Puti Fish Clean & Dressed (ready to cook) -  দেশি পুঁটি (বিগ সাইজ ১কেজি)",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 760,
    "oldPrice": 760,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-puti-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759240086814",
    "isSuperOffer": false
  },
  {
    "id": "68dbda6224fab62beb8c9f57",
    "name": "Gutum Fish Head-less (ready to cook) - গুতুম মাছ ৫০০গ্রাম",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 480,
    "oldPrice": 480,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-gutum-fish-head-less-ready-to-cook-fish-bazar-steaks-and-fillet-1759238745288",
    "isSuperOffer": false
  },
  {
    "id": "68dbd9a824fab62beb8c8f50",
    "name": "Gutum Fish Head-less (ready to cook) - গুতুম মাছ ১কেজি",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 960,
    "oldPrice": 960,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-gutum-fish-head-less-ready-to-cook-fish-bazar-steaks-and-fillet-1759238504608",
    "isSuperOffer": false
  },
  {
    "id": "68dbd83024fab62beb8c6d5c",
    "name": "Batashi Fish Clean & Dressed (ready to cook) - বাতাসি মাছ ৫০০গ্রাম",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 780,
    "oldPrice": 780,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-batashi-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759238165526",
    "isSuperOffer": false
  },
  {
    "id": "68dbd71c24fab62beb8c57bf",
    "name": "Batashi Fish Clean & Dressed (ready to cook) - বাতাসি মাছ ১কেজি",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 1580,
    "oldPrice": 1580,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-batashi-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759237900115",
    "isSuperOffer": false
  },
  {
    "id": "68dbd62c24fab62beb8c3a95",
    "name": "Kajuli Fish Clean & Dressed (ready to cook) - কাজুলী মাছ ৫০০গ্রাম",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 690,
    "oldPrice": 690,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-kajuli-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759237665897",
    "isSuperOffer": false
  },
  {
    "id": "68dbd59424fab62beb8c24e6",
    "name": "Kajuli Fish Clean & Dressed (ready to cook) - কাজুলি মাছ ১কেজি",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 1380,
    "oldPrice": 1380,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-kajuli-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759237500783",
    "isSuperOffer": false
  },
  {
    "id": "68dbd35724fab62beb8be855",
    "name": "River Datina Fish (whole) - দাতিনা মাছ ২পিসে ১কেজি",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 690,
    "oldPrice": 690,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759236827625",
    "isSuperOffer": false
  },
  {
    "id": "68dbd28224fab62beb8bd05b",
    "name": "River Datina Fish (whole) - দাতিনা মাছ ৩-৪পিসে ১কেজি",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 650,
    "oldPrice": 650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-datina-fish-whole-fresh-water-fish-1759236614787",
    "isSuperOffer": false
  },
  {
    "id": "68dbd08124fab62beb8b853e",
    "name": "Kaikka Fish Curry Cut (ready to cook) - কাইক্কা মাছ ৫০০গ্রাম",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 420,
    "oldPrice": 420,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759236094118",
    "isSuperOffer": false
  },
  {
    "id": "68dbcf8624fab62beb8b6e50",
    "name": "Kaikka Fish Curry Cut (ready to cook) - কাইক্কা মাছ ১কেজি।",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1 kg",
    "price": 940,
    "oldPrice": 940,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-blob-1759235560484",
    "isSuperOffer": false
  },
  {
    "id": "68dbcc6d24fab62beb8b11e9",
    "name": "Kaikka Fish Clean & Dressed (ready to cook) - কাইক্কা মাছ ৫০০গ্রাম",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 420,
    "oldPrice": 420,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-kaikka-fish-clean-and-dressed-ready-to-cook-steaks-and-fillet-1759235119708",
    "isSuperOffer": false
  },
  {
    "id": "68dbcaaf24fab62beb8adee7",
    "name": "Kaikka Fish Clean & Dressed (ready to cook) - কাইক্কা মাছ ১কেজি",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 940,
    "oldPrice": 940,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-kaikka-fish-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759234693644",
    "isSuperOffer": false
  },
  {
    "id": "68dbc54924fab62beb8a54ff",
    "name": "Kaikka Fish (whole) - কাইক্কা মাছ ১কেজি",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 790,
    "oldPrice": 790,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-kaikka-fish-whole-fish-bazar-fresh-water-fish-1759233306473",
    "isSuperOffer": false
  },
  {
    "id": "68db964a24fab62beb84bec3",
    "name": "Deshi Magur Curry Cut (ready to cook) - দেশি মাগুর ৫০০গ্রাম",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 420,
    "oldPrice": 420,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-magur-curry-cut-ready-to-cook-fish-bazar-steaks-and-fillet-1759221291221",
    "isSuperOffer": false
  },
  {
    "id": "68db957e24fab62beb84a114",
    "name": "Deshi Magur Belly Clean & Dressed (ready to cook) - দেশি মাগুর ৫০০গ্রাম",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 420,
    "oldPrice": 420,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-magur-belly-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759221109861",
    "isSuperOffer": false
  },
  {
    "id": "68db948e24fab62beb848623",
    "name": "Deshi Magur Curry Cut (ready to cook) - দেশি মাগুর ১কেজি",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 940,
    "oldPrice": 940,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-magur-curry-cut-ready-to-cook-fish-bazar-steaks-and-fillet-1759220862807",
    "isSuperOffer": false
  },
  {
    "id": "68db92bd24fab62beb844e4a",
    "name": "Deshi Magur Belly Clean & Dressed (ready to cook) - দেশি মাগুর ১কেজি",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 940,
    "oldPrice": 940,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-magur-belly-clean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759220391095",
    "isSuperOffer": false
  },
  {
    "id": "68db906e24fab62beb840c24",
    "name": "Deshi Magur (whole) - দেশি মাগুর ৫০০গ্রাম।",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)",
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 400,
    "oldPrice": 400,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-magur-whole-fish-bazar-fresh-water-fish-steaks-and-fillet-1759219794690",
    "isSuperOffer": false
  },
  {
    "id": "68db8f4c24fab62beb83e5c3",
    "name": "Deshi Magur (whole) - দেশি মাগুর ১কেজি",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)",
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 790,
    "oldPrice": 790,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-magur-whole-fish-bazar-fresh-water-fish-steaks-and-fillet-1759219499869",
    "isSuperOffer": false
  },
  {
    "id": "68db8ba624fab62beb836b3c",
    "name": "Deshi Shing Fish Cean & Dressed (ready to cook) - দেশি শিং ৫০০গ্রাম",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 460,
    "oldPrice": 460,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-shing-fish-cean-and-dressed-ready-to-cook-fish-bazar-steaks-and-fillet-1759218575388",
    "isSuperOffer": false
  },
  {
    "id": "68db87a924fab62beb82f62c",
    "name": "Deshi Shing (whole) - দেশি শিং মাছ ৫০০গ্রাম।",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)",
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 380,
    "oldPrice": 380,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-shing-whole-fish-bazar-fresh-water-fish-steaks-and-fillet-1759217524465",
    "isSuperOffer": false
  },
  {
    "id": "68db869924fab62beb82ceb3",
    "name": "Deshi Shing (whole) - দেশি শিং মাছ ১কেজি",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)",
      "Steaks and Fillet"
    ],
    "weight": "1 kg",
    "price": 750,
    "oldPrice": 750,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-shing-whole-fish-bazar-fresh-water-fish-steaks-and-fillet-1759217279804",
    "isSuperOffer": false
  },
  {
    "id": "68d8f3985719a0bdb98d492b",
    "name": "Deshi Shing Fish Clean & Dressed (ready to cook) - দেশি শিং ১কেজি",
    "categoryIds": [
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Steaks and Fillet"
    ],
    "weight": "1 kg",
    "price": 900,
    "oldPrice": 900,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-shing-fish-fish-bazar-steaks-and-fillet-1759048582277",
    "isSuperOffer": false
  },
  {
    "id": "68bca9c9c917e4a2bae6a5dc",
    "name": "Chaga Chingri - চাগা চিংড়ি ৫০০গ্রাম (হেড-লেস)",
    "categoryIds": [
      "6893b72178c11056a038e427",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)",
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 490,
    "oldPrice": 490,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chaga-chingri-fish-bazar-shrimp-steaks-and-fillet-1757194692258",
    "isSuperOffer": false
  },
  {
    "id": "68bca873c917e4a2bae690c6",
    "name": "Lobster (sea) - লবস্টার ৬-৭পিসে ১কেজি (whole)",
    "categoryIds": [
      "6893b72178c11056a038e427",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 1790,
    "oldPrice": 1790,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-lobster-sea-whole-fish-bazar-shrimp-seafood-1757194353457",
    "isSuperOffer": false
  },
  {
    "id": "68bca79ac917e4a2bae68acd",
    "name": "brown Chingri (sea)- ব্রাউন চিংড়ি/ সামুদ্রিক চাগা চিংড়ি (whole)",
    "categoryIds": [
      "6893b72178c11056a038e427",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 950,
    "oldPrice": 950,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-brown-chingri-sea-whole-fish-bazar-shrimp-seafood-1757194133649",
    "isSuperOffer": false
  },
  {
    "id": "68bca677c917e4a2bae68004",
    "name": "Lobster (sea) - লবস্টার ৩-৪পিসে ১কেজি (whole)",
    "categoryIds": [
      "6893b72178c11056a038e427",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1kg",
    "price": 1990,
    "oldPrice": 1990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-lobster-sea-whole-fish-bazar-shrimp-seafood-1757193840957",
    "isSuperOffer": false
  },
  {
    "id": "68bca557c917e4a2bae66ced",
    "name": "Chaga Shrimp (whole) - চাগা চিংড়ি (মিডিয়াম ১কেজি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1 kg",
    "price": 880,
    "oldPrice": 880,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chaga-chingri-whole-fish-bazar-shrimp-1757193554822",
    "isSuperOffer": false
  },
  {
    "id": "68bca46fc917e4a2bae66455",
    "name": "River Dima Shrimp (whole) ডিমা চিংড়ি (১কেজি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1kg",
    "price": 1580,
    "oldPrice": 1580,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-dima-chingri-whole-fish-bazar-shrimp-1757193315267",
    "isSuperOffer": false
  },
  {
    "id": "68bca397c917e4a2bae65956",
    "name": "Horina Chingri - হরিনা চিংড়ি (whole) ১কেজি।",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1kg",
    "price": 850,
    "oldPrice": 850,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-horina-chingri-whole-fish-bazar-shrimp-1757193107847",
    "isSuperOffer": false
  },
  {
    "id": "68bca303c917e4a2bae64cfb",
    "name": "Bagda Chingri - বাগদা চিংড়ি ২৮-৩২পিসে ১কেজি (whole)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1kg",
    "price": 1150,
    "oldPrice": 1150,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bagda-chingri-whole-fish-bazar-shrimp-1757192957456",
    "isSuperOffer": false
  },
  {
    "id": "68bca243c917e4a2bae64384",
    "name": "Bagda Chingri - বাগদা চিংড়ি ১৮-২২পিসে ১কেজি (whole)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1kg",
    "price": 1250,
    "oldPrice": 1250,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-bagda-chingri-whole-fish-bazar-shrimp-1757192764142",
    "isSuperOffer": false
  },
  {
    "id": "68bca16ac917e4a2bae639df",
    "name": "Golda Shrimp (whole) - গলদা চিংড়ি ৬-৭পিসে ���কেজি",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1 kg",
    "price": 1690,
    "oldPrice": 1690,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-golda-chinri-whole-fish-bazar-shrimp-1757192546709",
    "isSuperOffer": false
  },
  {
    "id": "68bca06ac917e4a2bae6326a",
    "name": "Sea Tiger chingri - সামুদ্রিক টাইগার চিংড়ি (whole)",
    "categoryIds": [
      "6893b72178c11056a038e427",
      "6893b30278c11056a038b14e"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)",
      "Seafood (সামুদ্রিক মাছ)"
    ],
    "weight": "1 kg",
    "price": 490,
    "oldPrice": 490,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-sea-tiger-chingri-whole-fish-bazar-shrimp-seafood-1757192291176",
    "isSuperOffer": false
  },
  {
    "id": "68bc9f9dc917e4a2bae62b30",
    "name": "Chali Shrimp (whole) - চালি চিংড়ি (১কেজি)",
    "categoryIds": [
      "6893b72178c11056a038e427"
    ],
    "categoryNames": [
      "Shrimp  (চিংড়ি)"
    ],
    "weight": "1kg",
    "price": 780,
    "oldPrice": 780,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-chali-chingri-whole-fish-bazar-shrimp-1757192002682",
    "isSuperOffer": false
  },
  {
    "id": "68bc9e5bc917e4a2bae615c3",
    "name": "Rajhash - রাজহাঁস স্কিন সহ ক্লিন করা (মাংসের ওজনে)",
    "categoryIds": [
      "6817732bcebbe65baee5cbc0"
    ],
    "categoryNames": [
      "Meat (মাংস)"
    ],
    "weight": "1 kg",
    "price": 950,
    "oldPrice": 950,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-rajhash-fish-bazar-meat-1757191765940",
    "isSuperOffer": false
  },
  {
    "id": "68bc9c45c917e4a2bae5fbfd",
    "name": "Kobutor - কবুতর বড় সাইজ ১পিস (স্কিন সহ)",
    "categoryIds": [
      "6817732bcebbe65baee5cbc0"
    ],
    "categoryNames": [
      "Meat (মাংস)"
    ],
    "weight": "1 piece",
    "price": 290,
    "oldPrice": 290,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-kobutor-fish-bazar-meat-1757191230657",
    "isSuperOffer": false
  },
  {
    "id": "68bc9bbfc917e4a2bae5f8fe",
    "name": "Kobutor - কবুতর মিডিয়াম সাইজ ১পিস (স্কিন সহ)",
    "categoryIds": [
      "6817732bcebbe65baee5cbc0"
    ],
    "categoryNames": [
      "Meat (মাংস)"
    ],
    "weight": "1 piece",
    "price": 250,
    "oldPrice": 250,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-kobutor-fish-bazar-meat-1757191097890",
    "isSuperOffer": false
  },
  {
    "id": "68bc995fc917e4a2bae5d996",
    "name": "Deshi Murgi - দেশি মুরগী (স্কিন ছাড়া)",
    "categoryIds": [
      "6817732bcebbe65baee5cbc0"
    ],
    "categoryNames": [
      "Meat (মাংস)"
    ],
    "weight": "1kg",
    "price": 620,
    "oldPrice": 620,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-murgi-fish-bazar-meat-1757190491798",
    "isSuperOffer": false
  },
  {
    "id": "68bc98d8c917e4a2bae5cde8",
    "name": "Deshi Morog - দেশি মোরগ (স্কিন ছাড়া)",
    "categoryIds": [
      "6817732bcebbe65baee5cbc0"
    ],
    "categoryNames": [
      "Meat (মাংস)"
    ],
    "weight": "1kg",
    "price": 650,
    "oldPrice": 650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-morog-fish-bazar-meat-1757190346696",
    "isSuperOffer": false
  },
  {
    "id": "68bc973fc917e4a2bae5b723",
    "name": "Deshi Murgi - দেশি মুরগী (স্কিন সহ)",
    "categoryIds": [
      "6817732bcebbe65baee5cbc0"
    ],
    "categoryNames": [
      "Meat (মাংস)"
    ],
    "weight": "1 kg",
    "price": 620,
    "oldPrice": 620,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-morog-fish-bazar-meat-1757189945391",
    "isSuperOffer": false
  },
  {
    "id": "68bc9655c917e4a2bae5a973",
    "name": "Deshi Morog - দেশি মোরগ (স্কিন সহ)",
    "categoryIds": [
      "6817732bcebbe65baee5cbc0"
    ],
    "categoryNames": [
      "Meat (মাংস)"
    ],
    "weight": "1kg",
    "price": 650,
    "oldPrice": 650,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-morog-fish-bazar-meat-1757189649586",
    "isSuperOffer": false
  },
  {
    "id": "68bc9462c917e4a2bae585ea",
    "name": "Hilsha Fish Egg - ইলিশের ডিম ছোট সাইজ (১কেজি বক্স)",
    "categoryIds": [
      "6893a32578c11056a037d205"
    ],
    "categoryNames": [
      "Fish Egg  (মাছের ডিম)"
    ],
    "weight": "1 kg",
    "price": 4500,
    "oldPrice": 4500,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-hilsha-fish-egg-fish-bazar-fish-egg-1757189186385",
    "isSuperOffer": false
  },
  {
    "id": "68ac6930daeab932c22e7e41",
    "name": "Golda Brain 500gm- গলদা চিংড়ি এর ঘিলু বা মগজ",
    "categoryIds": [
      "6893a80378c11056a0381438",
      "6893a32578c11056a037d205"
    ],
    "categoryNames": [
      "Crab and Others (কাকড়া এবং অন্যান্য)",
      "Fish Egg  (মাছের ডিম)"
    ],
    "weight": "500gm",
    "price": 450,
    "oldPrice": 450,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-golda-btain-fish-bazar-fish-egg-crab-and-others-1756129579661",
    "isSuperOffer": false
  },
  {
    "id": "68ac688adaeab932c22e658d",
    "name": "Golda Brain 1kg box - গলদা চিংড়ি এর ঘিলু বা মগজ",
    "categoryIds": [
      "6893a32578c11056a037d205",
      "6893a80378c11056a0381438"
    ],
    "categoryNames": [
      "Fish Egg  (মাছের ডিম)",
      "Crab and Others (কাকড়া এবং অন্যান্য)"
    ],
    "weight": "1 kg",
    "price": 900,
    "oldPrice": 900,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-golda-brain-fish-bazar-crab-and-others-fish-egg-1756129394398",
    "isSuperOffer": false
  },
  {
    "id": "68ac6781daeab932c22e49e8",
    "name": "Golda Sash 500gm- গলদা চিংড়ি এর পায়ের শাস",
    "categoryIds": [
      "6893a32578c11056a037d205",
      "6893a80378c11056a0381438"
    ],
    "categoryNames": [
      "Fish Egg  (মাছের ডিম)",
      "Crab and Others (কাকড়া এবং অন্যান্য)"
    ],
    "weight": "500gm",
    "price": 450,
    "oldPrice": 450,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-golda-sash-fish-bazar-crab-and-others-fish-egg-1756129147239",
    "isSuperOffer": false
  },
  {
    "id": "68ac65ebdaeab932c22e1dc6",
    "name": "Golda Sash 1kg box - গলদা চিংড়ি এর পায়ের শাস",
    "categoryIds": [
      "6893a32578c11056a037d205",
      "6893a80378c11056a0381438"
    ],
    "categoryNames": [
      "Fish Egg  (মাছের ডিম)",
      "Crab and Others (কাকড়া এবং অন্যান্য)"
    ],
    "weight": "1 piece",
    "price": 900,
    "oldPrice": 900,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-golda-sash-fish-bazar-crab-and-others-fish-egg-1756128739878",
    "isSuperOffer": false
  },
  {
    "id": "68a58c26545201587b1ff319",
    "name": "Deshi Tangra (medium) - দেশি টেংরা (১কেজি)",
    "categoryIds": [
      "68a588689db86a4c4e3a6538",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Other",
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 790,
    "oldPrice": 790,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-tangra-medium-fish-bazar-deshi-tangra-1755679763317",
    "isSuperOffer": false
  },
  {
    "id": "68a58b88545201587b1fe2d3",
    "name": "Deshi Tangra (medium) - দেশি টেংরা (৫০০গ্রাম)",
    "categoryIds": [
      "68a588689db86a4c4e3a6538",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Other",
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 400,
    "oldPrice": 400,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-tangra-medium-fish-bazar-deshi-tangra-1755679588954",
    "isSuperOffer": false
  },
  {
    "id": "68a58a6e9db86a4c4e3aa6f2",
    "name": "Deshi Tangra (premium) - দেশি টেংরা (১কেজি)",
    "categoryIds": [
      "68a588689db86a4c4e3a6538",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Other",
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-tangra-premium-fish-bazar-deshi-tangra-1755679336891",
    "isSuperOffer": false
  },
  {
    "id": "68a589c69db86a4c4e3a889a",
    "name": "Deshi Tangra (premium) - দেশি টেংরা (৫০০গ্রাম)",
    "categoryIds": [
      "68a588689db86a4c4e3a6538",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Other",
      "Steaks and Fillet"
    ],
    "weight": "500gm",
    "price": 500,
    "oldPrice": 500,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-tangra-premium-fish-bazar-deshi-tangra-1755679141770",
    "isSuperOffer": false
  },
  {
    "id": "68a58785d9ca24c03b7a68b2",
    "name": "Deshi Tangra (big) - দেশি টেংরা (১কেজি)",
    "categoryIds": [
      "68a588689db86a4c4e3a6538",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Other",
      "Steaks and Fillet"
    ],
    "weight": "1kg",
    "price": 900,
    "oldPrice": 900,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-tangra-big-fish-bazar-steaks-and-fillet-1755678476519",
    "isSuperOffer": false
  },
  {
    "id": "68a23848e64b3cb407094cab",
    "name": "Deshi Tangra (Big) - দেশি টেংরা (৫০০গ্রাম প্যাক)",
    "categoryIds": [
      "68a588689db86a4c4e3a6538",
      "68a443a1e64b3cb40732dc40"
    ],
    "categoryNames": [
      "Other",
      "Steaks and Fillet"
    ],
    "weight": "Big ",
    "price": 450,
    "oldPrice": 450,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-deshi-tangra-big-fish-bazar-clean-and-cut-fish-1755461634369",
    "isSuperOffer": false
  },
  {
    "id": "68a18748e64b3cb407f64455",
    "name": "Ruhi Fish Egg - রুই মাছের ডিম (১কেজি বক্স)",
    "categoryIds": [
      "6893a32578c11056a037d205"
    ],
    "categoryNames": [
      "Fish Egg  (মাছের ডিম)"
    ],
    "weight": "1kg",
    "price": 600,
    "oldPrice": 600,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-ruhi-fish-egg-fish-bazar-fish-egg-1755416244596",
    "isSuperOffer": false
  },
  {
    "id": "68a18629e64b3cb407f623df",
    "name": "Ruhi Fish Egg - রুই মাছের ডিম (৫০০গ্রাম বক্স",
    "categoryIds": [
      "6893a32578c11056a037d205"
    ],
    "categoryNames": [
      "Fish Egg  (মাছের ডিম)"
    ],
    "weight": "500gm",
    "price": 300,
    "oldPrice": 300,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-ruhi-fish-egg-fish-bazar-fish-egg-1755415947389",
    "isSuperOffer": false
  },
  {
    "id": "68a18499e64b3cb407f60072",
    "name": "Shing Fish Egg - শিং মাছের ডিম (১কেজি বক্স)",
    "categoryIds": [
      "6893a32578c11056a037d205"
    ],
    "categoryNames": [
      "Fish Egg  (মাছের ডিম)"
    ],
    "weight": "1 kg",
    "price": 980,
    "oldPrice": 980,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-shing-fish-egg-fish-bazar-fish-egg-1755415633657",
    "isSuperOffer": false
  },
  {
    "id": "68a182eae64b3cb407f5d13d",
    "name": "Shing Fish Egg - শিং মাছের ডিম ৫০০গ্রাম বক্স",
    "categoryIds": [
      "6893a32578c11056a037d205"
    ],
    "categoryNames": [
      "Fish Egg  (মাছের ডিম)"
    ],
    "weight": "500gm",
    "price": 490,
    "oldPrice": 490,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-shing-fish-egg-fish-bazar-fish-egg-1755415150825",
    "isSuperOffer": false
  },
  {
    "id": "68a18122e64b3cb407f5a2b4",
    "name": "Hilsha Fish Egg - ইলিশ মাছের ডিম ১কেজি বক্স",
    "categoryIds": [
      "6893a32578c11056a037d205"
    ],
    "categoryNames": [
      "Fish Egg  (মাছের ডিম)"
    ],
    "weight": "1 kg",
    "price": 5000,
    "oldPrice": 5000,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-hilsha-fish-egg-fish-egg-1755414750374",
    "isSuperOffer": false
  },
  {
    "id": "68a17fede64b3cb407f582e4",
    "name": "Hilsha Fish Egg - ইলিশ মাছের ডিম ৫০০গ্রাম বক্স",
    "categoryIds": [
      "6893a32578c11056a037d205"
    ],
    "categoryNames": [
      "Fish Egg  (মাছের ডিম)"
    ],
    "weight": "500gm",
    "price": 2500,
    "oldPrice": 2500,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-hilsha-fish-egg-fish-bazar-fish-egg-1755414271377",
    "isSuperOffer": false
  },
  {
    "id": "686b798edbb38265b66db12d",
    "name": "River Pangash Fish (whole) size: 5-8kg. Weight: 1kg. (নদীর পাঙ্গাশ মাছ)",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1 kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-pangash-fish-whole-size-5-8kg-weight-1kg-1759880256017.-(-)-Fish-Bazar-Fresh-Water-Fish-(-)",
    "isSuperOffer": false
  },
  {
    "id": "686b787adbb38265b66d6489",
    "name": "River Boal Fish whole (size: 5-8kg.) বোয়াল মাছ ১কেজি",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 1490,
    "oldPrice": 1490,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-boal-fish-whole-size-5-8kg-1759815024924.)-Fish-Bazar-Fresh-Water-Fish-(-)",
    "isSuperOffer": false
  },
  {
    "id": "686b777fdbb38265b66d3363",
    "name": "River Boal Fish (নদীর বোয়াল মাছ) ২.৫-৪ কেজি সাইজ প্রতি কেজি",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 1290,
    "oldPrice": 1290,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-boal-fish-1759524461316.-Fish-Bazar-Fresh-Water-Fish-(-)",
    "isSuperOffer": false
  },
  {
    "id": "686b7723dbb38265b66d2157",
    "name": "River Boal Fish (নদীর বোয়াল মাছ) ১-২ কেজি সাইজ প্রতি কেজি",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 990,
    "oldPrice": 990,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-boal-fish-fish-bazar-fresh-water-fish-1759524391037",
    "isSuperOffer": false
  },
  {
    "id": "686b6e7fdbb38265b66b7df2",
    "name": "River Ayer Fish (whole) size: 2-3pcs 1kg.",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 790,
    "oldPrice": 790,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-river-ayer-fish-whole-size-2-3pcs-1kg-1759814760327.-Fish-Bazar-Fresh-Water-Fish-(-)",
    "isSuperOffer": false
  },
  {
    "id": "686b540bdbb38265b6648401",
    "name": "Chinahash Meat (Curry Cut) Net Weight: 1kg. (চিনাহাঁসের মাংস)",
    "categoryIds": [
      "6817732bcebbe65baee5cbc0"
    ],
    "categoryNames": [
      "Meat (মাংস)"
    ],
    "weight": "1kg",
    "price": 840,
    "oldPrice": 840,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-china-meat-fish-bazar-meat-1760005489718",
    "isSuperOffer": false
  },
  {
    "id": "686b5376dbb38265b66471a7",
    "name": "Deshi Patihash Meat (Curry Cut) Net Weight: 1kg. (দেশি পাতিহাঁসের মাংস)",
    "categoryIds": [
      "6817732bcebbe65baee5cbc0"
    ],
    "categoryNames": [
      "Meat (মাংস)"
    ],
    "weight": "1kg",
    "price": 780,
    "oldPrice": 780,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-patihash-meat-fish-bazar-meat-1760005006253",
    "isSuperOffer": false
  },
  {
    "id": "686b5153d3daed1c12ea271c",
    "name": "Rajhash Meat (Curry Cut) Net Weight: 1kg. (রাজাহাসের মাংস)",
    "categoryIds": [
      "6817732bcebbe65baee5cbc0"
    ],
    "categoryNames": [
      "Meat (মাংস)"
    ],
    "weight": "1 kg",
    "price": 940,
    "oldPrice": 940,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-rajhash-meat-curry-cut-net-weight-1kg-1760004800609.-(-)-Fish-Bazar-Meat-()",
    "isSuperOffer": false
  },
  {
    "id": "686b49dcd3daed1c12e8697e",
    "name": "Rui Fish (নদীর রুই মাছ) ২.৫-৪.৫ কেজি সাইজ প্রতি কেজি",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 590,
    "oldPrice": 590,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-rui-fish-1760000324721.-Fish-Bazar-Fresh-Water-Fish-(-)",
    "isSuperOffer": false
  },
  {
    "id": "681c9bea5cd8c70f163248df",
    "name": "Rui Fish (নদীর রুই মাছ) ১-১.৫ কেজি সাইজ প্রতি কেজি",
    "categoryIds": [
      "6868d9c7d99d6345bdaa44f5"
    ],
    "categoryNames": [
      "Fresh Water Fish  (আস্ত মাছ)"
    ],
    "weight": "1kg",
    "price": 390,
    "oldPrice": 390,
    "discount": 0,
    "image": "https://cdnnew.selfeb.com/images/view/selfeb-rui-fish-1760000230896.-Fish-Bazar-Fresh-Water-Fish-(-)",
    "isSuperOffer": false
  }
];

if (typeof module !== 'undefined') {
  module.exports = { categoriesData, productsData };
}
