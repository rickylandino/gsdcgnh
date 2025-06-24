import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Search, Trophy } from "lucide-react"
import PhotoGallery from "@/components/photo-gallery"

export default function ScentWorkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Scent Work Trials</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tap into your German Shepherd's natural scenting abilities with our AKC Scent Work trials held twice
              yearly.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Trials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Scent Work Trials</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Spring Scent Work Trial</CardTitle>
                <CardDescription>April 12-13, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Two-day AKC Scent Work trial featuring Novice through Excellent levels in all four elements:
                  Containers, Interior, Exterior, and Buried.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Premium List
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Entry Form
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Fall Scent Work Trial</CardTitle>
                <CardDescription>October 18-19, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our fall trial includes special Detective classes and Master level competitions. Perfect for
                  experienced teams looking for a challenge.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Premium List
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Entry Form
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <PhotoGallery
            title="Scent Work Trial Gallery"
            photos={[
              {
                id: "1",
                src: "/placeholder.svg?height=400&width=400",
                alt: "German Shepherd searching containers",
                caption: "Focused German Shepherd searching container line",
              },
              {
                id: "2",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Interior search",
                caption: "Interior search in progress",
              },
              {
                id: "3",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Exterior search area",
                caption: "Exterior search area setup",
              },
              {
                id: "4",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Buried search",
                caption: "Dog working buried search element",
              },
              {
                id: "5",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Handler and dog team",
                caption: "Successful handler and dog team",
              },
              {
                id: "6",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Judge observing search",
                caption: "Judge carefully observing the search",
              },
              {
                id: "7",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Alert indication",
                caption: "Perfect alert indication at source",
              },
              {
                id: "8",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Trial setup",
                caption: "Professional trial setup and equipment",
              },
              {
                id: "9",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Awards ceremony",
                caption: "Awards ceremony for qualifying teams",
              },
            ]}
          />
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <Search className="h-8 w-8 text-blue-600 mb-3" />
                <CardTitle>About Scent Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  AKC Scent Work is based on the work of professional detection dogs. Dogs search for hidden odors and
                  indicate their location to their handler.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Four search elements: Containers, Interior, Exterior, Buried</li>
                  <li>Three target odors: Birch, Anise, Clove</li>
                  <li>Levels from Novice to Master</li>
                  <li>Detective classes for advanced teams</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trophy className="h-8 w-8 text-blue-600 mb-3" />
                <CardTitle>Training Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We offer training classes and workshops to help you and your German Shepherd get started in scent
                  work.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Beginner scent work classes</li>
                  <li>Advanced training workshops</li>
                  <li>Practice sessions before trials</li>
                  <li>Equipment and odor procurement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
