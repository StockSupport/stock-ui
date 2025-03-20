import Header from "@/components/layout/Header"
import ChartContainer from "@/components/feature/chart/ChartContainer"
import StockList from "@/components/feature/chart/StockList"

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-hidden flex flex-col">
          <ChartContainer />
        </main>
        <StockList />
      </div>
    </div>
  )
}

