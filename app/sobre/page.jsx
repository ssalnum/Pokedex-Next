import Image from 'next/image'
import React from 'react'

const SobrePage = () => {
  return (
    <main className='text-center h-full flex-1'>
      <h1 className='text-4xl mb-4 '>Sobre o projeto</h1>
      <p className='max-w-lg mx-auto mb-6 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at provident quam cupiditate amet voluptatem, commodi, dignissimos porro asperiores ad explicabo voluptatum eveniet ipsum nemo saepe voluptate sequi. Expedita, sunt.</p>
      <Image src="/images/rayquaza.png" width="500" height="500" alt='Rayquaza' className='mx-auto'/>
    </main>
  )
}

export default SobrePage