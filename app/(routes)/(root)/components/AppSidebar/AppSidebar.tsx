"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
  } from "@/components/ui/sidebar"
import { House, Link } from "lucide-react";
import { routes } from "./AppSidebar.data";

export default function AppSidebar() {

const { state } =useSidebar();
  return (
    <Sidebar collapsible="icon">
        <SidebarContent className="bg-white">
            <SidebarHeader>
                <Link href="/" className="flex flex-row items-center">
                 Diego LMS
                </Link>
            </SidebarHeader>
            <SidebarGroup>
                <SidebarGroupLabel>Plataforma</SidebarGroupLabel>
                <SidebarMenu className="space-y-2">
                   {routes.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                            <a href={item.url} >
                                <div className="p-1 rounded-lg text-white bg-violet-400">
                                        <item.icon className="w-4 h-4" />
                                </div>
                                {state === "expanded" && <span>{item.title}</span>}
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                   ))}
                </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
  );
}
