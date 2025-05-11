"use client"

import { useEffect } from "react"
import Logo from "../ui/Logo"

export default function PrintingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div className="screen printing-screen" role="alert" aria-live="assertive">
      <header className="screen-header">
        <div className="header-content">
          <Logo />
          <h1>Imprimindo Etiqueta</h1>
        </div>
      </header>

      <div className="screen-content">
        <div className="animation-container">
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Compra Confirmada!</h2>
          </div>

          <div className="printer-container">
            <div className="printer" aria-label="Impressora imprimindo etiqueta">
              <div className="printer-top"></div>
              <div className="printer-middle">
                <div className="printer-slot"></div>
              </div>
              <div className="printer-bottom"></div>
              <div className="label-paper">
                <div className="label-content">
                  <div className="label-logo">FluxoZero</div>
                  <div className="label-item">Produto</div>
                  <div className="label-barcode"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="status-message">
            <p>Aguarde a impressão da etiqueta...</p>
            <p className="auto-redirect">Voltando à tela inicial em alguns segundos...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
