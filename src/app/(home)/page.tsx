import { Description, Hero } from '@/components/home'

export default function Home() {
  return (
    <main className="w-full h-[calc(100vh-136px)]">
      <Hero />
      <Description />
    </main>
  )
}
