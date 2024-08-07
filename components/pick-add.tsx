'use client'

import React from 'react'
import { ButtonLink } from './ui/button-link'
import { Checkbox } from './ui/checkbox'
import { useMultiForm } from '@/store/store'

const PickAdd = () => {
	const { userProduct, isChoose, toggleCheck } = useMultiForm()

	const handleChecked = (id: string) => {
		toggleCheck(id)
	}

	return (
		<div className="w-full h-full flex flex-col gap-6 justify-between lg:p-0 sx:pb-6">
			<div className="w-full lg:p-0 sx:px-3 relative sx:h-[60vh] lg:min-h-[50%] sx:bg-gray-50 lg:bg-white">
				<div className="bg-white lg:w-full sx:w-[90%] absolute lg:top-0 sx:top-[-10%] lg:left-0 sx:left-[5%] sx:py-8 sx:px-4 lg:p-0 rounded sx:shadow-xl lg:shadow-none">
					<h1>Pick add-ons</h1>
					<p>Add-ons help enhance your gaming experience.</p>
					<div className="flex flex-col gap-4">
						{userProduct.plan.added
							? userProduct.plan.added.map(a => (
									<div
										key={a.title}
										className={`w-full h-20 border hover:border-blue-200 cursor-pointer rounded px-4 flex gap-2 justify-between items-center ${
											a.checked ? 'border-blue-200 bg-gray-50' : 'border-gray-100 bg-white'
										}`}
										onClick={() => handleChecked(a.id)}
									>
										<Checkbox checked={a.checked} />
										<div className="w-[70%] text-left">
											<h2 className="lg:text-lg sx:text-md">{a.title}</h2>
											<p className="my-0 lg:text-lg sx:text-sm">{a.description}</p>
										</div>
										{isChoose === 'monthly' && <div className="text-blue-200">{`+$${a.price}/mo`}</div>}
										{isChoose === 'yearly' && <div className="text-blue-200">{`+$${a.price}/yr`}</div>}
									</div>
							  ))
							: null}
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between sx:px-3 lg:px-0">
				<ButtonLink variant={'ghost'} size={'large'} href={'/select'}>
					Go Back
				</ButtonLink>
				<ButtonLink variant={'primary'} size={'large'} href={'/summary'}>
					Next Step
				</ButtonLink>
			</div>
		</div>
	)
}

export default PickAdd
