import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import MyImg from '../assets/1719050784843.jpg'

export default function Header() {
    const [toggleMenu, setToggleMenu]  = useState(false);

    return <header className="flex justify-between px-5 py-2 bg-primary ">
     
        <img className="w-9 h-10 rounded-full" src={MyImg} />
           <a className="text-4xl font-bold text-black" href="#">DEVELOPER</a>
        <nav className="hidden md:block">
            <ul className=" text-2xl flex text-white ">
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/#resume">Resume</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white  mobile-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
}