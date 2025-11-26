const Restaurants = [
  { name: "Spicy Grill", rating: "4.1", price: "₹220 per person", location: "Sector 21", distance: "1.5 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "Urban Tadka", rating: "4.3", price: "₹260 per person", location: "City Center", distance: "3.1 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "Royal Biryani", rating: "4.5", price: "₹200 per person", location: "MG Road", distance: "2.0 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "Food Adda", rating: "4.0", price: "₹180 per person", location: "Sector 18", distance: "1.2 km", alcohol: "No", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Bombay Eatery", rating: "4.2", price: "₹240 per person", location: "Old Market", distance: "2.6 km", alcohol: "Yes", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" },
  { name: "Masala Junction", rating: "4.4", price: "₹300 per person", location: "Sector 10", distance: "3.7 km", alcohol: "No", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "Flavours of Punjab", rating: "4.6", price: "₹350 per person", location: "Mall Road", distance: "1.9 km", alcohol: "Yes", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "Street Bites", rating: "4.1", price: "₹120 per person", location: "Sector 27", distance: "0.8 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "Desi Rasoi", rating: "4.3", price: "₹170 per person", location: "Vellore Market", distance: "2.3 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Spice Nation", rating: "4.5", price: "₹280 per person", location: "Sector 11", distance: "3.4 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" },
    { name: "Taste Hub", rating: "4.2", price: "₹230 per person", location: "Sector 24", distance: "1.4 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "Punjab Zaika", rating: "4.4", price: "₹260 per person", location: "Bus Stand Road", distance: "2.8 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "Mehfil Darbar", rating: "4.5", price: "₹210 per person", location: "Sector 30", distance: "3.2 km", alcohol: "Yes", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "Urban Spice", rating: "4.0", price: "₹150 per person", location: "Vellore Street", distance: "0.9 km", alcohol: "No", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Crispy Treats", rating: "4.1", price: "₹190 per person", location: "City View Road", distance: "1.7 km", alcohol: "Yes", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" },
  
  { name: "Zaika Spot", rating: "4.3", price: "₹250 per person", location: "Sector 5", distance: "2.1 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "Bite House", rating: "4.2", price: "₹190 per person", location: "MG Tower", distance: "3.6 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "Food Lounge", rating: "4.4", price: "₹300 per person", location: "Sector 17", distance: "1.3 km", alcohol: "Yes", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "Taste Factory", rating: "4.5", price: "₹270 per person", location: "Old City", distance: "2.9 km", alcohol: "No", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Punjab Junction", rating: "4.6", price: "₹220 per person", location: "Sector 2", distance: "4.1 km", alcohol: "Yes", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" },

  { name: "The Curry Bowl", rating: "4.4", price: "₹260 per person", location: "City Mall Road", distance: "2.3 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "North Spice", rating: "4.1", price: "₹180 per person", location: "NIT Market", distance: "1.1 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "Magic Momo", rating: "4.3", price: "₹160 per person", location: "Sector 8", distance: "3.0 km", alcohol: "Yes", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "BBQ Flames", rating: "4.6", price: "₹320 per person", location: "City Center Road", distance: "4.5 km", alcohol: "Yes", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Food Bhavan", rating: "4.0", price: "₹140 per person", location: "Sector 12", distance: "2.0 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" },

  { name: "Garam Zaika", rating: "4.5", price: "₹280 per person", location: "Metro Road", distance: "3.8 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "Mughlai Adda", rating: "4.4", price: "₹260 per person", location: "Old MG Street", distance: "1.7 km", alcohol: "No", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "Chilli Tadka", rating: "4.1", price: "₹160 per person", location: "Sector 29", distance: "2.9 km", alcohol: "Yes", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "The Good Bowl", rating: "4.3", price: "₹210 per person", location: "City Circle", distance: "3.3 km", alcohol: "No", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Spice Route", rating: "4.2", price: "₹250 per person", location: "Downtown Vellore", distance: "1.9 km", alcohol: "Yes", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" },

  { name: "Royal Spice Hub", rating: "4.4", price: "₹290 per person", location: "Sector 34", distance: "3.1 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "Food Heritage", rating: "4.2", price: "₹230 per person", location: "Model Town", distance: "1.2 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "The Grill Spot", rating: "4.5", price: "₹330 per person", location: "MG Avenue", distance: "4.0 km", alcohol: "Yes", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "Masala Magic", rating: "4.3", price: "₹240 per person", location: "Sector 20", distance: "1.9 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Kitchen Treat", rating: "4.1", price: "₹200 per person", location: "City Point", distance: "2.6 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" },

  { name: "Fresh Feast", rating: "4.0", price: "₹180 per person", location: "Sector 13", distance: "1.0 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "Nawabi Rasoi", rating: "4.4", price: "₹310 per person", location: "Lake View Road", distance: "4.3 km", alcohol: "Yes", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "Swaad Punjab Da", rating: "4.2", price: "₹240 per person", location: "Sector 6", distance: "2.5 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "Royal Feast", rating: "4.6", price: "₹350 per person", location: "Highway Road", distance: "5.1 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Zaika Corner", rating: "4.3", price: "₹260 per person", location: "Sector 23", distance: "3.5 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" },

  { name: "Bite Junction", rating: "4.1", price: "₹190 per person", location: "Central Market", distance: "1.8 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "The Spice Hub", rating: "4.2", price: "₹230 per person", location: "MG Colony", distance: "2.9 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "BBQ Nation Mini", rating: "4.7", price: "₹450 per person", location: "City Ridge", distance: "4.9 km", alcohol: "Yes", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "Taste Fusion", rating: "4.3", price: "₹250 per person", location: "Sector 14", distance: "2.2 km", alcohol: "No", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Food Masters", rating: "4.5", price: "₹290 per person", location: "Metro Lane", distance: "3.4 km", alcohol: "Yes", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" },

  { name: "Biryani Junction", rating: "4.6", price: "₹310 per person", location: "Sector 9", distance: "3.8 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "Delhi Rasoi", rating: "4.1", price: "₹190 per person", location: "Bus Stop Road", distance: "1.0 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "Kebab House", rating: "4.5", price: "₹320 per person", location: "Vellore Highway", distance: "5.3 km", alcohol: "Yes", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "Taste Villa", rating: "4.2", price: "₹240 per person", location: "Sector 15", distance: "2.5 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Spice Lounge", rating: "4.4", price: "₹260 per person", location: "City Palace Road", distance: "4.4 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" },

  { name: "Urban Rasoi", rating: "4.3", price: "₹280 per person", location: "Metro Square", distance: "3.3 km", alcohol: "Yes", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "Food Court Express", rating: "4.0", price: "₹150 per person", location: "Sector 31", distance: "1.6 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "Grill Nation", rating: "4.6", price: "₹330 per person", location: "Old Fort Road", distance: "4.1 km", alcohol: "Yes", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "Punjabi Dawat", rating: "4.2", price: "₹230 per person", location: "Sector 28", distance: "2.8 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Street Treats", rating: "4.1", price: "₹190 per person", location: "Main Bazaar", distance: "1.9 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" },

  { name: "Royal Feast House", rating: "4.4", price: "₹270 per person", location: "Sector 26", distance: "3.0 km", alcohol: "Yes", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "Nawabi Kitchen", rating: "4.5", price: "₹320 per person", location: "MG Road", distance: "3.6 km", alcohol: "No", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "Kitchen Hub", rating: "4.3", price: "₹250 per person", location: "Market Lane", distance: "2.4 km", alcohol: "Yes", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "Crispy Bites", rating: "4.0", price: "₹150 per person", location: "Sector 3", distance: "1.3 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Spice Garden", rating: "4.6", price: "₹300 per person", location: "City Highway", distance: "4.7 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" },

  { name: "Taste Addict", rating: "4.2", price: "₹230 per person", location: "Metro Market", distance: "3.5 km", alcohol: "Yes", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "Curry House", rating: "4.3", price: "₹260 per person", location: "Sector 33", distance: "2.3 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "Flavour Town", rating: "4.5", price: "₹270 per person", location: "Vellore City", distance: "3.9 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "The Biryani Club", rating: "4.6", price: "₹320 per person", location: "Sector 22", distance: "4.8 km", alcohol: "Yes", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Veg Delight", rating: "4.1", price: "₹180 per person", location: "MG Circle", distance: "1.6 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" },

  { name: "Zaika Point", rating: "4.4", price: "₹260 per person", location: "Metro Road", distance: "2.8 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "Khana Adda", rating: "4.2", price: "₹240 per person", location: "Central Plaza", distance: "3.0 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "Grill Factory", rating: "4.6", price: "₹330 per person", location: "Sector 19", distance: "4.2 km", alcohol: "Yes", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "Swaad Ghar", rating: "4.0", price: "₹150 per person", location: "Old Market Road", distance: "1.8 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Desi Hut", rating: "4.3", price: "₹210 per person", location: "City Chowk", distance: "2.7 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" },
  { name: "Good Taste", rating: "4.2", price: "₹230 per person", location: "Sector 1", distance: "1.4 km", alcohol: "Yes", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "Spice Villa", rating: "4.5", price: "₹310 per person", location: "City Avenue", distance: "4.6 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "Kebab Nation", rating: "4.7", price: "₹370 per person", location: "MG Road", distance: "5.0 km", alcohol: "Yes", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "The Veg Hub", rating: "4.0", price: "₹140 per person", location: "Sector 7", distance: "1.5 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Royal Grill", rating: "4.6", price: "₹320 per person", location: "New MG Street", distance: "4.2 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" },
  { name: "Hunger Street", rating: "4.3", price: "₹250 per person", location: "Sector 4", distance: "3.4 km", alcohol: "Yes", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "Taste Flames", rating: "4.4", price: "₹270 per person", location: "Main City Road", distance: "2.6 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "Biryani Legend", rating: "4.7", price: "₹390 per person", location: "City Mall", distance: "5.4 km", alcohol: "Yes", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "Swaad House", rating: "4.2", price: "₹200 per person", location: "Sector 10", distance: "1.2 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Urban Kitchen", rating: "4.5", price: "₹310 per person", location: "Vellore South", distance: "3.8 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" },
  { name: "Food Plaza", rating: "4.1", price: "₹180 per person", location: "Sector 16", distance: "1.9 km", alcohol: "Yes", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20247171/7e27fbbc9979d1f520926c6ee316726e_featured_v2.jpg" },
  { name: "Zaika Mahal", rating: "4.4", price: "₹280 per person", location: "City View", distance: "3.7 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/1/20763361/b64cba72884ecbf0afc51e9ce306729c_featured_v2.jpg" },
  { name: "Nawabi Adda", rating: "4.6", price: "₹330 per person", location: "Sector 25", distance: "4.1 km", alcohol: "Yes", restaurantType: "Non-Veg", img: "https://b.zmtcdn.com/data/pictures/9/21311859/e72738cf6c0b0d0579f8ea199d6d5337_featured_v2.jpg" },
  { name: "Masala Treat", rating: "4.0", price: "₹160 per person", location: "Old Town", distance: "1.4 km", alcohol: "No", restaurantType: "Veg", img: "https://b.zmtcdn.com/data/pictures/7/20771247/e5f295f58d55550167751671b869d660_featured_v2.jpg" },
  { name: "Spicey House", rating: "4.5", price: "₹290 per person", location: "New City", distance: "2.9 km", alcohol: "Yes", restaurantType: "Both", img: "https://b.zmtcdn.com/data/pictures/6/21153076/8719fad745a6863c578e191610193cd3_featured_v2.jpg" }
];
   const element = document.getElementById("container");
function getData(Restaurants){
   const element = document.getElementById("container");
   element.innerHTML="";
    Restaurants.forEach((item)=>{
      const div = document.createElement("div");
      div.className =  "card";
      div.innerHTML = `
        <img  src="${item.img}" alt = "sorry" class = "image"/>
        <div class="div-body">
        <div class = "left">
           <h2>${item.name}</h2>
           <div class="rating">${item.rating}</div>
        </div>

        <div class = "right">
           <div>${item.restaurantType}</div>
           <span>${item.price}</span>
        </div>
        
        <div class = "dis">
            <span>${item.location}</span>
            <span>${item.distance}</span>
        </div>
      </div>
      `;
      element.appendChild(div);
  })
}

getData(Restaurants);


const alc = document.getElementById("alc");
alc.addEventListener("click" ,()=>{
  element.innerHTML= "";
getData(Restaurants.filter(item=> item.alcohol === "Yes"));     
})

const fil = document.getElementById("fil");

function hightolow(Restaurants){
    const sorted = Restaurants.sort((a,b)=>{
        const p1 = parseInt(a.price.replace(/\D/g, "")); // number extract
        const p2 = parseInt(b.price.replace(/\D/g, ""));
        return p2 - p1; // high to low
    });
    getData(sorted);
}
function lowtohigh(Restaurants){
    const sorted = Restaurants.sort((a,b)=>{
        const p1 = parseInt(a.price.replace(/\D/g, "")); // number extract
        const p2 = parseInt(b.price.replace(/\D/g, ""));
        return p1 - p2; // high to low
    });
    getData(sorted);
}
function Rating(Restaurants){
  const sorted = Restaurants.sort((a,b)=>{
        const p1 = parseInt(a.price.replace(/\D/g, "")); // number extract
        const p2 = parseInt(b.price.replace(/\D/g, ""));
        return p2-p1;
  });
   getData(sorted);
};
fil.addEventListener("click" ,(item)=>{
  const ele = document.getElementById("content");
  ele.style.display="flex";

  const apply = document.getElementById("apply");
  const cancel = document.getElementById("cancel");

  apply.addEventListener("click" , ()=>{
        const input = document.querySelector('input[name="myname"]:checked');

        if(input.value === "high-to-low"){
          hightolow(Restaurants);
          ele.style.display = "none";
        }
        else if(input.value === "low-to-high"){
          lowtohigh(Restaurants);
           ele.style.display = "none";
        }
        else if(input.value === "rating"){
          Rating(Restaurants);
          ele.style.display = "none";
        }
  })
  cancel.addEventListener("click" , ()=>{
       ele.style.display="none";
  })
})


// const pri = document.getElementById("price");
// pri.addEventListener("click" ,()=>{
//       hightolow(Restaurants);       
// })