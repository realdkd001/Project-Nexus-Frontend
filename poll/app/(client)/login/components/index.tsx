import { cn } from "@/lib/utils"
import { VoteLogo } from "@/svg"
import { Input } from "@/components/ui/input"
import { EyeIcon, Lock, ShieldCheck } from "lucide-react"
import Link from "next/link"

export function LoginContainer({ className, children }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn("flex items-center justify-center p-4 sm:p-6 md:p-8", className)}>
            {children}
        </div>
    )
}

export function LoginContent({ className, children }: { children: React.ReactNode, className?: string }) {
    return (
        <div className="flex w-full max-w-md flex-col items-center">
            <div className={cn("flex w-full flex-col items-center justify-center rounded-xl bg-white p-4 shadow-xl shadow-slate-200/50 sm:p-6 dark:bg-slate-900 dark:shadow-none", className)}>
                {children}
            </div>
        </div>
    )
}



export function LoginHead({ className }: { className?: string }) {
    return (
        <div className={cn("flex flex-col justify-center items-center gap-y-4", className)}>
            <div className="w-fit bg-secondary-text/10 p-4 rounded-full">
                <VoteLogo className="size-10 text-action-blue" />
            </div>

            <div className="w-full text-center">
                <h1
                    className="text-primary-text dark:text-white tracking-tight text-2xl font-bold leading-tight pb-2"
                >
                    Secure Sign-In
                </h1>
                <p
                    className="text-secondary-text dark:text-slate-400 text-base font-normal leading-normal pb-6"
                >
                    Please enter your credentials to proceed.
                </p>
            </div>
        </div>
    )
}

export function LoginForm({ className }: { className?: string }) {
    return (
        <div className={cn("", className)}>

            <div className="flex w-full flex-col items-stretch gap-4">
                <div className="flex flex-col w-full">
                    <p
                        className="text-primary-text dark:text-white text-sm font-medium leading-normal pb-3"
                    >
                        Voter Identification Number
                    </p>
                    <div className="relative flex py-1 w-full px-3 border bg-[#F6F8FA] border-[#DFE1E7] rounded-xl  justify-center flex-1 items-center">
                        <Input
                            type="text"
                            className="border-0 focus-visible:ring-0  shadow-none placeholder:text-[#666D80]"
                            placeholder="Enter your Voter ID"
                        />

                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <p
                        className="text-primary-text dark:text-white text-sm font-medium leading-normal pb-3"
                    >
                        Secure Access Code / Password
                    </p>
                    <div className="relative flex py-1 w-full px-3 border bg-[#F6F8FA] border-[#DFE1E7] rounded-xl  justify-center flex-1 items-center">
                        <Lock className="text-[#666D80]" />
                        <Input
                            type="password"
                            className="border-0 focus-visible:ring-0  shadow-none placeholder:text-[#666D80]"
                            placeholder="Enter your password or PIN"
                        />
                        <EyeIcon className="text-[#666D80]" />
                    </div>
                </div>

                <Link
                    className="text-sm font-medium text-action-blue hover:underline text-right mt-1 dark:text-blue-400"
                    href="#"
                >Forgot Password?</Link>

                <button
                    className="flex h-12 w-full items-center justify-center rounded-lg bg-action-blue px-6 text-base font-bold text-white shadow-sm transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-action-blue focus:ring-offset-2 dark:focus:ring-offset-slate-900 mt-4"
                >
                    Sign In Securely
                </button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2">
                <span
                    className="material-symbols-outlined text-sm text-green-600 dark:text-green-500"
                >
                    <ShieldCheck className="size-4" />
                </span>
                <p className="text-secondary-text dark:text-slate-400 text-xs">
                    Your connection is secure.
                </p>
            </div>

        </div>
    )
}


export function LoginFooter({ className }: { className?: string }) {
    return (
        <div className={cn("", className)}>

            <div className="flex items-center justify-center gap-4 pt-4">
                <a
                    className="text-sm text-secondary-text hover:text-action-blue hover:underline dark:text-slate-400 dark:hover:text-blue-400"
                    href="#"
                >Help Center</a>
                <span className="text-secondary-text dark:text-slate-500">·</span>
                <a
                    className="text-sm text-secondary-text hover:text-action-blue hover:underline dark:text-slate-400 dark:hover:text-blue-400"
                    href="#"
                >Privacy Policy</a>
            </div>

        </div>
    )
}