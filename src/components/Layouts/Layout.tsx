import Footer from '../Footer'
import Navbar from '../Navbar'

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <div className='dark:bg-gray-900'>
      <main className='flex flex-col h-screen max-w-screen-xl mx-auto'>
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>

  )
}
