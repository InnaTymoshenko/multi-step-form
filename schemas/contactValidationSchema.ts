import { z } from 'zod'

const phoneRegex = /^\+\d\s\d{3}\s\d{3}\s\d{3}$/

export const contactFormValidationSchema = z.object({
	name: z.string().min(2, { message: 'This field is required' }),
	email: z.string().min(1, { message: 'This field is required' }).email({
		message: 'Must be a valid email'
	}),
	phone: z
		.string()
		.min(1, { message: 'This field is required' })
		.regex(phoneRegex, { message: 'Must be a valid phone' })
})
