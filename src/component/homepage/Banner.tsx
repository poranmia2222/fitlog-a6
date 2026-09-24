import Image from 'next/image';
import React from 'react';
import bannerImage from "@/assets/banner.png"

const Banner = () => {
    return (
        <section className='my-12'>
            <div className='container mx-auto bg-secondary p-14 rounded-3xl border-2 border-[#1C1F26]'>
                <div className='mx-auto grid grid-cols-2 justify-between items-center gap-8'>
                    <div className='space-y-6'>
                        <p className='text-primary font-medium'>WORKOUT LIBRARY</p>
                        <h1 className='text-6xl font-bold'>TRAIN WITH INTENT. LOG EVERY SET.</h1>
                        <p className='text-secondary'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br/> into today's plan, and watch the week's work add up.</p>
                        <button className='btn btn-primary font-bold'>BROWSE WORKOUTS</button>
                    </div>
                    <div className='flex justify-end'>
                        <Image src={bannerImage} alt='wourkout image' width={400}></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;