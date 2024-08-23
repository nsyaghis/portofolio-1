"use client"

import {motion} from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return <div className="w-full h-full relative">
        <motion.div>
            <div className="w-[250px] h-[250px] xl:w-[450px] xl:h-[450px] mix-blend-lighten">
                <Image
                    src="/assets/photo.png"
                    priority
                    quality={100}
                    fill
                    alt=""
                    className="object-contain"
                />
            </div>
        </motion.div>
        
    </div>
  
}

export default Photo