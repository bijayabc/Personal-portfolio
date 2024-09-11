import { useState } from "react"
import LogoSvg from "./LogoSvg";
import { NAVIGATION_LINKS } from "../constants"
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
    // State to check if the mobile menu toggle is open or not
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const handleClick = (e, href) => {
        e.preventDefault()
        const targetElement = document.querySelector(href)
        if (targetElement) {
            const offset = -85 // accounting for the fixed navbar

            // distance to the element from the top of the viewport
            const elementPosition = targetElement.getBoundingClientRect().top

            // final offset position where scrollY is how much the window is already scrolled (This value is the
            // pixel position to scroll to like coordinate and  not a value for additional scrolling. i.e it is always constant 
            // scrollY and elementPosition balance each other out)
            const offsetPosition = elementPosition + window.scrollY + offset

            console.log("offset: ", offset)
            console.log("elementPosition: ", elementPosition)
            console.log("window.ScrollY: ", window.scrollY)
            console.log("offsetPosition: ", offsetPosition)

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
        setIsMobileMenuOpen(false)
    }

  return (
    <div>
        <nav className="fixed left-0 right-0 top-4 z-50">

            {/* Desktop Menu: hidden until large screen requirement is satisfied */}
            <div className="mx-auto hidden max-w-2xl items-center
            justify-center rounded-lg border border-stone-50/30
            bg-black/20 py-3 backdrop-blur-lg lg:flex">

                <div className="flex items-center justify-between gap-6">
                    {/* flex item 1 :  Nav logo */}
                    <div>
                        <a href="#">
                        <LogoSvg animation = {true}/>
                        </a>
                    </div>

                    {/* flex item 2 : Nav links */}
                    <div>
                        <ul className="flex items-center gap-4">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a className="text-sm hover:text-yellow-400" 
                                    onClick={(e) => handleClick(e, item.href)} href={item.href}>
                                        <span className="font-sanssemibold">{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

            {/* Mobile Menu */}
            <div className="px-5 rounded-lg backdrop-blur-md lg:hidden">

                <div className="flex items-center justify-between">
                    {/* mobile nav logo */}
                    <div>
                        <a href="#"
                        >
                            <LogoSvg animation = {true}/>
                            
                            {/* <motion.img src={logo2} alt="logo" width={90} className="m-2"/> */}
                        </a>
                    </div>

                    {/* mobile nav toggle button */}
                    <div className="flex items-center">
                        <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                            <FaTimes className="m-2 h-6 w-5" />
                        ) : (
                            <FaBars className="m-2 h-6 w-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile nav links activated upon clicking toggle icon */}
                {isMobileMenuOpen && (
                    <ul className="ml-4 mt-4 flex flex-col gap-4 
                    backdrop-blur-md">
                        {NAVIGATION_LINKS.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="block w-full text-lg" onClick={(e) => handleClick(e, item.href)}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}

            </div>
        </nav>
    </div>
  )
}

export default Navbar