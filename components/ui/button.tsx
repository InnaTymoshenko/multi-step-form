'use client'

import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'

const buttonStyles = cva(
	[
		'flex',
		'items-center',
		'relative',
		'select-none',
		'outline-none',
		'font-medium',
		'transition',
		'duration-100',
		'focus-visible:ring-offset-white',
		'focus-visible:ring-black',
		'focus-visible:ring-offset-2',
		'focus-visible:ring-2',
		'disabled:pointer-events-none disabled:opacity-50'
	],
	{
		variants: {
			variant: {
				primary: 'bg-blue-300 text-white hover:brightness-200 active:brightness-200',
				ghost: 'bg-transparent font-semibold text-gray-200 hover:text-blue-300 active:text-blue-300',
				clear: 'bg-blue-200 text-white hover:bg-blue-200/60 active:bg-blue-200/60',
				positive: 'bg-blue-300 text-white'
			},
			error: {
				true: 'bg-danger-light border-danger focus:bg-danger-light placeholder:text-transparent'
			},
			align: {
				start: 'justify-start',
				center: 'justify-center',
				end: 'justify-end'
			},
			size: {
				small: 'p-1 w-12 h-6',
				medium: 'px-4 gap-3 text-md h-10',
				large: 'px-6 gap-4 text-lg h-12'
			},
			shape: {
				rectangle: 'rounded',
				round: 'rounded-full'
			},
			fullWidth: {
				true: 'w-full'
			}
		},
		defaultVariants: {
			variant: 'primary',
			align: 'center',
			size: 'medium',
			shape: 'rectangle'
		}
	}
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
	children?: React.ReactNode
	className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{ variant, error, align, size, shape, fullWidth, children, className, ...props },
	ref
) {
	return (
		<button
			ref={ref}
			className={cn(buttonStyles({ variant, error, align, size, shape, fullWidth, className }))}
			{...props}
		>
			{children}
		</button>
	)
})
Button.displayName = 'Button'

export { Button, buttonStyles }
