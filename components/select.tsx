/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react'
import { ButtonLink } from './ui/button-link'
import { Button } from './ui/button'

type Props = {
	data: IPlan[]
}

const Select = ({ data }: Props) => {
	const [monthly, setMonthly] = useState(false)

	console.log(data)

	return (
		<div className="w-full h-full flex flex-col justify-between">
			<div className="">
				<h1>Select your plan</h1>
				<p>You have the option of monthly or yearly billing.</p>
				<div className="flex flex-col gap-8">
					<div className="w-full flex justify-between gap-2">
						{data.map(d => (
							<div
								key={d.title}
								className="w-[30%] min-h-40 border border-gray-100 rounded p-4 flex flex-col justify-between items-start"
							>
								<div className="h-20">
									<img src={`/${d.image}`} alt="" />
								</div>

								<div className="w-full min-h-8 flex flex-col gap-1 text-md justify-between">
									<h2>{d.title}</h2>
									{monthly ? (
										<>
											<span>{`$${d.yearly}/yr`}</span>
											<span className="text-blue-300 text-sm">{d.bonus}</span>
										</>
									) : (
										<span>{`$${d.monthly}/mo`}</span>
									)}
								</div>
							</div>
						))}
					</div>
					<div className="w-full h-12 bg-gray-50 flex justify-center items-center gap-6 text-md font-semibold">
						<span className={`${monthly ? 'text-gray-200' : 'text-blue-300'}`}>Monthly</span>
						<Button
							onClick={() => setMonthly(!monthly)}
							align={monthly ? 'end' : 'start'}
							variant={'positive'}
							size={'small'}
							shape={'round'}
						>
							<div className="w-[40%] h-full rounded-full bg-white" />
						</Button>
						<span className={`${monthly ? 'text-blue-300' : 'text-gray-200'}`}>Yearly</span>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between">
				<ButtonLink variant={'ghost'} size={'large'} href={'/'}>
					Go Back
				</ButtonLink>
				<ButtonLink variant={'primary'} size={'large'} href={'/add'}>
					Next Step
				</ButtonLink>
			</div>
		</div>
	)
}

export default Select
