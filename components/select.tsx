/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { ButtonLink } from './ui/button-link'
import { Button } from './ui/button'
import { useMultiForm } from '@/store/store'

const Select = () => {
	const { product, isChoose, toggleStatus, selectPlan, addPlan } = useMultiForm()

	const handleToggleStatus = () => {
		toggleStatus()
	}

	const handleSelectPlan = (id: string | undefined) => {
		if (id) {
			selectPlan(id)
		}
	}

	const handleAddPlan = () => {
		addPlan()
	}

	return (
		<div className="w-full h-full flex flex-col justify-between">
			<div className="">
				<h1>Select your plan</h1>
				<p>You have the option of monthly or yearly billing.</p>
				<div className="flex flex-col gap-8">
					<div className="w-full flex justify-between gap-2">
						{product.map(d => (
							<div
								key={d.title}
								onClick={() => handleSelectPlan(d.id)}
								className={`w-[30%] cursor-pointer hover:border-blue-200 min-h-40 border rounded p-4 flex flex-col justify-between items-start ${
									d.choose ? 'border-blue-200 bg-gray-50' : 'border-gray-100 bg-white'
								}`}
							>
								<div className="h-20">
									<img src={`/${d.image}`} alt="" />
								</div>

								<div className="w-full min-h-8 flex flex-col gap-1 text-md justify-between">
									<h2>{d.title}</h2>
									{isChoose === 'monthly' && <span>{`$${d.monthly}/mo`}</span>}
									{isChoose == 'yearly' && (
										<>
											<span>{`$${d.yearly}/yr`}</span>
											<span className="text-blue-300 text-sm">{d.bonus}</span>
										</>
									)}
								</div>
							</div>
						))}
					</div>
					<div className="w-full h-12 bg-gray-50 flex justify-center items-center gap-6 text-md font-semibold">
						<span className={`${isChoose == 'yearly' ? 'text-gray-200' : 'text-blue-300'}`}>Monthly</span>
						<Button
							onClick={handleToggleStatus}
							align={isChoose == 'yearly' ? 'end' : 'start'}
							variant={'positive'}
							size={'small'}
							shape={'round'}
							// className="transition-items duration-300 ease-in-out"
						>
							<div className="w-[40%] h-full rounded-full bg-white" />
						</Button>
						<span className={`${isChoose === 'yearly' ? 'text-blue-300' : 'text-gray-200'}`}>Yearly</span>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between">
				<ButtonLink variant={'ghost'} size={'large'} href={'/'}>
					Go Back
				</ButtonLink>
				<ButtonLink variant={'primary'} size={'large'} href={'/add'} onClick={handleAddPlan}>
					Next Step
				</ButtonLink>
			</div>
		</div>
	)
}

export default Select
