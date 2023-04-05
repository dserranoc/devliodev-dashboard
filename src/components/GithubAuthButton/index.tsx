import { FaGithub } from 'react-icons/fa'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function GithubAuthButton ({ displayStyle = 'hidden sm:inline-flex' }: { displayStyle?: string }) {
  const supabaseClient = useSupabaseClient()

  const githubClickHandler = async () => {
    try {
      await supabaseClient.auth.signInWithOAuth({ provider: 'github', options: { redirectTo: 'http://localhost:3000/publications' } })
    } catch (error) {
      console.error(error)
    }
  }

  return (

    <button type='button' onClick={githubClickHandler} className={`${displayStyle} text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-700 dark:focus:ring-gray-500 dark:hover:bg-gray-600`}>
      <FaGithub className='mr-2' size={18} />
      Iniciar sesión
    </button>

  )
}
