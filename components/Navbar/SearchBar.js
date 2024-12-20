import React from 'react'
import styles from './styles/searchBar.module.css'

export default function searchBar() {

    return null

    return(
        <div className={styles.searchBar}>
            
            <input type="search" placeholder="Pesquisar"/>
            <i className="fa-solid fa-magnifying-glass"/>
            
        </div>
    )
}