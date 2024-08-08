'use client'

import { useState, useEffect } from 'react'

const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(global.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		global.addEventListener('resize', handleResize)
		return () => {
			global.removeEventListener('resize', handleResize)
		}
	}, [])

	return windowWidth
}

export default useWindowWidth
