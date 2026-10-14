import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'

const contactEmail = 'samiullahkhan.lki@gmail.com'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const subject = `Portfolio contact from ${name.trim()}`
        const body = `Name: ${name}\nEmail: ${email}\n\n${message.trim()}`

        window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    return (
        <section id='contact' className='relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24'>
            <div className='pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-red-500/10 blur-3xl' />
            <div className='pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-red-800/10 blur-3xl' />

            <div className='relative z-10 mx-auto w-full max-w-6xl'>
                <motion.div
                    className='mx-auto mb-10 max-w-2xl text-center sm:mb-14'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5'>
                        <MessageCircle size={16} className='text-red-600 dark:text-red-400' aria-hidden='true' />
                        <span className='text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-300'>
                            Get in touch
                        </span>
                    </div>
                    <h2 className='text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl'>
                        Let&apos;s <span className='text-red-600 dark:text-red-400'>Talk</span>
                    </h2>
                    <p className='mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base'>
                        Have a project in mind or want to work together? Send me a message.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 items-stretch gap-6 lg:grid-cols-5 lg:gap-8'>
                    <motion.aside
                        className='relative flex flex-col justify-between overflow-hidden rounded-2xl bg-linear-to-br from-red-600 to-red-900 p-6 text-white shadow-xl shadow-red-950/20 sm:p-8 lg:col-span-2'
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full border border-white/10' />
                        <div className='pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full border border-white/10' />

                        <div className='relative'>
                            <div className='mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10'>
                                <Mail size={22} aria-hidden='true' />
                            </div>
                            <h3 className='text-2xl font-bold sm:text-3xl'>Let&apos;s make something great.</h3>
                            <p className='mt-3 max-w-sm text-sm leading-relaxed text-white/80 sm:text-base'>
                                I&apos;m open to discussing new projects, creative ideas, and opportunities.
                            </p>
                        </div>

                        <a
                            href={`mailto:${contactEmail}`}
                            className='relative mt-10 inline-flex min-h-12 w-full min-w-0 items-center justify-between gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium transition-colors hover:bg-white/20 sm:w-fit sm:max-w-full'
                        >
                            <span className='flex min-w-0 items-center gap-3'>
                                <Mail size={18} className='shrink-0' aria-hidden='true' />
                                <span className='break-all'>{contactEmail}</span>
                            </span>
                            <ArrowUpRight size={18} className='shrink-0' aria-hidden='true' />
                        </a>
                    </motion.aside>

                    <motion.form
                        onSubmit={handleSubmit}
                        className='flex min-w-0 flex-col gap-5 rounded-2xl border border-gray-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-gray-950/40 sm:p-7 lg:col-span-3 lg:p-8'
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
                            <div className='min-w-0'>
                                <label htmlFor='contact-name' className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200'>
                                    Your name
                                </label>
                                <input
                                    id='contact-name'
                                    name='name'
                                    type='text'
                                    autoComplete='name'
                                    placeholder='e.g. Alex Smith'
                                    maxLength={100}
                                    required
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    className='min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base font-medium text-gray-950 caret-red-600 outline-none transition placeholder:font-normal placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/15 dark:border-white/10 dark:bg-gray-900/70 dark:text-gray-50 dark:caret-red-400 dark:placeholder:text-gray-500 dark:focus:border-red-400'
                                />
                            </div>
                            <div className='min-w-0'>
                                <label htmlFor='contact-email' className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200'>
                                    Email address
                                </label>
                                <input
                                    id='contact-email'
                                    name='email'
                                    type='email'
                                    autoComplete='email'
                                    placeholder='you@example.com'
                                    maxLength={254}
                                    required
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    className='min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base font-medium text-gray-950 caret-red-600 outline-none transition placeholder:font-normal placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/15 dark:border-white/10 dark:bg-gray-900/70 dark:text-gray-50 dark:caret-red-400 dark:placeholder:text-gray-500 dark:focus:border-red-400'
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor='contact-message' className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200'>
                                Your message
                            </label>
                            <textarea
                                id='contact-message'
                                name='message'
                                rows={5}
                                placeholder='Tell me a little about what you have in mind...'
                                maxLength={5000}
                                required
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                className='min-h-36 w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 text-base leading-relaxed text-gray-950 caret-red-600 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/15 selection:bg-red-500/20 dark:border-white/10 dark:bg-gray-900/70 dark:text-gray-50 dark:caret-red-400 dark:placeholder:text-gray-500 dark:focus:border-red-400'
                            />
                        </div>

                        <button
                            type='submit'
                            className='inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-red-600 to-red-800 px-6 py-3 font-semibold text-white shadow-lg shadow-red-900/20 transition duration-300 hover:shadow-xl hover:shadow-red-900/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 sm:w-fit'
                        >
                            <Send size={18} aria-hidden='true' />
                            Send Message
                        </button>
                        <p className='text-xs leading-relaxed text-gray-500 dark:text-gray-400'>
                            This opens your email app with the message ready to send.
                        </p>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}

export default Contact
