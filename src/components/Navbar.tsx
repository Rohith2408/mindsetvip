import styles from './Navbar.module.css' 
import tw_icon from '../Images/tw.png'
import tg_icon from '../Images/tg.png'
import nav3_icon from '../Images/nav3.jpeg'
import bg from '../Images/bg.jpeg'

const Navbar=()=>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.navItemWrapper}><img className={styles.navItem} src={tw_icon}></img></div>
            <div className={styles.navItemWrapper}><img className={styles.navItem} src={tg_icon}></img></div>
            <div className={styles.navItemWrapper}><img className={styles.navItem} src={nav3_icon}></img></div>
        </div>
    )
}

export default Navbar