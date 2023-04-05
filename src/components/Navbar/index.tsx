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
    <nav className='border-gray-200'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href='/' className='flex items-center'>
          <Logo classList='mr-2 fill-devlio-purple-700' />
          <span className='self-center text-4xl font-bold whitespace-nowrap dark:text-white'>devlio.dev</span>
        </Link>
        <div className='flex gap-5'>
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
