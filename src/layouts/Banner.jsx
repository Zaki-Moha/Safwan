import React from 'react'
import Container from '../Conponnents/Container'
import Button from '../Conponnents/Button'

const Banner = () => {
  return (
    <section className='group overflow-hidden z-20 relative w-full  bg-banner bg-no-repeat bg-cover bg-center py-[221px]'>
        <div className='group-hover:right-0 -z-10 duration-500 absolute top-0 -right-full w-[845px] h-full bg-banner2  bg-no-repeat bg-cover bg-center py-[221px]'></div>
        <Container>
            <h1 className='text-[100px] text-white font-bold font-Voll'>
            Hello! <span className='block'>I’m Zarror Nibors</span></h1>
            <p className='pt-4 pb-10 text-xl text-[#ffffff80] font-normal font-jost w-[670px] leading-8'>I’am freelance <span className='text-white'>UI/UX Desogner</span> based in Indonesia who loves to craft attractive design experiences for the web.</p> 
            <Button text='Contact Me'/>
        </Container>
    </section>
  )
}

export default Banner