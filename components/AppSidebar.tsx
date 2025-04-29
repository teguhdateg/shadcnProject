"use client"

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { Calendar, Home, Inbox, Settings, User2 } from "lucide-react"
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
const items = [
    {
      title: "Home",
      url: "/home",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "/inbox",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "/setting",
      icon: Settings,
    },
  ]
export default function AppSidebar ()  {
    const {theme} = useTheme();
    return (
    <Sidebar collapsible="icon">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild size={"lg"}>
                        <Link href="/">
                        {theme === "light" ?
                           <img src="https://credit-admin-dev.pinjammodal.id/static/media/logo.2c80faded8ad9c4133da2a1cde993ec3.svg" alt="logo"/> :
                           <img src="https://b2b-partnership-dev.pinjammodal.id/static/media/logo-white.08c9b1aa80f2d149208efe4dc8f545a3.svg" alt="logo"/>
                        }
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
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
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton>
                            <User2 /> Dategs
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    )
}