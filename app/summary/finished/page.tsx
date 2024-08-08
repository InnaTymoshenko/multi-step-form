'use client'

import ThankYou from '@/components/ui/thank-you'

const FinishedPage = () => {
	return (
		<div className="w-full lg:h-full lg:p-0 sx:px-3 relative sx:h-[60vh] lg:min-h-[50%] bg-white">
			<div className="bg-white lg:w-full sx:w-[90%] h-full absolute lg:top-0 sx:top-[-10%] lg:left-0 sx:left-[5%] sx:py-8 lg:p-0 rounded sx:shadow-xl lg:shadow-none">
				<div className="w-full h-full flex flex-col justify-center items-center gap-8 p-4">
					<ThankYou />
					<h1>Thank you!</h1>
					<p className="text-center">
						Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
						please feel free to email us at support@loremgaming.com.
					</p>
				</div>
			</div>
		</div>
	)
}

export default FinishedPage
