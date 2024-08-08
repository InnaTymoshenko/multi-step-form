type NavTabItem = {
	title: string
	href: string
}

export const navTabsConfig: NavTabItem[] = [
	{
		title: 'Your info',
		href: '/'
	},
	{
		title: 'Select plan',
		href: '/select'
	},
	{
		title: 'Add-ons',
		href: '/add'
	},
	{
		title: 'Summary',
		href: '/summary'
	}
]
