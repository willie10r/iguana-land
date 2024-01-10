'use client'

import React from 'react'
import Image from 'next/image'
import iggy from '../../../../public/images/iggy-eating.jpg'


//trying to connect to the server
import { useEffect, useState } from 'react';
import supabase from '../../thebase';

export default function MealPlan() {
    let [foodData, setFoodData] = useState<{ id: number; name: string; staple: boolean; img_id: string; nutrition: string }[]>([]);
    let [treatData, setTreatData] = useState<{ id: number; name: string; staple: boolean; img_id: string }[]>([]);

    let fetchData = async () => {
        try {
            const { data: foodData, error: foodError } = await supabase
                .from('food')
                .select('*');

            if (foodError) {
                throw foodError;
            }
            const { data: treatData, error: treatError } = await supabase
                .from('treats')
                .select('*');

            if (treatError) {
                throw treatError;
            }

            setFoodData(foodData);
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
    if (!foodData[0]) {
        console.error('Error: randomFood is undefined');
        // Handle the error or return from the function
        return;
    }
    let menu = Array.from({ length: 3 }, () => getRandomFood());
    let treatMenu = Array.from({ length: 1 }, () => getRandomTreat());

    let [foodNameOne, foodNameTwo, foodNameThree] = menu;
    let [treatName] = treatMenu;

    function randomFoodNumber(): number {
        return Math.floor(Math.random() * foodData.length);
    };
    function randomTreatNumber(): number {
        return Math.floor(Math.random() * treatData.length);
    };



    function getRandomFood(): { id: number; name: string; staple: boolean; img_id: string; nutrition: string } {
        return foodData[randomFoodNumber()];
    }

    function getRandomTreat(): { id: number; name: string; staple: boolean; img_id: string } {
        return treatData[randomTreatNumber()];
    }

    //This section will be the resuffle part
    function reshuffle() {
        fetchData();

        console.log('resuffle set');
    }

    return (
        <>
            <Image
                className='mx-auto mb-32 pt-20'
                src={iggy}
                alt='iguana eating'
            />
            <h1 className='text-center px-3 mb-14 font-extrabold text-7xl'>
                Meal Plan&apos;s
            </h1>
            <p className='text-center px-4 mb-48 text-2xl'>
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
                    <ul className=' flex flex-col xl:grid xl:grid-cols-2 xl:gap-6 mb-24'>
                        <li className=' mb-5 bg-green-500 w-64 h-96 rounded-3xl mx-auto'>
                            <Image className='  mx-auto  my-6 rounded-md'
                                src={`${foodNameOne.img_id}`}
                                alt="pic of food"
                                width={100}
                                height={50}
                            />
                            <h3 className=' mb-5 font-semibold text-2xl'>{`${foodNameOne.name}`}</h3>
                            <p className=' mb-2 font-semibold text-lg'>Is this food a staple? </p>
                            <p className=' mb-5 font-semibold text-lg'> {`${foodNameOne.staple}`}</p>
                            <p{`${foodNameOne.nutrition}`}}</p>
                    </li>
                    <li className='mb-5 bg-green-500 w-64 h-96 rounded-3xl mx-auto'>
                        <Image className='mx-auto my-6 rounded-md'
                            src={`${foodNameTwo.img_id}`}
                            alt="pic of food"
                            width={100}
                            height={50}
                        />
                        <h3 className=' mb-5 font-semibold text-2xl'>{`${foodNameTwo.name}`}</h3>
                        <p className=' mb-5 font-semibold text-lg'>staple or not staple</p>
                        <p className=' mb-5 font-semibold text-lg'> {`${foodNameTwo.staple}`}</p>
                        <p>info on food</p>
                    </li>
                    <li className='mb-5 bg-green-500 w-64 h-96 rounded-3xl mx-auto'>
                        <Image className='mx-auto my-6 rounded-md'
                            src={`${foodNameThree.img_id}`}
                            alt="pic of food"
                            width={100}
                            height={50}
                        />
                        <h3 className=' mb-5 font-semibold text-2xl'>{`${foodNameThree.name}`}</h3>
                        <p className=' mb-5 font-semibold text-lg'>staple or not staple</p>
                        <p className=' mb-5 font-semibold text-lg'> {`${foodNameThree.staple}`}</p>
                        <p>info on food</p>
                    </li>
                    <li className='mb-5 bg-green-500 w-64 h-96 rounded-3xl mx-auto'>
                        <Image className='mx-auto my-6 rounded-md'
                            src={`${treatName.img_id}`}
                            alt="pic of food"
                            width={100}
                            height={50}
                        />
                        <h3 className=' mb-5 font-semibold text-2xl'>{`${treatName.name}`}</h3>
                        <p className=' mb-5 font-semibold text-lg'>staple or not staple</p>
                        <p className=' mb-5 font-semibold text-lg'> {`${treatName.staple}`}</p>
                        <p>info on food</p>
                    </li>
                </ul>
                <p className='text-center px-4 mb-12 text-2xl'>If you don&apos;t like what you see or the items are not in your location here&apos;s a resuffle button.</p>
                <button onClick={reshuffle} className='text-center w-40 bg-green-500 inline-block border rounded-lg py-2 px-4 text-black hover:text-white font-semibold mb-60'>resuffle</button>
            </div>
        </section >
        </>
    )
}
