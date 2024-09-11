import { BIO } from "../constants"
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

const Bio = () => {
  return (
    <section className="flex flex-col max-w-4xl gap-12 pt-20" id="bio">
        <motion.h2 
          className="text-center text-3xl lg:text-4xl"
          variants= {headerVariants}
          initial= "hidden"
          whileInView= "visible">
          Bio
        </motion.h2>

        <motion.div 
        initial= {{ opacity: 0 }}
        whileInView= {{ opacity: 1 }}
        transition= {{duration: 0.8, delay: 0.3}}>
            {BIO.map((bio, index) => (
                <motion.p 
                  key={index} 
                  className="mb-4 text-lg lg:text-xl"
                  initial= {{ opacity: 0, x: -10 }}
                  whileInView= {{opacity: 1, x: 0}}
                  transition= {{duration: 1, delay: index * 0.5}}>
                  {bio}
                </motion.p>
            ))}
        </motion.div>
    </section>
  )
}

export default Bio