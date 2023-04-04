import Footer from '../Footer'
import Navbar from '../Navbar'

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col h-screen'>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
