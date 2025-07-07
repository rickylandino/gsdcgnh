"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Officers & Board", href: "/officers" },
    { name: "Meetings", href: "/meetings" },
    { name: "Events", href: "/events" },
    { name: "Membership", href: "/membership" },
    { name: "Contact", href: "/contact" },
  ]

const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
)

// Track screen width and update state on resize
// Only runs on client
useEffect(() => {
    function handleResize() {
        setScreenWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
}, [])

console.log(screenWidth);

  return (
    <header className="chrome-gradient shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 p-2">
            <Image src="/gsdognh_logo.png" alt="GSDCGNH Logo" width={95} height={95} className="rounded-full" />
            {/* <Image src="/gsdognh_logo.png" alt="gsdognh logo" width={150} height={150} className="rounded-full" />

            <Image src="/logo_no_circle2.png" alt="GSDCGNH Logo" width={95} height={95} /> */}
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link href={item.href} className="text-chrome-200 hover:text-white transition-colors duration-200 font-medium">
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-chrome-200 hover:text-white transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
