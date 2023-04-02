export default function Hero () {
  return (
    <header className='bg-white dark:bg-gray-900 flex flex-auto items-center'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16'>
        <h1 className='mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl lg:text-8xl dark:text-white'>Es el momento de dar visibilidad a tu <span className='bg-gradient-to-r from-devlio-purple-500 via-devlio-purple-600 to-devlio-purple-700 00 inline-block text-transparent bg-clip-text'>software</span></h1>
        <p className='mb-8 text-xl font-normal text-gray-500 lg:text-2xl sm:px-16 lg:px-48 dark:text-gray-400'>devlio.dev es una plataforma donde puedes mostrar al mundo los proyectos software que hayas realizado.</p>
        <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
          <a href='#' className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-devlio-purple-700 hover:bg-devlio-purple-800 focus:ring-4 focus:ring-devlio-purple-300 dark:focus:ring-devlio-purple-900'>
            Registrarse
            <svg aria-hidden='true' className='ml-2 -mr-1 w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clip-rule='evenodd' /></svg>
          </a>
          <a href='#' className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'>
            Leer más
          </a>
        </div>
      </div>
    </header>
  )
}
