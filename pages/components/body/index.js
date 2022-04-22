import styles from './styles.module.css';
import Image from "next/image";
import profileBg from '../../assets/background.png'
import avatar from '../../assets/avatar.png'

export default function Body() {
    return (<div className={styles.body}>
        <div className={styles.hr} />
        <div className={styles.content}>
            <div>
                <Image src={profileBg} className={styles.image} layout="raw" />
                <div className={styles.avatar_bar}>
                    <Image src={avatar} className={styles.avatar} layout="raw" />
                </div>
                <div className={styles.content_name}>
                    <div style={{fontSize:'45px', fontWeight:'800'}}>User Name</div>
                    <div style={{margin:'10px 0px'}}>Created by: <span style={{color:'#f35'}}>Nina❤️</span></div>
                    <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</div>
                </div>
            </div>
        </div>
    </div>)
}

