import Link from "next/link";
import Dropdown from "../Dropdown";

import styles from '@/styles/ChooseAgent.module.css'

export default function ChooseAgent () {
    return (
        <>
        <h2>Selecione o seu agente mais legal<span style={{ color: '#F43724' }}>.</span></h2>
        <p>Tenha a visão completa do seu agente.</p>
        <Dropdown />
        <div className={styles.chooseAgentButtonContainer}>
            <Link href="components/MainPage">
                <button>Entrar</button>
            </Link>
        </div>
        </>
    )
}