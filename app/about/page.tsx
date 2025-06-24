import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Target } from "lucide-react"
import Image from "next/image"
import PhotoGallery from "@/components/photo-gallery"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            The German Shepherd Dog Club of Greater New Haven was established in 1960 as the first and only AKC approved German Shepherd Dog Club in the state of Connecticut. We are an educational group of passionate German Shepherd fans interested in enhancing our relationships with our K-9 friends.
                        </p>
                    </div>
                </div>
            </section>

            
            {/* Mission & Values */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission Is Simple</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="text-center">
                            <CardContent>
                                <CardDescription>
                                    To encourage and promote the quality breeding of pure-bred German Shepherd Dogs and to do all possible to bring their natural qualities to perfection.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent>
                                <CardDescription>
                                    To urge members and breeders to accept the Standard of the Breed as approved by the American Kennel Club as the only Standard of excellence by which German Shepherd Dogs shall be judged.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent>
                                <CardDescription>
                                    To do all in its power to protect and advance the interests of the Breed by encouraging sportsmanlike competition at dog shows, obedience trials and performance events.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent>
                                <CardDescription>
                                    To conduct sanctioned matches, licensed specialty shows, obedience trials, performance events and any other event for which the club is eligible under the Rules and Regulations of the American Kennel Club.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    In 1950, the German Shepherd Dog Club of Greater New Haven was formed and dedicated to the enhancement of the breed in our area. Led by our first President William Goldbecker, a Fire Chief in New Haven, he brought to the membership the knowledge he had acquired from his native Cologne, Germany, about the German Shepherd Dog.
                                </p>
                                <p>
                                    It was not until 1960/1961, that our Club obtained official recognition from the German Shepherd Dog Club of America and the American Kennel Club. Our first show was held in 1961. Among the small group of fanciers who gave life and vigor to the Club was Betsy Gomez and Richard Cusano, and several others.
                                </p>
                                <p>
                                    Since the first show in Wallingford, Connecticut, eminent American & Canadian specialists in the breed judged our specialties including Walter Martin of the Wienerau Kennels who came from Germany to Judge our fifteenth Annual Specialty Show on October 9th 1976.
                                </p>
                                <p>
                                    The Greater New Haven Club is also committed to the total German Shepherd Dog and likewise offers annual obedience trials for fanciers throughout the country.
                                </p>
                                <p>
                                    Led today by our President Lyn Chernak, we are a vigorous club, promoting activities for the novice as well as the seasoned exhibitor and breeder. Our club honors many of its members who have distinguished themselves in breed activities. Today our club claims some of the top breeders in the country and some of the most successful exhibitors in the United States.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            {/* <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-blue-600">Training & Education</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="text-gray-600">
                                    We offer regular training sessions, workshops, and seminars covering various aspects of German
                                    Shepherd care and training.
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>Basic obedience training</li>
                                    <li>Advanced training techniques</li>
                                    <li>Behavioral guidance</li>
                                    <li>Health and nutrition education</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-blue-600">Events & Competitions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="text-gray-600">
                                    We host and participate in various events throughout the year to showcase the abilities of German
                                    Shepherds.
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>Conformation shows</li>
                                    <li>Scent work trials</li>
                                    <li>Obedience and rally competitions</li>
                                    <li>Fun matches and social events</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-blue-600">Community Support</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="text-gray-600">
                                    We provide support and resources for German Shepherd owners at all levels of experience.
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>New owner guidance</li>
                                    <li>Breeder referrals</li>
                                    <li>Rescue support</li>
                                    <li>Mentorship programs</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-blue-600">Breed Promotion</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="text-gray-600">
                                    We work to promote the German Shepherd breed and educate the public about these remarkable dogs.
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>Public education programs</li>
                                    <li>Breed demonstrations</li>
                                    <li>Responsible breeding practices</li>
                                    <li>Health testing advocacy</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section> */}

            {/* Photo Gallery */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <PhotoGallery
                        title="Our Club in Action"
                        photos={[
                            {
                                id: "1",
                                src: "/images/obedience_trial_2021_1.jpg",
                                alt: "Obedience Trial 2021"
                            },
                            {
                                id: "2",
                                src: "/images/obedience_trial_2021_2.jpg",
                                alt: "Obedience Trial 2021 x2",
                            },
                            {
                                id: "3",
                                src: "/images/futurity_1.png",
                                alt: "Futurity",
                            }
                        ]}
                    />
                </div>
            </section>
        </div>
    )
}
