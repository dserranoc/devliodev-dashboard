import { FaGithub } from 'react-icons/fa'
import Footer from '@/components/Landing/Footer'
import Navbar from '@/components/Landing/Navbar'

export default function login () {
  return (
    <main className='flex flex-col h-screen'>
      <Navbar />
      <hr className='dark:border-gray-800' />
      <div className='flex flex-col place-content-center flex-1 items-center gap-10 dark:bg-gray-900'>
        <h1 className='font-bold text-5xl dark:text-white mt-6'>Iniciar sesión</h1>
        <form className='w-1/2 md:w-1/3'>
          <div className='mb-6'>
            <label htmlFor='email' className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Tu email</label>
            <input type='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-devlio-purple-500 focus:border-devlio-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-devlio-purple-500 dark:focus:border-devlio-purple-500' placeholder='name@devlio.dev' required />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Tu contraseña</label>
            <input type='password' id='password' className='bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-devlio-purple-500 focus:border-devlio-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-devlio-purple-500 dark:focus:border-devlio-purple-500' required />
          </div>
          <div className='flex items-center mb-6'>
            <input id='remember' type='checkbox' className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-devlio-purple-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-devlio-purple-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 accent-devlio-purple-600' required />
            <label htmlFor='remember' className='ml-2 text-md font-medium text-gray-900 dark:text-gray-300'>Recuérdame</label>
          </div>
          <div className='flex flex-col gap-2'>
            <button type='submit' className='text-white bg-devlio-purple-700 hover:bg-devlio-purple-800 focus:ring-4 focus:outline-none focus:ring-devlio-purple-300 font-medium rounded-lg text-md w-full px-5 py-2.5 text-center dark:bg-devlio-purple-600 dark:hover:bg-devlio-purple-700 dark:focus:ring-devlio-purple-800'>Iniciar sesión</button>
            <button type='button' className='text-white bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-md w-full px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800'>
              <FaGithub size={24} className='inline-flex mr-2' />
              Continuar con GitHub
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  )
}
