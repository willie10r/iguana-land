

import Image from 'next/image'
import Link from 'next/link'


//imported image's
import iggy from '../../../public/images/iggy.jpg'
import redIggy from '../../../public/images/red-iggy.webp'
import iconIggy from '../../../public/images/icon-iguana.png'
import health from '../../../public/images/health-care.png'
import grooming from '../../../public/images/grooming.png'
import care from '../../../public/images/care.png'
import training from '../../../public/images/training.png'
export default function Home() {




  return (
    <div className='relative max-xl:top-44 top-0'>
      <section className='flex flex-col xl:flex-row mb-48'>
        <div className='text-center xl:mx-40'>
          <h1 className=' px-3 xl:font-bold text-3xl mb-10'>Taking care of your lizard!</h1>
          <p className=' mb-10 px-3 text-2xl'>
            Human-lizard bonding is the relationship between lizards and humans. That take time to develop into somthing special.
            One of the best place&apos;s to start is making sure that all of the husbandry is on point.
            Iguana&apos;s love food so finding out what work&apos;s best for yours will make the taming process that much easy.
            Getting the temps and humidity correct will help also. The more at home they feel the sooner they will settle in.</p>
          <Link href='/mealPlan' className='text-center w-40 bg-green-500 inline-block border rounded-lg py-2 px-4 text-black hover:text-white font-semibold'>EXPLORE MORE</Link>
        </div>
        <Image
          className=' mx-auto'
          alt='iguana'
          src={iggy}
        />
      </section>
      <section className='flex justify-center my-20  mb-48'>
        <div>
          <h2 className='xl:font-bold text-3xl mb-10'>Services Category </h2>
          <p>This section is under construction! </p>
          <ul className='flex flex-col xl:flex-row'>
            <li className='w-40 mx-auto mb-5  bg-green-500 inline-block border rounded-lg py-2 px-4 text-black hover:text-white font-semibold xl:mr-10 h-52'>
              <Image src={grooming} alt="" />
              <p>Grooming</p>
            </li>
            <li className='w-40 mx-auto mb-5 bg-green-500 inline-block border rounded-lg py-2 px-4 text-black hover:text-white font-semibold xl:mr-10 h-52'>
              <Image src={health} alt="" />
              <p>Healthcare</p>
            </li>
            <li className='w-40 mx-auto mb-5 bg-green-500 inline-block border rounded-lg py-2 px-4 text-black hover:text-white font-semibold xl:mr-10 h-52'>
              <Image
                alt='iggy'
                src={iconIggy}
              />
              <p>Training</p>
            </li>
            <li className='w-40 mx-auto mb-5 bg-green-500 inline-block border rounded-lg py-2 px-4 text-black hover:text-white font-semibold xl:mr-10 h-52'>
              <Image src={care} alt="" />
              <p>Hyginic care</p>
            </li>
          </ul>
        </div>
      </section>
      <section className='flex flex-col xl:flex-row'>
        <Image
          alt='red iguana'
          src={redIggy}
        />
        <div className='text-center xl:mx-40 mt-28'>
          <h2 className=' px-3 xl:font-bold text-3xl mb-10'>Lizards do speak, but only to those who know how to listen.</h2>
          <p className=' px-3 mb-10 text-2xl'>
            Pet iguanas aren&apos;t easy animals to care for. Despite their friendly look&apos;s,
            dragon-like appearance during their youth. Iguanas can grow up to be about 6feet long and weigh over 15 pounds. Plus,
            they are challenging pets to keep — especially if you aren&apos;t an experienced reptile keeper.
          </p>
          <Link href='/petCare' className='mb-10 text-center w-40 bg-green-500 inline-block border rounded-lg py-2 px-4 text-black hover:text-white font-semibold'>Explore More</Link>
        </div>
      </section>

    </div>
  )
}
