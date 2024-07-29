import Navbar from './Navbar';
import styles from './Section.module.css'
import Videoplayer from './Videoplayer'
import title from '../Images/title.png'
import video from '../Images/video.mp4'
import { useRef } from 'react';

const Section=()=>{

    const contractadd=useRef("").current

    return(
        <div className={styles.wrapper}>
            <div className={styles.navWrapper}><Navbar></Navbar></div>
            {/* <Videoplayer></Videoplayer> */}
            <video width="90%" height="80%" controls={false} muted autoPlay>
                <source src={video} type="video/mp4"/>
            </video>
            <div style={{position:"absolute",top:"65%",left:"50%",transform:"translateX(-50%)"}}>
                <img
                    style={{width:"300px",height:"auto"}}
                    loading="lazy"
                    alt=""
                    src={title}
                />
                <div style={{width:"500px",height:"100px",borderRadius:"150px",backgroundColor:'rgba(255,255,255,0.5)',display:"flex",flexDirection:'row',gap:"10px",justifyContent:"center",alignItems:"center"}}>
                    <p>Contract address {contractadd}</p>
                    <button onClick={()=>{alert("Contract Address Copied");navigator.clipboard.writeText(contractadd)}}>
                        {/* <img style={{height:"auto",width:"100%"}} src="/icon-2.svg"></img> */}
                        Copy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section