"use client";

import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";

type GoogleAuthButtonProps = {
    label: string;
    callbackURL?: string;
};

export function GoogleAuthButton({
    label,
    callbackURL = "/dashboard",
}: GoogleAuthButtonProps) {
    const [loading, setLoading] = useState(false);

    const handleGoogleAuth = async () => {
        setLoading(true);

        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL,
        });

        if (error) {
            toast.error(error.message || "Google sign-in failed");
            setLoading(false);
        }
    };

    return (
        <Button
            variant="outline"
            type="button"
            disabled={loading}
            onClick={handleGoogleAuth}
        >
            {loading ? (
                <Spinner />
            ) : (
                <div className="flex items-center gap-2">
                    <BsGoogle />
                    {label}
                </div>
            )}
        </Button>
    );
}
