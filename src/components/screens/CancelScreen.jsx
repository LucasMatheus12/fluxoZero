"use client"

import { useEffect } from "react"
import Logo from "../ui/Logo"

export default function CancelScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish()
    }, 4000)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div className="screen cancel-screen" role="alert" aria-live="assertive">
      <header className="screen-header">
        <div className="header-content">
          <Logo />
          <h1>Operação Cancelada</h1>
        </div>
      </header>

      <div className="screen-content">
        <div className="animation-container">
          <div className="cancel-message">
            <div className="cancel-icon">✕</div>
            <h2>Compra Cancelada</h2>
          </div>

          <div className="remove-product-animation">
            <div className="basket"></div>
            <div className="product-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="fruit-icon"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a9.96 9.96 0 0 0-7.071 2.929"></path>
                <path d="M12 2v4"></path>
                <path d="M9.5 4c.83-1 1.5-1 3-1"></path>
              </svg>
            </div>
            <div className="hand-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
          </div>

          <div className="status-message">
            <h2>Por favor, retire o produto da balança</h2>
            <p className="auto-redirect">Voltando à tela inicial em alguns segundos...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
