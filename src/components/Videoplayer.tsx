import { useEffect, useRef } from "react";

const Videoplayer=()=>{

    const videoRef = useRef<any>(null);
    //const src = `https://www.youtube.com/embed/${id}?autoplay=1`;

    useEffect(()=>{
        if(videoRef.current)
        {
            // videoRef.current.play()
        }
    },[])

    return(
        <video ref={videoRef} width="640" height="360" muted>
            <source src="Images/vid.mp4" type="video/mp4" />
        </video>
    )
}

export default Videoplayer

{/* <iframe
            width="100%"
            height="100%"
            src={src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
    ></iframe> */}