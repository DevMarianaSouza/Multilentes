import React from 'react'
import styles from './styles/Section.module.css'

export default function Section(props) {
    return(
        <div className={styles.section}>
            <div className={`${styles.container} ${props.className&&props.className}`}>
                {props.children}
            </div>
        </div>
    )
}