"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import { User } from "lucide-react"
import { cn } from "@/lib/utils"

interface ResponsiveAvatarProps {
  src?: string
  alt: string
  fallback: string
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  className?: string
  online?: boolean
  verified?: boolean
}

export function ResponsiveAvatar({
  src,
  alt,
  fallback,
  size = "md",
  className,
  online = false,
  verified = false,
}: ResponsiveAvatarProps) {
  const [imageError, setImageError] = useState(false)

  const sizeClasses = {
    xs: "w-5 h-5 sm:w-6 sm:h-6",
    sm: "w-6 h-6 sm:w-8 sm:h-8",
    md: "w-8 h-8 sm:w-10 sm:h-10",
    lg: "w-10 h-10 lg:w-12 lg:h-12",
    xl: "w-12 h-12 lg:w-16 lg:h-16",
  }

  const fallbackTextSizes = {
    xs: "text-[10px] sm:text-xs",
    sm: "text-xs sm:text-sm",
    md: "text-sm sm:text-base",
    lg: "text-base sm:text-lg",
    xl: "text-lg sm:text-xl",
  }

  const indicatorSizes = {
    xs: "w-2 h-2",
    sm: "w-2 h-2 lg:w-3 lg:h-3",
    md: "w-3 h-3",
    lg: "w-3 h-3 lg:w-4 lg:h-4",
    xl: "w-4 h-4",
  }

  return (
    <div className="relative">
      <Avatar className={cn(sizeClasses[size], className)}>
        {src && !imageError ? (
          <AvatarImage
            src={src || "/placeholder.svg"}
            alt={alt}
            className="object-cover transition-opacity duration-200"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : null}
        <AvatarFallback className={cn("bg-[#e46c5b] text-white", fallbackTextSizes[size])}>
          {fallback || <User className="w-1/2 h-1/2" />}
        </AvatarFallback>
      </Avatar>

      {/* Online indicator */}
      {online && (
        <div
          className={cn(
            "absolute -bottom-0.5 -right-0.5 lg:-bottom-1 lg:-right-1 bg-[#65efad] rounded-full border-2 border-[#272932]",
            indicatorSizes[size],
          )}
        />
      )}

      {/* Verified indicator */}
      {verified && (
        <div className={cn("absolute -top-0.5 -right-0.5 bg-[#50a7e7] rounded-full", indicatorSizes[size])} />
      )}
    </div>
  )
}
