import Image from 'next/image'

export const Description: React.FC = () => {
  return (
    <section className="m-24 grid grid-cols-2 gap-4">
      <figure className="relative w-[32rem] h-72 rounded-xl">
        <Image
          src={'/assets/green-spark.jpg'}
          alt="Green stars going to join a green spark in the middle of the image"
          fill
          className="rounded-xl"
        />
      </figure>
      <div>
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, illum. Earum
          dignissimos aut libero dolorum.
        </p>
      </div>
    </section>
  )
}
