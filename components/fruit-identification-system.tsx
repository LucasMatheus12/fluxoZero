"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Check, Printer, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { mockIdentifyFruit } from "@/lib/mock-vision-api"

type Step = "waiting" | "identifying" | "confirming" | "weighing" | "purchasing" | "printing"
type FruitData = {
  name: string
  image: string
  pricePerKg: number
}

export default function FruitIdentificationSystem() {
  const [currentStep, setCurrentStep] = useState<Step>("waiting")
  const [identifiedFruit, setIdentifiedFruit] = useState<FruitData | null>(null)
  const [weight, setWeight] = useState<number>(0)
  const [isProcessing, setIsProcessing] = useState(false)

  const startIdentification = async () => {
    setCurrentStep("identifying")
    setIsProcessing(true)

    try {
      // Simulando o tempo de processamento da IA
      const result = await mockIdentifyFruit()
      setIdentifiedFruit(result)
      setCurrentStep("confirming")
    } catch (error) {
      console.error("Erro na identificação:", error)
      setCurrentStep("waiting")
    } finally {
      setIsProcessing(false)
    }
  }

  const confirmIdentification = () => {
    setCurrentStep("weighing")
    setIsProcessing(true)

    // Simulando a pesagem
    setTimeout(() => {
      // Peso aleatório entre 0.1 e 2 kg
      const randomWeight = (Math.random() * 1.9 + 0.1).toFixed(2)
      setWeight(Number.parseFloat(randomWeight))
      setIsProcessing(false)
      setCurrentStep("purchasing")
    }, 1500)
  }

  const purchaseFruit = () => {
    setCurrentStep("printing")
    setIsProcessing(true)

    // Simulando a impressão da etiqueta
    setTimeout(() => {
      setIsProcessing(false)
      // Após 3 segundos, volta ao estado inicial
      setTimeout(() => {
        resetSystem()
      }, 3000)
    }, 2000)
  }

  const resetSystem = () => {
    setCurrentStep("waiting")
    setIdentifiedFruit(null)
    setWeight(0)
  }

  const calculateTotal = () => {
    if (!identifiedFruit || !weight) return 0
    return (identifiedFruit.pricePerKg * weight).toFixed(2)
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Área da câmera/visualização */}
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
              {currentStep === "waiting" && (
                <div className="text-center p-4">
                  <p className="text-gray-500 mb-2">Coloque a fruta ou legume na caixa de identificação</p>
                  <Button onClick={startIdentification}>Iniciar Identificação</Button>
                </div>
              )}

              {currentStep === "identifying" && (
                <div className="text-center">
                  <Loader2 className="h-12 w-12 animate-spin text-gray-500 mx-auto mb-2" />
                  <p>Identificando produto...</p>
                </div>
              )}

              {(currentStep === "confirming" ||
                currentStep === "weighing" ||
                currentStep === "purchasing" ||
                currentStep === "printing") &&
                identifiedFruit && (
                  <Image
                    src={identifiedFruit.image || "/placeholder.svg"}
                    alt={identifiedFruit.name}
                    fill
                    className="object-contain p-4"
                  />
                )}
            </div>

            {/* Status atual */}
            <div className="w-full bg-gray-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Status:</h3>
              <p>
                {currentStep === "waiting" && "Aguardando produto para identificação"}
                {currentStep === "identifying" && "Identificando produto..."}
                {currentStep === "confirming" && "Confirme a identificação"}
                {currentStep === "weighing" && "Pesando produto..."}
                {currentStep === "purchasing" && "Confirme a compra"}
                {currentStep === "printing" && "Imprimindo etiqueta..."}
              </p>
            </div>
          </div>

          {/* Área de informações e ações */}
          <div className="flex flex-col">
            {/* Informações do produto identificado */}
            {identifiedFruit &&
              (currentStep === "confirming" ||
                currentStep === "weighing" ||
                currentStep === "purchasing" ||
                currentStep === "printing") && (
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">{identifiedFruit.name}</h2>
                  <p className="mb-1">Preço: R$ {identifiedFruit.pricePerKg.toFixed(2)}/kg</p>

                  {(currentStep === "purchasing" || currentStep === "printing") && (
                    <>
                      <p className="mb-1">Peso: {weight} kg</p>
                      <p className="text-xl font-bold mt-2">Total: R$ {calculateTotal()}</p>
                    </>
                  )}
                </div>
              )}

            {/* Ações disponíveis */}
            <div className="mt-auto">
              {currentStep === "confirming" && (
                <div className="flex flex-col gap-2">
                  <p className="mb-2">Este produto é um(a) {identifiedFruit?.name}?</p>
                  <Button onClick={confirmIdentification} className="w-full" disabled={isProcessing}>
                    <Check className="mr-2 h-4 w-4" /> Confirmar Identificação
                  </Button>
                  <Button variant="outline" onClick={resetSystem} className="w-full" disabled={isProcessing}>
                    Não, tentar novamente
                  </Button>
                </div>
              )}

              {currentStep === "purchasing" && (
                <div className="flex flex-col gap-2">
                  <Button onClick={purchaseFruit} className="w-full" disabled={isProcessing}>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Confirmar Compra
                  </Button>
                  <Button variant="outline" onClick={resetSystem} className="w-full" disabled={isProcessing}>
                    Cancelar
                  </Button>
                </div>
              )}

              {currentStep === "printing" && (
                <div className="text-center">
                  {isProcessing ? (
                    <div>
                      <Printer className="h-8 w-8 mx-auto mb-2" />
                      <p>Imprimindo etiqueta...</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-green-600 font-medium mb-2">Etiqueta impressa com sucesso!</p>
                      <p>Voltando ao início em alguns segundos...</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
