"use client"

import { useState } from "react"
import { ChevronDown, MoreHorizontal, Grid, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type TabType = {
  id: string;
  label: string;
}

export default function Watchlist() {
  const [expanded, setExpanded] = useState<boolean>(true)
  const [activeTab, setActiveTab] = useState<string>("popularStock")

  const tabs: TabType[] = [
    { id: "popularStock", label: "인기주식" },
    { id: "pattern", label: "패턴" },
    { id: "favorites", label: "즐겨찾기" },
  ]

  return (
    <aside
      className={`border-l border-border ${expanded ? "w-64" : "w-0 overflow-hidden"} transition-all duration-300 shrink-0`}
    >
      <div className="p-2 border-b border-border flex items-center justify-between">
        <Select value={activeTab} onValueChange={setActiveTab}>
          <SelectTrigger className="h-7 w-36 text-xs border-0 px-0 focus:ring-0 focus:border-none focus:ring-offset-0 shadow-none">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="border-none">
            {tabs.map((tab) => (
              <SelectItem key={tab.id} value={tab.id} className="text-xs">
                {tab.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button variant="ghost" size="icon" className="h-6 w-6 ml-1" onClick={() => setExpanded(!expanded)}>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <div>

        {activeTab === "popularStock" && (
          <div className="p-4 text-center text-sm text-muted-foreground">인기주식정보</div>
        )}

        {activeTab === "pattern" && (
          <div className="p-4 text-center text-sm text-muted-foreground">패턴 상세 정보</div>
        )}

        {activeTab === "favorites" && (
          <div className="p-4 text-center text-sm text-muted-foreground">즐겨찾기</div>
        )}
      </div>


    </aside>
  )
}

