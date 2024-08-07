import { v4 as uuidv4 } from 'uuid'

export const createNewPlan = (plan: IDataPlan, added: IDataAdd[]) => {
	const newAddType = added.map(add => {
		return {
			...add,
			id: uuidv4(),
			checked: false
		}
	})

	return {
		...plan,
		id: uuidv4(),
		choose: false,
		added: newAddType
	}
}

export const capitalize = (str: string): string => {
	if (str.length === 0) return ''
	return str.charAt(0).toUpperCase() + str.slice(1)
}
