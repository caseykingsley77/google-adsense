import {
  Plus,
  Search,
  Filter,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import WarningBanner from "@/components/warning-banner"

export default function SitesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Sites" />

      <div className="flex">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <WarningBanner />

          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1">
              <h1 className="text-2xl font-medium text-gray-800 mb-2">Manage your sites</h1>
              <p className="text-gray-600">
                Add sites that you want to monetise with AdSense.{" "}
                <Button variant="link" className="text-blue-600 p-0 h-auto">
                  Learn more about monetising your site
                </Button>
              </p>
            </div>
            <div className="flex-shrink-0 ml-8">
              <div className="w-32 h-24 relative">
                <div className="absolute inset-0 bg-gray-200 rounded-lg"></div>
                <div className="absolute top-2 left-2 w-8 h-6 bg-gray-400 rounded"></div>
                <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded"></div>
                <div className="absolute bottom-2 left-2 w-12 h-4 bg-yellow-400 rounded"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* New Site Button */}
          <div className="mb-6">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New site
            </Button>
          </div>

          {/* Search and Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search" className="pl-10" />
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-1 border-b border-gray-200">
                <Button variant="ghost" className="text-gray-600 border-b-2 border-transparent hover:border-gray-300">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Button variant="ghost" className="text-blue-600 border-b-2 border-blue-600">
                  Ready
                </Button>
                <Button variant="ghost" className="text-gray-600 border-b-2 border-transparent hover:border-gray-300">
                  Getting ready
                </Button>
                <Button variant="ghost" className="text-gray-600 border-b-2 border-transparent hover:border-gray-300">
                  Requires review
                </Button>
                <Button variant="ghost" className="text-gray-600 border-b-2 border-transparent hover:border-gray-300">
                  Needs attention
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Sites Table */}
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Site URL</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">
                        Approval status
                        <HelpCircle className="inline h-4 w-4 ml-1 text-gray-400" />
                      </th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Status details</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">
                        Ads.txt status
                        <HelpCircle className="inline h-4 w-4 ml-1 text-gray-400" />
                      </th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">
                        Last updated
                        <HelpCircle className="inline h-4 w-4 ml-1 text-gray-400" />
                      </th>
                      <th className="w-12"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <Button variant="link" className="text-blue-600 p-0 h-auto">
                          jelmi.xyz
                        </Button>
                      </td>
                      <td className="py-4 px-6">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Ready
                        </Badge>
                      </td>
                      <td className="py-4 px-6 text-gray-600">—</td>
                      <td className="py-4 px-6">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Authorised
                        </Badge>
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        <div>31 Jan 2025</div>
                        <div className="text-xs text-gray-500">01:07 | GMT-5</div>
                      </td>
                      <td className="py-4 px-6">
                        <Button variant="ghost" size="sm" className="p-2">
                          <Trash2 className="h-4 w-4 text-gray-400" />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">Go to page</span>
                  <Input className="w-16 h-8" defaultValue="1" />
                  <span className="text-sm text-gray-600">of 1</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Show rows</span>
                    <Select defaultValue="50">
                      <SelectTrigger className="w-16 h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25">25</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">1 - 1 of 1</span>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" className="p-2" disabled>
                      <ChevronsLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2" disabled>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2" disabled>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2" disabled>
                      <ChevronsRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
