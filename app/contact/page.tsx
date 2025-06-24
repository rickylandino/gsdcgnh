import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Facebook } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with the German Shepherd Dog Club of Greater New Haven. We're here to help with any questions
              about our club, events, or German Shepherds.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="What is this regarding?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">xx@xx.org</p>
                  <p className="text-sm text-gray-500 mt-2">We typically respond to emails within 24-48 hours.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>Phone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">(xxx) xxx-xxxx</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Please leave a voicemail if we don't answer - we'll call you back!
                  </p>
                </CardContent>
              </Card>

              {/* <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>Meeting Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Community Center
                    <br />
                    123 Main Street
                    <br />
                    New Haven, CT 06511
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Monthly meetings are held here on the third Thursday of each month.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Meeting Times</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Third Thursday of each month
                    <br />
                    7:00 PM - 9:00 PM
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Check our monthly meetings page for specific dates and topics.
                  </p>
                </CardContent>
              </Card> */}

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Facebook className="h-5 w-5 text-blue-600" />
                    <span>Social Media</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Follow us on Facebook for updates and photos</p>
                  <a
                    href="https://www.facebook.com/TGSDCONH"
                    className="inline-block mt-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      Visit Our Facebook Page
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do I need to own a German Shepherd to join?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  While most of our members own German Shepherds, we welcome anyone with a genuine interest in the
                  breed. Whether you're considering getting a German Shepherd or simply admire the breed, you're welcome
                  to join our community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I attend a meeting before joining?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We encourage prospective members to attend a meeting as our guest before deciding to join. Please
                  contact us in advance so we can welcome you properly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What should I bring to my first meeting?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Just bring yourself and your enthusiasm for German Shepherds! If you have photos of your dog(s), we'd
                  love to see them. No need to bring your dog to regular meetings unless it's a special training
                  session.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How can I get involved in club activities?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  There are many ways to get involved! You can volunteer at events, help with setup and cleanup, assist
                  with our newsletter, or even help organize activities. We'll match your interests and availability
                  with opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
    </div>
  )
}
