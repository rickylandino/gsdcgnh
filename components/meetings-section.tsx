import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock } from "lucide-react"

export function MeetingsSection() {
  const meetings = [
    {
      title: "Monthly General Meeting",
      date: "First Tuesday of each month",
      time: "7:00 PM",
      location: "Online via Zoom",
      description:
        "Join us for our monthly club meeting to discuss upcoming events, training opportunities, and club business.",
    },
    {
      title: "Training Workshop",
      date: "Third Saturday of each month",
      time: "10:00 AM - 2:00 PM",
      location: "Rented Training Facility",
      description:
        "Hands-on training sessions covering obedience, agility, and specialized German Shepherd training techniques.",
    },
  ]

  return (
    <section className="py-16 bg-chrome-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-200 mb-4">Club Meetings</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay connected with fellow German Shepherd enthusiasts through our regular meetings and workshops.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {meetings.map((meeting, index) => (
            <Card key={index} className="bg-chrome-800 border-chrome-600">
              <CardHeader>
                <CardTitle className="text-gray-200 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {meeting.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-gray-200">
                  <Clock className="h-4 w-4" />
                  <span>
                    {meeting.date} at {meeting.time}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-200">
                  <MapPin className="h-4 w-4" />
                  <span>{meeting.location}</span>
                </div>
                <p className="text-gray-200">{meeting.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
