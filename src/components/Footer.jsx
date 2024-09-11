import { SOCIAL_MEDIA_LINKS } from "../constants"
import LogoSvg from "./LogoSvg"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
        {/* Footer Logo */}
        <LogoSvg/>

        {/* Icons */}
        <div 
        className="flex items-center justify-center gap-8"
        >

            {SOCIAL_MEDIA_LINKS.map((site, index) => (
                    <motion.a 
                    key={index} href={site.href} target="_blank" rel="noopener noreferrer"
                    initial= {{ opacity: 0, x: -5}}
                    whileInView=  {{ opacity: 1, x: 0}}
                    transition= {{ duration: 1, delay: index * 0.5}}>
                        {site.icon}
                    </motion.a>
            ))}
        </div>

        {/* Copyright text */}
        <p className="text-sm text-gray-400 text-center mt-8 tracking-wide">
            &copy;All rights reserved.
        </p>
    </div>
  )
}

export default Footer