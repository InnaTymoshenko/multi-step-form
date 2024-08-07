import { ReactNode } from 'react'

export default function SummaryLayout({ children }: { children: ReactNode }) {
	return <section className="w-full h-full lg:px-16 lg:py-8 sx:p-0">{children}</section>
}
