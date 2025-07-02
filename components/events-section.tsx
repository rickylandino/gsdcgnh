import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Trophy, Camera } from "lucide-react"
import Link from "next/link"
import { upcomingEvents } from "@/app/events/events"

export function EventsSection() {
  return (
    <section className="py-16 relative">
        <div className="absolute inset-0 chrome-gradient opacity-80" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join us for exciting competitions, training opportunities, and community gatherings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="bg-chrome-900 border-gray-600">
              <CardHeader>
                <CardTitle className="text-gray-200">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-300 text-sm">{event.description}</p>

                {/* <div className="flex gap-2 pt-2">
                  {event.hasResults && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-gray-400 text-gray-200 hover:bg-gray-400 hover:text-black bg-transparent"
                    >
                      <Link href={`/events/${event.id}/results`}>
                        <Trophy className="h-4 w-4 mr-1" />
                        Results
                      </Link>
                    </Button>
                  )}
                  {event.hasPhotos && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-gray-400 text-gray-200 hover:bg-gray-400 hover:text-black bg-transparent"
                    >
                      <Link href={`/events/${event.id}/photos`}>
                        <Camera className="h-4 w-4 mr-1" />
                        Photos
                      </Link>
                    </Button>
                  )}
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
