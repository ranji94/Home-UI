import React from 'react'
import styles from './header.scss'
import Home from '@material-ui/icons/Home'

export const AppHeader = () => {
    return <header>
        <div className={styles['header-container']}>
            <div className={styles['header-logo']}>
                <Home style={{ fontSize: 50 }} className={styles['home-icon']}/> 
                <span className={styles['logo-text']}>HomeUI</span> 
            </div>
            <div className={styles['header-space']}>
                HOME
            </div>
        </div>
    </header>
}