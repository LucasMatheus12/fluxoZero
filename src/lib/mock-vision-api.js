const fruitDatabase = [
  {
    id: 1,
    name: "Maçã",
    image: "/images/apple.jpg",
    pricePerKg: 5.99,
  },
  {
    id: 2,
    name: "Banana",
    image: "/images/banana.jpg",
    pricePerKg: 3.49,
  },
  {
    id: 3,
    name: "Laranja",
    image: "/images/orange.png",
    pricePerKg: 4.29,
  },
  {
    id: 4,
    name: "Abacate",
    image: "/images/avocado.jpg",
    pricePerKg: 12.99,
  },
]

export const mockIdentifyFruit = () => {
  return new Promise((resolve) => {
    const processingTime = Math.random() * 1000 + 1000

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * fruitDatabase.length)
      resolve(fruitDatabase[randomIndex])
    }, processingTime)
  })
}
