"use client"

import Image from "next/image"
import { useState } from "react"
import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  sizes?: string
  priority?: boolean
  className?: string
  aspectRatio?: "square" | "video" | "portrait" | "wide"
  showSkeleton?: boolean
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px",
  priority = false,
  className,
  aspectRatio = "video",
  showSkeleton = true,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  }

  const blurDataURL =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="

  return (
    <div className={cn("relative overflow-hidden bg-[#1a1c26] rounded-lg", aspectRatioClasses[aspectRatio])}>
      {/* Loading skeleton */}
      {isLoading && showSkeleton && (
        <div className="absolute inset-0 bg-[#1a1c26] animate-pulse flex items-center justify-center z-10">
          <ImageIcon className="w-8 h-8 text-[#8f8f8f]" />
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-[#272932] flex items-center justify-center z-10">
          <div className="text-center">
            <ImageIcon className="w-8 h-8 text-[#8f8f8f] mx-auto mb-2" />
            <p className="text-[#8f8f8f] text-xs">Failed to load image</p>
          </div>
        </div>
      )}

      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        placeholder="blur"
        blurDataURL={blurDataURL}
        className={cn(
          "object-cover transition-all duration-300",
          isLoading ? "opacity-0 scale-105" : "opacity-100 scale-100",
          className,
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
        quality={85}
      />
    </div>
  )
}
