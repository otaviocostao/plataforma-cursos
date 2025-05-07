"use client"

import { useEffect, useState } from "react"
import {
  BookOpen,
  Calendar,
  ChevronDown,
  ChevronRight,
  Clock,
  Compass,
  Download,
  FileText,
  Heart,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  MoreHorizontal,
  Play,
  Search,
  Settings,
  Share2,
  Star,
  TrendingUp,
  User,
  X,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoursePage() {
  const [activeModule, setActiveModule] = useState<number | null>(0)
  const [progress, setProgress] = useState(38)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [animateProgress, setAnimateProgress] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Animate progress bar after component mounts
    const timer = setTimeout(() => {
      setAnimateProgress(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const toggleModule = (index: number) => {
    setActiveModule(activeModule === index ? null : index)
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const modules = [
    {
      title: "Introduction to Web Development",
      completed: true,
      lessons: [
        { title: "Course Overview", duration: "10:25", completed: true },
        { title: "Setting Up Your Environment", duration: "15:40", completed: true },
        { title: "HTML Fundamentals", duration: "22:15", completed: true },
      ],
    },
    {
      title: "CSS Styling and Layout",
      completed: false,
      lessons: [
        { title: "CSS Selectors and Properties", duration: "18:30", completed: true },
        { title: "Flexbox Layout", duration: "24:15", completed: true },
        { title: "CSS Grid Layout", duration: "26:45", completed: false, current: true },
        { title: "Responsive Design Principles", duration: "20:10", completed: false },
      ],
    },
    {
      title: "JavaScript Essentials",
      completed: false,
      lessons: [
        { title: "JavaScript Syntax", duration: "22:40", completed: false },
        { title: "DOM Manipulation", duration: "28:15", completed: false },
        { title: "Event Handling", duration: "19:50", completed: false },
        { title: "Asynchronous JavaScript", duration: "32:20", completed: false },
      ],
    },
    {
      title: "Building Interactive Web Applications",
      completed: false,
      lessons: [
        { title: "Introduction to React", duration: "30:15", completed: false },
        { title: "State and Props", duration: "25:40", completed: false },
        { title: "Hooks and Effects", duration: "28:30", completed: false },
        { title: "Building a Complete Project", duration: "45:10", completed: false },
      ],
    },
  ]

  const categories = [
    { name: "Web Development", count: 42 },
    { name: "Data Science", count: 36 },
    { name: "Mobile Development", count: 28 },
    { name: "UI/UX Design", count: 24 },
    { name: "Machine Learning", count: 18 },
  ]

  return (
    <div
      className={`flex flex-col min-h-screen text-white overflow-hidden ${mounted ? "animate-fadeIn" : "opacity-0"}`}
    >
      {/* Refined Gradient Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-900 to-gray-900">
        {/* Accent Gradient Elements - More subtle and less dominant */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-600/10 blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-400/10 blur-[150px] animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-slate-500/5 to-gray-400/5 blur-[100px] animate-pulse-slow"></div>

        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-3 mix-blend-overlay"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h20v20H0z" fill="%23ffffff" fillOpacity="0.02"/%3E%3C/svg%3E\')',
          }}
        ></div>
      </div>

      {/* Mobile Header */}
      <header className="md:hidden border-b border-white/5 bg-white/5 backdrop-blur-xl z-10">
        <div className="flex items-center justify-between h-16 px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <Menu className="w-5 h-5" />
          </Button>
          <div className="font-bold text-xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
            LearnHub
          </div>
          <Avatar className="w-8 h-8 border border-white/8 ring-2 ring-white/10 transition-all duration-300 hover:ring-[#38BDF8]/50">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback className="bg-white/5 text-[#38BDF8]">JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative z-10">
        {/* Main Navigation Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800/70 backdrop-blur-xl border-r border-white/5 transform transition-all duration-500 ease-out md:relative md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-white/5 bg-gray-800/80">
              <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent animate-shimmer">
                LearnHub
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                onClick={toggleSidebar}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* User Profile */}
            <div className="p-5 border-b border-white/5 bg-gray-800/50">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-10 h-10 border border-white/8 ring-2 ring-white/10 transition-all duration-300 hover:ring-blue-500/50 group">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback className="bg-gray-700 text-blue-400">JD</AvatarFallback>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/20 group-hover:to-indigo-500/20 transition-all duration-300"></div>
                </Avatar>
                <div>
                  <div className="font-medium text-white">Jane Doe</div>
                  <div className="text-sm text-white/70">Premium Member</div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-white/70 mb-2">
                <span>Learning Progress</span>
                <span className={`transition-opacity duration-700 ${animateProgress ? "opacity-100" : "opacity-0"}`}>
                  68%
                </span>
              </div>
              <div className="h-1.5 bg-gray-700/70 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: animateProgress ? "68%" : "0%" }}
                ></div>
              </div>
            </div>

            {/* Search */}
            <div className="p-5 border-b border-white/5">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40 group-focus-within:text-blue-400 transition-colors duration-300" />
                <Input
                  placeholder="Search courses..."
                  className="pl-9 bg-gray-700/50 border-gray-600/50 text-sm focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 transition-all duration-300 placeholder:text-white/40"
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-3 custom-scrollbar">
              <div className="space-y-1.5 mb-6">
                <NavItem icon={<Home className="w-5 h-5" />} label="Dashboard" />
                <NavItem icon={<Compass className="w-5 h-5" />} label="Discover" />
                <NavItem icon={<BookOpen className="w-5 h-5" />} label="My Courses" active />
                <NavItem icon={<Calendar className="w-5 h-5" />} label="Schedule" />
                <NavItem icon={<TrendingUp className="w-5 h-5" />} label="Progress" />
                <NavItem icon={<FileText className="w-5 h-5" />} label="Certificates" />
              </div>

              <div className="mb-6">
                <h3 className="text-xs font-semibold uppercase text-white/50 px-3 mb-3">Categories</h3>
                <div className="space-y-1.5">
                  {categories.map((category, index) => (
                    <CategoryItem key={category.name} name={category.name} count={category.count} delay={index * 100} />
                  ))}
                </div>
              </div>
            </nav>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-white/5">
              <div className="space-y-1">
                <NavItem icon={<Settings className="w-5 h-5" />} label="Settings" />
                <NavItem icon={<MessageSquare className="w-5 h-5" />} label="Help & Support" />
                <NavItem icon={<LogOut className="w-5 h-5" />} label="Logout" />
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Desktop Header */}
          <header className="hidden md:block border-b border-white/5 bg-gray-800/70 backdrop-blur-xl z-10">
            <div className="flex items-center justify-between h-16 px-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleSidebar}
                  className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Menu className="w-5 h-5" />
                </Button>
                <div className="relative group w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40 group-focus-within:text-blue-400 transition-colors duration-300" />
                  <Input
                    placeholder="Search courses..."
                    className="pl-9 bg-gray-700/50 border-gray-600/50 text-sm focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 transition-all duration-300 placeholder:text-white/40"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 relative group"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-blue-400 rounded-full group-hover:animate-ping"></span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 relative group"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-blue-400 rounded-full"></span>
                </Button>
                <Avatar className="w-8 h-8 border border-white/8 ring-2 ring-white/10 transition-all duration-300 hover:ring-blue-500/50 group">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="bg-gray-700 text-blue-400">JD</AvatarFallback>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/20 group-hover:to-indigo-500/20 transition-all duration-300"></div>
                </Avatar>
              </div>
            </div>
          </header>

          <div className="flex flex-1 overflow-hidden">
            <main className="flex-1 p-4 md:p-6 overflow-auto custom-scrollbar">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-sm text-white/60 mb-4 animate-fadeIn animation-delay-300">
                <span>My Courses</span>
                <ChevronRight className="w-4 h-4" />
                <span>Web Development</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Modern Web Development Masterclass</span>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-gray-900/80 backdrop-blur-lg rounded-lg overflow-hidden mb-8 border-0 shadow-lg animate-fadeIn animation-delay-500 group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="icon"
                    className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-xl hover:bg-white/25 text-white border border-white/30 transition-transform duration-500 group-hover:scale-110"
                  >
                    <Play className="w-8 h-8 ml-1 group-hover:animate-pulse" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 to-indigo-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </div>
                <img
                  src="/placeholder.svg?height=540&width=960"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-70"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/15">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000 ease-out"
                    style={{ width: animateProgress ? `${progress}%` : "0%" }}
                  ></div>
                </div>
              </div>

              {/* Course Info */}
              <div className="mb-10 animate-fadeIn animation-delay-700">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h1 className="text-3xl font-bold mb-3 text-white">Modern Web Development Masterclass</h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
                      <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">4.9</span>
                        <span className="text-white/50">(2.4k reviews)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        <span>24.5k students</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>42 hours</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <ActionButton icon={<Heart className="w-4 h-4" />} />
                    <ActionButton icon={<Share2 className="w-4 h-4" />} />
                    <ActionButton icon={<Download className="w-4 h-4" />} />
                    <ActionButton icon={<MoreHorizontal className="w-4 h-4" />} />
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Avatar className="border border-white/8 ring-2 ring-white/10 transition-all duration-300 hover:ring-blue-500/50 group">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback className="bg-gray-700 text-blue-400">JS</AvatarFallback>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/20 group-hover:to-indigo-500/20 transition-all duration-300"></div>
                    </Avatar>
                    <div>
                      <div className="font-medium text-white">John Smith</div>
                      <div className="text-sm text-white/70">Senior Web Developer</div>
                    </div>
                  </div>
                  <Button className="ml-auto bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-500/90 hover:to-indigo-500/90 text-white border-none shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Continue Learning
                  </Button>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-xl rounded-lg p-5 mb-8 border-0 shadow-md transition-all duration-300 hover:shadow-lg hover:bg-gray-800/60">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-medium text-white">Your progress</div>
                    <div className="text-sm text-blue-400 font-medium">{progress}% complete</div>
                  </div>
                  <div className="h-2 bg-gray-700/70 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: animateProgress ? `${progress}%` : "0%" }}
                    ></div>
                  </div>
                </div>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="bg-gray-800/50 backdrop-blur-xl text-white/60 p-1 rounded-lg border-0 shadow-sm">
                    <TabsTrigger
                      value="overview"
                      className="data-[state=active]:bg-gray-700/70 data-[state=active]:text-white rounded-md transition-all duration-300"
                    >
                      Overview
                    </TabsTrigger>
                    <TabsTrigger
                      value="notes"
                      className="data-[state=active]:bg-gray-700/70 data-[state=active]:text-white rounded-md transition-all duration-300"
                    >
                      Notes
                    </TabsTrigger>
                    <TabsTrigger
                      value="resources"
                      className="data-[state=active]:bg-gray-700/70 data-[state=active]:text-white rounded-md transition-all duration-300"
                    >
                      Resources
                    </TabsTrigger>
                    <TabsTrigger
                      value="discussions"
                      className="data-[state=active]:bg-gray-700/70 data-[state=active]:text-white rounded-md transition-all duration-300"
                    >
                      Discussions
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-5 text-white/90 leading-relaxed">
                    <p className="mb-4">
                      This comprehensive course will take you from beginner to professional web developer. You'll learn
                      HTML, CSS, JavaScript, and modern frameworks to build responsive, interactive web applications.
                    </p>
                    <p>
                      By the end of this course, you'll have the skills to create professional websites and web
                      applications, understand modern development workflows, and be ready to take on real-world
                      projects.
                    </p>
                  </TabsContent>
                  <TabsContent value="notes" className="mt-5 text-white/70">
                    Your course notes will appear here.
                  </TabsContent>
                  <TabsContent value="resources" className="mt-5 text-white/70">
                    Course resources and downloads will appear here.
                  </TabsContent>
                  <TabsContent value="discussions" className="mt-5 text-white/70">
                    Course discussions will appear here.
                  </TabsContent>
                </Tabs>
              </div>
            </main>

            {/* Course Content Sidebar */}
            <aside className="hidden lg:block w-80 xl:w-96 border-l border-white/5 bg-gray-800/50 backdrop-blur-xl overflow-auto custom-scrollbar">
              <div className="p-5">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-bold text-lg text-white">Course Content</h2>
                  <div className="text-sm text-white/70">16 modules • 64 lessons</div>
                </div>

                <div className="space-y-4">
                  {modules.map((module, moduleIndex) => (
                    <div
                      key={moduleIndex}
                      className={`bg-gray-800/70 backdrop-blur-xl rounded-lg overflow-hidden border-0 shadow-sm transition-all duration-300 hover:bg-gray-800/90 ${
                        activeModule === moduleIndex ? "shadow-md" : ""
                      } animate-fadeIn`}
                      style={{ animationDelay: `${800 + moduleIndex * 100}ms` }}
                    >
                      <button
                        className="flex items-center justify-between w-full p-4 text-left font-medium"
                        onClick={() => toggleModule(moduleIndex)}
                      >
                        <div className="flex items-center gap-3">
                          {module.completed ? (
                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                              ✓
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full border border-white/8 flex items-center justify-center">
                              {moduleIndex + 1}
                            </div>
                          )}
                          <span className="text-white">{module.title}</span>
                        </div>
                        <div className="transition-transform duration-300 transform">
                          {activeModule === moduleIndex ? (
                            <ChevronDown className="w-5 h-5 text-white/60" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-white/60" />
                          )}
                        </div>
                      </button>

                      <div
                        className={`border-t border-white/5 bg-gray-900/30 backdrop-blur-xl divide-y divide-white/5 transition-all duration-500 ease-in-out overflow-hidden ${
                          activeModule === moduleIndex ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div
                            key={lessonIndex}
                            className={`flex items-center p-4 hover:bg-gray-700/50 cursor-pointer transition-all duration-300 ${
                              lesson.current ? "bg-gray-700/50" : ""
                            }`}
                          >
                            <div className="mr-3">
                              {lesson.completed ? (
                                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                  ✓
                                </div>
                              ) : lesson.current ? (
                                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center animate-pulse-slow">
                                  <Play className="w-3 h-3 text-white" />
                                </div>
                              ) : (
                                <div className="w-5 h-5 rounded-full border border-white/8 flex items-center justify-center group-hover:border-white/40 transition-all duration-300">
                                  <Play className="w-3 h-3 text-white/60" />
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm truncate text-white">{lesson.title}</div>
                              <div className="text-xs text-white/60 flex items-center gap-1 mt-1">
                                <Clock className="w-3 h-3" />
                                {lesson.duration}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({ icon, label, active = false }) {
  return (
    <button
      className={`flex items-center w-full gap-3 px-3 py-2.5 rounded-md text-sm transition-all duration-300 ${
        active
          ? "bg-gray-700/70 text-white backdrop-blur-md border-0 shadow-md"
          : "text-white/70 hover:bg-gray-700/50 hover:text-white"
      }`}
    >
      {icon}
      <span className="transition-all duration-300 font-medium">{label}</span>
      {active && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-md -z-10"></div>
      )}
    </button>
  )
}

function CategoryItem({ name, count, delay = 0 }) {
  return (
    <button
      className="flex items-center justify-between w-full px-3 py-2.5 rounded-md text-sm text-white/70 hover:bg-gray-700/50 hover:text-white transition-all duration-300 animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span>{name}</span>
      <span className="text-xs bg-gray-700/70 px-2 py-0.5 rounded-full">{count}</span>
    </button>
  )
}

function ActionButton({ icon }) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full border border-white/8 text-white/70 hover:text-white hover:bg-gray-700/70 hover:border-white/15 transition-all duration-300 backdrop-blur-md group"
    >
      {icon}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/15 group-hover:to-indigo-500/15 transition-all duration-300"></div>
    </Button>
  )
}

function Bell(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}
