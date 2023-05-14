import styles from '@/styles/ForgotPassword.module.css'

export default function EmailSent ({ setShowLoginContainer, setShowEmailSentContainer }: any) {
    return (
        <>
         <h2>Tudo certo<span style={{ color: '#F43724' }}>;)</span></h2>
         <p>Foi enviado um e-mail para você com instruções de como redefinir a sua senha.</p>
         <button onClick={() => { setShowLoginContainer(true); setShowEmailSentContainer(false)} } className={styles.loginInfoContainerButton}>
            voltar para o login
        </button>
        </>        
    )
}