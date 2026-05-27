"use client"

import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  BellIcon,
  BookOpenIcon,
  CalendarCheckIcon,
  CircleHelpIcon,
  CommandIcon,
  CreditCardIcon,
  GraduationCapIcon,
  LayoutDashboardIcon,
  Settings2Icon,
  SparklesIcon,
  UserCircleIcon,
  UsersIcon,
} from "lucide-react"

const dashboardNavByRole = {
  student: {
    title: "Smart Campus",
    user: {
      name: "Talha Student",
      email: "talha@student.dbms.edu",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Overview",
        url: "/dashboard",
        icon: <LayoutDashboardIcon />,
      },
      {
        title: "My Courses",
        url: "/dashboard/my-courses",
        icon: <BookOpenIcon />,
      },
      {
        title: "Attendance",
        url: "/dashboard/attendance",
        icon: <CalendarCheckIcon />,
      },
      {
        title: "Results",
        url: "/dashboard/results",
        icon: <GraduationCapIcon />,
      },
      {
        title: "Fees",
        url: "/dashboard/fees",
        icon: <CreditCardIcon />,
      },
    ],
    resources: [
      {
        name: "Profile",
        url: "/dashboard/profile",
        icon: <UserCircleIcon />,
      },
      {
        name: "Notices",
        url: "#",
        icon: <BellIcon />,
      },
      {
        name: "Campus AI",
        url: "#",
        icon: <SparklesIcon />,
      },
    ],
  },
  admin: {
    title: "Smart Campus",
    user: {
      name: "Admin User",
      email: "admin@dbms.edu",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: <LayoutDashboardIcon />,
      },
      {
        title: "Students",
        url: "#",
        icon: <UsersIcon />,
      },
      {
        title: "Teachers",
        url: "#",
        icon: <GraduationCapIcon />,
      },
      {
        title: "Courses",
        url: "#",
        icon: <BookOpenIcon />,
      },
      {
        title: "Fees",
        url: "#",
        icon: <CreditCardIcon />,
      },
    ],
    resources: [
      {
        name: "Reports",
        url: "#",
        icon: <SparklesIcon />,
      },
      {
        name: "Notices",
        url: "#",
        icon: <BellIcon />,
      },
      {
        name: "Settings",
        url: "/dashboard/settings",
        icon: <Settings2Icon />,
      },
    ],
  },
  teacher: {
    title: "Smart Campus",
    user: {
      name: "Teacher User",
      email: "teacher@dbms.edu",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: <LayoutDashboardIcon />,
      },
      {
        title: "My Classes",
        url: "#",
        icon: <UsersIcon />,
      },
      {
        title: "Attendance",
        url: "#",
        icon: <CalendarCheckIcon />,
      },
      {
        title: "Grades",
        url: "#",
        icon: <GraduationCapIcon />,
      },
      {
        title: "Course Material",
        url: "#",
        icon: <BookOpenIcon />,
      },
    ],
    resources: [
      {
        name: "AI Insights",
        url: "#",
        icon: <SparklesIcon />,
      },
      {
        name: "Notices",
        url: "#",
        icon: <BellIcon />,
      },
      {
        name: "Profile",
        url: "#",
        icon: <UserCircleIcon />,
      },
    ],
  },
} as const

const data = {
  user: {
    name: dashboardNavByRole.student.user.name,
    email: dashboardNavByRole.student.user.email,
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: dashboardNavByRole.student.navMain,
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: <Settings2Icon />,
    },
    {
      title: "Get Help",
      url: "#",
      icon: <CircleHelpIcon />,
    },
  ],
  documents: dashboardNavByRole.student.resources,
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="/dashboard">
                <CommandIcon className="size-5!" />
                <span className="text-base font-semibold">
                  {dashboardNavByRole.student.title}
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
