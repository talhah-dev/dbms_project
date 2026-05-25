import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export default function ForgotPassword() {
    return (
        <div className="flex min-h-svh items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-md rounded-xl border bg-background p-8 shadow-sm">
                <div className="mb-6 flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">
                        Forgot Password
                    </h1>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Enter your email address and we&apos;ll send you a reset link
                    </p>
                </div>

                <form className="flex flex-col gap-6">
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="email">
                                Email Address
                            </FieldLabel>

                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </Field>

                        <Field>
                            <Button type="submit">
                                Send Reset Link
                            </Button>
                        </Field>

                        <FieldDescription className="text-center">
                            Remember your password?{' '}
                            <Link
                                href="/signin"
                                className="underline underline-offset-4"
                            >
                                Back to Login
                            </Link>
                        </FieldDescription>
                    </FieldGroup>
                </form>
            </div>
        </div>
    )
}