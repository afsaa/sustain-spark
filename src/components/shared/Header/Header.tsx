import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-green-500 text-white">
      <h1>Sustain Spark</h1>
      <nav>
        <ul className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </ul>
      </nav>
    </header>
  )
}
