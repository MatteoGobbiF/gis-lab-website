import Video from "../assets/images/Background-images/Tirano_area_overview.mp4";
import React, { useState, useRef } from 'react';




export default function Hero({ children }) {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <main className="h-[55vh] md:h-[42vh] lg:h-screen relative">
            {children}
            <div className="bg-black min-h-[20vh] max-h-[25vh] md:min-h-[35vh] lg:min-h-[80%] lg:max-h-[80%] rounded-2xl md:rounded-b-[60px] overflow-hidden md:static absolute top-10">
                <video
                    ref={videoRef}
                    loop
                    className="aspect-auto"
                    src={Video}
                    onClick={togglePlay}
                ></video>
            </div>
            <div className="h-[35vh] absolute inset-y-32 md:inset-y-[320px]  lg:static md:min-h-[20vh] md:max-h-[20vh] flex flex-col md:flex-row justify-end md:justify-between md:items-center md:space-y-5 space-y-4 md:my-0 px-10 md:px-20 ">
                <h1>Exploring geohazards</h1>
                <div className="md:w-[400px] text-justify flex flex-col items-center space-y-5">
                    <p>The following analysis is aimed to study the landslide susceptibility of the Tirano area within Lombardy Region in the northern part of Italy.</p>

                </div>
            </div>
        </main>
    )
}