import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
export default function Footer () {
  return (
    <footer className='mx-auto w-full p-4 py-6 lg:py-8'>
      <hr className='mb-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-8' />
      <div className='flex items-center justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>Copyright © {new Date().getFullYear()} <a href='https://devlio.dev' className='hover:underline'>Devliodev</a>
        </span>
        <div className='flex space-x-6 sm:justify-center sm:mt-0'>
          <Link href='https://github.com/dserranoc' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
            <FaGithub size={20} />
            <span className='sr-only'>Cuenta de GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
