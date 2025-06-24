import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, BookOpen, Users } from "lucide-react"
import PhotoGallery from "@/components/photo-gallery"

export default function SeminarsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Educational Seminars</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Expand your knowledge with expert-led seminars covering all aspects of German Shepherd care, training, and
              breeding.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Seminars */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Seminars</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Canine Structure & Movement</CardTitle>
                <CardDescription>February 8, 2025 • 10:00 AM - 4:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive seminar on German Shepherd structure, gait analysis, and how anatomy affects
                  performance. Led by renowned breed expert.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Registration Form
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Seminar Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Puppy Development Workshop</CardTitle>
                <CardDescription>April 5, 2025 • 9:00 AM - 3:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn about critical periods in puppy development, early socialization, and setting your puppy up for
                  success in life.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Registration Form
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Workshop Outline
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
            title="Seminar Gallery"
            photos={[
              {
                id: "1",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Expert presenter teaching",
                caption: "Renowned expert presenting on German Shepherd genetics",
              },
              {
                id: "2",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Hands-on learning session",
                caption: "Hands-on learning about canine structure",
              },
              {
                id: "3",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Group discussion",
                caption: "Interactive group discussion and Q&A",
              },
              {
                id: "4",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Live demonstration",
                caption: "Live demonstration with German Shepherd models",
              },
              {
                id: "5",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Note-taking participants",
                caption: "Engaged participants taking detailed notes",
              },
              {
                id: "6",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Practical exercise",
                caption: "Practical exercise evaluating movement",
              },
              {
                id: "7",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Seminar materials",
                caption: "Comprehensive seminar materials and handouts",
              },
              {
                id: "8",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Networking break",
                caption: "Networking and discussion during break",
              },
              {
                id: "9",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Certificate presentation",
                caption: "Certificate presentation to seminar graduates",
              },
            ]}
          />
        </div>
      </section>

      {/* Past Seminars */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Past Seminars</h2>
            <p className="text-lg text-gray-600">Resources from our previous educational events</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Canine Nutrition</CardTitle>
                <CardDescription>November 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Comprehensive guide to feeding German Shepherds at all life stages.
                </p>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Materials
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Behavioral Training</CardTitle>
                <CardDescription>September 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Advanced behavioral modification techniques for German Shepherds.</p>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Materials
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Health Screening</CardTitle>
                <CardDescription>July 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Understanding health testing and genetic screening for breeding.</p>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Materials
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600 mb-3" />
                <CardTitle>Educational Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our seminars cover a wide range of topics important to German Shepherd enthusiasts.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Breed-specific health and genetics</li>
                  <li>Training and behavior modification</li>
                  <li>Structure and movement analysis</li>
                  <li>Breeding and puppy development</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-3" />
                <CardTitle>Expert Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We bring in top experts from around the country to share their knowledge.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Renowned breed judges and experts</li>
                  <li>Professional trainers and behaviorists</li>
                  <li>Veterinarians specializing in German Shepherds</li>
                  <li>Successful breeders and exhibitors</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
