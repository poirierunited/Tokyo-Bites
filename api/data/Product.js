const products = [
  {
    name: "Product 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr1_QUrSeNPauUfFOZvCnv8m8BUlwWnaH9MA&s",
    description: "description of product 1",
    price: 10000,
    countInStock: 4,
    rating: 4.5,
    numReview: 10,
    reviews: [
      {
        name: "John Doe",
        rating: 4.5,
        comment: "description of review 1",
        user: "6827eecf47cfc20efcf11e9a",
      },
    ],
  },
  {
    name: "Product 2",
    image:
      "https://img.freepik.com/free-photo/seafood-sushi-dish-with-details-simple-black-background_23-2151349310.jpg",
    description: "description of product 2",
    price: 50000,
    countInStock: 12,
    rating: 4.0,
    numReview: 24,
    reviews: [
      {
        name: "John Doe",
        rating: 4.5,
        comment: "description of review 2",
        user: "6711c1a8c9dbe73ba1a637e0",
      },
    ],
  },
  {
    name: "Fieston Sushi Mix UPDATE!",
    image:
      "https://thumbs.dreamstime.com/b/combinaci%C3%B3n-de-comida-japonesa-sushi-10315000.jpg",
    description:
      "Una bandeja variada de sushi que incluye makis, nigiris y sashimis de …",
    rating: 4.5,
    numReview: 47,
    price: 24990,
    countInStock: 1,
    reviews: [
      {
        name: "John Doe",
        rating: 4.5,
        comment: "description of review 3",
        user: "6827eecf47cfc20efcf11e9a",
      },
    ],
  },
  {
    name: "Degustación de Sushi Clásico",
    image:
      "https://img.freepik.com/free-photo/seafood-sushi-dish-with-details-simple-black-background_23-2151349310.jpg",
    description:
      "Fila de nigiris y makis con ingredientes como salmón, atún, palta, kan…",
    rating: 4,
    numReview: 32,
    price: 14990,
    countInStock: 0,
    reviews: [
      {
        name: "John Doe",
        rating: 4,
        comment: "description of review 4",
        user: "6827eecf47cfc20efcf11e9a",
      },
    ],
  },
  {
    name: "Selección de Rolls",
    image:
      "https://img.freepik.com/free-photo/maki-sushi-isolated-white_2829-7304.jpg?t=st=1729216751~exp=1729220351~hmac=c77b998f7c85fff392b5d7bc9842d8d071871068b71732811526473e30abef4b&w=740",
    description:
      "Torre de diferentes tipos de rolls con salmón, palta, semillas de sésa…",
    rating: 3.5,
    numReview: 15,
    price: 9990,
    countInStock: 12,
    reviews: [
      {
        name: "John Doe",
        rating: 3.5,
        comment: "description of review 5",
        user: "6827eecf47cfc20efcf11e9a",
      },
    ],
  },
  {
    name: "Roll Tempura Crocante",
    image:
      "https://img.freepik.com/free-photo/hot-sushi-rolls-with-sauce-ginger_141793-1200.jpg?t=st=1729216774~exp=1729220374~hmac=c3c4287af9e8ce12288fe6c273442bc1e23cc49bf2fc6809314cd0278d4464c5&w=740",
    description:
      "Rollos tempura rellenos de queso crema, salmón y palta, con salsa teri…",
    rating: 4,
    numReview: 28,
    price: 7990,
    countInStock: 16,
    reviews: [
      {
        name: "John Doe",
        rating: 4,
        comment: "description of review 6",
        user: "6827eecf47cfc20efcf11e9a",
      },
    ],
  },
  {
    name: "Roll de Anguila Especial",
    image:
      "https://img.freepik.com/free-photo/maki-roll-with-cucumber-served-with-sauce-sesame-seeds_141793-790.jpg?t=st=1729216753~exp=1729220353~hmac=8a6731f6efe4c5f4b598fbfe8aff7f66f6bf158352ab80d18db4a772db6b136c&w=740",
    description: "Rollos de anguila con pepino, sésamo y salsa teriyaki.",
    rating: 4.5,
    numReview: 55,
    price: 8990,
    countInStock: 22,
    reviews: [
      {
        name: "John Doe",
        rating: 4.5,
        comment: "description of review 7",
        user: "6827eecf47cfc20efcf11e9a",
      },
    ],
  },
  {
    name: "Sushi para Compartir",
    image:
      "https://img.freepik.com/free-photo/sushi-set-with-tuna-salmon-vegetables-ginger-wasabi-side-view_141793-15530.jpg?t=st=1729217274~exp=1729220874~hmac=69b1febcd78db021e0a1decd3e376c10d47e32b686b5bed9585473f9fcc5d6be&w=740",
    description:
      "Variedad de rolls, nigiris y makis con diferentes ingredientes, incluy…",
    rating: 4,
    numReview: 41,
    price: 24990,
    countInStock: 20,
    reviews: [
      {
        name: "John Doe",
        rating: 4,
        comment: "description of review 8",
        user: "6827eecf47cfc20efcf11e9a",
      },
    ],
  },
  {
    name: "California Roll",
    image:
      "https://img.freepik.com/free-photo/sushi-rolls-with-red-caviar-green-leaf-wooden-board_114579-3464.jpg?t=st=1729217286~exp=1729220886~hmac=f7ebbc1d2142d4d1e168436156d20dd14fad7977a0b3089f206801992e8df3a5&w=360",
    description: "Rollos California con kanikama, palta, pepino y masago.",
    rating: 3.5,
    numReview: 23,
    price: 6990,
    countInStock: 14,
    reviews: [
      {
        name: "John Doe",
        rating: 3.5,
        comment: "description of review 9",
        user: "6827eecf47cfc20efcf11e9a",
      },
    ],
  },
  {
    name: "Roll Tempura Especial",
    image:
      "https://img.freepik.com/free-photo/sushi-nori-wooden-board_114579-3169.jpg?t=st=1729217301~exp=1729220901~hmac=e7efad343c840878ceeb8f06009c00eb96a1c7303765f835f4b3d9e38444fd29&w=740",
    description:
      "Rollos tempura con relleno de pescado, palta y salsa picante, con una …",
    rating: 4,
    numReview: 36,
    price: 8490,
    countInStock: 19,
    reviews: [
      {
        name: "John Doe",
        rating: 4,
        comment: "description of review 10",
        user: "6827eecf47cfc20efcf11e9a",
      },
    ],
  },
];

module.exports = products;