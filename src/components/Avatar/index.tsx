import LogoutButton from '../LogoutButton'
import { useState } from 'react'

export default function Avatar ({ src, alt }: { src: string, alt: string }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  return (
    <div>
      <img id='avatarButton' className='w-14 h-14 rounded-full cursor-pointer' src={src} alt={alt} onClick={() => setDropdownOpen(!dropdownOpen)} />
      {/* Dropdown menu */}
      <div id='userDropdown' className={`z-10 ${!dropdownOpen ? 'hidden' : ''} absolute bg-gray-100 divide-y rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
        <LogoutButton />
      </div>
    </div>

  )
}
