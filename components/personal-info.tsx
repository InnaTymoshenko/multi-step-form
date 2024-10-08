/* eslint-disable react/no-children-prop */
'use client'

import React from 'react'
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputMask } from '@react-input/mask'
import { contactFormValidationSchema } from '@/schemas/contactValidationSchema'
import { Button } from './ui/button'
import { useMultiForm } from '@/store/store'

type Schema = z.infer<typeof contactFormValidationSchema>

const PersonalInfo = () => {
	const router = useRouter()
	const { addUser } = useMultiForm()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid }
	} = useForm<Schema>({
		resolver: zodResolver(contactFormValidationSchema),
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<Schema> = data => {
		addUser(data)
		reset({ name: '', email: '', phone: '' })
		router.push('/select')
	}

	return (
		<div className="w-full lg:h-full sx:h-[80%] flex flex-col gap-6 justify-between lg:p-0 sx:pb-6 sx:bg-gray-50 lg:bg-white">
			<div className="w-full lg:p-0 sx:px-3 relative sx:h-[60vh] lg:min-h-[50%] ">
				<div className="bg-white lg:w-full sx:w-[90%] absolute lg:top-0 sx:top-[-10%] lg:left-0 sx:left-[5%] sx:py-8 sx:px-4 lg:p-0 rounded sx:shadow-xl lg:shadow-none">
					<h1>Personal info</h1>
					<p>Please provide your name, email address, and phone number.</p>
					<form
						className="w-full flex flex-col gap-4 sx:relative lg:static"
						autoComplete="off"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="w-full flex flex-col gap-2 justify-between items-start py-1">
							<div className="w-full flex justify-between items-center">
								<label htmlFor="name" className="text-blue-300 text-md font-semibold">
									Name
								</label>
								{errors.name && <span className="text-md text-red-100">{errors.name?.message}</span>}
							</div>
							<input
								type="text"
								id="name"
								placeholder="e.g. Stephen King"
								className={`w-full h-12 border border-gray-100 text-blue-300 outline-blue-200 rounded pl-3 active:border-blue-200 active:border-spacing-1 ${
									errors.name && 'outline-red-100 border-red-100'
								}`}
								{...register('name')}
							/>
						</div>
						<div className="w-full flex flex-col gap-2 justify-between items-start py-1">
							<div className="w-full flex justify-between items-center">
								<label htmlFor="email" className="text-blue-300 text-md font-semibold">
									Email Address
								</label>
								{errors.email && <span className="text-md text-red-100">{errors.email?.message}</span>}
							</div>
							<input
								type="text"
								id="email"
								placeholder="e.g. stephenking@lorem.com"
								className={`w-full h-12 border border-gray-100 text-blue-300 outline-blue-200 rounded pl-3 active:border-blue-200 active:border-spacing-1 ${
									errors.email && 'outline-red-100 border-red-100'
								}`}
								{...register('email')}
							/>
						</div>
						<div className="w-full flex flex-col gap-2 justify-between items-start py-1">
							<div className="w-full flex justify-between items-center">
								<label htmlFor="phone" className="text-blue-300 text-md font-semibold">
									Phone Number
								</label>
								{errors.phone && <span className="text-md text-red-100">{errors.phone?.message}</span>}
							</div>
							<InputMask
								mask={'+_ ___ ___ ___'}
								replacement={{ _: /\d/ }}
								type="phone"
								id="phone"
								placeholder="e.g. +1 234 567 890"
								className={`w-full h-12 border border-gray-100 text-blue-300 outline-blue-200 rounded pl-3 active:border-blue-200 active:border-spacing-1 ${
									errors.phone && 'outline-red-100 border-red-100'
								}`}
								{...register('phone')}
							/>
						</div>
						<div className="flex items-center justify-end mt-12 sx:px-3 lg:px-0 sx: lg:static sx:absolute sx:bottom-[-50%] sx:right-0">
							<Button
								className={`${!isValid ? 'cursor-not-allowed' : 'cursor-pointer'}`}
								type="submit"
								variant={'primary'}
								size={'large'}
							>
								Next Step
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default PersonalInfo
