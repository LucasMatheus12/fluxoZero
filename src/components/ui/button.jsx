"use client"

export function Button({ children, onClick, className, variant = "default", disabled }) {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50 focus:ring-blue-500",
  }

  const styles = `${baseStyles} ${variantStyles[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className || ""}`

  return (
    <button className={styles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
