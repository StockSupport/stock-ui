"use client"

import {
  MousePointer,
  Crosshair,
  LineChart,
  Type,
  Ruler,
  Shapes,
  Brush,
  Eraser,
  Home,
  Layers,
  Eye,
  Trash,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Sidebar() {
  const tools = [
    { icon: MousePointer, tooltip: "선택" },
    { icon: Crosshair, tooltip: "십자선" },
    { icon: LineChart, tooltip: "추세선" },
    { icon: Type, tooltip: "텍스트" },
    { icon: Ruler, tooltip: "측정" },
    { icon: Shapes, tooltip: "도형" },
    { icon: Brush, tooltip: "브러시" },
    { icon: Eraser, tooltip: "지우개" },
    { icon: Home, tooltip: "홈" },
    { icon: Layers, tooltip: "레이어" },
    { icon: Eye, tooltip: "보기" },
    { icon: Trash, tooltip: "삭제" },
  ]

  return (
    <TooltipProvider>
      <aside className="w-12 border-r border-border flex flex-col items-center py-2 shrink-0">
        {tools.map((Tool, index) => (
          <Tooltip key={index} delayDuration={300}>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 mb-1">
                <Tool.icon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{Tool.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </aside>
    </TooltipProvider>
  )
}

