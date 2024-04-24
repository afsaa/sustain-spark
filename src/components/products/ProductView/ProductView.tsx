import Image from 'next/image'

export const ProductView = ({ title, description, price, image }: Product) => {
  return (
    <section className="w-full h-auto mt-20 flex items-start justify-around">
      <Image
        className="flex rounded-xl"
        src={image}
        alt={title}
        width={500}
        height={500}
        quality={80}
      />
      <div className="flex flex-col items-start justify-evenly">
        <h1 className="text-3xl">{title}</h1>
        <p className="mt-4 text-xl">{description}</p>
        <p className="mt-2 font-semibold text-2xl">$ {price}</p>
      </div>
    </section>
  )
}
