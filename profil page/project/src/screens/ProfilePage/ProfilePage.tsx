import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Progress } from "../../components/ui/progress";
import { Separator } from "../../components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export const ProfilePage = (): JSX.Element => {
  // State management
  const [activeTab, setActiveTab] = useState("groups");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [followedUsers, setFollowedUsers] = useState<Set<number>>(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation sidebar icons data
  const sidebarIcons = [
    { src: "/vector-3.svg", label: "Home", action: () => console.log("Navigate to Home"), primary: true },
    { src: "/vector-17.svg", label: "Analytics", action: () => console.log("Navigate to Analytics"), primary: false },
    { src: "/vector-13.svg", label: "Groups", action: () => console.log("Navigate to Groups"), primary: true },
    { src: "/vector-6.svg", label: "Settings", action: () => console.log("Navigate to Settings"), primary: false },
    { src: "/vector-16.svg", label: "Help", action: () => console.log("Navigate to Help"), primary: false },
    { src: "/vector-1.svg", label: "Profile", action: () => console.log("Navigate to Profile"), primary: true },
    { src: "/vector-12.svg", label: "Messages", action: () => console.log("Navigate to Messages"), primary: true },
  ];

  // Bottom navigation items (primary items for mobile)
  const bottomNavItems = sidebarIcons.filter(item => item.primary);

  // Suggested users data
  const suggestedUsers = [
    {
      name: "Faraz Tariq",
      status: "Super Active",
      avatar: "/rectangle-6369.png",
    },
    {
      name: "Tina Tzoo",
      status: "Super Active",
      avatar: "/rectangle-6370.png",
    },
    {
      name: "MKBHD",
      status: "Super Active",
      avatar: "/rectangle-6371.png",
      verified: true,
    },
  ];

  // Live chat data
  const liveChats = [
    {
      name: "BigDaddy",
      message: "Lorem ipsum?",
      time: "2h ago",
      avatar: "/rectangle-6356.png",
      online: true,
    },
    {
      name: "NoobPlayer69",
      message: "Lorem ipsum dolor sit amet, conse",
      time: "2h ago",
      avatar: "/rectangle-6357.png",
      online: false,
    },
    {
      name: "Mr Jam",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "2h ago",
      avatar: "/rectangle-6359.png",
      online: true,
    },
  ];

  // Event handlers
  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
    console.log(isSubscribed ? "Unsubscribed" : "Subscribed");
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    console.log(isFollowing ? "Unfollowed" : "Followed");
  };

  const handleMessage = () => {
    console.log("Opening message dialog");
  };

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      console.log("Searching for:", searchQuery);
    }
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      console.log("Sending message:", messageInput);
      setMessageInput("");
    }
  };

  const handleMessageKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleFollowUser = (index: number) => {
    const newFollowedUsers = new Set(followedUsers);
    if (newFollowedUsers.has(index)) {
      newFollowedUsers.delete(index);
    } else {
      newFollowedUsers.add(index);
    }
    setFollowedUsers(newFollowedUsers);
    console.log(`${followedUsers.has(index) ? "Unfollowed" : "Followed"} user ${index}`);
  };

  const handleNotifications = () => {
    console.log("Opening notifications");
  };

  const handleMessages = () => {
    console.log("Opening messages");
  };

  return (
    <div className="bg-[#1a1c26] min-h-screen w-full">
      {/* Mobile Header - Visible only on mobile */}
      <div className="lg:hidden bg-[#272932] p-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-orange-500 text-white"
          >
            <div className="w-5 h-5 flex flex-col justify-center gap-1">
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
            </div>
          </button>
          <img
            className="w-10 h-10"
            alt="Logo BUCOSA"
            src="/logo-bucosa-02-2.png"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleNotifications}
            className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-orange-500 text-white transition-all duration-200 hover:from-blue-600 hover:to-orange-600"
          >
            <div className="w-5 h-5 bg-[url(/vector-2.svg)] bg-[100%_100%]" />
          </button>
          <button
            onClick={handleMessages}
            className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-blue-500 text-white transition-all duration-200 hover:from-orange-600 hover:to-blue-600"
          >
            <div className="w-5 h-5 bg-[url(/vector-7.svg)] bg-[100%_100%]" />
          </button>
          <Avatar className="w-10 h-10">
            <img
              className="object-cover w-full h-full"
              alt="User profile"
              src="/rectangle-6472.png"
            />
          </Avatar>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="bg-[#272932] w-64 h-full p-4 space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white font-semibold">Menu</h3>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-xl"
              >
                ×
              </button>
            </div>
            {sidebarIcons.map((icon, index) => (
              <button
                key={`mobile-nav-${index}`}
                onClick={() => {
                  icon.action();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-orange-500/20 hover:from-blue-500/40 hover:to-orange-500/40 text-white transition-all duration-200"
              >
                <div className={`w-6 h-6 bg-[url(${icon.src})] bg-[100%_100%]`} />
                <span>{icon.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Desktop Sidebar - Hidden on mobile */}
        <aside className="hidden lg:block w-32 xl:w-40 bg-[url(/subtract.svg)] bg-[100%_100%] relative flex-shrink-0">
          {/* Logo */}
          <img
            className="w-16 xl:w-20 h-16 xl:h-20 mx-auto mt-8 mb-8"
            alt="Logo BUCOSA"
            src="/logo-bucosa-02-2.png"
          />

          {/* Sidebar icons */}
          <div className="space-y-6 px-4">
            {sidebarIcons.map((icon, index) => (
              <button
                key={`sidebar-icon-${index}`}
                onClick={icon.action}
                className="w-full h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500/20 to-orange-500/20 hover:from-blue-500/40 hover:to-orange-500/40 transition-all duration-200 group"
                title={icon.label}
              >
                <div className={`w-6 h-6 bg-[url(${icon.src})] bg-[100%_100%] group-hover:scale-110 transition-transform duration-200`} />
              </button>
            ))}
          </div>

          {/* Gradient headers */}
          <div className="absolute w-full h-8 top-0 left-0 bg-gradient-to-r from-blue-500 to-orange-500" />
          <div className="absolute w-full h-8 bottom-0 left-0 bg-gradient-to-r from-orange-500 to-blue-500" />
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Desktop Header - Hidden on mobile */}
          <div className="hidden lg:flex items-center justify-between p-4 xl:p-6">
            {/* Search bar */}
            <div className="flex-1 max-w-md xl:max-w-lg bg-[#272932] rounded-2xl flex items-center px-6 py-3">
              <SearchIcon className="w-5 h-5 text-[#8f8f8f] mr-3" />
              <Input
                className="border-none bg-transparent text-[#8f8f8f] font-normal font-['Montserrat',Helvetica] focus-visible:ring-0 focus-visible:ring-offset-0 text-sm xl:text-base"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearch}
              />
            </div>

            {/* Header actions */}
            <div className="flex items-center gap-3 xl:gap-4">
              <button
                onClick={handleNotifications}
                className="w-12 h-12 xl:w-14 xl:h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 flex items-center justify-center transition-all duration-200"
              >
                <div className="w-5 h-5 xl:w-6 xl:h-6 bg-[url(/vector-2.svg)] bg-[100%_100%]" />
              </button>
              <button
                onClick={handleMessages}
                className="w-12 h-12 xl:w-14 xl:h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 flex items-center justify-center transition-all duration-200"
              >
                <div className="w-5 h-5 xl:w-6 xl:h-6 bg-[url(/vector-7.svg)] bg-[100%_100%]" />
              </button>
              <Avatar className="w-12 h-12 xl:w-16 xl:h-16">
                <img
                  className="object-cover w-full h-full"
                  alt="User profile"
                  src="/rectangle-6472.png"
                />
              </Avatar>
            </div>
          </div>

          {/* Mobile Search - Visible only on mobile */}
          <div className="lg:hidden p-4">
            <div className="bg-[#272932] rounded-2xl flex items-center px-4 py-3">
              <SearchIcon className="w-5 h-5 text-[#8f8f8f] mr-3" />
              <Input
                className="border-none bg-transparent text-[#8f8f8f] font-normal font-['Montserrat',Helvetica] focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearch}
              />
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 xl:gap-6 p-4 xl:p-6 pb-24 lg:pb-6">
            {/* Main Profile Section */}
            <div className="xl:col-span-8 space-y-4 xl:space-y-6">
              {/* Profile Header */}
              <div className="relative">
                <img
                  className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover rounded-xl"
                  alt="Cover image"
                  src="/csgo-1.svg"
                />

                <div className="absolute top-4 right-4">
                  <button className="w-10 h-10 bg-[#272932] rounded-xl opacity-75 hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                    <div className="w-5 h-5">
                      <img
                        className="w-3 h-3"
                        alt="Edit icon"
                        src="/vector-9.svg"
                      />
                    </div>
                  </button>
                </div>

                {/* Profile Info */}
                <div className="relative -mt-12 sm:-mt-16 px-4 sm:px-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6">
                    <Avatar className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border-4 border-[#1a1c26]">
                      <img
                        className="object-cover w-full h-full"
                        alt="Profile picture"
                        src="/rectangle-6472.png"
                      />
                    </Avatar>

                    <div className="flex-1 text-center sm:text-left">
                      <h1 className="font-['Montserrat',Helvetica] font-semibold text-white text-lg sm:text-xl md:text-2xl">
                        Joel Graphiste
                      </h1>
                      <p className="font-['Montserrat',Helvetica] font-normal text-[#ffffff99] text-sm md:text-base">
                        @grapiste999
                      </p>
                      <p className="font-['Montserrat',Helvetica] font-normal text-[#ffffff99] text-xs sm:text-sm mt-2 max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-center sm:justify-start items-center gap-4 sm:gap-8 mt-4 sm:mt-6">
                    <div className="text-center">
                      <div className="font-['Montserrat',Helvetica] font-semibold text-white text-base sm:text-lg">
                        2.5K
                      </div>
                      <div className="font-['Montserrat',Helvetica] font-normal text-white text-xs">
                        Followers
                      </div>
                    </div>

                    <Separator orientation="vertical" className="h-8 bg-white" />

                    <div className="text-center">
                      <div className="font-['Montserrat',Helvetica] font-semibold text-white text-base sm:text-lg">
                        1.3k
                      </div>
                      <div className="font-['Montserrat',Helvetica] font-normal text-white text-xs">
                        Following
                      </div>
                    </div>

                    <Separator orientation="vertical" className="h-8 bg-white" />

                    <div className="text-center">
                      <div className="font-['Montserrat',Helvetica] font-semibold text-white text-base sm:text-lg">
                        3
                      </div>
                      <div className="font-['Montserrat',Helvetica] font-normal text-white text-xs">
                        Groups
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
                    <Button
                      onClick={handleSubscribe}
                      className="flex-1 sm:flex-none sm:w-24 h-9 rounded-lg bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white text-xs font-semibold font-['Montserrat',Helvetica] transition-all duration-200"
                    >
                      {isSubscribed ? "Unsubscribe" : "Subscribe"}
                    </Button>
                    <Button
                      onClick={handleFollow}
                      className="flex-1 sm:flex-none sm:w-20 h-9 rounded-lg bg-transparent border-2 border-gradient-to-r from-blue-500 to-orange-500 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-orange-500/20 text-white text-xs font-semibold font-['Montserrat',Helvetica] transition-all duration-200"
                      style={{
                        borderImage: "linear-gradient(90deg, rgb(59 130 246), rgb(249 115 22)) 1"
                      }}
                    >
                      {isFollowing ? "Unfollow" : "Follow"}
                    </Button>
                    <Button
                      onClick={handleMessage}
                      className="flex-1 sm:flex-none sm:w-20 h-9 rounded-lg bg-transparent border-2 border-gradient-to-r from-orange-500 to-blue-500 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-blue-500/20 text-white text-xs font-semibold font-['Montserrat',Helvetica] transition-all duration-200"
                      style={{
                        borderImage: "linear-gradient(90deg, rgb(249 115 22), rgb(59 130 246)) 1"
                      }}
                    >
                      Message
                    </Button>
                  </div>
                </div>
              </div>

              {/* Level progress */}
              <div className="bg-[#272932] rounded-xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <span className="font-['Montserrat',Helvetica] font-light text-white text-sm">
                    Level 2
                  </span>
                  <div className="flex-1 w-full sm:w-auto">
                    <div className="relative">
                      <Progress
                        value={80}
                        className="h-4 sm:h-5 bg-[#483a64] rounded-full"
                      />
                      <div 
                        className="absolute top-0 left-0 h-4 sm:h-5 rounded-full bg-gradient-to-r from-blue-500 to-orange-500"
                        style={{ width: "80%" }}
                      />
                    </div>
                    <span className="text-white text-xs mt-1 block sm:hidden">
                      80%
                    </span>
                  </div>
                  <span className="hidden sm:block font-['Montserrat',Helvetica] font-normal text-white text-sm">
                    80%
                  </span>
                  <Button className="w-full sm:w-auto h-8 rounded-lg bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white text-xs font-semibold font-['Montserrat',Helvetica] transition-all duration-200">
                    Pro Pass
                  </Button>
                </div>
              </div>

              {/* Main content tabs */}
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <Card className="bg-[#272932] rounded-xl border-none">
                  <CardHeader className="px-4 sm:px-6 pt-4 pb-0">
                    <div className="flex justify-between items-center">
                      <TabsList className="bg-transparent h-auto p-0 gap-4 sm:gap-6">
                        <TabsTrigger
                          value="posts"
                          className="h-auto p-0 bg-transparent data-[state=inactive]:text-white data-[state=active]:text-transparent data-[state=active]:bg-clip-text data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-orange-500"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[url(/vector-4.svg)] bg-[100%_100%]" />
                            <span className="font-['Montserrat',Helvetica] font-bold text-xs sm:text-sm">
                              My Posts
                            </span>
                          </div>
                        </TabsTrigger>
                        <TabsTrigger
                          value="groups"
                          className="h-auto p-0 bg-transparent data-[state=inactive]:text-white data-[state=active]:text-transparent data-[state=active]:bg-clip-text data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-blue-500"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[url(/vector-11.svg)] bg-[100%_100%]" />
                            <span className="font-['Montserrat',Helvetica] font-bold text-xs sm:text-sm">
                              My Groups
                            </span>
                          </div>
                        </TabsTrigger>
                      </TabsList>
                      
                      <Button 
                        onClick={() => console.log("Create Group clicked")}
                        className="h-8 rounded-lg bg-transparent border-2 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-orange-500/20 text-white text-xs font-semibold font-['Montserrat',Helvetica] transition-all duration-200"
                        style={{
                          borderImage: "linear-gradient(90deg, rgb(59 130 246), rgb(249 115 22)) 1"
                        }}
                      >
                        <span className="hidden sm:inline">Create Group</span>
                        <span className="sm:hidden">Create</span>
                      </Button>
                    </div>
                    
                    <div className="relative h-1 mt-4">
                      <div className="absolute w-full h-1 bg-[#67696f]" />
                      <div 
                        className={`absolute h-1 bg-gradient-to-r transition-all duration-300 ${
                          activeTab === "posts" 
                            ? "from-blue-500 to-orange-500 w-20 left-0" 
                            : "from-orange-500 to-blue-500 w-24 left-24 sm:left-28"
                        }`}
                      />
                    </div>
                  </CardHeader>

                  <CardContent className="pt-6 px-4 sm:px-6">
                    <TabsContent value="posts" className="m-0">
                      <div className="text-center py-8">
                        <p className="text-white/60">No posts yet</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="groups" className="m-0">
                      <div className="space-y-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                          <div className="w-full lg:w-56 flex-shrink-0">
                            <img
                              className="w-full h-40 sm:h-48 lg:h-40 object-cover rounded-lg"
                              alt="Minecraft"
                              src="/rectangle-6397.png"
                            />
                            <div className="mt-4">
                              <Button
                                onClick={() => console.log("View Group clicked")}
                                variant="link"
                                className="p-0 h-auto text-white text-sm font-semibold font-['Montserrat',Helvetica] hover:bg-gradient-to-r hover:from-blue-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-all duration-200"
                              >
                                View Group
                              </Button>
                              <div className="flex items-center mt-1">
                                <span className="font-['Montserrat',Helvetica] font-semibold text-[#e4d86d] text-xs">
                                  4.9
                                </span>
                                <div className="w-3 h-3 ml-1 bg-[url(/vector-8.svg)] bg-[100%_100%]" />
                                <span className="font-['Montserrat',Helvetica] font-medium text-[#d6d6d6] text-xs ml-1">
                                  (25)
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                              <div className="flex items-center">
                                <img
                                  className="w-4 h-4 object-cover"
                                  alt="Minecraft logo"
                                  src="/minecraft-logo-5ead3a1535-seeklogo-1.png"
                                />
                                <span className="font-['Montserrat',Helvetica] font-bold text-white text-sm ml-3">
                                  Fellowship
                                </span>
                              </div>
                              <div className="flex items-center">
                                <span className="font-['Montserrat',Helvetica] font-semibold text-[#e4d86d] text-xs">
                                  4.9
                                </span>
                                <div className="w-3 h-3 ml-1 bg-[url(/vector-8.svg)] bg-[100%_100%]" />
                                <span className="font-['Montserrat',Helvetica] font-medium text-[#d6d6d6] text-xs ml-1">
                                  (25)
                                </span>
                              </div>
                            </div>

                            <p className="font-['Montserrat',Helvetica] font-normal text-white text-xs sm:text-sm mt-4 leading-relaxed">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua. Ut enim ad minim veniam. Lorem
                              ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam.
                            </p>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
                              <div className="font-['Montserrat',Helvetica] font-medium text-white text-sm">
                                Starting at 1000 Ugx
                              </div>
                              <Button 
                                onClick={() => console.log("Donate clicked")}
                                className="w-full sm:w-24 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white text-xs font-semibold font-['Montserrat',Helvetica] transition-all duration-200"
                              >
                                Donate
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex items-center gap-4">
                            <Avatar className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center">
                              <span className="font-['Montserrat',Helvetica] font-bold text-white text-sm">
                                M
                              </span>
                            </Avatar>
                            <div>
                              <div className="font-['Montserrat',Helvetica] font-medium text-[#ffffffcc] text-sm">
                                mel891
                              </div>
                              <div className="flex items-center">
                                <span className="font-['Montserrat',Helvetica] font-semibold text-[#e4d86d] text-xs">
                                  4.9
                                </span>
                                <div className="w-3 h-3 ml-1 bg-[url(/vector-8.svg)] bg-[100%_100%]" />
                              </div>
                            </div>
                          </div>
                          <p className="font-['Montserrat',Helvetica] font-normal text-[#ffffff99] text-xs sm:text-sm leading-relaxed flex-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam.
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                  </CardContent>
                </Card>
              </Tabs>
            </div>

            {/* Sidebar Content */}
            <div className="xl:col-span-4 space-y-4 xl:space-y-6">
              {/* Events card */}
              <Card className="bg-[#272932] rounded-xl border-none">
                <CardHeader className="px-4 sm:px-6 py-4">
                  <CardTitle className="font-['Montserrat',Helvetica] font-extrabold text-white text-sm">
                    Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      className="w-12 h-12 sm:w-14 sm:h-14 object-cover"
                      alt="Received"
                      src="/received-961764751107787-modified-1.png"
                    />
                    <div className="flex-1">
                      <div className="font-extrabold text-white text-lg sm:text-xl font-['Montserrat',Helvetica]">
                        12,256
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 mt-2">
                        <div className="px-3 py-1 rounded-full border-2 text-center" style={{
                          borderImage: "linear-gradient(90deg, rgb(59 130 246), rgb(249 115 22)) 1"
                        }}>
                          <span className="font-['Montserrat',Helvetica] font-normal text-white text-xs">
                            25 followers
                          </span>
                        </div>
                        <div className="px-3 py-1 rounded-full border-2 text-center" style={{
                          borderImage: "linear-gradient(90deg, rgb(249 115 22), rgb(59 130 246)) 1"
                        }}>
                          <span className="font-['Montserrat',Helvetica] font-normal text-white text-xs">
                            14 following
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button 
                      onClick={() => console.log("Order clicked")}
                      className="flex-1 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white text-xs font-semibold font-['Montserrat',Helvetica] transition-all duration-200"
                    >
                      Order
                    </Button>
                    <Button 
                      onClick={() => console.log("ProPass clicked")}
                      className="flex-1 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white text-xs font-semibold font-['Montserrat',Helvetica] transition-all duration-200"
                    >
                      ProPass
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Suggested users section */}
              <Card className="bg-[#272932] rounded-xl border-none">
                <CardHeader className="px-4 sm:px-6 py-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="font-['Montserrat',Helvetica] font-extrabold text-white text-sm">
                      Suggested For You
                    </CardTitle>
                    <Button
                      variant="link"
                      className="text-white text-xs font-medium p-0 h-auto hover:bg-gradient-to-r hover:from-blue-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-all duration-200"
                    >
                      See All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4">
                  <div className="space-y-4">
                    {suggestedUsers.map((user, index) => (
                      <div
                        key={`suggested-user-${index}`}
                        className="flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <Avatar className="w-10 h-10 flex-shrink-0">
                            <img
                              className="object-cover w-full h-full"
                              alt={user.name}
                              src={user.avatar}
                            />
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1 font-['Montserrat',Helvetica] font-medium text-white text-xs truncate">
                              {user.name}
                              {user.verified && (
                                <div className="w-3 h-3 bg-[url(/vector.svg)] bg-[100%_100%] flex-shrink-0" />
                              )}
                            </div>
                            <div className="font-['Montserrat',Helvetica] font-normal text-[#7f7f7f] text-xs truncate">
                              {user.status}
                            </div>
                          </div>
                        </div>
                        <Button 
                          onClick={() => handleFollowUser(index)}
                          className="w-16 h-7 rounded-lg bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white text-xs font-semibold font-['Montserrat',Helvetica] transition-all duration-200 flex-shrink-0"
                        >
                          {followedUsers.has(index) ? "Following" : "Follow"}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Live chat card */}
              <Card className="bg-[#272932] rounded-xl border-none">
                <CardHeader className="px-4 sm:px-6 py-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="font-['Montserrat',Helvetica] font-extrabold text-white text-sm">
                      Live Chat
                    </CardTitle>
                    <Button 
                      onClick={() => console.log("Join Group clicked")}
                      className="h-7 px-3 rounded-lg bg-transparent border-2 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-blue-500/20 text-white text-xs font-semibold font-['Montserrat',Helvetica] transition-all duration-200"
                      style={{
                        borderImage: "linear-gradient(90deg, rgb(249 115 22), rgb(59 130 246)) 1"
                      }}
                    >
                      <span className="hidden sm:inline">Join Group</span>
                      <span className="sm:hidden">Join</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4">
                  <div className="space-y-4 mb-4">
                    {liveChats.map((chat, index) => (
                      <div key={`chat-${index}`} className="flex items-start gap-3">
                        <div className="relative flex-shrink-0">
                          <Avatar className="w-10 h-10">
                            <img
                              className="object-cover w-full h-full"
                              alt={chat.name}
                              src={chat.avatar}
                            />
                          </Avatar>
                          {chat.online && (
                            <div className="absolute w-3 h-3 top-0 right-0 bg-[#64efac] rounded-full border-2 border-[#272932]" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <span className="font-['Montserrat',Helvetica] font-medium text-white text-xs truncate">
                              {chat.name}
                            </span>
                            <span className="font-['Montserrat',Helvetica] font-medium text-white text-xs flex-shrink-0 ml-2">
                              {chat.time}
                            </span>
                          </div>
                          <p className="font-['Montserrat',Helvetica] font-light text-[#ffffffcc] text-xs mt-1 line-clamp-2">
                            {chat.message}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#1a1c26] rounded-lg flex items-center justify-between px-4 py-3">
                    <Input
                      className="border-none bg-transparent text-xs text-[#8f8f8f] font-medium font-['Montserrat',Helvetica] focus-visible:ring-0 focus-visible:ring-offset-0 flex-1"
                      placeholder="Send Message"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      onKeyPress={handleMessageKeyPress}
                    />
                    <Button
                      onClick={handleSendMessage}
                      size="sm"
                      className="w-8 h-8 rounded bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 p-0 ml-2 transition-all duration-200"
                    >
                      <div className="w-4 h-4 rotate-45">
                        <img
                          className="w-full h-full"
                          alt="Send"
                          src="/vector-14.svg"
                        />
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar - Mobile Only */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#272932] border-t border-[#3a3d47] z-50">
          <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
            {bottomNavItems.map((item, index) => (
              <button
                key={`bottom-nav-${index}`}
                onClick={item.action}
                className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-orange-500/20 transition-all duration-200 min-w-0 flex-1"
              >
                <div className={`w-6 h-6 bg-[url(${item.src})] bg-[100%_100%] mb-1 transition-transform duration-200 hover:scale-110`} />
                <span className="text-white text-xs font-medium font-['Montserrat',Helvetica] truncate">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
          
          {/* Gradient accent bar */}
          <div className="h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500"></div>
        </div>

        {/* Bottom padding for mobile to account for bottom nav */}
        <div className="lg:hidden h-20"></div>
      </div>
    </div>
  );
};