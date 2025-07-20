"use client"

import Image from "next/image"
import { Home, Heart, Rabbit, BarChart, LineChart, Gem, User, Settings, LogOut } from "lucide-react"

const navItems = [
  { icon: Home, label: "Home", onClick: () => console.log("Home clicked") },
  { icon: Heart, label: "Pumpkin", onClick: () => console.log("Pumpkin clicked") },
  { icon: Rabbit, label: "Rabbit", onClick: () => console.log("Rabbit clicked") },
  { icon: BarChart, label: "Bar Chart", onClick: () => console.log("Bar Chart clicked") },
  { icon: LineChart, label: "Line Chart", onClick: () => console.log("Line Chart clicked") },
  { icon: Gem, label: "Chip", onClick: () => console.log("Chip clicked") },
  { icon: User, label: "User", onClick: () => console.log("User clicked") },
  { icon: Settings, label: "Settings", onClick: () => console.log("Settings clicked") },
  { icon: LogOut, label: "Logout", onClick: () => console.log("Logout clicked") },
]

export function LeftSidebar() {
  return (
    <div className="hidden md:flex w-20 bg-gradient-sidebar flex-col items-center py-6 rounded-r-2xl shadow-lg">
      <div className="mb-10">
        <Image
          src="/placeholder.svg?height=60&width=60"
          alt="Bugema University Bucosa Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>
      <nav className="flex flex-col items-center space-y-8 flex-grow">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="relative group p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={item.label}
          >
            <item.icon
              className="w-7 h-7 text-white opacity-80 group-hover:opacity-100 transition-opacity"
              style={{
                background: "linear-gradient(to bottom, #ff8a00, #e52e71)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            />
            <span className="sr-only">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
