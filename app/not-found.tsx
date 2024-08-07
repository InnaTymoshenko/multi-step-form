import { FaFaceSadTear } from 'react-icons/fa6'
import { ButtonLink } from '@/components/ui/button-link'

type Props = {}

const NotFound = (props: Props) => {
	return (
		<div className="w-full h-full lg:p-0 sx:px-3 relative sx:h-[60vh] lg:min-h-[50%] bg-white">
			<div className="bg-white lg:w-full sx:w-[90%] h-full absolute lg:top-0 sx:top-[-10%] lg:left-0 sx:left-[5%] sx:py-8 lg:p-0 rounded sx:shadow-xl lg:shadow-none">
				<div className="w-full h-full flex flex-col justify-center items-center gap-8 p-4">
					<FaFaceSadTear size={80} className="text-red-100/80" />
					<h1>Error 404</h1>
					<ButtonLink href={'/'}>Back to the Main</ButtonLink>
				</div>
			</div>
		</div>
	)
}

export default NotFound
