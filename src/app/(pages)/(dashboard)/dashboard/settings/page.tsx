"use client"

import { BellIcon, ShieldCheckIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { authClient } from "@/lib/auth-client"

export default function Settings() {
  const router = useRouter()

  const signOutHandler = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin")
        },
        onError: () => {
          toast.error("Something went wrong")
        },
      },
    })
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
        <div className="flex flex-col gap-2 px-4 lg:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary">Student Settings</Badge>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Account Settings
          </h1>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Manage your basic student portal controls from here.
          </p>
        </div>

        <div className="grid gap-4 px-4 lg:grid-cols-2 lg:px-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <ShieldCheckIcon className="size-5 text-emerald-600" />
                <div>
                  <CardTitle>Security Status</CardTitle>
                  <CardDescription>
                    Snapshot of your current account security.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <StatusRow label="Email Verification" value="Verified" />
              <StatusRow label="Password Strength" value="Strong" />
              <StatusRow label="Two-step Security" value="Not Enabled" />
              <StatusRow label="Last Password Change" value="May 12, 2026" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <BellIcon className="size-5 text-amber-500" />
                <div>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>
                    Turn student alerts on or off.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ToggleRow
                title="Fee Reminders"
                description="Receive alerts before payment deadlines."
                defaultChecked
              />
              <ToggleRow
                title="Attendance Alerts"
                description="Get notified when attendance becomes low."
                defaultChecked
              />
              <ToggleRow
                title="Show compact dashboard view"
                description="Use a smaller condensed layout in the student portal."
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 px-4 lg:px-6">
          <Card>
            <CardHeader>
              <CardTitle>Sign Out</CardTitle>
              <CardDescription>
                End the current student session safely.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="destructive" className="w-full sm:w-auto" onClick={signOutHandler}>
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ToggleRow({
  title,
  description,
  defaultChecked,
}: {
  title: string
  description: string
  defaultChecked?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border p-4">
      <div>
        <p className="font-medium">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  )
}

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-dashed pb-3 last:border-b-0 last:pb-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
