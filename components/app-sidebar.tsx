import { BookHeart, Calendar, HelpCircleIcon, Home, Inbox, LayoutDashboard, Notebook, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { UserButton, useUser } from "@clerk/nextjs"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/journal",
    icon: Home,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Help Center",
    url: "#",
    icon: HelpCircleIcon,
  },
]


const journalStuff = [
  {
    title: "All Entries", 
    url: "/journal/all", 
    icon: Notebook, 
  },
  {
    title: "Favorites", 
    url: "/journal/favorites", 
    icon: BookHeart, 
  }, 
  {
    title: "Metrics", 
    url: "/metrics", 
    icon: LayoutDashboard, 
  }
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r-gray-700">
      <SidebarHeader className="h-14 w-full border-b border-b-gray-700 flex flex-row py-3 px-4 items-center justify-start gap-3">
        <UserButton />
        <p className="font-medium">Hello, Gio</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
        <SidebarGroupLabel>Journal Entries</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {journalStuff.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
