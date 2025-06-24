import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Target, Award } from "lucide-react"
import PhotoGallery from "@/components/photo-gallery"

export default function ObedienceRallyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Obedience & Rally</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Showcase the intelligence and trainability of German Shepherds through precision obedience and fun rally
              competitions.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Spring Obedience Trial</CardTitle>
                <CardDescription>March 22, 2025 • 8:00 AM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  AKC Obedience trial featuring Novice through Utility levels. Perfect for teams looking to earn their
                  obedience titles.
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
                <CardTitle className="text-blue-600">Rally Fun Day</CardTitle>
                <CardDescription>June 14, 2025 • 9:00 AM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Informal rally practice and fun match. Great for beginners and a relaxed way to practice rally skills.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Information
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
            title="Obedience & Rally Gallery"
            photos={[
              {
                id: "1",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Perfect heel position",
                caption: "German Shepherd in perfect heel position",
              },
              {
                id: "2",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Rally course navigation",
                caption: "Team navigating rally course with enthusiasm",
              },
              {
                id: "3",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Utility retrieve exercise",
                caption: "Utility level retrieve over high jump",
              },
              {
                id: "4",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Group stay exercise",
                caption: "Group long down stay exercise",
              },
              {
                id: "5",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Directed jumping",
                caption: "Utility directed jumping exercise",
              },
              {
                id: "6",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Rally sign work",
                caption: "Handler and dog working rally signs",
              },
              {
                id: "7",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Novice obedience",
                caption: "Novice obedience figure 8 exercise",
              },
              {
                id: "8",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Awards presentation",
                caption: "High in Trial award presentation",
              },
              {
                id: "9",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Training class",
                caption: "Obedience training class in session",
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
                <Target className="h-8 w-8 text-blue-600 mb-3" />
                <CardTitle>Obedience Competition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  AKC Obedience tests the dog's ability to perform specific exercises with precision and accuracy.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Novice: Basic heeling, stays, recall</li>
                  <li>Open: Off-leash work, jumps, retrieves</li>
                  <li>Utility: Advanced exercises, scent discrimination</li>
                  <li>Scores from 170-200, with 170 qualifying</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-blue-600 mb-3" />
                <CardTitle>Rally Competition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Rally combines obedience with a course of numbered signs that guide the team through exercises.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Novice: On-leash course work</li>
                  <li>Advanced: Off-leash with jump</li>
                  <li>Excellent: More complex exercises</li>
                  <li>Master: Challenging course designs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
