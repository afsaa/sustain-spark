import { Footer, Header } from '../../components/shared'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
