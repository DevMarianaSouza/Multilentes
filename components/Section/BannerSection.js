import React from 'react'
import styles from './styles/BannerSection.module.css'
import Image from 'next/image'
import banner from '../../public/homeBanner.png'
import bannerMobile from '../../public/homeBannerMobile.png'

export default function BannerSection() {
    return(
        <div className={styles.bannerSection}>
            {/* <Image
                src={banner}
                className={styles.banner}
                layout="fill"
                objectFit="cover"
                alt="Clean Air banner" />

            <Image
                src={bannerMobile}
                className={styles.bannerMobile}
                layout="fill"
                objectFit="cover"
                alt="Clean Air banner" /> */}
        </div>
    )
}