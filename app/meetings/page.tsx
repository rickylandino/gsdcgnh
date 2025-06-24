import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, BookOpen, Award } from "lucide-react"
import PhotoGallery from "@/components/photo-gallery"

export default function MeetingsPage() {
  const upcomingMeetings = [
    {
      date: "January 16, 2025",
      time: "7:00 PM - 9:00 PM",
      topic: "Advanced Training Techniques",
      speaker: "Sarah Johnson, Professional Dog Trainer",
      description: "Learn advanced obedience and behavioral training methods for German Shepherds.",
    },
    {
      date: "February 20, 2025",
      time: "7:00 PM - 9:00 PM",
      topic: "Health and Nutrition",
      speaker: "Dr. Michael Chen, DVM",
      description: "Understanding German Shepherd health issues and optimal nutrition strategies.",
    },
    {
      date: "March 20, 2025",
      time: "7:00 PM - 9:00 PM",
      topic: "Scent Work Fundamentals",
      speaker: "Lisa Rodriguez, Certified Scent Work Instructor",
      description: "Introduction to scent work training and competition preparation.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Monthly Meetings</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join us every third Thursday of the month for educational presentations, training tips, and community
              discussions about German Shepherds.
            </p>
          </div>
        </div>
      </section>

      {/* Meeting Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>When</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Third Thursday of every month</p>
                <p className="text-sm text-gray-500 mt-2">7:00 PM - 9:00 PM</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Where</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Community Center</p>
                <p className="text-sm text-gray-500 mt-2">123 Main Street, New Haven, CT</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Who</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Members & Guests Welcome</p>
                <p className="text-sm text-gray-500 mt-2">Contact us to attend as a guest</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Meetings */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Meetings</h2>
            <p className="text-lg text-gray-600">Mark your calendar for these exciting presentations</p>
          </div>

          <div className="space-y-6">
            {upcomingMeetings.map((meeting, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-blue-600 text-xl">{meeting.topic}</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700 mt-1">
                        {meeting.speaker}
                      </CardDescription>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-medium">{meeting.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{meeting.time}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{meeting.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-lg text-gray-600">
              Our meetings are informative, friendly, and welcoming to all experience levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600 mb-3" />
                <CardTitle>Educational Presentations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert speakers cover topics ranging from training and health to breeding and showing. Each
                  presentation includes time for questions and discussion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-3" />
                <CardTitle>Community Discussion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Share experiences, ask questions, and learn from fellow German Shepherd enthusiasts. Our members love
                  to help and share their knowledge.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-blue-600 mb-3" />
                <CardTitle>Club Business</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Stay informed about upcoming events, trials, and club activities. Learn about volunteer opportunities
                  and ways to get more involved.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meeting Photos */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <PhotoGallery
            title="Meeting Highlights"
            columns={4}
            photos={[
              {
                id: "1",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Guest speaker presentation",
                caption: "Expert trainer sharing advanced techniques",
              },
              {
                id: "2",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Members discussing training",
                caption: "Members sharing training experiences",
              },
              {
                id: "3",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Q&A session",
                caption: "Interactive Q&A with veterinarian",
              },
              {
                id: "4",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Meeting refreshments",
                caption: "Socializing over refreshments after meeting",
              },
              {
                id: "5",
                src: "/placeholder.svg?height=400&width=400",
                alt: "New member welcome",
                caption: "Welcoming new members to the club",
              },
              {
                id: "6",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Training demonstration",
                caption: "Live training demonstration",
              },
              {
                id: "7",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Club business meeting",
                caption: "Planning upcoming events and activities",
              },
              {
                id: "8",
                src: "/placeholder.svg?height=400&width=400",
                alt: "Member achievements",
                caption: "Celebrating member achievements",
              },
            ]}
          />
        </div>
      </section>

      {/* Meeting Guidelines */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meeting Guidelines</h2>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">For First-Time Visitors</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Please contact us in advance so we can welcome you properly</li>
                    <li>Arrive a few minutes early to introduce yourself</li>
                    <li>Feel free to ask questions - we&apos;re here to help!</li>
                    <li>No need to bring your dog unless it&apos;s a special training session</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">What to Bring</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Notebook and pen for taking notes</li>
                    <li>Photos of your German Shepherd(s) to share</li>
                    <li>Any questions you&apos;d like to ask the group</li>
                    <li>A positive attitude and willingness to learn</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Meeting Etiquette</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Please silence cell phones during presentations</li>
                    <li>Respectful discussion and questions are always welcome</li>
                    <li>Stay for refreshments and socializing after the formal meeting</li>
                    <li>Help with setup or cleanup if you&apos;re able</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us at Our Next Meeting</h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you&apos;re a seasoned German Shepherd owner or just getting started, our meetings offer valuable
            insights and great community connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="/contact">Contact Us to Attend</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <a href="/membership">Become a Member</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
