import React from 'react'
import PickAdd from '@/components/pick-add'
import dataAdds from '@/data/addons.json'

type Props = {}

const AddPage = (props: Props) => {
	const adds: IAdd[] = dataAdds

	return (
		<section className="w-full h-full px-16 py-8">
			<PickAdd adds={adds} />
		</section>
	)
}

export default AddPage
