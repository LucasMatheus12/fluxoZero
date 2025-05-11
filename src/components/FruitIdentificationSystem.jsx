"use client"

import { useState } from "react"
import { mockIdentifyFruit } from "../lib/mock-vision-api"
import IdentificationScreen from "./screens/IdentificationScreen"
import PurchaseScreen from "./screens/PurchaseScreen"
import PrintingScreen from "./screens/PrintingScreen"
import CancelScreen from "./screens/CancelScreen"


const SCREENS = {
  IDENTIFICATION: "identification",
  PURCHASE: "purchase",
  PRINTING: "printing",
  CANCEL: "cancel",
}

export default function FruitIdentificationSystem() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.IDENTIFICATION)
  const [identifiedFruit, setIdentifiedFruit] = useState(null)
  const [weight, setWeight] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)

  const identifyProduct = async () => {
    setIsProcessing(true)

    try {
      const result = await mockIdentifyFruit()
      setIdentifiedFruit(result)

      const randomWeight = (Math.random() * 1.9 + 0.1).toFixed(2)
      setWeight(Number.parseFloat(randomWeight))

      setCurrentScreen(SCREENS.PURCHASE)
    } catch (error) {
      console.error("Erro na identificação:", error)
    } finally {
      setIsProcessing(false)
    }
  }

  const confirmPurchase = () => {
    setCurrentScreen(SCREENS.PRINTING)
  }

 
  const cancelPurchase = () => {
    setCurrentScreen(SCREENS.CANCEL)
  }


  const resetSystem = () => {
    setCurrentScreen(SCREENS.IDENTIFICATION)
    setIdentifiedFruit(null)
    setWeight(0)
  }

  
  const calculateTotal = () => {
    if (!identifiedFruit || !weight) return 0
    return (identifiedFruit.pricePerKg * weight).toFixed(2)
  }


  const renderScreen = () => {
    switch (currentScreen) {
      case SCREENS.IDENTIFICATION:
        return <IdentificationScreen onIdentify={identifyProduct} isProcessing={isProcessing} />

      case SCREENS.PURCHASE:
        return (
          <PurchaseScreen
            fruit={identifiedFruit}
            weight={weight}
            total={calculateTotal()}
            onConfirm={confirmPurchase}
            onCancel={cancelPurchase}
          />
        )

      case SCREENS.PRINTING:
        return <PrintingScreen onFinish={resetSystem} />

      case SCREENS.CANCEL:
        return <CancelScreen onFinish={resetSystem} />

      default:
        return <IdentificationScreen />
    }
  }

  return <div className="fullscreen-container">{renderScreen()}</div>
}
