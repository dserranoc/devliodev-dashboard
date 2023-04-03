import { FaGithub, FaEnvelope, FaLock } from 'react-icons/fa'
export default function LoginForm () {
  return (
    <form className='w-1/2 md:w-1/3'>
      <div className='mb-6'>
        <label htmlFor='email' className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Email</label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <FaEnvelope className='text-gray-500' />
          </div>
          <input type='text' id='email-address-icon' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='john.doe@johndoe.com' />
        </div>
      </div>
      <div className='mb-6'>
        <label htmlFor='password' className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Contraseña</label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <FaLock className='text-gray-500' />
          </div>
          <input type='password' id='password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='•••••••••' required />
        </div>
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
  )
}
