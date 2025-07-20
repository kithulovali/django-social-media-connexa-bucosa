"use client"

import { Search, Bell, MessageSquare } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-background">
      <div className="relative flex items-center w-full max-w-md">
        <Search className="absolute left-3 h-5 w-5 text-text-medium-gray" />
        <Input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 rounded-full bg-card border-none text-white placeholder:text-text-medium-gray focus:ring-0 focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="relative p-2 rounded-full bg-card hover:bg-card/80 transition-colors"
          onClick={() => console.log("Notifications clicked")}
        >
          <Bell className="h-6 w-6 text-white" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-gradient-orange-red" />
          <span className="sr-only">Notifications</span>
        </button>
        <button
          className="relative p-2 rounded-full bg-card hover:bg-card/80 transition-colors"
          onClick={() => console.log("Messages clicked")}
        >
          <MessageSquare className="h-6 w-6 text-white" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-gradient-orange-red" />
          <span className="sr-only">Messages</span>
        </button>
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
          onClick={() => console.log("User profile clicked")}
        />
      </div>
    </header>
  )
}
