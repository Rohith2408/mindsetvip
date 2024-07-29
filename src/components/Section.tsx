import Navbar from './Navbar';
import styles from './Section.module.css'
import Videoplayer from './Videoplayer'
import title from '../Images/title.png'
import video from '../Images/video.mp4'
import { useRef } from 'react';

const Section=()=>{

    const contractadd=useRef("4W9HBT6MvSZ6yWaYs7Ccb9keBFtwGX7NpEjHcVQppump").current

    return(
        <div className={styles.wrapper}>
            <div style={{position:"absolute",top:"10%",left:"50%",transform:"translateX(-50%)"}}>
                <div className={styles.navWrapper}><Navbar></Navbar></div>  
            </div>
            <video width="100%" controls={false} muted={true} autoPlay>
                <source src={video} type="video/mp4"/>
            </video>
            <div style={{position:"absolute",top:"60%",left:"50%",transform:"translateX(-50%)"}}>
                <img
                    style={{width:"300px",height:"auto"}}
                    loading="lazy"
                    alt=""
                    src={title}
                />
                <div style={{width:"600px",height:"100px",borderRadius:"150px",backgroundColor:'rgba(255,255,255,1)',display:"flex",flexDirection:'row',gap:"10px",justifyContent:"center",alignItems:"center",boxShadow:"2px 2px solid black"}}>
                    <p style={{fontFamily:"var(--font-bangers)",fontSize:"18px"}}>Contract address {contractadd}</p>
                    <button style={{padding:"10px",backgroundColor:"transparent",borderRadius:"10px"}} onClick={()=>{alert("Contract Address Copied");navigator.clipboard.writeText(contractadd)}}>
                        Copy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section