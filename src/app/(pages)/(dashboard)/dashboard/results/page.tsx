"use client"

import {
  BarChart3Icon,
  BookCheckIcon,
  GraduationCapIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const semesters = [
  {
    title: "Semester 1",
    status: "Completed",
    gpa: "3.42",
    courses: [
      { name: "Introduction to Computing", marks: "78 / 100", grade: "B+" },
      { name: "Calculus I", marks: "81 / 100", grade: "A-" },
      { name: "Applied Physics", marks: "74 / 100", grade: "B" },
      { name: "Communication Skills", marks: "86 / 100", grade: "A" },
    ],
  },
  {
    title: "Semester 2",
    status: "Completed",
    gpa: "3.58",
    courses: [
      { name: "Object-Oriented Programming", marks: "84 / 100", grade: "A-" },
      { name: "Linear Algebra", marks: "79 / 100", grade: "B+" },
      { name: "Digital Logic Design", marks: "76 / 100", grade: "B+" },
      { name: "Islamic Studies", marks: "88 / 100", grade: "A" },
    ],
  },
  {
    title: "Semester 3",
    status: "Completed",
    gpa: "3.71",
    courses: [
      { name: "Data Structures", marks: "89 / 100", grade: "A" },
      { name: "Discrete Structures", marks: "82 / 100", grade: "A-" },
      { name: "Probability & Statistics", marks: "77 / 100", grade: "B+" },
      { name: "Computer Organization", marks: "80 / 100", grade: "A-" },
    ],
  },
  {
    title: "Semester 4",
    status: "In Progress",
    gpa: "In Progress",
    courses: [
      { name: "Database Management Systems", marks: "42 / 50", grade: "A-" },
      { name: "Artificial Intelligence", marks: "18 / 20", grade: "A" },
      { name: "Web Engineering", marks: "16 / 20", grade: "B+" },
      { name: "Operating Systems", marks: "Pending", grade: "-" },
    ],
  },
]

export default function ResultsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
        <div className="flex flex-col gap-2 px-4 lg:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary">Student Results</Badge>
            <Badge variant="outline">Spring 2026</Badge>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Results & Academic Progress
          </h1>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Review recent published results, current semester progress, grade
            trends and assessments still in progress.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 xl:grid-cols-4 lg:px-6">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Current CGPA</CardDescription>
              <CardTitle className="text-2xl">3.74</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCapIcon className="size-4 text-emerald-500" />
              Stable academic performance this semester
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Published Results</CardDescription>
              <CardTitle className="text-2xl">8</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
              <BookCheckIcon className="size-4 text-sky-500" />
              Most recent course assessments are available
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Current Semester</CardDescription>
              <CardTitle className="text-2xl">Semester 4</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
              <BookCheckIcon className="size-4 text-amber-500" />
              Midterm and internal marks are in progress
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Top Trend</CardDescription>
              <CardTitle className="text-2xl">A- Average</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
              <BarChart3Icon className="size-4 text-violet-500" />
              Strong improvement in technical subjects
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 px-4 md:grid-cols-2 xl:grid-cols-2 lg:px-6">
          {semesters.map((semester) => (
            <Card key={semester.title}>
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <CardTitle>{semester.title}</CardTitle>
                    <CardDescription>
                      Course-wise results and semester GPA summary.
                    </CardDescription>
                  </div>
                  <Badge
                    variant={
                      semester.status === "Completed" ? "default" : "secondary"
                    }
                  >
                    {semester.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {semester.courses.map((course) => (
                    <div
                      key={`${semester.title}-${course.name}`}
                      className="flex items-center justify-between gap-4 rounded-xl border p-4"
                    >
                      <div>
                        <p className="font-medium">{course.name}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Marks: {course.marks}
                        </p>
                      </div>
                      <Badge variant="outline">{course.grade}</Badge>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
                  <span className="font-medium">
                    {semester.status === "Completed"
                      ? `${semester.title} GPA`
                      : `${semester.title} Status`}
                  </span>
                  <span className="text-lg font-semibold">{semester.gpa}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
