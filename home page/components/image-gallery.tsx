"use client"

import { useState } from "react"
import { OptimizedImage } from "./optimized-image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageGalleryProps {
  images: Array<{
    src: string
    alt: string
    caption?: string
  }>
  className?: string
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (images.length === 0) return null

  return (
    <>
      <div className={cn("relative", className)}>
        <OptimizedImage
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px"
          className="cursor-pointer"
          aspectRatio="video"
          priority={currentIndex === 0}
        />

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <Button
              size="icon"
              variant="ghost"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
              onClick={prevImage}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
              onClick={nextImage}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Fullscreen button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
          onClick={() => setIsFullscreen(true)}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </Button>
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={() => setIsFullscreen(false)}
          >
            <X className="w-6 h-6" />
          </Button>

          <div className="relative w-full h-full max-w-4xl max-h-[90vh] mx-4">
            <OptimizedImage
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
              showSkeleton={false}
            />

            {images.length > 1 && (
              <>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </>
            )}
          </div>

          {images[currentIndex].caption && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded backdrop-blur-sm max-w-md text-center">
              {images[currentIndex].caption}
            </div>
          )}
        </div>
      )}
    </>
  )
}
