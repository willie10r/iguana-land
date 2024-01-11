import React from 'react'
import Image from 'next/image'
import treeIggy from '../../../../public/images/red_on_tree.webp'
export default function Contact() {
    return (
        <div className='relative max-xl:top-28 top-0'>
            <h1 className='text-center pt-24 mb-20 font-semibold text-5xl'>
                To leave feedback on the site and check out more project&apos;s click below.
            </h1>
            <Image
                className=' mx-auto'
                alt='iguana'
                src={treeIggy}
            />
            <p className='text-center pt-24 mb-20 font-semibold text-3xl'>
                please look around if you enjoyed the site. You can give me any feed back on thing&apos;s you think might better
                the experience or error&apos;s they you see on any of my social link&apos;s at the bottom off the page.
            </p>
            <div className='text-center mb-20 text-lg '>
                <h3 className=' font-bold text-4xl'>please use my social links for feed back!</h3>

                <p className='text-3xl '>willie.morris2010@gmail.com</p>
            </div>

        </div>
    )
}
