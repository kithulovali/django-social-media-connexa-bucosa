"use client"

import { useState } from "react"
import { LeftSidebar } from "@/components/layout/left-sidebar"
import { Header } from "@/components/layout/header"
import { PostCard } from "@/components/post-card"
import { RightSidebar } from "@/components/layout/right-sidebar"
import { BottomNavbar } from "@/components/layout/bottom-navbar"
import { GradientButton } from "@/components/ui/gradient-button"
import { SlidersHorizontal } from "lucide-react"
import { cn } from "@/lib/utils" // Import cn for conditional class names

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("group") // Default active category

  const postData = [
    {
      imageSrc: "/placeholder.svg?height=200&width=300",
      avatarSrc: "/placeholder.svg?height=48&width=48",
      name: "Edwerd Evans",
      level: "Level 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua.",
      price: "Starting at $20",
      rating: 4.9,
      reviews: 25,
      category: "group", // Assign a category
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=300",
      avatarSrc: "/placeholder.svg?height=48&width=48",
      name: "Ted Stinson",
      level: "Level 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua.",
      price: "Starting at $20",
      rating: 4.9,
      reviews: 25,
      category: "Fellowship", // Assign a category
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=300",
      avatarSrc: "/placeholder.svg?height=48&width=48",
      name: "Lily Aldrian",
      level: "Level 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua.",
      price: "Starting at $20",
      rating: 4.9,
      reviews: 25,
      category: "Bucosa", // Assign a category
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=300",
      avatarSrc: "/placeholder.svg?height=48&width=48",
      name: "Edwerd Evans",
      level: "Level 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua.",
      price: "Starting at $20",
      rating: 4.9,
      reviews: 25,
      category: "group", // Assign a category
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=300",
      avatarSrc: "/placeholder.svg?height=48&width=48",
      name: "Ted Stinson",
      level: "Level 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua.",
      price: "Starting at $20",
      rating: 4.9,
      reviews: 25,
      category: "Bubusa", // Assign a category
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=300",
      avatarSrc: "/placeholder.svg?height=48&width=48",
      name: "Lily Aldrian",
      level: "Level 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua.",
      price: "Starting at $20",
      rating: 4.9,
      reviews: 25,
      category: "Others", // Assign a category
    },
  ]

  const categories = ["group", "Fellowship", "Bucosa", "Bubusa", "Others"]

  const filteredPosts = postData.filter((post) => post.category === activeCategory)

  return (
    <div className="flex min-h-screen bg-background text-white">
      <LeftSidebar />
      <main className="flex-1 flex flex-col pb-16 md:pb-0">
        <Header />
        <div className="p-4 md:p-6 flex-grow overflow-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 sm:mb-0">All Posts Area</h1>
            <GradientButton
              variant="outline"
              className="rounded-full px-6 py-2 flex items-center space-x-2 border-accent-yellow text-accent-yellow"
              onClick={() => console.log("Filters button clicked")}
            >
              <SlidersHorizontal className="h-5 w-5" />
              <span>Filters</span>
            </GradientButton>
          </div>
          <div className="flex space-x-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <GradientButton
                key={index}
                className={cn(
                  "rounded-full px-6 py-2 whitespace-nowrap",
                  activeCategory === category
                    ? "bg-gradient-orange-red"
                    : "bg-card text-text-light-gray hover:bg-card/80",
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </GradientButton>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
        </div>
      </main>
      <RightSidebar />
      <BottomNavbar />
    </div>
  )
}
