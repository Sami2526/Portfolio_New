import { motion } from 'framer-motion'
import { Award, BrainCircuit, Code2, Smartphone } from 'lucide-react'

const certificates = [
    {
        title: 'Frontend Development',
        issuer: 'Cyber Vision International',
        date: '2022',
        icon: Code2,
        accent: 'from-red-500 to-orange-400',
    },
    {
        title: 'Android Development',
        issuer: 'NAVTTC',
        date: '2024',
        icon: Smartphone,
        accent: 'from-red-500 to-rose-400',
    },
    {
        title: 'React Web Development',
        date: '2025',
         issuer: 'Next Pak Agile Soulation',
        icon: Code2,
        accent: 'from-orange-400 to-red-500',
    },
    {
        title: 'AI Engineer Development',
        issuer: 'Huawei',
        date: '2026',
        icon: BrainCircuit,
        accent: 'from-rose-400 to-red-600',
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
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

const Certificates = () => (
    <section
        id='certificates'
        className='relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24'
    >
        <div className='pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl' />
        <div className='pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl' />

        <div className='relative z-10 mx-auto w-full max-w-6xl'>
            <motion.div
                className='mx-auto mb-12 max-w-2xl text-center sm:mb-16'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
            >
                <div className='mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5'>
                    <Award size={16} className='text-red-500 dark:text-red-400' aria-hidden='true' />
                    <span className='text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-300'>
                        Learning milestones
                    </span>
                </div>
                <h2 className='text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl'>
                    Certificates &amp;{' '}
                    <span className='text-red-600 dark:text-red-400'>Achievements</span>
                </h2>
                <p className='mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base'>
                    A few milestones from my journey in frontend, mobile, and AI development.
                </p>
            </motion.div>

            <motion.div
                className='grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7'
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.15 }}
            >
                {certificates.map((certificate, index) => {
                    const Icon = certificate.icon

                    return (
                        <motion.article
                            key={certificate.title}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className='group relative flex min-h-48 items-start gap-4 overflow-hidden rounded-2xl border border-gray-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-950/10 dark:border-white/10 dark:bg-gray-950/30 dark:hover:border-red-400/40 dark:hover:shadow-red-950/20 sm:gap-5 sm:p-6'
                        >
                            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${certificate.accent} text-white shadow-lg shadow-red-900/20 sm:h-14 sm:w-14`}>
                                <Icon size={24} strokeWidth={1.8} aria-hidden='true' />
                            </div>

                            <div className='min-w-0 flex-1'>
                                <div className='mb-3 flex items-center justify-between gap-3'>
                                    <span className='text-xs font-semibold tracking-widest text-gray-400 dark:text-gray-500'>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className='rounded-full border border-red-500/15 bg-red-500/5 px-3 py-1 text-xs font-medium text-red-600 dark:text-red-300'>
                                        {certificate.date}
                                    </span>
                                </div>
                                <h3 className='text-lg font-semibold leading-snug text-gray-900 transition-colors group-hover:text-red-600 dark:text-white dark:group-hover:text-red-300 sm:text-xl'>
                                    {certificate.title}
                                </h3>
                                {certificate.issuer && (
                                    <p className='mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400'>
                                        {certificate.issuer}
                                    </p>
                                )}
                                <div className='mt-5 h-px w-full bg-linear-to-r from-red-500/40 via-gray-200 to-transparent dark:via-gray-700' />
                            </div>
                        </motion.article>
                    )
                })}
            </motion.div>
        </div>
    </section>
)

export default Certificates
