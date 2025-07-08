// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Calendar, Clock } from "lucide-react"

// export default function MeetingsPage() {
//   const upcomingMeetings = [
//     {
//       date: "June 13, 2025",
//       time: "7:00 PM - 9:00 PM",
//       topic: "Monthly Meeting - June 13",
//       location: "Virtual",
//       description: "Board Meeting 7:00 to 7:30, General Meeting 7:30 to 9:00",
//     },
//     {
//       date: "April 11, 2025",
//       time: "7:00 PM - 9:00 PM",
//       topic: "Monthly Meeting - April 11",
//       location: "Oxford",
//       description: "Board Meeting 7:00 to 7:30, General Meeting 7:30 to 9:00",
//     }
//   ]

//   return (
//     <div className="bg-gray-50">
//       {/* Hero Section */}
//       <section className=" text-white py-16 relative">
//         <div className="absolute inset-0 chrome-gradient opacity-80" />
//         <div className="container mx-auto px-4 max-w-6xl relative z-10">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Monthly Meetings</h1>
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Meetings */}
//       <section className="py-16 px-4 bg-white">
//         <div className="container mx-auto max-w-6xl">

//           <div className="space-y-6">
//             {upcomingMeetings.map((meeting, index) => (
//               <Card key={index} className="hover:shadow-lg transition-shadow">
//                 <CardHeader>
//                   <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//                     <div>
//                       <CardTitle className="text-blue-600 text-xl">{meeting.topic}</CardTitle>
//                       <CardDescription className="text-lg font-medium text-gray-700 mt-1">
//                         Location: {meeting.location}
//                       </CardDescription>
//                     </div>
//                     <div className="mt-4 md:mt-0 text-right">
//                       <div className="flex items-center text-gray-600 mb-1">
//                         <Calendar className="h-4 w-4 mr-2" />
//                         <span className="font-medium">{meeting.date}</span>
//                       </div>
//                       <div className="flex items-center text-gray-600">
//                         <Clock className="h-4 w-4 mr-2" />
//                         <span>{meeting.time}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600">{meeting.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

      
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"

const today = new Date()
today.setHours(0, 0, 0, 0)

export default function MeetingsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming")

  const allMeetings = [
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

  const upcomingMeetings = allMeetings.filter((meeting) => new Date(meeting.date) >= today)
  const pastMeetings = allMeetings.filter((meeting) => new Date(meeting.date) < today)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const currentMeetings = activeTab === "upcoming" ? upcomingMeetings : pastMeetings

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="text-white py-16 relative">
        <div className="absolute inset-0 chrome-gradient opacity-80" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Monthly Meetings</h1>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg max-w-md">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === "upcoming"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Upcoming ({upcomingMeetings.length})
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === "past"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Past ({pastMeetings.length})
            </button>
          </div>
        </div>
      </section>

      {/* Meetings List */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {currentMeetings.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No {activeTab} meetings
              </h3>
              <p className="text-gray-500">
                {activeTab === "upcoming"
                  ? "Check back later for upcoming meetings."
                  : "No past meetings to display."}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {currentMeetings.map((meeting, index) => (
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
                          <span className="font-medium">{formatDate(meeting.date)}</span>
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
          )}
        </div>
      </section>
    </div>
  )
}