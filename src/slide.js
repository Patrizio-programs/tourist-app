import React from "react";
import { useState, useEffect } from "react";



const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIndex(0)
    }, [])

    const next = () => {

        if (index === imgs.length - 1) {
            setIndex(0)
          } else {
            setIndex(index + 1)
          }
    }

    
    const prev = () => {

        if (index === 0) {
            setIndex(imgs.length - 1)
          } else {
            setIndex(index - 1)
          } 
    }

    

    return <div className="slideshow">
        <img className="mainImg" src={imgs[index]} alt=''/>
        <div className="actions">
            <button onClick={prev}>👈</button>
            <button onClick={next}>👉</button>

        </div>
    </div>
}

export default Slideshow;