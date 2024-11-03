import React, { useState } from 'react'
import LoginForm from '../../../components/login/LoginForm'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../context';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAppContext();
  const handleLoginSuccess = (userData: any) => {
    console.log(userData);
    login(userData)
    if (!userData.isMfaActive) {
      navigate("/setup-2fa")
    } else {
      navigate("/verify-2fa")
    }
  }
  return (
    <>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </>
  )
}
