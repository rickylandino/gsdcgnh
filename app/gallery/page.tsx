"use client"

import { useState, useEffect, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, Calendar, ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { allPhotos, photographerLinks, type GalleryPhoto } from './photo-manifest'

function GalleryContent() {
  const searchParams = useSearchParams()
  const eventFilter = searchParams.get('event')
  const categoryFilter = searchParams.get('category')
  
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Memoize filtered photos for better performance
  const filteredPhotos = useMemo(() => {
    let photos = [...allPhotos]

    // Filter by event if specified
    if (eventFilter) {
      photos = photos.filter(photo => photo.eventId === eventFilter)
    }

    // Filter by category if specified
    if (categoryFilter) {
      photos = photos.filter(photo => photo.category === categoryFilter)
    }

    return photos
  }, [eventFilter, categoryFilter])

  // Get photographer link for current filter
  const currentPhotographerLink = useMemo(() => {
    if (eventFilter) {
      return photographerLinks[eventFilter]
    }
    return null
  }, [eventFilter])

  const openLightbox = (photo: GalleryPhoto, index: number) => {
    setSelectedPhoto(photo)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const nextPhoto = () => {
    const nextIndex = (currentIndex + 1) % filteredPhotos.length
    setSelectedPhoto(filteredPhotos[nextIndex])
    setCurrentIndex(nextIndex)
  }

  const prevPhoto = () => {
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    setSelectedPhoto(filteredPhotos[prevIndex])
    setCurrentIndex(prevIndex)
  }

  useEffect(() => {
    if (!selectedPhoto) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox()
      } else if (e.key === "ArrowRight") {
        nextPhoto()
      } else if (e.key === "ArrowLeft") {
        prevPhoto()
      }
    }

    // Disable common save shortcuts
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keydown", handleKeyPress)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [selectedPhoto, currentIndex])

  const getPageTitle = () => {
    if (eventFilter) {
      const eventPhoto = filteredPhotos.find(p => p.eventId === eventFilter)
      return eventPhoto?.eventTitle || "Event Photos"
    }
    if (categoryFilter) {
      return `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Photos`
    }
    return "Photo Gallery"
  }

  const getPageDescription = () => {
    if (categoryFilter) {
      return `All photos from ${categoryFilter} activities`
    }
    return "Browse all photos from our club activities and events"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-white py-16 relative">
        <div className="absolute inset-0 chrome-gradient opacity-80" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{getPageTitle()}</h1>
            <p className="text-xl text-chrome-200 max-w-3xl mx-auto mb-8">
              {getPageDescription()}
            </p>
            {(eventFilter || categoryFilter) && (
              <Link href="/gallery">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  View All Photos
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Filter Info */}
      {(eventFilter || categoryFilter) && (
        <section className="py-4 px-4 bg-blue-50 border-b">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-800">
                <Calendar className="h-4 w-4" />
                <span className="font-medium">
                  Showing {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? 's' : ''}
                  {eventFilter && filteredPhotos[0]?.eventTitle && ` from ${filteredPhotos[0].eventTitle}`}
                  {categoryFilter && ` from ${categoryFilter} activities`}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Photo Masonry Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {filteredPhotos.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No photos found
              </h3>
              <p className="text-gray-500 mb-4">
                No photos match your current filters.
              </p>
              <Link href="/gallery">
                <Button variant="outline">
                  View All Photos
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
                {filteredPhotos.map((photo, index) => (
                  <div
                    key={`${photo.src}-${index}`}
                    className="break-inside-avoid mb-4 group cursor-pointer"
                    onClick={() => openLightbox(photo, index)}
                  >
                    <div 
                      className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 select-none bg-white"
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                    >
                      <div className="relative">
                        <img
                          src={photo.src || "/placeholder.svg"}
                          alt={photo.alt}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none block"
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                          loading="lazy"
                          />
                      </div>
                      
                      {/* Photo info overlay */}
                      {/* {photo.eventTitle && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="p-3">
                            <p className="text-white text-xs font-medium">{photo.eventTitle}</p>
                          </div>
                        </div>
                      )} */}
                    </div>
                  </div>
                ))}
              </div>

              {/* Photographer Link Section */}
              {currentPhotographerLink ? (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      More Photos Available
                    </h3>
                    <p className="text-gray-600 mb-4">
                      View the complete gallery from this event
                    </p>
                    <a
                      href={currentPhotographerLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                    >
                      <span>View {currentPhotographerLink.photographerName}&apos;s Full Gallery</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    {currentPhotographerLink.description && (
                      <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
                        {currentPhotographerLink.description}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      All Photos are taken by Kelly Iannello Photography
                    </h3>
                    <a
                      href="https://kellyiannellophotography.pixieset.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                    >
                      <span>View Kelly Iannello Photography&apos;s Portfolio</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation buttons */}
            {filteredPhotos.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
                  onClick={prevPhoto}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
                  onClick={nextPhoto}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}

            {/* Image */}
            <div 
              className="relative select-none flex items-center justify-center min-h-full"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            >
              <div className="relative max-w-full max-h-[85vh]">
                <Image
                  src={selectedPhoto.src || "/placeholder.svg"}
                  alt={selectedPhoto.alt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain pointer-events-none"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  priority
                />
              </div>
              
              {/* Photo info overlay */}
              {/* {selectedPhoto.eventTitle && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
                  <p className="text-sm text-gray-300">{selectedPhoto.eventTitle}</p>
                </div>
              )} */}
            </div>

            {/* Photo counter */}
            {filteredPhotos.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                {currentIndex + 1} of {filteredPhotos.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// Loading component
function GalleryLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="text-white py-16 relative">
        <div className="absolute inset-0 chrome-gradient opacity-80" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl text-chrome-200">Loading...</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<GalleryLoading />}>
      <GalleryContent />
    </Suspense>
  )
}