import React from 'react'
import Link from 'next/link'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/utils/cn'

type Props = {}

export const tabStyles = cva(
	[
		'gap-2 inline-flex items-center justify-center whitespace-nowrap px-3 py-3 text-secondary font-medium hover:text-primary disabled:pointer-events-none disabled:opacity-50 border-b-2 border-transparent'
	],
	{
		variants: {
			selected: {
				true: 'border-b-2 border-selected text-primary'
			}
		}
	}
)

export interface TabProps extends React.ComponentPropsWithoutRef<typeof Link>, VariantProps<typeof tabStyles> {}

const NavTab = React.forwardRef<React.ElementRef<typeof Link>, TabProps>(
	({ className, href, selected, ...props }, ref) => (
		<Link ref={ref} href={href} className={cn(tabStyles({ selected }), className)} {...props} />
	)
)
NavTab.displayName = 'NavTab'

interface NavTabsProps extends React.HTMLAttributes<HTMLDivElement> {
	items: { title: string; href: string }[]
}

const NavTabs = ({ className, children, items, ...props }: NavTabsProps) => {
	// const segment = useSelectedLayoutSegment()
	// const pathname = usePathname()

	return (
		<div className={cn('flex items-center border-b', className)} {...props}>
			{items.map((item, index) => {
				return (
					<NavTab
						key={index}
						href={item.href}
						// selected={segment === null ? item.href === pathname : item.href.includes(String(segment))}
					>
						{item.title}
					</NavTab>
				)
			})}
		</div>
	)
}
NavTabs.displayName = 'NavTabs'

export { NavTabs }
