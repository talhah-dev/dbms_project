"use client"
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';

export default function Dasgboard() {

    const router = useRouter();

    const signOutHandler = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/signin");
                },
                onError: () => {
                    toast.error("Something went wrong");
                },
            },
        });
    }

    return (
        <div>
            <Button variant={"destructive"} onClick={signOutHandler}>Sign Out</Button>

            {/* profile data here */}

            <div className="mt-10 p-6 border rounded-lg max-w-md mx-auto">
                <h2 className="text-xl font-bold mb-4">Profile Information</h2>
                <div className="space-y-2">
                    <p><strong>Name:</strong> {authClient.useSession().data?.user.name}</p>
                    <p><strong>Email:</strong> {authClient.useSession().data?.user.email}</p>
                </div>
            </div>


        </div>
    )
}
