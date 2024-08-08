interface IDataPlan {
	title: string
	image: string
	monthly: number
	yearly: number
	bonus: string
}
interface IPlan {
	title: string
	image: string
	monthly: number
	yearly: number
	bonus: string
	choose: boolean | undefined
	id: string
	added: IAdd[]
}
