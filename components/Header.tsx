'use client'

import React from 'react'
import { NavTabs } from './nav-tabs'
import { navTabsConfig } from '@/config/nav-tabs.config'
import useWindowWidth from '@/utils/hooks'

const Header = () => {
	const windowWidth = useWindowWidth()

	return (
		<>
			<div
				style={
					windowWidth < 960
						? {
								backgroundImage: `url('/images/bg-sidebar-mobile.svg')`
						  }
						: { backgroundImage: `url('/images/bg-sidebar-desktop.svg')` }
				}
				className={`w-full lg:h-full sx:h-[25vh] header`}
			>
				<NavTabs items={navTabsConfig} />
			</div>
		</>
	)
}

export default Header
