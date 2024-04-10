'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function GlobalNotFound() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="mb-2 text-5xl font-extrabold">404 - Page Not Found</h1>
      <Image src="/assets/not-found.jpg" width={500} height={500} alt="Error image" />
      <p className="mb-4 text-xl">We could not find the page you were looking for</p>
      <button className=" p-2 rounded-xl bg-gradient-to-r from-lime-600 to-lime-300 font-semibold">
        <Link href="/">Go to home</Link>
      </button>
    </main>
  )
}
