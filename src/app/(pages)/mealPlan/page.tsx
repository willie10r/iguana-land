import React from 'react'
import Image from 'next/image'
import iggy from '../../../../public/images/iggy-eating.jpg'

export default function MealPlan() {
    return (
        <>
            <Image
                className='mx-auto mb-32'
                src={iggy}
                alt='iguana eating'
            />
            <h1 className='text-center mb-14 font-extrabold text-7xl'>
                Meal Plan&apos;s
            </h1>
            <p className='text-center mb-48 text-2xl'>
                Here you&apos;ll get a weekly meal plan for your lizard,
                so you don&apos;t have to feed the same thing over and over each week.
            </p>
            {/* 
            The following section is where the infomation will be fetched and served into the li elements.
             We will need to fetch a img, food name, a boolean if its a staple or not, and the food info.
            */}
            <section>
                <h2 className='text-center mb-32 font-bold text-3xl'>Weekly Meal</h2>
                <div className='text-center'>
                    <ul className='grid grid-cols-2 gap-6 mb-24'>
                        <li className='bg-green-500 w-60 h-72 rounded-3xl mx-auto'>
                            <Image className=' mb-6'
                                src=""
                                alt="pic of food"
                            />
                            <h3 className=' mb-5 font-semibold text-2xl'>food name</h3>
                            <p className=' mb-5 font-semibold text-lg'>staple or not staple</p>
                            <p>info on food</p>
                        </li>
                        <li className='bg-green-500 w-60 h-72 rounded-3xl mx-auto'>
                            <Image className=' mb-6'
                                src=""
                                alt="pic of food"
                            />
                            <h3 className=' mb-5 font-semibold text-2xl'>food name</h3>
                            <p className=' mb-5 font-semibold text-lg'>staple or not staple</p>
                            <p>info on food</p>
                        </li>
                        <li className='bg-green-500 w-60 h-72 rounded-3xl mx-auto'>
                            <Image className=' mb-6'
                                src=""
                                alt="pic of food"
                            />
                            <h3 className=' mb-5 font-semibold text-2xl'>food name</h3>
                            <p className=' mb-5 font-semibold text-lg'>staple or not staple</p>
                            <p>info on food</p>
                        </li>
                        <li className='bg-green-500 w-60 h-72 rounded-3xl mx-auto'>
                            <Image className=' mb-6'
                                src=""
                                alt="pic of food"
                            />
                            <h3 className=' mb-5 font-semibold text-2xl'>food name</h3>
                            <p className=' mb-5 font-semibold text-lg'>staple or not staple</p>
                            <p>info on food</p>
                        </li>
                    </ul>
                    <p className='text-center mb-12 text-2xl'>If you don&apos;t like what you see or the items are not in your location here&apos;s a resuffle button.</p>
                    <button className='text-center w-40 bg-green-500 inline-block border rounded-lg py-2 px-4 text-black hover:text-white font-semibold mb-60'>resuffle</button>
                </div>
            </section>
        </>
    )
}
