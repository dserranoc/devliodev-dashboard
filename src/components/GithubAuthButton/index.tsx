import { FaGithub } from 'react-icons/fa'
import supabase from '../../utils/supabase'

const githubClickHandler = async () => {
  try {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000'
      }
    })
  } catch (error) {
    console.error(error)
  }
}

export default function GithubAuthButton ({ displayStyle = 'hidden sm:block' }: { displayStyle?: string }) {
  return (
    <button type='button' onClick={githubClickHandler} className={`${displayStyle} text-white bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-md w-full px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800`}>
      <FaGithub size={24} className='inline-flex mr-2' />
      Iniciar sesión
    </button>
  )
}
