import Image from "next/image";

import styles from '@/styles/ForgotPassword.module.css'

import userAt from '../../../assets/user_at.png'
import { useState } from "react";

export default function ForgotPassword ({ setShowEmailSentContainer }: any) {

    const [canSendLink, setCanSendLink] = useState(false);

    const handleVerifyEmail = (email: string) => {
        const haveAt = email.includes('@');
        const haveDotCom = email.includes('.com');
        console.log(haveAt, haveDotCom, "email checker")
        if(haveAt && haveDotCom) {
            setCanSendLink(true)
        } else {
            setCanSendLink(false)
        }
    }

    return (
        <>
        <h2>Recuperar senha<span style={{ color: '#F43724' }}>.</span></h2>
        <p>Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.</p>
        <div className={styles.loginInputContainer} style={{ marginTop: 16 }}>
            <input type={'text'} placeholder='Informe sua senha' onChange={(e) => handleVerifyEmail(e.target.value)} />
            <Image
            src={userAt}
            alt='user at'
            style={{ position: 'absolute', marginRight: 20 }}
            />
          </div>
          <button onClick={() => setShowEmailSentContainer(true)} disabled={!canSendLink} className={styles.loginInfoContainerButton} style={{ backgroundColor: canSendLink ? '#081B4E' : '#C3C3C3', cursor: canSendLink ? 'pointer' : 'not-allowed' }}>
            enviar link
          </button>
        </>
    )
}