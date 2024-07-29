import styles from './Navbar.module.css' 
import tw_icon from '../Images/tw.png'
import tg_icon from '../Images/tg.png'
import nav3_icon from '../Images/nav3.png'
import dex from '../Images/dex.png'
import bg from '../Images/bg.jpeg'

const Navbar=()=>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.navItemWrapper}>
                <a href="https://x.com/mindsetsolana?s=21"><img className={styles.navItem} src={tw_icon}></img></a>
            </div>
            <div className={styles.navItemWrapper}>
                <a href="https://t.me/mindsetsol"><img className={styles.navItem} src={tg_icon}></img></a>
            </div>
            <div className={styles.navItemWrapper}>
                <a ><img className={styles.navItem} src={nav3_icon}></img></a>
            </div>
            <div className={styles.navItemWrapper}><img className={styles.navItem} src={dex}></img></div>
        </div>
    )
}

export default Navbar