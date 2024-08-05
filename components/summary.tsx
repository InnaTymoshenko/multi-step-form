import React from 'react'
import { ButtonLink } from './ui/button-link'
import Link from 'next/link'

type Props = {}

const Summary = (props: Props) => {
	return (
		<div className="w-full h-full flex flex-col justify-between">
			<div className="">
				<h1>Finishing up</h1>
				<p>Double-check everything looks OK before confirming.</p>
				<div className="w-full flex flex-col gap-2">
					<div className="w-ful min-h-20 bg-gray-50 flex flex-col gap-4 rounded p-6">
						<div className="w-full border-b-2 border-b-gray-100 pb-2 flex justify-between items-center">
							<div className="w-[90%]">
								<h2>Arcade (Monthly)</h2>
								<Link className="underline hover:text-blue-200" href={'/select'}>
									Change
								</Link>
							</div>
							<strong className="text-blue-300">$9/mo</strong>
						</div>
						<div className="w-full flex flex-col gap-4">
							<div className="w-full flex justify-between items-center">
								Larger storage
								<span className="text-md text-blue-300">+$2/mo</span>
							</div>
							<div className="w-full flex justify-between items-center">
								Larger storage
								<span className="text-md text-blue-300">+$2/mo</span>
							</div>
						</div>
					</div>
					<div className="w-full flex justify-between items-center p-6">
						Total (per month)
						<span className="text-xl font-bold text-blue-200">+$12/mo</span>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between">
				<ButtonLink variant={'ghost'} size={'large'} href={'/add'}>
					Go Back
				</ButtonLink>
				<ButtonLink variant={'clear'} size={'large'} href={'/'}>
					Confirm
				</ButtonLink>
			</div>
		</div>
	)
}

export default Summary
