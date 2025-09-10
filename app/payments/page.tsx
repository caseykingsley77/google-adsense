import { Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import WarningBanner from "@/components/warning-banner"

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Payments info" />

      <div className="flex">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <WarningBanner />

          {/* Payment Account Section */}
          <div className="mb-6">
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">PAYMENT HISTORY</div>
            <div className="text-sm text-blue-600">AdSense (United States)</div>
          </div>

          {/* Payments Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-medium text-gray-800 mb-6">Payments</h1>

            {/* Your Earnings Card */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h2 className="text-lg font-medium text-gray-800 mb-2">Your Payment</h2>
                    
                  </div>
                  
                </div>

                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>

                
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Transactions Section */}
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">Transactions</h3>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center py-2">
                    <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                      1–22 Jul 2025
                    </Button>
                    <span className="text-sm font-medium text-gray-800">US$247.01</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                      1–30 Jun 2025
                    </Button>
                    <span className="text-sm font-medium text-gray-800">US$247.01</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                      1–31 May 2025
                    </Button>
                    <span className="text-sm font-medium text-gray-800">US$39.49</span>
                  </div>
                </div>

                <Button variant="link" className="text-blue-600 p-0 h-auto">
                  View transactions
                </Button>
              </div>

              {/* How You Get Paid Section */}
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">Payment must be confirmed before withdrawal</h3>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-800 mb-1">Bank transfer to bank account ••••672</div>
                    <div className="text-sm text-gray-600">Casey Kingsley Ezennia</div>
                  </div>
                </div>

                <Button variant="link" className="text-blue-600 p-0 h-auto">
                  Manage payment methods
                </Button>
              </div>
            </div>

            {/* Settings Section */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Settings</h3>

              <div className="space-y-3 mb-4">
                <div className="text-sm text-gray-600">AdSense pub-9480588368031855</div>
                <div className="text-sm font-medium text-gray-800">Casey Kingsley Ezennia</div>
                <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                  1 user
                </Button>
              </div>

              <Button variant="link" className="text-blue-600 p-0 h-auto">
                Manage settings
              </Button>
            </div>
          </div>

          {/* Disconnected Button */}
          <div className="fixed bottom-6 right-6">
            <Button variant="outline" className="bg-white">
              Disconnected
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
