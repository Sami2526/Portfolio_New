const Skills = () => {
    const skills = [

        { name: 'React.js', percentage: 92, color: '#61DAFB' },
        { name: 'Tailwind CSS', percentage: 90, color: '#06B6D4' },
        { name: 'Redux Toolkit', percentage: 85, color: '#764ABC' },
        { name: 'Firebase', percentage: 90, color: '#FFCA28' },
        { name: 'JavaScript', percentage: 88, color: '#F7DF1E' },
        { name: 'REST APIs', percentage: 82, color: '#009688' },
        { name: 'HTML5 & CSS3', percentage: 95, color: '#E34F26' },
        { name: 'Git & GitHub', percentage: 80, color: '#F05032' },
        { name: 'Node.js', percentage: 78, color: '#339933' },
        { name: 'Express.js', percentage: 78, color: '#FFFFFF' },
        { name: 'MongoDB', percentage: 80, color: '#47A248' },
        { name: 'Cloudinary', percentage: 81, color: '#F7A34F' },

    ]
    return (
        <section id='skills' className='min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative'>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-40 -right-40 w-80 h-80 bg-red-500/50 rounded-full blur-3xl'>
                </div>
                <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/50 rounded-full blur-3xl'>
                </div>

            </div>
            <div className='max-w-6xl mx-auto w-full relative z-10'>
                <div className='text-center mb-16' data-aos='fade-up'>
                    <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10
            border border-red-500/20 mb-5
            '>
                        <span className='w-2 h-2 rounded-full bg-red-500 animate-pulse'></span>
                        <span className='text-sm font-medium dark:text-gray-300 text-gray-700'>Expertises</span>

                    </div>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900'>My<span className='text-red-500 dark:text-red-400'> Skills</span></h2>
                    <p className='mx-auto mt-4 max-w-2xl px-2 text-center text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base'>
                        I build responsive, user-friendly web applications with React, JavaScript, and Tailwind CSS. My experience includes state management, Firebase, and REST APIs, with projects spanning chat, healthcare, and AI-powered career guidance. I am always learning and strengthening my problem-solving skills across the MERN stack.
                    </p>

                </div>
                <div className='grid grid-cols-2 gap-x-3 gap-y-8 min-[360px]:gap-x-5 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-4'>
                    {
                        skills.map((skill, index) => {
                            const radius = 60
                            const curcum = 2 * Math.PI * radius
                            const offset = curcum - (skill.percentage / 100) * curcum
                            const size = 150
                            return (
                                <div key={index}
                                    className='flex min-w-0 flex-col items-center'
                                    data-aos='fade-up'
                                    data-aos-delay={index * 100}
                                >
                                    <div className='relative aspect-square w-full max-w-[150px]'>
                                        <svg className='h-full w-full transform -rotate-90'
                                            viewBox={`0 0 ${size} ${size}`}
                                            aria-hidden='true'

                                        >
                                            <circle
                                                cx={size / 2}
                                                cy={size / 2}
                                                r={radius}
                                                fill='none'
                                                stroke='#e5e7eb'
                                                strokeWidth='10'
                                                className='dark:stroke-gray-700'

                                            >

                                            </circle>

                                            <circle
                                                cx={size / 2}
                                                cy={size / 2}
                                                r={radius}
                                                fill='none'
                                                stroke={skill.color}
                                                strokeWidth='10'
                                                strokeDasharray={curcum}
                                                strokeDashoffset={offset}
                                                strokeLinecap='round'
                                                className='transition-all duration-1000 ease-out'
                                                style={{ transition: 'stroke-dashoffset 1.5s ease-in-out' }}

                                            >

                                            </circle>

                                        </svg>
                                        <div className='absolute inset-0 flex items-center justify-center'>
                                            <div className='text-center'>
                                                <span className='text-3xl font-bold dark:text-white text-gray-900'>
                                                    {
                                                        skill.percentage
                                                    }%

                                                </span>

                                            </div>

                                        </div>

                                    </div>
                                    <h3 className='mt-4 max-w-full break-words text-center text-sm font-medium text-gray-900 dark:text-gray-200 sm:text-base'>
                                        {skill.name}
                                    </h3>

                                </div>
                            )

                        })
                    }

                </div>

            </div>
        </section>
    )
}

export default Skills