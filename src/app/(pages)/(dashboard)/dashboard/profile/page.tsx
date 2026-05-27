"use client"

import {
    BookOpenIcon,
    GraduationCapIcon,
    IdCardIcon,
    MapPinIcon,
    PencilIcon,
    PhoneIcon,
    ShieldCheckIcon,
    UserIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Profile() {
    return (
        <div className="min-h-dvh">
            <div className="relative mx-auto flex w-full max-w-5xl flex-col px-6 py-10">
                <div className="py-6 ">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-center gap-5">
                            <Avatar className="size-24 border-4 border-background shadow-sm sm:size-32">
                                <AvatarImage
                                    alt="Student avatar"
                                    src="https://github.com/shadcn.png"
                                />
                                <AvatarFallback className="text-2xl font-semibold">
                                    TK
                                </AvatarFallback>
                            </Avatar>

                            <div className="space-y-2">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                                        Talha Khan
                                    </h1>
                                    <Badge variant="secondary">Active Student</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground sm:text-base">
                                    BS Computer Science · Semester 6 · Smart Campus DBMS
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">Roll No: 22-BCS-104</Badge>
                                    <Badge variant="outline">Section B</Badge>
                                    <Badge variant="outline">CGPA 3.74</Badge>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <Button>Edit Profile</Button>
                            <Button variant="outline">Download ID Card</Button>
                        </div>
                    </div>

                    <p className="mt-6 max-w-3xl text-sm leading-6 text-muted-foreground">
                        Focused on software engineering, database systems and AI-enabled
                        applications. This profile helps students keep track of academic,
                        personal and campus-related information in one place.
                    </p>
                </div>
            </div>

            <div className="border-b">
                <Tabs className="mx-auto w-full max-w-5xl px-6" defaultValue="overview">
                    <ScrollArea className="mask-r-from-95%">
                        <TabsList
                            className={cn(
                                "rounded-none bg-transparent p-0",
                                "*:rounded-none *:border-0 *:border-b-2 *:px-4 *:text-muted-foreground",
                                "*:data-[state=active]:border-foreground *:data-[state=active]:border-b-2 *:data-[state=active]:bg-transparent",
                                "*:data-[state=active]:text-foreground *:data-[state=active]:shadow-none!"
                            )}
                        >
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="academic">Academic Info</TabsTrigger>
                            <TabsTrigger value="guardian">Guardian</TabsTrigger>
                            <TabsTrigger value="documents">Documents</TabsTrigger>
                            <TabsTrigger value="security">Security</TabsTrigger>
                        </TabsList>

                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </Tabs>
            </div>

            <div className="mx-auto w-full max-w-5xl px-6">
                <div className="space-y-8 py-8">
                    <div>
                        <SectionHeader
                            icon={<UserIcon className="size-5 fill-foreground/8" />}
                            title="Personal Information"
                        />
                        <div className="grid grid-cols-1 *:-ms-px *:-mt-px *:border *:border-dashed *:px-4 *:py-3 md:grid-cols-2">
                            <InfoItem label="Full Name" value="Talha Khan" />
                            <InfoItem label="Email" value="talha@student.dbms.edu" />
                            <InfoItem label="Phone Number" value="+92 300 1234567" />
                            <InfoItem label="Date of Birth" value="August 12, 2004" />
                        </div>
                    </div>

                    <div>
                        <SectionHeader
                            icon={<GraduationCapIcon className="size-5 fill-foreground/8" />}
                            title="Academic Details"
                        />
                        <div className="grid grid-cols-1 *:-ms-px *:-mt-px *:border *:border-dashed *:px-4 *:py-3 md:grid-cols-2">
                            <InfoItem label="Program" value="BS Computer Science" />
                            <InfoItem label="Current Semester" value="Semester 6" />
                            <InfoItem label="Department" value="Faculty of Computing" />
                            <InfoItem label="Advisor" value="Dr. Sana Ahmed" />
                            <InfoItem label="Current CGPA" value="3.74 / 4.00" />
                            <InfoItem label="Enrollment Year" value="2022" />
                        </div>
                    </div>

                    <div>
                        <SectionHeader
                            icon={<IdCardIcon className="size-5 fill-foreground/8" />}
                            title="Campus & Enrollment"
                        />
                        <div className="grid grid-cols-1 *:-ms-px *:-mt-px *:border *:border-dashed *:px-4 *:py-3 md:grid-cols-2">
                            <InfoItem label="Student ID" value="STU-DBMS-220104" />
                            <InfoItem label="Roll Number" value="22-BCS-104" />
                            <InfoItem label="Section" value="B" />
                            <InfoItem label="Campus" value="Main City Campus" />
                            <InfoItem label="Enrollment Status" value="Active" />
                            <InfoItem label="Scholarship" value="Merit Scholarship 15%" />
                        </div>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <div>
                            <SectionHeader
                                icon={<MapPinIcon className="size-5 fill-foreground/8" />}
                                title="Address Information"
                            />
                            <div className="grid grid-cols-1 *:-ms-px *:-mt-px *:border *:border-dashed *:px-4 *:py-3 md:grid-cols-2">
                                <InfoItem label="Country" value="Pakistan" />
                                <InfoItem label="Province" value="Punjab" />
                                <InfoItem label="City" value="Lahore" />
                                <InfoItem label="Postal Code" value="54000" />
                            </div>
                        </div>

                        <div>
                            <SectionHeader
                                icon={<PhoneIcon className="size-5 fill-foreground/8" />}
                                title="Emergency Contact"
                            />
                            <div className="grid grid-cols-1 *:-ms-px *:-mt-px *:border *:border-dashed *:px-4 *:py-3 md:grid-cols-2">
                                <InfoItem label="Guardian Name" value="Muhammad Aslam" />
                                <InfoItem label="Relationship" value="Father" />
                                <InfoItem label="Contact Number" value="+92 301 9876543" />
                                <InfoItem label="Alternate Contact" value="+92 42 12345678" />
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <div>
                            <SectionHeader
                                icon={<BookOpenIcon className="size-5 fill-foreground/8" />}
                                title="Current Semester Snapshot"
                            />
                            <div className="space-y-3 border border-dashed p-4">
                                <SnapshotRow label="Enrolled Courses" value="6" />
                                <SnapshotRow label="Attendance Rate" value="88%" />
                                <SnapshotRow label="Pending Assignments" value="3" />
                                <SnapshotRow label="Fee Status" value="Partially Cleared" />
                            </div>
                        </div>

                        <div>
                            <SectionHeader
                                icon={<ShieldCheckIcon className="size-5 fill-foreground/8" />}
                                title="Account Status"
                            />
                            <div className="space-y-3 border border-dashed p-4">
                                <SnapshotRow label="Email Verification" value="Verified" />
                                <SnapshotRow label="Two-step Security" value="Not Enabled" />
                                <SnapshotRow label="Last Login" value="May 27, 2026" />
                                <SnapshotRow label="Portal Access" value="Active" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SectionHeader({
    icon,
    title,
}: {
    icon: React.ReactNode;
    title: string;
}) {
    return (
        <div className="-ms-px flex items-center justify-between gap-2.5 border border-b-0 border-dashed bg-muted/50 px-4 py-3">
            <h2 className="flex items-center gap-2.5 text-lg font-medium">
                {icon}
                {title}
            </h2>

            <Button className="-me-1 size-8" size="icon" variant="ghost">
                <PencilIcon />
            </Button>
        </div>
    );
}

function InfoItem({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <h3 className="mb-1 text-sm font-medium text-muted-foreground">
                {label}
            </h3>
            <p className="text-foreground">{value}</p>
        </div>
    );
}

function SnapshotRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between gap-3 border-b border-dashed pb-3 last:border-b-0 last:pb-0">
            <span className="text-sm text-muted-foreground">{label}</span>
            <span className="font-medium">{value}</span>
        </div>
    );
}
