import Image from 'next/image'

export const Description: React.FC = () => {
  return (
    <section className="m-24 grid grid-cols-2 gap-4">
      <figure className="relative w-[32rem] h-72 rounded-xl">
        <Image
          src={'/assets/green-spark-home.jpg'}
          alt="Green stars going to join a green spark in the middle of the image"
          fill
          className="rounded-xl"
        />
      </figure>
      <div>
        <h2 className="mb-2 text-3xl font-semibold">Electrify your home one thing at a time</h2>
        <p className="text-xl">
          Electrify your home with sustainable products and appliances to reduce your carbon
          footprint and save on energy costs. Our selection of energy-efficient options, from solar
          panels to smart thermostats, can help you make the switch to a more eco-friendly lifestyle
          while enjoying long-term savings. Shop with us today and make a positive impact on the
          environment and your wallet!
        </p>
      </div>
    </section>
  )
}
