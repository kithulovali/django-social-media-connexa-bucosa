"use client"

import { Home, Heart, Rabbit, BarChart, LineChart } from "lucide-react"

const navItems = [
  { icon: Home, label: "Home", onClick: () => console.log("Home clicked (mobile)") },
  { icon: Heart, label: "Pumpkin", onClick: () => console.log("Pumpkin clicked (mobile)") },
  { icon: Rabbit, label: "Rabbit", onClick: () => console.log("Rabbit clicked (mobile)") },
  { icon: BarChart, label: "Bar Chart", onClick: () => console.log("Bar Chart clicked (mobile)") },
  { icon: LineChart, label: "Line Chart", onClick: () => console.log("Line Chart clicked (mobile)") },
]

export function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-card-foreground/10 md:hidden flex justify-around items-center h-16 z-50">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          className="flex flex-col items-center justify-center text-xs text-white opacity-80 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 p-2"
          aria-label={item.label}
        >
          <item.icon
            className="w-6 h-6 mb-1"
            style={{
              background: "linear-gradient(to bottom, #ff8a00, #e52e71)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  )
}
