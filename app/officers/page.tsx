import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export default function OfficersPage() {
  const officers = [
    {
      name: "Jane Smith",
      position: "President",
      email: "president@gsdcgnh.org",
      phone: "(603) 555-0101",
      bio: "Jane has been involved with German Shepherds for over 20 years and has been leading our club for the past 5 years.",
    },
    {
      name: "John Doe",
      position: "Vice President",
      email: "vp@gsdcgnh.org",
      phone: "(603) 555-0102",
      bio: "John specializes in obedience training and has titled multiple German Shepherds in various competitions.",
    },
    {
      name: "Mary Johnson",
      position: "Secretary",
      email: "secretary@gsdcgnh.org",
      phone: "(603) 555-0103",
      bio: "Mary keeps our club organized and maintains all official records and correspondence.",
    },
    {
      name: "Bob Wilson",
      position: "Treasurer",
      email: "treasurer@gsdcgnh.org",
      phone: "(603) 555-0104",
      bio: "Bob manages our club finances and ensures we stay within budget for all activities.",
    },
  ]

  const boardMembers = [
    {
      name: "Sarah Davis",
      position: "Training Director",
      email: "training@gsdcgnh.org",
      phone: "(603) 555-0105",
    },
    {
      name: "Mike Brown",
      position: "Show Chairman",
      email: "shows@gsdcgnh.org",
      phone: "(603) 555-0106",
    },
    {
      name: "Lisa Anderson",
      position: "Membership Director",
      email: "membership@gsdcgnh.org",
      phone: "(603) 555-0107",
    },
  ]

  const committees = [
    {
      name: "Education Committee",
      chair: "Dr. Patricia Miller",
      email: "education@gsdcgnh.org",
      description: "Organizes educational seminars and breed-specific workshops.",
    },
    {
      name: "Rescue Committee",
      chair: "Tom Garcia",
      email: "rescue@gsdcgnh.org",
      description: "Coordinates German Shepherd rescue and rehoming efforts.",
    },
    {
      name: "Events Committee",
      chair: "Nancy White",
      email: "events@gsdcgnh.org",
      description: "Plans and organizes club social events and fundraisers.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Officers & Board Members</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated volunteers who lead our club and organize our activities.
            </p>
          </div>

          {/* Officers Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Club Officers</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {officers.map((officer, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-900">{officer.name}</CardTitle>
                    <p className="text-gray-600 font-semibold">{officer.position}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600 text-sm">{officer.bio}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${officer.email}`} className="hover:text-gray-800 transition-colors">
                          {officer.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>{officer.phone}</span>
                      </div>
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
                    <p className="text-gray-600">{member.position}</p>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Mail className="h-4 w-4" />
                      <a href={`mailto:${member.email}`} className="hover:text-gray-800 transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Phone className="h-4 w-4" />
                      <span>{member.phone}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Committees Section */}
          <div id="committees">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Committees</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {committees.map((committee, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-900 text-lg">{committee.name}</CardTitle>
                    <p className="text-gray-600">Chair: {committee.chair}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600 text-sm">{committee.description}</p>
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
