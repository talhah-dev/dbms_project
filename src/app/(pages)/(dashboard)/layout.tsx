"use client"
import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { Spinner } from '@/components/ui/spinner';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

export default function layout({ children }: { children: React.ReactNode }) {
    const { data, isPending } = authClient.useSession();

    if (isPending) {
        return <div className='flex items-center justify-center h-screen'> <Spinner /> </div>;
    }

    if (!data?.session) {
        redirect("/signin");
    }

    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}
