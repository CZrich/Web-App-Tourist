import React from 'react'
import LoginForm from '../Components/Forms/LoginForm'

export default function LoginPage() {
  return (
    // Usamos min-h-screen y un fondo sutil para centrar el formulario perfectamente
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <LoginForm />
    </div>
  )
}