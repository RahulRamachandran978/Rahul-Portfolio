import React, { useState } from 'react'
import { cn } from '../lib/utils';


const skills = [
    {name:"HTML",level:95,category:"frontend"},
    {name:"CSS",level:90,category:"frontend"},
    {name:"Bootstrap",level:90,category:"frontend"},
    {name:"Javascript",level:80,category:"frontend"},
    {name:"JQuery",level:70,category:"frontend"},
    {name:"React",level:70,category:"frontend"},
    {name:"Tailwind CSS",level:70,category:"frontend"},

    //Backend
    {name:"Node.js",level:50,category:"backend"},
    {name:"Express.js",level:50,category:"backend"},
    {name:"MongoDB",level:50,category:"backend"},
    {name:"Firebase",level:50,category:"backend"},

    //Tools
    {name:"Figma",level:70,category:"tools"},
    {name:"Git/GitHub",level:60,category:"tools"},
    // {name:"VS Code",level:90,category:"tools"},
    {name:"Visual studio",level:90,category:"tools"},
]

const categories =["all","frontend","backend","tools"]

const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");
    const [showAll ,setShowAll] = useState(false);
    const filteredSkills = skills.filter((skill)=>activeCategory === "all" || skill.category === activeCategory );
    const skillsToDisplay = showAll ? filteredSkills : filteredSkills.slice(0,4);
  return (
    <section id='skills' className='relative py-24 px-4 bg-secondary/30'>
        <div className='contianer mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                My <span className='text-primary'>Skills</span>
            </h2>
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {categories.map((category,key)=>(
                    <button onClick={()=>{setActiveCategory(category);
                        setShowAll(false);
                    }} 
                     key={key}
                     className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                     )}>
                        {category}
                    </button>
                ))}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {skillsToDisplay.map((skill,key)=>(
                    <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                        <div className='text-left mb-4'>
                            <h3 className='font-semibold text-lg'>{skill.name}</h3>
                        </div>
                        <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                            <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'
                                style={{width: skill.level + "%"}}
                            />
                        </div>
                        <div className='text-right mt-1'>
                            <span className='text-sm text-muted-forground'>{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
            {filteredSkills.length > 6 && (
          <div className='mt-8 text-center'>
            <button
              onClick={() => setShowAll(!showAll)}
              className='px-6 py-2 rounded-full bg-primary text-primary-foreground hover:scale-105 transition-transform'
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
        </div>
    </section>
  )
}

export default SkillsSection
