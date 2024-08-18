import { Header } from '@/components/shared'
import { Suspense } from 'react'
import '../globals.css'
import Loading from './loading'

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </main>
  )
}
