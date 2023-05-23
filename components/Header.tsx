'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from "framer-motion";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7x1 mx-auto z-20 x1:items-center'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }
        }
        animate={{
            x: 0,
            opacity: 1, 
            scale: 1
        }}

        transition = {{
            duration: 1
        }}
        
        className="flex flex-row items-center">
            { /* Social Icons */ }
            <SocialIcon url="https://www.linkedin.com/in/yashsgupta/" fgColor = "white" bgColor='transparent'/>
            <SocialIcon url="https://github.com/yashg4509" fgColor = "white" bgColor='transparent'/>
        </motion.div>

        <motion.div 

        initial={{
            x:500, 
            opacity: 0,
            scale: 0.5
        }}

        animate ={
            {
               x:0,
               opacity:1, 
               scale:1 
            }
        }

        transition={{duration: 1}}
        
        className="flex flex-row items-center text-gray-300 cursor-pointer">
            <SocialIcon className="cursor-pointer" network="email" fgColor = "white" bgColor="transparent" />
            <p className="uppercase hidden md:inline-flex text-sm text-white-400">Get In Touch</p>
        </motion.div>
    </header>
  )
}