"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to homepage immediately
    router.replace("/")
  }, [router])

  // Return null since we're redirecting
  return null
}