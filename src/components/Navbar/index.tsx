import ChangeTheme from '@/components/ChangeTheme'
import Logo from '@/components/Logo'
import Link from 'next/link'
import GithubAuthButton from '../GithubAuthButton'

export default function Navbar () {
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href='/' className='flex items-center'>
          <Logo classList='mr-2 fill-devlio-purple-700' />
          <span className='self-center text-4xl font-bold whitespace-nowrap dark:text-white'>devlio.dev</span>
        </Link>
        <div className='flex gap-5'>
          <ChangeTheme />
          <GithubAuthButton />
        </div>
      </div>
    </nav>
  )
}
