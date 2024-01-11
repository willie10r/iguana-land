'use client'

import React from 'react'
import Image from 'next/image'
import iggy from '../../../../public/images/iggy-eating.jpg'


//trying to connect to the server
import { useEffect, useState } from 'react';
import supabase from '../../thebase';

export default function MealPlan() {
    let [mainGreenData, setMainGreenData] = useState<{ id: number; name: string; staple: boolean; img_id: string; nutrition: string }[]>([]);
    let [secGreenData, setSecGreenData] = useState<{ id: number; name: string; staple: boolean; img_id: string; nutrition: string }[]>([]);
    let [topperData, setTopperData] = useState<{ id: number; name: string; staple: boolean; img_id: string; nutrition: string }[]>([]);
    let [treatData, setTreatData] = useState<{ id: number; name: string; staple: boolean; img_id: string; nutrition: string }[]>([]);

    let fetchData = async () => {
        try {
            const { data: mainGreenData, error: mainGreenError } = await supabase
                .from('maingreens',)
                .select('*');

            if (mainGreenError) {
                throw mainGreenError;
            }
            const { data: secGreenData, error: secGreenError } = await supabase
                .from('secgreen')
                .select('*');

            if (secGreenError) {
                throw secGreenError;
            }
            const { data: topperData, error: topperError } = await supabase
                .from('toppers')
                .select('*');

            if (topperError) {
                throw topperError;
            }
            const { data: treatData, error: treatError } = await supabase
                .from('treats')
                .select('*');

            if (treatError) {
                throw treatError;
            }

            setMainGreenData(mainGreenData);
            setSecGreenData(secGreenData);
            setTopperData(topperData);
            setTreatData(treatData);
            console.log('load set');
        } catch (error) {
            console.error('Error fetching data:')// , error.message);
        }
    };
    useEffect(() => {


        fetchData();
    }, []);
    // section for the random 4 part menu

    //errorhandling for the returned data
    if (!mainGreenData[0]) {
        console.error('Error: randomFood is undefined');
        // Handle the error or return from the function
        return;
    }
    let [mainGreen] = Array.from({ length: 1 }, () => getRandomMainGreen());
    let [secGreen] = Array.from({ length: 1 }, () => getRandomSecGreen());
    let [topper] = Array.from({ length: 1 }, () => getRandomTopper());
    let [treat] = Array.from({ length: 1 }, () => getRandomTreat());



    function randomGreenNumber(): number {
        return Math.floor(Math.random() * mainGreenData.length);
    };
    function randomSecGreenNumber(): number {
        return Math.floor(Math.random() * secGreenData.length);
    };
    function randomTopperNumber(): number {
        return Math.floor(Math.random() * topperData.length);
    };
    function randomTreatNumber(): number {
        return Math.floor(Math.random() * treatData.length);
    };



    function getRandomMainGreen(): { id: number; name: string; staple: boolean; img_id: string; nutrition: string } {
        return mainGreenData[randomGreenNumber()];
    }
    function getRandomSecGreen(): { id: number; name: string; staple: boolean; img_id: string; nutrition: string } {
        return secGreenData[randomSecGreenNumber()];
    }
    function getRandomTopper(): { id: number; name: string; staple: boolean; img_id: string; nutrition: string } {
        return topperData[randomTopperNumber()];
    }

    function getRandomTreat(): { id: number; name: string; staple: boolean; img_id: string; nutrition: string } {
        return treatData[randomTreatNumber()];
    }

    //This section will be the resuffle part
    function reshuffle() {
        fetchData();

        console.log('resuffle set');
    }

    return (
        <div className='relative max-xl:top-44 top-0'>
            <Image
                className='mx-auto mb-24'
                src={iggy}
                alt='iguana eating'
            />
            <h1 className='text-center px-3 mb-14 font-extrabold text-7xl'>
                Meal Plan&apos;s
            </h1>
            <p className='text-center px-4 mb-32 text-2xl'>
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
                    <ul className=' flex flex-col xl:grid xl:grid-cols-2 xl:gap-6 mb-12'>
                        <li className=' mb-5 bg-green-500 w-64 h-96 rounded-3xl mx-auto'>
                            <h2 className=' mb-5 font-semibold text-3xl'>Main green</h2>
                            <Image className='  mx-auto  my-6 rounded-md'
                                src={`${mainGreen.img_id}`}
                                alt="pic of food"
                                width={100}
                                height={50}
                            />
                            <h3 className=' mb-5 font-semibold text-2xl'>{`${mainGreen.name}`}</h3>
                            <p className=' mb-2 font-semibold text-lg'>Is this food a staple? </p>
                            <p className=' mb-5 font-semibold text-lg'> {`${mainGreen.staple}`}</p>
                            <p>{`${mainGreen.nutrition}`}</p>
                        </li>
                        <li className='mb-5 bg-green-500 w-64 h-96 rounded-3xl mx-auto'>
                            <h2 className=' mb-5 font-semibold text-3xl'>Secondary green</h2>
                            <Image className='mx-auto my-6 rounded-md'
                                src={`${secGreen.img_id}`}
                                alt="pic of food"
                                width={100}
                                height={50}
                            />
                            <h3 className=' mb-5 font-semibold text-2xl'>{`${secGreen.name}`}</h3>
                            <p className=' mb-2 font-semibold text-lg'>staple or not staple</p>
                            <p className=' mb-5 font-semibold text-lg'> {`${secGreen.staple}`}</p>
                            <p>{`${secGreen.nutrition}`}</p>
                        </li>
                        <li className='mb-5 bg-green-500 w-64 h-96 rounded-3xl mx-auto'>
                            <h2 className=' mb-5 font-semibold text-3xl'>Topper</h2>
                            <Image className='mx-auto my-6 rounded-md'
                                src={`${topper.img_id}`}
                                alt="pic of food"
                                width={100}
                                height={50}
                            />
                            <h3 className=' mb-5 font-semibold text-2xl'>{`${topper.name}`}</h3>
                            <p className=' mb-2 font-semibold text-lg'>staple or not staple</p>
                            <p className=' mb-5 font-semibold text-lg'> {`${topper.staple}`}</p>
                            <p>{`${topper.nutrition}`}</p>
                        </li>
                        <li className='mb-5 bg-green-500 w-64 h-96 rounded-3xl mx-auto'>
                            <h2 className=' mb-5 font-semibold text-3xl'>Treat</h2>
                            <Image className='mx-auto my-6 rounded-md'
                                src={`${treat.img_id}`}
                                alt="pic of food"
                                width={100}
                                height={50}
                            />
                            <h3 className=' mb-5 font-semibold text-2xl'>{`${treat.name}`}</h3>
                            <p className=' mb-2 font-semibold text-lg'>staple or not staple</p>
                            <p className=' mb-5 font-semibold text-lg'> {`${treat.staple}`}</p>
                            <p>{`${treat.nutrition}`}</p>
                        </li>
                    </ul>
                    <p className='text-center px-4 mb-12 text-2xl'>If you don&apos;t like what you see or the items are not in your location here&apos;s a resuffle button.</p>
                    <button onClick={reshuffle} className='text-center w-40 bg-green-500 inline-block border rounded-lg py-2 px-4 text-black hover:text-white font-semibold mb-60'>resuffle</button>
                </div>
            </section >
        </div>
    )
}
