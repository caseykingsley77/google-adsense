import { MoreHorizontal, Star, TrendingDown, TrendingUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import WarningBanner from "@/components/warning-banner"

export default function GoogleAdSenseDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Home page" />

      <div className="flex">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-3 sm:p-6">
          <WarningBanner />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {/* Earnings Estimate Card */}
            <Card className="lg:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardHeader className="flex flex-row items-center justify-between pb-3 sm:pb-6">
                <CardTitle className="text-base sm:text-lg font-medium">Earnings estimate</CardTitle>
                <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800 p-1 sm:p-2">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div>
                    <div className="text-xs sm:text-sm opacity-90 mb-1">Today so far</div>
                    <div className="text-lg sm:text-2xl font-bold">US$0.01</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm opacity-90 mb-1">Yesterday</div>
                    <div className="text-lg sm:text-2xl font-bold">US$0.29</div>
                    <div className="text-xs opacity-75 flex items-center gap-1">
                      <TrendingDown className="h-3 w-3" />
                      <span>US$4,08 (-93%)</span>
                    </div>
                    <div className="text-xs opacity-75 hidden sm:block">vs same day last week</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm opacity-90 mb-1">Last 7 days</div>
                    <div className="text-lg sm:text-2xl font-bold">US$7.75</div>
                    <div className="text-xs opacity-75 flex items-center gap-1">
                      <TrendingDown className="h-3 w-3" />
                      <span>US$30,27 (-80%)</span>
                    </div>
                    <div className="text-xs opacity-75 hidden sm:block">vs previous 7 days</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm opacity-90 mb-1">This month</div>
                    <div className="text-lg sm:text-2xl font-bold">US$20.10</div>
                    <div className="text-xs opacity-75 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>+US$20,10</span>
                    </div>
                    <div className="text-xs opacity-75 hidden sm:block">vs same period last year</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Balance Card */}
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardHeader className="flex flex-row items-center justify-between pb-3 sm:pb-6">
                <CardTitle className="text-base sm:text-lg font-medium">Balance</CardTitle>
                <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800 p-1 sm:p-2">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl sm:text-3xl font-bold mb-2">$247.01</div>
                <div className="text-xs sm:text-sm opacity-90">Last payment</div>
                <div className="text-xs sm:text-sm opacity-75">US$0.00</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Performance Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-3 sm:pb-6">
                <div>
                  <CardTitle className="text-base sm:text-lg font-medium text-gray-800">Performance</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs sm:text-sm text-gray-600">Last 7 days vs previous 7 days</span>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="p-1 sm:p-2">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div>
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Page views</div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-800">2,59 rb</div>
                    <div className="text-xs sm:text-sm text-red-600 flex items-center gap-1">
                      <TrendingDown className="h-3 w-3" />
                      <span>US$3.15 (-55%)</span>
                    </div>
                    <div className="mt-2">
                      <svg className="w-full h-6 sm:h-8" viewBox="0 0 100 30">
                        <path d="M0,20 Q25,15 50,18 T100,16" stroke="#3b82f6" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Page RPM</div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-800">US$2.99</div>
                    <div className="text-xs sm:text-sm text-red-600 flex items-center gap-1">
                      <TrendingDown className="h-3 w-3" />
                      <span>-US$3.64 (-55%)</span>
                    </div>
                    <div className="mt-2">
                      <svg className="w-full h-6 sm:h-8" viewBox="0 0 100 30">
                        <path d="M0,18 Q25,22 50,20 T100,19" stroke="#3b82f6" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Impressions</div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-800">US$5.41</div>
                    <div className="text-xs sm:text-sm text-red-600 flex items-center gap-1">
                      <TrendingDown className="h-3 w-3" />
                      <span>US$4.9 (-48%)</span>
                    </div>
                    <div className="mt-2">
                      <svg className="w-full h-6 sm:h-8" viewBox="0 0 100 30">
                        <path d="M0,16 Q25,20 50,18 T100,22" stroke="#3b82f6" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
                  <div>
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Clicks</div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-800">147</div>
                    <div className="text-xs sm:text-sm text-red-600 flex items-center gap-1">
                      <TrendingDown className="h-3 w-3" />
                      <span>-163 (-53%)</span>
                    </div>
                    <div className="mt-2">
                      <svg className="w-full h-6 sm:h-8" viewBox="0 0 100 30">
                        <path d="M0,22 Q25,18 50,20 T100,16" stroke="#3b82f6" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">CPC</div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-800">US$0,05</div>
                    <div className="text-xs sm:text-sm text-red-600 flex items-center gap-1">
                      <TrendingDown className="h-3 w-3" />
                      <span>-US$0.07 (-58%)</span>
                    </div>
                    <div className="mt-2">
                      <svg className="w-full h-6 sm:h-8" viewBox="0 0 100 30">
                        <path d="M0,20 Q25,16 50,18 T100,14" stroke="#3b82f6" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Page CTR</div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-800">5,67%</div>
                    <div className="text-xs sm:text-sm text-green-600 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>+0,27 pp (+5%)</span>
                    </div>
                    <div className="mt-2">
                      <svg className="w-full h-6 sm:h-8" viewBox="0 0 100 30">
                        <path d="M0,24 Q25,20 50,16 T100,12" stroke="#3b82f6" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                    View reports
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sites Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-3 sm:pb-6">
                <div>
                  <CardTitle className="text-base sm:text-lg font-medium text-gray-800">Sites</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs sm:text-sm text-gray-600">Last 7 days</span>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="p-1 sm:p-2">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 border-b pb-2">
                    <div className="flex gap-2 sm:gap-4">
                      <span>Earnings...</span>
                      <span>Visits...</span>
                      <span>Clicks</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-800 truncate mr-2">cinemania.jelmi.xyz</span>
                      <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm flex-shrink-0">
                        <span className="bg-blue-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                          US$3,76
                        </span>
                        <span className="text-gray-600 w-8 sm:w-auto text-right">854</span>
                        <span className="text-gray-600 w-6 sm:w-auto text-right">41</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-800 truncate mr-2">movie.jelmi.xyz</span>
                      <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm flex-shrink-0">
                        <span className="bg-blue-400 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                          US$3,20
                        </span>
                        <span className="text-gray-600 w-8 sm:w-auto text-right">1,48 rb</span>
                        <span className="text-gray-600 w-6 sm:w-auto text-right">89</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-800 truncate mr-2">jelmi.xyz</span>
                      <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm flex-shrink-0">
                        <span className="bg-blue-300 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                          US$0,79
                        </span>
                        <span className="text-gray-600 w-8 sm:w-auto text-right">261</span>
                        <span className="text-gray-600 w-6 sm:w-auto text-right">17</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                      View reports
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Card */}
          <Card className="mt-4 sm:mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="text-sm sm:text-lg">We think you'll like this card</span>
                </div>
                <div className="w-24 h-16 sm:w-32 sm:h-20 relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg opacity-80"></div>
                  <div className="absolute top-2 left-2 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full opacity-60"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full opacity-70"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-blue-300 rounded-full opacity-50"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
