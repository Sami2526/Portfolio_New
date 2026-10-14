import React from 'react'
import { FaFacebook, FaGit, FaGithub, FaHeart, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    const currentYear= new Date().getFullYear()
  return (
    <footer className='border-t bg-linear-to-br from-red-400 to-white dark:bg-linear-to-br dark:from-red-950 dark:to-black py-6 px-4'>
        <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4'>
            <div>
                <h3 className='text-xl text-red-500 font-bold dark:text-red-400'>
                    Sami Ullah Khan
                </h3>
                <p className='text-xs'>Frontend Web Developer</p>
            </div>
            <div className='flex gap-4'>
                <a href="https://github.com/Sami2526" target='_blank' className='hover:text-amber-50 transition-colors'> 
                    <FaGithub size={20}/>
                </a>
                <a href="https://www.linkedin.com/in/reactbysami" target='_blank' className='hover:text-blue-800 transition-colors'> 
                    <FaLinkedin size={20}/>
                </a>
                <a href="https://www.facebook.com/muhammad.ayyanniazi/" target='_blank' className='hover:text-blue-500 transition-colors'> 
                    <FaFacebook size={20}/>
                </a>
                <a href="https://wa.me/03012526578" target='_blank' className='hover:text-green-500 transition-colors'> 
                    <FaWhatsapp size={20}/>
                </a>

            </div>
            <p className='text-xs flex items-center gap-1'>
              {currentYear} Made With <FaHeart className='text-red-500'/>by
              <span className='font-semibold text-red-500'>
                NiaziCode
              </span>
            </p>

        </div>
        <div className='h-24'>

        </div>

    </footer>
  )
}

export default Footer