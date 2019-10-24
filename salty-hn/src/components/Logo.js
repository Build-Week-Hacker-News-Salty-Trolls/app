import React, { useState, useRef, useEffect } from "react";
import { TweenMax } from 'gsap';

import Salt from '../images/Salt.png'

export const Logo = () => {
    let imgRef = useRef(null);
    const [animation, setAnimation] = useState(null);
    useEffect(() => {
        setAnimation(
            TweenMax.to(imgRef, 1, {rotation: 30, repeat: -1, yoyo: true})
        )
    }, []);

    return (
            <img ref={element => {
                imgRef = element;
            }}
            src={Salt}
            alt="salt"
            />
    )
}