
import Footer from '@/components/Landing/Footer'
import Navbar from '@/components/Landing/Navbar'
import LoginForm from '@/components/Login/LoginForm'
import RegisterLoginContainer from '@/components/RegisterLoginContainer'

export default function login () {
  return (
    <main className='flex flex-col h-screen'>
      <Navbar />
      <RegisterLoginContainer h1Text='Iniciar sesión'>
        <LoginForm />
      </RegisterLoginContainer>
      <Footer />
    </main>
  )
}
