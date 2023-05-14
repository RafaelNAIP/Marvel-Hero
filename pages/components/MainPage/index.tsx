import styles from '@/styles/HomeApp.module.css'
import Image from 'next/image'
import { useState } from 'react'

import pontuaBlueLogo from '../../../assets/pontua-blue-logo.png'
import homeLogo from '../../../assets/home.png'
import homeLogoOrange from '../../../assets/home-orange.png'
import profileLogo from '../../../assets/profile.png'
import profileLogoOrange from '../../../assets/profile-orange.png'
import logoutIcon from '../../../assets/logout-sidebar-icon.png'
import Home from '../Home'


export default function MainPage() {

    const [selectedButton, setSelectedButton] = useState('Home')

    return (
        <div className={styles.mainPageTotalContainer}>
            <div className={styles.sidebarTotalContainer}>
            <div className={styles.logoIconContainer}>
                <Image 
                src={pontuaBlueLogo}
                alt="pontua blue logo" 
                style={{
                    marginLeft: 26.22,
                    marginTop: 20,
                }}
                />
            </div>
            <div className={styles.sidebarHomeAndProfileContainer}>
                <button onClick={() => setSelectedButton('Home')}>
                    <Image 
                    src={selectedButton === 'Home' ? homeLogoOrange : homeLogo}
                    alt="home logo" 
                    />
                    <p style={{ color: selectedButton === 'Home' ? '#F21A05' : '#000000' }}>Home</p>
                </button>
                <button onClick={() => setSelectedButton('Profile')}>
                    <Image 
                    src={selectedButton === 'Profile' ? profileLogoOrange : profileLogo}
                    alt="profile logo" 
                    />
                    <p style={{ color: selectedButton === 'Profile' ? '#F21A05' : '#000000' }}>Perfil</p>
                </button>
            </div>
            <button className={styles.logoutButton}>
                    <Image 
                    src={logoutIcon}
                    alt="logout icon" 
                    />
                    <p>Sair</p>
                </button>
            </div>
            <Home />
        </div>
    )
}