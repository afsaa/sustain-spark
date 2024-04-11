'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error.message)
  }, [error])

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-5xl font-extrabold">Something went wrong!</h1>
      <Image className="mb-4" src="/assets/error.jpg" width={500} height={500} alt="Error image" />
      <p className="mb-4 text-xl">You can try again</p>
      <button
        onClick={reset}
        className=" p-2 rounded-xl bg-gradient-to-r from-lime-600 to-lime-300 font-semibold"
      >
        Try again{' '}
      </button>
    </main>
  )
}
