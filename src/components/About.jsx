import { ArrowRight } from 'lucide-react'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import about from '../assets/about.jpg'

const About = () => {
   const SocialLinks = [
  {
    icon: FaWhatsapp,
    label: 'Whatsapp',
    href: 'https://wa.me/03012526578/',
    color: 'hover:text-green-500 hover:border-white/40',
  },
  {
    icon: FaFacebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/muhammad.ayyanniazi/',
    color: 'hover:text-blue-600 hover:border-blue-600/40',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/Sami2526',
    color: 'hover:text-gray-900 dark:hover:text-white hover:border-gray-500/40',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/reactbysami/',
    color: 'hover:text-blue-500 hover:border-blue-500/40',
  },
]
  return (
    <section className='min-h-screen flex items-centere py-20 px-4 sm:px-6 overflow-hidden relative' id='about'>
        <div className='max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10'>
            <div className='order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left ' data-aos='fade-right'>
                <div className='inline-flex items-center gap-2  px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/20 mb-4'>
                <span className='w-2 h-2 rounded-full bg-red-500 animate-pulse'></span>
                <span className='text-xs sm:text-sm font-semibold tracking-wider uppercase dark:text-red-300 text-red-600'>About Me</span>

                </div>

               <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 dark:text-white text-gray-900 leading-tight '>
                    Building Modern 
                    <span className='text-red-600 dark:text-red-400 block'>Web Experiences</span>
               </h2>
               <p className='text-base lg:text-lg mb-8 leading-relaxed dark:text-gray-300 text-gray-700 max-w-xl'>For me, web development is more than writing code—it’s about creating useful experiences. I build interactive applications using React.js, Firebase, and REST APIs, focusing on usability, performance, and clean design while exploring new technologies like the MERN stack.</p>
               <div className='flex gap-4 mb-8'>
                  {SocialLinks.map((social,index)=>{
                    const IconComponents=social.icon
                    return(
                        <a 
                        key={index}
                        href={social.href} aria-label={social.icon}
                        data-aos='zoom-in'
                        target="_blank"
                        data-aos-delay={index * 100}
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop:blur-sm dark:text-gray-300 text-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                        >
                            <IconComponents/>
                        </a>
                    )
                  })}
               </div>
               <a
                href='#contact' data-aos='fade-up' data-aos-delay='300'>
                <button  className=' group inline-flex min-h-12 w-full  items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-red-600 to-red-800 px-6 py-3 font-semibold text-white shadow-lg shadow-red-500/30 transition duration-300 hover:scale-105 hover:shadow-red-500/50 sm:w-auto'>
                Let's Talk
                <ArrowRight size={18} />

                </button>
               
              </a>
               </div>
              <div className='relative order-1 lg:order-2 flex justify-center' 
              data-aos='fade-left'>
                <div className='relative w-full max-w-sm sm:max-w-md'>
                    <div className='absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-[40%_60%_60%/40%_60%_70%] filter blur-xl opacity-40 animate-pulse'/>

                      <div className='absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-[40%_60%_60%/40%_60%_70%] transform rotate-3 scale-105'/>
                      <img src={about} alt="About" className='relative z-10 rounded-[40%_60%_60%/40%_60%_70%] shadow-2xl w-full h-auto object-cover border-2 border-red-500/30 backdrop:blur-sm'/>


                  

                </div>

              </div>

           

        </div>

    </section>
  )
}

export default About