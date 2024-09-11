import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const headerVariants = {
    hidden: {
        opacity: 0,
        y: -20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
  }
  

const WorkExperience = () => {
  return (
    <section className="pt-20" id="work">

        <motion.h2 
        className="text-center text-4xl font-semibold tracking-tighter"
        variants= {headerVariants}
        initial= "hidden"
        whileInView= "visible"
        >
          Experience
        </motion.h2>

        {/* Experiences container */}
        {/* Using space-y-8 instead of a flexbox because the design is simple enough */}
        <div className="space-y-8 p-10">

            {EXPERIENCES.map((experience, index) => (
                <motion.div key={index} 
                className="rounded-xl border border-stone-50/30 
                bg-white/10 p-4"
                initial= {{ opacity: 0, x: -5 }}
                whileInView= {{ opacity: 1, x: 0 }}
                transition= {{duration: 1, delay: index * 0.2}}>

                    <h3 className="text-2xl font-semibold">{experience.title}</h3>
                    <p className="text-xl">{experience.company}</p>
                    <p className="text-sm text-stone-300">{experience.duration}</p>
                    <p className="mt-2 text-base">{experience.description}</p>
                    
                </motion.div>
            ))}

        </div>

    </section>
  )
}

export default WorkExperience