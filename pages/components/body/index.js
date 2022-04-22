import styles from './styles.module.css';
import Image from "next/image";
import profileBg from '../../assets/background.png'
import avatar from '../../assets/avatar.png'
import Chevron from '../../assets/chevron.svg'
import { useState } from 'react';

export default function Body() {

    function Button(props) {
        return (<div className={styles.button} style={props.style}>{props.children} </div>)
    }

    function ExpandPanel(props) {
        const [expand, setExpand] = useState(props.open)
        return (<div className={styles.panel}>
            <div className={styles.panel_title} onClick={() => { setExpand(!expand) }}>
                {props.title}
                <Image src={Chevron} className={expand ? styles.chevron_open : styles.chevron_close} layout="raw"/>
            </div>
            {expand && <div className={styles.panel_children}>
                {props.children}
            </div>}
        </div>)
    }

    function CustomButton(props) {
        return(
        <Button style={{ background: "rgba(13, 13, 13, 0.5)", textAlign:'center', width:'100%' }}>
            <div style={{opacity:'0.5'}}>{props.line1}</div>
            <div style={{fontSize:'16px', fontWeight:'bold'}}>{props.line2}</div>
            <div style={{opacity:'0.5'}}>{props.line3}</div>
        </Button>)
    }

    return (<div className={styles.body}>
        <div className={styles.hr} />
        <div className={styles.content}>
            <Image src={profileBg} className={styles.image} layout="raw" />
            <div className={styles.avatar_bar}>
                <Image src={avatar} className={styles.avatar} layout="raw" />
            </div>
            <div className={styles.content_name}>
                <div style={{ fontSize: '45px', fontWeight: '800' }}>User Name</div>
                <div style={{ margin: '10px 0px', fontWeight: '300' }}>Created by: <span style={{ color: '#f35' }}>Nina❤️</span></div>
                <div style={{ fontWeight: '300' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</div>
            </div>

            <div className={styles.button_list}>
                <Button style={{ background: "rgba(13, 13, 13, 0.5)" }}>😀 Lorem ipsum</Button>
                <Button style={{ background: "rgba(13, 13, 13, 0.8)" }}>😍 Lorem ipsum</Button>
                <Button style={{ background: "rgba(13, 13, 13, 0.5)" }}>🎃 Lorem ipsum</Button>
            </div>

            <div className={styles.panel_gather}>
                <ExpandPanel title={"😀 Lorem ipsum"} open>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                    <div className={styles.contact_info}>
                        <a href="https://www.google.ca" target="_blank" style={{ color: '#f35' }}>🔗 Share</a>
                        <a href="https://www.google.ca" target="_blank" style={{ color: '#f35' }}>📱 Discord</a>
                        <a href="https://www.google.ca" target="_blank" style={{ color: '#f35' }}>🔗 Instergram</a>
                        <a href="https://www.google.ca" target="_blank">🐤 Twitter</a>
                    </div>
                </ExpandPanel>
                <div>
                    <ExpandPanel title={"😀 Lorem ipsum?? "} open>
                        <div className={styles.panel_2_grid}> 
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />

                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />

                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />

                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />

                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        </div>
                    </ExpandPanel>

                    <ExpandPanel title={"😀 Lorem ipsum?? "}>
                        <div className={styles.panel_2_grid}> 
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />

                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />

                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />

                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />

                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        <CustomButton line1="Accessories & Ears" line2="Lorem ipsum" line3="9%" />
                        </div>
                    </ExpandPanel>
                </div>
            </div>
        </div>
    </div>)
}



