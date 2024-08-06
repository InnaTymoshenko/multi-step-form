import React from 'react'
import ThankYou from '@/components/ui/thank-you'

type Props = {}

const FinishedPage = (props: Props) => {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center gap-8 p-4">
			<ThankYou />
			<h1>Thank you!</h1>
			<p className="text-center">
				Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
				please feel free to email us at support@loremgaming.com.
			</p>
		</div>
	)
}

export default FinishedPage
