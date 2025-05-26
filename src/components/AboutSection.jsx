import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='contianer mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6 '>
            <h3 className='text-2xl font-semibold'>Passionate Web Developer</h3>
            <p className='text-muted-foreground '>
              With over 2 years of hands-on experience in web development,
              I specialize in building responsive, accessible, and high-performance web applications 
              using modern technologies.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>Get In Touch</a>
              <a href="/Rahul P R Resume.pdf" className='px-6 py-2 rounded-full border text-primary hover:bg-primary/10 transition-colors duration-300'>Download CV</a>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-center gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='w-4 h-4 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Web Development</h4>
                  <p className='text-muted-foreground'>
                    Creating responsive websites and web applications With modern frameworks and libraries
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-center gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='w-4 h-4 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>UI Design</h4>
                  <p className='text-muted-foreground'>
                    Designing intuitive user interfaces and seamless user experience.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='w-6 h-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Project Management</h4>
                  <p className='text-muted-foreground'>
                    Leading Projects from conception to completion with agile methodologies.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
