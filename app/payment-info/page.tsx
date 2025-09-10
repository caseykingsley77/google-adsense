import {
  Menu,
  HelpCircle,
  Bell,
  User,
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
  Building2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function PaymentInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="p-2">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-sm flex items-center justify-center">
                <span className="text-white text-sm font-bold">A</span>
              </div>
              <span className="text-xl text-gray-700">Google AdSense</span>
            </div>
            <span className="text-gray-600 ml-8">Home page</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="p-2">
              <HelpCircle className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Bell className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2 rounded-full bg-blue-500">
              <User className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4">
            <div className="space-y-1">
              <Link
                href="/"
                className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer"
              >
                <Home className="h-5 w-5" />
                <span>Home page</span>
              </Link>

              <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer">
                <FileText className="h-5 w-5" />
                <span>Advertisement</span>
              </div>

              <Link
                href="/sites"
                className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer"
              >
                <Globe className="h-5 w-5" />
                <span>Site</span>
              </Link>

              {/* Separator */}
              <div className="border-t border-gray-200 my-2"></div>

              <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer">
                <MessageSquare className="h-5 w-5" />
                <span>Privacy & messaging</span>
              </div>

              <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer">
                <Shield className="h-5 w-5" />
                <span>Brand security</span>
              </div>

              <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer">
                <BarChart3 className="h-5 w-5" />
                <span>Report</span>
              </div>

              <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer">
                <TrendingUp className="h-5 w-5" />
                <span>Optimization</span>
              </div>

              <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer">
                <FileCheck className="h-5 w-5" />
                <span>Policy center</span>
              </div>

              {/* Separator */}
              <div className="border-t border-gray-200 my-2"></div>

              {/* Payment Section - Expanded */}
              <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer">
                <ChevronDown className="h-4 w-4" />
                <CreditCard className="h-5 w-5" />
                <span>Payment</span>
              </div>

              {/* Payment Sub-items */}
              <div className="ml-6 space-y-1">
                <div className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Payment info</span>
                </div>

                <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer text-sm">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Verification check</span>
                </div>
              </div>

              {/* Separator */}
              <div className="border-t border-gray-200 my-2"></div>

              <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer">
                <UserCircle className="h-5 w-5" />
                <span>Account</span>
              </div>

              {/* Settings Section - Expanded */}
              <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer">
                <ChevronDown className="h-4 w-4" />
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </div>

              {/* Settings Sub-items */}
              <div className="ml-6 space-y-1">
                <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer text-sm">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Account information</span>
                </div>

                <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer text-sm">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Personal settings</span>
                </div>

                <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer text-sm">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Access and authorization</span>
                </div>
              </div>

              <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-3 cursor-pointer">
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

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Warning Banner */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-yellow-800 text-sm">!</span>
              </div>
              <span className="text-yellow-800 text-sm">
                Due to the war in Ukraine, we will be pausing monetization of content that exploits, trivializes, or
                justifies the war.
              </span>
            </div>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
              Closed
            </Button>
          </div>

          {/* Payment Account Section */}
          <div className="mb-6">
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">PAYMENT ACCOUNT</div>
            <div className="text-sm text-gray-700">AdSense (United Kingdom)</div>
          </div>

          {/* Payment Section */}
          <div className="mb-8">
            <h2 className="text-xl font-medium text-gray-800 mb-6">Payments</h2>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Your earnings</h3>
                    <p className="text-sm text-gray-600">
                      Paid monthly when your total reaches at least US$100.00 (your payment threshold)
                    </p>
                  </div>
                  <div className="text-3xl font-bold text-gray-800">US$247,01</div>
                </div>

                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>You've reached 100% of your payment threshold</span>
                  <span>Payment threshold: US$100.00</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Transactions Section */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Transactions</h3>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-blue-600">1–11 Jul 2025</span>
                  <span className="text-sm font-medium text-gray-800">US$247,01</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-blue-600">1–30 Jun 2025</span>
                  <span className="text-sm font-medium text-gray-800">US$247,01</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-blue-600">1–31 Mei 2025</span>
                  <span className="text-sm font-medium text-gray-800">US$39,49</span>
                </div>
              </div>

              <Button variant="link" className="text-blue-600 p-0 h-auto">
                View transactions
              </Button>
            </div>

            {/* Payment Method Section */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">How you receive payments</h3>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-800 mb-1">
                        Bank transfer to bank account ••••672
                      </div>
                      <div className="text-sm text-gray-600">Yuly Andrea Rojas Santoya</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button variant="link" className="text-blue-600 p-0 h-auto mt-4">
                Manage payment methods
              </Button>
            </div>
          </div>

          {/* Settings Section */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Settings</h3>

            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-600">AdSense pub-9480588368031855</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-800">YULY ANDREA ROJAS SANTOYA</div>
              </div>
              <div>
                <Button variant="link" className="text-blue-600 p-0 h-auto">
                  1 user
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
