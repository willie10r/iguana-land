import React from 'react'
import Link from 'next/link'
import { Linden_Hill } from 'next/font/google'
import Image from 'next/image'
import lizPic from '../../../public/images/download.png'

export default function Nav() {
    return (
        <div className=' flex flex-col justify-between items-center mx-auto h-36 mb-48 xl:flex-row xl:mx-0'>
            <Image className=' rounded-3xl  xl:m-2 xl:max-w-sm xl:max-h-20 xl:px-12'
                alt='lizard picture'
                src={lizPic}
            />
            <ul className='flex items-center flex-col xl:flex-row xl:mr-40'>
                <li className=" mb-3 xl:-mb-px xl:mr-20">
                    <Link className=' bg-green-500 inline-block border rounded-lg py-2 px-4 text-black hover:text-white font-semibold xl:text-center xl:w-40' href='/'>Home</Link>
                </li>
                <li className=" mb-3 xl:mr-20">
                    <Link className=' bg-green-500 inline-block border rounded-lg py-2 px-4 text-black hover:text-white font-semibold xl:text-center xl:w-40' href='/mealPlan'>Meal Plan</Link>
                </li>
                <li className=" mb-3 xl:mr-20">
                    <Link className=' bg-green-500 inline-block border rounded-lg py-2 px-4 text-black hover:text-white font-semibold xl:text-center xl:w-40' href='/petCare'>Pet Care</Link>
                </li>
                <li className=" mb-3 xl:mr-20">
                    <Link className=' bg-green-500 inline-block border rounded-lg py-2 px-4 text-black hover:text-white font-semibold xl:text-center xl:w-40' href='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    )
}
