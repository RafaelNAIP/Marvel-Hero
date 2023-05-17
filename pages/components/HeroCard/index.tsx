import Image from "next/image";

import styles from '@/styles/HomePage.module.css'

export default function HeroCard({ heroInfo, style = {}, handleGetHero }: {heroInfo: any, style: any, handleGetHero: Function}) {

    return (
        <button className={styles.heroNormalCardContainer} style={style} onClick={() => handleGetHero(heroInfo.id)}>
            <Image 
            loader={() => `${heroInfo.thumbnail.path}.${heroInfo.thumbnail.extension}`} 
            src={`${heroInfo.thumbnail.path}.${heroInfo.thumbnail.extension}`} 
            alt='hero icon' 
            width={84} 
            height={138}
            style={{borderRadius: 15}}
            />
            <div>
                <h2>{heroInfo.name}</h2>
                <p>{heroInfo.description}</p>
            </div>
        </button>
    )
}