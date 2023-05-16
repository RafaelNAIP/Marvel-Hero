import { useState } from "react";
import Image from "next/image";
import styles from '@/styles/Home.module.css'

import userAt from '../../../assets/user_at.png'
import password_eye from '../../../assets/password_eye.png'
import loginButtonIcon from '../../../assets/login_button_icon.png'
import forgotPasswordIcon from '../../../assets/forgot_password_text_icon.png'
import Link from "next/link";

export default function Login ({ setShowLoginContainer, setShowChooseAgent }: any) {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleCheckUser = () => {
        if (email === 'rafael.dias@pontua.com' && password === '123456') {
          setShowChooseAgent(true);
        } else {
          alert('Usuário ou senha incorretas')
        }
    }

    return (
        <>
        <h2>Bem vindo<span style={{ color: '#F43724' }}>.</span></h2>
          <p>informe as suas credenciais de acesso ao portal</p>
          <div className={styles.loginInputContainer}>
            <input type="text" placeholder='Informe seu usuário' onChange={(e) => setEmail(e.target.value)} />
            <Image
              src={userAt}
              alt='user at'
              style={{ position: 'absolute', marginRight: 20 }}
            />
          </div>
          <div className={styles.loginInputContainer} style={{ marginTop: 23 }}>
            <input type={showPassword ? 'text' : 'password'} placeholder='Informe sua senha' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => setShowPassword((previewState: boolean) => !previewState)}>
              <Image
                src={password_eye}
                alt='user at'
              />
            </button>
          </div>
          <button className={styles.loginInfoContainerButton} onClick={() => handleCheckUser()}>
            entrar
            <Image src={loginButtonIcon} 
            alt='login button icon' 
            style={{ marginLeft: 9  }} 
            />
          </button>
          <div className={styles.loginForgotPasswordContainer}>
            <Image 
              src={forgotPasswordIcon}
              alt='forgot password icon'
            />
              <a onClick={() => setShowLoginContainer(false)}>Esqueceu sua senha</a>
          </div>
          </>
    )
}