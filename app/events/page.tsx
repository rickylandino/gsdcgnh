"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ChevronLeft,
  ChevronRight,
  Download,
  History,
  ImageIcon,
  FileText,
} from "lucide-react"
import PhotoGallery from "@/components/photo-gallery"
import { pastEvents, upcomingEvents, Event as EventType, events } from "./events"

const categoryColors = {
  meeting: "bg-blue-100 text-blue-800",
  trial: "bg-green-100 text-green-800",
  seminar: "bg-purple-100 text-purple-800",
  conformation: "bg-orange-100 text-orange-800",
  obedience: "bg-red-100 text-red-800",
}

const categoryLabels = {
  meeting: "Meeting",
  trial: "Scent Work Trials",
  seminar: "Seminar",
  conformation: "Conformation",
  obedience: "Obedience & Rally",
}

const documentTypeLabels = {
  "premium-list": "Premium List",
  "entry-form": "Entry Form",
  results: "Results",
  flyer: "Flyer",
  info: "Information",
  photos: "Photos",
}

const documentTypeIcons = {
  "premium-list": FileText,
  "entry-form": FileText,
  results: FileText,
  flyer: ImageIcon,
  info: FileText,
  photos: ImageIcon,
}

const today = new Date()
today.setHours(0, 0, 0, 0)

export default function EventsPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedCategory, setSelectedCategory] = useState<string>("all")


  const filterEventsByCategory = (eventList: EventType[]) => {
    return selectedCategory === "all" ? eventList : eventList.filter((event) => event.category === selectedCategory)
  }

  const filteredUpcomingEvents = filterEventsByCategory(upcomingEvents)
  const filteredPastEvents = filterEventsByCategory(pastEvents)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    if (!dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
      // If dateString does not have a day, show only month and year
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
    }
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getRelativeDate = (dateString: string) => {
    const eventDate = new Date(dateString)
    const diffTime = eventDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "Today"
    if (diffDays === 1) return "Tomorrow"
    if (diffDays > 0 && diffDays <= 7) return `In ${diffDays} days`
    if (diffDays > 7 && diffDays <= 30) return `In ${Math.ceil(diffDays / 7)} weeks`
    return ""
  }

  const getCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days = []
    const currentDateObj = new Date(startDate)

    for (let i = 0; i < 42; i++) {
      const dayEvents = events.filter((event) => {
        const eventDate = new Date(event.date)
        return eventDate.toDateString() === currentDateObj.toDateString()
      })

      const isPast = currentDateObj < today
      const upcomingDayEvents = dayEvents.filter((event) => new Date(event.date) >= today)
      const pastDayEvents = dayEvents.filter((event) => new Date(event.date) < today)

      days.push({
        date: new Date(currentDateObj),
        isCurrentMonth: currentDateObj.getMonth() === month,
        isToday: currentDateObj.toDateString() === new Date().toDateString(),
        events: dayEvents,
        upcomingEvents: upcomingDayEvents,
        pastEvents: pastDayEvents,
        isPast,
      })

      currentDateObj.setDate(currentDateObj.getDate() + 1)
    }

    return days
  }

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate)
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1)
    } else {
      newDate.setMonth(newDate.getMonth() + 1)
    }
    setCurrentDate(newDate)
  }

  const calendarDays = getCalendarDays()

  const EventCard = ({ event, isPast = false }: { event: EventType; isPast?: boolean }) => (
    <Card key={event.id} className={`hover:shadow-lg transition-shadow ${isPast ? "opacity-90" : ""}`}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge className={categoryColors[event.category]}>{categoryLabels[event.category]}</Badge>
              {event.registrationRequired && <Badge variant="outline">Registration Required</Badge>}
              {isPast && (
                <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                  Completed
                </Badge>
              )}
              {!isPast && getRelativeDate(event.date) && (
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {getRelativeDate(event.date)}
                </Badge>
              )}
            </div>
            <CardTitle className={`text-xl mb-2 ${isPast ? "text-gray-600" : "text-blue-600"}`}>
              {event.title}
            </CardTitle>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* HTML Description */}
        {event.htmlDescription ? (
          <div
            className="text-gray-600 mb-4 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: event.htmlDescription }}
          />
        ) : (
          <p className="text-gray-600 mb-4">{event.description}</p>
        )}

        {event.results && isPast && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-start gap-2">
              <History className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-green-800 mb-1">Event Results</h4>
                <p className="text-sm text-green-700">{event.results}</p>
              </div>
            </div>
          </div>
        )}

        {/* Photos Section */}
        {event.photos && event.photos.length > 0 && (
          <div className="mb-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="mb-3">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  View Photos ({event.photos.length})
                </Button>
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle>{event.title} - Photo Gallery</DialogTitle>
                </DialogHeader>
                <PhotoGallery photos={event.photos} columns={3} />
              </DialogContent>
            </Dialog>
          </div>
        )}

        {/* Documents Section */}
        {event.documents && event.documents.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium text-gray-900 mb-3">Documents & Downloads</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {event.documents.map((doc) => {
                const IconComponent = documentTypeIcons[doc.type]
                return (
                  <Button key={doc.id} variant="outline" size="sm" className="justify-start h-auto p-3" asChild>
                    <a href={doc.url} download>
                      <div className="flex items-start gap-2 w-full">
                        <IconComponent className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <div className="text-left">
                          <div className="font-medium text-sm">{doc.title}</div>
                          <div className="text-xs text-gray-500">
                            {documentTypeLabels[doc.type]} {doc.size && `• ${doc.size}`}
                          </div>
                        </div>
                        <Download className="h-3 w-3 ml-auto flex-shrink-0" />
                      </div>
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>
        )}

        {event.category === "meeting" && !isPast && (
          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2 text-sm text-blue-800">
              <Users className="h-4 w-4" />
              <span>Members and guests welcome - Contact us to attend as a guest</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Club Events</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay up to date with all our meetings, trials, seminars, and social events throughout the year.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Calendar and Filter Section */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => (
                    <div
                      key={index}
                      className={`
                        aspect-square flex flex-col items-center justify-center text-xs relative
                        ${day.isCurrentMonth ? "text-gray-900" : "text-gray-400"}
                        ${day.isToday ? "bg-blue-600 text-white rounded-full" : "hover:bg-gray-100 rounded"}
                        ${day.events.length > 0 ? "font-semibold" : ""}
                      `}
                    >
                      <span>{day.date.getDate()}</span>
                      {day.upcomingEvents.length > 0 && (
                        <div className="absolute bottom-0.5 w-1 h-1 bg-blue-600 rounded-full"></div>
                      )}
                      {day.pastEvents.length > 0 && (
                        <div className="absolute bottom-0.5 w-1 h-1 bg-gray-400 rounded-full"></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-gray-500 space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Upcoming Events</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>Past Events</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Category Filter */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Filter by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button
                    variant={selectedCategory === "all" ? "default" : "outline"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory("all")}
                  >
                    All Events
                  </Button>
                  {Object.entries(categoryLabels).map(([key, label]) => (
                    <Button
                      key={key}
                      variant={selectedCategory === key ? "default" : "outline"}
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(key)}
                    >
                      {label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events Lists */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upcoming" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Upcoming Events ({filteredUpcomingEvents.length})
                </TabsTrigger>
                <TabsTrigger value="past" className="flex items-center gap-2">
                  <History className="h-4 w-4" />
                  Past Events ({filteredPastEvents.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="mt-6">
                <div className="space-y-6">
                  {filteredUpcomingEvents.length > 0 ? (
                    filteredUpcomingEvents.map((event) => <EventCard key={event.id} event={event} isPast={false} />)
                  ) : (
                    <Card>
                      <CardContent className="text-center py-12">
                        <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming events</h3>
                        <p className="text-gray-600">
                          {selectedCategory === "all"
                            ? "No upcoming events scheduled. Check back later for new events."
                            : `No upcoming ${categoryLabels[selectedCategory as keyof typeof categoryLabels].toLowerCase()} events. Try selecting a different category.`}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="past" className="mt-6">
                <div className="space-y-6">
                  {filteredPastEvents.length > 0 ? (
                    filteredPastEvents.map((event) => <EventCard key={event.id} event={event} isPast={true} />)
                  ) : (
                    <Card>
                      <CardContent className="text-center py-12">
                        <History className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No past events</h3>
                        <p className="text-gray-600">
                          {selectedCategory === "all"
                            ? "No past events to display."
                            : `No past ${categoryLabels[selectedCategory as keyof typeof categoryLabels].toLowerCase()} events. Try selecting a different category.`}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
            </Tabs>

            {/* Quick Links */}
            {/* <Card className="mt-8">
              <CardHeader>
                <CardTitle>Event Categories</CardTitle>
                <CardDescription>Learn more about our different types of events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link href="/events/conformation" className="block">
                    <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-blue-600 mb-2">Conformation Shows</h4>
                      <p className="text-sm text-gray-600">Showcase the beauty and structure of German Shepherds</p>
                    </div>
                  </Link>
                  <Link href="/events/scent-work" className="block">
                    <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-blue-600 mb-2">Scent Work Trials</h4>
                      <p className="text-sm text-gray-600">Test your dog's natural scenting abilities</p>
                    </div>
                  </Link>
                  <Link href="/events/obedience-rally" className="block">
                    <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-blue-600 mb-2">Obedience & Rally</h4>
                      <p className="text-sm text-gray-600">Precision training and fun rally competitions</p>
                    </div>
                  </Link>
                  <Link href="/events/seminars" className="block">
                    <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h4 className="font-medium text-blue-600 mb-2">Educational Seminars</h4>
                      <p className="text-sm text-gray-600">Expert-led educational workshops and presentations</p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  )
}
