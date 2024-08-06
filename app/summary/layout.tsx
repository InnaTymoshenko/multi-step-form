import { ReactNode } from 'react'

export default function SummaryLayout({ children }: { children: ReactNode }) {
	return <section className="w-full h-full px-16 py-8">{children}</section>
}
