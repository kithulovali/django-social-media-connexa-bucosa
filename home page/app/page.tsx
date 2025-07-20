import {
  Search,
  Bell,
  MessageCircle,
  Heart,
  Share,
  Eye,
  MoreHorizontal,
  Send,
  Home,
  Users,
  TrendingUp,
  Settings,
  User,
  Zap,
  Menu,
  ImageIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#1a1c26] text-white">
      {/* Mobile Header */}
      <header className="bg-[#272932] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between sticky top-0 z-50">
        {/* Mobile Menu & Logo */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="lg:hidden text-white hover:bg-[#1a1c26]">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#0d0f16] border-none p-0 w-20">
              <div className="flex flex-col items-center py-6 gap-4 h-full">
                <Button size="icon" variant="ghost" className="bg-[#e46c5b] hover:bg-[#e46c5b]/80 rounded-xl">
                  <Home className="w-5 h-5 text-white" />
                </Button>
                <Button size="icon" variant="ghost" className="text-[#e46c5b] hover:bg-[#272932] rounded-xl">
                  <div className="w-5 h-5 bg-[#e46c5b] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">3</span>
                  </div>
                </Button>
                <Button size="icon" variant="ghost" className="text-[#e46c5b] hover:bg-[#272932] rounded-xl">
                  <Users className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-[#e46c5b] hover:bg-[#272932] rounded-xl">
                  <TrendingUp className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-[#e46c5b] hover:bg-[#272932] rounded-xl">
                  <Zap className="w-5 h-5" />
                </Button>
                <div className="flex-1"></div>
                <Button size="icon" variant="ghost" className="text-[#e46c5b] hover:bg-[#272932] rounded-xl">
                  <Settings className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-[#e46c5b] hover:bg-[#272932] rounded-xl">
                  <User className="w-5 h-5" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 sm:w-10 sm:h-10 bg-[#e46c5b] rounded-full flex items-center justify-center text-white font-bold text-[10px] sm:text-xs">
              BUCOSA
            </div>
          </div>
        </div>

        {/* Search Bar - Hidden on small mobile, shown on larger screens */}
        <div className="hidden sm:flex flex-1 max-w-md mx-4 lg:mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8f8f8f] w-4 h-4" />
            <Input
              placeholder="Search"
              className="bg-[#1a1c26] border-none pl-10 text-white placeholder:text-[#8f8f8f] w-full"
            />
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Search Button */}
          <Button size="icon" variant="ghost" className="sm:hidden text-[#8f8f8f] hover:bg-[#1a1c26]">
            <Search className="w-4 h-4" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="bg-white text-[#1a1c26] hover:bg-[#f0f0f0] rounded-xl relative w-8 h-8 sm:w-10 sm:h-10"
          >
            <Bell className="w-3 h-3 sm:w-4 sm:h-4" />
            <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-[#e46c5b] rounded-full"></div>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="bg-white text-[#e46c5b] hover:bg-[#f0f0f0] rounded-xl w-8 h-8 sm:w-10 sm:h-10"
          >
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="bg-white text-[#e46c5b] hover:bg-[#f0f0f0] rounded-xl w-8 h-8 sm:w-10 sm:h-10"
          >
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#e46c5b] rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">
              99
            </div>
          </Button>
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-[#65efad]">
            <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User profile" className="object-cover" />
            <AvatarFallback className="bg-[#e46c5b] text-white">U</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Left Sidebar */}
        <aside className="hidden lg:flex w-20 bg-[#0d0f16] min-h-screen flex-col items-center py-6 gap-4 sticky top-[73px] h-[calc(100vh-73px)]">
          <Button size="icon" variant="ghost" className="bg-[#e46c5b] hover:bg-[#e46c5b]/80 rounded-xl">
            <Home className="w-5 h-5 text-white" />
          </Button>
          <Button size="icon" variant="ghost" className="text-[#e46c5b] hover:bg-[#272932] rounded-xl">
            <div className="w-5 h-5 bg-[#e46c5b] rounded-full flex items-center justify-center">
              <span className="text-white text-xs">3</span>
            </div>
          </Button>
          <Button size="icon" variant="ghost" className="text-[#e46c5b] hover:bg-[#272932] rounded-xl">
            <Users className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="text-[#e46c5b] hover:bg-[#272932] rounded-xl">
            <TrendingUp className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="text-[#e46c5b] hover:bg-[#272932] rounded-xl">
            <Zap className="w-5 h-5" />
          </Button>
          <div className="flex-1"></div>
          <Button size="icon" variant="ghost" className="text-[#e46c5b] hover:bg-[#272932] rounded-xl">
            <Settings className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="text-[#e46c5b] hover:bg-[#272932] rounded-xl">
            <User className="w-5 h-5" />
          </Button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-3 sm:p-4 lg:p-6 max-w-full lg:max-w-2xl">
          {/* Mobile Search Bar */}
          <div className="sm:hidden mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8f8f8f] w-4 h-4" />
              <Input
                placeholder="Search"
                className="bg-[#272932] border-none pl-10 text-white placeholder:text-[#8f8f8f] w-full"
              />
            </div>
          </div>

          {/* Newsfeed Banner */}
          <div className="bg-gradient-to-r from-[#e46c5b] via-[#50a7e7] to-[#50a7e7] rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
            <div className="text-xs sm:text-sm text-white/80 mb-2">Newsfeed</div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
              Check What Your Friends Up To!
            </h1>
            <p className="text-white/80 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              Conveniently customize proactive web services for leveraged without continually aggregate frictionless ou
              velles richard and very customize continually.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Input
                placeholder="What's on your mind, Kevin ?"
                className="flex-1 bg-black/20 border-none text-white placeholder:text-white/60 text-sm"
              />
              <div className="flex items-center gap-2 sm:gap-3">
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 w-8 h-8 sm:w-10 sm:h-10">
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 w-8 h-8 sm:w-10 sm:h-10">
                  <div className="w-4 h-4 bg-white/20 rounded"></div>
                </Button>
                <Button className="bg-[#e46c5b] hover:bg-[#e46c5b]/80 text-white px-4 sm:px-6 text-sm">Create</Button>
              </div>
            </div>
          </div>

          {/* Fellowship Post */}
          <Card className="bg-[#272932] border-none mb-4 sm:mb-6">
            <CardContent className="p-0">
              <div className="p-3 sm:p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                    <AvatarImage
                      src="/placeholder.svg?height=80&width=80"
                      alt="Fellowship profile"
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-[#e46c5b] text-white">F</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-white text-sm sm:text-base">Fellowship</h3>
                    <p className="text-[#8f8f8f] text-xs sm:text-sm">Public</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button className="bg-[#e46c5b] hover:bg-[#e46c5b]/80 text-white text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9">
                    Follow
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-[#8f8f8f] hover:bg-[#1a1c26] w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative w-full aspect-video sm:aspect-[3/2] bg-[#1a1c26] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Fellowship meeting with community members discussing projects"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px"
                    className="object-cover transition-opacity duration-300"
                    priority={false}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    onLoad={() => {}}
                    onError={() => {}}
                  />

                  {/* Loading skeleton overlay */}
                  <div className="absolute inset-0 bg-[#1a1c26] animate-pulse flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-[#8f8f8f]" />
                  </div>

                  {/* Post button overlay */}
                  <Button className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 hover:bg-black/70 text-white text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9 backdrop-blur-sm">
                    Post
                  </Button>
                </div>
              </div>

              <div className="p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-[#8f8f8f] hover:text-white hover:bg-[#1a1c26] w-8 h-8 sm:w-10 sm:h-10"
                    >
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-[#8f8f8f] hover:text-white hover:bg-[#1a1c26] w-8 h-8 sm:w-10 sm:h-10"
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-[#8f8f8f] hover:text-white hover:bg-[#1a1c26] w-8 h-8 sm:w-10 sm:h-10"
                    >
                      <Share className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                    <Button className="bg-[#e46c5b] hover:bg-[#e46c5b]/80 text-white text-xs sm:text-sm px-3 sm:px-4 rounded-full h-8 sm:h-9">
                      💰 Donate
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 text-[#8f8f8f] text-xs sm:text-sm">
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>56 Views</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="flex -space-x-1 sm:-space-x-2">
                    <Avatar className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-[#272932]">
                      <AvatarImage
                        src="/placeholder.svg?height=48&width=48"
                        alt="User who liked"
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-[#e46c5b] text-white text-xs">K</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-[#272932]">
                      <AvatarImage
                        src="/placeholder.svg?height=48&width=48"
                        alt="User who liked"
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-[#e46c5b] text-white text-xs">A</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-[#272932]">
                      <AvatarImage
                        src="/placeholder.svg?height=48&width=48"
                        alt="User who liked"
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-[#e46c5b] text-white text-xs">B</AvatarFallback>
                    </Avatar>
                  </div>
                  <span className="text-[#8f8f8f] text-xs sm:text-sm">Liked by Kithulovali and 34 others</span>
                </div>

                <p className="text-[#c4c4c4] text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  What you need to do for this is very simple. Register and click the Become a Creator button. Making
                  money is not far off. Come on, be a creator.
                </p>

                <div className="flex items-center gap-2 sm:gap-3">
                  <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                    <AvatarImage
                      src="/placeholder.svg?height=64&width=64"
                      alt="Your profile"
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-[#e46c5b] text-white">U</AvatarFallback>
                  </Avatar>
                  <Input
                    placeholder="Post a comment..."
                    className="flex-1 bg-[#1a1c26] border-none text-white placeholder:text-[#8f8f8f] text-sm h-8 sm:h-10"
                  />
                  <Button className="bg-[#e46c5b] hover:bg-[#e46c5b]/80 text-white px-4 sm:px-6 text-sm h-8 sm:h-10">
                    Post
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Right Sidebar - Hidden on mobile, shown on tablet and desktop */}
        <aside className="hidden md:block w-72 lg:w-80 p-4 lg:p-6 space-y-4 lg:space-y-6 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto">
          {/* User Profile Card */}
          <Card className="bg-[#272932] border-none">
            <CardContent className="p-3 lg:p-4">
              <div className="flex items-center justify-between mb-3 lg:mb-4">
                <h3 className="font-semibold text-white text-sm lg:text-base">ALTERSKY</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#65efad] rounded-full"></div>
                  <span className="text-[#8f8f8f] text-xs lg:text-sm">Online</span>
                </div>
              </div>

              <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                <Avatar className="w-10 h-10 lg:w-12 lg:h-12">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="ALTERSKY profile"
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-[#e46c5b] text-white">⚡</AvatarFallback>
                </Avatar>
                <div className="flex gap-3 lg:gap-4">
                  <div className="text-center">
                    <div className="text-white text-xs lg:text-sm">25 followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white text-xs lg:text-sm">14 following</div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-3 lg:mb-4">
                <div className="text-xl lg:text-2xl font-bold text-white">12,256</div>
                <div className="text-[#8f8f8f] text-xs lg:text-sm">Buncoins</div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 bg-[#e46c5b] hover:bg-[#e46c5b]/80 text-white text-xs lg:text-sm h-8 lg:h-9">
                  Order
                </Button>
                <Button className="flex-1 bg-[#e46c5b] hover:bg-[#e46c5b]/80 text-white text-xs lg:text-sm h-8 lg:h-9">
                  ProPass
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Suggested Users */}
          <Card className="bg-[#272932] border-none">
            <CardContent className="p-3 lg:p-4">
              <div className="flex items-center justify-between mb-3 lg:mb-4">
                <h3 className="font-semibold text-white text-sm lg:text-base">SUGGESTED FOR YOU</h3>
                <Button variant="ghost" className="text-[#8f8f8f] text-xs lg:text-sm p-0 h-auto">
                  See All
                </Button>
              </div>

              <div className="space-y-2 lg:space-y-3">
                {[
                  {
                    name: "Faraz Tariq",
                    role: "Super Active",
                    avatar: "FT",
                    src: "/placeholder.svg?height=64&width=64",
                  },
                  { name: "Tina Tzoo", role: "Super Active", avatar: "TT", src: "/placeholder.svg?height=64&width=64" },
                  {
                    name: "MKBHD",
                    role: "Super Active",
                    avatar: "MK",
                    verified: true,
                    src: "/placeholder.svg?height=64&width=64",
                  },
                ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <Avatar className="w-6 h-6 lg:w-8 lg:h-8">
                        <AvatarImage
                          src={user.src || "/placeholder.svg"}
                          alt={`${user.name} profile`}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-[#e46c5b] text-white text-[10px] lg:text-xs">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-white text-xs lg:text-sm font-medium">{user.name}</span>
                          {user.verified && <div className="w-2 h-2 lg:w-3 lg:h-3 bg-[#50a7e7] rounded-full"></div>}
                        </div>
                        <div className="text-[#8f8f8f] text-[10px] lg:text-xs">{user.role}</div>
                      </div>
                    </div>
                    <Button className="bg-[#e46c5b] hover:bg-[#e46c5b]/80 text-white text-[10px] lg:text-xs px-2 lg:px-3 py-1 h-6 lg:h-7">
                      Follow
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Live Chat */}
          <Card className="bg-[#272932] border-none">
            <CardContent className="p-3 lg:p-4">
              <div className="flex items-center justify-between mb-3 lg:mb-4">
                <h3 className="font-semibold text-white text-sm lg:text-base">LIVE CHAT</h3>
                <Button className="bg-[#1a1c26] hover:bg-[#0d0f16] text-white text-xs lg:text-sm px-2 lg:px-3 py-1 h-6 lg:h-8">
                  Join Group
                </Button>
              </div>

              <div className="space-y-2 lg:space-y-3 mb-3 lg:mb-4">
                {[
                  {
                    name: "BigDaddy",
                    message: "Lorem ipsum",
                    time: "2h ago",
                    online: true,
                    src: "/placeholder.svg?height=64&width=64",
                  },
                  {
                    name: "NoobPlayer69",
                    message: "Lorem ipsum dolor sit amet, conse",
                    time: "2h ago",
                    online: false,
                    src: "/placeholder.svg?height=64&width=64",
                  },
                  {
                    name: "Mr Jam",
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    time: "2h ago",
                    online: false,
                    src: "/placeholder.svg?height=64&width=64",
                  },
                ].map((chat, index) => (
                  <div key={index} className="flex items-start gap-2 lg:gap-3">
                    <div className="relative">
                      <Avatar className="w-6 h-6 lg:w-8 lg:h-8">
                        <AvatarImage
                          src={chat.src || "/placeholder.svg"}
                          alt={`${chat.name} profile`}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-[#e46c5b] text-white text-[10px] lg:text-xs">
                          {chat.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      {chat.online && (
                        <div className="absolute -bottom-0.5 -right-0.5 lg:-bottom-1 lg:-right-1 w-2 h-2 lg:w-3 lg:h-3 bg-[#65efad] rounded-full border-2 border-[#272932]"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs lg:text-sm font-medium">{chat.name}</span>
                        <span className="text-[#8f8f8f] text-[10px] lg:text-xs">{chat.time}</span>
                      </div>
                      <p className="text-[#8f8f8f] text-[10px] lg:text-xs truncate">{chat.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Input
                  placeholder="Send Message"
                  className="flex-1 bg-[#1a1c26] border-none text-white placeholder:text-[#8f8f8f] text-xs lg:text-sm h-8 lg:h-9"
                />
                <Button size="icon" className="bg-[#e46c5b] hover:bg-[#e46c5b]/80 w-8 h-8 lg:w-9 lg:h-9">
                  <Send className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#272932] border-t border-[#1a1c26] px-4 py-2">
        <div className="flex items-center justify-around">
          <Button size="icon" variant="ghost" className="text-[#e46c5b] hover:bg-[#1a1c26] rounded-xl">
            <Home className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="text-[#8f8f8f] hover:bg-[#1a1c26] rounded-xl">
            <Users className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="text-[#8f8f8f] hover:bg-[#1a1c26] rounded-xl">
            <TrendingUp className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="text-[#8f8f8f] hover:bg-[#1a1c26] rounded-xl">
            <MessageCircle className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="text-[#8f8f8f] hover:bg-[#1a1c26] rounded-xl">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Padding Bottom for Fixed Navigation */}
      <div className="md:hidden h-16"></div>
    </div>
  )
}
