import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Award, Users } from "lucide-react"
import PhotoGallery from "@/components/photo-gallery"

export default function ConformationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Conformation Shows</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Showcase the beauty, structure, and movement of German Shepherds in our AKC-sanctioned conformation
              events.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Conformation Events</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Spring Specialty Show</CardTitle>
                <CardDescription>May 15, 2025 • 9:00 AM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our annual spring specialty show featuring German Shepherds only. All classes available including
                  puppy, bred-by-exhibitor, and specials.
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
                <CardTitle className="text-blue-600">Fall Fun Match</CardTitle>
                <CardDescription>September 20, 2025 • 10:00 AM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Informal fun match perfect for new exhibitors and young dogs. Great practice opportunity in a relaxed
                  environment.
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
            title="Conformation Show Gallery"
            photos={[
              {
                id: "1",
                src: "/placeholder.svg?height=400&width=400",
                alt: "German Shepherd in show stance",
                caption: "Beautiful German Shepherd in perfect show stance",
              },
              {
                id: "2",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Judge examining dog",
                caption: "Judge examining structure and movement",
              },
              {
                id: "3",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Winners circle",
                caption: "Winners circle at our spring specialty show",
              },
              {
                id: "4",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Best in Show winner",
                caption: "Best in Show winner with proud owner",
              },
              {
                id: "5",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Puppy class competition",
                caption: "Adorable puppies competing in puppy class",
              },
              {
                id: "6",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Stacking practice",
                caption: "Handler practicing stacking technique",
              },
              {
                id: "7",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Ring setup",
                caption: "Professional ring setup for our specialty show",
              },
              {
                id: "8",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Grooming area",
                caption: "Busy grooming area on show day",
              },
              {
                id: "9",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Trophy presentation",
                caption: "Trophy presentation to class winners",
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
                <Award className="h-8 w-8 text-blue-600 mb-3" />
                <CardTitle>What is Conformation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Conformation shows evaluate how closely dogs conform to their breed standard. Judges assess structure,
                  movement, temperament, and overall quality.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Structure and proportions</li>
                  <li>Gait and movement</li>
                  <li>Coat and color</li>
                  <li>Temperament and presentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-3" />
                <CardTitle>Getting Started</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  New to showing? We offer mentorship and training to help you and your German Shepherd succeed in the
                  ring.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Handling classes for beginners</li>
                  <li>Match shows for practice</li>
                  <li>Mentorship program</li>
                  <li>Equipment and grooming tips</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
