interface IUserAdded {
	id: string
	title: string
	description: string
	price: number
	checked: boolean
}
interface IUserProduct {
	id: string
	title: string
	price: number
	added: IUserAdded[]
}
