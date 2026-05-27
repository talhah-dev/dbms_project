"use client"

import {
  AlertTriangleIcon,
  CalendarCheckIcon,
  Clock3Icon,
  FileCheck2Icon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const attendanceRecords = [
  {
    course: "Database Management Systems",
    date: "May 27, 2026",
    time: "09:00 AM",
    status: "Present",
    instructor: "Dr. Sana Ahmed",
  },
  {
    course: "Artificial Intelligence",
    date: "May 26, 2026",
    time: "11:00 AM",
    status: "Present",
    instructor: "Prof. Hamza Siddiqui",
  },
  {
    course: "Web Engineering",
    date: "May 25, 2026",
    time: "01:00 PM",
    status: "Late",
    instructor: "Ms. Areeba Malik",
  },
  {
    course: "Operating Systems",
    date: "May 24, 2026",
    time: "10:00 AM",
    status: "Absent",
    instructor: "Dr. Zain Haider",
  },
]

const todayClasses = [
  {
    title: "Database Management Systems",
    time: "09:00 AM - 10:30 AM",
    room: "Lab 3",
  },
  {
    title: "Software Project Management",
    time: "12:00 PM - 01:30 PM",
    room: "Room 204",
  },
  {
    title: "Artificial Intelligence",
    time: "02:00 PM - 03:30 PM",
    room: "AI Lab",
  },
]

export default function AttendancePage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
        <div className="flex flex-col gap-2 px-4 lg:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary">Student Attendance</Badge>
            <Badge variant="outline">Spring 2026</Badge>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Attendance Overview
          </h1>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Track class attendance, daily schedule, recent records and low
            attendance warnings for the current semester.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 xl:grid-cols-4 lg:px-6">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Overall Attendance</CardDescription>
              <CardTitle className="text-2xl">88%</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarCheckIcon className="size-4 text-emerald-500" />
              Above the required attendance threshold
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Classes This Week</CardDescription>
              <CardTitle className="text-2xl">15</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock3Icon className="size-4 text-sky-500" />
              12 attended and 3 remaining
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Late Check-ins</CardDescription>
              <CardTitle className="text-2xl">2</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileCheck2Icon className="size-4 text-amber-500" />
              Keep this low to avoid discipline flags
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Attendance Alerts</CardDescription>
              <CardTitle className="text-2xl">1</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
              <AlertTriangleIcon className="size-4 text-rose-500" />
              Operating Systems needs attention
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 px-4 xl:grid-cols-[1.4fr_1fr] lg:px-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle>Recent Attendance Records</CardTitle>
                  <CardDescription>
                    Latest marked attendance entries for your enrolled courses.
                  </CardDescription>
                </div>

                <Select defaultValue="all-courses">
                  <SelectTrigger className="w-full sm:w-52">
                    <SelectValue placeholder="Filter by course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-courses">All Courses</SelectItem>
                    <SelectItem value="dbms">Database Management Systems</SelectItem>
                    <SelectItem value="ai">Artificial Intelligence</SelectItem>
                    <SelectItem value="web">Web Engineering</SelectItem>
                    <SelectItem value="os">Operating Systems</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Instructor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceRecords.map((record) => (
                    <TableRow key={`${record.course}-${record.date}`}>
                      <TableCell className="font-medium">
                        {record.course}
                      </TableCell>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.time}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            record.status === "Present"
                              ? "default"
                              : record.status === "Late"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {record.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{record.instructor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Today&apos;s Classes</CardTitle>
              <CardDescription>
                Quick schedule view for today&apos;s attendance.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {todayClasses.map((item) => (
                <div key={item.title} className="rounded-xl border p-4">
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.time}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.room}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 px-4 lg:px-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Summary</CardTitle>
              <CardDescription>
                Semester-wide academic attendance highlights.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <SummaryRow
                label="Database Management Systems"
                value="94% attendance"
              />
              <SummaryRow
                label="Artificial Intelligence"
                value="91% attendance"
              />
              <SummaryRow
                label="Web Engineering"
                value="84% attendance"
              />
              <SummaryRow
                label="Operating Systems"
                value="68% attendance"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-dashed pb-3 last:border-b-0 last:pb-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
