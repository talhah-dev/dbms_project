"use client"
import { Spinner } from '@/components/ui/spinner';
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

    return <>{children}</>
}