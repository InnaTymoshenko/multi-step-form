interface IconProps extends React.HTMLAttributes<SVGElement> {}

const CheckMark = ({ className, ...props }: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" className={className} {...props}>
			<path fill="none" stroke="#FFF" strokeWidth="2" d="m1 4 3.433 3.433L10.866 1" />
		</svg>
	)
}

export default CheckMark
