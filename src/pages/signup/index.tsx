
import Footer from '@/components/Landing/Footer'
import Navbar from '@/components/Landing/Navbar'
import RegisterForm from '@/components/Register/RegisterForm'
import RegisterLoginContainer from '@/components/RegisterLoginContainer'

export default function signup () {
  return (
    <main className='flex flex-col h-screen'>
      <Navbar />
      <RegisterLoginContainer h1Text='Crear cuenta'>
        <RegisterForm />
      </RegisterLoginContainer>
      <Footer />
    </main>
  )
}
