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
		<div className="w-full h-full flex flex-col gap-6 justify-between lg:p-0 sx:pb-6">
			<div className="w-full lg:p-0 sx:px-3 relative sx:h-[60vh] lg:min-h-[50%] sx:bg-gray-50 lg:bg-white">
				<div className="bg-white lg:w-full sx:w-[90%] absolute lg:top-0 sx:top-[-10%] lg:left-0 sx:left-[5%] sx:py-8 sx:px-4 lg:p-0 rounded sx:shadow-xl lg:shadow-none">
					<h1>Select your plan</h1>
					<p>You have the option of monthly or yearly billing.</p>
					<div className="flex flex-col gap-8">
						<div className="w-full flex lg:flex-row sx:flex-col justify-between gap-2">
							{product.map(d => (
								<div
									key={d.title}
									onClick={() => handleSelectPlan(d.id)}
									className={`lg:w-[30%] sx:w-full cursor-pointer hover:border-blue-200 border rounded p-4 flex lg:flex-col sx:flex-row sx:gap-4 lg:gap-12 lg:justify-between sx:justify-start lg:items-start sx:items-center ${
										d.choose ? 'border-blue-200 bg-gray-50' : 'border-gray-100 bg-white'
									}`}
								>
									<img src={`/${d.image}`} alt="" />
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
							>
								<div className="w-[40%] h-full rounded-full bg-white" />
							</Button>
							<span className={`${isChoose === 'yearly' ? 'text-blue-300' : 'text-gray-200'}`}>Yearly</span>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between sx:px-3 lg:px-0">
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
