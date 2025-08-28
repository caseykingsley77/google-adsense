"use client"

import { useState } from "react"
import {
  Home,
  FileText,
  Globe,
  Shield,
  MessageSquare,
  BarChart3,
  TrendingUp,
  FileCheck,
  CreditCard,
  UserCircle,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

interface SidebarProps {
  className?: string
}

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [isPaymentExpanded, setIsPaymentExpanded] = useState(true)
  const [isSettingsExpanded, setIsSettingsExpanded] = useState(true)

  const isActive = (path: string) => pathname === path
  const isPaymentActive = pathname.startsWith("/payment") || pathname === "/payments"
  const isSettingsActive = pathname.startsWith("/settings") || pathname.startsWith("/account")

  return (
    <aside className={`w-64 bg-white border-r border-gray-200 min-h-screen hidden md:block ${className}`}>
      {/* Logo Section */}
      <div className="p-4 border-b border-gray-200">
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
          <span className="text-lg font-medium text-gray-700">Google AdSense</span>
        </div>
      </div>

      <nav className="p-4">
        <div className="space-y-1">
          <Link
            href="/"
            className={`px-3 py-2 rounded-lg flex items-center gap-3 transition-colors ${
              isActive("/") ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Home className="h-5 w-5" />
            <span>Home page</span>
          </Link>

          <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer transition-colors">
            <FileText className="h-5 w-5" />
            <span>Advertisement</span>
          </div>

          <Link
            href="/sites"
            className={`px-3 py-2 rounded-lg flex items-center gap-3 transition-colors ${
              isActive("/sites") ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Globe className="h-5 w-5" />
            <span>Site</span>
          </Link>

          {/* Separator */}
          <div className="border-t border-gray-200 my-2"></div>

          <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer transition-colors">
            <MessageSquare className="h-5 w-5" />
            <span>Privacy & messaging</span>
          </div>

          <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer transition-colors">
            <Shield className="h-5 w-5" />
            <span>Brand security</span>
          </div>

          <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer transition-colors">
            <BarChart3 className="h-5 w-5" />
            <span>Report</span>
          </div>

          <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer transition-colors">
            <TrendingUp className="h-5 w-5" />
            <span>Optimization</span>
          </div>

          <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer transition-colors">
            <FileCheck className="h-5 w-5" />
            <span>Policy center</span>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-200 my-2"></div>

          {/* Payment Section - Collapsible */}
          <Button
            variant="ghost"
            onClick={() => setIsPaymentExpanded(!isPaymentExpanded)}
            className={`w-full justify-start px-3 py-2 h-auto font-normal transition-colors ${
              isPaymentActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {isPaymentExpanded ? <ChevronDown className="h-4 w-4 mr-2" /> : <ChevronRight className="h-4 w-4 mr-2" />}
            <CreditCard className="h-5 w-5 mr-3" />
            <span>Payment</span>
          </Button>

          {/* Payment Sub-items */}
          <div
            className={`ml-6 space-y-1 overflow-hidden transition-all duration-200 ${
              isPaymentExpanded ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <Link
              href="/payments"
              className={`px-3 py-2 rounded-lg flex items-center gap-3 text-sm transition-colors ${
                isActive("/payments") || isActive("/payment-info")
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  isActive("/payments") || isActive("/payment-info") ? "bg-blue-500" : "bg-gray-400"
                }`}
              ></div>
              <span>Payment info</span>
            </Link>

            <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer text-sm transition-colors">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span>Verification check</span>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-200 my-2"></div>

          <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer transition-colors">
            <UserCircle className="h-5 w-5" />
            <span>Account</span>
          </div>

          {/* Settings Section - Collapsible */}
          <Button
            variant="ghost"
            onClick={() => setIsSettingsExpanded(!isSettingsExpanded)}
            className={`w-full justify-start px-3 py-2 h-auto font-normal transition-colors ${
              isSettingsActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {isSettingsExpanded ? <ChevronDown className="h-4 w-4 mr-2" /> : <ChevronRight className="h-4 w-4 mr-2" />}
            <Settings className="h-5 w-5 mr-3" />
            <span>Settings</span>
          </Button>

          {/* Settings Sub-items */}
          <div
            className={`ml-6 space-y-1 overflow-hidden transition-all duration-200 ${
              isSettingsExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer text-sm transition-colors">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span>Account information</span>
            </div>

            <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer text-sm transition-colors">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span>Personal settings</span>
            </div>

            <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer text-sm transition-colors">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span>Access and authorization</span>
            </div>
          </div>

          <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer transition-colors">
            <FileText className="h-5 w-5" />
            <span>Input</span>
          </div>
        </div>
      </nav>

      <div className="absolute bottom-4 left-4 text-xs text-gray-500">
        <div className="flex gap-2">
          <span>Google</span>
          <span>Privacy</span>
          <span>Condition</span>
        </div>
      </div>
    </aside>
  )
}
