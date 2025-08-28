"use client"

import type React from "react"

import { useState, useEffect } from "react"
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
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathname = usePathname()
  const [isPaymentExpanded, setIsPaymentExpanded] = useState(true)
  const [isSettingsExpanded, setIsSettingsExpanded] = useState(true)

  const isActive = (path: string) => pathname === path
  const isPaymentActive = pathname.startsWith("/payment") || pathname === "/payments"
  const isSettingsActive = pathname.startsWith("/settings") || pathname.startsWith("/account")

  // Close sidebar when route changes
  useEffect(() => {
    if (isOpen) {
      onClose()
    }
  }, [pathname])

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
    } else {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onClose()
  }

  const handleSidebarClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()
  }

  const handleLinkClick = () => {
    setTimeout(() => onClose(), 100)
  }

  const togglePayment = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsPaymentExpanded(!isPaymentExpanded)
  }

  const toggleSettings = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsSettingsExpanded(!isSettingsExpanded)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={handleBackdropClick}
        onTouchEnd={handleBackdropClick}
        style={{ touchAction: "none" }}
      />

      {/* Mobile Sidebar */}
      <aside
        className="fixed top-0 left-0 h-full w-80 bg-white z-50 md:hidden shadow-2xl"
        onClick={handleSidebarClick}
        onTouchEnd={handleSidebarClick}
        style={{ touchAction: "pan-y" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
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
            <span className="text-lg font-medium text-gray-700">Home</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2 hover:bg-gray-100 active:bg-gray-200"
            style={{ touchAction: "manipulation" }}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4" style={{ touchAction: "pan-y" }}>
          <div className="space-y-1">
            <Link
              href="/"
              onClick={handleLinkClick}
              className={`px-4 py-3 rounded-lg flex items-center gap-3 transition-colors text-sm active:bg-gray-200 ${
                isActive("/") ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`}
              style={{ touchAction: "manipulation" }}
            >
              <Home className="h-5 w-5" />
              <span>Home page</span>
            </Link>

            <div className="px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg flex items-center gap-3 cursor-pointer transition-colors text-sm">
              <FileText className="h-5 w-5" />
              <span>Advertisement</span>
            </div>

            <Link
              href="/sites"
              onClick={handleLinkClick}
              className={`px-4 py-3 rounded-lg flex items-center gap-3 transition-colors text-sm active:bg-gray-200 ${
                isActive("/sites") ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`}
              style={{ touchAction: "manipulation" }}
            >
              <Globe className="h-5 w-5" />
              <span>Site</span>
            </Link>

            {/* Separator */}
            <div className="border-t border-gray-200 my-3"></div>

            <div className="px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg flex items-center gap-3 cursor-pointer transition-colors text-sm">
              <MessageSquare className="h-5 w-5" />
              <span>Privacy & messaging</span>
            </div>

            <div className="px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg flex items-center gap-3 cursor-pointer transition-colors text-sm">
              <Shield className="h-5 w-5" />
              <span>Brand security</span>
            </div>

            <div className="px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg flex items-center gap-3 cursor-pointer transition-colors text-sm">
              <BarChart3 className="h-5 w-5" />
              <span>Report</span>
            </div>

            <div className="px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg flex items-center gap-3 cursor-pointer transition-colors text-sm">
              <TrendingUp className="h-5 w-5" />
              <span>Optimization</span>
            </div>

            <div className="px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg flex items-center gap-3 cursor-pointer transition-colors text-sm">
              <FileCheck className="h-5 w-5" />
              <span>Policy center</span>
            </div>

            {/* Separator */}
            <div className="border-t border-gray-200 my-3"></div>

            {/* Payment Section - Collapsible */}
            <button
              onClick={togglePayment}
              onTouchEnd={togglePayment}
              className={`w-full justify-start px-4 py-3 rounded-lg flex items-center gap-3 transition-colors text-sm active:bg-gray-200 ${
                isPaymentActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`}
              style={{ touchAction: "manipulation" }}
            >
              {isPaymentExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              <CreditCard className="h-5 w-5 ml-1" />
              <span className="ml-2">Payment</span>
            </button>

            {/* Payment Sub-items */}
            {isPaymentExpanded && (
              <div className="ml-6 space-y-1">
                <Link
                  href="/payments"
                  onClick={handleLinkClick}
                  className={`px-4 py-2 rounded-lg flex items-center gap-3 text-sm transition-colors active:bg-gray-200 ${
                    isActive("/payments") || isActive("/payment-info")
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  style={{ touchAction: "manipulation" }}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isActive("/payments") || isActive("/payment-info") ? "bg-blue-500" : "bg-gray-400"
                    }`}
                  ></div>
                  <span>Payment info</span>
                </Link>

                <div className="px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg flex items-center gap-3 cursor-pointer text-sm transition-colors">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Verification check</span>
                </div>
              </div>
            )}

            {/* Separator */}
            <div className="border-t border-gray-200 my-3"></div>

            <div className="px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg flex items-center gap-3 cursor-pointer transition-colors text-sm">
              <UserCircle className="h-5 w-5" />
              <span>Account</span>
            </div>

            {/* Settings Section - Collapsible */}
            <button
              onClick={toggleSettings}
              onTouchEnd={toggleSettings}
              className={`w-full justify-start px-4 py-3 rounded-lg flex items-center gap-3 transition-colors text-sm active:bg-gray-200 ${
                isSettingsActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`}
              style={{ touchAction: "manipulation" }}
            >
              {isSettingsExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              <Settings className="h-5 w-5 ml-1" />
              <span className="ml-2">Settings</span>
            </button>

            {/* Settings Sub-items */}
            {isSettingsExpanded && (
              <div className="ml-6 space-y-1">
                <div className="px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg flex items-center gap-3 cursor-pointer text-sm transition-colors">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Account information</span>
                </div>

                <div className="px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg flex items-center gap-3 cursor-pointer text-sm transition-colors">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Personal settings</span>
                </div>

                <div className="px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg flex items-center gap-3 cursor-pointer text-sm transition-colors">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Access and authorization</span>
                </div>
              </div>
            )}

            <div className="px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg flex items-center gap-3 cursor-pointer transition-colors text-sm">
              <FileText className="h-5 w-5" />
              <span>Input</span>
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-4 text-xs text-gray-500">
            <span>Google</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </aside>
    </>
  )
}
