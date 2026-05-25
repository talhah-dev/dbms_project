import { Button } from '@/components/ui/button'
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { BsGoogle } from 'react-icons/bs'

export default function Signup() {
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
                        <form className={cn('flex flex-col gap-6')}>
                            <FieldGroup className='gap-y-5'>
                                <div className="flex flex-col items-center gap-1 text-center">
                                    <h1 className="text-2xl font-bold">
                                        Create your account
                                    </h1>
                                    <p className="text-sm text-balance text-muted-foreground">
                                        Enter your information below to create your account
                                    </p>
                                </div>

                                <Field>
                                    <FieldLabel htmlFor="name">
                                        Full Name
                                    </FieldLabel>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Muhammad Talha"
                                        required
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="email">
                                        Email
                                    </FieldLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="password">
                                        Password
                                    </FieldLabel>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="confirm-password">
                                        Confirm Password
                                    </FieldLabel>
                                    <Input
                                        id="confirm-password"
                                        type="password"
                                        required
                                    />
                                </Field>

                                <Field>
                                    <Button type="submit">
                                        Create Account
                                    </Button>
                                </Field>

                                <FieldSeparator>
                                    Or continue with
                                </FieldSeparator>

                                <Field>
                                    <Button variant="outline" type="button">
                                        <BsGoogle />
                                        Sign up with Google
                                    </Button>

                                    <FieldDescription className="text-center">
                                        Already have an account?{' '}
                                        <Link
                                            href="/signin"
                                            className="underline underline-offset-4"
                                        >
                                            Sign in
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