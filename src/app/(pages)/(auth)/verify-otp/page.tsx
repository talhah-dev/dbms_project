import Link from 'next/link'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from '@/components/ui/input-otp'
import { Button } from '@/components/ui/button'
import {
    FieldDescription,
    FieldGroup,
} from '@/components/ui/field'

export default function VerifyOTP() {
    return (
        <div className="flex min-h-svh items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-md rounded-xl border bg-background p-8 shadow-sm">
                <div className="mb-6 flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">
                        Verify your account
                    </h1>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Enter the 6-digit verification code sent to your email
                    </p>
                </div>

                <form className="flex flex-col gap-6">
                    <FieldGroup className="flex items-center justify-center">
                        <InputOTP maxLength={6}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                            </InputOTPGroup>

                            <InputOTPSeparator />

                            <InputOTPGroup>
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </FieldGroup>

                    <Button type="submit">
                        Verify OTP
                    </Button>

                    <FieldDescription className="text-center">
                        Didn&apos;t receive the code?{' '}
                        <button
                            type="button"
                            className="underline underline-offset-4"
                        >
                            Resend Code
                        </button>
                    </FieldDescription>

                    <div className="text-center text-sm">
                        <Link
                            href="/signin"
                            className="underline underline-offset-4"
                        >
                            Back to Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}