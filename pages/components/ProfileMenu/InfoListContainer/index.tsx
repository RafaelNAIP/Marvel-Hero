import styles from '@/styles/Profile.module.css'


export default function InfoListContainer({infoList}: {infoList: string[]}) {
    return (
        <div className={styles.listOfInfos}>
            {infoList.map((infos, index) => {
                return (
                <ul key={index}>
                    <li>{infos}</li>
                </ul>
                )
            })}
        </div>
    )
}