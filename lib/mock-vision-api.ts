// Simulação de uma API de visão computacional

// Banco de dados simulado de frutas e legumes
const fruitDatabase = [
  {
    id: 1,
    name: "Maçã",
    image: "/placeholder.svg?height=300&width=300",
    pricePerKg: 5.99,
  },
  {
    id: 2,
    name: "Banana",
    image: "/placeholder.svg?height=300&width=300",
    pricePerKg: 3.49,
  },
  {
    id: 3,
    name: "Laranja",
    image: "/placeholder.svg?height=300&width=300",
    pricePerKg: 4.29,
  },
  {
    id: 4,
    name: "Abacate",
    image: "/placeholder.svg?height=300&width=300",
    pricePerKg: 12.99,
  },
  {
    id: 5,
    name: "Tomate",
    image: "/placeholder.svg?height=300&width=300",
    pricePerKg: 6.79,
  },
  {
    id: 6,
    name: "Cenoura",
    image: "/placeholder.svg?height=300&width=300",
    pricePerKg: 3.99,
  },
  {
    id: 7,
    name: "Batata",
    image: "/placeholder.svg?height=300&width=300",
    pricePerKg: 2.99,
  },
  {
    id: 8,
    name: "Cebola",
    image: "/placeholder.svg?height=300&width=300",
    pricePerKg: 4.49,
  },
]

/**
 * Simula a identificação de uma fruta ou legume usando visão computacional
 * Em um sistema real, isso seria conectado a uma câmera e um serviço de IA
 */
export const mockIdentifyFruit = () => {
  return new Promise((resolve) => {
    // Simula o tempo de processamento da IA (1-3 segundos)
    const processingTime = Math.random() * 2000 + 1000

    setTimeout(() => {
      // Seleciona uma fruta aleatória do banco de dados
      const randomIndex = Math.floor(Math.random() * fruitDatabase.length)
      resolve(fruitDatabase[randomIndex])
    }, processingTime)
  })
}
