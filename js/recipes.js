var allRecipes = [
    {
      "item": "Fake entry",
      "requirements": "None"
    },
    {
      "item": "Copious Meat Skewers",
      "requirements": ["Any four different raw meats"],
      "dish": "Meat",
      "minHeartsRestored": 13,
      "maxHeartsRestored": 19,
      "minSellingPrice": 160,
      "maxSellingPrice": 290,
      "notes": "N/A",
      "footNotes": [
        "2 Raw Gourmet Meats + 1 Raw Prime Meat + 1 Raw Meat + 1 Raw Bird Drumstick",
        "Same as max possible hearts"
      ]
    },
    {
      "item": "Copious Mushroom Skewers",
      "requirements": ["Any four different mushrooms"],
      "dish": "Veggies",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 19,
      "minSellingPrice": 40,
      "maxSellingPrice": 120,
      "notes": "N/A",
      "footNotes": [
        "1 Hearty Truffle + 2 Big Hearty Truffles + 1 Endura Shroom + 1 Hylian Shroom",
        "2 Big Hearty Truffles + 1 Hearty Truffle + Endura Shroom + 1 Stamella/Ironshroom/Razorshroom"
      ]
    },
    {
      "item": "Copious Seafood Skewers",
      "requirements": ["Any four different fish"],
      "dish": "Fish",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 16,
      "minSellingPrice": 60,
      "maxSellingPrice": 260,
      "notes": "N/A",
      "footNotes": [
        "1 Hearty Salmon + 4 different 1-heart fish",
        "2 Sanke Carps + 1 Staminoka Bass + 1 Hearty Bass + 1 Hearty Blueshell Snail"
      ]
    },
    {
      "item": "Fish and Mushroom Skewer",
      "requirements": ["Any fish", "Any mushroom"],
      "dish": "Fish",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 16,
      "minSellingPrice": 20,
      "maxSellingPrice": 270,
      "notes": "N/A",
      "footNotes": ["4 Sanke Carps + 1 Big Hearty Truffle"]
    },
    {
      "item": "Fish Skewer",
      "requirements": ["Any fish"],
      "dish": "Fish",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 10,
      "minSellingPrice": 10,
      "maxSellingPrice": 150,
      "notes": "N/A",
      "footNotes": []
    },
    {
      "item": "Gourmet Spiced Meat Skewer",
      "requirements": ["Raw Gourmet Meat/Raw Whole Bird", "Goron Spice"],
      "dish": "Meat",
      "minHeartsRestored": 6,
      "maxHeartsRestored": 24,
      "minSellingPrice": 70,
      "maxSellingPrice": 410,
      "notes": "N/A",
      "footNotes": ["4 Raw Gourmet Meats", "Same as max possible hearts"]
    },
    {
      "item": "Meat Skewer",
      "requirements": ["Any raw meat"],
      "dish": "Meat",
      "minHeartsRestored": 2,
      "maxHeartsRestored": "See footnotes",
      "minSellingPrice": 20,
      "maxSellingPrice": 490,
      "notes": "N/A",
      "footNotes": [
        "5 Raw Gourmet Meats is a full restore",
        "4 Raw Gourmet Meats + 1 Raw Prime Meat heals 27 hearts, this is the max combo without turning into a full restore",
        "5 Raw Prime Meats heals 15 hearts",
        "Same as max possible hearts",
        "Prime Meat Skewers are generally 43% of the sell-value of Gourmet Meat Skewers"
      ]
    },
    {
      "item": "Meat and Mushroom Skewer",
      "requirements": ["Any meat", "Any mushroom"],
      "dish": "Meat",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 26,
      "minSellingPrice": 20,
      "maxSellingPrice": 440,
      "notes": "N/A",
      "footNotes": [
        "4 Gourmet Meats + 1 Endura Shroom",
        "4 Raw Gourmet Meats + 1 Big Hearty Truffle"
      ]
    },
    {
      "item": "Mushroom Skewer",
      "requirements": ["Any mushroom"],
      "dish": "Veggies",
      "minHeartsRestored": 1,
      "maxHeartsRestored": 10,
      "minSellingPrice": 10,
      "maxSellingPrice": 210,
      "notes": "N/A",
      "footNotes": ["5 Big Hearty Truffles"]
    },
    {
      "item": "Prime Spiced Meat Skewer",
      "requirements": ["Raw Prime Meat/Raw Bird Thigh", "Goron Spice"],
      "dish": "Meat",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 12,
      "minSellingPrice": 40,
      "maxSellingPrice": 180,
      "notes": "N/A",
      "footNotes": [
        "4 Raw Prime Meats",
        "Same as max possible hearts",
        "Prime Meat Skewers are generally 43% of the sell-value of Gourmet Meat Skewers"
      ]
    },
    {
      "item": "Spiced Meat Skewer",
      "requirements": ["Raw Meat/Raw Bird Drumstick", "Goron Spice"],
      "dish": "Meat",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 8,
      "minSellingPrice": 30,
      "maxSellingPrice": 100,
      "notes": "N/A",
      "footNotes": ["4 Raw Meats", "Same as max possible hearts"]
    },
    {
      "item": "Seafood Skewer",
      "requirements": ["Any crab or snail"],
      "dish": "Fish",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 10,
      "minSellingPrice": 10,
      "maxSellingPrice": 150,
      "notes": "N/A",
      "footNotes": []
    },
    {
      "item": "Fruit and Mushroom Mix",
      "requirements": ["Any fruit", "Any mushroom"],
      "dish": "Veggies",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 26,
      "minSellingPrice": 10,
      "maxSellingPrice": 190,
      "notes": "N/A",
      "footNotes": [
        "4 Hearty Durians + 1 Endura Shroom",
        "4 Big Hearty Truffles + 1 Hearty Durian"
      ]
    },
    {
      "item": "Gourmet Meat and Seafood Fry",
      "requirements": ["Raw Prime Meat/Raw Bird Thigh", "Any fish"],
      "dish": "Meat",
      "minHeartsRestored": 8,
      "maxHeartsRestored": 26,
      "minSellingPrice": 80,
      "maxSellingPrice": 450,
      "notes": "N/A",
      "footNotes": [
        "4 Raw Gourmet Meats + Any 1-heart fish",
        "4 Raw Gourmet Meats + 1 Sanke Carp"
      ]
    },
    {
      "item": "Meat and Seafood Fry",
      "requirements": ["Raw Meat/Raw Bird Drumstick", "Any fish"],
      "dish": "Meat",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 10,
      "minSellingPrice": 30,
      "maxSellingPrice": 250,
      "notes": "N/A",
      "footNotes": ["4 Sanke Carps"]
    },
    {
      "item": "Peppered Seafood",
      "requirements": ["Any fish", "Spicy Pepper"],
      "dish": "Fish",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 9,
      "minSellingPrice": 20,
      "maxSellingPrice": 240,
      "notes": "N/A",
      "footNotes": ["Recipe will always have Spicy prefix unless other effect-imparting fish are added", "4 Sanke Carps"]
    },
    {
      "item": "Pepper Steak",
      "requirements": ["Any meat", "Spicy Pepper"],
      "dish": "Meat",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 25,
      "minSellingPrice": 20,
      "maxSellingPrice": 100,
      "notes": "N/A",
      "footNotes": [
        "4 Raw Gourmet Meats or 4 Raw Whole Birds",
        "Same as max possible hearts"
      ]
    },
    {
      "item": "Prime Meat and Seafood Fry",
      "requirements": ["Raw Prime Meat/Raw Bird Thigh", "Any fish"],
      "dish": "Meat",
      "minHeartsRestored": 5,
      "maxHeartsRestored": 11,
      "minSellingPrice": 40,
      "maxSellingPrice": 270,
      "notes": "N/A",
      "footNotes": ["4 Raw Prime Meats + Any 1-heart fish", "4 Sanke Carps"]
    },
    {
      "item": "Steamed Fish",
      "requirements": ["Any fish", "Any vegetable"],
      "dish": "Fish",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 24,
      "minSellingPrice": 20,
      "maxSellingPrice": 400,
      "notes": "N/A",
      "footNotes": [
        "1 Hearty Salmon + 4 Endura Carrots",
        "1 Sanke Carp + 4 Endura Carrots"
      ]
    },
    {
      "item": "Steamed Fruit",
      "requirements": ["Any fruit", "Any vegetable"],
      "dish": "Veggies",
      "minHeartsRestored": 1,
      "maxHeartsRestored": 28,
      "minSellingPrice": 10,
      "maxSellingPrice": 380,
      "notes": "N/A",
      "footNotes": [
        "4 Hearty Durians + 1 Endura Carrot",
        "1 Hearty Durian + 4 Endura Carrots"
      ]
    },
    {
      "item": "Steamed Meat",
      "requirements": ["Any meat", "Any vegetable"],
      "dish": "Meat",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 28,
      "minSellingPrice": 20,
      "maxSellingPrice": 100,
      "notes": "N/A",
      "footNotes": [
        "4 Raw Gourmet Meats + 1 Endura Carrot",
        "Same as max possible hearts"
      ]
    },
    {
      "item": "Steamed Mushrooms",
      "requirements": ["Any mushroom", "Any vegetable"],
      "dish": "Veggies",
      "minHeartsRestored": 1,
      "maxHeartsRestored": 18,
      "minSellingPrice": 10,
      "maxSellingPrice": 380,
      "notes": "N/A",
      "footNotes": [
        "1 Endura Shroom + 4 Endura Carrots",
        "1 Big Hearty Truffle + 4 Endura Carrots"
      ]
    },
    {
      "item": "Creamy Meat Soup",
      "requirements": ["Any raw meat", "Any herb", "Fresh Milk", "Rock Salt"],
      "dish": "Meat",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 15,
      "minSellingPrice": 40,
      "maxSellingPrice": 240,
      "notes": "N/A",
      "footNotes": [
        "Recipe must use Safflina, Swift Violet, Mighty Thistle, Armoranth, Blue Nightshade or Silent Princess",
        "2 Raw Gourmet Meats + 1 Silent Princess",
        "Same as max possible hearts"
      ]
    },
    {
      "item": "Glazed Meat",
      "requirements": ["Any meat", "Courser Bee Honey"],
      "dish": "Meat",
      "minHeartsRestored": 6,
      "maxHeartsRestored": 28,
      "minSellingPrice": 40,
      "maxSellingPrice": 420,
      "notes": "N/A",
      "footNotes": ["4 Raw Gourmet Meats", "Same as max possible hearts"]
    },
    {
      "item": "Gourmet Meat and Rice Bowl",
      "requirements": [
        "Raw Gourmet Meat/Raw Whole Bird",
        "Hylian Rice",
        "Rock Salt"
      ],
      "dish": "Meat",
      "minHeartsRestored": 9,
      "maxHeartsRestored": 20,
      "minSellingPrice": 90,
      "maxSellingPrice": 310,
      "notes": "N/A",
      "footNotes": [
        "3 Raw Gourmet Meats or 3 Raw Whole Birds",
        "Same as max possible hearts"
      ]
    },
    {
      "item": "Gourmet Meat Curry",
      "requirements": ["Raw Gourmet Meat", "Hylian Rice", "Goron Spice"],
      "dish": "Meat",
      "minHeartsRestored": 8,
      "maxHeartsRestored": 20,
      "minSellingPrice": 90,
      "maxSellingPrice": 320,
      "notes": "N/A",
      "footNotes": ["3 Raw Gourmet Meats", "Same as max possible hearts"]
    },
    {
      "item": "Gourmet Meat Stew",
      "requirements": [
        "Raw Gourmet Meat",
        "Goat Butter",
        "Fresh Milk",
        "Tabantha Wheat"
      ],
      "dish": "Meat",
      "minHeartsRestored": 9,
      "maxHeartsRestored": 20,
      "minSellingPrice": 110,
      "maxSellingPrice": 230,
      "notes": "N/A",
      "footNotes": ["2 Raw Gourmet Meats", "Same as max possible hearts"]
    },
    {
      "item": "Gourmet Poultry Curry",
      "requirements": ["Raw Whole Bird", "Hylian Rice", "Goron Spice"],
      "dish": "Meat",
      "minHeartsRestored": 8,
      "maxHeartsRestored": 20,
      "minSellingPrice": 90,
      "maxSellingPrice": 320,
      "notes": "N/A",
      "footNotes": ["3 Raw Whole Birds", "Same as max possible hearts"]
    },
    {
      "item": "Gourmet Poultry Pilaf",
      "requirements": [
        "Raw Whole Bird",
        "Bird Egg",
        "Goat Butter",
        "Hylian Rice"
      ],
      "dish": "Meat",
      "minHeartsRestored": 10,
      "maxHeartsRestored": 16,
      "minSellingPrice": 110,
      "maxSellingPrice": 230,
      "notes": "N/A",
      "footNotes": ["3 Raw Whole Birds", "Same as max possible hearts"]
    },
    {
      "item": "Meat and Rice Bowl",
      "requirements": [
        "Raw Meat/Raw Bird Drumstick",
        "Hylian Rice",
        "Rock Salt"
      ],
      "dish": "Meat",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 8,
      "minSellingPrice": 30,
      "maxSellingPrice": 90,
      "notes": "N/A",
      "footNotes": [
        "3 Raw Meats or 3 Raw Bird Drumsticks",
        "Same as max possible hearts"
      ]
    },
    {
      "item": "Meat Curry",
      "requirements": ["Raw Meat", "Hylian Rice", "Goron Spice"],
      "dish": "Meat",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 8,
      "minSellingPrice": 40,
      "maxSellingPrice": 90,
      "notes": "N/A",
      "footNotes": ["3 Raw Meats", "Same as max possible hearts"]
    },
    {
      "item": "Meat Pie",
      "requirements": [
        "Any raw meat",
        "Tabantha Wheat",
        "Goat Butter",
        "Rock Salt"
      ],
      "dish": "Meat",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 14,
      "minSellingPrice": 40,
      "maxSellingPrice": 220,
      "notes": "N/A",
      "footNotes": ["2 Raw Gourmet Meats", "Same as max possible hearts"]
    },
    {
      "item": "Meat Stew",
      "requirements": [
        "Raw Meat",
        "Goat Butter",
        "Fresh Milk",
        "Tabantha Wheat"
      ],
      "dish": "Meat",
      "minHeartsRestored": 5,
      "maxHeartsRestored": 10,
      "minSellingPrice": 40,
      "maxSellingPrice": 70,
      "notes": "N/A",
      "footNotes": ["2 Raw Meats", "Same as max possible hearts"]
    },
    {
      "item": "Meat-Stuffed Pumpkin",
      "requirements": ["Any raw meat", "Fortified Pumpkin"],
      "dish": "Meat",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 27,
      "minSellingPrice": 30,
      "maxSellingPrice": 410,
      "notes": "N/A",
      "footNotes": [
        "Unless other ingredients are added, this recipe will always have the Tough prefix",
        "3 Raw Gourmet Meats + 1 Big Hearty Radish or Hearty Salmon",
        "Same as max possible hearts"
      ]
    },
    {
      "item": "Meaty Rice Balls",
      "requirements": ["Any raw meat", "Hylian Rice"],
      "dish": "Meat",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 26,
      "minSellingPrice": 20,
      "maxSellingPrice": 400,
      "notes": "N/A",
      "footNotes": ["4 Raw Gourmet Meats", "Same as max possible hearts"]
    },
    {
      "item": "Poultry Curry",
      "requirements": [
        "Raw Bird Drumstick",
        "Bird Egg",
        "Hylian Rice",
        "Goat Butter"
      ],
      "dish": "Meat",
      "minHeartsRestored": 6,
      "maxHeartsRestored": 8,
      "minSellingPrice": 40,
      "maxSellingPrice": 90,
      "notes": "N/A",
      "footNotes": ["3 Raw Bird Drumsticks", "Same as max possible hearts"]
    },
    {
      "item": "Poultry Pilaf",
      "requirements": [
        "Raw Bird Drumstick",
        "Bird Egg",
        "Goat Butter",
        "Hylian Rice"
      ],
      "dish": "Meat",
      "minHeartsRestored": 6,
      "maxHeartsRestored": 8,
      "minSellingPrice": 40,
      "maxSellingPrice": 70,
      "notes": "N/A",
      "footNotes": ["3 Raw Bird Drumsticks", "Same as max possible hearts"]
    },
    {
      "item": "Prime Meat and Rice Bowl",
      "requirements": [
        "Raw Prime Meat/Raw Bird Thigh",
        "Hylian Rice",
        "Rock Salt"
      ],
      "dish": "Meat",
      "minHeartsRestored": 5,
      "maxHeartsRestored": 11,
      "minSellingPrice": 50,
      "maxSellingPrice": 140,
      "notes": "N/A",
      "footNotes": [
        "3 Raw Prime Meats or 3 Raw Bird Thighs",
        "Same as max possible hearts"
      ]
    },
    {
      "item": "Prime Meat Curry",
      "requirements": ["Raw Prime Meat", "Hylian Rice", "Goron Spice"],
      "dish": "Meat",
      "minHeartsRestored": 5,
      "maxHeartsRestored": 11,
      "minSellingPrice": 50,
      "maxSellingPrice": 150,
      "notes": "N/A",
      "footNotes": ["3 Raw Prime Meats", "Same as max possible hearts"]
    },
    {
      "item": "Prime Meat Stew",
      "requirements": [
        "Raw Prime Meat",
        "Goat Butter",
        "Fresh Milk",
        "Tabantha Wheat"
      ],
      "dish": "Meat",
      "minHeartsRestored": 6,
      "maxHeartsRestored": 12,
      "minSellingPrice": 60,
      "maxSellingPrice": 110,
      "notes": "N/A",
      "footNotes": ["2 Raw Prime Meats", "Same as max possible hearts"]
    },
    {
      "item": "Prime Poultry Curry",
      "requirements": ["Raw Bird Thigh", "Hylian Rice", "Goron Spice"],
      "dish": "Meat",
      "minHeartsRestored": 5,
      "maxHeartsRestored": 11,
      "minSellingPrice": 50,
      "maxSellingPrice": 150,
      "notes": "N/A",
      "footNotes": ["3 Raw Bird Thighs", "Same as max possible hearts"]
    },
    {
      "item": "Prime Poultry Pilaf",
      "requirements": [
        "Raw Bird Thigh",
        "Bird Egg",
        "Goat Butter",
        "Hylian Rice"
      ],
      "dish": "Meat",
      "minHeartsRestored": 7,
      "maxHeartsRestored": 10,
      "minSellingPrice": 60,
      "maxSellingPrice": 110,
      "notes": "N/A",
      "footNotes": ["3 Raw Bird Thighs", "Same as max possible hearts"]
    },
    {
      "item": "Salt-Grilled Gourmet Meat",
      "requirements": ["Raw Gourmet Meat/Raw Whole Bird", "Rock Salt"],
      "dish": "Meat",
      "minHeartsRestored": 9,
      "maxHeartsRestored": 24,
      "minSellingPrice": 70,
      "maxSellingPrice": 400,
      "notes": "N/A",
      "footNotes": [
        "4 Raw Gourmet Meats or 4 Raw Whole Birds",
        "Same as max possible hearts"
      ]
    },
    {
      "item": "Salt-Grilled Meat",
      "requirements": ["Raw Meat/Raw Bird Drumstick", "Rock Salt"],
      "dish": "Meat",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 8,
      "minSellingPrice": 20,
      "maxSellingPrice": 100,
      "notes": "N/A",
      "footNotes": [
        "4 Raw Meats or 4 Raw Bird Drumsticks",
        "Same as max possible hearts"
      ]
    },
    {
      "item": "Salt-Grilled Prime Meat",
      "requirements": ["Raw Prime Meat/Raw Bird Thigh", "Rock Salt"],
      "dish": "Meat",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 12,
      "minSellingPrice": 30,
      "maxSellingPrice": 180,
      "notes": "N/A",
      "footNotes": [
        "4 Raw Prime Meats or 4 Raw Bird Thighs",
        "Same as max possible hearts"
      ]
    },
    {
      "item": "Clam Chowder",
      "requirements": [
        "Hearty Blueshell Snail",
        "Goat Butter",
        "Fresh Milk",
        "Tabantha Wheat"
      ],
      "dish": "Fish",
      "minHeartsRestored": "Full",
      "maxHeartsRestored": "recovery",
      "minSellingPrice": 60,
      "maxSellingPrice": 130,
      "notes": "N/A",
      "footNotes": [
        "Hearty will always override recipe heal-properties unless additional 1-heart fish are added",
        "1 Sanke Carp"
      ]
    },
    {
      "item": "Crab Omelet with Rice",
      "requirements": ["Any crab", "Bird Egg", "Rock Salt", "Hylian Rice"],
      "dish": "Fish",
      "minHeartsRestored": 6,
      "maxHeartsRestored": 14,
      "minSellingPrice": 40,
      "maxSellingPrice": 110,
      "notes": "N/A",
      "footNotes": ["1 Hearty Salmon", "1 Bright-Eyed Crab + 1 Sanke Carp"]
    },
    {
      "item": "Crab Stir-Fry",
      "requirements": ["Any crab", "Goron Spice"],
      "dish": "Fish",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 26,
      "minSellingPrice": 30,
      "maxSellingPrice": 130,
      "notes": "N/A",
      "footNotes": ["3 Hearty Salmons + Any crab", "3 Sanke Carps + Any crab"]
    },
    {
      "item": "Crab Risotto",
      "requirements": ["Any crab", "Rock Salt", "Hylian Rice", "Goat Butter"],
      "dish": "Fish",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 10,
      "minSellingPrice": 50,
      "maxSellingPrice": 110,
      "notes": "N/A",
      "footNotes": [
        "1 Hearty Blueshell Snail",
        "1 Bright-Eyed Crab + 1 Sanke Carp"
      ]
    },
    {
      "item": "Creamy Seafood Soup",
      "requirements": ["Any seafood", "Any herb", "Rock Salt", "Fresh Milk"],
      "dish": "Fish",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 22,
      "minSellingPrice": 20,
      "maxSellingPrice": 160,
      "notes": "N/A",
      "footNotes": [
      	"Recipe must use Safflina, Swift Violet, Mighty Thistle, Armoranth, Blue Nightshade or Silent Princess",
        "2 Hearty Salmons + 1 Silent Princess",
        "2 Sanke Carps + 1 Swift Violet or Silent Princess"
      ]
    },
    {
      "item": "Fish Pie",
      "requirements": [
        "Any seafood",
        "Rock Salt",
        "Goat Butter",
        "Tabantha Wheat"
      ],
      "dish": "Fish",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 6,
      "minSellingPrice": 40,
      "maxSellingPrice": 140,
      "notes": "N/A",
      "footNotes": ["2 Sanke Carps"]
    },
    {
      "item": "Glazed Seafood",
      "requirements": ["Any seafood", "Courser Bee Honey"],
      "dish": "Fish",
      "minHeartsRestored": 6,
      "maxHeartsRestored": 18,
      "minSellingPrice": 30,
      "maxSellingPrice": 260,
      "notes": "N/A",
      "footNotes": [
      	"Recipe will always have Energizing prefix unless other effect-imparting fish are added",
      	"4 Courser Bee Honeys + Any 1-heart fish", 
      	"4 Sanke Carps"
      ]
    },
    {
      "item": "Porgy Meunière",
      "requirements": ["Any porgy", "Goat Butter", "Tabantha Wheat"],
      "dish": "Fish",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 6,
      "minSellingPrice": 40,
      "maxSellingPrice": 160,
      "notes": "N/A",
      "footNotes": ["2 Sanke Carps"]
    },
    {
      "item": "Salmon Meunière",
      "requirements": ["Hearty Salmon", "Goat Butter", "Tabantha Wheat"],
      "dish": "Fish",
      "minHeartsRestored": "Full",
      "maxHeartsRestored": "recovery",
      "minSellingPrice": 40,
      "maxSellingPrice": 160,
      "notes": "N/A",
      "footNotes": [
        "Hearty will always override recipe heal-properties unless additional 1-heart fish are added",
        "2 Sanke Carps"
      ]
    },
    {
      "item": "Salmon Risotto",
      "requirements": [
        "Hearty Salmon",
        "Rock Salt",
        "Hylian Rice",
        "Goat Butter"
      ],
      "dish": "Fish",
      "minHeartsRestored": "Full",
      "maxHeartsRestored": "recovery",
      "minSellingPrice": 50,
      "maxSellingPrice": 110,
      "notes": "N/A",
      "footNotes": [
        "Hearty will always override recipe heal-properties unless additional 1-heart fish are added",
        "1 Sanke Carp"
      ]
    },
    {
      "item": "Salt-Grilled Crab",
      "requirements": ["Any crab", "Rock Salt"],
      "dish": "Fish",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 26,
      "minSellingPrice": 30,
      "maxSellingPrice": 120,
      "notes": "N/A",
      "footNotes": ["3 Hearty Salmons + Any crab", "3 Sanke Carps + Any crab"]
    },
    {
      "item": "Salt-Grilled Fish",
      "requirements": ["Any fish", "Rock Salt"],
      "dish": "Fish",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 14,
      "minSellingPrice": 20,
      "maxSellingPrice": 240,
      "notes": "N/A",
      "footNotes": [
        "1 Hearty Salmon + Any four 1-heart fishes",
        "4 Sanke Carps"
      ]
    },
    {
      "item": "Seafood Meunière",
      "requirements": ["Any seafood", "Goat Butter", "Tabantha Wheat"],
      "dish": "Fish",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 6,
      "minSellingPrice": 40,
      "maxSellingPrice": 160,
      "notes": "N/A",
      "footNotes": [
      	"Adding Hearty Salmon or Porgy will change results",
      	"2 Sanke Carps"
      ]
    },
    {
      "item": "Seafood Rice Balls",
      "requirements": ["Any fish", "Hylian Rice"],
      "dish": "Fish",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 10,
      "minSellingPrice": 20,
      "maxSellingPrice": 240,
      "notes": "N/A",
      "footNotes": ["4 Sanke Carps"]
    },
    {
      "item": "Seafood Curry",
      "requirements": [
        "Hearty Blueshell Snail or Any Porgy",
        "Hylian Rice",
        "Goron Spice"
      ],
      "dish": "Fish",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 20,
      "minSellingPrice": 40,
      "maxSellingPrice": 180,
      "notes": "N/A",
      "footNotes": [
        "2 Hearty Salmons + 1 Any Porgy",
        "1 Hearty Blueshell Snail + 2 Sanke Carps"
      ]
    },
    {
      "item": "Seafood Fried Rice",
      "requirements": [
        "Hearty Blueshell Snail or Any Porgy",
        "Hylian Rice",
        "Rock Salt"
      ],
      "dish": "Fish",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 18,
      "minSellingPrice": 40,
      "maxSellingPrice": 180,
      "notes": "N/A",
      "footNotes": [
        "1 Hearty Blueshell Snail + 1 Hearty Salmon + 1 Any Porgy",
        "1 Hearty Blueshell Snail + 2 Sanke Carps"
      ]
    },
    {
      "item": "Seafood Paella",
      "requirements": [
        "Any porgy",
        "Hearty Blueshell Snail",
        "Rock Salt",
        "Goat Butter",
        "Hylian Rice"
      ],
      "dish": "Fish",
      "minHeartsRestored": 12,
      "maxHeartsRestored": 12,
      "minSellingPrice": 100,
      "maxSellingPrice": 100,
      "notes": "N/A",
      "footNotes": []
    },
    {
      "item": "Carrot Stew",
      "requirements": [
        "Any carrot",
        "Goat Butter",
        "Fresh Milk",
        "Tabantha Wheat"
      ],
      "dish": "Veggies",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 15,
      "minSellingPrice": 40,
      "maxSellingPrice": 200,
      "notes": "N/A",
      "footNotes": [
        "Adding non-carrot/radish ingredients will override priority and change recipe results",
        "1 Endura Carrot + 1 Big Hearty Radish",
        "2 Endura Carrots"
      ]
    },
    {
      "item": "Copious Fried Wild Greens",
      "requirements": ["Any four different vegetables"],
      "dish": "Veggies",
      "minHeartsRestored": 0.25,
      "maxHeartsRestored": 23,
      "minSellingPrice": 10,
      "maxSellingPrice": 240,
      "notes": "N/A",
      "footNotes": [
        "Adding meat or fish will override recipe priority",
        "1 Big Hearty Radish + 1 Hearty Radish + 2 Endura Carrots + 1 Hyrule Herb",
        "Same as max possible hearts"
      ]
    },
    {
      "item": "Cream of Vegetable Soup",
      "requirements": ["Any vegetable", "Fresh Milk", "Rock Salt"],
      "dish": "Veggies",
      "minHeartsRestored": 1,
      "maxHeartsRestored": 3,
      "minSellingPrice": 20,
      "maxSellingPrice": 40,
      "notes": "N/A",
      "footNotes": [
      	"Recipe must use Safflina, Swift Violet, Mighty Thistle, Armoranth, Blue Nightshade or Silent Princess or the recipe will become Veggie Cream Soup",
      	"Silent Princess", 
      	"Silent Princess or Swift Violet"
      ]
    },
    {
      "item": "Creamy Heart Soup",
      "requirements": ["Any radish", "Hydromelon", "Voltfruit", "Fresh Milk"],
      "dish": "Veggies",
      "minHeartsRestored": 8,
      "maxHeartsRestored": 20,
      "minSellingPrice": 50,
      "maxSellingPrice": 170,
      "notes": "N/A",
      "footNotes": [
      	"Adding certain items may change results, such as produce Simmered Fruit",
      	"1 Raw Gourmet Meat", 
      	"Same as max possible hearts"
      ]
    },
    {
      "item": "Curry Pilaf",
      "requirements": ["Hylian Rice", "Goat Butter", "Goron Spice"],
      "dish": "Veggies",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 10,
      "minSellingPrice": 30,
      "maxSellingPrice": 140,
      "notes": "N/A",
      "footNotes": [
      	"Adding meat, vegetables or mushrooms will change the recipe",
      	"2 Courser Bee Honeys", 
      	"2 Sanke Carps"
      ]
    },
    {
      "item": "Curry Rice",
      "requirements": ["Hylian Rice", "Goron Spice"],
      "dish": "Veggies",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 14,
      "minSellingPrice": 20,
      "maxSellingPrice": 150,
      "notes": "N/A",
      "footNotes": [
      	"Adding meat, fish, Goat Butter, mushrooms or vegetables will change the recipe",
      	"3 Courser Bee Honeys", 
      	"3 Hearty Durians"
      ]
    },
    {
      "item": "Fried Wild Greens",
      "requirements": ["Any vegetable"],
      "dish": "Veggies",
      "minHeartsRestored": "0",
      "maxHeartsRestored": 20,
      "minSellingPrice": 10,
      "maxSellingPrice": 420,
      "notes": "N/A",
      "footNotes": ["4 Endura Carrots", "Same as max possible hearts"]
    },
    {
      "item": "Glazed Veggies",
      "requirements": ["Any vegetable", "Courser Bee Honey"],
      "dish": "Veggies",
      "minHeartsRestored": 5,
      "maxHeartsRestored": 20,
      "minSellingPrice": 30,
      "maxSellingPrice": 370,
      "notes": "N/A",
      "footNotes": [
        "Any combination of Endura Carrots and Courser Bee Honey, up to five total",
        "Same as max possible hearts"
      ]
    },
    {
      "item": "Herb Sauté",
      "requirements": ["Any vegetable", "Goron Spice"],
      "dish": "Veggies",
      "minHeartsRestored": "0",
      "maxHeartsRestored": 19,
      "minSellingPrice": 10,
      "maxSellingPrice": 350,
      "notes": "N/A",
      "footNotes": [
        "Adding meat or fish will override recipe priority",
        "1 Big Hearty Radish + 1 Hearty Radish + 1 Endura Carrot + 1 Hyrule Herb",
        "4 Endura Carrots"
      ]
    },
    {
      "item": "Pumpkin Stew",
      "requirements": [
        "Fortified Pumpkin",
        "Goat Butter",
        "Fresh Milk",
        "Tabantha Wheat"
      ],
      "dish": "Veggies",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 12,
      "minSellingPrice": 40,
      "maxSellingPrice": 140,
      "notes": "N/A",
      "footNotes": [
      	"Due to Fortified Pumpkins being a defense-modifier, Pumpkin Stew will always have a Tough modifier if no other effect-imparting ingredients are added",
        "1 Big Hearty Radish or 1 Hearty Salmon",
        "1 Raw Gourmet Meat"
      ]
    },
    {
      "item": "Salt-Grilled Greens",
      "requirements": ["Any vegetable", "Rock Salt"],
      "dish": "Veggies",
      "minHeartsRestored": "0",
      "maxHeartsRestored": 19,
      "minSellingPrice": 10,
      "maxSellingPrice": 350,
      "notes": "N/A",
      "footNotes": [
        "Adding meat or fish will override recipe priority",
        "1 Big Hearty Radish + 1 Hearty Radish + 1 Endura Carrot + 1 Hyrule Herb",
        "4 Endura Carrots"
      ]
    },
    {
      "item": "Vegetable Curry",
      "requirements": ["Any carrot or pumpkin", "Goron Spice", "Hylian Rice"],
      "dish": "Veggies",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 22,
      "minSellingPrice": 30,
      "maxSellingPrice": 280,
      "notes": "N/A",
      "footNotes": [
      	"Adding meat or mushrooms will override recipe priority",
        "1 Endura Carrot + 2 Big Hearty Radishes or Hearty Salmons",
        "4 Endura Carrots"
      ]
    },
    {
      "item": "Vegetable Omelet",
      "requirements": ["Any vegetable", "Bird Egg", "Goat Butter", "Rock Salt"],
      "dish": "Veggies",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 14,
      "minSellingPrice": 30,
      "maxSellingPrice": 210,
      "notes": "N/A",
      "footNotes": [
        "1 Endura Carrot + 1 Big Hearty Radish or Hearty Salmon",
        "Same as max possible hearts"
      ]
    },
    {
      "item": "Vegetable Risotto",
      "requirements": [
        "Any carrot or pumpkin",
        "Goat Butter",
        "Hylian Rice",
        "Rock Salt"
      ],
      "dish": "Veggies",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 14,
      "minSellingPrice": 30,
      "maxSellingPrice": 190,
      "notes": "N/A",
      "footNotes": [
        "Adding non-carrot/radish ingredients will override priority and change recipe results",
        "1 Endura Carrot + 1 Big Hearty Radish",
        "2 Endura Carrots"
      ]
    },
    {
      "item": "Veggie Cream Soup",
      "requirements": ["Any pumpkin or carrot", "Fresh Milk", "Rock Salt"],
      "dish": "Veggies",
      "minHeartsRestored": 1,
      "maxHeartsRestored": 21,
      "minSellingPrice": 20,
      "maxSellingPrice": 300,
      "notes": "N/A",
      "footNotes": [
        "1 Endura Carrot + 2 Big Hearty Radishes",
        "2 Raw Gourmet Meats + 1 Endura Carrot"
      ]
    },
    {
      "item": "Veggie Rice Balls",
      "requirements": ["Any vegetable", "Hylian Rice"],
      "dish": "Veggies",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 25,
      "minSellingPrice": 10,
      "maxSellingPrice": 350,
      "notes": "N/A",
      "footNotes": [
        "3 Endura Carrots + 1 Big Hearty Radish or Hearty Salmon",
        "4 Endura Carrots"
      ]
    },
    {
      "item": "Cream of Mushroom Soup",
      "requirements": [
        "Any mushroom",
        "Any vegetable",
        "Fresh Milk",
        "Rock Salt"
      ],
      "dish": "Veggies",
      "minHeartsRestored": 7,
      "maxHeartsRestored": 19,
      "minSellingPrice": 30,
      "maxSellingPrice": 240,
      "notes": "N/A",
      "footNotes": [
        "Big Hearty Truffle + Big Hearty Radish + Endura Carrot",
        "1 Big Hearty Truffle + 1 Raw Gourmet Meat + 1 Endura Carrot"
      ]
    },
    {
      "item": "Fragrant Mushroom Sauté",
      "requirements": ["Any mushroom", "Goron Spice"],
      "dish": "Veggies",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 8,
      "minSellingPrice": 20,
      "maxSellingPrice": 180,
      "notes": "N/A",
      "footNotes": ["4 Endura Shrooms", "4 Big Hearty Truffles"]
    },
    {
      "item": "Glazed Mushrooms",
      "requirements": ["Any mushroom", "Courser Bee Honey"],
      "dish": "Veggies",
      "minHeartsRestored": 5,
      "maxHeartsRestored": 28,
      "minSellingPrice": 30,
      "maxSellingPrice": 200,
      "notes": "N/A",
      "footNotes": ["4 Big Hearty Truffles", "Same as max possible hearts"]
    },
    {
      "item": "Mushroom Omelet",
      "requirements": ["Any mushroom", "Bird Egg", "Goat Butter", "Rock Salt"],
      "dish": "Veggies",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 15,
      "minSellingPrice": 30,
      "maxSellingPrice": 170,
      "notes": "N/A",
      "footNotes": [
        "1 Endura Shroom + 1 Big Hearty Radish or Hearty Salmon",
        "1 Big Hearty Truffle + 1 Raw Gourmet Meat"
      ]
    },
    {
      "item": "Mushroom Rice Balls",
      "requirements": ["Any mushroom", "Hylian Rice"],
      "dish": "Veggies",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 14,
      "minSellingPrice": 10,
      "maxSellingPrice": 180,
      "notes": "N/A",
      "footNotes": [
        "3 Endura Shrooms + 1 Big Hearty Radish or Hearty Salmon",
        "4 Big Hearty Truffles"
      ]
    },
    {
      "item": "Mushroom Risotto",
      "requirements": [
        "Any mushroom",
        "Goat Butter",
        "Hylian Rice",
        "Rock Salt"
      ],
      "dish": "Veggies",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 6,
      "minSellingPrice": 30,
      "maxSellingPrice": 170,
      "notes": "N/A",
      "footNotes": [
        "2 Endura Shrooms",
        "1 Big Hearty Truffle + 1 Raw Gourmet Meat"
      ]
    },
    {
      "item": "Salt-Grilled Mushrooms",
      "requirements": ["Any mushroom", "Rock Salt"],
      "dish": "Veggies",
      "minHeartsRestored": 1,
      "maxHeartsRestored": 8,
      "minSellingPrice": 10,
      "maxSellingPrice": 180,
      "notes": "N/A",
      "footNotes": ["4 Endura Shrooms", "4 Big Hearty Truffles"]
    },
    {
      "item": "Copious Simmered Fruit",
      "requirements": ["Any four different fruits"],
      "dish": "Veggies",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 13,
      "minSellingPrice": 40,
      "maxSellingPrice": 100,
      "notes": "N/A",
      "footNotes": [
        "1 1 Palm Fruit + Any three different fruits + 1 Big Hearty Radish or 1 Hearty Salmon",
        "1 Hearty Durian + 1 Mighty Bananas + 1 Fleet-Lotus Seeds + x2 Voltfruit/Palm Fruit/Hydromelon"
      ]
    },
    {
      "item": "Sautéed Peppers",
      "requirements": ["Spicy Pepper"],
      "dish": "Veggies",
      "minHeartsRestored": 1,
      "maxHeartsRestored": 5,
      "minSellingPrice": 10,
      "maxSellingPrice": 50,
      "notes": "N/A",
      "footNotes": ["Provides a maximum of 12:30 minutes of low-level cold resistance (starting with 2:30 for one pepper)"]
    },
    {
      "item": "Simmered Fruit",
      "requirements": ["Any fruit"],
      "dish": "Dessert",
      "minHeartsRestored": 1,
      "maxHeartsRestored": 10,
      "minSellingPrice": 10,
      "maxSellingPrice": 210,
      "notes": "N/A",
      "footNotes": ["5 Palm Fruits", "5 Hearty Durians"]
    },
    {
      "item": "Apple Pie",
      "requirements": ["Apple", "Goat Butter", "Cane Sugar", "Tabantha Wheat"],
      "dish": "Dessert",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 12,
      "minSellingPrice": 30,
      "maxSellingPrice": 140,
      "notes": "N/A",
      "footNotes": ["1 Raw Gourmet Meat", "Same as max possible hearts"]
    },
    {
      "item": "Carrot Cake",
      "requirements": [
        "Any carrot",
        "Goat Butter",
        "Cane Sugar",
        "Tabantha Wheat"
      ],
      "dish": "Dessert",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 15,
      "minSellingPrice": 40,
      "maxSellingPrice": 210,
      "notes": "N/A",
      "footNotes": ["1 Raw Gourmet Meat", "Same as max possible hearts"]
    },
    {
      "item": "Egg Pudding",
      "requirements": ["Bird Egg", "Fresh Milk", "Cane Sugar"],
      "dish": "Dessert",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 15,
      "minSellingPrice": 30,
      "maxSellingPrice": 230,
      "notes": "N/A",
      "footNotes": [
        "1 Palm Fruit + 1 Courser Bee Honey",
        "Same as max possible hearts"
      ]
    },
    {
      "item": "Egg Tart",
      "requirements": [
        "Bird Egg",
        "Goat Butter",
        "Tabantha Wheat",
        "Cane Sugar"
      ],
      "dish": "Dessert",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 10,
      "minSellingPrice": 30,
      "maxSellingPrice": 140,
      "notes": "N/A",
      "footNotes": ["1 Raw Gourmet Meat", "Same as max possible hearts"]
    },
    {
      "item": "Fried Bananas",
      "requirements": ["Mighty Bananas", "Cane Sugar", "Tabantha Wheat"],
      "dish": "Dessert",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 15,
      "minSellingPrice": 30,
      "maxSellingPrice": 230,
      "notes": "N/A",
      "footNotes": ["2 Raw Gourmet Meats", "Same as max possible hearts"]
    },
    {
      "item": "Fruit Cake",
      "requirements": [
        "Apple or Wildberry",
        "Any other fruit",
        "Cane Sugar",
        "Tabantha Wheat"
      ],
      "dish": "Dessert",
      "minHeartsRestored": 5,
      "maxHeartsRestored": 15,
      "minSellingPrice": 40,
      "maxSellingPrice": 140,
      "notes": "N/A",
      "footNotes": ["1 Raw Gourmet Meat", "Same as max possible hearts"]
    },
    {
      "item": "Fruit Pie",
      "requirements": [
        "Any fruit",
        "Goat Butter",
        "Cane Sugar",
        "Tabantha Wheat"
      ],
      "dish": "Dessert",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 10,
      "minSellingPrice": 40,
      "maxSellingPrice": 140,
      "notes": "N/A",
      "footNotes": [
      	"Adding apples or pumpkins will produce Apple Pie, Pumpkin Pie, or Fruit Cake",
      	"1 Raw Gourmet Meat", 
      	"Same as max possible hearts"
      ]
    },
    {
      "item": "Honey Candy",
      "requirements": ["Courser Bee Honey"],
      "dish": "Dessert",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 18,
      "minSellingPrice": 20,
      "maxSellingPrice": 140,
      "notes": "N/A",
      "footNotes": []
    },
    {
      "item": "Honey Crepe",
      "requirements": [
        "Courser Bee Honey",
        "Tabantha Wheat",
        "Bird Egg",
        "Cane Sugar",
        "Fresh Milk"
      ],
      "dish": "Dessert",
      "minHeartsRestored": 10,
      "maxHeartsRestored": 10,
      "minSellingPrice": 70,
      "maxSellingPrice": 70,
      "notes": "N/A",
      "footNotes": ["Same as max possible hearts"]
    },
    {
      "item": "Honeyed Apple",
      "requirements": ["Apple", "Courser Bee Honey"],
      "dish": "Dessert",
      "minHeartsRestored": 5,
      "maxHeartsRestored": 17,
      "minSellingPrice": 30,
      "maxSellingPrice": 120,
      "notes": "N/A",
      "footNotes": ["4 Courser Bee Honeys", "Same as max possible hearts"]
    },
    {
      "item": "Honeyed Fruits",
      "requirements": ["Any fruit", "Courser Bee Honey"],
      "dish": "Dessert",
      "minHeartsRestored": 5,
      "maxHeartsRestored": 18,
      "minSellingPrice": 30,
      "maxSellingPrice": 120,
      "notes": "N/A",
      "footNotes": [
      	"Adding apples will instead produce Honeyed Apple",
        "4 Courser Bee Honeys + 1 Palm Fruit",
        "Same as max possible hearts"
      ]
    },
    {
      "item": "Hot Buttered Apple",
      "requirements": ["Apple", "Goat Butter"],
      "dish": "Dessert",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 5,
      "minSellingPrice": 70,
      "maxSellingPrice": 70,
      "notes": "N/A",
      "footNotes": ["4 Apples", "Same as max possible hearts"]
    },
    {
      "item": "Nut Cake",
      "requirements": [
        "Acorn or Chickaloo Tree Nut",
        "Goat Butter",
        "Cane Sugar",
        "Tabantha Wheat"
      ],
      "dish": "Dessert",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 12,
      "minSellingPrice": 30,
      "maxSellingPrice": 130,
      "notes": "N/A",
      "footNotes": ["1 Raw Gourmet Meat", "Same as max possible hearts"]
    },
    {
      "item": "Plain Crepe",
      "requirements": [
        "Tabantha Wheat",
        "Bird Egg",
        "Cane Sugar",
        "Fresh Milk"
      ],
      "dish": "Dessert",
      "minHeartsRestored": 5,
      "maxHeartsRestored": 14,
      "minSellingPrice": 30,
      "maxSellingPrice": 140,
      "notes": "N/A",
      "footNotes": ["1 Raw Gourmet Meat", "Same as max possible hearts"]
    },
    {
      "item": "Pumpkin Pie",
      "requirements": [
        "Fortified Pumpkin",
        "Goat Butter",
        "Cane Sugar",
        "Tabantha Wheat"
      ],
      "dish": "Dessert",
      "minHeartsRestored": 3,
      "maxHeartsRestored": 10,
      "minSellingPrice": 40,
      "maxSellingPrice": 140,
      "notes": "N/A",
      "footNotes": [
      	"Recipe will always have Tough prefix if no other effect-imparting ingredients are added",
      	"1 Courser Bee Honey", 
      	"1 Raw Gourmet Meat"
      ]
    },
    {
      "item": "Wildberry Crepe",
      "requirements": [
        "Wildberry",
        "Tabantha Wheat",
        "Bird Egg",
        "Cane Sugar",
        "Fresh Milk"
      ],
      "dish": "Dessert",
      "minHeartsRestored": 10,
      "maxHeartsRestored": 10,
      "minSellingPrice": 50,
      "maxSellingPrice": 50,
      "notes": "N/A",
      "footNotes": []
    },
    {
      "item": "Monster Soup",
      "requirements": [
        "Monster Extract",
        "Goat Butter",
        "Fresh Milk",
        "Tabantha Wheat"
      ],
      "dish": "Veggies",
      "minHeartsRestored": 6,
      "maxHeartsRestored": 12,
      "minSellingPrice": 30,
      "maxSellingPrice": 140,
      "notes": "N/A",
      "footNotes": ["1 Raw Gourmet Meat", "Same as max possible hearts"]
    },
    {
      "item": "Monster Curry",
      "requirements": ["Monster Extract", "Goron Spice", "Hylian Rice"],
      "dish": "Veggies",
      "minHeartsRestored": 5,
      "maxHeartsRestored": 17,
      "minSellingPrice": 30,
      "maxSellingPrice": 230,
      "notes": "N/A",
      "footNotes": ["2 Raw Gourmet Meats", "Same as max possible hearts"]
    },
    {
      "item": "Monster Rice Balls",
      "requirements": ["Monster Extract", "Hylian Rice", "Rock Salt"],
      "dish": "Veggies",
      "minHeartsRestored": 0.25,
      "maxHeartsRestored": 17,
      "minSellingPrice": 20,
      "maxSellingPrice": 220,
      "notes": "N/A",
      "footNotes": ["2 Raw Gourmet Meats", "Same as max possible hearts"]
    },
    {
      "item": "Monster Stew",
      "requirements": ["Monster Extract", "Any meat", "Any seafood"],
      "dish": "Meat",
      "minHeartsRestored": 0.25,
      "maxHeartsRestored": 20,
      "minSellingPrice": 40,
      "maxSellingPrice": 360,
      "notes": "N/A",
      "footNotes": [
        "4 Raw Gourmet Meats + 1 Sanke Carp",
        "4 Raw Gourmet Meats + 1 Sanke Carp"
      ]
    },
    {
      "item": "Monster Cake",
      "requirements": [
        "Monster Extract",
        "Cane Sugar",
        "Goat Butter",
        "Tabantha Wheat"
      ],
      "dish": "Dessert",
      "minHeartsRestored": 0.25,
      "maxHeartsRestored": 11,
      "minSellingPrice": 30,
      "maxSellingPrice": 140,
      "notes": "N/A",
      "footNotes": ["1 Raw Gourmet Meat", "Same as max possible hearts"]
    },
    {
      "item": "Dubious Food",
      "requirements": ["Monster parts or incompatiable items"],
      "dish": "",
      "minHeartsRestored": 1,
      "maxHeartsRestored": 1,
      "minSellingPrice": 2,
      "maxSellingPrice": 2,
      "notes": "N/A",
      "footNotes": []
    },
    {
      "item": "Rock-Hard Food",
      "requirements": ["Gems or wood"],
      "dish": "",
      "minHeartsRestored": 0.25,
      "maxHeartsRestored": 0.25,
      "minSellingPrice": 2,
      "maxSellingPrice": 2,
      "notes": "N/A",
      "footNotes": []
    },
    {
      "item": "Sautéed Nuts",
      "requirements": ["Acorn or Chickaloo Tree Nut"],
      "dish": "Veggies",
      "minHeartsRestored": 0.5,
      "maxHeartsRestored": 2,
      "minSellingPrice": 8,
      "maxSellingPrice": 50,
      "notes": "N/A",
      "footNotes": []
    },
    {
      "item": "Wheat Bread",
      "requirements": ["Tabantha Wheat", "Rock Salt"],
      "dish": "Veggies",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 14,
      "minSellingPrice": 10,
      "maxSellingPrice": 270,
      "notes": "N/A",
      "footNotes": ["3 Endura Carrots", "Same as max possible hearts"]
    },
    {
      "item": "Omelet",
      "requirements": ["Bird Egg"],
      "dish": "Veggies",
      "minHeartsRestored": 2,
      "maxHeartsRestored": 4,
      "minSellingPrice": 10,
      "maxSellingPrice": 10,
      "notes": "N/A",
      "footNotes": ["Add more ingredients to increase the number of hearts restored and add various effects"]
    },
    {
      "item": "Warm Milk",
      "requirements": ["Fresh Milk"],
      "dish": "Veggies",
      "minHeartsRestored": 1.5,
      "maxHeartsRestored": 4,
      "minSellingPrice": 10,
      "maxSellingPrice": 10,
      "notes": "N/A",
      "footNotes": ["Add extra ingredients to increase the hearts restored or add a special effect"]
    },
    {
      "item": "Fried Egg and Rice",
      "requirements": ["Hylian Rice", "Bird Egg"],
      "dish": "Veggies",
      "minHeartsRestored": 4,
      "maxHeartsRestored": 4,
      "minSellingPrice": 10,
      "maxSellingPrice": 10,
      "notes": "N/A",
      "footNotes": []
    }
  ];