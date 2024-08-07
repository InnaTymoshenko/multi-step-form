import React from 'react'
import { Button } from './ui/button'
import { ButtonLink } from './ui/button-link'

type Props = {}

const PersonalInfo = (props: Props) => {
	return (
		<div className="w-full h-full flex flex-col gap-6 justify-between lg:p-0 sx:pb-6">
			<div className="w-full lg:p-0 sx:px-3 relative sx:h-[60vh] lg:min-h-[50%] sx:bg-gray-50 lg:bg-white">
				<div className="bg-white lg:w-full sx:w-[90%] absolute lg:top-0 sx:top-[-10%] lg:left-0 sx:left-[5%] sx:py-8 sx:px-4 lg:p-0 rounded sx:shadow-xl lg:shadow-none">
					<h1>Personal info</h1>
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
			</div>

			<div className="flex items-center justify-end sx:px-3 lg:px-0">
				<ButtonLink variant={'primary'} size={'large'} href={'/select'}>
					Next Step
				</ButtonLink>
			</div>
		</div>
	)
}

export default PersonalInfo
