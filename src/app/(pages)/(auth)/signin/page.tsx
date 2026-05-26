"use client"
import { Button } from '@/components/ui/button'
import { GoogleAuthButton } from '@/components/auth/google-auth-button'
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { authClient } from '@/lib/auth-client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'

export default function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);

    const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!email || !password) {
            toast.error('Please fill all the fields')
            return
        }

        setLoading(true)

        const { error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/dashboard",
        });

        if (error) {
            toast.error(error.message || 'Something went wrong')
        } else {
            toast.success('Logged in successfully')
        }

        setLoading(false)
    }
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <a href="#" className="flex items-center gap-2 font-medium">
                        DBMS
                    </a>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <form onSubmit={loginHandler}
                            className={cn("flex flex-col gap-6")}>
                            <FieldGroup>
                                <div className="flex flex-col items-center gap-1 text-center">
                                    <h1 className="text-2xl font-bold">Login to your account</h1>
                                    <p className="text-sm text-balance text-muted-foreground">
                                        Enter your email below to login to your account
                                    </p>
                                </div>
                                <Field>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <Input value={email} onChange={(e) => setEmail(e.target.value)}
                                        id="email" type="email" placeholder="m@example.com" required />
                                </Field>
                                <Field>
                                    <div className="flex items-center">
                                        <FieldLabel htmlFor="password">Password</FieldLabel>
                                        <Link
                                            href="/forget-password"
                                            className="ml-auto text-sm underline-offset-4 hover:underline"
                                        >
                                            Forgot your password?
                                        </Link>
                                    </div>
                                    <Input value={password} onChange={(e) => setPassword(e.target.value)}
                                        id="password" type="password" required />
                                </Field>
                                <Field>
                                    <Button disabled={loading} type="submit">{loading ? <Spinner /> : "Login"}</Button>
                                </Field>
                                <FieldSeparator>Or continue with</FieldSeparator>
                                <Field>
                                    <GoogleAuthButton label="Login with Google" />
                                    <FieldDescription className="text-center">
                                        Don&apos;t have an account?{" "}
                                        <Link href="/signup" className="underline underline-offset-4">
                                            Sign up
                                        </Link>
                                    </FieldDescription>
                                </Field>
                            </FieldGroup>
                        </form>
                    </div>
                </div>
            </div>
            <div className="relative hidden bg-muted lg:block">
                <img
                    src="https://images.unsplash.com/photo-1634176866089-b633f4aec882?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}
