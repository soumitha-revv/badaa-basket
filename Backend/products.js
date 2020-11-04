const products = [
    {
        "productName": "Kachi Ghani Mustard Oil",
        "imageUrl": "https://www.bigbasket.com/media/uploads/p/l/276756_7-fortune-kachi-ghani-mustard-oil.jpg",
        "brandName": "Fortune",
        "ratings": 4.2,
        "reviews": 0,
        "reviewList": [],
        "subCategory": "Edible Oil",
        "category": "Foodgrains, Oils and Masala",
        "size": ["500 ml", "1 L"],
        "mrp": [186, 96],
        "offer": 19,
        "description": "Fortune Kachi Ghani is a premium mustard oil that enhances the taste of your food. We use a traditional process to extract pure mustard oil, so that the natural properties, antioxidants and essential oils are retained. The strong aroma and taste of mustard oil adds a spicy flavor to your cooking."
    },
    {
        "productName": "Onion",
        "imageUrl": "https://www.bigbasket.com/media/uploads/p/l/10000148_28-fresho-onion.jpg",
        "brandName": "Fresho",
        "ratings": 3.2,
        "reviews": 0,
        "reviewList": [],
        "subCategory": "Fresh Vegetables",
        "category": "Fruits and vegetables",
        "size": ["1 kg", "2 kg"],
        "mrp": [92.50, 185],
        "offer": 28,
        "description": "Onion is a vegetable which is almost like a staple in Indian food. This is also known to be one of the essential ingredients of raw salads. They come in different colours like white, red or yellow and are quite in demand in cold salads and hot soups. You can dice, slice or cut it in rings and put it in burgers and sandwiches. Onions emit a sharp flavour and fragrance once they are fried; it is due to the sulphur compound in the vegetable"
    },
    {
        "productName": "Potato",
        "imageUrl": "https://www.bigbasket.com/media/uploads/p/l/10000159_25-fresho-potato.jpg",
        "brandName": "Fresho",
        "ratings": 3.2,
        "reviews": 0,
        "reviewList": [],
        "subCategory": "Fresh Vegetables",
        "category": "Fruits and vegetables",
        "size": ["1 kg", "2 kg"],
        "mrp": [56.25, 112.50],
        "offer": 25,
        "description": "Fresho Potatoes are nutrient-dense, non-fattening and have reasonable amount of calories. Include them in your regular meals so that the body receives a good supply of carbohydrates, dietary fibers and essential minerals such as copper, magnesium, and iron. In India, potatoes are probably the second-most consumed vegetables after onions."
    },
    {
        "productName": "Lemon",
        "imageUrl": "https://www.bigbasket.com/media/uploads/p/l/10000127_17-fresho-lemon.jpg",
        "brandName": "Fresho",
        "ratings": 3.9,
        "reviews": 0,
        "reviewList": [],
        "subCategory": "Herbs and seasonings",
        "category": "Fruits and vegetables",
        "size": ["250 g", "500 g"],
        "mrp": [36.25, 71.25],
        "offer": 20,
        "description": "With a segmented flesh that has a unique pleasant aroma and a strong sour taste, lemons are round/oval and have a yellow, texturized external peel."
    },
    {
        "productName": "Chilli - Picador",
        "imageUrl": "https://www.bigbasket.com/media/uploads/p/l/30001773_3-fresho-chilli-picador.jpg",
        "brandName": "Fresho",
        "ratings": 3.9,
        "reviews": 0,
        "reviewList": [],
        "subCategory": "Herbs and seasonings",
        "category": "Fruits and vegetables",
        "size": ["1 kg"],
        "mrp": [245],
        "offer": 20,
        "description": "Picdor Chilli have thick sharp and spicy taste, however the roughness can differ depending on the range of chilly. Some are very sharp, while some have less of flavor in them. It is high in Vitamin A & C. Product image shown is for representation purpose only, the actually product may vary based on season, produce & availability."
    },
    {
        "productName": "India Gate Basmati Rice",
        "imageUrl": "https://www.bigbasket.com/media/uploads/p/l/283426_2-india-gate-basmati-rice-feast-rozzana.jpg",
        "brandName": "India Gate",
        "ratings": 4.0,
        "reviews": 0,
        "reviewList": [],
        "subCategory": "Rice & Rice Products",
        "category": "Foodgrains, oils & Masala",
        "size": ["1 kg", "5 kg"],
        "mrp": [89, 440],
        "offer": 15,
        "description": "India Gate Basmati Rice Feast Rozzana is defined by its long grains and amazing aromatic flavour. Having this rice is truly having a feast rozzana (a daily feast); combine it with your veggies and serve a nice pulao. Without this Basmati Rice, your biryanis will seem dull and tasteless. This is the perfect ingredient for different rice recipes. "
    },
    {
        "productName": "Almond/Badam",
        "imageUrl": "https://www.bigbasket.com/media/uploads/p/l/40021405_9-bb-popular-almondbadam-californian-giri.jpg",
        "brandName": "BB Popular",
        "ratings": 3.9,
        "reviews": 0,
        "reviewList": [],
        "subCategory": "Dry fruits",
        "category": "Foodgrains, oils & Masala",
        "size": ["100 gm", "200 gm", "500 gm", "1 kg"],
        "mrp": [120, 240, 600, 1200],
        "offer": 10,
        "description": "Almonds come in many varieties and the BB Royal California badam or almonds are premiere choice of many customers at bigbasket. The sweet and nutty taste of the almonds is combined here with hygienically packing to ensure freshness of these Californian Almonds. "
    },
    {
        "productName": "Sugar",
        "imageUrl": "https://www.bigbasket.com/media/uploads/p/l/40019396_8-bb-popular-sugar.jpg",
        "brandName": "BB Popular",
        "ratings": 4.0,
        "reviews": 0,
        "reviewList": [],
        "subCategory": "Salt, sugar & Jaggery",
        "category": "Foodgrains, oils & Masala",
        "size": ["1 kg", "2 kg", "5 kg"],
        "mrp": [55, 110, 275],
        "offer": 20,
        "description": "Almonds come in many varieties and the BB Royal California badam or almonds are premiere choice of many customers at bigbasket. The sweet and nutty taste of the almonds is combined here with hygienically packing to ensure freshness of these Californian Almonds. "
    },
    {
        "productName": "Fresh Paneer",
        "imageUrl": "https://www.bigbasket.com/media/uploads/p/l/40096747_5-amul-fresh-paneer.jpg",
        "brandName": "Amul",
        "ratings": 3.9,
        "reviews": 0,
        "reviewList": [],
        "subCategory": "dairy",
        "category": "Bakery , cakes & Dairy",
        "size": ["200 gm", "500 gm", "1 kg"],
        "mrp": [75, 190, 300],
        "offer": 20,
        "description": "Paneer is also called cottage cheese. Amul Fresh Paneer is made from pure milk, hygenically packed untouched by hand. It adheres to FASSAI norms. Amul fresh paneer is a rich source of Protein."
    }

]

module.exports = products