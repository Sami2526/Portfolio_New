import React from 'react'
import image from '../assets/afterr.png'
import CV from '../assets/Cv1.pdf'
import { Download, Mail } from 'lucide-react'

const Hero = () => {
  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Done' },
    { number: '10+', label: 'Clients Happy' },
  ]

  return (
    <section id='home' className='relative flex min-h-screen items-center overflow-hidden'>
      <div className='container relative z-10 mx-auto px-4 py-8 pb-32 sm:px-8 sm:pb-8 lg:px-14'>
        <div className='flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12'>
          <div className='w-full lg:w-[42%]' data-aos='fade-right'>
            <div className='relative mx-auto flex w-[220px] items-center justify-center sm:w-[260px] lg:w-[340px]'>
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-800 opacity-30 blur-3xl' />
              <div className='relative h-[220px] w-[220px] overflow-hidden rounded-full border-4 border-white/10 shadow-2xl shadow-red-500/30 sm:h-[260px] sm:w-[260px] lg:h-[330px] lg:w-[330px]'>
                <img
                  src={image}
                  alt='Profile'
                  className='h-full w-full object-cover object-[center_10%] transition-transform duration-500 hover:scale-105'
                />
              </div>
            </div>
          </div>

          <div
            className='flex w-full flex-col items-center text-center lg:w-[58%] lg:items-start lg:text-left'
            data-aos='fade-left'
          >
            <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5'>
              <span className='h-2 w-2 rounded-full bg-green-500 animate-pulse' />
              <span className='text-sm font-medium text-gray-700 dark:text-red-300'>Available For</span>
            </div>

            <h1 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl'>
              Hi, I&apos;m <span className='text-red-600 dark:text-red-300'>Sami Ullah Khan</span>
            </h1>

            <h2 className='mb-3 text-lg font-mono text-red-600 dark:text-red-400 sm:text-xl'>
              <span className='text-gray-400 dark:text-gray-500'>&lt; </span>
              Frontend Web Developer
              <span className='text-gray-400 dark:text-gray-500'> &gt;</span>
            </h2>

            <p className='mb-5 max-w-xl text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base'>
              I&apos;m a Frontend React Developer passionate about building modern, responsive, and user-friendly
              web applications.
            </p>

            <div className='mb-5 flex flex-wrap items-center justify-center gap-4 lg:justify-start'>
              {stats.map((state) => (
                <div key={state.label} className='text-center'>
                  <div className='text-xl font-bold text-gray-900 dark:text-white'>{state.number}</div>
                  <div className='text-[10px] text-gray-600 dark:text-gray-400'>{state.label}</div>
                </div>
              ))}
            </div>

            <div className='flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row'>
              <a
                href={CV}
                download
                className='inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-red-600 to-red-800 px-6 py-3 font-semibold text-white shadow-lg shadow-red-500/30 transition duration-300 hover:scale-105 hover:shadow-red-500/50 sm:w-auto'
              >
                <Download size={18} />
                Download CV
              </a>

              <a
                href='#contact'
                className='inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-red-600 px-6 py-3 font-semibold text-gray-800 transition duration-300 hover:scale-105 hover:bg-red-600 hover:text-white dark:text-white sm:w-auto'
              >
                <Mail size={18} />
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero