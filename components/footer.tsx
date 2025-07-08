import Link from "next/link"
import Image from "next/image"
import { navigation } from "@/lib/navigation"

export default function Footer() {
  return (
    <footer className="relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 chrome-gradient opacity-80" />
      <div className="container mx-auto px-4 py-12 z-10 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Club Info */}
          <div className="space-y-4">
            <div className="flex justify-center items-center space-x-3 mx-auto">
              <Image
                src="/gsdognh_logo.png"
                alt="GSDCGNH Logo"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
                {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
              {/* <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Meetings & Events
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-300 hover:text-white transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Events */}
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Events</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events/conformation" className="text-gray-300 hover:text-white transition-colors">
                  Conformation
                </Link>
              </li>
              <li>
                <Link href="/events/scent-work" className="text-gray-300 hover:text-white transition-colors">
                  Scent Work Trials
                </Link>
              </li>
              <li>
                <Link href="/events/obedience-rally" className="text-gray-300 hover:text-white transition-colors">
                  Obedience & Rally
                </Link>
              </li>
              <li>
                <Link href="/events/seminars" className="text-gray-300 hover:text-white transition-colors">
                  Seminars
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@gsdcgnh.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">(203) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">New Haven, CT</span>
              </div>
              <div className="flex items-center space-x-2">
                <Facebook className="h-4 w-4 text-blue-400" />
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Follow us on Facebook
                </Link>
              </div>
            </div>
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-chrome-400">
          <p>&copy; {new Date().getFullYear()} German Shepherd Dog Club of Greater New Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
