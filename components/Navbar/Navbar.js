import React, {useEffect, useState} from 'react'
import styles from './styles/navbar.module.css'
import menuItems from '../../lib/menuItems.json'
import Image from 'next/image'
import logo from '../../public/logo.png'
import logoBranco from '../../public/logo.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import social from '../../lib/social.json'


export default function Navbar() {

    const router = useRouter()
    let lastScroll = 0
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [navbarClasses, setNavbarClasses] = useState(styles.navbar)

    useEffect(()=>{
        setShowMobileMenu(false)
    },[router])

    // change navbar size on scroll
    function handleScroll(){

        if( window === undefined){
            return
        }

        let thisClass
        // mobile logic
        if( window.innerWidth <= 920 ){
            if( window.scrollY < lastScroll ){
                thisClass=styles.navbar
            }
            else{
                thisClass=`${styles.navbar} ${styles.scrolling}`
            }
        }
        else{
            if( window.scrollY == 0 ){
                thisClass=styles.navbar
            }
            else{
                thisClass=`${styles.navbar} ${styles.scrolling}`
            }
        }

        setNavbarClasses(thisClass)
        // navbarClasses==1?styles.navbar:`${styles.navbar} ${styles.scrolling}
        //if( thisClass == styles.navbar ){ setMobileClass('hidden') }
        lastScroll = window.scrollY
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
    },[])

    return (
    <>
        {/* MOBILE OVERLAY */}
        <nav className={`${styles.mobileMenu} ${!showMobileMenu && styles.hidden}`}>
            <div className={styles.filler} onClick={()=>setShowMobileMenu(false)}></div>
            <div className={styles.menu}>
                <div className={styles.menuItem}><Link href="/" legacyBehavior>
                    <Image
                        src={logoBranco}
                        layout="fill"
                        objectFit="contain"
                        alt="Clean Air logo branco" /></Link></div>
                {
                    menuItems.map(item => {
                        return <div className={styles.menuItem} key={item.id}>
                                    <Link href={item.url} legacyBehavior><a className={router.pathname==item.url?'link':''}>{item.text}</a></Link>
                                </div>
                    })
                }
                <div className={styles.menuItem}><a onClick={()=>setShowMobileMenu(false)}><i className="fa-solid fa-circle-chevron-left"></i> Voltar</a></div>
            </div>
        </nav>
            
        <nav className={navbarClasses}>
            <div className={styles.topBar}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link href="/" legacyBehavior><a><Image
                            priority
                            src={logo}
                            layout="fill"
                            objectFit="contain"
                            alt="Multilentes logo" /></a></Link>
                    </div>
                    
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className={styles.container}>
                    <div className={styles.menu}>
                        {
                            menuItems.map(item => {
                                return <div className={styles.menuItem} key={item.id}>
                                            <Link href={item.url} legacyBehavior><a className={router.pathname==item.url?'link':''}>{item.text}</a></Link>
                                        </div>
                            })
                        }
                    </div>
                </div>
            </div>

            <div className={`${styles.bottomBarMobile} justify-content-between`}>
                <a href={social.whatsappComercial.url} target="_blank" rel="noreferrer" className="h-100" style={{padding:'0.75rem 0'}}><img className="h-100" src="/contato/icon2.png"/></a>
                <a onClick={()=>setShowMobileMenu(!showMobileMenu)}><i className="fa-solid fa-bars"></i></a>
            </div>

        </nav>
    </>
    )
}