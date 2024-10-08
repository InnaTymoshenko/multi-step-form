'use client'

import React from 'react'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/utils/cn'

export const tabStyles = cva(
	[
		'w-[32px] h-[32px] pointer-events-none border border-white rounded-full flex justify-center items-center text-white font-semibold'
	],
	{
		variants: {
			selected: {
				true: 'text-blue-300 bg-blue-50'
			}
		}
	}
)

export interface TabProps extends React.ComponentPropsWithoutRef<typeof Link>, VariantProps<typeof tabStyles> {}

const NavTab = React.forwardRef<React.ElementRef<typeof Link>, TabProps>(
	({ className, href, selected, children, ...props }, ref) => (
		<Link ref={ref} href={href} className={cn(tabStyles({ selected }), className)} {...props}>
			{children}
		</Link>
	)
)
NavTab.displayName = 'NavTab'

interface NavTabsProps extends React.HTMLAttributes<HTMLDivElement> {
	items: { title: string; href: string }[]
}

const NavTabs = ({ className, children, items, ...props }: NavTabsProps) => {
	const segment = useSelectedLayoutSegment()
	const pathname = usePathname()

	return (
		<div
			className={cn('w-full flex lg:flex-col sx:justify-center sx:flex-row lg:gap-8 sx:gap-4 pt-8', className)}
			{...props}
		>
			{items.map((item, index) => {
				return (
					<div key={index} className="flex gap-4 lg:px-8 sx:px-0 items-center">
						<NavTab
							href={item.href}
							selected={segment === null ? item.href === pathname : item.href.includes(String(segment))}
						>
							{index + 1}
						</NavTab>
						<div className="sx:hidden lg:flex flex-col justify-between items-start tracking-widest">
							<span className="text-sm text-blue-100">{`STEP ${index + 1}`}</span>
							<strong className="text-lg text-white">{item.title}</strong>
						</div>
					</div>
				)
			})}
		</div>
	)
}
NavTabs.displayName = 'NavTabs'

export { NavTabs }
