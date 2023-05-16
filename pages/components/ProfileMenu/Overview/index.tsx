import Image from "next/image";

import styles from '@/styles/Profile.module.css'

import cyclops from '../../../../assets/cyclops.png'

export default function Overview({ heroInfoListTotal }: {heroInfoListTotal: any}) {

    console.log(heroInfoListTotal, 'ALLO')

    return (
        <div className={styles.profileOverviewContainer}>
            <Image loader={() => `${heroInfoListTotal.data.results[0].thumbnail.path}.${heroInfoListTotal.data.results[0].thumbnail.extension}`} src={cyclops} alt='profile hero icon' style={{ height: 92, width: 92, marginLeft: 32, borderRadius: 50 }} />
            <div>
                <h2>{heroInfoListTotal.data.results[0].name}</h2>
                <p>{heroInfoListTotal.data.results[0].description}</p>
            </div>
        </div>
    )
}