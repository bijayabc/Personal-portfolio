import { MdArrowOutward } from "react-icons/md"
import { PROJECTS } from "../constants"
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
            duration: 0.8
        }
    }
}

const Projects = () => {
  return (
    <section className="pt-20" id="projects">

        <motion.h2 
            className="mb-8 text-center text-3xl lg:text-4xl"
            variants= {headerVariants}
            initial= "hidden"
            whileInView= "visible"
        >
            Projects
        </motion.h2>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">

            {PROJECTS.map((project) => (
                // group and group-hover used below allow us to apply styles to child elements based on the hover state of the parent element.
                <motion.div 
                    key={project.id} 
                    className="group relative overflow-hidden rounded-3xl"
                    initial= {{ opacity: 0, scale: 0.9 }}
                    whileInView= {{ opacity: 1, scale: 1 }}
                    transition= {{ duration: 0.5}}
                    whileHover={{ scale: 1.1 }}
                >

                    {/* background image  */}
                    <img src={project.image} alt={project.name} className="h-full w-full object-cover
                    transition-transform duration-500 group-hover:scale-110"/>

                    {/* Project info to be displayed upon hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white 
                    opacity-0 backdrop-blur-lg transition:opacity duration-500 group-hover:opacity-100">

                        <h3 className="font-bold mb-2 text-xl">{project.name}</h3>
                        <p className="mb-12 p-4">{project.description}</p>

                        {/* noopener and noreferrer to enhance security and privacy by preventing the new page from accessing the original page’s 
                        context and stopping referrer information from being sent. */}
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                        className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300">
                            <div className="flex items-center">
                                <span>View on Github</span>
                                <MdArrowOutward />
                            </div>
                        </a>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                        className="mt-6 rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300">
                            <div className="flex items-center">
                                <span>Demo</span>
                                <MdArrowOutward />
                            </div>
                        </a>
                    </div>
                </motion.div>

            ))}
        </div>

    </section>
  )
}

export default Projects