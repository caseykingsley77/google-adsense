"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function WarningBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-yellow-800 text-sm">!</span>
        </div>
        <span className="text-yellow-800 text-sm">
          Due to the war in Ukraine, we will be pausing monetization of content that exploits, trivializes, or justifies
          the war.
        </span>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="text-blue-600 hover:text-blue-800"
        onClick={() => setIsVisible(false)}
      >
        Closed
      </Button>
    </div>
  )
}
