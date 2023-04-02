import { FaGithub } from 'react-icons/fa'
export default function Footer () {
  return (
    <footer className='bg-white dark:bg-gray-900'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='flex items-center justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>Copyright © {new Date().getFullYear()} <a href='https://devlio.dev' className='hover:underline'>Devliodev</a>
          </span>
          <div className='flex space-x-6 sm:justify-center sm:mt-0'>
            <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
              <FaGithub size={20} />
              <span className='sr-only'>Cuenta de GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>

  )
}
