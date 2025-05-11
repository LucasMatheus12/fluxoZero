"use client"

import { Loader } from "../ui/Loader"
import Logo from "../ui/Logo"

export default function IdentificationScreen({ onIdentify, isProcessing }) {
  return (
    <div className="screen identification-screen">
      <header className="screen-header">
        <div className="header-content">
          <Logo />
          <h1>Sistema de Identificação de Hortifruti</h1>
        </div>
      </header>

      <div className="screen-content">
        <div className="camera-box" aria-label="Área de identificação de produto">
          {isProcessing ? (
            <div className="processing-indicator" aria-live="polite">
              <Loader size="large" />
              <p className="processing-text">Identificando produto...</p>
            </div>
          ) : (
            <div className="camera-placeholder">
              <div className="camera-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              </div>
              <p className="camera-text">Coloque a fruta ou legume na caixa de identificação</p>
            </div>
          )}
        </div>
      </div>

      <footer className="screen-footer">
        <button
          className="big-button identify-button"
          onClick={onIdentify}
          disabled={isProcessing}
          aria-label="Identificar produto"
        >
          {isProcessing ? "Processando..." : "Identificar Produto"}
        </button>
      </footer>
    </div>
  )
}
