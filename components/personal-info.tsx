import React from 'react'
import { Button } from './ui/button'
import { ButtonLink } from './ui/button-link'

type Props = {}

const PersonalInfo = (props: Props) => {
	return (
		<div className="w-full h-full flex flex-col justify-between">
			<div className="">
				<h1 className="text-3xl text-blue-300 font-bold tracking-widest">Personal info</h1>
				<p>Please provide your name, email address, and phone number.</p>
				<form action="" className="w-full flex flex-col gap-4">
					<div className="w-full flex flex-col gap-2 justify-between items-start py-1">
						<label htmlFor="" className="text-blue-300 text-md font-semibold">
							Name
						</label>
						<input
							type="text"
							placeholder="e.g. Stephen King"
							className="w-full h-12 border border-gray-100 rounded pl-3 active:border-blue-200 active:border-spacing-1"
						/>
					</div>
					<div className="w-full flex flex-col gap-2 justify-between items-start py-1">
						<label htmlFor="" className="text-blue-300 text-md font-semibold">
							Email Address
						</label>
						<input
							type="text"
							placeholder="e.g. stephenking@lorem.com"
							className="w-full h-12 border border-gray-100 rounded pl-3"
						/>
					</div>
					<div className="w-full flex flex-col gap-2 justify-between items-start py-1">
						<label htmlFor="" className="text-blue-300 text-md font-semibold">
							Phone Number
						</label>
						<input
							type="text"
							placeholder="e.g. +1 234 567 890"
							className="w-full h-12 border border-gray-100 rounded pl-3"
						/>
					</div>
				</form>
			</div>
			<div className="flex items-center justify-end">
				<ButtonLink variant={'primary'} size={'large'} href={'/select'}>
					Next Step
				</ButtonLink>
			</div>
		</div>
	)
}

export default PersonalInfo
