import styles from '@/styles/HomePage.module.css'
import Image from 'next/image'

import searchIcon from '../../../assets/search-icon.png'

export default function Home() {
    return (
        <div className={styles.homeTotalContainer}>
            <div className={styles.homeHeader}>
                <Image src={searchIcon} alt='search icon' style={{ marginLeft: 38.88 }} />
                <input type="text" placeholder='Busque um agente' />
            </div>
            <div className={styles.firstRowCard}>
                <div className={styles.heroNormalCardContainer}>

                </div>
            </div>
        </div>
    )
}