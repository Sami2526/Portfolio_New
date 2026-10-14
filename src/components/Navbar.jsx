import { useEffect, useState } from 'react';
import {
    FaHome,
    FaUser,
    FaCode,
    FaCertificate,
    FaProjectDiagram,
    FaEnvelope,
} from 'react-icons/fa';
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react';

const navItems = [
    { name: 'Home', link: '#home', icon: FaHome },
    { name: 'About', link: '#about', icon: FaUser },
    { name: 'Skills', link: '#skills', icon: FaCode },
    { name: 'Certificates', link: '#certificates', icon: FaCertificate },
    { name: 'Projects', link: '#projects', icon: FaProjectDiagram },
    { name: 'Contact', link: '#contact', icon: FaEnvelope },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [activeTab, setActiveTab] = useState('Home');
    useEffect(() => {
        let animationFrameId

        const updateActiveTab = () => {
            animationFrameId = null
            const marker = window.scrollY + window.innerHeight * 0.4
            let currentSection = navItems[0].name

            navItems.forEach((item) => {
                const section = document.querySelector(item.link)
                if (section && section.offsetTop <= marker) {
                    currentSection = item.name
                }
            })

            setActiveTab(currentSection)
        }

        const handleScroll = () => {
            if (animationFrameId === null) {
                animationFrameId = window.requestAnimationFrame(updateActiveTab)
            }
        }

        animationFrameId = null
        updateActiveTab()
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
            if (animationFrameId !== null) {
                window.cancelAnimationFrame(animationFrameId)
            }
        }
    }, [])

    return (
        <div className='fixed z-50 bottom-0 left-0 right-0 flex justify-center'>
            <motion.nav
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className='w-[95%] max-w-4xl mb-4'
            >
                <div className='relative bg-linear-to-r from-red-600 to-red-800 shadow-2xl backdrop-blur-xl rounded-2xl border border-white/20 px-3 py-2'>
                    <div className='absolute -top-5 right-3'>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleDarkMode}
                            className='p-2 rounded-full bg-gray-900 dark:bg-gray-100 transition-colors backdrop:blur-sm'
                        >
                            {
                                darkMode ? (
                                    <Sun className='w-4 lg:w-5 h-4 lg:h-5 text-black' />
                                ) : (
                                    <Moon className='w-5 h-5 text-white' />
                                )
                            }

                        </motion.button>

                    </div>

                    <div className='flex items-center justify-around gap-1'>
                        {
                            navItems.map((item) => {
                                const Icon = item.icon
                                const isActive = activeTab === item.name
                                return (
                                    <motion.a
                                        key={item.name}
                                        href={item.link}
                                        onClick={() => setActiveTab(item.name)}
                                        aria-current={activeTab === item.name ? 'location' : undefined}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className='flex flex-col items-center gap-0.5 py-1.5 px-2 relative group flex-1'

                                    >
                                        {
                                            isActive && (
                                                <motion.div
                                                    layoutId='activeTab'
                                                    className='absolute -top-5 left-1/2 -translate-x-1/2 w-6 h-1 bg-white rounded-full'
                                                    transition={{ duration: 0.3 }}
                                                >

                                                </motion.div>
                                            )
                                        }
                                        <Icon className={`w-5 h-5 transition-all duration-300 ${isActive ? `text-white` : `text-white/70 group-hover:text-white`
                                            }`} />
                                        <span className={`text-[10px] font-medium transition-all duration-300 ${
                                            isActive ?
                                            `text-white`:
                                            `text-white/60 group-hover:text-white`
                                        }`}>
                                          {item.name}
                                        </span>
                                    </motion.a>
                                )
                            })
                        }

                    </div>
                </div>

            </motion.nav>

        </div>
    );
};

export default Navbar;