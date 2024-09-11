import { SKILLS } from "../constants"
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

const Skills = () => {
  return (
    <section className="container mx-auto" id="skills">

        <motion.h2 
        className="mb-12 mt-20 text-center text-4xl font-semibold"
        variants= {headerVariants}
        initial= "hidden"
        whileInView= "visible"
        >
            Skills
        </motion.h2>

        {/* Flex-col container for skills */}
        <div className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border
        border-stone-50/30">

            {SKILLS.map((skill, index) => (

                // conditional rendering to not give the last skill a bottom border
                <motion.div key={index} 
                    className={`py-6 flex items-center justify-between 
                    ${ index != SKILLS.length - 1 ? "border-b border-stone-50/30" : ""}`}
                    initial= {{ opacity: 0, x: -20}}
                    whileInView=  {{ opacity: 1, x: 0}}
                    transition= {{ duration: 0.5, delay: index * 0.1}}
                    viewport= {{ once: true }}
                >

                    {/* logo and name */}
                    <div className="flex items-center">
                    {skill.icon}
                    <h3 className="px-6 text-lg lg:text-2xl">{skill.name}</h3>
                    </div>

                    {/* skill experience */}
                    <div className="font-semibold text-md lg:text-lg">
                        <span>{skill.experience}</span>
                    </div>
                </motion.div>

            ))}
        </div>

    </section>
  )
}

export default Skills