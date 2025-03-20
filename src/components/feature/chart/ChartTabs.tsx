"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

type TabType = {
  id: string;
  label: string;
};

export default function ChartTabs() {

  const tabs: TabType[] = [
    { id: "news", label: "뉴스" },
    { id: "chartAnalysis", label: "차트분석" },
  ];

  const [activeTab, setActiveTab] = useState<string>("news");
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const toggleExpanded = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="border-t border-border">
      <div className="flex items-center justify-between border-b border-border px-2">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "pb-3 pt-2 px-4 text-sm relative transition-colors whitespace-nowrap text-center w-28",
                activeTab === tab.id ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
              {activeTab === tab.id && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
            </button>
          ))}
        </div>

        <Button variant="ghost" size="sm" className="h-8 w-8 flex-shrink-0 ml-2" onClick={toggleExpanded} type="button">
          {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
          <span className="sr-only">{isExpanded ? "접기" : "펼치기"}</span>
        </Button>
      </div>

      {/* 탭 확장 시 사이즈 고정 */}
      <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", isExpanded ? "max-h-[33vh]" : "max-h-0")}>
        <div className="p-4 h-[64vh] overflow-y-auto">
          <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
            {activeTab === "news" && (
              <div className="w-full h-full flex flex-col">
                <div className="text-lg font-medium mb-4">뉴스</div>
                <div>
                  뉴스데이터 ㅇㅇㅇ
                </div>
              </div>
            )}
            {activeTab === "chartAnalysis" && (
              <div className="w-full h-full flex flex-col">
                <div className="text-lg font-medium mb-4">차트분석</div>
                <div>
                  차트분석 ㅇㅇㅇ
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
