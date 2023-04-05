export default function FloatButton () {
  return (
    <div className='fixed md:hidden right-6 bottom-6'>
      <button type='button' aria-controls='speed-dial-menu-default' aria-expanded='false' className='flex items-center justify-center text-white bg-devlio-purple-700 rounded-full w-14 h-14 hover:bg-devlio-purple-800 dark:bg-devlio-purple-600 dark:hover:bg-devlio-purple-700 focus:outline-none'>
        <svg aria-hidden='true' className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' /></svg>
        <span className='sr-only'>Añadir</span>
      </button>
    </div>
  )
}
