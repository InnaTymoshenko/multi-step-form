import React from 'react'
import { ButtonLink } from './ui/button-link'
import { Checkbox } from './ui/checkbox'

type Props = {
	adds: IAdd[]
}

const PickAdd = ({ adds }: Props) => {
	return (
		<div className="w-full h-full flex flex-col justify-between">
			<div className="">
				<h1 className="text-3xl text-blue-300 font-bold tracking-widest">Pick add-ons</h1>
				<p>Add-ons help enhance your gaming experience.</p>
				<div className="flex flex-col gap-4">
					{adds.map(a => (
						<div
							key={a.title}
							className="w-full h-20 border border-gray-100 rounded px-4 flex justify-between items-center"
						>
							<Checkbox />
							<div className="w-[70%] text-left">
								<h2>{a.title}</h2>
								<p className="my-0">{a.description}</p>
							</div>
							<div className="text-blue-200">{`+$${a.bonus}/mo`}</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex items-center justify-between">
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
