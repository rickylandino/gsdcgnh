"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import PhotoGallery from "@/components/photo-gallery"
import { upcomingEvents } from "./events/page"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <section className="relative py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Welcome to the German Shepherd Dog Club of Greater New Haven
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                The German Shepherd Dog Club of Greater New Haven is Connecticut&apos;s first and only AKC-recognized club devoted to the German Shepherd breed. Since 1960, we've united passionate owners, breeders, and exhibitors to uphold the breed&apos;s excellence through education, competition, and community. From hosting specialty shows and obedience trials to promoting responsible breeding standards, our club celebrates the heritage and future of these extraordinary dogs—supporting everyone from seasoned professionals to first-time fans
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                                    <Link href="/membership">Become a Member</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
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

            {/* Photo Gallery */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <PhotoGallery
                        title="Club Highlights"
                        photos={[
                            {
                                id: "1",
                                src: "/images/5k_spring_1.jpg",
                                alt: "Spring 5K event"
                            },
                            {
                                id: "2",
                                src: "/images/2023_awards_1.jpg",
                                alt: "2023 Awards Ceremony 1"
                            },
                            {
                                id: "3",
                                src: "/images/dog_cpr_1.jpg",
                                alt: "Pet CPR training session"
                            },
                            {
                                id: "4",
                                src: "/images/good_citizen_1.jpg",
                                alt: "Tempermant and Good Citizen testing",
                            },
                            {
                                id: "5",
                                src: "/images/obedience_and_rally_1.jpg",
                                alt: "Obedience and Rally Training",
                            },
                            {
                                id: "6",
                                src: "/images/scent_1.jpg",
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

            {/* Upcoming Events */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
                        <p className="text-lg text-gray-600">Stay updated with our latest activities and events</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {upcomingEvents.map((event) => (
                            <Card key={event.id}>
                                <CardHeader>
                                    <CardTitle className="text-blue-600">{event.title}</CardTitle>
                                    <CardDescription>{event.date} • {event.time}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">{event.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 bg-blue-600 text-white">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Become part of a passionate community dedicated to the German Shepherd breed.
                    </p>
                    <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                        <Link href="/membership">Apply for Membership</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
