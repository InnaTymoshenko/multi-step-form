'use client'

import React from 'react'
import { ButtonLink } from './ui/button-link'
import Link from 'next/link'
import { useMultiForm } from '@/store/store'
import { capitalize } from '@/utils/method'

const Summary = () => {
	const { userProduct, isChoose, confirmPlan } = useMultiForm()

	const totalPrice = () => {
		const filterAdded = userProduct.plan.added.filter(add => {
			return add.checked
		})

		const sumAdded = filterAdded.reduce((acc, add) => {
			return acc + add.price
		}, 0)

		return userProduct.plan.price + sumAdded
	}

	const handleConfirm = () => {
		const finished = {
			user: userProduct.user,
			plan: {
				id: userProduct.plan.id,
				title: userProduct.plan.title,
				date: isChoose,
				price: userProduct.plan.price,
				total: totalPrice(),
				added: userProduct.plan.added.filter(add => add.checked)
			}
		}

		confirmPlan()
		console.log(finished)
	}

	return (
		<div className="w-full h-full flex flex-col justify-between">
			<div className="">
				<h1>Finishing up</h1>
				<p>Double-check everything looks OK before confirming.</p>
				<div className="w-full flex flex-col gap-2">
					<div className="w-ful min-h-20 bg-gray-50 flex flex-col gap-4 rounded p-6">
						<div className="w-full border-b-2 border-b-gray-100 pb-2 flex justify-between items-center">
							<div className="w-[90%]">
								<h2>{`${userProduct.plan.title} (${capitalize(isChoose)}) `}</h2>
								<Link className="underline hover:text-blue-200" href={'/select'}>
									Change
								</Link>
							</div>
							{isChoose === 'monthly' && <strong className="text-blue-300">{`$${userProduct.plan.price}/mo`} </strong>}
							{isChoose === 'yearly' && <strong className="text-blue-300">{`$${userProduct.plan.price}/yr`} </strong>}
						</div>
						<div className="w-full flex flex-col gap-4">
							{userProduct.plan.added.map(add => {
								if (add.checked) {
									return (
										<div key={add.id} className="w-full flex justify-between items-center">
											{add.title}
											{isChoose === 'monthly' && <span className="text-blue-300">{`+$${add.price}/mo`} </span>}
											{isChoose === 'yearly' && <span className="text-blue-300">{`+$${add.price}/yr`} </span>}
										</div>
									)
								}
							})}
						</div>
					</div>
					<div className="w-full flex justify-between items-center p-6">
						Total (per month)
						{isChoose === 'monthly' && (
							<span className="text-xl font-bold text-blue-200">{`+$${totalPrice()}/mo`}</span>
						)}
						{isChoose === 'yearly' && <span className="text-xl font-bold text-blue-200">{`+$${totalPrice()}/yr`}</span>}
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between">
				<ButtonLink variant={'ghost'} size={'large'} href={'/add'}>
					Go Back
				</ButtonLink>
				<ButtonLink variant={'clear'} size={'large'} href={'/summary/finished'} onClick={handleConfirm}>
					Confirm
				</ButtonLink>
			</div>
		</div>
	)
}

export default Summary
