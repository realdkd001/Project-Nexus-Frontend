import { cn } from '@/lib/utils'
import React from 'react'

export default function Button({icon, label, className, ...props}: {label:string, icon?: React.ReactNode, className?: string} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={cn("flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors shadow-sm", className)}>
            {icon}
            {label}
          </button>
  )
}