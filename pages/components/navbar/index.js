
import Logo from '../../assets/logo.png'
import styles from './styles.module.css';
import Image from "next/image";

export default function NavBar() {
    return (<div className={styles.nav_body}>
        <div className={styles.content}>
        <Image className={styles.logo_img} src={Logo}/>
        </div>
    </div>)
}