"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect } from "react"

interface Photo {
  id: string
  src: string
  alt: string
  caption?: string
}

interface PhotoGalleryProps {
  photos: Photo[]
  title?: string
  columns?: 2 | 3 | 4
}

export default function PhotoGallery({ photos, title, columns = 3 }: PhotoGalleryProps) {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openLightbox = (photo: Photo, index: number) => {
        setSelectedPhoto(photo)
        setCurrentIndex(index)
    }

    const closeLightbox = () => {
        setSelectedPhoto(null)
    }

    const nextPhoto = () => {
        const nextIndex = (currentIndex + 1) % photos.length
        setSelectedPhoto(photos[nextIndex])
        setCurrentIndex(nextIndex)
    }

    const prevPhoto = () => {
        const prevIndex = (currentIndex - 1 + photos.length) % photos.length
        setSelectedPhoto(photos[prevIndex])
        setCurrentIndex(prevIndex)
    }

    useEffect(() => {
        if (!selectedPhoto) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeLightbox()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [selectedPhoto])

    const gridCols = {
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    }

    return (
        <div className="space-y-6">
            {title && (
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                </div>
            )}

            <div className={`grid ${gridCols[columns]} gap-4`}>
                {photos.map((photo, index) => (
                    <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="p-0">
                            <div className="relative aspect-square overflow-hidden" onClick={() => openLightbox(photo, index)}>
                                <Image
                                    src={photo.src || "/placeholder.svg"}
                                    alt={photo.alt}
                                    fill
                                    className="transition-transform duration-300"
                                />
                            </div>
                            {photo.caption && (
                                <div className="p-3">
                                    <p className="text-sm text-gray-600">{photo.caption}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Lightbox */}
            {selectedPhoto && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl max-h-full">
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
                        {photos.length > 1 && (
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
                        <div className="relative">
                            <Image
                                src={selectedPhoto.src || "/placeholder.svg"}
                                alt={selectedPhoto.alt}
                                width={800}
                                height={800}
                                className="max-w-full max-h-[80vh] object-contain"
                            />
                            {selectedPhoto.caption && (
                                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                                    <p className="text-center">{selectedPhoto.caption}</p>
                                </div>
                            )}
                        </div>

                        {/* Photo counter */}
                        {photos.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                                {currentIndex + 1} of {photos.length}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
