import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import dataPlan from '@/data/plan.json'
import { createNewPlan } from '@/utils/method'
import { title } from 'process'

type ChooseStatus = 'monthly' | 'yearly'
interface IUserSelectplan {
	user: IUser
	plan: IUserProduct
}

interface IMultiFormStore {
	product: IPlan[]
	userProduct: IUserSelectplan
	isChoose: ChooseStatus
	toggleStatus: () => void
	selectPlan: (id: string) => void
	addPlan: () => void
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
						monthly: 1,
						yearly: 10,
						checked: true
					},
					{
						title: 'Larger storage',
						description: 'Extra 1TB of cloud save',
						monthly: 2,
						yearly: 20,
						checked: true
					},
					{
						title: 'Customizable Profile',
						description: 'Custom theme on your profile',
						monthly: 2,
						yearly: 20,
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
				choose: false,
				id: '2',
				added: [
					{
						title: 'Online service',
						description: 'Access to multiplayer games',
						monthly: 1,
						yearly: 10,
						checked: true
					},
					{
						title: 'Larger storage',
						description: 'Extra 1TB of cloud save',
						monthly: 2,
						yearly: 20,
						checked: true
					},
					{
						title: 'Customizable Profile',
						description: 'Custom theme on your profile',
						monthly: 2,
						yearly: 20,
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
				choose: false,
				id: '3',
				added: [
					{
						title: 'Online service',
						description: 'Access to multiplayer games',
						monthly: 1,
						yearly: 10,
						checked: true
					},
					{
						title: 'Larger storage',
						description: 'Extra 1TB of cloud save',
						monthly: 2,
						yearly: 20,
						checked: true
					},
					{
						title: 'Customizable Profile',
						description: 'Custom theme on your profile',
						monthly: 2,
						yearly: 20,
						checked: false
					}
				]
			}
		],
		userProduct: {
			user: {
				name: '',
				email: '',
				phone: ''
			},
			plan: {
				name: '',
				title: '',
				price: 0
			}
		},
		isChoose: 'monthly',
		toggleStatus: () => {
			set({
				isChoose: get().isChoose == 'monthly' ? 'yearly' : 'monthly'
			})
		},
		selectPlan: id => {
			set({
				product: get().product.map(p => (p.id === id ? { ...p, choose: true } : { ...p, choose: false }))
			})
		},
		addPlan: () => {
			const selectPlan = get().product.find(p => p.choose)
			if (get().isChoose === 'monthly' && selectPlan) {
				const newPlan = {
					title: selectPlan.title,
					price: selectPlan.monthly,
					added: selectPlan.added?.map(add => {
						return {
							title: add.title,
							description: add.description,
							price: add.monthly,
							checked: add.checked
						}
					})
				}
				set({
					userProduct: {
						user: get().userProduct.user,
						plan: newPlan
					}
				})
			} else if (get().isChoose === 'yearly' && selectPlan) {
				const newPlan = {
					title: selectPlan.title,
					price: selectPlan.yearly,
					added: selectPlan.added?.map(add => {
						return {
							title: add.title,
							description: add.description,
							price: add.yearly,
							checked: add.checked
						}
					})
				}
				set({
					userProduct: {
						user: get().userProduct.user,
						plan: newPlan
					}
				})
			}
		}
	})
	//         {name:'multi-step-form'}
	//     )
	// )
)
