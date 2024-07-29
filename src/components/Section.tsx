import Navbar from './Navbar';
import styles from './Section.module.css'
import Videoplayer from './Videoplayer'
import title from '../Images/title.png'
import video from '../Images/video.mp4'

const Section=()=>{

    return(
        <div className={styles.wrapper}>
            <div className={styles.navWrapper}><Navbar></Navbar></div>
            {/* <Videoplayer></Videoplayer> */}
            <video width="90%" height="80%" controls muted autoPlay>
                <source src={video} type="video/mp4"/>
            </video>
            <div style={{position:"absolute",top:"70%",left:"50%",transform:"translateX(-50%)"}}>
                <img
                    style={{width:"400px",height:"auto"}}
                    loading="lazy"
                    alt=""
                    src={title}
                />
            </div>
            <div style={{position:"absolute",top:"90%",left:"50%",transform:"translateX(-50%)"}}>
                
            </div>
        </div>
    )
}

export default Section