import styles from '@/styles/HomePage.module.css'
import Image from 'next/image'

import searchIcon from '../../../assets/search-icon.png'
import iconTemplate from '../../../assets/hero-template-icon.png'
import HeroCard from '../HeroCard'
import api from '@/pages/api'
import { useEffect, useState } from 'react'


export default function Home({ handleGetHero }: { handleGetHero: Function }) {

    const [firstList, setFirstList] = useState<object[]>([])

    const handleHeroes = async () => {
        const heroList = await api.get('characters?ts=1&apikey=8e189e38b795781f597e1b3459108c9a&hash=233179203a23baa31143bb8605fa3b2d');
        
        const { results } = heroList.data.data
        console.log(results)
        setFirstList(results.slice(0, 10))
    }

    useEffect(() => {
        handleHeroes()
    }, [])

    //const apiTest = async () => {
        //const result = await api.get('characters?ts=1&apikey=8e189e38b795781f597e1b3459108c9a&hash=233179203a23baa31143bb8605fa3b2d');
        //console.log(result);
     // }
    

    return (
        <div className={styles.homeTotalContainer}>
            <div className={styles.homeHeader}>
                <Image src={searchIcon} alt='search icon' style={{ marginLeft: 38.88 }} />
                <input type="text" placeholder='Busque um agente' />
            </div>
            <div className={styles.firstRowCard}>
                {firstList ? firstList.map((heroInfo, index) => {
                    if(index === firstList.length - 2){
                        return <HeroCard heroInfo={heroInfo} key={index} style={{ gridColumnStart: 1, gridColumnEnd: 3  }} handleGetHero={handleGetHero} />
                    }
                    if(index === firstList.length - 1){
                        return <HeroCard heroInfo={heroInfo} key={index} style={{ gridColumnStart: 3, gridColumnEnd: 5  }} handleGetHero={handleGetHero} />
                    }
                    return (
                        <HeroCard heroInfo={heroInfo} key={index} style={{}} handleGetHero={handleGetHero} />
                    )
                }): []}
            </div>
            <div className={styles.paginationContainer}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
        </div>
    )
}