import { CardSkeleton } from '@/components/shared/Loading'

export default function Loading() {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </section>
  )
}
