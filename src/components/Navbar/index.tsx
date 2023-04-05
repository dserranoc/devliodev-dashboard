import ChangeTheme from '@/components/ChangeTheme'
import Logo from '@/components/Logo'
import Link from 'next/link'
import GithubAuthButton from '../GithubAuthButton'
import { useSession, useUser } from '@supabase/auth-helpers-react'
import Avatar from '../Avatar'

export default function Navbar () {
  const session = useSession()
  const user = useUser()

  return (
    <nav className='border-gray-200 '>
      <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href='/' className='flex items-center'>
          <Logo classList='mr-2 fill-devlio-purple-700' />
          <span className='self-center text-4xl font-bold whitespace-nowrap dark:text-white'>devlio.dev</span>
        </Link>
        <button data-collapse-toggle='navbar-default' type='button' className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-default' aria-expanded='false'>
          <span className='sr-only'>Abrir menú</span>
          <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' /></svg>
        </button>

        <div className='hidden w-full md:flex md:w-auto gap-5'>
          <ChangeTheme />
          {session === null && <GithubAuthButton />}
          {user !== null && (
            <>
              <span className='font-bold self-center'>¡Hola, {user.user_metadata.user_name}!</span>
              <Avatar src={user?.user_metadata.avatar_url} alt='Avatar del usuario' />
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
