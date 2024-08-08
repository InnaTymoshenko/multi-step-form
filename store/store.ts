import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import dataPlan from '@/data/plan.json'
import adds from '@/data/addons.json'
import { createNewPlan } from '@/utils/method'

type ChooseStatus = 'monthly' | 'yearly'
interface IUserSelectPlan {
	user: IUser
	plan: IUserProduct
}

interface IMultiFormStore {
	product: IPlan[]
	userProduct: IUserSelectPlan
	isChoose: ChooseStatus
	toggleStatus: () => void
	selectPlan: (id: string) => void
	addPlan: () => void
	toggleCheck: (id: string) => void
	confirmPlan: (data: IUserSelectPlan) => void
	addUser: (data: IUser) => void
}

export const useMultiForm = create<IMultiFormStore>()(
	devtools(
		persist<IMultiFormStore>(
			(set, get) => ({
				product: dataPlan.map(data => {
					return createNewPlan(data, adds)
				}),
				userProduct: {
					user: {
						name: '',
						email: '',
						phone: ''
					},
					plan: {
						id: '',
						title: '',
						price: 0,
						added: [],
						total: 0,
						date: ''
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
					const selectPlan: IPlan | undefined = get().product.find(p => p.choose)
					if (get().isChoose === 'monthly' && selectPlan) {
						const newPlan = {
							id: selectPlan.id,
							title: selectPlan.title,
							price: selectPlan.monthly,
							total: 0,
							date: '',
							added: selectPlan.added.map(add => {
								return {
									id: add.id,
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
							id: selectPlan.id,
							title: selectPlan.title,
							price: selectPlan.yearly,
							total: 0,
							date: '',
							added: selectPlan.added.map(add => {
								return {
									id: add.id,
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
				},
				toggleCheck: id => {
					set({
						userProduct: {
							...get().userProduct,
							plan: {
								...get().userProduct.plan,
								added: get().userProduct.plan.added.map(add =>
									add.id === id ? { ...add, checked: !add.checked } : add
								)
							}
						}
					})
				},
				confirmPlan: data => {
					set({
						userProduct: data
					})
				},
				addUser: data => {
					set({
						product: get().product.map(plan => {
							plan.added[0].checked = true
							plan.added[1].checked = true
							return plan.title === 'Arcade' ? { ...plan, choose: true } : plan
						}),
						userProduct: {
							user: data,
							plan: get().userProduct.plan
						}
					})
				}
			}),
			{ name: 'multi-step-form' }
		)
	)
)
