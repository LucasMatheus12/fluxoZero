import FruitIdentificationSystem from "@/components/fruit-identification-system"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Sistema de Identificação de Hortifruti</h1>
        <FruitIdentificationSystem />
      </div>
    </main>
  )
}
