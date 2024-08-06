import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import dataPlan from '@/data/plan.json'
import { createNewPlan } from '@/utils/method'

type ChooseStatus = 'monthly' | 'yearly'

interface IMultiFormStore {
	product: IPlan[]
	userProduct: IUserProduct
	isChoose: ChooseStatus
	toggleStatus: () => void
}

export const useMultiForm = create<IMultiFormStore>()(
	// devtools(
	//     persist<IMultiFormStore>(
	(set, get) => ({
		product: [
			{
				title: 'Arcade',
				image: './images/icon-arcade.svg',
				monthly: 9,
				yearly: 90,
				bonus: '2 months free',
				choose: true,
				id: '1',
				added: [
					{
						title: 'Online service',
						description: 'Access to multiplayer games',
						bonus: 1,
						checked: true
					},
					{
						title: 'Larger storage',
						description: 'Extra 1TB of cloud save',
						bonus: 1,
						checked: true
					},
					{
						title: 'Customizable Profile',
						description: 'Custom theme on your profile',
						bonus: 2,
						checked: false
					}
				]
			},
			{
				title: 'Advanced',
				image: './images/icon-advanced.svg',
				monthly: 12,
				yearly: 120,
				bonus: '2 months free',
				choose: true,
				id: '1',
				added: [
					{
						title: 'Online service',
						description: 'Access to multiplayer games',
						bonus: 1,
						checked: true
					},
					{
						title: 'Larger storage',
						description: 'Extra 1TB of cloud save',
						bonus: 1,
						checked: true
					},
					{
						title: 'Customizable Profile',
						description: 'Custom theme on your profile',
						bonus: 2,
						checked: false
					}
				]
			},
			{
				title: 'Pro',
				image: './images/icon-pro.svg',
				monthly: 15,
				yearly: 150,
				bonus: '2 months free',
				choose: true,
				id: '1',
				added: [
					{
						title: 'Online service',
						description: 'Access to multiplayer games',
						bonus: 1,
						checked: true
					},
					{
						title: 'Larger storage',
						description: 'Extra 1TB of cloud save',
						bonus: 1,
						checked: true
					},
					{
						title: 'Customizable Profile',
						description: 'Custom theme on your profile',
						bonus: 2,
						checked: false
					}
				]
			}
		],

		userProduct: {
			title: '',
			price: 0,
			added: []
		},
		isChoose: 'monthly',
		toggleStatus: () => {}
	})
	//         {name:'multi-step-form'}
	//     )
	// )
)
