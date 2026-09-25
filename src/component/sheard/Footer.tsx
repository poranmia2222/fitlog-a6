import Image from 'next/image';
import Link from 'next/link';
import logoIcon from '../../assets/logo.png'
import React from 'react';

const Footer = () => {
    return (
        <footer className='mt-10 border-t-2 border-[#1C1F26]'>
            <div className='container mx-auto py-6 flex justify-between'>
                <div>
                    <Link href='/'><div className='flex gap-2 items-center'>
                        <Image src={logoIcon} alt='Logo icon'></Image> <p className='font-bold text-xl'>FITLOG</p>
                    </div></Link>
                </div>
                <div>
                    <p className='text-secondary'>&copy; 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;