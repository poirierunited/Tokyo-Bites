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
        },
      ],
    },
  ];
  
  module.exports = products;