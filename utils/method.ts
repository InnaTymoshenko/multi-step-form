import { v4 as uuidv4 } from 'uuid'

export const createNewPlan = (plan: IPlan) => {
	return {
		...plan,
		id: uuidv4(),
		choose: false
	}
}

export const capitalize = (str: string): string => {
	if (str.length === 0) return ''
	return str.charAt(0).toUpperCase() + str.slice(1)
}
