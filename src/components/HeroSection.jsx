import { ArrowDown } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
        <div className='container max-w-4xl mx-auto text-center z-10'>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                    <span className='opactiy-0 animate-fade-in'>Hi, I'm</span>
                    <span className='text-primary opacity-0 animate-fade-in-delay-1'> Rahul </span>
                    <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'> Ramachandran</span>
                </h1>
                <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                    Hey there! I'm a UI and React Developer who loves turning bold ideas into sleek, responsive web experiences. 
                    I specialize in building fast, accessible, and pixel-perfect interfaces using React.js, JavaScript,jQuery, HTML, Bootstrap and CSS. 
                    With a sharp eye for design and a passion for clean code, I bring interfaces to life that not only 
                    look great but feel amazing to use. This portfolio is where creativity meets code — a glimpse into the work I love to do.
                </p>
                <div className='opacity-0 animate-fade-in-delay-3 pt-4'>
                    <a href="#projects" className='cosmic-button'>
                        View My Works
                    </a>
                </div>
            </div>
        </div>
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
            <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
            <ArrowDown className='h-5 w-5 text-primary' />
        </div>
    </section>
  )
}

export default HeroSection
