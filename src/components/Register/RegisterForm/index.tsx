import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
export default function RegisterForm () {
  return (
    <form className='w-3/4 md:w-4/5 md:max-w-xl'>
      <div>
        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div>
            <label htmlFor='first_name' className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Nombre</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <FaUser className='text-gray-500' />
              </div>
              <input type='text' id='first_name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='John' required />
            </div>
          </div>
          <div>
            <label htmlFor='last_name' className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Apellidos</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <FaUser className='text-gray-500' />
              </div>
              <input type='text' id='last_name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Doe' required />
            </div>
          </div>
        </div>
        <div className='mb-6'>
          <label htmlFor='email' className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Email</label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <FaEnvelope className='text-gray-500' />
            </div>
            <input type='text' id='email-address-icon' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='john.doe@johndoe.com' />
          </div>
        </div>
        <div className='grid gap-6 md:grid-cols-2 mb-6'>
          <div>
            <label htmlFor='password' className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Contraseña</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <FaLock className='text-gray-500' />
              </div>
              <input type='password' id='password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='•••••••••' required />
            </div>
          </div>
          <div className='mb-2'>
            <label htmlFor='confirm_password' className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Confirmación de contraseña</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <FaLock className='text-gray-500' />
              </div>
              <input type='password' id='confirm_password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='•••••••••' required />
            </div>
          </div>
        </div>
        <div className='flex items-start mb-6'>
          <div className='flex items-center h-5'>
            <input id='terms' type='checkbox' className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-devlio-purple-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-devlio-purple-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 accent-devlio-purple-600' required />
          </div>
          <label htmlFor='terms' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Estoy de acuerdo con los <a href='#' className='text-devlio-purple-600 hover:underline dark:text-devlio-purple-500'>terminos y condiciones</a>.</label>
        </div>
        <button type='submit' className='text-white bg-devlio-purple-700 hover:bg-devlio-purple-800 focus:ring-4 focus:outline-none focus:ring-devlio-purple-300 font-medium rounded-lg text-md w-full px-5 py-2.5 text-center dark:bg-devlio-purple-600 dark:hover:bg-devlio-purple-700 dark:focus:ring-devlio-purple-800'>Registrarse</button>
      </div>
    </form>
  )
}
