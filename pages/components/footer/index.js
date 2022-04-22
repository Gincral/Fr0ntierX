import Logo from '../../assets/logo-grey.png'
import Image from "next/image";
import styles from './styles.module.css';

export default function Footer() {

    return (<div className={styles.footer_body}>
        <div className={styles.content}>
            <Image className={styles.logo_img} src={Logo} />
        </div>
    </div>)
}