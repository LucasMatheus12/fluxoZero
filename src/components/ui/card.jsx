export function Card({ children, className }) {
  return <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className || ""}`}>{children}</div>
}

export function CardContent({ children, className }) {
  return <div className={`p-6 ${className || ""}`}>{children}</div>
}
