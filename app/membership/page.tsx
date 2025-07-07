import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function MembershipPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="text-white py-16 relative">
        <div className="absolute inset-0 chrome-gradient opacity-80" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h1>
            <p className="text-xl text-chrome-200 max-w-3xl mx-auto">
              Become a member of the German Shepherd Dog Club of Greater New Haven and connect with fellow enthusiasts
              who share your passion for these amazing dogs.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      {/* <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why should I Join the Club?</h2>
            <p className="text-lg text-gray-600">
              The German Shepherd Dog Club of Greater New Haven has been dedicated to the promotion of the German Shepherd Dog breed and education of their pack leaders (people like you) for more than 70 years. The club is made up of a devoted collection of German Shepherd Dog fanatics that posses extensive experience and understanding in all German Shepherd topics. This experience covers many areas including but not limited to breeding, training, conformation preparation, obedience training, scent work training, socialization, understanding of AKC policies and procedures and much more. By becoming part of this very focused group you can gain access to: A membership with vast experience and expertise.
            </p>
          </div>

          <div className="grid sm:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent>
                <CardDescription>
                  The club&apos;s training classes in many different categories
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent>
                <CardDescription>
                  The club&apos;s AKC Sporting Events in many performance categories
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent>
                <CardDescription>
                  The club&apos;s training facility for practice sessions
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent>
                <CardDescription>
                  Social interaction with like minded enthusiasts
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
              And Much More!
            </p>
          </div>
        </div>
      </section> */}

      {/* Membership Types */}
      {/* <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Options</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-blue-600">Individual</CardTitle>
                <CardDescription>Perfect for single dog owners</CardDescription>
                <div className="text-3xl font-bold text-gray-900">
                  $45<span className="text-lg font-normal text-gray-600">/year</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Monthly meeting access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Newsletter subscription</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Training resources</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Event discounts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative border-blue-500 border-2">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <CardHeader>
                <CardTitle className="text-blue-600">Family</CardTitle>
                <CardDescription>For households with multiple members</CardDescription>
                <div className="text-3xl font-bold text-gray-900">
                  $65<span className="text-lg font-normal text-gray-600">/year</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">All Individual benefits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Up to 4 family members</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Priority event registration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Additional training sessions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-blue-600">Junior</CardTitle>
                <CardDescription>For members under 18</CardDescription>
                <div className="text-3xl font-bold text-gray-900">
                  $25<span className="text-lg font-normal text-gray-600">/year</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Meeting access with guardian</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Youth training programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Mentorship opportunities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Junior handler support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Application Form */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Application</h2>
            <p className="text-lg text-gray-600">If you&apos;d like to learn more and be considered for membership, please download, complete and return a Membership Application to our Membership Chair Person (contact information is on the application).</p>
            <Button variant="outline" size="sm" className="h-auto p-3 mt-8" asChild>
            <a href="/documents/2025_membership_application.pdf" download>
                <div className="flex items-start gap-2 w-full">
                <div className="text-left">
                    <div className="font-medium text-sm text-gray-900">{(new Date()).getFullYear()} Membership Application</div>
                    <div className="text-xs text-gray-600">
                    {`• 528 KB`}
                    </div>
                </div>
                <Download className="h-3 w-3 ml-auto flex-shrink-0 text-gray-600" />
                </div>
            </a>
            </Button>
          </div>

          {/* <Card>
            <CardHeader>
              <CardTitle>New Member Application</CardTitle>
              <CardDescription>Please provide your information to join our club.</CardDescription>
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
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter your full address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="membershipType">Membership Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select membership type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual - $45/year</SelectItem>
                      <SelectItem value="family">Family - $65/year</SelectItem>
                      <SelectItem value="junior">Junior - $25/year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Experience with German Shepherds</Label>
                  <Textarea id="experience" placeholder="Tell us about your experience with German Shepherds..." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">Areas of Interest</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="conformation" />
                      <Label htmlFor="conformation" className="text-sm">
                        Conformation
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="obedience" />
                      <Label htmlFor="obedience" className="text-sm">
                        Obedience
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="rally" />
                      <Label htmlFor="rally" className="text-sm">
                        Rally
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="scentwork" />
                      <Label htmlFor="scentwork" className="text-sm">
                        Scent Work
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="breeding" />
                      <Label htmlFor="breeding" className="text-sm">
                        Breeding
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="training" />
                      <Label htmlFor="training" className="text-sm">
                        Training
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comments">Additional Comments</Label>
                  <Textarea id="comments" placeholder="Any additional information you'd like to share..." />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to abide by the club's constitution, bylaws, and code of ethics *
                  </Label>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </div>
      </section>
    </div>
  )
}
