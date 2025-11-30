import { cn } from "@/lib/utils"

export function VoteLogo({ className }: { className: string }) {
    return (
      <svg
        className={cn("w-full h-full", className)}
        viewBox="0 0 12 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 5.126e-06H12V4.44444V8.88891H6V13.3333H0V8.88891V4.44444H6V5.126e-06V5.126e-06Z"
          fill="currentColor"
        />
      </svg>
    );
}