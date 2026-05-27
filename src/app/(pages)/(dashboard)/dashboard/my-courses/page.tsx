"use client"

import {
  BookOpenIcon,
  CalendarRangeIcon,
  GraduationCapIcon,
  UserRoundIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const enrolledCourses = [
  {
    title: "Database Management Systems",
    code: "CS-402",
    instructor: "Dr. Sana Ahmed",
    schedule: "Mon / Wed - 09:00 AM",
    creditHours: "3 Credit Hours",
    status: "Active",
  },
  {
    title: "Artificial Intelligence",
    code: "CS-406",
    instructor: "Prof. Hamza Siddiqui",
    schedule: "Tue / Thu - 02:00 PM",
    creditHours: "3 Credit Hours",
    status: "Active",
  },
  {
    title: "Web Engineering",
    code: "CS-404",
    instructor: "Ms. Areeba Malik",
    schedule: "Mon / Fri - 01:00 PM",
    creditHours: "3 Credit Hours",
    status: "Active",
  },
  {
    title: "Operating Systems",
    code: "CS-401",
    instructor: "Dr. Zain Haider",
    schedule: "Tue / Thu - 10:00 AM",
    creditHours: "4 Credit Hours",
    status: "Active",
  },
]

const courseHighlights = [
  {
    label: "Enrolled Courses",
    value: "4",
    note: "All courses are active this semester.",
  },
  {
    label: "Total Credit Hours",
    value: "13",
    note: "Balanced academic workload for Semester 4.",
  },
  {
    label: "Next Class",
    value: "DBMS at 09:00 AM",
    note: "Lab 3 · Dr. Sana Ahmed",
  }
]

export default function MyCoursesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
        <div className="flex flex-col gap-2 px-4 lg:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary">Student Courses</Badge>
            <Badge variant="outline">Spring 2026</Badge>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            My Courses
          </h1>
          <p className="max-w-3xl text-sm text-muted-foreground">
            View all currently enrolled courses, instructors, schedules and
            semester course load in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 xl:grid-cols-3 lg:px-6">
          {courseHighlights.map((item) => (
            <Card key={item.label}>
              <CardHeader className="pb-3">
                <CardDescription>{item.label}</CardDescription>
                <CardTitle className="text-2xl">{item.value}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {item.note}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 px-4 lg:grid-cols-2 lg:px-6">
          {enrolledCourses.map((course) => (
            <Card key={course.code}>
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.code}</CardDescription>
                  </div>
                  <Badge>{course.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <InfoRow
                  icon={<UserRoundIcon className="size-4 text-sky-600" />}
                  label="Instructor"
                  value={course.instructor}
                />
                <InfoRow
                  icon={<CalendarRangeIcon className="size-4 text-emerald-600" />}
                  label="Schedule"
                  value={course.schedule}
                />
                <InfoRow
                  icon={<GraduationCapIcon className="size-4 text-violet-600" />}
                  label="Course Load"
                  value={course.creditHours}
                />
                <InfoRow
                  icon={<BookOpenIcon className="size-4 text-amber-600" />}
                  label="Semester"
                  value="Semester 4"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border p-4">
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <span className="text-sm font-medium">{value}</span>
    </div>
  )
}
