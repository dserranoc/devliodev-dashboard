import Link from 'next/link'
import GithubAuthButton from '../GithubAuthButton'
import { useSession } from '@supabase/auth-helpers-react'
export default function Hero () {
  const session = useSession()
  return (
    <header className='flex flex-auto items-center'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16'>
        <div
          className='-z-10 hidden sm:block absolute inset-0 max-w-lg m-auto h-[15rem] sm:h-72 sm:max-w-7xl' style={{
            background: 'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
            filter: 'blur(100px)'
          }}
        />
        <h1 className='mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl lg:text-7xl dark:text-white px-10 md:px-20'>Es el momento de dar visibilidad a tu <span className='z-20 bg-gradient-to-r from-devlio-purple-400 via-devlio-purple-500 to-devlio-purple-600 inline-block text-transparent bg-clip-text'>software</span></h1>
        <p className='mb-8 text-xl font-normal text-gray-500 lg:text-2xl sm:px-16 lg:px-48 dark:text-gray-400'>devlio.dev es una plataforma donde puedes mostrar al mundo los proyectos software que hayas realizado.</p>
        <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
          {session === null ? <GithubAuthButton displayStyle='block sm:hidden' /> : <Link href='/dashboard' className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-300 bg-devlio-purple-500 hover:bg-devlio-purple-600 focus:ring-4 focus:ring-devlio-purple-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'>Acceder a la app</Link>}
          <Link href='#' className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 bg-white/50 hover:bg-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'>
            Leer más
          </Link>
        </div>
      </div>
    </header>
  )
}
