import React from 'react'
import { NavTabs } from './nav-tabs'
import { navTabsConfig } from '@/config/nav-tabs.config'

type Props = {}

const Header = (props: Props) => {
	return (
		<div className="w-full h-full bg-[url('/images/bg-sidebar-desktop.svg')] ">
			<NavTabs items={navTabsConfig} />
		</div>
	)
}

export default Header
