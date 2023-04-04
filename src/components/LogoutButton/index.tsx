import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
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
    <button onClick={logoutClickHandler}>Cerrar sesión</button>
  )
}
