"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"

export function RightSidebar() {
  const suggestedUsers = [
    {
      avatar: "/placeholder.svg?height=40&width=40",
      name: "Faraz Tariq",
      status: "Super Active",
      verified: false,
    },
    {
      avatar: "/placeholder.svg?height=40&width=40",
      name: "Tina Tzoo",
      status: "Super Active",
      verified: false,
    },
    {
      avatar: "/placeholder.svg?height=40&width=40",
      name: "MKBHD",
      status: "Super Active",
      verified: true,
    },
  ]

  const groups = [
    {
      avatar: "/placeholder.svg?height=40&width=40",
      name: "Designers Guild",
      members: "120 members",
    },
    {
      avatar: "/placeholder.svg?height=40&width=40",
      name: "Developers Hub",
      members: "345 members",
    },
    {
      avatar: "/placeholder.svg?height=40&width=40",
      name: "Content Creators",
      members: "88 members",
    },
  ]

  return (
    <aside className="hidden lg:flex w-80 bg-background p-6 flex-col space-y-6 rounded-l-2xl shadow-lg">
      {/* ALTERSKY Section */}
      <div className="bg-card rounded-xl p-4 flex flex-col items-center space-y-4">
        <h2 className="text-text-medium-gray text-sm font-semibold uppercase self-start">ALTERSKY</h2>
        <Image src="/placeholder.svg?height=60&width=60" alt="Altersky Coin" width={60} height={60} />
        <p className="text-white text-3xl font-bold">12,256</p>
        <div className="flex justify-center space-x-2 w-full">
          <GradientButton
            variant="outline"
            size="sm"
            className="rounded-full text-accent-yellow border-accent-yellow px-4 py-1"
            onClick={() => console.log("Followers button clicked")}
          >
            25 followers
          </GradientButton>
          <GradientButton
            variant="outline"
            size="sm"
            className="rounded-full text-accent-yellow border-accent-yellow px-4 py-1"
            onClick={() => console.log("Following button clicked")}
          >
            14 following
          </GradientButton>
        </div>
        <div className="flex justify-center space-x-2 w-full">
          <GradientButton className="flex-1 rounded-full" onClick={() => console.log("Order button clicked")}>
            Order
          </GradientButton>
          <GradientButton className="flex-1 rounded-full" onClick={() => console.log("ProPass button clicked")}>
            ProPass
          </GradientButton>
        </div>
      </div>

      {/* Suggested For You */}
      <div className="bg-card rounded-xl p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-lg font-semibold">SUGGESTED FOR YOU</h2>
          <button
            className="text-text-medium-gray text-sm hover:underline"
            onClick={() => console.log("See All suggested clicked")}
          >
            See All
          </button>
        </div>
        {suggestedUsers.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-white font-medium flex items-center">
                  {user.name} {user.verified && <CheckCircle className="h-4 w-4 text-blue-400 ml-1" />}
                </p>
                <p className="text-text-medium-gray text-sm">{user.status}</p>
              </div>
            </div>
            <GradientButton
              size="sm"
              className="rounded-full px-4 py-1"
              onClick={() => console.log(`Follow ${user.name} clicked`)}
            >
              Follow
            </GradientButton>
          </div>
        ))}
      </div>

      {/* Groups Section */}
      <div className="bg-card rounded-xl p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-lg font-semibold">GROUPS</h2>
          <GradientButton
            size="sm"
            className="rounded-full px-4 py-1"
            onClick={() => console.log("Create Group clicked")}
          >
            Create Group
          </GradientButton>
        </div>
        {groups.map((group, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src={group.avatar || "/placeholder.svg"}
                alt={group.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-white font-medium">{group.name}</p>
                <p className="text-text-medium-gray text-sm">{group.members}</p>
              </div>
            </div>
            <GradientButton
              size="sm"
              className="rounded-full px-4 py-1"
              onClick={() => console.log(`Join ${group.name} clicked`)}
            >
              Join Group
            </GradientButton>
          </div>
        ))}
      </div>
    </aside>
  )
}
