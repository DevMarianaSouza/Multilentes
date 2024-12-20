import React from 'react'
import styles from './styles/BannerSectionTest.module.css'
import Image from 'next/image'
import banner from '../../public/homeBanner.png'

export default function BannerSection(props) {

    const img = props.img || ''
    const height = props.height || '70vh'

    return(
        <div className={styles.bannerSection} style={{height: height}}>
            <Image
                src={img || banner}
                className={styles.banner}
                layout="fill"
                alt="Clean Air banner" />
        </div>
    )
}