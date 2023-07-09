import React from 'react'
import Image from 'next/image'
import bathIggy from '../../../../public/images/bathiggy.webp'

export default function PetCare() {
    return (
        <>
            <section>
                <Image
                    className='mx-auto rounded-full'
                    src={bathIggy}
                    alt='iggy in the bath'
                />
                <h1 className='text-center font-bold text-6xl mb-24'>Pet Care</h1>
                <ul className='text-center'>
                    <li className=' bg-green-500 rounded-3xl mx-40 my-10'>
                        <h3 className=' font-semibold text-3xl mb-10 pt-6'>Temperature and Humidity</h3>
                        <p className=' mx-28 pb-10 text-2xl'>
                            Iguanas are cold blooded reptials meaning that they rely on their environment to regulate their
                            temperature. Iguanas require a high ambient temperature in their enclosure&apos;s basking spot 95°F to
                            100°F, the rest of the cage 75°F to 85°F. Iguanas also need high humidity in their cage, which
                            should be kept at around 70% to 75% this will help to prevent poor shedding and kidney disease. You can
                            increase the humidity in the cage by useing humidifier&apos;s or providing your iguana with a large pool of water,
                            or by purchasing a mister. You should mist your iguana at least twice a
                            day to increase the humidity and to promote skin health.
                        </p>
                    </li>
                    <li className=' bg-green-500 rounded-3xl mx-40 my-10'>
                        <h3 className=' font-semibold text-3xl mb-10 pt-6'>lighting</h3>
                        <p className=' mx-28 pb-10 text-2xl'>
                            We recommend that your iguana be kept on a 12-hour
                            light/dark cycle so that it receives ultraviolet UVB bulb&apos;s at least 12 hours a day. UVB light should not be
                            farther than 12 inches away from the iguana depending on the light and fixture you get.
                            Red or colored light&apos;s for the night time are not a good idea studies have found they can still see the lights and it might disrupt their sleep cycle.
                            You should use a ceramic heat emitter they produce no visable light and give off good heat for the night time.
                        </p>
                    </li>
                    <li className=' bg-green-500 rounded-3xl mx-40 my-10'>
                        <h3 className=' font-semibold text-3xl mb-10 pt-6'>food and diet</h3>
                        <p className=' mx-28 pb-10 text-2xl'>
                            Iguanas are herbivores that should be provided daily with a variety of leafy green vegetables high in
                            calcium, such as kale, turnip greens, collards, chard, dandelions, parsley, and spinach, as well as a
                            very small amount of fruits such as bananas, melons, apples, and strawberries. We would not
                            recommend feeding your iguana bread, pancakes, or eggs, because iguanas are herbivores and have
                            no need for processed foods. Some iguanas can become very picky eaters if they are introduced to
                            human processed foods, so it is best to provide your iggie with a balanced diet of fresh veggies and
                            fruits and to avoid letting it get addicted to the sweet stuff, because this could lead to nutritional
                            and metabolic diseases down the road. To avoid feeding your iguana a diet that is deficient in
                            calcium, you can obtain a calcium carbonate supplement that you can put into its food to ensure
                            that your iguana gets the calcium it needs. We recommend the vitamin/mineral supplement from
                            ZooMed called Reptivite. ZooMed also produces some UVB lights.
                        </p>
                    </li>
                    <li className=' bg-green-500 rounded-3xl mx-40 my-10'>
                        <h3 className=' font-semibold text-3xl mb-10 pt-6'>Common Medical Conditions</h3>
                        <p className=' mx-28 pb-10 text-2xl'>
                            Kidney disease. Many iguanas develop and die from kidney disease as they get older. The
                            best ways to keep your iguana&apos;s kidneys healthy is to provide your pet with proper humidity,
                            plenty of access to fresh water (Iguanas are avid swimmers in the wild; providing your
                            iguana with an area in which to swim is ideal, and at minimum, your iguana should be
                            provided with enough water to soak in.), and proper nutrition. It is also recommended that
                            geriatric iguanas have regularly scheduled veterinarian appointments for blood work to
                            catch kidney disease before it has progressed.
                        </p>
                    </li>
                    <li className=' bg-green-500 rounded-3xl mx-40 my-10'>
                        <h3 className=' font-semibold text-3xl mb-10 pt-6'>Housing</h3>
                        <p className=' mx-28 pb-10 text-2xl'>
                            Iguanas are very sensitive to changes in their environment, so it is important that you provide your
                            iguana with a very controlled stable environment. Most iguanas require large cages that have plenty
                            of room for climbing and exploring.
                        </p>
                    </li>
                </ul>
            </section>

        </>
    )
}
