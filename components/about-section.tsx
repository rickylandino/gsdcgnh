import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-16 bg-chrome-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About Our Club</h2>
          <p className="text-xl text-chrome-100 max-w-3xl mx-auto">
            The German Shepherd Dog Club of Greater New Haven has been serving the community for over 40 years,
            promoting responsible ownership and the betterment of the breed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-chrome-800 border-chrome-600">
            <CardHeader>
              <CardTitle className="text-chrome-200">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-chrome-300">
              <p>
                To promote and protect the German Shepherd Dog breed through education, training events, and fostering
                responsible breeding practices. We provide a community for German Shepherd enthusiasts to learn,
                compete, and celebrate these magnificent dogs.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-chrome-800 border-chrome-600">
            <CardHeader>
              <CardTitle className="text-chrome-200">Our History</CardTitle>
            </CardHeader>
            <CardContent className="text-chrome-300">
              <p>
                Founded in 1960, our club has grown from a small group of enthusiasts to a thriving community. We host
                regular meetings, training events, and competitions while maintaining our commitment to breed education
                and responsible ownership.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-chrome-400 text-black hover:bg-chrome-300">
            <Link href="/officers">Meet Our Officers & Board</Link>
          </Button>
        </div>
      </div>

      {/* <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-white mb-6">Leadership & Organization</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gray-800 border-gray-600">
            <CardHeader>
              <CardTitle className="text-gray-200">Officers</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>Meet our dedicated club officers who guide our organization and activities.</p>
              <Button asChild className="mt-4 bg-gray-400 text-black hover:bg-gray-300">
                <Link href="/officers">View Officers</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-600">
            <CardHeader>
              <CardTitle className="text-gray-200">Board Members</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>Our board members bring expertise in training, shows, and club management.</p>
              <Button asChild className="mt-4 bg-gray-400 text-black hover:bg-gray-300">
                <Link href="/officers#board">View Board</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-600">
            <CardHeader>
              <CardTitle className="text-gray-200">Committees</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>Specialized committees handle education, rescue, and event coordination.</p>
              <Button asChild className="mt-4 bg-gray-400 text-black hover:bg-gray-300">
                <Link href="/officers#committees">View Committees</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div> */}
    </section>
  )
}
