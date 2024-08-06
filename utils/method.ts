import { v4 as uuidv4 } from 'uuid'

export const createNewPlan = (plan: IPlan) => {
	return {
		...plan,
		id: uuidv4(),
		choose: false
	}
}
