import emailjs from "@emailjs/browser"
import { useState } from "react"
import {toast, Toaster} from "react-hot-toast"
import { FiSend } from "react-icons/fi"
import { motion } from "framer-motion"

const ContactForm = () => {

    // Initialize states to store the necessary data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [errors, setErrors] = useState({}) 
    const [isSending, setIsSending] = useState(false) 

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(
            {
                ...formData,
                [name]: value
            })
    }

    const validate = () => {
        let errors = {}

        if (!formData.name) errors.name = "Name is required"

        if (!formData.email) {
            errors.email = "Email is required" 
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid"
        }
        if (!formData.message) formData.message = "Message is required"
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const validationErrors = validate()

        // Object.keys(validationErrors) returns a list of the keys of the dict in the same order
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            setErrors({})
            setIsSending(true)

            emailjs
                .send(
                    "service_s3d7pfj",
                    "template_ant8q0k",
                    formData,
                    "m-7q7sFphvq_xyc5V"
                )
                .then(response => {
                    toast.success("Message sent successfully")
                    setFormData({name:"", email:"", message:""})

                })
                .catch(error => {
                    console.log("FAILED....", error)
                    toast.error("Failed to send message. Please try again later")
                })
                .finally(() => {
                    setIsSending(false)
                })
        }
    }

  return (
    <section className="p-4 lg:w-3/4" id="contact">
        {/* Section to display success or error from emailjs */}
        <Toaster />
        <h2 className="my-8 text-4xl text-center font-semibold tracking-tighter">
            Let's Connect
        </h2>

        <motion.form onSubmit={handleSubmit}
        initial= {{ opacity: 0}}
        whileInView= {{ opacity: 1}}
        transition= {{ duration: 0.8, delay: 0.7 }}>
            <div className="mb-4 flex space-x-4">
                <div className="lg:w-1/2">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="mb-8 px-3 py-2 w-full appearance-none rounded-lg border border-stone-50/30 
                        bg-transparent text-sm focus:border-stone-400 focus:outline-none"
                    />
                    {errors.name && (
                        <motion.p 
                        className="text-sm text-rose-800"
                        initial= {{opacity: 0}}
                        whileInView= {{opacity: 1}}
                        transitoin= {{duration: 0.5}}>
                            {errors.name}
                        </motion.p>
                    )}
                </div>

                <div className="lg:w-1/2">
                    <input 
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="mb-8 px-3 py-2 w-full appearance-none rounded-lg border border-stone-50/30 
                        bg-transparent text-sm focus:border-stone-400 focus:outline-none"
                    />
                    {errors.email && (
                        <motion.p 
                        className="text-sm text-rose-800"
                        initial= {{opacity: 0}}
                        whileInView= {{opacity: 1}}
                        transitoin= {{duration: 0.5}}>
                            {errors.email}
                        </motion.p>
                    )}
                </div>
            </div>

            <div className="mb-4">
                <textarea rows="6"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="mb-8 col-span-2 px-3 py-2 w-full appearance-none rounded-lg border border-stone-50/30 
                        bg-transparent text-sm focus:border-stone-400 focus:outline-none" 
                    />
                    {errors.message && (
                        <motion.p 
                        className="text-sm text-rose-800"
                        initial= {{opacity: 0}}
                        whileInView= {{opacity: 1}}
                        transitoin= {{duration: 0.5}}>
                            {errors.message}
                        </motion.p>
                    )}
            </div>

            <button 
            type="submit" 
            className= {`mb-8 w-full rounded border border-stone-50/30
            bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300
            ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={isSending}
            >
                <div className="flex items-center justify-center gap-2">
                    {isSending ? "Sending..." : "Send"}
                    <FiSend />
                </div>
            </button>

        </motion.form>
    </section>
  )
}

export default ContactForm