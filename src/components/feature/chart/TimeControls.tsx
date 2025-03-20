"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TimeControls() {
  const timeframes = [
    { value: "1m", label: "1분" },
    { value: "5m", label: "5분" },
    { value: "15m", label: "15분" },
    { value: "30m", label: "30분" },
    { value: "1h", label: "1시간" },
    { value: "4h", label: "4시간" },
    { value: "1d", label: "1일" },
    { value: "1w", label: "1주" },
    { value: "1M", label: "1개월" },
  ]

  const dateRanges = [
    { value: "1d", label: "1일" },
    { value: "5d", label: "5일" },
    { value: "1m", label: "1개월" },
    { value: "3m", label: "3개월" },
    { value: "6m", label: "6개월" },
    { value: "ytd", label: "YTD" },
    { value: "1y", label: "1년" },
    { value: "5y", label: "5년" },
    { value: "all", label: "전체" },
  ]

  return (
    <div className="border-t border-border p-2 flex items-center justify-between">
      <Tabs defaultValue="1d" className="w-auto">
        <TabsList className="h-7">
          {timeframes.map((frame) => (
            <TabsTrigger key={frame.value} value={frame.value} className="text-xs px-2 h-6">
              {frame.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="flex items-center gap-2">
        {dateRanges.map((range) => (
          <Button key={range.value} variant="ghost" size="sm" className="h-6 px-2 text-xs">
            {range.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

