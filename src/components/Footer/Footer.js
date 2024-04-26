import React from 'react'
import "./Footer.css"
import { motion } from 'framer-motion'
import { desVariants, titleVariants } from '../../utils/animations'

const Footer = () => {
    return (
        <div className="f-wrapper">
            <div className="f-container">
                <motion.span initial={"offscreen"} whileInView={"onscreen"} variants={titleVariants} className="tt">TODO NOTES✔️</motion.span>
                <hr />
                <motion.span initial={"offscreen"} whileInView={"onscreen"} variants={desVariants} className='tm'>made with ❤️ by Ashutosh Yadav</motion.span>
            </div>
        </div>
    )
}

export default Footer