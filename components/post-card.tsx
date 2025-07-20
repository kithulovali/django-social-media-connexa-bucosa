import Image from "next/image"
import { Star } from "lucide-react"

interface PostCardProps {
  imageSrc: string
  avatarSrc: string
  name: string
  level: string
  description: string
  price: string
  rating: number
  reviews: number
}

export function PostCard({ imageSrc, avatarSrc, name, level, description, price, rating, reviews }: PostCardProps) {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg">
      <div className="relative w-full h-48">
        <Image
          src={imageSrc || "/placeholder.svg?height=200&width=300&query=Gaming scene"}
          alt="Post Image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
        <div className="absolute -bottom-6 left-4">
          <Image
            src={avatarSrc || "/placeholder.svg?height=48&width=48&query=User avatar"}
            alt="User Avatar"
            width={48}
            height={48}
            className="rounded-full border-2 border-card"
          />
        </div>
      </div>
      <div className="p-4 pt-8">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-text-medium-gray text-sm mb-2">{level}</p>
        <p className="text-text-light-gray text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-white font-semibold">{price}</p>
          <div className="flex items-center space-x-1 text-accent-yellow">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-text-medium-gray text-sm">({reviews})</span>
          </div>
        </div>
      </div>
    </div>
  )
}
