interface IUserAdded {
	title: string
	description: string
	price: number
}
interface IUserProduct {
	title: string
	price: number
	added?: IUserAdded[]
}
