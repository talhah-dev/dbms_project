"use client"

import {
  AlertTriangleIcon,
  CalendarClockIcon,
  CheckCircle2Icon,
  CreditCardIcon,
  DownloadIcon,
  ReceiptTextIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const payments = [
  {
    id: 1,
    invoice: "INV-2026-001",
    semester: "Spring 2026",
    dueDate: "June 10, 2026",
    amount: "PKR 48,000",
    status: "Pending",
  },
  {
    id: 2,
    invoice: "INV-2026-002",
    semester: "Transport Fee",
    dueDate: "June 18, 2026",
    amount: "PKR 8,500",
    status: "Upcoming",
  },
  {
    id: 3,
    invoice: "INV-2026-003",
    semester: "Library & Lab",
    dueDate: "May 05, 2026",
    amount: "PKR 6,000",
    status: "Paid",
  },
]

const transactions = [
  {
    title: "Admission Fee",
    date: "January 15, 2026",
    method: "Bank Transfer",
    amount: "PKR 35,000",
  },
  {
    title: "Exam Fee",
    date: "March 08, 2026",
    method: "JazzCash",
    amount: "PKR 4,500",
  },
  {
    title: "Library Fee",
    date: "May 05, 2026",
    method: "Debit Card",
    amount: "PKR 6,000",
  },
]

export default function FeesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
        <div className="flex flex-col gap-2 px-4 lg:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary">Student Fees</Badge>
            <Badge variant="outline">Spring 2026</Badge>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Fee Management
          </h1>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Review semester dues, payment history, upcoming deadlines and
            receipts for the current student account.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 xl:grid-cols-4 lg:px-6">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Outstanding</CardDescription>
              <CardTitle className="text-2xl">PKR 56,500</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
              <AlertTriangleIcon className="size-4 text-amber-500" />
              Includes tuition and transport dues
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Next Due Date</CardDescription>
              <CardTitle className="text-2xl">June 10</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarClockIcon className="size-4 text-sky-500" />
              Spring tuition invoice due in 14 days
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Paid</CardDescription>
              <CardTitle className="text-2xl">PKR 45,500</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2Icon className="size-4 text-emerald-500" />
              All previous semester charges cleared
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Fee Status</CardDescription>
              <CardTitle className="text-2xl">Partially Cleared</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
              <CreditCardIcon className="size-4 text-violet-500" />
              One major invoice is still pending for this semester
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 px-4 xl:grid-cols-[1.6fr_1fr] lg:px-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Fee Schedule</CardTitle>
              <CardDescription>
                Static semester fee records for the student dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">
                        {payment.invoice}
                      </TableCell>
                      <TableCell>{payment.semester}</TableCell>
                      <TableCell>{payment.dueDate}</TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            payment.status === "Paid"
                              ? "default"
                              : payment.status === "Upcoming"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {payment.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Summary</CardTitle>
              <CardDescription>
                Useful fee details to show on the student side.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="rounded-xl border p-4">
                <p className="font-medium">Scholarship Status</p>
                <p className="mt-1 text-muted-foreground">
                  Merit scholarship applied: 15% tuition reduction for the
                  current semester.
                </p>
              </div>
              <div className="rounded-xl border p-4">
                <p className="font-medium">Late Payment Policy</p>
                <p className="mt-1 text-muted-foreground">
                  A late fine of PKR 500 per day is applied after the grace
                  period ends.
                </p>
              </div>
              <div className="rounded-xl border p-4">
                <p className="font-medium">Action Items</p>
                <ul className="mt-2 space-y-2 text-muted-foreground">
                  <li>Pay Spring tuition before June 10, 2026.</li>
                  <li>Download transport fee invoice for record keeping.</li>
                  <li>Contact accounts office for installment request.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 px-4 xl:grid-cols-[1.6fr_1fr] lg:px-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>
                Previous student payments and receipt records.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.title}
                  className="flex items-center justify-between rounded-xl border p-4"
                >
                  <div>
                    <p className="font-medium">{transaction.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {transaction.date} · {transaction.method}
                    </p>
                  </div>
                  <p className="font-medium">{transaction.amount}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Receipts & Downloads</CardTitle>
              <CardDescription>
                Static buttons for future download or print actions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <ReceiptTextIcon className="mr-2 size-4" />
                Download Spring 2026 Invoice
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <DownloadIcon className="mr-2 size-4" />
                Download Paid Receipts
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <CreditCardIcon className="mr-2 size-4" />
                View Installment Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
