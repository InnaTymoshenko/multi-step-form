import React from 'react'
import Select from '@/components/select'
import dataPlan from '@/data/plan.json'

type Props = {}

const SelectPage = (props: Props) => {
	const data: IPlan[] = dataPlan

	return (
		<section className="w-full h-full px-16 py-8">
			<Select data={data} />
		</section>
	)
}

export default SelectPage
