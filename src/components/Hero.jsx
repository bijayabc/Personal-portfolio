import { HERO } from "../constants/index"
import bijayImg from "../assets/bijay2.jpeg"
import { motion } from "framer-motion"

const heroVariants = {
    hidden: {
        opacity: 0,
        x: -50
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1
        }
    }
}

const Hero = () => {
  return (
    <section className="mt-10 flex min-h-screen flex-wrap items-center" id="hero">

        {/* Hero text */}
        <motion.div className="w-full md:w-1/2"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
        >
            <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]" >
                {HERO.name.split("").map((letter, index) => (
                    <motion.span
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index*0.1 }}
                    key={index}>
                        {letter}
                    </motion.span>
                ))}
            </h2>

            <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
                {HERO.greet}
            </p>

            <p className="mb-8 p-2 text-xl">
                {HERO.description}
            </p>
        </motion.div>

        {/* hero image */}
        <motion.div className="w-full md:w-1/2 lg:p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition= {{ duration: 1 }}
        >
            <div className="flex justify-center">
                <motion.img className="rounded-3xl" width={550} height={550} src={bijayImg} 
                   initial={{ opacity: 0}}
                   animate={{ opacity: 1}} 
                />
            </div>
        </motion.div>

    </section>
  )
}

export default Hero