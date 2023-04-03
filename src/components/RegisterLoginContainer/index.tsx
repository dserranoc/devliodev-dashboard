export default function RegisterLoginContainer ({ children, h1Text }: { children: React.ReactNode, h1Text: string }) {
  return (
    <>
      <hr className='dark:border-gray-800' />
      <div className='flex flex-col place-content-center flex-1 items-center gap-10 dark:bg-gray-900'>
        <h1 className='font-bold text-5xl dark:text-white mt-6'>{h1Text}</h1>
        {children}
      </div>
    </>
  )
}
