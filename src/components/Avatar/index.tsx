import LogoutButton from '../LogoutButton'
import { useEffect, useState, useRef } from 'react'

export default function Avatar ({ src, alt }: { src: string, alt: string }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const menuDropdownRef = useRef<HTMLDivElement>(null)
  const avatarRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (dropdownOpen && (menuDropdownRef.current != null) && !menuDropdownRef.current.contains(e.target) && avatarRef.current !== null && !avatarRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [dropdownOpen])
  return (
    <div>
      <img id='avatarButton' ref={avatarRef} className='w-14 h-14 rounded-full cursor-pointer' src={src} alt={alt} onClick={() => setDropdownOpen(!dropdownOpen)} />
      {/* Dropdown menu */}
      <div id='userDropdown' ref={menuDropdownRef} className={`z-10 ${!dropdownOpen ? 'hidden' : 'active'} absolute bg-gray-100 divide-y rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 `}>
        <LogoutButton />
      </div>
    </div>

  )
}
