import { motion } from "framer-motion"

const Button = ({label, iconUrl, backgroundColor, borderColor, textColor, fullWidth, click }) => {
    return (
      <motion.button onClick={click} whileTap={{scale: 0.95}} className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}` : "bg-dark text-white border-dark"} rounded-full ${fullWidth && ' w-full'} `}>
          {label}
          {iconUrl && <img src={iconUrl} alt="arrow right" className=' ml-2 rounded-full w-5 h-5'/>}
      </motion.button>
    )
  }
  

export default Button