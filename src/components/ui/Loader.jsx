export function Loader({ size = "medium" }) {
  const sizeClass =
    {
      small: "loader-small",
      medium: "loader-medium",
      large: "loader-large",
    }[size] || "loader-medium"

  return (
    <div className={`loader ${sizeClass}`}>
      <div className="loader-spinner"></div>
    </div>
  )
}
