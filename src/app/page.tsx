"use client"

import Header from "@/components/layout/Header"
import ChartTabs from "@/components/feature/chart/ChartTabs"
import StockList from "@/components/feature/chart/StockList"

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-hidden">
          <ChartTabs />
        </main>
        <StockList />
      </div>
    </div>
  )
}
