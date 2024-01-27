import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className="flex justify-between items-center py-4 px-5 mb-8 bg-gray-700 text-white">
                <div className='flex justify-center items-center'>
                    <Link href="/" className='flex justify-center items-center'>
                        <Image src="/images/Pokeball_Logo.png" width="30" height="30" alt="Pokémon Logo" />
                        <h1 className='ml-2'>
                            PokeNext
                        </h1>
                    </Link>
                </div>
                <ul className='flex list-none gap-5'>
                    <li>
                        <Link href="/" className='text-white text no-underline p-1 transition duration-400 border-b-2 border-solid border-transparent hover:border-white'>Home</Link>
                    </li>
                    <li>
                        <Link href="/sobre" className='text-white text no-underline p-1 transition duration-400 border-b-2 border-solid border-transparent hover:border-white'>Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header