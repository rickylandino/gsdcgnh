import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function OfficersPage() {
  const officers = [
    {
      name: "Lyn Chernak",
      position: "President"
    },
    {
      name: "John Vaught",
      position: "Vice President"
    },
    {
      name: "Karla Trombetto",
      position: "Corresponding Secretary",
      email: "Ktrombetto@hotmail.com"
    },
    {
      name: "Pam Skorupski",
      position: "Treasurer"
    },
    {
      name: "Laura Chernak",
      position: "Recording Secretary",
    },
  ]

  const boardMembers = [
    {
      name: "Ralph Ciocci"
    },
    {
      name: "Linda Ciocci"
    },
    {
      name: "Nancy Vaught"
    }
  ]

  const committees = [
    {
      name: "Membership Chairperson",
      chair: "Karla Trombetto",
      email: "Ktrombetto@hotmail.com"
    },
    {
      name: "Rescue Advocate",
      chair: "Stefanie Mount",
      email: "mrsm903@verizon.net"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Officers & Board</h1>
          </div>

          {/* Officers Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Officers</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {officers.map((officer, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-900">{officer.name}</CardTitle>
                    <p className="text-gray-600 font-semibold">{officer.position}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                        {officer.email && 
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${officer.email}`} className="hover:text-gray-800 transition-colors">
                          {officer.email}
                        </a>
                      </div>
                    }
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Board Members Section */}
          <div className="mb-16" id="board">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Board Members</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {boardMembers.map((member, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-900 text-lg">{member.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Committees Section */}
          <div id="committees">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Committee Chair / Other</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {committees.map((committee, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-900 text-lg">{committee.name}</CardTitle>
                    <p className="text-gray-600">Chair: {committee.chair}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Mail className="h-4 w-4" />
                      <a href={`mailto:${committee.email}`} className="hover:text-gray-800 transition-colors">
                        {committee.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
