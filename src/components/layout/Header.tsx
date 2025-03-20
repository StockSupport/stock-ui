"use client"

import { useState } from "react"
import { LayoutGrid, Settings, Bell, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [symbol, setSymbol] = useState("USDKRW")
  const [price, setPrice] = useState("1,453.63")
  const [change, setChange] = useState("+10.97")
  const [changePercent, setChangePercent] = useState("(+0.76%)")

  return (
    <header className="border-b border-border flex items-center h-14 px-2 shrink-0">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <LayoutGrid className="h-4 w-4" />
        </Button>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Settings className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <UserRound className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}

