import Image from 'next/image'
import Link from 'next/link'

export const ProductCard = ({ id, title, price, image }: Product) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="w-full h-min flex flex-col items-center justify-start bg-gray-200 rounded-xl shadow-lg">
        <figure className="relative w-full h-96">
          <Image className="rounded-t-xl" src={image} alt={title} fill quality={80} />
        </figure>

        <div className="flex flex-col items-center justify-center w-full h-auto p-4">
          <h1 className="text-2xl font-semibold text-black">{title}</h1>
          <p className="mt-2 font-semibold text-2xl text-black">$ {price}</p>
        </div>
      </div>
    </Link>
  )
}
