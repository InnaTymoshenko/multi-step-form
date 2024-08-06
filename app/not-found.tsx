import { FaFaceSadTear } from 'react-icons/fa6'
import { ButtonLink } from '@/components/ui/button-link'

type Props = {}

const NotFound = (props: Props) => {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center gap-8 p-4">
			<FaFaceSadTear size={80} className="text-red-100/80" />
			<h1>Error 404</h1>
			<ButtonLink href={'/'}>Back to the Main</ButtonLink>
		</div>
	)
}

export default NotFound
