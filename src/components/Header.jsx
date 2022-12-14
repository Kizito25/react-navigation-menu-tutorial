import { useState } from 'react'
import { BurgerSwipe } from "react-icons-animated";
import { motion } from "framer-motion";
import {
    UilGoogle,
    UilFacebookF,
    UilTwitterAlt,
    UilPolygon,
    UilLinkedinAlt,
    UilSuitcase,
    UilEstate,
    UilUsersAlt,
    UilPuzzlePiece
} from '@iconscout/react-unicons'

/* Navigation List that we are going to iterate through */
const navs = [
    { id: 1, title: 'Home', link: './', icon: UilEstate },
    { id: 2, title: 'Services', link: './services', icon: UilPuzzlePiece },
    { id: 3, title: 'Sponors', link: './sponsors', icon: UilUsersAlt },

]
const Header = () => {

    const [isClosed, setIsClosed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [isHidden, setIsHidden] = useState(true)

    /* Mobile navigation Style */
    const isHiddenStyle = 'hidden';
    const isVisibleStyle = 'absolute space-y-10 bg-white w-full p-6 left-0  right-0 top-0 min-h-screen text-black';

    /* Framer Motion animation properties for the children of the parent motion container */ 
    
    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 500, damping: 24 }
        },
        closed: { opacity: 0, y: -120, transition: { duration: 0.2 } }
    };
    return (
        <div className="w-full flex justify-between items-center p-6 font-poppins cursor-pointer header-desktop">
            
            {/* Desktop Logo */}
            <div className='bg-black text-white h-24 w-24 flex justify-center items-center'>
                <h1 className='text-3xl font-bold font-poppins'>Logo</h1>
            </div>

            {/* Responsive Menu */}
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className='flex flex-col w-full reative'>
                    
                    {/* React Icons Animated Container */}
                <motion.button
                    initial={{ opacity: 0.6 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                    onClick={() => { setIsClosed(!isClosed); setIsOpen(!isOpen); setIsHidden(!isHidden) }}
                    className={isHidden ? "z-50 absolute top-5 right-5 grid w-[50px] h-[50px] place-items-center bg-slate-900 rounded-full" : "z-50 absolute top-5 right-5 grid w-[50px] h-[50px] place-items-center bg-emerald-500 rounded-full"}
                >
                    <BurgerSwipe isClosed={isClosed} />
                </motion.button>

                <motion.ul
                /* Here is our animation property for the Framer Motion Navigation Menu Container */
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 0px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.3,
                                staggerChildren: 0.05
                            }
                        },
                        closed: {
                            clipPath: "inset(10% 50% 90% 50% round 0px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3,
                            }
                        }
                    }}
                    layout
                    className={isHidden ? isHiddenStyle : isVisibleStyle}>
                    <div className='flex-col gap-5 font-bold bg-black text-white h-24 w-24 flex justify-center items-center'>
                        <h1 className='text-3xl font-bold font-poppins '>Logo</h1>
                    </div>
                    <div className='flex flex-col gap-5 justify-center font-bold text-3xl lg:text-5xl'>
                        {
                            navs.map((nav, index) => (
                                <div key={index + 1}>
                                    <motion.li variants={itemVariants} className="font-normal font-poppins">
                                        <a href={nav.link} className="flex gap-5 lg:gap-10 items-center hover:text-slate-500">
                                            <nav.icon className="h-8 w-8 md:h-10 md:-w-10 lg:h-12 lg:w-12" /> {nav.title}
                                        </a>
                                    </motion.li>
                                    <motion.li variants={itemVariants} className='h-[0.5px] bg-black w-full my-5'></motion.li>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        {/* Social Links  */}
                        <motion.div variants={itemVariants} className='flex flex-wrap gap-4 font-normal'>
                            <span className='bg-slate-300 hover:bg-slate-400 shadow-md py-3 px-5 rounded-full flex items-center gap-2'>
                                <UilLinkedinAlt className='w-6 h-6' /> LinkedIn
                            </span>
                            <span className='bg-slate-300 hover:bg-slate-400 shadow-md py-3 px-5 rounded-full flex items-center gap-2'>
                                <UilTwitterAlt className='w-6 h-6' /> Twitter
                            </span>
                            <span className='bg-slate-300 hover:bg-slate-400 shadow-md py-3 px-5 rounded-full flex items-center gap-2'>
                                <UilGoogle className='w-6 h-6' /> Google
                            </span>
                            <span className='bg-slate-300 hover:bg-slate-400 shadow-md py-3 px-5 rounded-full flex items-center gap-2'>
                                <UilPolygon className='w-6 h-6' /> Polywork
                            </span>
                            <span className='bg-slate-300 hover:bg-slate-400  shadow-md py-3 px-5 rounded-full flex items-center gap-2'>
                                <UilFacebookF className='w-6 h-6' /> Facbook
                            </span>
                            <span className='bg-slate-300 hover:bg-slate-400 shadow-md py-3 px-5 rounded-full flex items-center gap-2'>
                                <UilSuitcase className='w-6 h-6' /> Careers
                            </span>
                        </motion.div>
                    </div>
                </motion.ul>
            </motion.div>
        </div >

    )
}

export default Header
