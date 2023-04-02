import { useTheme } from 'next-themes'
import { BiMoon, BiSun } from 'react-icons/bi'
export default function ChangeTheme () {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}
      className=''
    >
      {theme === 'dark' ? <BiSun size={20} /> : <BiMoon size={20} />}
    </button>
  )
}
