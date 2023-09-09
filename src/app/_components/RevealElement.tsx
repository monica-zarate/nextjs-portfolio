// Vendor imports
import { useEffect, useRef } from "react";
import { motion as m, useInView, useAnimation } from "framer-motion";

// Project imports
import { variants } from "../constants";

export default function RevealElement({children}: any){

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref}>
            <m.div 
                variants={variants} 
                initial="hidden" 
                animate={mainControls} 
                transition={{type: "spring", bounce: 0.1, delay: 0.1, duration: 0.75, ease: "easeInOut"}}
            >
                {children}
            </m.div>
        </div>
    )
};