'use client'
import Image from 'next/image';
import React, { useContext } from 'react';
import logoIcon from '../../assets/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExercisesContext } from '@/context/ExercisesContext';
import { IoMenu } from 'react-icons/io5';

const Navber = () => {

    const { todaysPlan, savePlan } = useContext(ExercisesContext)


    const pathName = usePathname()
    // console.log(pathName)

    const links = <>
        <li className={`text-lg ${pathName === '/' ? 'text-primary bg-[#C2F80030] rounded-full' : 'text-secondary'}`}><Link href='/' >Workouts</Link></li>
        <li className={`text-lg ${pathName === '/myplan' ? 'text-primary bg-[#C2F80030] rounded-full' : 'text-secondary'}`}><Link href='/myplan' >My Plan</Link></li>
    </>

    const badges = <>
        <Link
            href="/myplan"
            className="group flex items-center gap-2 text-sm md:text-lg font-medium text-secondary"><span>Plan</span><span className="flex min-w-4 md:min-w-8 h-4 md:h-8 items-center justify-center rounded-full bg-primary md:px-2 font-bold text-black">{todaysPlan.length}</span>
        </Link>
        <Link
            href="/myplan"
            className="group flex items-center gap-2 text-sm md:text-lg font-medium text-secondary"><span>Saved</span><span className="flex min-w-4 md:min-w-8 h-4 md:h-8 items-center justify-center rounded-full border border-[#2D313B] md:px-2 font-bold">{savePlan.length}</span>
        </Link>
    </>

    return (
        <nav className='border-b-2 border-[#1C1F26] p-2'>
            <div className='container mx-auto navbar'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <IoMenu className='text-3xl ms:text-2xl text-primary' />
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-secondary rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link href='/'><div className='flex gap-2 items-center'>
                        <Image src={logoIcon} alt='Logo icon'></Image> <p className='font-bold md:text-xl'>FITLOG</p>
                    </div></Link>
                </div>

                <div>
                    
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