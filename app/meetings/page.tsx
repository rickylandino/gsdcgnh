import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"

export default function MeetingsPage() {
  const upcomingMeetings = [
    {
      date: "June 13, 2025",
      time: "7:00 PM - 9:00 PM",
      topic: "Monthly Meeting - June 13",
      location: "Virtual",
      description: "Board Meeting 7:00 to 7:30, General Meeting 7:30 to 9:00",
    },
    {
      date: "April 11, 2025",
      time: "7:00 PM - 9:00 PM",
      topic: "Monthly Meeting - April 11",
      location: "Oxford",
      description: "Board Meeting 7:00 to 7:30, General Meeting 7:30 to 9:00",
    }
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className=" text-white py-16 relative">
        <div className="absolute inset-0 chrome-gradient opacity-80" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Monthly Meetings</h1>
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
                        Location: {meeting.location}
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

      
    </div>
  )
}
