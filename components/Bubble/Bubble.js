import React from 'react'
import styles from './styles/Bubble.module.css'

export default function Bubble(props) {

    const icon = props.icon || ''
    const title = props.title || ''
    const text = props.children || ''

    return(
        <div className={styles.bubble}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.title}>{title}</div>
            <div className={`${styles.text} ${props.textClass}`}>{text}</div>
        </div>
    )
}