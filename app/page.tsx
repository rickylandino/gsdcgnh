"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import PhotoGallery from "@/components/photo-gallery"
import { AboutSection } from "@/components/about-section"
import { MeetingsSection } from "@/components/meetings-section"
import { EventsSection } from "@/components/events-section"

export default function HomePage() {
    return (
        <div className="">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/placeholder.svg?height=1080&width=1920&text=German+Shepherd+Hero')",
                        filter: "brightness(0.4)",
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 chrome-gradient opacity-80" />

                {/* Content */}
                <div className="relative z-10 text-center px-4 py-20 sm:px-6 lg:px-8 container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="absolute inset-0" />
                            <h1 className="text-4xl md:text-5xl font-bold text-chrome-200 leading-tight">
                                Welcome to the German Shepherd Dog Club of Greater New Haven
                            </h1>
                            <p className="text-xl text-chrome-200 leading-relaxed">
                                The German Shepherd Dog Club of Greater New Haven is Connecticut&apos;s first and only AKC-recognized club devoted to the German Shepherd breed. Since 1960, we&apos;ve united passionate owners, breeders, and exhibitors to uphold the breed&apos;s excellence through education, competition, and community. From hosting specialty shows and obedience trials to promoting responsible breeding standards, our club celebrates the heritage and future of these extraordinary dogs—supporting everyone from seasoned professionals to first-time fans
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button asChild size="lg" className="bg-gray-400 text-black hover:bg-gray-300 font-semibold px-8 py-3 z-10">
                                    <Link href="/membership">Become a Member</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="border-gray-400 text-gray-200 hover:bg-gray-400 hover:text-black font-semibold px-8 py-3 bg-transparent z-10">
                                    <Link href="/about">Learn More</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative">
                                <Image
                                    src="/gsdognh_logo.png"
                                    alt="German Shepherd Dog Club of Greater New Haven Logo"
                                    width={400}
                                    height={400}
                                    className="rounded-full shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
      <AboutSection />

            {/* Photo Gallery */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <PhotoGallery
                        title="Club Highlights"
                        photos={[
                            {
                                id: "1",
                                src: "/events/2025/temp_test/1.jpg",
                                alt: "Spring 5K event"
                            },
                            {
                                id: "2",
                                src: "/events/2025/temp_test/2.jpg",
                                alt: "2023 Awards Ceremony 1"
                            },
                            {
                                id: "3",
                                src: "/events/2025/temp_test/3.jpg",
                                alt: "Pet CPR training session"
                            },
                            {
                                id: "4",
                                src: "/events/2025/temp_test/4.jpg",
                                alt: "Temperament and Good Citizen testing",
                            },
                            {
                                id: "5",
                                src: "/events/2025/temp_test/7.jpg",
                                alt: "Obedience and Rally Training",
                            },
                            {
                                id: "6",
                                src: "/events/2025/temp_test/6.jpg",
                                alt: "Scentwork Training",
                            },
                        ]}
                    />
                </div>
            </section>

            {/* Features Section */}
            {/* <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From training and trials to education and community events, we provide comprehensive support for German
              Shepherd enthusiasts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Monthly Meetings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join us for regular meetings featuring guest speakers, training tips, and community updates.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Trials & Shows</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Participate in conformation shows, scent work trials, obedience, and rally competitions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access seminars, workshops, and educational resources to enhance your knowledge.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with fellow German Shepherd enthusiasts and build lasting friendships.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      <MeetingsSection />
      <EventsSection />

            {/* Upcoming Events */}
            {/* <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
                        <p className="text-lg text-gray-600">Stay updated with our latest activities and events</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {upcomingEvents.map((event) => (
                            <Link key={event.id} href="/events" passHref legacyBehavior>
                                <a>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-blue-600">{event.title}</CardTitle>
                                            <CardDescription>{event.date} • {event.time}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-600">{event.description}</p>
                                        </CardContent>
                                    </Card>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Call to Action */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
                    <p className="text-xl mb-8 text-gray-600">
                        Become part of a passionate community dedicated to the German Shepherd breed.
                    </p>
                    <Button asChild size="lg" variant="secondary" className="bg-chrome-400 text-black hover:bg-chrome-300">
                        <Link href="/membership">Apply for Membership</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
