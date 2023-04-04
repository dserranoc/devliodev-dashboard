import ChangeTheme from '@/components/ChangeTheme'
import Logo from '@/components/Logo'
import Link from 'next/link'
import GithubAuthButton from '../GithubAuthButton'
import { useContext } from 'react'
import { UserContext } from '@/contexts/userContext'

export default function Navbar () {
  const { user } = useContext<any>(UserContext)
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href='/' className='flex items-center'>
          <Logo classList='mr-2 fill-devlio-purple-700' />
          <span className='self-center text-4xl font-bold whitespace-nowrap dark:text-white'>devlio.dev</span>
        </Link>
        <div className='flex gap-5'>
          {/* <Link href='/login' className='hidden md:block text-gray-900 dark:text-white font-medium text-md text-center self-center'>Iniciar sesión</Link>
          <Link href='/signup' className='hidden md:block text-white bg-devlio-purple-700 hover:bg-devlio-purple-800 focus:ring-4 focus:outline-none focus:ring-devlio-purple-300 font-medium rounded-lg text-md px-4 py-2 text-center mr-3 md:mr-0 dark:bg-devlio-purple-600 dark:hover:bg-devlio-purple-700 dark:focus:ring-devlio-purple-800'>Registrarse</Link> */}
          <ChangeTheme />
          {user === null && <GithubAuthButton />}
          {/* <button data-collapse-toggle='navbar-cta' type='button' className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-cta' aria-expanded='false'>
            <span className='sr-only'>Abrir menú principal</span>
            <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' /></svg>
          </button> */}
        </div>
      </div>
    </nav>
  )
}
