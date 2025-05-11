"use client"

import Logo from "../ui/Logo"

export default function PurchaseScreen({ fruit, weight, total, onConfirm, onCancel }) {
  if (!fruit) return null

  return (
    <div className="screen purchase-screen">
      <header className="screen-header">
        <div className="header-content">
          <Logo />
          <h1>Confirme sua Compra</h1>
        </div>
      </header>

      <div className="screen-content purchase-content">
        <div className="product-card">
          <div className="product-image-wrapper">
            <img src={fruit.image || "/placeholder.svg"} alt={fruit.name} className="product-image" />
            <h2 className="product-name">{fruit.name}</h2>
          </div>

          <div className="product-info-card">
            <div className="info-item">
              <span className="info-label">Preço por kg:</span>
              <span className="info-value">R$ {fruit.pricePerKg.toFixed(2)}</span>
            </div>

            <div className="info-item weight-item">
              <span className="info-label">Peso:</span>
              <span className="info-value weight-value">{weight} kg</span>
            </div>

            <div className="total-item">
              <span className="total-label">Total:</span>
              <span className="total-value">R$ {total}</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="screen-footer purchase-footer">
        <button className="big-button confirm-button" onClick={onConfirm} aria-label="Confirmar compra">
          <span className="button-icon">✓</span>
          Confirmar Compra
        </button>
        <button className="big-button cancel-button" onClick={onCancel} aria-label="Cancelar compra">
          <span className="button-icon">✕</span>
          Cancelar
        </button>
      </footer>
    </div>
  )
}
