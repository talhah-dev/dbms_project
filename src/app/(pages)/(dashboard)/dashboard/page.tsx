"use client"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { authClient } from "@/lib/auth-client"

import data from "@/app/dashboard/data.json"

export default function Dashboard() {
    const router = useRouter()
    const session = authClient.useSession()

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
                <SectionCards />

                <div className="grid gap-4 px-4 lg:grid-cols-[1.6fr_1fr] lg:px-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Welcome back</CardTitle>
                            <CardDescription>
                                This student dashboard is focused on academic progress,
                                attendance, fees and profile actions.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm text-muted-foreground">
                            <p>
                                We are starting with the student module first, so the
                                navigation, cards and table are now student-oriented.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">Student view active</Badge>
                                <Badge variant="outline">Admin nav ready</Badge>
                                <Badge variant="outline">Teacher nav ready</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Student Profile</CardTitle>
                            <CardDescription>
                                Signed in account details for the current session.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="space-y-2 text-sm">
                                <p>
                                    <span className="font-medium">Name:</span>{" "}
                                    {session.data?.user.name ?? "Student User"}
                                </p>
                                <p>
                                    <span className="font-medium">Email:</span>{" "}
                                    {session.data?.user.email ?? "student@example.com"}
                                </p>
                                <p>
                                    <span className="font-medium">Role:</span> Student
                                </p>
                            </div>
                            <Button variant="destructive" onClick={signOutHandler}>
                                Sign Out
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <DataTable data={data} />
            </div>
        </div>
    )
}
