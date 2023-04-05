import { FaPlus } from 'react-icons/fa'

export default function Card ({ children }: { children: JSX.Element }) {
  return (
    <div className='flex flex-col rounded-md border border-gray-200 p-10 justify-center items-center shadow-md dark:shadow-none shadow-gray-200'>
      {/* Placeholder */}
      <FaPlus className='text-8xl text-gray-200' />
      <p className='text-gray-500'>Tarjeta</p>
      {/* End placeholder */}
      {children}
    </div>
  )
}
