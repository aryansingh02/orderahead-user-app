export const price = {
  amount: 12345,
  currency: 'USD',
};

export const cartItem = {
  itemId: '5f35c4dbec0310b4ce8bf3da',
  name: 'Parmesan Bread Twists',
  image:
    'https://square-catalog-sandbox.s3.amazonaws.com/files/e076674e75b27509a2fdc27ef68bc8b91e2fa0c2/original.jpeg',

  selectedVariation: {
    name: 'Parmesan Bread Twists',
    price: {
      amount: 649,
      currency: 'USD',
    },
    _id: '5f35c4dbec031029738bf3cd',
  },
  modifiers: [
    {
      name: 'Crust',
      chosenValue: [
        {
          name: 'Hand Tossed',
          price: {
            amount: 100,
            currency: 'USD',
          },
        },
      ],
    },
  ],
};

export const cart = {
  lineItems: [
    {
      cartItem: {
        itemId: '5f9c3121e3c8569b33c4c0d2',
        image:
          'https://square-catalog-sandbox.s3.amazonaws.com/files/e076674e75b27509a2fdc27ef68bc8b91e2fa0c2/original.jpeg',
        name: 'Build your own Pizza',
        selectedVariation: {
          name: 'Build your own Pizza Medium',
          price: {
            amount: 1323,
            currency: 'USD',
          },
          _id: '5f9c3121e3c856b101c4c0a9',
          status: 'IN_STOCK',
          pointOfSaleInfo: {
            type: 'SQUARE',
            squareInfo: {
              inventoryItemId: '3Q6V4AZUAQLZZ6NEEYLIQOJ4',
            },
          },
        },
        modifiers: [
          {
            name: 'Crust',
            chosenValue: [
              {
                name: 'Hand Tossed',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
            ],
          },
          {
            name: 'Size',
            chosenValue: [
              {
                name: 'Small',
                price: {
                  amount: 1099,
                  currency: 'USD',
                },
              },
            ],
          },
          {
            name: 'Cheese',
            chosenValue: [
              {
                name: 'None',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
            ],
          },
        ],
      },
      count: 1,
      _id: '2a724cbc-4fe1-44ec-97f5-b0aa0d3d02b5',
      price: {
        amount: 2522,
        currency: 'USD',
      },
    },
    {
      cartItem: {
        itemId: '5f35c4dbec0310b4ce8bf3da',
        image:
          'https://square-catalog-sandbox.s3.amazonaws.com/files/e076674e75b27509a2fdc27ef68bc8b91e2fa0c2/original.jpeg',

        name: 'Parmesan Bread Twists',
        selectedVariation: {
          name: 'Parmesan Bread Twists',
          price: {
            amount: 649,
            currency: 'USD',
          },
          _id: '5f35c4dbec031029738bf3cd',
        },
        modifiers: [],
      },
      count: 1,
      _id: '1de1cb65-0c66-4716-b88b-a0c8c01feec6',
      price: {
        amount: 649,
        currency: 'USD',
      },
    },
    {
      cartItem: {
        itemId: '5f35c4dbec0310375f8bf3db',
        name: 'Garlic Bread Twists',
        image:
          'https://square-catalog-sandbox.s3.amazonaws.com/files/e076674e75b27509a2fdc27ef68bc8b91e2fa0c2/original.jpeg',

        selectedVariation: {
          name: 'Garlic Bread Twists',
          price: {
            amount: 649,
            currency: 'USD',
          },
          _id: '5f35c4dbec0310816b8bf3ce',
        },
        modifiers: [],
      },
      count: 3,
      _id: 'fd01629f-e3c2-4b3c-8e68-272cd7620c63',
      price: {
        amount: 649,
        currency: 'USD',
      },
    },
    {
      cartItem: {
        itemId: '5f9c3121e3c8569b33c4c0d2',
        name: 'Build your own Pizza',
        image:
          'https://square-catalog-sandbox.s3.amazonaws.com/files/e076674e75b27509a2fdc27ef68bc8b91e2fa0c2/original.jpeg',

        selectedVariation: {
          name: 'Build your own Pizza Small',
          price: {
            amount: 1123,
            currency: 'USD',
          },
          _id: '5f35c4dbec0310030d8bf3c9',
        },
        modifiers: [
          {
            name: 'Cheese portion',
            chosenValue: [],
          },
          {
            name: 'Toppings',
            chosenValue: [
              {
                name: 'Olives',
                price: {
                  amount: 300,
                  currency: 'USD',
                },
              },
            ],
          },
          {
            name: 'Sauce',
            chosenValue: [
              {
                name: 'Marinara Sauce',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
            ],
          },
          {
            name: 'Crust',
            chosenValue: [
              {
                name: 'Hand Tossed',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
            ],
          },
          {
            name: 'Size',
            chosenValue: [
              {
                name: 'Large',
                price: {
                  amount: 2099,
                  currency: 'USD',
                },
              },
            ],
          },
          {
            name: 'Cheese',
            chosenValue: [
              {
                name: 'Normal',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
            ],
          },
        ],
      },
      count: 2,
      _id: '80ff4706-3e3d-4594-8ec6-732dd4a7ea9e',
      price: {
        amount: 4022,
        currency: 'USD',
      },
    },
  ],
  stallId: '5f3577a8405bae54c65239b6',
  storeId: '5f3577a8405bae54c65239b5',
  note: '',
  requestedEta: 10,
  pickupTime: 0,
  requestedDynamicFee: { amount: 0, currency: 'USD' },
  requestedTipPercent: 0.0,
  couponCode: '',
};

export const { lineItems } = cart;

export const slotsInfo = [
  { slot: 1617189300000, isAvailable: true },
  { slot: 1617190200000, isAvailable: true },
  { slot: 1617191100000, isAvailable: true },
  { slot: 1617192000000, isAvailable: true },
  { slot: 1617192900000, isAvailable: true },
  { slot: 1617193800000, isAvailable: true },
  { slot: 1617194700000, isAvailable: true },
  { slot: 1617195600000, isAvailable: true },
  { slot: 1617196500000, isAvailable: true },
  { slot: 1617197400000, isAvailable: true },
  { slot: 1617198300000, isAvailable: true },
  { slot: 1617199200000, isAvailable: true },
  { slot: 1617200100000, isAvailable: true },
  { slot: 1617201000000, isAvailable: true },
  { slot: 1617201900000, isAvailable: true },
  { slot: 1617202800000, isAvailable: true },
  { slot: 1617203700000, isAvailable: true },
  { slot: 1617204600000, isAvailable: true },
  { slot: 1617205500000, isAvailable: true },
  { slot: 1617206400000, isAvailable: true },
  { slot: 1617207300000, isAvailable: true },
  { slot: 1617208200000, isAvailable: true },
  { slot: 1617209100000, isAvailable: true },
  { slot: 1617210000000, isAvailable: true },
  { slot: 1617210900000, isAvailable: true },
  { slot: 1617211800000, isAvailable: true },
  { slot: 1617212700000, isAvailable: true },
  { slot: 1617213600000, isAvailable: true },
  { slot: 1617214500000, isAvailable: true },
];

export const appConfig = {
  rhState: {
    startTime: '',
    endTime: '',
  },
};

export const tag = [
  {
    _id: 'r1',
    name: 'Mexican',
    type: 'gg',
    iconImagePath: 'ss',
  },
  {
    _id: 'r2',
    name: 'Indian',
    type: 'gg',
    iconImagePath: 'ss',
  },
  {
    _id: 'r3',
    name: 'Chinese',
    type: 'gg',
    iconImagePath: 'ss',
  },
];


export const stall = {
  _id: '5f3577a8405bae54c65239b6',
  name: 'Costa Coffee',
  menu : {
    _id: "5f35c4dbec0310c59e8bf3e5",
    name: "dh",
    menuItems: [
      {
        name: "Parmesan Bread Twists",
        description:
          "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with garlic and Parmesan cheese seasoning, and sprinkled with more Parmesan. Served with a side of marinara sauce for dipping.",
        variations: [
          {
            name: "Parmesan Bread Twists",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec031029738bf3cd",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310b4ce8bf3da",
        applicableTaxKeys: [
          "2T3SOH5TRFWQTR5FBPH233P4",
          "N4ACVVQXWUBXLN4MEE52TQEV",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/e076674e75b27509a2fdc27ef68bc8b91e2fa0c2/original.jpeg",
        ],
      },
      {
        name: "Garlic Bread Twists",
        description:
          "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with buttery garlic and Parmesan cheese seasoning. Served with a side of marinara sauce for dipping.",
        variations: [
          {
            name: "Garlic Bread Twists",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec0310816b8bf3ce",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310375f8bf3db",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/960d3c22a68842844ef41f934203a3b8d08b29ce/original.jpeg",
        ],
      },
      {
        name: "Stuffed Cheesy Bread",
        description:
          "Our oven-baked breadsticks are generously stuffed and covered with a blend of 100% real mozzarella and cheddar cheeses then seasoned with a touch of garlic. Add marinara or your favorite dipping cup for an additional charge.",
        variations: [
          {
            name: "Stuffed Cheesy Bread",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec0310245a8bf3cf",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec03103fae8bf3dc",
        applicableTaxKeys: [
          "2T3SOH5TRFWQTR5FBPH233P4",
          "N4ACVVQXWUBXLN4MEE52TQEV",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/81d830e89951d7586a948e0a8824ffd0312d6200/original.jpeg",
        ],
      },
      {
        name: "Stuffed Cheesy Bread with Spinach & Feta",
        description:
          "Our oven-baked breadsticks are stuffed with cheese, fresh spinach and Feta cheese - covered in a blend of cheese made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.",
        variations: [
          {
            name: "Stuffed Cheesy Bread with Spinach & Feta",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec031064468bf3d0",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec03102d6d8bf3dd",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/789cc77d8c7b5a53bbf76a711628adaa8708311f/original.jpeg",
        ],
      },
      {
        name: "Parmesan Bread Bites",
        description:
          "Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with garlic and Parmesan. Available in 16-piece or 32-piece orders. Add marinara or your favorite dipping cup for an additional charge.",
        variations: [
          {
            name: "Parmesan Bread Bites",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec0310c3fc8bf3d1",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310c5d58bf3de",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/e076674e75b27509a2fdc27ef68bc8b91e2fa0c2/original.jpeg",
        ],
      },
      {
        name: "Cinnamon Bread Twists",
        description:
          "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with a perfect blend of cinnamon and sugar, and served with a side of sweet icing for dipping or drizzling.",
        variations: [
          {
            name: "Cinnamon Bread Twists",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec03100cbc8bf3d2",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310e1168bf3df",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/0f361d3dc6fb65968b8dd3aa31a1dfe8d68a2a56/original.jpeg",
        ],
      },
      {
        name: "Stuffed Cheesy Bread with Bacon & Jalapeno",
        description:
          "Our oven-baked breadsticks are stuffed with cheese, smoked bacon & jalapeno peppers - covered in a blend of cheeses; made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.",
        variations: [
          {
            name: "Stuffed Cheesy Bread with Bacon & Jalapeno",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec031086378bf3d3",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec031080388bf3e0",
        applicableTaxKeys: [
          "2T3SOH5TRFWQTR5FBPH233P4",
          "N4ACVVQXWUBXLN4MEE52TQEV",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/3ea47734d693e3b89fd3f5b8ed5b63c95c5cc60b/original.jpeg",
        ],
      },
      {
        name: "Coke",
        description:
          "The authentic cola sensation that is a refreshing part of sharing life's enjoyable moments.",
        variations: [
          {
            name: "Coke 20Oz Bottle",
            price: {
              amount: 229,
              currency: "USD",
            },
            _id: "5f35c4dbec031005fe8bf3d4",
          },
          {
            name: "Coke 2-Liter Bottle",
            price: {
              amount: 349,
              currency: "USD",
            },
            _id: "5f35c4dbec031001f38bf3d5",
          },
        ],
        categories: ["Drinks"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec03109bc58bf3e1",
        applicableTaxKeys: [
          "2T3SOH5TRFWQTR5FBPH233P4",
          "N4ACVVQXWUBXLN4MEE52TQEV",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/6e113f57887816b1b40dcf1035ae255244afa7b5/original.jpeg",
        ],
      },
      {
        name: "Coca Cola Zero Sugar",
        description:
          "Real Coca-Cola® Taste! Now you can cut back on sugar without sacrificing the great Coca-Cola taste you know and love. Coca-Cola Zero Sugar offers you real Coca-Cola taste and uplifting refreshment without any sugar.",
        variations: [
          {
            name: "Coca Cola Zero Sugar 20Oz Bottle",
            price: {
              amount: 229,
              currency: "USD",
            },
            _id: "5f35c4dbec031041848bf3d6",
          },
          {
            name: "Coca Cola Zero Sugar 2-Liter Bottle",
            price: {
              amount: 349,
              currency: "USD",
            },
            _id: "5f35c4dbec0310b0018bf3d7",
          },
        ],
        categories: ["Drinks"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310794e8bf3e2",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
      },
      {
        name: "Diet Coke",
        description:
          "Beautifully balanced adult cola taste in a no calorie beverage.",
        variations: [
          {
            name: "Diet Coke 20Oz Bottle",
            price: {
              amount: 229,
              currency: "USD",
            },
            _id: "5f35c4dbec03102b8b8bf3d8",
          },
          {
            name: "Diet Coke 2-Liter Bottle",
            price: {
              amount: 349,
              currency: "USD",
            },
            _id: "5f35c4dbec0310e5fb8bf3d9",
          },
        ],
        categories: ["Drinks"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec03105f018bf3e3",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
      },
      {
        name: "Build your own Pizza",
        description: "Made to order",
        variations: [
          {
            name: "Build your own Pizza Small",
            price: {
              amount: 1123,
              currency: "USD",
            },
            _id: '5f35c4dbec0310030d8bf3c9',
          },
          {
            name: 'Build your own Pizza Medium',
            price: {
              amount: 1323,
              currency: 'USD',
            },
            _id: '5f35c4dbec031072068bf3ca',
          },
          {
            name: 'Build your own Pizza Large',
            price: {
              amount: 1523,
              currency: 'USD',
            },
            _id: '5f35c4dbec03105d1c8bf3cb',
          },
          {
            name: 'Build your own Pizza X-Large',
            price: {
              amount: 1723,
              currency: 'USD',
            },
            _id: '5f35c4dbec0310fbbf8bf3cc',
          },
        ],
        categories: ['Build your own'],
        modifier: [
          {
            name: 'Crust',
            options: [
              {
                name: 'Hand Tossed',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
              {
                name: 'Brooklyn style',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
            ],
            minimum: 1,
            maximum: 1,
          },
          {
            name: 'Size',
            options: [
              {
                name: 'Small',
                price: {
                  amount: 1099,
                  currency: 'USD',
                },
              },
              {
                name: 'Medium',
                price: {
                  amount: 1699,
                  currency: 'USD',
                },
              },
              {
                name: 'Large',
                price: {
                  amount: 2099,
                  currency: 'USD',
                },
              },
              {
                name: 'X-Large',
                price: {
                  amount: 2399,
                  currency: 'USD',
                },
              },
            ],
            minimum: 1,
            maximum: 1,
          },
          {
            name: 'Cheese',
            options: [
              {
                name: 'None',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
              {
                name: 'Thin',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
              {
                name: 'Normal',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
              {
                name: 'Extra',
                price: {
                  amount: 300,
                  currency: 'USD',
                },
              },
            ],
            minimum: 0,
            maximum: 999,
          },
          {
            name: 'Cheese portion',
            options: [
              {
                name: 'Left',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
              {
                name: 'Right',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
              {
                name: 'All',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
            ],
            minimum: 0,
            maximum: 999,
          },
          {
            name: 'Sauce',
            options: [
              {
                name: 'Tomato Sauce',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
              {
                name: 'Marinara Sauce',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
              {
                name: 'BBQ Sauce',
                price: {
                  amount: 300,
                  currency: 'USD',
                },
              },
            ],
            minimum: 0,
            maximum: 999,
          },
          {
            name: 'Toppings',
            options: [
              {
                name: 'Pineapple',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
              {
                name: 'Garlic',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
              {
                name: 'Olives',
                price: {
                  amount: 300,
                  currency: 'USD',
                },
              },
            ],
            minimum: 0,
            maximum: 999,
          },
        ],
        status: 'IN_STOCK',
        _id: '5f35c4dbec031072dd8bf3e4',
        applicableTaxKeys: [
          '2T3SOH5TRFWQTR5FBPH233P4',
          'N4ACVVQXWUBXLN4MEE52TQEV',
        ],
        imagePaths: [
          'https://square-catalog-sandbox.s3.amazonaws.com/files/cceff4302cc0c8ecfe231584a48e0c051d1e8542/original.jpeg',
        ],
      },
    ],
  },
  eventId: '5f3577a7405bae54c65239b2',
  storeId: '5f3577a8405bae54c65239b5',
  description: 'Menu based on Haldiram India restaurant',
  tag: [
    {
      _id: '5f3577a7405bae54c65239a8',
      name: 'Burgers',
      type: 'CUISINE',
      status: 'ACTIVE',
      iconImagePath: '/img/tags/burgers.png',
    },
  ],
  logoImagePath: '/img/costacoffee.svg',
  bannerImagePath: '/img/auto_gen/ScreenShot2020-03-21at7.17.18PM.png',
  expenseLevel: 2,
  reviews: 20,
  rating: 4.5,
  pointOfSaleInfo: {
    type: 'SQUARE',
    pointOfSaleAuthInfoId: '5f3577a3405bae54c6523715',
    squareInfo: {
      locationId: 'GPQDQYYHBQ0G3',
    },
  },
  businessHours: {},
};

export const stall2 = {
  _id: '5f400962f7c04e6925dc16de',
  name: "Dunkin' Donuts",
  eventId: '5f3577a7405bae54c65239z9',
  storeId: '5f3577a8405bae54c65239m8',
  menu : {
    _id: "5f35c4dbec0310c59e8bf3e5",
    name: "dh",
    menuItems: [
      {
        name: "Parmesan Bread Twists",
        description:
          "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with garlic and Parmesan cheese seasoning, and sprinkled with more Parmesan. Served with a side of marinara sauce for dipping.",
        variations: [
          {
            name: "Parmesan Bread Twists",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec031029738bf3cd",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310b4ce8bf3da",
        applicableTaxKeys: [
          "2T3SOH5TRFWQTR5FBPH233P4",
          "N4ACVVQXWUBXLN4MEE52TQEV",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/e076674e75b27509a2fdc27ef68bc8b91e2fa0c2/original.jpeg",
        ],
      },
      {
        name: "Garlic Bread Twists",
        description:
          "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with buttery garlic and Parmesan cheese seasoning. Served with a side of marinara sauce for dipping.",
        variations: [
          {
            name: "Garlic Bread Twists",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec0310816b8bf3ce",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310375f8bf3db",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/960d3c22a68842844ef41f934203a3b8d08b29ce/original.jpeg",
        ],
      },
      {
        name: "Stuffed Cheesy Bread",
        description:
          "Our oven-baked breadsticks are generously stuffed and covered with a blend of 100% real mozzarella and cheddar cheeses then seasoned with a touch of garlic. Add marinara or your favorite dipping cup for an additional charge.",
        variations: [
          {
            name: "Stuffed Cheesy Bread",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec0310245a8bf3cf",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec03103fae8bf3dc",
        applicableTaxKeys: [
          "2T3SOH5TRFWQTR5FBPH233P4",
          "N4ACVVQXWUBXLN4MEE52TQEV",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/81d830e89951d7586a948e0a8824ffd0312d6200/original.jpeg",
        ],
      },
      {
        name: "Stuffed Cheesy Bread with Spinach & Feta",
        description:
          "Our oven-baked breadsticks are stuffed with cheese, fresh spinach and Feta cheese - covered in a blend of cheese made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.",
        variations: [
          {
            name: "Stuffed Cheesy Bread with Spinach & Feta",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec031064468bf3d0",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec03102d6d8bf3dd",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/789cc77d8c7b5a53bbf76a711628adaa8708311f/original.jpeg",
        ],
      },
      {
        name: "Parmesan Bread Bites",
        description:
          "Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with garlic and Parmesan. Available in 16-piece or 32-piece orders. Add marinara or your favorite dipping cup for an additional charge.",
        variations: [
          {
            name: "Parmesan Bread Bites",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec0310c3fc8bf3d1",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310c5d58bf3de",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/e076674e75b27509a2fdc27ef68bc8b91e2fa0c2/original.jpeg",
        ],
      },
      {
        name: "Cinnamon Bread Twists",
        description:
          "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with a perfect blend of cinnamon and sugar, and served with a side of sweet icing for dipping or drizzling.",
        variations: [
          {
            name: "Cinnamon Bread Twists",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec03100cbc8bf3d2",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310e1168bf3df",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/0f361d3dc6fb65968b8dd3aa31a1dfe8d68a2a56/original.jpeg",
        ],
      },
      {
        name: "Stuffed Cheesy Bread with Bacon & Jalapeno",
        description:
          "Our oven-baked breadsticks are stuffed with cheese, smoked bacon & jalapeno peppers - covered in a blend of cheeses; made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.",
        variations: [
          {
            name: "Stuffed Cheesy Bread with Bacon & Jalapeno",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec031086378bf3d3",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec031080388bf3e0",
        applicableTaxKeys: [
          "2T3SOH5TRFWQTR5FBPH233P4",
          "N4ACVVQXWUBXLN4MEE52TQEV",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/3ea47734d693e3b89fd3f5b8ed5b63c95c5cc60b/original.jpeg",
        ],
      },
      {
        name: "Coke",
        description:
          "The authentic cola sensation that is a refreshing part of sharing life's enjoyable moments.",
        variations: [
          {
            name: "Coke 20Oz Bottle",
            price: {
              amount: 229,
              currency: "USD",
            },
            _id: "5f35c4dbec031005fe8bf3d4",
          },
          {
            name: "Coke 2-Liter Bottle",
            price: {
              amount: 349,
              currency: "USD",
            },
            _id: "5f35c4dbec031001f38bf3d5",
          },
        ],
        categories: ["Drinks"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec03109bc58bf3e1",
        applicableTaxKeys: [
          "2T3SOH5TRFWQTR5FBPH233P4",
          "N4ACVVQXWUBXLN4MEE52TQEV",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/6e113f57887816b1b40dcf1035ae255244afa7b5/original.jpeg",
        ],
      },
      {
        name: "Coca Cola Zero Sugar",
        description:
          "Real Coca-Cola® Taste! Now you can cut back on sugar without sacrificing the great Coca-Cola taste you know and love. Coca-Cola Zero Sugar offers you real Coca-Cola taste and uplifting refreshment without any sugar.",
        variations: [
          {
            name: "Coca Cola Zero Sugar 20Oz Bottle",
            price: {
              amount: 229,
              currency: "USD",
            },
            _id: "5f35c4dbec031041848bf3d6",
          },
          {
            name: "Coca Cola Zero Sugar 2-Liter Bottle",
            price: {
              amount: 349,
              currency: "USD",
            },
            _id: "5f35c4dbec0310b0018bf3d7",
          },
        ],
        categories: ["Drinks"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310794e8bf3e2",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
      },
      {
        name: "Diet Coke",
        description:
          "Beautifully balanced adult cola taste in a no calorie beverage.",
        variations: [
          {
            name: "Diet Coke 20Oz Bottle",
            price: {
              amount: 229,
              currency: "USD",
            },
            _id: "5f35c4dbec03102b8b8bf3d8",
          },
          {
            name: "Diet Coke 2-Liter Bottle",
            price: {
              amount: 349,
              currency: "USD",
            },
            _id: "5f35c4dbec0310e5fb8bf3d9",
          },
        ],
        categories: ["Drinks"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec03105f018bf3e3",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
      },
      {
        name: "Build your own Pizza",
        description: "Made to order",
        variations: [
          {
            name: "Build your own Pizza Small",
            price: {
              amount: 1123,
              currency: "USD",
            },
            _id: '5f35c4dbec0310030d8bf3c9',
          },
          {
            name: 'Build your own Pizza Medium',
            price: {
              amount: 1323,
              currency: 'USD',
            },
            _id: '5f35c4dbec031072068bf3ca',
          },
          {
            name: 'Build your own Pizza Large',
            price: {
              amount: 1523,
              currency: 'USD',
            },
            _id: '5f35c4dbec03105d1c8bf3cb',
          },
          {
            name: 'Build your own Pizza X-Large',
            price: {
              amount: 1723,
              currency: 'USD',
            },
            _id: '5f35c4dbec0310fbbf8bf3cc',
          },
        ],
        categories: ['Build your own'],
        modifier: [
          {
            name: 'Crust',
            options: [
              {
                name: 'Hand Tossed',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
              {
                name: 'Brooklyn style',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
            ],
            minimum: 1,
            maximum: 1,
          },
          {
            name: 'Size',
            options: [
              {
                name: 'Small',
                price: {
                  amount: 1099,
                  currency: 'USD',
                },
              },
              {
                name: 'Medium',
                price: {
                  amount: 1699,
                  currency: 'USD',
                },
              },
              {
                name: 'Large',
                price: {
                  amount: 2099,
                  currency: 'USD',
                },
              },
              {
                name: 'X-Large',
                price: {
                  amount: 2399,
                  currency: 'USD',
                },
              },
            ],
            minimum: 1,
            maximum: 1,
          },
          {
            name: 'Cheese',
            options: [
              {
                name: 'None',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
              {
                name: 'Thin',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
              {
                name: 'Normal',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
              {
                name: 'Extra',
                price: {
                  amount: 300,
                  currency: 'USD',
                },
              },
            ],
            minimum: 0,
            maximum: 999,
          },
          {
            name: 'Cheese portion',
            options: [
              {
                name: 'Left',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
              {
                name: 'Right',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
              {
                name: 'All',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
            ],
            minimum: 0,
            maximum: 999,
          },
          {
            name: 'Sauce',
            options: [
              {
                name: 'Tomato Sauce',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
              {
                name: 'Marinara Sauce',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
              {
                name: 'BBQ Sauce',
                price: {
                  amount: 300,
                  currency: 'USD',
                },
              },
            ],
            minimum: 0,
            maximum: 999,
          },
          {
            name: 'Toppings',
            options: [
              {
                name: 'Pineapple',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
              {
                name: 'Garlic',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
              {
                name: 'Olives',
                price: {
                  amount: 300,
                  currency: 'USD',
                },
              },
            ],
            minimum: 0,
            maximum: 999,
          },
        ],
        status: 'IN_STOCK',
        _id: '5f35c4dbec031072dd8bf3e4',
        applicableTaxKeys: [
          '2T3SOH5TRFWQTR5FBPH233P4',
          'N4ACVVQXWUBXLN4MEE52TQEV',
        ],
        imagePaths: [
          'https://square-catalog-sandbox.s3.amazonaws.com/files/cceff4302cc0c8ecfe231584a48e0c051d1e8542/original.jpeg',
        ],
      },
    ],
  },
  description: 'Menu based on Haldiram India restaurant',
  tag: [
    {
      _id: '5f3577a7405bae54c93648a8',
      name: 'Burgers',
      type: 'CUISINE',
      status: 'ACTIVE',
      iconImagePath: '/img/tags/burgers.png',
    },
  ],
  logoImagePath: '/img/dunkindonuts.svg',
  bannerImagePath: '/img/auto_gen/ScreenShot2020-03-21at7.17.18PM.png',
  expenseLevel: 2,
  reviews: 20,
  rating: 4.5,
  pointOfSaleInfo: {
    type: 'SQUARE',
    pointOfSaleAuthInfoId: '5f3577a3405bae54c6523715',
    squareInfo: {
      locationId: 'GPQDQYYHBQ0G3',
    },
  },
  businessHours: {},
};
export const stall3 = {
  _id: '5f400962f7c04e6925dc1645',
  name: "McDonald's",
  eventId: '5f3577a7405bae54c65239z9',
  menu : {
    _id: "5f35c4dbec0310c59e8bf3e5",
    name: "dh",
    menuItems: [
      {
        name: "Parmesan Bread Twists",
        description:
          "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with garlic and Parmesan cheese seasoning, and sprinkled with more Parmesan. Served with a side of marinara sauce for dipping.",
        variations: [
          {
            name: "Parmesan Bread Twists",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec031029738bf3cd",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310b4ce8bf3da",
        applicableTaxKeys: [
          "2T3SOH5TRFWQTR5FBPH233P4",
          "N4ACVVQXWUBXLN4MEE52TQEV",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/e076674e75b27509a2fdc27ef68bc8b91e2fa0c2/original.jpeg",
        ],
      },
      {
        name: "Garlic Bread Twists",
        description:
          "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with buttery garlic and Parmesan cheese seasoning. Served with a side of marinara sauce for dipping.",
        variations: [
          {
            name: "Garlic Bread Twists",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec0310816b8bf3ce",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310375f8bf3db",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/960d3c22a68842844ef41f934203a3b8d08b29ce/original.jpeg",
        ],
      },
      {
        name: "Stuffed Cheesy Bread",
        description:
          "Our oven-baked breadsticks are generously stuffed and covered with a blend of 100% real mozzarella and cheddar cheeses then seasoned with a touch of garlic. Add marinara or your favorite dipping cup for an additional charge.",
        variations: [
          {
            name: "Stuffed Cheesy Bread",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec0310245a8bf3cf",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec03103fae8bf3dc",
        applicableTaxKeys: [
          "2T3SOH5TRFWQTR5FBPH233P4",
          "N4ACVVQXWUBXLN4MEE52TQEV",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/81d830e89951d7586a948e0a8824ffd0312d6200/original.jpeg",
        ],
      },
      {
        name: "Stuffed Cheesy Bread with Spinach & Feta",
        description:
          "Our oven-baked breadsticks are stuffed with cheese, fresh spinach and Feta cheese - covered in a blend of cheese made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.",
        variations: [
          {
            name: "Stuffed Cheesy Bread with Spinach & Feta",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec031064468bf3d0",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec03102d6d8bf3dd",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/789cc77d8c7b5a53bbf76a711628adaa8708311f/original.jpeg",
        ],
      },
      {
        name: "Parmesan Bread Bites",
        description:
          "Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with garlic and Parmesan. Available in 16-piece or 32-piece orders. Add marinara or your favorite dipping cup for an additional charge.",
        variations: [
          {
            name: "Parmesan Bread Bites",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec0310c3fc8bf3d1",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310c5d58bf3de",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/e076674e75b27509a2fdc27ef68bc8b91e2fa0c2/original.jpeg",
        ],
      },
      {
        name: "Cinnamon Bread Twists",
        description:
          "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with a perfect blend of cinnamon and sugar, and served with a side of sweet icing for dipping or drizzling.",
        variations: [
          {
            name: "Cinnamon Bread Twists",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec03100cbc8bf3d2",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310e1168bf3df",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/0f361d3dc6fb65968b8dd3aa31a1dfe8d68a2a56/original.jpeg",
        ],
      },
      {
        name: "Stuffed Cheesy Bread with Bacon & Jalapeno",
        description:
          "Our oven-baked breadsticks are stuffed with cheese, smoked bacon & jalapeno peppers - covered in a blend of cheeses; made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.",
        variations: [
          {
            name: "Stuffed Cheesy Bread with Bacon & Jalapeno",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec031086378bf3d3",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec031080388bf3e0",
        applicableTaxKeys: [
          "2T3SOH5TRFWQTR5FBPH233P4",
          "N4ACVVQXWUBXLN4MEE52TQEV",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/3ea47734d693e3b89fd3f5b8ed5b63c95c5cc60b/original.jpeg",
        ],
      },
      {
        name: "Coke",
        description:
          "The authentic cola sensation that is a refreshing part of sharing life's enjoyable moments.",
        variations: [
          {
            name: "Coke 20Oz Bottle",
            price: {
              amount: 229,
              currency: "USD",
            },
            _id: "5f35c4dbec031005fe8bf3d4",
          },
          {
            name: "Coke 2-Liter Bottle",
            price: {
              amount: 349,
              currency: "USD",
            },
            _id: "5f35c4dbec031001f38bf3d5",
          },
        ],
        categories: ["Drinks"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec03109bc58bf3e1",
        applicableTaxKeys: [
          "2T3SOH5TRFWQTR5FBPH233P4",
          "N4ACVVQXWUBXLN4MEE52TQEV",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/6e113f57887816b1b40dcf1035ae255244afa7b5/original.jpeg",
        ],
      },
      {
        name: "Coca Cola Zero Sugar",
        description:
          "Real Coca-Cola® Taste! Now you can cut back on sugar without sacrificing the great Coca-Cola taste you know and love. Coca-Cola Zero Sugar offers you real Coca-Cola taste and uplifting refreshment without any sugar.",
        variations: [
          {
            name: "Coca Cola Zero Sugar 20Oz Bottle",
            price: {
              amount: 229,
              currency: "USD",
            },
            _id: "5f35c4dbec031041848bf3d6",
          },
          {
            name: "Coca Cola Zero Sugar 2-Liter Bottle",
            price: {
              amount: 349,
              currency: "USD",
            },
            _id: "5f35c4dbec0310b0018bf3d7",
          },
        ],
        categories: ["Drinks"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310794e8bf3e2",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
      },
      {
        name: "Diet Coke",
        description:
          "Beautifully balanced adult cola taste in a no calorie beverage.",
        variations: [
          {
            name: "Diet Coke 20Oz Bottle",
            price: {
              amount: 229,
              currency: "USD",
            },
            _id: "5f35c4dbec03102b8b8bf3d8",
          },
          {
            name: "Diet Coke 2-Liter Bottle",
            price: {
              amount: 349,
              currency: "USD",
            },
            _id: "5f35c4dbec0310e5fb8bf3d9",
          },
        ],
        categories: ["Drinks"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec03105f018bf3e3",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
      },
      {
        name: "Build your own Pizza",
        description: "Made to order",
        variations: [
          {
            name: "Build your own Pizza Small",
            price: {
              amount: 1123,
              currency: "USD",
            },
            _id: '5f35c4dbec0310030d8bf3c9',
          },
          {
            name: 'Build your own Pizza Medium',
            price: {
              amount: 1323,
              currency: 'USD',
            },
            _id: '5f35c4dbec031072068bf3ca',
          },
          {
            name: 'Build your own Pizza Large',
            price: {
              amount: 1523,
              currency: 'USD',
            },
            _id: '5f35c4dbec03105d1c8bf3cb',
          },
          {
            name: 'Build your own Pizza X-Large',
            price: {
              amount: 1723,
              currency: 'USD',
            },
            _id: '5f35c4dbec0310fbbf8bf3cc',
          },
        ],
        categories: ['Build your own'],
        modifier: [
          {
            name: 'Crust',
            options: [
              {
                name: 'Hand Tossed',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
              {
                name: 'Brooklyn style',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
            ],
            minimum: 1,
            maximum: 1,
          },
          {
            name: 'Size',
            options: [
              {
                name: 'Small',
                price: {
                  amount: 1099,
                  currency: 'USD',
                },
              },
              {
                name: 'Medium',
                price: {
                  amount: 1699,
                  currency: 'USD',
                },
              },
              {
                name: 'Large',
                price: {
                  amount: 2099,
                  currency: 'USD',
                },
              },
              {
                name: 'X-Large',
                price: {
                  amount: 2399,
                  currency: 'USD',
                },
              },
            ],
            minimum: 1,
            maximum: 1,
          },
          {
            name: 'Cheese',
            options: [
              {
                name: 'None',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
              {
                name: 'Thin',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
              {
                name: 'Normal',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
              {
                name: 'Extra',
                price: {
                  amount: 300,
                  currency: 'USD',
                },
              },
            ],
            minimum: 0,
            maximum: 999,
          },
          {
            name: 'Cheese portion',
            options: [
              {
                name: 'Left',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
              {
                name: 'Right',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
              {
                name: 'All',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
            ],
            minimum: 0,
            maximum: 999,
          },
          {
            name: 'Sauce',
            options: [
              {
                name: 'Tomato Sauce',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
              {
                name: 'Marinara Sauce',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
              {
                name: 'BBQ Sauce',
                price: {
                  amount: 300,
                  currency: 'USD',
                },
              },
            ],
            minimum: 0,
            maximum: 999,
          },
          {
            name: 'Toppings',
            options: [
              {
                name: 'Pineapple',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
              {
                name: 'Garlic',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
              {
                name: 'Olives',
                price: {
                  amount: 300,
                  currency: 'USD',
                },
              },
            ],
            minimum: 0,
            maximum: 999,
          },
        ],
        status: 'IN_STOCK',
        _id: '5f35c4dbec031072dd8bf3e4',
        applicableTaxKeys: [
          '2T3SOH5TRFWQTR5FBPH233P4',
          'N4ACVVQXWUBXLN4MEE52TQEV',
        ],
        imagePaths: [
          'https://square-catalog-sandbox.s3.amazonaws.com/files/cceff4302cc0c8ecfe231584a48e0c051d1e8542/original.jpeg',
        ],
      },
    ],
  },
  storeId: '5f3577a8405bae54c65239m8',
  description: 'Menu based on Haldiram India restaurant',
  tag: [
    {
      _id: '5f3577a7405bae54c93648a8',
      name: 'Burgers',
      type: 'CUISINE',
      status: 'ACTIVE',
      iconImagePath: '/img/tags/burgers.png',
    },
  ],
  logoImagePath: '/img/mcdonalds.svg',
  bannerImagePath: '/img/auto_gen/ScreenShot2020-03-21at7.17.18PM.png',
  expenseLevel: 2,
  reviews: 20,
  rating: 4.5,
  pointOfSaleInfo: {
    type: 'SQUARE',
    pointOfSaleAuthInfoId: '5f3577a3405bae54c6523715',
    squareInfo: {
      locationId: 'GPQDQYYHBQ0G3',
    },
  },
  businessHours: {},
};
export const stall4 = {
  _id: '5f400962f7c04e6925dc1646',
  name: 'Starbucks',
  eventId: '5f3577a7405bae54c65239z9',
  storeId: '5f3577a8405bae54c65239m8',
  menu : {
    _id: "5f35c4dbec0310c59e8bf3e5",
    name: "dh",
    menuItems: [
      {
        name: "Parmesan Bread Twists",
        description:
          "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with garlic and Parmesan cheese seasoning, and sprinkled with more Parmesan. Served with a side of marinara sauce for dipping.",
        variations: [
          {
            name: "Parmesan Bread Twists",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec031029738bf3cd",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310b4ce8bf3da",
        applicableTaxKeys: [
          "2T3SOH5TRFWQTR5FBPH233P4",
          "N4ACVVQXWUBXLN4MEE52TQEV",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/e076674e75b27509a2fdc27ef68bc8b91e2fa0c2/original.jpeg",
        ],
      },
      {
        name: "Garlic Bread Twists",
        description:
          "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with buttery garlic and Parmesan cheese seasoning. Served with a side of marinara sauce for dipping.",
        variations: [
          {
            name: "Garlic Bread Twists",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec0310816b8bf3ce",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310375f8bf3db",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/960d3c22a68842844ef41f934203a3b8d08b29ce/original.jpeg",
        ],
      },
      {
        name: "Stuffed Cheesy Bread",
        description:
          "Our oven-baked breadsticks are generously stuffed and covered with a blend of 100% real mozzarella and cheddar cheeses then seasoned with a touch of garlic. Add marinara or your favorite dipping cup for an additional charge.",
        variations: [
          {
            name: "Stuffed Cheesy Bread",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec0310245a8bf3cf",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec03103fae8bf3dc",
        applicableTaxKeys: [
          "2T3SOH5TRFWQTR5FBPH233P4",
          "N4ACVVQXWUBXLN4MEE52TQEV",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/81d830e89951d7586a948e0a8824ffd0312d6200/original.jpeg",
        ],
      },
      {
        name: "Stuffed Cheesy Bread with Spinach & Feta",
        description:
          "Our oven-baked breadsticks are stuffed with cheese, fresh spinach and Feta cheese - covered in a blend of cheese made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.",
        variations: [
          {
            name: "Stuffed Cheesy Bread with Spinach & Feta",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec031064468bf3d0",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec03102d6d8bf3dd",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/789cc77d8c7b5a53bbf76a711628adaa8708311f/original.jpeg",
        ],
      },
      {
        name: "Parmesan Bread Bites",
        description:
          "Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with garlic and Parmesan. Available in 16-piece or 32-piece orders. Add marinara or your favorite dipping cup for an additional charge.",
        variations: [
          {
            name: "Parmesan Bread Bites",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec0310c3fc8bf3d1",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310c5d58bf3de",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/e076674e75b27509a2fdc27ef68bc8b91e2fa0c2/original.jpeg",
        ],
      },
      {
        name: "Cinnamon Bread Twists",
        description:
          "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with a perfect blend of cinnamon and sugar, and served with a side of sweet icing for dipping or drizzling.",
        variations: [
          {
            name: "Cinnamon Bread Twists",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec03100cbc8bf3d2",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310e1168bf3df",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/0f361d3dc6fb65968b8dd3aa31a1dfe8d68a2a56/original.jpeg",
        ],
      },
      {
        name: "Stuffed Cheesy Bread with Bacon & Jalapeno",
        description:
          "Our oven-baked breadsticks are stuffed with cheese, smoked bacon & jalapeno peppers - covered in a blend of cheeses; made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.",
        variations: [
          {
            name: "Stuffed Cheesy Bread with Bacon & Jalapeno",
            price: {
              amount: 649,
              currency: "USD",
            },
            _id: "5f35c4dbec031086378bf3d3",
          },
        ],
        categories: ["Bread"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec031080388bf3e0",
        applicableTaxKeys: [
          "2T3SOH5TRFWQTR5FBPH233P4",
          "N4ACVVQXWUBXLN4MEE52TQEV",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/3ea47734d693e3b89fd3f5b8ed5b63c95c5cc60b/original.jpeg",
        ],
      },
      {
        name: "Coke",
        description:
          "The authentic cola sensation that is a refreshing part of sharing life's enjoyable moments.",
        variations: [
          {
            name: "Coke 20Oz Bottle",
            price: {
              amount: 229,
              currency: "USD",
            },
            _id: "5f35c4dbec031005fe8bf3d4",
          },
          {
            name: "Coke 2-Liter Bottle",
            price: {
              amount: 349,
              currency: "USD",
            },
            _id: "5f35c4dbec031001f38bf3d5",
          },
        ],
        categories: ["Drinks"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec03109bc58bf3e1",
        applicableTaxKeys: [
          "2T3SOH5TRFWQTR5FBPH233P4",
          "N4ACVVQXWUBXLN4MEE52TQEV",
        ],
        imagePaths: [
          "https://square-catalog-sandbox.s3.amazonaws.com/files/6e113f57887816b1b40dcf1035ae255244afa7b5/original.jpeg",
        ],
      },
      {
        name: "Coca Cola Zero Sugar",
        description:
          "Real Coca-Cola® Taste! Now you can cut back on sugar without sacrificing the great Coca-Cola taste you know and love. Coca-Cola Zero Sugar offers you real Coca-Cola taste and uplifting refreshment without any sugar.",
        variations: [
          {
            name: "Coca Cola Zero Sugar 20Oz Bottle",
            price: {
              amount: 229,
              currency: "USD",
            },
            _id: "5f35c4dbec031041848bf3d6",
          },
          {
            name: "Coca Cola Zero Sugar 2-Liter Bottle",
            price: {
              amount: 349,
              currency: "USD",
            },
            _id: "5f35c4dbec0310b0018bf3d7",
          },
        ],
        categories: ["Drinks"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec0310794e8bf3e2",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
      },
      {
        name: "Diet Coke",
        description:
          "Beautifully balanced adult cola taste in a no calorie beverage.",
        variations: [
          {
            name: "Diet Coke 20Oz Bottle",
            price: {
              amount: 229,
              currency: "USD",
            },
            _id: "5f35c4dbec03102b8b8bf3d8",
          },
          {
            name: "Diet Coke 2-Liter Bottle",
            price: {
              amount: 349,
              currency: "USD",
            },
            _id: "5f35c4dbec0310e5fb8bf3d9",
          },
        ],
        categories: ["Drinks"],
        modifier: [],
        status: "IN_STOCK",
        _id: "5f35c4dbec03105f018bf3e3",
        applicableTaxKeys: [
          "N4ACVVQXWUBXLN4MEE52TQEV",
          "2T3SOH5TRFWQTR5FBPH233P4",
        ],
      },
      {
        name: "Build your own Pizza",
        description: "Made to order",
        variations: [
          {
            name: "Build your own Pizza Small",
            price: {
              amount: 1123,
              currency: "USD",
            },
            _id: '5f35c4dbec0310030d8bf3c9',
          },
          {
            name: 'Build your own Pizza Medium',
            price: {
              amount: 1323,
              currency: 'USD',
            },
            _id: '5f35c4dbec031072068bf3ca',
          },
          {
            name: 'Build your own Pizza Large',
            price: {
              amount: 1523,
              currency: 'USD',
            },
            _id: '5f35c4dbec03105d1c8bf3cb',
          },
          {
            name: 'Build your own Pizza X-Large',
            price: {
              amount: 1723,
              currency: 'USD',
            },
            _id: '5f35c4dbec0310fbbf8bf3cc',
          },
        ],
        categories: ['Build your own'],
        modifier: [
          {
            name: 'Crust',
            options: [
              {
                name: 'Hand Tossed',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
              {
                name: 'Brooklyn style',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
            ],
            minimum: 1,
            maximum: 1,
          },
          {
            name: 'Size',
            options: [
              {
                name: 'Small',
                price: {
                  amount: 1099,
                  currency: 'USD',
                },
              },
              {
                name: 'Medium',
                price: {
                  amount: 1699,
                  currency: 'USD',
                },
              },
              {
                name: 'Large',
                price: {
                  amount: 2099,
                  currency: 'USD',
                },
              },
              {
                name: 'X-Large',
                price: {
                  amount: 2399,
                  currency: 'USD',
                },
              },
            ],
            minimum: 1,
            maximum: 1,
          },
          {
            name: 'Cheese',
            options: [
              {
                name: 'None',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
              {
                name: 'Thin',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
              {
                name: 'Normal',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
              {
                name: 'Extra',
                price: {
                  amount: 300,
                  currency: 'USD',
                },
              },
            ],
            minimum: 0,
            maximum: 999,
          },
          {
            name: 'Cheese portion',
            options: [
              {
                name: 'Left',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
              {
                name: 'Right',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
              {
                name: 'All',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
            ],
            minimum: 0,
            maximum: 999,
          },
          {
            name: 'Sauce',
            options: [
              {
                name: 'Tomato Sauce',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
              {
                name: 'Marinara Sauce',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
              {
                name: 'BBQ Sauce',
                price: {
                  amount: 300,
                  currency: 'USD',
                },
              },
            ],
            minimum: 0,
            maximum: 999,
          },
          {
            name: 'Toppings',
            options: [
              {
                name: 'Pineapple',
                price: {
                  amount: 200,
                  currency: 'USD',
                },
              },
              {
                name: 'Garlic',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
              {
                name: 'Olives',
                price: {
                  amount: 300,
                  currency: 'USD',
                },
              },
            ],
            minimum: 0,
            maximum: 999,
          },
        ],
        status: 'IN_STOCK',
        _id: '5f35c4dbec031072dd8bf3e4',
        applicableTaxKeys: [
          '2T3SOH5TRFWQTR5FBPH233P4',
          'N4ACVVQXWUBXLN4MEE52TQEV',
        ],
        imagePaths: [
          'https://square-catalog-sandbox.s3.amazonaws.com/files/cceff4302cc0c8ecfe231584a48e0c051d1e8542/original.jpeg',
        ],
      },
    ],
  },
  description: 'Menu based on Haldiram India restaurant',
  tag: [
    {
      _id: '5f3577a7405bae54c93648a8',
      name: 'Burgers',
      type: 'CUISINE',
      status: 'ACTIVE',
      iconImagePath: '/img/tags/burgers.png',
    },
  ],
  logoImagePath: '/img/starbucks.svg',
  bannerImagePath: '/img/starbucks.svg',
  expenseLevel: 2,
  reviews: 20,
  rating: 4.5,
  pointOfSaleInfo: {
    type: 'SQUARE',
    pointOfSaleAuthInfoId: '5f3577a3405bae54c6523715',
    squareInfo: {
      locationId: 'GPQDQYYHBQ0G3',
    },
  },
  businessHours: {},
};

export const recentSearches = [
  'Vegetarian Food',
  'Pizza',
  'Hamburger',
  'Cheeseburger',
  'Vegetarian Salad',
  'Keto Cake',
  'Vanila ice cream',
  'Pizza with ham',
];

export const menu = {
  _id: "5f35c4dbec0310c59e8bf3e5",
  name: "dh",
  menuItems: [
    {
      name: "Parmesan Bread Twists",
      description:
        "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with garlic and Parmesan cheese seasoning, and sprinkled with more Parmesan. Served with a side of marinara sauce for dipping.",
      variations: [
        {
          name: "Parmesan Bread Twists",
          price: {
            amount: 649,
            currency: "USD",
          },
          _id: "5f35c4dbec031029738bf3cd",
        },
      ],
      categories: ["Bread"],
      modifier: [],
      status: "IN_STOCK",
      _id: "5f35c4dbec0310b4ce8bf3da",
      applicableTaxKeys: [
        "2T3SOH5TRFWQTR5FBPH233P4",
        "N4ACVVQXWUBXLN4MEE52TQEV",
      ],
      imagePaths: [
        "https://square-catalog-sandbox.s3.amazonaws.com/files/e076674e75b27509a2fdc27ef68bc8b91e2fa0c2/original.jpeg",
      ],
    },
    {
      name: "Garlic Bread Twists",
      description:
        "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with buttery garlic and Parmesan cheese seasoning. Served with a side of marinara sauce for dipping.",
      variations: [
        {
          name: "Garlic Bread Twists",
          price: {
            amount: 649,
            currency: "USD",
          },
          _id: "5f35c4dbec0310816b8bf3ce",
        },
      ],
      categories: ["Bread"],
      modifier: [],
      status: "IN_STOCK",
      _id: "5f35c4dbec0310375f8bf3db",
      applicableTaxKeys: [
        "N4ACVVQXWUBXLN4MEE52TQEV",
        "2T3SOH5TRFWQTR5FBPH233P4",
      ],
      imagePaths: [
        "https://square-catalog-sandbox.s3.amazonaws.com/files/960d3c22a68842844ef41f934203a3b8d08b29ce/original.jpeg",
      ],
    },
    {
      name: "Stuffed Cheesy Bread",
      description:
        "Our oven-baked breadsticks are generously stuffed and covered with a blend of 100% real mozzarella and cheddar cheeses then seasoned with a touch of garlic. Add marinara or your favorite dipping cup for an additional charge.",
      variations: [
        {
          name: "Stuffed Cheesy Bread",
          price: {
            amount: 649,
            currency: "USD",
          },
          _id: "5f35c4dbec0310245a8bf3cf",
        },
      ],
      categories: ["Bread"],
      modifier: [],
      status: "IN_STOCK",
      _id: "5f35c4dbec03103fae8bf3dc",
      applicableTaxKeys: [
        "2T3SOH5TRFWQTR5FBPH233P4",
        "N4ACVVQXWUBXLN4MEE52TQEV",
      ],
      imagePaths: [
        "https://square-catalog-sandbox.s3.amazonaws.com/files/81d830e89951d7586a948e0a8824ffd0312d6200/original.jpeg",
      ],
    },
    {
      name: "Stuffed Cheesy Bread with Spinach & Feta",
      description:
        "Our oven-baked breadsticks are stuffed with cheese, fresh spinach and Feta cheese - covered in a blend of cheese made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.",
      variations: [
        {
          name: "Stuffed Cheesy Bread with Spinach & Feta",
          price: {
            amount: 649,
            currency: "USD",
          },
          _id: "5f35c4dbec031064468bf3d0",
        },
      ],
      categories: ["Bread"],
      modifier: [],
      status: "IN_STOCK",
      _id: "5f35c4dbec03102d6d8bf3dd",
      applicableTaxKeys: [
        "N4ACVVQXWUBXLN4MEE52TQEV",
        "2T3SOH5TRFWQTR5FBPH233P4",
      ],
      imagePaths: [
        "https://square-catalog-sandbox.s3.amazonaws.com/files/789cc77d8c7b5a53bbf76a711628adaa8708311f/original.jpeg",
      ],
    },
    {
      name: "Parmesan Bread Bites",
      description:
        "Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with garlic and Parmesan. Available in 16-piece or 32-piece orders. Add marinara or your favorite dipping cup for an additional charge.",
      variations: [
        {
          name: "Parmesan Bread Bites",
          price: {
            amount: 649,
            currency: "USD",
          },
          _id: "5f35c4dbec0310c3fc8bf3d1",
        },
      ],
      categories: ["Bread"],
      modifier: [],
      status: "IN_STOCK",
      _id: "5f35c4dbec0310c5d58bf3de",
      applicableTaxKeys: [
        "N4ACVVQXWUBXLN4MEE52TQEV",
        "2T3SOH5TRFWQTR5FBPH233P4",
      ],
      imagePaths: [
        "https://square-catalog-sandbox.s3.amazonaws.com/files/e076674e75b27509a2fdc27ef68bc8b91e2fa0c2/original.jpeg",
      ],
    },
    {
      name: "Cinnamon Bread Twists",
      description:
        "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with a perfect blend of cinnamon and sugar, and served with a side of sweet icing for dipping or drizzling.",
      variations: [
        {
          name: "Cinnamon Bread Twists",
          price: {
            amount: 649,
            currency: "USD",
          },
          _id: "5f35c4dbec03100cbc8bf3d2",
        },
      ],
      categories: ["Bread"],
      modifier: [],
      status: "IN_STOCK",
      _id: "5f35c4dbec0310e1168bf3df",
      applicableTaxKeys: [
        "N4ACVVQXWUBXLN4MEE52TQEV",
        "2T3SOH5TRFWQTR5FBPH233P4",
      ],
      imagePaths: [
        "https://square-catalog-sandbox.s3.amazonaws.com/files/0f361d3dc6fb65968b8dd3aa31a1dfe8d68a2a56/original.jpeg",
      ],
    },
    {
      name: "Stuffed Cheesy Bread with Bacon & Jalapeno",
      description:
        "Our oven-baked breadsticks are stuffed with cheese, smoked bacon & jalapeno peppers - covered in a blend of cheeses; made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.",
      variations: [
        {
          name: "Stuffed Cheesy Bread with Bacon & Jalapeno",
          price: {
            amount: 649,
            currency: "USD",
          },
          _id: "5f35c4dbec031086378bf3d3",
        },
      ],
      categories: ["Bread"],
      modifier: [],
      status: "IN_STOCK",
      _id: "5f35c4dbec031080388bf3e0",
      applicableTaxKeys: [
        "2T3SOH5TRFWQTR5FBPH233P4",
        "N4ACVVQXWUBXLN4MEE52TQEV",
      ],
      imagePaths: [
        "https://square-catalog-sandbox.s3.amazonaws.com/files/3ea47734d693e3b89fd3f5b8ed5b63c95c5cc60b/original.jpeg",
      ],
    },
    {
      name: "Coke",
      description:
        "The authentic cola sensation that is a refreshing part of sharing life's enjoyable moments.",
      variations: [
        {
          name: "Coke 20Oz Bottle",
          price: {
            amount: 229,
            currency: "USD",
          },
          _id: "5f35c4dbec031005fe8bf3d4",
        },
        {
          name: "Coke 2-Liter Bottle",
          price: {
            amount: 349,
            currency: "USD",
          },
          _id: "5f35c4dbec031001f38bf3d5",
        },
      ],
      categories: ["Drinks"],
      modifier: [],
      status: "IN_STOCK",
      _id: "5f35c4dbec03109bc58bf3e1",
      applicableTaxKeys: [
        "2T3SOH5TRFWQTR5FBPH233P4",
        "N4ACVVQXWUBXLN4MEE52TQEV",
      ],
      imagePaths: [
        "https://square-catalog-sandbox.s3.amazonaws.com/files/6e113f57887816b1b40dcf1035ae255244afa7b5/original.jpeg",
      ],
    },
    {
      name: "Coca Cola Zero Sugar",
      description:
        "Real Coca-Cola® Taste! Now you can cut back on sugar without sacrificing the great Coca-Cola taste you know and love. Coca-Cola Zero Sugar offers you real Coca-Cola taste and uplifting refreshment without any sugar.",
      variations: [
        {
          name: "Coca Cola Zero Sugar 20Oz Bottle",
          price: {
            amount: 229,
            currency: "USD",
          },
          _id: "5f35c4dbec031041848bf3d6",
        },
        {
          name: "Coca Cola Zero Sugar 2-Liter Bottle",
          price: {
            amount: 349,
            currency: "USD",
          },
          _id: "5f35c4dbec0310b0018bf3d7",
        },
      ],
      categories: ["Drinks"],
      modifier: [],
      status: "IN_STOCK",
      _id: "5f35c4dbec0310794e8bf3e2",
      applicableTaxKeys: [
        "N4ACVVQXWUBXLN4MEE52TQEV",
        "2T3SOH5TRFWQTR5FBPH233P4",
      ],
    },
    {
      name: "Diet Coke",
      description:
        "Beautifully balanced adult cola taste in a no calorie beverage.",
      variations: [
        {
          name: "Diet Coke 20Oz Bottle",
          price: {
            amount: 229,
            currency: "USD",
          },
          _id: "5f35c4dbec03102b8b8bf3d8",
        },
        {
          name: "Diet Coke 2-Liter Bottle",
          price: {
            amount: 349,
            currency: "USD",
          },
          _id: "5f35c4dbec0310e5fb8bf3d9",
        },
      ],
      categories: ["Drinks"],
      modifier: [],
      status: "IN_STOCK",
      _id: "5f35c4dbec03105f018bf3e3",
      applicableTaxKeys: [
        "N4ACVVQXWUBXLN4MEE52TQEV",
        "2T3SOH5TRFWQTR5FBPH233P4",
      ],
    },
    {
      name: "Build your own Pizza",
      description: "Made to order",
      variations: [
        {
          name: "Build your own Pizza Small",
          price: {
            amount: 1123,
            currency: "USD",
          },
          _id: '5f35c4dbec0310030d8bf3c9',
        },
        {
          name: 'Build your own Pizza Medium',
          price: {
            amount: 1323,
            currency: 'USD',
          },
          _id: '5f35c4dbec031072068bf3ca',
        },
        {
          name: 'Build your own Pizza Large',
          price: {
            amount: 1523,
            currency: 'USD',
          },
          _id: '5f35c4dbec03105d1c8bf3cb',
        },
        {
          name: 'Build your own Pizza X-Large',
          price: {
            amount: 1723,
            currency: 'USD',
          },
          _id: '5f35c4dbec0310fbbf8bf3cc',
        },
      ],
      categories: ['Build your own'],
      modifier: [
        {
          name: 'Crust',
          options: [
            {
              name: 'Hand Tossed',
              price: {
                amount: 100,
                currency: 'USD',
              },
            },
            {
              name: 'Brooklyn style',
              price: {
                amount: 200,
                currency: 'USD',
              },
            },
          ],
          minimum: 1,
          maximum: 1,
        },
        {
          name: 'Size',
          options: [
            {
              name: 'Small',
              price: {
                amount: 1099,
                currency: 'USD',
              },
            },
            {
              name: 'Medium',
              price: {
                amount: 1699,
                currency: 'USD',
              },
            },
            {
              name: 'Large',
              price: {
                amount: 2099,
                currency: 'USD',
              },
            },
            {
              name: 'X-Large',
              price: {
                amount: 2399,
                currency: 'USD',
              },
            },
          ],
          minimum: 1,
          maximum: 1,
        },
        {
          name: 'Cheese',
          options: [
            {
              name: 'None',
              price: {
                amount: 0,
                currency: 'USD',
              },
            },
            {
              name: 'Thin',
              price: {
                amount: 100,
                currency: 'USD',
              },
            },
            {
              name: 'Normal',
              price: {
                amount: 200,
                currency: 'USD',
              },
            },
            {
              name: 'Extra',
              price: {
                amount: 300,
                currency: 'USD',
              },
            },
          ],
          minimum: 0,
          maximum: 999,
        },
        {
          name: 'Cheese portion',
          options: [
            {
              name: 'Left',
              price: {
                amount: 0,
                currency: 'USD',
              },
            },
            {
              name: 'Right',
              price: {
                amount: 0,
                currency: 'USD',
              },
            },
            {
              name: 'All',
              price: {
                amount: 0,
                currency: 'USD',
              },
            },
          ],
          minimum: 0,
          maximum: 999,
        },
        {
          name: 'Sauce',
          options: [
            {
              name: 'Tomato Sauce',
              price: {
                amount: 100,
                currency: 'USD',
              },
            },
            {
              name: 'Marinara Sauce',
              price: {
                amount: 200,
                currency: 'USD',
              },
            },
            {
              name: 'BBQ Sauce',
              price: {
                amount: 300,
                currency: 'USD',
              },
            },
          ],
          minimum: 0,
          maximum: 999,
        },
        {
          name: 'Toppings',
          options: [
            {
              name: 'Pineapple',
              price: {
                amount: 200,
                currency: 'USD',
              },
            },
            {
              name: 'Garlic',
              price: {
                amount: 100,
                currency: 'USD',
              },
            },
            {
              name: 'Olives',
              price: {
                amount: 300,
                currency: 'USD',
              },
            },
          ],
          minimum: 0,
          maximum: 999,
        },
      ],
      status: 'IN_STOCK',
      _id: '5f35c4dbec031072dd8bf3e4',
      applicableTaxKeys: [
        '2T3SOH5TRFWQTR5FBPH233P4',
        'N4ACVVQXWUBXLN4MEE52TQEV',
      ],
      imagePaths: [
        'https://square-catalog-sandbox.s3.amazonaws.com/files/cceff4302cc0c8ecfe231584a48e0c051d1e8542/original.jpeg',
      ],
    },
  ],
};

export const home = {
  isLoading: true,
  error: null,
  homeState: {
    stalls: [
      {
        _id: '5fc83e819e7e59b444d7ea83',
        name: 'Crooks, Wolf and Greenholt',
        eventId: '5fc83e819e7e59d367d7ea8d',
        storeId: '5fc83e819e7e598c7cd7ea8a',
        menu: {
          _id: '5fc83e819e7e59670fd7ea84',
          name: 'Stroman - DuBuque',
          menuItems: [
            {
              _id: '5fc83e819e7e590e9bd7ea85',
              name: 'Tasty Concrete Car',
              description:
                'The Football Is Good For Training And Recreational Purposes',
              status: 'OUT_OF_STOCK',
              variations: [
                {
                  price: {
                    amount: 76340,
                    currency: 'CAD',
                  },
                  _id: '5fc83e819e7e59d33bd7ea86',
                  name: 'Random',
                  status: 'IN_STOCK',
                  pointOfSaleInfo: {
                    type: 'SQUARE',
                    squareInfo: {
                      inventoryItemId: 'E3EPNV5VL766B07D2HMX9BQZ',
                    },
                  },
                },
              ],
              categories: ['Appetizer'],
              imagePaths: ['/opt/include/pre_emptive_wyoming_greenland.qxl'],
              applicableTaxKeys: ['f5dpykzkgk', 'msm9waev9p'],
              pointOfSaleInfo: {
                type: 'SQUARE',
                squareInfo: {
                  inventoryItemId: 'JK6HGNZ6Z6ECMPYMGX73O60U',
                },
              },
            },
            {
              _id: '5fc83e819e7e59bff9d7ea87',
              name: 'Refined Frozen Salad',
              description:
                'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
              status: 'OUT_OF_STOCK',
              variations: [
                {
                  price: {
                    amount: 25109,
                    currency: 'USD',
                  },
                  _id: '5fc83e819e7e593bb1d7ea88',
                  name: 'Random',
                  status: 'IN_STOCK',
                  pointOfSaleInfo: {
                    type: 'SQUARE',
                    squareInfo: {
                      inventoryItemId: '5X0UL65RTPBYC4LY87E61KN4',
                    },
                  },
                },
              ],
              categories: ['Appetizer'],
              imagePaths: ['/opt/include/pre_emptive_wyoming_greenland.qxl'],
              applicableTaxKeys: ['f5dpykzkgk', 'msm9waev9p'],
              pointOfSaleInfo: {
                type: 'SQUARE',
                squareInfo: {
                  inventoryItemId: 'ROJLOO4N7N4LYC8XHHDOFN33',
                },
              },
            },
          ],
        },
        description: 'Centralized 5th generation database',
        tag: [],
        logoImagePath: 'http://placeimg.com/640/480',
        bannerImagePath: 'http://placeimg.com/640/480',
        expenseLevel: 1,
        reviews: 997,
        rating: 1.66,
        pointOfSaleInfo: {
          type: 'CLOVER',
          pointOfSaleAuthInfoId: '5fc83e819e7e590632d7ea90',
          cloverInfo: {
            apiAccessKey: 'i7bk5lepylcez1d4ayfzav3x27lxnij7',
          },
          squareInfo: {
            locationId: '33CI6WYVXUXKM',
          },
        },
        businessHours: {
          businessHoursPeriod: [
            {
              dayOfTheWeek: 'WED',
              startTime: '17:03:11',
              endTime: '17:56:24',
            },
            {
              dayOfTheWeek: 'THU',
              startTime: '17:57:56',
              endTime: '17:58:48',
            },
            {
              dayOfTheWeek: 'SAT',
              startTime: '12:30:45',
              endTime: '23:33:57',
            },
            {
              dayOfTheWeek: 'MON',
              startTime: '03:36:12',
              endTime: '14:39:03',
            },
            {
              dayOfTheWeek: 'TUE',
              startTime: '05:38:08',
              endTime: '10:54:51',
            },
          ],
        },
      },
      {
        _id: '5fc83e819e7e590177d7ea95',
        name: 'Schmidt - Bogan',
        eventId: '5fc83e819e7e5989cad7ea9f',
        storeId: '5fc83e819e7e59417fd7ea9c',
        menu: {
          _id: '5fc83e819e7e59841ed7ea96',
          name: 'Tremblay, Wintheiser and Rippin',
          menuItems: [
            {
              _id: '5fc83e819e7e5959d7d7ea97',
              name: 'Tasty Steel Computer',
              description:
                'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
              status: 'OUT_OF_STOCK',
              variations: [
                {
                  price: {
                    amount: 65017,
                    currency: 'CAD',
                  },
                  _id: '5fc83e819e7e59690dd7ea98',
                  name: 'Random',
                  status: 'IN_STOCK',
                  pointOfSaleInfo: {
                    type: 'SQUARE',
                    squareInfo: {
                      inventoryItemId: '0YC0OMKA39Q8OFB7RSNSDYRJ',
                    },
                  },
                },
              ],
              categories: ['Appetizer'],
              imagePaths: ['/opt/include/pre_emptive_wyoming_greenland.qxl'],
              applicableTaxKeys: ['f5dpykzkgk', 'msm9waev9p'],
              pointOfSaleInfo: {
                type: 'SQUARE',
                squareInfo: {
                  inventoryItemId: '23U31NZSEK23RA8JUV212CVS',
                },
              },
            },
            {
              _id: '5fc83e819e7e596b79d7ea99',
              name: 'Handcrafted Concrete Soap',
              description:
                'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
              status: 'HIDE',
              variations: [
                {
                  price: {
                    amount: 92833,
                    currency: 'USD',
                  },
                  _id: '5fc83e819e7e594b5ad7ea9a',
                  name: 'Random',
                  status: 'IN_STOCK',
                  pointOfSaleInfo: {
                    type: 'SQUARE',
                    squareInfo: {
                      inventoryItemId: '75H7144L3TU449XLJGLALQX7',
                    },
                  },
                },
              ],
              categories: ['Appetizer'],
              imagePaths: ['/opt/include/pre_emptive_wyoming_greenland.qxl'],
              applicableTaxKeys: ['f5dpykzkgk', 'msm9waev9p'],
              pointOfSaleInfo: {
                type: 'SQUARE',
                squareInfo: {
                  inventoryItemId: 'JLKQDB17HU9Z8A7XAW4KBF26',
                },
              },
            },
          ],
        },
        description: 'Self-enabling system-worthy functionalities',
        tag: [],
        logoImagePath: 'http://placeimg.com/640/480',
        bannerImagePath: 'http://placeimg.com/640/480',
        expenseLevel: 3,
        reviews: 112,
        rating: 3.89,
        pointOfSaleInfo: {
          type: 'CLOVER',
          pointOfSaleAuthInfoId: '5fc83e819e7e59de8cd7eaa2',
          cloverInfo: {
            apiAccessKey: 'hj97dfzv7rwgm6np05cybx9ins6dmatl',
          },
          squareInfo: {
            locationId: '6XYOFV9AIA2QM',
          },
        },
        businessHours: {
          businessHoursPeriod: [
            {
              dayOfTheWeek: 'SAT',
              startTime: '23:52:58',
              endTime: '06:21:11',
            },
            {
              dayOfTheWeek: 'THU',
              startTime: '14:40:04',
              endTime: '02:01:14',
            },
            {
              dayOfTheWeek: 'SUN',
              startTime: '04:20:14',
              endTime: '04:31:04',
            },
            {
              dayOfTheWeek: 'SUN',
              startTime: '18:33:07',
              endTime: '04:46:52',
            },
            {
              dayOfTheWeek: 'FRI',
              startTime: '10:06:06',
              endTime: '06:00:25',
            },
          ],
        },
      },
      {
        _id: '5fc83e819e7e598ecfd7eaa7',
        name: 'Jaskolski, Grimes and Rempel',
        eventId: '5fc83e819e7e5981cdd7eab1',
        storeId: '5fc83e819e7e597332d7eaae',
        menu: {
          _id: '5fc83e819e7e599defd7eaa8',
          name: 'Moore - Toy',
          menuItems: [
            {
              _id: '5fc83e819e7e590ff0d7eaa9',
              name: 'Sleek Rubber Shoes',
              description:
                'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
              status: 'OUT_OF_STOCK',
              variations: [
                {
                  price: {
                    amount: 46871,
                    currency: 'USD',
                  },
                  _id: '5fc83e819e7e593613d7eaaa',
                  name: 'Random',
                  status: 'IN_STOCK',
                  pointOfSaleInfo: {
                    type: 'SQUARE',
                    squareInfo: {
                      inventoryItemId: 'OSKJ1JC2I98G1A26O9PK25PP',
                    },
                  },
                },
              ],
              categories: ['Appetizer'],
              imagePaths: ['/opt/include/pre_emptive_wyoming_greenland.qxl'],
              applicableTaxKeys: ['f5dpykzkgk', 'msm9waev9p'],
              pointOfSaleInfo: {
                type: 'SQUARE',
                squareInfo: {
                  inventoryItemId: 'LXUGN9SIE6XAKHEEFFBWE0CU',
                },
              },
            },
            {
              _id: '5fc83e819e7e595807d7eaab',
              name: 'Handcrafted Plastic Car',
              description:
                'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
              status: 'IN_STOCK',
              variations: [
                {
                  price: {
                    amount: 71410,
                    currency: 'CAD',
                  },
                  _id: '5fc83e819e7e59aad1d7eaac',
                  name: 'Random',
                  status: 'IN_STOCK',
                  pointOfSaleInfo: {
                    type: 'SQUARE',
                    squareInfo: {
                      inventoryItemId: 'O8ASZUF1P3BU60QUPURODZP7',
                    },
                  },
                },
              ],
              categories: ['Appetizer'],
              imagePaths: ['/opt/include/pre_emptive_wyoming_greenland.qxl'],
              applicableTaxKeys: ['f5dpykzkgk', 'msm9waev9p'],
              pointOfSaleInfo: {
                type: 'SQUARE',
                squareInfo: {
                  inventoryItemId: 'MC6EK2TN7JGX78PFR1BZUA6O',
                },
              },
            },
          ],
        },
        description: 'Assimilated scalable collaboration',
        tag: [],
        logoImagePath: 'http://placeimg.com/640/480',
        bannerImagePath: 'http://placeimg.com/640/480',
        expenseLevel: 1,
        reviews: 708,
        rating: 0.66,
        pointOfSaleInfo: {
          type: 'CLOVER',
          pointOfSaleAuthInfoId: '5fc83e819e7e59635ad7eab4',
          cloverInfo: {
            apiAccessKey: 'v0ii5smcft09rkl2h3w38fkk0t2hxbw7',
          },
          squareInfo: {
            locationId: 'B17FDZM071519',
          },
        },
        businessHours: {
          businessHoursPeriod: [
            {
              dayOfTheWeek: 'TUE',
              startTime: '19:36:04',
              endTime: '10:49:02',
            },
            {
              dayOfTheWeek: 'SAT',
              startTime: '12:02:40',
              endTime: '18:01:18',
            },
            {
              dayOfTheWeek: 'MON',
              startTime: '11:39:37',
              endTime: '18:53:52',
            },
            {
              dayOfTheWeek: 'MON',
              startTime: '02:10:56',
              endTime: '23:03:10',
            },
            {
              dayOfTheWeek: 'FRI',
              startTime: '20:18:54',
              endTime: '21:27:43',
            },
          ],
        },
      },
    ],
    trendingItems: [
      {
        _id: '5fc83e819e7e59cf5fd7eab9',
        name: 'Generic Frozen Table',
        description:
          'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
        status: 'OUT_OF_STOCK',
        variations: [
          {
            price: {
              amount: 94352,
              currency: 'USD',
            },
            _id: '5fc83e819e7e595887d7eaba',
            name: 'Random',
            status: 'IN_STOCK',
            pointOfSaleInfo: {
              type: 'SQUARE',
              squareInfo: {
                inventoryItemId: '1KNTF7AQ8IRWOOVFWLZVZAW0',
              },
            },
          },
        ],
        categories: ['Appetizer'],
        imagePaths: ['/opt/include/pre_emptive_wyoming_greenland.qxl'],
        applicableTaxKeys: ['f5dpykzkgk', 'msm9waev9p'],
        pointOfSaleInfo: {
          type: 'SQUARE',
          squareInfo: {
            inventoryItemId: '2ZEPVLENV9RTNSE3MKW034YN',
          },
        },
      },
      {
        _id: '5fc83e819e7e5922dbd7eabb',
        name: 'Unbranded Plastic Chips',
        description:
          'The Football Is Good For Training And Recreational Purposes',
        status: 'IN_STOCK',
        variations: [
          {
            price: {
              amount: 44843,
              currency: 'USD',
            },
            _id: '5fc83e819e7e5961bcd7eabc',
            name: 'Random',
            status: 'IN_STOCK',
            pointOfSaleInfo: {
              type: 'SQUARE',
              squareInfo: {
                inventoryItemId: '3FQ3P8NG5EJAROTKNIHSP4NN',
              },
            },
          },
        ],
        categories: ['Appetizer'],
        imagePaths: ['/opt/include/pre_emptive_wyoming_greenland.qxl'],
        applicableTaxKeys: ['f5dpykzkgk', 'msm9waev9p'],
        pointOfSaleInfo: {
          type: 'SQUARE',
          squareInfo: {
            inventoryItemId: 'ZULYOJSUHS2S3H1JAP81PZ3F',
          },
        },
      },
      {
        _id: '5fc83e819e7e59e907d7eabd',
        name: 'Sleek Wooden Pizza',
        description:
          'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
        status: 'OUT_OF_STOCK',
        variations: [
          {
            price: {
              amount: 69864,
              currency: 'USD',
            },
            _id: '5fc83e819e7e59250cd7eabe',
            name: 'Random',
            status: 'IN_STOCK',
            pointOfSaleInfo: {
              type: 'SQUARE',
              squareInfo: {
                inventoryItemId: 'YRK3BXYKGJQC1Q6IMZHKHODI',
              },
            },
          },
        ],
        categories: ['Appetizer'],
        imagePaths: ['/opt/include/pre_emptive_wyoming_greenland.qxl'],
        applicableTaxKeys: ['f5dpykzkgk', 'msm9waev9p'],
        pointOfSaleInfo: {
          type: 'SQUARE',
          squareInfo: {
            inventoryItemId: 'YGRZC20U0WP52AQ1YPL8F7D8',
          },
        },
      },
    ],
  },
  loading: false,
};

export const event = {
  _id: '5f3577a7405bae54c65239b2',
  logoImagePath: '/img/themes/bottlerock/bottlerock.png',
  name: 'Bottlerock',
  stalls: [stall, stall2, stall3, stall4],
};

export const invoice = {
  subTotal: {
    amount: 2522,
    currency: 'USD',
  },
  tip: {
    amount: 100,
    currency: 'USD',
  },
  tax: {
    amount: 227,
    currency: 'USD',
  },
  surgeFee: {
    amount: 0,
    currency: 'USD',
  },
  serviceFee: {
    amount: 0,
    currency: 'USD',
  },
  discount: {
    amount: 0,
    currency: 'USD',
  },

  chargedFee: [
    {
      type: 'SKIP_LINE_FEE',
      fee: {
        amount: 0,
        currency: 'USD',
      },
    },
    {
      type: 'SERVICE_FEE',
      fee: {
        amount: 151,
        currency: 'USD',
      },
    },
    {
      type: 'VENDOR_FEE',
      fee: {
        amount: 151,
        currency: 'USD',
      },
    },
  ],
  total: {
    amount: 2900,
    currency: 'USD',
  },
};
export const script =
  '<script>function myFunction(){document.write("Hello World!")}</script>';

export const checkoutstate = {
  invoice: {
    subTotal: {
      amount: 1558,
      currency: 'USD',
    },
    surgeFee: {
      amount: 0,
      currency: 'USD',
    },
    tip: {
      amount: 0,
      currency: 'USD',
    },
    tax: {
      amount: 0,
      currency: 'USD',
    },
    serviceFee: {
      amount: 0,
      currency: 'USD',
    },
    vendorOrderAheadFee: {
      amount: 0,
      currency: 'USD',
    },
    total: {
      amount: 1558,
      currency: 'USD',
    },
  },
};

export const usPhone1 = '+91 82929 35091';
export const usPhone2 = '636-48018';

export const userinfo = {
  phoneNumber: usPhone1,
  orders: [
    {
      _id: '5fac194002f8c657dc1c4698',
      status: 'RECEIVED',
      merchantInfo: {
        storeId: '5f3577a8405bae54c65239b5',
        merchantName: 'demo haldiram',
        stallId: '5f3577a8405bae54c65239b6',
      },
      paymentMethod: 'CARD',
      fulfillmentInfo: {
        type: 'PICKUP',
        customer: {
          name: 'aryan',
          phone: '+918292935091',
        },
      },
      paymentStatus: 'PAID',
      pointOfSaleOrderInfo: {
        type: 'SQUARE',
        squareOrderInfo: {
          squareOrderId: 'zct3f3IOZG3gnwz4AQG3l8ViOc4F',
          status: 'COMPLETED',
          receiptUrl:
            'https://squareupsandbox.com/receipt/preview/1g1lkhVIXsRMiVYn9TlqnBaqaxZZY',
        },
      },
      invoice: {
        subTotal: {
          amount: 2522,
          currency: 'USD',
        },
        tip: {
          amount: 0,
          currency: 'USD',
        },
        tax: {
          amount: 227,
          currency: 'USD',
        },
        chargedFee: [
          {
            type: 'SKIP_LINE_FEE',
            fee: {
              amount: 0,
              currency: 'USD',
            },
          },
          {
            type: 'SERVICE_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
          {
            type: 'VENDOR_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
        ],
        total: {
          amount: 2900,
          currency: 'USD',
        },
      },
      lineItems: [
        {
          itemId: '5f9c3121e3c8569b33c4c0d2',
          name: 'Build your own Pizza',
          totalMoney: {
            amount: 2522,
            currency: 'USD',
          },
          quantity: 1,
          selectedVariation: {
            _id: '5f9c3121e3c856b101c4c0a9',
            name: 'Build your own Pizza Medium',
            price: {
              amount: 1323,
              currency: 'USD',
            },
          },
          modifiers: [
            {
              _id: '5fac194102f8c6d3151c4699',
              name: 'Cheese',
              chosenValue: [
                {
                  _id: '5fac194102f8c62bea1c469a',
                  name: 'None',
                  price: {
                    amount: 0,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fac194102f8c648591c469b',
              name: 'Cheese portion',
              chosenValue: [
                {
                  _id: '5fac194102f8c684f61c469c',
                  name: 'Left',
                  price: {
                    amount: 0,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fac194102f8c6e75f1c469d',
              name: 'Size',
              chosenValue: [
                {
                  _id: '5fac194102f8c6e5ae1c469e',
                  name: 'Small',
                  price: {
                    amount: 1099,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fac194102f8c6566a1c469f',
              name: 'Crust',
              chosenValue: [
                {
                  _id: '5fac194102f8c6a82f1c46a0',
                  name: 'Hand Tossed',
                  price: {
                    amount: 100,
                    currency: 'USD',
                  },
                },
              ],
            },
          ],
        },
      ],
      updates: [
        {
          timestamp: '2020-11-11T17:02:57.411Z',
          type: 'STATUS_CHANGE',
          newStatus: 'RECEIVED',
        },
      ],
      pickupTime: '2020-11-11T17:12:57.411Z',
    },
    {
      _id: '5fac194002f8c657dc1c4699',
      status: 'RECEIVED',
      merchantInfo: {
        storeId: '5f3577a8405bae54c65239b5',
        merchantName: 'demo haldiram',
        stallId: '5f3577a8405bae54c65239b6',
      },
      paymentMethod: 'CARD',
      fulfillmentInfo: {
        type: 'PICKUP',
        customer: {
          name: 'aryan',
          phone: '+918292935091',
        },
      },
      paymentStatus: 'PAID',
      pointOfSaleOrderInfo: {
        type: 'SQUARE',
        squareOrderInfo: {
          squareOrderId: 'zct3f3IOZG3gnwz4AQG3l8ViOc4F',
          status: 'COMPLETED',
          receiptUrl:
            'https://squareupsandbox.com/receipt/preview/1g1lkhVIXsRMiVYn9TlqnBaqaxZZY',
        },
      },
      invoice: {
        subTotal: {
          amount: 2522,
          currency: 'USD',
        },
        tip: {
          amount: 0,
          currency: 'USD',
        },
        tax: {
          amount: 227,
          currency: 'USD',
        },
        chargedFee: [
          {
            type: 'SKIP_LINE_FEE',
            fee: {
              amount: 0,
              currency: 'USD',
            },
          },
          {
            type: 'SERVICE_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
          {
            type: 'VENDOR_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
        ],
        total: {
          amount: 2900,
          currency: 'USD',
        },
      },
      lineItems: [
        {
          itemId: '5f9c3121e3c8569b33c4c0d2',
          name: 'Build your own Pizza',
          totalMoney: {
            amount: 2522,
            currency: 'USD',
          },
          quantity: 1,
          selectedVariation: {
            _id: '5f9c3121e3c856b101c4c0a9',
            name: 'Build your own Pizza Medium',
            price: {
              amount: 1323,
              currency: 'USD',
            },
          },
          modifiers: [
            {
              _id: '5fac194102f8c6d3151c4699',
              name: 'Cheese',
              chosenValue: [
                {
                  _id: '5fac194102f8c62bea1c469a',
                  name: 'None',
                  price: {
                    amount: 0,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fac194102f8c648591c469b',
              name: 'Cheese portion',
              chosenValue: [
                {
                  _id: '5fac194102f8c684f61c469c',
                  name: 'Left',
                  price: {
                    amount: 0,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fac194102f8c6e75f1c469d',
              name: 'Size',
              chosenValue: [
                {
                  _id: '5fac194102f8c6e5ae1c469e',
                  name: 'Small',
                  price: {
                    amount: 1099,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fac194102f8c6566a1c469f',
              name: 'Crust',
              chosenValue: [
                {
                  _id: '5fac194102f8c6a82f1c46a0',
                  name: 'Hand Tossed',
                  price: {
                    amount: 100,
                    currency: 'USD',
                  },
                },
              ],
            },
          ],
        },
      ],
      updates: [
        {
          timestamp: '2020-11-11T17:02:57.411Z',
          type: 'STATUS_CHANGE',
          newStatus: 'RECEIVED',
        },
      ],
      pickupTime: '2020-11-11T17:12:57.411Z',
    },
    {
      _id: '5fac194002f8c657dc1c4697',
      status: 'RECEIVED',
      merchantInfo: {
        storeId: '5f3577a8405bae54c65239b5',
        merchantName: 'demo haldiram',
        stallId: '5f3577a8405bae54c65239b6',
      },
      paymentMethod: 'CARD',
      fulfillmentInfo: {
        type: 'PICKUP',
        customer: {
          name: 'aryan',
          phone: '+918292935091',
        },
      },
      paymentStatus: 'PAID',
      pointOfSaleOrderInfo: {
        type: 'SQUARE',
        squareOrderInfo: {
          squareOrderId: 'zct3f3IOZG3gnwz4AQG3l8ViOc4F',
          status: 'COMPLETED',
          receiptUrl:
            'https://squareupsandbox.com/receipt/preview/1g1lkhVIXsRMiVYn9TlqnBaqaxZZY',
        },
      },
      invoice: {
        subTotal: {
          amount: 2522,
          currency: 'USD',
        },
        tip: {
          amount: 0,
          currency: 'USD',
        },
        tax: {
          amount: 227,
          currency: 'USD',
        },
        chargedFee: [
          {
            type: 'SKIP_LINE_FEE',
            fee: {
              amount: 0,
              currency: 'USD',
            },
          },
          {
            type: 'SERVICE_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
          {
            type: 'VENDOR_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
        ],
        total: {
          amount: 2900,
          currency: 'USD',
        },
      },
      lineItems: [
        {
          itemId: '5f9c3121e3c8569b33c4c0d2',
          name: 'Build your own Pizza',
          totalMoney: {
            amount: 2522,
            currency: 'USD',
          },
          quantity: 1,
          selectedVariation: {
            _id: '5f9c3121e3c856b101c4c0a9',
            name: 'Build your own Pizza Medium',
            price: {
              amount: 1323,
              currency: 'USD',
            },
          },
          modifiers: [
            {
              _id: '5fac194102f8c6d3151c4699',
              name: 'Cheese',
              chosenValue: [
                {
                  _id: '5fac194102f8c62bea1c469a',
                  name: 'None',
                  price: {
                    amount: 0,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fac194102f8c648591c469b',
              name: 'Cheese portion',
              chosenValue: [
                {
                  _id: '5fac194102f8c684f61c469c',
                  name: 'Left',
                  price: {
                    amount: 0,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fac194102f8c6e75f1c469d',
              name: 'Size',
              chosenValue: [
                {
                  _id: '5fac194102f8c6e5ae1c469e',
                  name: 'Small',
                  price: {
                    amount: 1099,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fac194102f8c6566a1c469f',
              name: 'Crust',
              chosenValue: [
                {
                  _id: '5fac194102f8c6a82f1c46a0',
                  name: 'Hand Tossed',
                  price: {
                    amount: 100,
                    currency: 'USD',
                  },
                },
              ],
            },
          ],
        },
      ],
      updates: [
        {
          timestamp: '2020-11-11T17:02:57.411Z',
          type: 'STATUS_CHANGE',
          newStatus: 'RECEIVED',
        },
      ],
      pickupTime: '2020-11-11T17:12:57.411Z',
    },
    {
      _id: '5fac194002f8c657dc1c4696',
      status: 'RECEIVED',
      merchantInfo: {
        storeId: '5f3577a8405bae54c65239b5',
        merchantName: 'demo haldiram',
        stallId: '5f3577a8405bae54c65239b6',
      },
      paymentMethod: 'CARD',
      fulfillmentInfo: {
        type: 'PICKUP',
        customer: {
          name: 'aryan',
          phone: '+918292935091',
        },
      },
      paymentStatus: 'PAID',
      pointOfSaleOrderInfo: {
        type: 'SQUARE',
        squareOrderInfo: {
          squareOrderId: 'zct3f3IOZG3gnwz4AQG3l8ViOc4F',
          status: 'COMPLETED',
          receiptUrl:
            'https://squareupsandbox.com/receipt/preview/1g1lkhVIXsRMiVYn9TlqnBaqaxZZY',
        },
      },
      invoice: {
        subTotal: {
          amount: 2522,
          currency: 'USD',
        },
        tip: {
          amount: 0,
          currency: 'USD',
        },
        tax: {
          amount: 227,
          currency: 'USD',
        },
        chargedFee: [
          {
            type: 'SKIP_LINE_FEE',
            fee: {
              amount: 0,
              currency: 'USD',
            },
          },
          {
            type: 'SERVICE_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
          {
            type: 'VENDOR_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
        ],
        total: {
          amount: 2900,
          currency: 'USD',
        },
      },
      lineItems: [
        {
          itemId: '5f9c3121e3c8569b33c4c0d2',
          name: 'Build your own Pizza',
          totalMoney: {
            amount: 2522,
            currency: 'USD',
          },
          quantity: 1,
          selectedVariation: {
            _id: '5f9c3121e3c856b101c4c0a9',
            name: 'Build your own Pizza Medium',
            price: {
              amount: 1323,
              currency: 'USD',
            },
          },
          modifiers: [
            {
              _id: '5fac194102f8c6d3151c4699',
              name: 'Cheese',
              chosenValue: [
                {
                  _id: '5fac194102f8c62bea1c469a',
                  name: 'None',
                  price: {
                    amount: 0,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fac194102f8c648591c469b',
              name: 'Cheese portion',
              chosenValue: [
                {
                  _id: '5fac194102f8c684f61c469c',
                  name: 'Left',
                  price: {
                    amount: 0,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fac194102f8c6e75f1c469d',
              name: 'Size',
              chosenValue: [
                {
                  _id: '5fac194102f8c6e5ae1c469e',
                  name: 'Small',
                  price: {
                    amount: 1099,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fac194102f8c6566a1c469f',
              name: 'Crust',
              chosenValue: [
                {
                  _id: '5fac194102f8c6a82f1c46a0',
                  name: 'Hand Tossed',
                  price: {
                    amount: 100,
                    currency: 'USD',
                  },
                },
              ],
            },
          ],
        },
      ],
      updates: [
        {
          timestamp: '2020-11-11T17:02:57.411Z',
          type: 'STATUS_CHANGE',
          newStatus: 'RECEIVED',
        },
      ],
      pickupTime: '2020-11-11T17:12:57.411Z',
    },
    {
      _id: '5fed637aba2e81be85200281',
      creationTimestamp: 1609393018000,
      status: 'RECEIVED',
      merchantInfo: {
        storeId: '5f3577a8405bae54c65239b5',
        merchantName: 'demo haldiram',
        stallId: '5f3577a8405bae54c65239b6',
      },
      lineItems: [
        {
          itemId: '5f9c3121e3c8569b33c4c0d2',
          name: 'Build your own Pizza',
          totalMoney: {
            amount: 2522,
            currency: 'USD',
          },
          quantity: 1,
          selectedVariation: {
            _id: '5f9c3121e3c856b101c4c0a9',
            name: 'Build your own Pizza Medium',
            price: {
              amount: 1323,
              currency: 'USD',
            },
          },
          modifiers: [
            {
              _id: '5fed637bba2e8125e8200282',
              name: 'Crust',
              chosenValue: [
                {
                  _id: '5fed637bba2e813863200283',
                  name: 'Hand Tossed',
                  price: {
                    amount: 100,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fed637bba2e813a70200284',
              name: 'Size',
              chosenValue: [
                {
                  _id: '5fed637bba2e811051200285',
                  name: 'Small',
                  price: {
                    amount: 1099,
                    currency: 'USD',
                  },
                },
              ],
            },
          ],
        },
      ],
      invoice: {
        subTotal: {
          amount: 2522,
          currency: 'USD',
        },
        tip: {
          amount: 0,
          currency: 'USD',
        },
        tax: {
          amount: 227,
          currency: 'USD',
        },
        chargedFee: [
          {
            type: 'SKIP_LINE_FEE',
            fee: {
              amount: 0,
              currency: 'USD',
            },
          },
          {
            type: 'SERVICE_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
          {
            type: 'VENDOR_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
        ],
        total: {
          amount: 2900,
          currency: 'USD',
        },
      },
      fulfillmentInfo: {
        type: 'PICKUP',
        customer: {
          name: 'aryan',
          phone: '+919601978892',
          buyerId: '5fc07280567ed2e4b41bba20',
        },
      },
      pickupTime: '2020-12-31T05:46:59.537Z',
      receiptUrl:
        'https://squareupsandbox.com/receipt/preview/RQKh1tRkG1tmcQVtE9XcaKJkiSaZY',
      feedback: {
        timestamp: '2021-01-03T08:54:09.767Z',
        rating: 4,
        review: 'he',
      },
      paymentMethod: 'CARD',
      updates: [
        {
          timestamp: 1609393019537,
          type: 'STATUS_CHANGE',
          newStatus: 'RECEIVED',
        },
      ],
    },
    {
      _id: '5fed17fbba2e81b1c920027c',
      creationTimestamp: 1609373691000,
      status: 'RECEIVED',
      merchantInfo: {
        storeId: '5f3577a8405bae54c65239b5',
        merchantName: 'demo haldiram',
        stallId: '5f3577a8405bae54c65239b6',
      },
      lineItems: [
        {
          itemId: '5f9c3121e3c8569b33c4c0d2',
          name: 'Build your own Pizza',
          totalMoney: {
            amount: 2522,
            currency: 'USD',
          },
          quantity: 1,
          selectedVariation: {
            _id: '5f9c3121e3c856b101c4c0a9',
            name: 'Build your own Pizza Medium',
            price: {
              amount: 1323,
              currency: 'USD',
            },
          },
          modifiers: [
            {
              _id: '5fed17fbba2e81270320027d',
              name: 'Crust',
              chosenValue: [
                {
                  _id: '5fed17fbba2e8155ce20027e',
                  name: 'Hand Tossed',
                  price: {
                    amount: 100,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fed17fbba2e81cc0620027f',
              name: 'Size',
              chosenValue: [
                {
                  _id: '5fed17fbba2e815f08200280',
                  name: 'Small',
                  price: {
                    amount: 1099,
                    currency: 'USD',
                  },
                },
              ],
            },
          ],
        },
      ],
      invoice: {
        subTotal: {
          amount: 2522,
          currency: 'USD',
        },
        tip: {
          amount: 0,
          currency: 'USD',
        },
        tax: {
          amount: 227,
          currency: 'USD',
        },
        chargedFee: [
          {
            type: 'SKIP_LINE_FEE',
            fee: {
              amount: 0,
              currency: 'USD',
            },
          },
          {
            type: 'SERVICE_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
          {
            type: 'VENDOR_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
        ],
        total: {
          amount: 2900,
          currency: 'USD',
        },
      },
      fulfillmentInfo: {
        type: 'PICKUP',
        customer: {
          name: 'aryan',
          phone: '+919601978892',
          buyerId: '5fc07280567ed2e4b41bba20',
        },
      },
      pickupTime: '2020-12-31T00:30:51.885Z',
      receiptUrl:
        'https://squareupsandbox.com/receipt/preview/xo2h77e5wbJZhu5iEeRgEVb8MFXZY',
      feedback: {
        timestamp: '2020-12-31T00:15:23.361Z',
        rating: 4,
        review: 'hey',
      },
      paymentMethod: 'CARD',
      updates: [
        {
          timestamp: 1609373691885,
          type: 'STATUS_CHANGE',
          newStatus: 'RECEIVED',
        },
      ],
    },
    {
      _id: '5fec62fb88e1e65b28668413',
      creationTimestamp: 1609327355000,
      status: 'RECEIVED',
      merchantInfo: {
        storeId: '5f3577a8405bae54c65239b5',
        merchantName: 'demo haldiram',
        stallId: '5f3577a8405bae54c65239b6',
      },
      lineItems: [
        {
          itemId: '5f9c3121e3c8569b33c4c0d2',
          name: 'Build your own Pizza',
          totalMoney: {
            amount: 2522,
            currency: 'USD',
          },
          quantity: 1,
          selectedVariation: {
            _id: '5f9c3121e3c856b101c4c0a9',
            name: 'Build your own Pizza Medium',
            price: {
              amount: 1323,
              currency: 'USD',
            },
          },
          modifiers: [
            {
              _id: '5fec62fc88e1e6ac13668414',
              name: 'Crust',
              chosenValue: [
                {
                  _id: '5fec62fc88e1e66868668415',
                  name: 'Hand Tossed',
                  price: {
                    amount: 100,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fec62fc88e1e684b2668416',
              name: 'Size',
              chosenValue: [
                {
                  _id: '5fec62fc88e1e6e6b3668417',
                  name: 'Small',
                  price: {
                    amount: 1099,
                    currency: 'USD',
                  },
                },
              ],
            },
          ],
        },
      ],
      invoice: {
        subTotal: {
          amount: 2522,
          currency: 'USD',
        },
        tip: {
          amount: 0,
          currency: 'USD',
        },
        tax: {
          amount: 227,
          currency: 'USD',
        },
        chargedFee: [
          {
            type: 'SKIP_LINE_FEE',
            fee: {
              amount: 0,
              currency: 'USD',
            },
          },
          {
            type: 'SERVICE_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
          {
            type: 'VENDOR_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
        ],
        total: {
          amount: 2900,
          currency: 'USD',
        },
      },
      fulfillmentInfo: {
        type: 'PICKUP',
        customer: {
          name: 'aryan',
          phone: '+919601978892',
          buyerId: '5fc07280567ed2e4b41bba20',
        },
      },
      pickupTime: '2020-12-30T11:35:36.056Z',
      receiptUrl:
        'https://squareupsandbox.com/receipt/preview/ROniWtnfqTwTTkFHeVqd50PBqbZZY',
      feedback: {
        timestamp: '2020-12-30T11:22:54.960Z',
        rating: 4,
        review: 'here',
      },
      paymentMethod: 'CARD',
      updates: [
        {
          timestamp: 1609327356056,
          type: 'STATUS_CHANGE',
          newStatus: 'RECEIVED',
        },
      ],
    },
    {
      _id: '5fec61f488e1e6495f66840e',
      creationTimestamp: 1609327092000,
      status: 'RECEIVED',
      merchantInfo: {
        storeId: '5f3577a8405bae54c65239b5',
        merchantName: 'demo haldiram',
        stallId: '5f3577a8405bae54c65239b6',
      },
      lineItems: [
        {
          itemId: '5f9c3121e3c8569b33c4c0d2',
          name: 'Build your own Pizza',
          totalMoney: {
            amount: 2522,
            currency: 'USD',
          },
          quantity: 1,
          selectedVariation: {
            _id: '5f9c3121e3c856b101c4c0a9',
            name: 'Build your own Pizza Medium',
            price: {
              amount: 1323,
              currency: 'USD',
            },
          },
          modifiers: [
            {
              _id: '5fec61f588e1e62b7066840f',
              name: 'Crust',
              chosenValue: [
                {
                  _id: '5fec61f588e1e66bf6668410',
                  name: 'Hand Tossed',
                  price: {
                    amount: 100,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fec61f588e1e65465668411',
              name: 'Size',
              chosenValue: [
                {
                  _id: '5fec61f588e1e63952668412',
                  name: 'Small',
                  price: {
                    amount: 1099,
                    currency: 'USD',
                  },
                },
              ],
            },
          ],
        },
      ],
      invoice: {
        subTotal: {
          amount: 2522,
          currency: 'USD',
        },
        tip: {
          amount: 0,
          currency: 'USD',
        },
        tax: {
          amount: 227,
          currency: 'USD',
        },
        chargedFee: [
          {
            type: 'SKIP_LINE_FEE',
            fee: {
              amount: 0,
              currency: 'USD',
            },
          },
          {
            type: 'SERVICE_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
          {
            type: 'VENDOR_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
        ],
        total: {
          amount: 2900,
          currency: 'USD',
        },
      },
      fulfillmentInfo: {
        type: 'PICKUP',
        customer: {
          name: 'aryan',
          phone: '+919601978892',
          buyerId: '5fc07280567ed2e4b41bba20',
        },
      },
      pickupTime: '2020-12-30T11:28:13.502Z',
      // here
      receiptUrl:
        'https://squareupsandbox.com/receipt/preview/9m8S9lyzOMWvG8LR5PTMeRW6FgLZY',
      paymentMethod: 'CARD',
      updates: [
        {
          timestamp: 1609327093502,
          type: 'STATUS_CHANGE',
          newStatus: 'RECEIVED',
        },
      ],
    },
    {
      _id: '5febe67588e1e60400668409',
      creationTimestamp: 1609295477000,
      status: 'RECEIVED',
      merchantInfo: {
        storeId: '5f3577a8405bae54c65239b5',
        merchantName: 'demo haldiram',
        stallId: '5f3577a8405bae54c65239b6',
      },
      lineItems: [
        {
          itemId: '5f9c3121e3c8569b33c4c0d2',
          name: 'Build your own Pizza',
          totalMoney: {
            amount: 2522,
            currency: 'USD',
          },
          quantity: 1,
          selectedVariation: {
            _id: '5f9c3121e3c856b101c4c0a9',
            name: 'Build your own Pizza Medium',
            price: {
              amount: 1323,
              currency: 'USD',
            },
          },
          modifiers: [
            {
              _id: '5febe67688e1e6aa9d66840a',
              name: 'Crust',
              chosenValue: [
                {
                  _id: '5febe67688e1e6e71b66840b',
                  name: 'Hand Tossed',
                  price: {
                    amount: 100,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5febe67688e1e66a9c66840c',
              name: 'Size',
              chosenValue: [
                {
                  _id: '5febe67688e1e6a6b366840d',
                  name: 'Small',
                  price: {
                    amount: 1099,
                    currency: 'USD',
                  },
                },
              ],
            },
          ],
        },
      ],
      invoice: {
        subTotal: {
          amount: 2522,
          currency: 'USD',
        },
        tip: {
          amount: 0,
          currency: 'USD',
        },
        tax: {
          amount: 227,
          currency: 'USD',
        },
        chargedFee: [
          {
            type: 'SKIP_LINE_FEE',
            fee: {
              amount: 0,
              currency: 'USD',
            },
          },
          {
            type: 'SERVICE_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
          {
            type: 'VENDOR_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
        ],
        total: {
          amount: 2900,
          currency: 'USD',
        },
      },
      fulfillmentInfo: {
        type: 'PICKUP',
        customer: {
          name: 'aryan',
          phone: '+919601978892',
          buyerId: '5fc07280567ed2e4b41bba20',
        },
      },
      pickupTime: '2020-12-30T02:44:18.031Z',
      receiptUrl:
        'https://squareupsandbox.com/receipt/preview/pYKa1ViRYJPODDFXd9MANFXDyUAZY',
      feedback: {
        timestamp: '2020-12-30T02:31:31.755Z',
        rating: 5,
        review: '',
      },
      paymentMethod: 'CARD',
      updates: [
        {
          timestamp: 1609295478031,
          type: 'STATUS_CHANGE',
          newStatus: 'RECEIVED',
        },
      ],
    },
    {
      _id: '5febe55e88e1e676a9668404',
      creationTimestamp: 1609295198000,
      status: 'RECEIVED',
      merchantInfo: {
        storeId: '5f3577a8405bae54c65239b5',
        merchantName: 'demo haldiram',
        stallId: '5f3577a8405bae54c65239b6',
      },
      lineItems: [
        {
          itemId: '5f9c3121e3c8569b33c4c0d2',
          name: 'Build your own Pizza',
          totalMoney: {
            amount: 2522,
            currency: 'USD',
          },
          quantity: 1,
          selectedVariation: {
            _id: '5f9c3121e3c856b101c4c0a9',
            name: 'Build your own Pizza Medium',
            price: {
              amount: 1323,
              currency: 'USD',
            },
          },
          modifiers: [
            {
              _id: '5febe55e88e1e6c78f668405',
              name: 'Crust',
              chosenValue: [
                {
                  _id: '5febe55e88e1e60f9d668406',
                  name: 'Hand Tossed',
                  price: {
                    amount: 100,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5febe55e88e1e6be70668407',
              name: 'Size',
              chosenValue: [
                {
                  _id: '5febe55e88e1e6245e668408',
                  name: 'Small',
                  price: {
                    amount: 1099,
                    currency: 'USD',
                  },
                },
              ],
            },
          ],
        },
      ],
      invoice: {
        subTotal: {
          amount: 2522,
          currency: 'USD',
        },
        tip: {
          amount: 0,
          currency: 'USD',
        },
        tax: {
          amount: 227,
          currency: 'USD',
        },
        chargedFee: [
          {
            type: 'SKIP_LINE_FEE',
            fee: {
              amount: 0,
              currency: 'USD',
            },
          },
          {
            type: 'SERVICE_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
          {
            type: 'VENDOR_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
        ],
        total: {
          amount: 2900,
          currency: 'USD',
        },
      },
      fulfillmentInfo: {
        type: 'PICKUP',
        customer: {
          name: 'aryan',
          phone: '+919601978892',
          buyerId: '5fc07280567ed2e4b41bba20',
        },
      },
      pickupTime: '2020-12-30T02:36:38.955Z',
      receiptUrl:
        'https://squareupsandbox.com/receipt/preview/NSk3YsTeqKtdyEo6hCzixSIdwVQZY',
      feedback: {
        timestamp: '2020-12-30T02:26:54.148Z',
        rating: 4,
        review: '',
      },
      paymentMethod: 'CARD',
      updates: [
        {
          timestamp: 1609295198955,
          type: 'STATUS_CHANGE',
          newStatus: 'RECEIVED',
        },
      ],
    },
    {
      _id: '5feb567c88e1e6a33a6683ff',
      creationTimestamp: 1609258620000,
      status: 'RECEIVED',
      merchantInfo: {
        storeId: '5f3577a8405bae54c65239b5',
        merchantName: 'demo haldiram',
        stallId: '5f3577a8405bae54c65239b6',
      },
      lineItems: [
        {
          itemId: '5f9c3121e3c8569b33c4c0d2',
          name: 'Build your own Pizza',
          totalMoney: {
            amount: 2522,
            currency: 'USD',
          },
          quantity: 1,
          selectedVariation: {
            _id: '5f9c3121e3c856b101c4c0a9',
            name: 'Build your own Pizza Medium',
            price: {
              amount: 1323,
              currency: 'USD',
            },
          },
          modifiers: [
            {
              _id: '5feb567c88e1e6beda668400',
              name: 'Crust',
              chosenValue: [
                {
                  _id: '5feb567c88e1e6055a668401',
                  name: 'Hand Tossed',
                  price: {
                    amount: 100,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5feb567c88e1e6941c668402',
              name: 'Size',
              chosenValue: [
                {
                  _id: '5feb567c88e1e6cb9e668403',
                  name: 'Small',
                  price: {
                    amount: 1099,
                    currency: 'USD',
                  },
                },
              ],
            },
          ],
        },
      ],
      invoice: {
        subTotal: {
          amount: 2522,
          currency: 'USD',
        },
        tip: {
          amount: 0,
          currency: 'USD',
        },
        tax: {
          amount: 227,
          currency: 'USD',
        },
        chargedFee: [
          {
            type: 'SKIP_LINE_FEE',
            fee: {
              amount: 0,
              currency: 'USD',
            },
          },
          {
            type: 'SERVICE_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
          {
            type: 'VENDOR_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
        ],
        total: {
          amount: 2900,
          currency: 'USD',
        },
      },
      fulfillmentInfo: {
        type: 'PICKUP',
        customer: {
          name: 'aryan',
          phone: '+919601978892',
          buyerId: '5fc07280567ed2e4b41bba20',
        },
      },
      pickupTime: '2020-12-29T16:27:00.911Z',
      receiptUrl:
        'https://squareupsandbox.com/receipt/preview/hoQiY4mGYGjGJTMzAAMV6XyLksEZY',
      feedback: {
        timestamp: '2020-12-30T00:53:26.845Z',
        rating: 4,
        review: 'good food',
      },
      paymentMethod: 'CARD',
      updates: [
        {
          timestamp: 1609258620911,
          type: 'STATUS_CHANGE',
          newStatus: 'RECEIVED',
        },
      ],
    },
    {
      _id: '5fe2188c88e1e61cd86683cb',
      creationTimestamp: 1608652940000,
      status: 'RECEIVED',
      merchantInfo: {
        storeId: '5f3577a8405bae54c65239b5',
        merchantName: 'demo haldiram',
        stallId: '5f3577a8405bae54c65239b6',
      },
      lineItems: [
        {
          itemId: '5f9c3121e3c8569b33c4c0d2',
          name: 'Build your own Pizza',
          totalMoney: {
            amount: 2522,
            currency: 'USD',
          },
          quantity: 1,
          selectedVariation: {
            _id: '5f9c3121e3c856b101c4c0a9',
            name: 'Build your own Pizza Medium',
            price: {
              amount: 1323,
              currency: 'USD',
            },
          },
          modifiers: [
            {
              _id: '5fe2188d88e1e601b66683cc',
              name: 'Size',
              chosenValue: [
                {
                  _id: '5fe2188d88e1e61d756683cd',
                  name: 'Small',
                  price: {
                    amount: 1099,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fe2188d88e1e679ea6683ce',
              name: 'Crust',
              chosenValue: [
                {
                  _id: '5fe2188d88e1e605ad6683cf',
                  name: 'Hand Tossed',
                  price: {
                    amount: 100,
                    currency: 'USD',
                  },
                },
              ],
            },
            {
              _id: '5fe2188d88e1e67db86683d0',
              name: 'Cheese',
              chosenValue: [
                {
                  _id: '5fe2188d88e1e681416683d1',
                  name: 'None',
                  price: {
                    amount: 0,
                    currency: 'USD',
                  },
                },
              ],
            },
          ],
        },
      ],
      invoice: {
        subTotal: {
          amount: 2522,
          currency: 'USD',
        },
        tip: {
          amount: 0,
          currency: 'USD',
        },
        tax: {
          amount: 227,
          currency: 'USD',
        },
        chargedFee: [
          {
            type: 'SKIP_LINE_FEE',
            fee: {
              amount: 0,
              currency: 'USD',
            },
          },
          {
            type: 'SERVICE_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
          {
            type: 'VENDOR_FEE',
            fee: {
              amount: 151,
              currency: 'USD',
            },
          },
        ],
        total: {
          amount: 2900,
          currency: 'USD',
        },
      },
      fulfillmentInfo: {
        type: 'PICKUP',
        customer: {
          name: 'aryan',
          phone: '+919601978892',
          buyerId: '5fc07280567ed2e4b41bba20',
        },
      },
      pickupTime: '2020-12-22T16:15:21.339Z',
      receiptUrl:
        'https://squareupsandbox.com/receipt/preview/FmusXaThhdCzaGGmzsYF2HSl0N9YY',
      feedback: {
        timestamp: '2020-12-30T01:56:43.124Z',
        rating: 4,
        review: '',
      },
      paymentMethod: 'CARD',
      updates: [
        {
          timestamp: 1608652941339,
          type: 'STATUS_CHANGE',
          newStatus: 'RECEIVED',
        },
      ],
    },
  ],
  name: 'testusername',
  location: {
    address: 'Al Wahat Al Dakhla Desert, New Valley Governorate, Egypt',
    lat: 26.1086502,
    long: 26.1086502,
  },
  oauth: {
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZmMwNzI4MDU2N2VkMmU0YjQxYmJhMjAiLCJpYXQiOjE2MDk4MTI1MTgsImV4cCI6MTYxMjQwNDUxOCwidHlwIjoiYWNjZXNzIiwiYWN0IjoiQlVZRVIifQ.wmYC37shwjE7dLuZucROfF8o7LLE-IqNVjQ6xLIX9N8',
    refreshToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZmMwNzI4MDU2N2VkMmU0YjQxYmJhMjAiLCJpYXQiOjE2MDk4MTI1MTgsImV4cCI6MTYxMjQ5MDkxOCwidHlwIjoicmVmcmVzaCIsImFjdCI6IkJVWUVSIn0.7FDLJuB9qaInCDFuzUNa05Al-QfdHGp6ddX2zYW2l7Q',
    expiresAt: 1612404518220,
    tokenType: 'Bearer',
    buyerId: '5fc07280567ed2e4b41bba20',
  },
};

export const orderitem = {
  name: 'Fantastic Cotton Mouse',
  quantity: 54114,
  totalMoney: {
    amount: 31488,
    currency: 'USD',
  },
};

export const altOrderItem = {
  _id: '5fe2188c88e1e61cd86683cb',
  creationTimestamp: 1608652940000,
  status: 'RECEIVED',
  merchantInfo: {
    storeId: '5f3577a8405bae54c65239b5',
    merchantName: 'demo haldiram',
    stallId: '5f3577a8405bae54c65239b6',
  },
  lineItems: [
    {
      itemId: '5f9c3121e3c8569b33c4c0d2',
      name: 'Build your own Pizza',
      totalMoney: {
        amount: 2522,
        currency: 'USD',
      },
      quantity: 1,
      selectedVariation: {
        _id: '5f9c3121e3c856b101c4c0a9',
        name: 'Build your own Pizza Medium',
        price: {
          amount: 1323,
          currency: 'USD',
        },
      },
      modifiers: [
        {
          _id: '5fe2188d88e1e601b66683cc',
          name: 'Size',
          chosenValue: [
            {
              _id: '5fe2188d88e1e61d756683cd',
              name: 'Small',
              price: {
                amount: 1099,
                currency: 'USD',
              },
            },
          ],
        },
        {
          _id: '5fe2188d88e1e679ea6683ce',
          name: 'Crust',
          chosenValue: [
            {
              _id: '5fe2188d88e1e605ad6683cf',
              name: 'Hand Tossed',
              price: {
                amount: 100,
                currency: 'USD',
              },
            },
          ],
        },
        {
          _id: '5fe2188d88e1e67db86683d0',
          name: 'Cheese',
          chosenValue: [
            {
              _id: '5fe2188d88e1e681416683d1',
              name: 'None',
              price: {
                amount: 0,
                currency: 'USD',
              },
            },
          ],
        },
      ],
    },
  ],
  invoice: {
    subTotal: {
      amount: 2522,
      currency: 'USD',
    },
    tip: {
      amount: 0,
      currency: 'USD',
    },
    tax: {
      amount: 227,
      currency: 'USD',
    },
    chargedFee: [
      {
        type: 'SKIP_LINE_FEE',
        fee: {
          amount: 0,
          currency: 'USD',
        },
      },
      {
        type: 'SERVICE_FEE',
        fee: {
          amount: 151,
          currency: 'USD',
        },
      },
      {
        type: 'VENDOR_FEE',
        fee: {
          amount: 151,
          currency: 'USD',
        },
      },
    ],
    total: {
      amount: 2900,
      currency: 'USD',
    },
  },
  fulfillmentInfo: {
    type: 'PICKUP',
    customer: {
      name: 'aryan',
      phone: '+919601978892',
      buyerId: '5fc07280567ed2e4b41bba20',
    },
  },
  pickupTime: '2020-12-22T16:15:21.339Z',
  receiptUrl:
    'https://squareupsandbox.com/receipt/preview/FmusXaThhdCzaGGmzsYF2HSl0N9YY',
  feedback: {
    timestamp: '2020-12-30T01:56:43.124Z',
    rating: 4,
    review: '',
  },
  paymentMethod: 'CARD',
  updates: [
    {
      timestamp: 1608652941339,
      type: 'STATUS_CHANGE',
      newStatus: 'RECEIVED',
    },
  ],
};

export const orderstatus = 'PREPARING';
export const fullfillmentinfo = {
  type: 'PICKUP',
  customer: userinfo,
};

export const update1 = {
  timestamp: 1600984268,
  type: 'NOTIFY_CUSTOMER',
  oldStatus: 'RECEIVED',
  newStatus: 'RECEIVED',
};

export const update2 = {
  timestamp: 1600984268,
  type: 'STATUS_CHANGE',
  oldStatus: 'READY',
  newStatus: 'CANCELLED',
};

export const order1 = {
  error: null,
  isLoading: false,
  orderState: {
    _id: '5fac194002f8c657dc1c4698',
    creationTimestamp: 1605114176000,
    status: 'RECEIVED',
    merchantInfo: {
      storeId: '5f3577a8405bae54c65239b5',
      merchantName: 'demo haldiram',
      stallId: '5f3577a8405bae54c65239b6',
    },
    lineItems: [
      {
        itemId: '5f9c3121e3c8569b33c4c0d2',
        name: 'Build your own Pizza',
        totalMoney: {
          amount: 2522,
          currency: 'USD',
        },
        quantity: 1,
        selectedVariation: {
          _id: '5f9c3121e3c856b101c4c0a9',
          name: 'Build your own Pizza Medium',
          price: {
            amount: 1323,
            currency: 'USD',
          },
        },
        modifiers: [
          {
            _id: '5fac194102f8c6d3151c4699',
            name: 'Cheese',
            chosenValue: [
              {
                _id: '5fac194102f8c62bea1c469a',
                name: 'None',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
            ],
          },
          {
            _id: '5fac194102f8c648591c469b',
            name: 'Cheese portion',
            chosenValue: [
              {
                _id: '5fac194102f8c684f61c469c',
                name: 'Left',
                price: {
                  amount: 0,
                  currency: 'USD',
                },
              },
            ],
          },
          {
            _id: '5fac194102f8c6e75f1c469d',
            name: 'Size',
            chosenValue: [
              {
                _id: '5fac194102f8c6e5ae1c469e',
                name: 'Small',
                price: {
                  amount: 1099,
                  currency: 'USD',
                },
              },
            ],
          },
          {
            _id: '5fac194102f8c6566a1c469f',
            name: 'Crust',
            chosenValue: [
              {
                _id: '5fac194102f8c6a82f1c46a0',
                name: 'Hand Tossed',
                price: {
                  amount: 100,
                  currency: 'USD',
                },
              },
            ],
          },
        ],
      },
    ],
    invoice: {
      subTotal: {
        amount: 2522,
        currency: 'USD',
      },
      tip: {
        amount: 0,
        currency: 'USD',
      },
      tax: {
        amount: 227,
        currency: 'USD',
      },
      chargedFee: [
        {
          type: 'SKIP_LINE_FEE',
          fee: {
            amount: 0,
            currency: 'USD',
          },
        },
        {
          type: 'SERVICE_FEE',
          fee: {
            amount: 151,
            currency: 'USD',
          },
        },
        {
          type: 'VENDOR_FEE',
          fee: {
            amount: 151,
            currency: 'USD',
          },
        },
      ],
      total: {
        amount: 2900,
        currency: 'USD',
      },
    },
    fulfillmentInfo: {
      type: 'PICKUP',
      customer: {
        name: 'aryan',
        phone: '+918292935091',
      },
    },
    pickupTime: '2020-11-11T17:12:57.411Z',
    receiptUrl:
      'https://squareupsandbox.com/receipt/preview/1g1lkhVIXsRMiVYn9TlqnBaqaxZZY',
    paymentMethod: 'CARD',
    updates: [
      {
        timestamp: 1605114177411,
        type: 'STATUS_CHANGE',
        newStatus: 'RECEIVED',
      },
    ],
  },
};

export const orderResponse = {
  _id: '5fac194002f8c657dc1c4698',
  creationTimestamp: 1605114176000,
  status: 'RECEIVED',
  merchantInfo: {
    storeId: '5f3577a8405bae54c65239b5',
    merchantName: 'demo haldiram',
    stallId: '5f3577a8405bae54c65239b6',
  },
  lineItems: [
    {
      itemId: '5f9c3121e3c8569b33c4c0d2',
      name: 'Build your own Pizza',
      totalMoney: { amount: 2522, currency: 'USD' },
      quantity: 1,
      selectedVariation: {
        _id: '5f9c3121e3c856b101c4c0a9',
        name: 'Build your own Pizza Medium',
        price: { amount: 1323, currency: 'USD' },
      },
      modifiers: [
        {
          _id: '5fac194102f8c6d3151c4699',
          name: 'Cheese',
          chosenValue: [
            {
              _id: '5fac194102f8c62bea1c469a',
              name: 'None',
              price: { amount: 0, currency: 'USD' },
            },
          ],
        },
        {
          _id: '5fac194102f8c648591c469b',
          name: 'Cheese portion',
          chosenValue: [
            {
              _id: '5fac194102f8c684f61c469c',
              name: 'Left',
              price: { amount: 0, currency: 'USD' },
            },
          ],
        },
        {
          _id: '5fac194102f8c6e75f1c469d',
          name: 'Size',
          chosenValue: [
            {
              _id: '5fac194102f8c6e5ae1c469e',
              name: 'Small',
              price: { amount: 1099, currency: 'USD' },
            },
          ],
        },
        {
          _id: '5fac194102f8c6566a1c469f',
          name: 'Crust',
          chosenValue: [
            {
              _id: '5fac194102f8c6a82f1c46a0',
              name: 'Hand Tossed',
              price: { amount: 100, currency: 'USD' },
            },
          ],
        },
      ],
    },
  ],
  invoice: {
    subTotal: { amount: 2522, currency: 'USD' },
    tip: { amount: 0, currency: 'USD' },
    tax: { amount: 227, currency: 'USD' },
    chargedFee: [
      { type: 'SKIP_LINE_FEE', fee: { amount: 0, currency: 'USD' } },
      { type: 'SERVICE_FEE', fee: { amount: 151, currency: 'USD' } },
      { type: 'VENDOR_FEE', fee: { amount: 151, currency: 'USD' } },
    ],
    total: { amount: 2900, currency: 'USD' },
  },
  fulfillmentInfo: {
    type: 'PICKUP',
    customer: { name: 'aryan', phone: '+918292935091' },
  },
  pickupTime: '2020-11-11T17:12:57.411Z',
  receiptUrl:
    'https://squareupsandbox.com/receipt/preview/1g1lkhVIXsRMiVYn9TlqnBaqaxZZY',
  paymentMethod: 'CARD',
  updates: [
    { timestamp: 1605114177411, type: 'STATUS_CHANGE', newStatus: 'RECEIVED' },
  ],
};
