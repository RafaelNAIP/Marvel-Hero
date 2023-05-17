import styles from '@/styles/Profile.module.css'
import { useState } from 'react';


import InfoListContainer from '../ProfileMenu/InfoListContainer';
import Overview from '../ProfileMenu/Overview';

const teamList = ['Avengers', 'Defenders', 'Fantastic Four', 'Future Foudation']
const powersList = ['Agility', 'Genius', 'Genius-level intellect', 'Precognitive']
const speciesList = ['Mutate']
const authors = ['Stan lee', 'Steve Ditko']

export default function Profile({heroInfoListTotal}: {heroInfoListTotal: object[]}) {

    const [heroInfoScreen, setHeroInfoScreen] = useState('overview')
    const [heroInfoList, setHeroInfoList] = useState<string[]>(['']);
    
    const handleList = () => {
        switch (heroInfoScreen) {
            case 'teams': 
        }
    }

    return (
        <div className={styles.profileTotalContainer}>
            <div className={styles.profileHeader}>
            </div>
            <div className={styles.profileBodyContainer}>
                <h2>Perfil <span style={{ color: '#F43724' }}>/</span> <span style={{ fontWeight: 500 }}>A-bomb</span></h2>
                <div className={styles.profileMenuContainer}>
                    <a 
                    style={{ 
                        color: heroInfoScreen === 'overview' ?  '#081B4E': '#777777', 
                        borderBottom: heroInfoScreen === 'overview' ? '2px solid #081B4E' : 'none'
                    }}
                    onClick={() => setHeroInfoScreen('overview')}
                    >Visão Geral</a>
                    <a style={{ 
                        color: heroInfoScreen === 'teams' ?  '#081B4E': '#777777', 
                        borderBottom: heroInfoScreen === 'teams' ? '2px solid #081B4E' : 'none'
                        }}
                        onClick={() => {setHeroInfoScreen('teams'), setHeroInfoList(teamList)}}
                        >Teams</a>
                    <a style={{ 
                        color: heroInfoScreen === 'powers' ?  '#081B4E': '#777777', 
                        borderBottom: heroInfoScreen === 'powers' ? '2px solid #081B4E' : 'none'
                        }}
                        onClick={() => {setHeroInfoScreen('powers'), setHeroInfoList(powersList)}}
                        >Powers</a>
                    <a style={{ color: heroInfoScreen === 'species' ?  '#081B4E': '#777777', 
                    borderBottom: heroInfoScreen === 'species' ? '2px solid #081B4E' : 'none'
                    }}
                    onClick={() => {setHeroInfoScreen('species'), setHeroInfoList(speciesList)}}
                    >Species</a>
                    <a style={{ 
                        color: heroInfoScreen === 'authors' ?  '#081B4E': '#777777', 
                        borderBottom: heroInfoScreen === 'authors' ? '2px solid #081B4E' : 'none'
                        }}
                        onClick={() => {setHeroInfoScreen('authors'), setHeroInfoList(authors)}}
                        >Authors</a>
                </div>
                {heroInfoScreen !== 'overview' ? 
                <InfoListContainer infoList={heroInfoList} />
                :
                <Overview heroInfoListTotal={heroInfoListTotal} />
                }
            </div>
        </div>
    );
}