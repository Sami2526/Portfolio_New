import { motion } from 'framer-motion'
import { Code2, ExternalLink, FolderKanban } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import portfolioImage from '../assets/portfolio.png'
import chatImage from '../assets/whatsapp.png'
import doctorImage from '../assets/medibook.png'
import careerImage from '../assets/ai.jpg'

const projects = [
    {
        image: portfolioImage,
        title: '3D Portfolio Website',
        description: 'An interactive portfolio experience built to present creative work with immersive 3D visuals and smooth motion.',
        tags: ['React', 'Tailwind CSS', 'Framer Motion'],
        githubUrl: '#',
        liveUrl: '#',
    },
    {
        image: chatImage,
        title: 'Real-Time Chat Application',
        description: 'A messaging application with real-time conversations, media and document sharing, and secure user authentication.',
        tags: ['React', 'Firebase', 'Socket.IO', 'Node.js', 'MongoDB'],
        githubUrl: 'https://github.com/Sami2526/RealTimeCHat',
        liveUrl: '#',
    },
    {
        image: doctorImage,
        title: 'MediBook — Doctor Booking',
        description: 'A doctor appointment platform with interactive profiles, available time slots, and appointment confirmations.',
        tags: ['React', 'Tailwind CSS', 'Firebase', 'OpenAI', 'Cloudinary'],
        githubUrl: 'https://github.com/Sami2526/-MediBook',
        liveUrl: '#',
    },
    {
        image: careerImage,
        title: 'AI Career Guidance',
        description: 'A career assessment portal that uses a person’s interests and skills to provide tailored career suggestions.',
        tags: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
        githubUrl: '#',
        liveUrl: '#',
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: 'easeOut' },
    },
}

const Projects = () => (
    <section id='projects' className='relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24'>
        <div className='pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-red-500/10 blur-3xl' />
        <div className='pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-red-800/10 blur-3xl' />

        <div className='relative z-10 mx-auto w-full max-w-6xl'>
            <motion.div
                className='mx-auto mb-10 max-w-2xl text-center sm:mb-14'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
            >
                <div className='mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5'>
                    <FolderKanban size={16} className='text-red-600 dark:text-red-400' aria-hidden='true' />
                    <span className='text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-300'>
                        Selected work
                    </span>
                </div>
                <h2 className='text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl'>
                    My <span className='text-red-600 dark:text-red-400'>Projects</span>
                </h2>
                <p className='mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base'>
                    A selection of web applications and experiences I have built with modern frontend technologies.
                </p>
            </motion.div>

            <motion.div
                className='grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.12 }}
            >
                {projects.map((project) => (
                    <motion.article
                        key={project.title}
                        variants={cardVariants}
                        whileHover={{ y: -5 }}
                        className='group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white/80 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-950/10 dark:border-white/10 dark:bg-gray-950/40 dark:hover:border-red-400/40 dark:hover:shadow-red-950/20'
                    >
                        <div className='relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-900'>
                            <img
                                src={project.image}
                                alt={`${project.title} project preview`}
                                loading='lazy'
                                className='h-full w-full object-contain'
                            />
                            <div className='absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-gray-950/75 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm'>
                                <Code2 size={14} aria-hidden='true' />
                                Project
                            </div>
                        </div>

                        <div className='flex flex-1 flex-col p-5 sm:p-6'>
                            <h3 className='text-lg font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-red-600 dark:text-white dark:group-hover:text-red-400 sm:text-xl'>
                                {project.title}
                            </h3>
                            <p className='mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300'>
                                {project.description}
                            </p>

                            <div className='mt-5 flex flex-wrap gap-2 border-t border-gray-200/80 pt-4 dark:border-white/10'>
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className='rounded-full border border-red-500/15 bg-red-500/5 px-2.5 py-1 text-xs font-medium text-red-700 dark:text-red-300'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className='mt-5 grid grid-cols-2 gap-3'>
                                <a
                                    href={project.githubUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={`GitHub code for ${project.title}`}
                                    className='inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-red-600 px-3 py-2 text-sm font-semibold text-red-700 transition-colors duration-300 hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-red-300 dark:hover:bg-red-600 dark:hover:text-white'
                                >
                                    <FaGithub size={17} aria-hidden='true' />
                                    <span>GitHub Code</span>
                                </a>
                                <a
                                    href={project.liveUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={`Live demo for ${project.title}`}
                                    className='inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-red-600 to-red-800 px-3 py-2 text-sm font-semibold text-white shadow-md shadow-red-900/20 transition duration-300 hover:shadow-lg hover:shadow-red-900/30'
                                >
                                    <ExternalLink size={16} aria-hidden='true' />
                                    <span>Live Demo</span>
                                </a>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </div>
    </section>
)

export default Projects
