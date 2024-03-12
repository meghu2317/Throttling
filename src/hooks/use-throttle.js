import {useEffect, useState} from "react";

const useThrottle = (value, delay) =>{

    const [throttleVal, setthrottleVal] = useState(value)

    const lastExe = new Date.now()
    useEffect(() => {
        const handler = setTimeout(()=>{
            const now = new Date.now();
            const timeElapse = now - lastExe.current
            if(timeElapse >= delay){
                setthrottleVal(value)
                lastExe.current = now
            }
        }, delay - (now - lastExe.current))

        return () => {
            clearTimeout(handler)
        }
    }, [delay, value]);
    return throttleVal
}

export default useThrottle;