'use client'
import Image from 'next/image';
import React from 'react';
import logoIcon from '../../assets/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navber = () => {

    const pathName = usePathname()
    console.log(pathName)

    const links = <>
        <li className={`text-lg ${pathName === '/workouts'? 'text-primary bg-[#C2F80030] rounded-full' : ''}`}><Link href='/workouts' >Workouts</Link></li>
        <li className={`text-lg ${pathName === '/myplan'? 'text-primary bg-[#C2F80030] rounded-full' : ''}`}><Link href='/myplan' >My Plan</Link></li>
    </>

    const badges = <>
        <Link
            href="/status"
            className="group flex items-center gap-2 text-lg font-medium"><span>Plan</span><span className="flex min-w-8 h-8 items-center justify-center rounded-full bg-primary px-2 text-lg font-bold text-black">0</span>
        </Link>
        <Link
            href="/status"
            className="group flex items-center gap-2 text-lg font-medium"><span>Saved</span><span className="flex min-w-8 h-8 items-center justify-center rounded-full border border-[#2D313B] px-2 text-lg font-bold">0</span>
        </Link>
    </>

    return (
        <nav className='shadow-sm p-2'>
            <div className='container mx-auto navbar'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link href='/'><div className='flex gap-2 items-center'>
                        <Image src={logoIcon} alt='Logo icon'></Image> <p className='font-bold text-xl'>FITLOG</p>
                    </div></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-16">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-4" >
                    {
                        badges
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navber;