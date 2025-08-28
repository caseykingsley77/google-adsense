"use client"

import { useState } from "react"
import { Menu, HelpCircle, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileSidebar from "./mobile-sidebar"
import Image from "next/image"

interface HeaderProps {
  title?: string
}

export default function Header({ title = "Home page" }: HeaderProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="p-2 md:hidden hover:bg-gray-100 active:bg-gray-200"
              onClick={() => setIsMobileSidebarOpen(true)}
              onTouchEnd={() => setIsMobileSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2 hidden md:block">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/google-adsense-logo.png"
                  alt="Google AdSense"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl text-gray-700 hidden sm:block font-medium">Google AdSense</span>
              <span className="text-lg text-gray-700 sm:hidden font-medium">AdSense</span>
            </div>
            <span className="text-gray-600 ml-2 sm:ml-8 text-sm sm:text-base hidden xs:block">{title}</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100">
              <HelpCircle className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2 rounded-full bg-blue-500 hover:bg-blue-600">
              <User className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </header>

      <MobileSidebar isOpen={isMobileSidebarOpen} onClose={() => setIsMobileSidebarOpen(false)} />
    </>
  )
}
