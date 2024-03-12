import './App.css'
import {useEffect, useState} from "react";
import useThrottle from "./hooks/use-throttle.js";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleSize = () =>{
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  const throttleHandleResize = useThrottle(handleSize, 500)

  useEffect(() => {
    window.addEventListener('resize',handleSize)

    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, []);
  return (
      <div>Window Width: {windowSize.width} : {windowSize.height}
      </div>
  )
}

export default App
