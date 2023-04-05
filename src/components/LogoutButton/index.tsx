import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { BiLogOut } from 'react-icons/bi'
export default function LogoutButton () {
  const supabaseClient = useSupabaseClient()
  const router = useRouter()
  const logoutClickHandler = async () => {
    try {
      router.push('/')
      await supabaseClient.auth.signOut()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <button className='flex w-full px-4 py-2 text-base font-bold text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white items-center rounded-lg' onClick={logoutClickHandler}><BiLogOut className='text-lg' /><span className='px-2 text-base'>Cerrar sesión</span></button>
  )
}
