/* eslint-disable @next/next/no-img-element */
'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import CheckMark from './check-mark'
import { cn } from '@/utils/cn'

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			'peer h-5 w-5 shrink-0 rounded-sm border-checkbox border-2 hover:border-checkbox-hover disabled:cursor-not-allowed disabled:opacity-50 bg-transparent data-[state=checked]:bg-blue-200 data-[state=checked]:border-blue-200 data-[state=checked]:text-md',
			className
		)}
		{...props}
	>
		<CheckboxPrimitive.Indicator className={cn('flex items-center justify-center')}>
			<CheckMark className="h-4 w-4" />
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
