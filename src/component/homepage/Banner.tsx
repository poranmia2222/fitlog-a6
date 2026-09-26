import Image from 'next/image';
import React from 'react';
import bannerImage from "@/assets/banner.png"
import { Oswald } from 'next/font/google'

const oswald = Oswald({
  subsets: ['latin'],
})

const Banner = () => {
    return (
        <section className=' my-4 md:my-12 p-2'>
            <div className='container mx-auto bg-secondary p-4 md:p-14 rounded-3xl border-2 border-[#1C1F26]'>
                <div className='mx-auto grid md:grid-cols-2 justify-between items-center gap-8'>
                    <div className='space-y-2 md:space-y-6 text-center md:text-left'>
                        <p className='text-primary font-medium'>WORKOUT LIBRARY</p>
                        <h1 className={`${oswald.className} text-2xl md:text-4xl lg:text-6xl font-bold`}>TRAIN WITH INTENT. LOG EVERY SET.</h1>
                        <p className='text-secondary'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br/> into today's plan, and watch the week's work add up.</p>
                        <a href='#library' className='btn btn-primary font-bold'>BROWSE WORKOUTS</a>
                    </div>      
                    <div className='flex justify-end'>
                        <Image src={bannerImage} alt='wourkout image' width={400} priority></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;