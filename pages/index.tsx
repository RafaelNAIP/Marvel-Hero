import { Inter } from 'next/font/google'
import { useState } from 'react';
import styles from '@/styles/Home.module.css'
import api from './api'
import Image from 'next/image';

import logoPontua from '../assets/logo_pontua_white.png'
import loginBuilding from '../assets/login_building.png'
import userAt from '../assets/user_at.png'
import password_eye from '../assets/password_eye.png'
import loginButtonIcon from '../assets/login_button_icon.png'
import forgotPasswordIcon from '../assets/forgot_password_text_icon.png'
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import EmailSent from './components/EmailSent';
import ChooseAgent from './components/ChooseAgent';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const apiTest = async () => {
    const result = await api.get('characters?ts=1&apikey=8e189e38b795781f597e1b3459108c9a&hash=233179203a23baa31143bb8605fa3b2d');
    console.log(result);
  }

  const [showLoginContainer, setShowLoginContainer] = useState(true);
  const [showEmailSentContainer, setShowEmailSentContainer] = useState(false);

  return (
    <div className={styles.loginTotalPage}>
      <Image
        src={logoPontua}
        alt='pontua logo'
        height={50}
        width={169}
        style={{ marginTop: 49, marginLeft: 106 }}
      />
      <div className={styles.loginBodyContainer}>
        <Image 
        src={loginBuilding} 
        alt='login main image' 
        width={614} 
        height={467.85} 
        />
        <div className={styles.loginInfoContainer}>
          {showLoginContainer ? 
          <ChooseAgent />
          // <Login setShowLoginContainer={setShowLoginContainer} /> 
          :
          showEmailSentContainer ?
          <EmailSent setShowLoginContainer={setShowLoginContainer} setShowEmailSentContainer={setShowEmailSentContainer} />
          :
          <ForgotPassword setShowEmailSentContainer={setShowEmailSentContainer} />
          }
        </div>
      </div>
    </div>
  )
}
