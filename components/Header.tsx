'use client'

import React from 'react'
import { NavTabs } from './nav-tabs'
import { navTabsConfig } from '@/config/nav-tabs.config'
import useWindowWidth from '@/utils/hooks'

const Header = () => {
	const windowWidth = useWindowWidth()

	return (
		<>
			<div className={`lg:bg-sidebar-desktop sx:bg-sidebar-mobile w-full lg:h-full sx:h-[25vh] header`}>
				<NavTabs items={navTabsConfig} />
			</div>
		</>
	)
}

export default Header
