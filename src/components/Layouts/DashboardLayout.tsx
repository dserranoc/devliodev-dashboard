import Link from 'next/link'
import Layout from './Layout'
import { useRouter } from 'next/router'
import { RiEarthFill } from 'react-icons/ri'
import { FaProjectDiagram, FaPlus } from 'react-icons/fa'
import { BiCollection } from 'react-icons/bi'
import FloatButton from '../FloatButton'
import { useState, useEffect } from 'react'

const initialClassList = {
  publications: {
    link: '',
    icon: ''
  },
  projects: {
    link: '',
    icon: ''
  },
  portfolios: {
    link: '',
    icon: ''
  }
}

const links: { [key: string]: string } = {
  '/publications': 'publications',
  '/projects': 'projects',
  '/portfolios': 'portfolios'
}

const activeLink = 'text-devlio-purple-600 border-devlio-purple-600 dark:text-devlio-purple-500 dark:border-devlio-purple-500'
const inactiveLink = 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
const activeIcon = 'text-devlio-purple-600 dark:text-devlio-purple-500'
const inactiveIcon = 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'

const getUpdatedClassList = (activeKey: string) => {
  return Object.keys(initialClassList).reduce((acc: any, key: string) => {
    const isActive = key === activeKey
    acc[key] = {
      link: isActive ? activeLink : inactiveLink,
      icon: isActive ? activeIcon : inactiveIcon
    }
    return acc
  }, {})
}

export default function DashboardLayout ({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const [classList, setClassList] = useState(initialClassList)

  useEffect(() => {
    const path = router.asPath
    const activeKey = links[path] ?? ''

    setClassList(getUpdatedClassList(activeKey))
  }, [router.asPath])

  return (
    <Layout>
      <div className='flex flex-col grow'>
        <div className='border-b border-gray-200 dark:border-gray-700 overflow-x-auto overflow-y-hidden scrollbar-hide'>
          <div className='flex mx-auto'>
            <ul className='flex flex-row -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
              <li className='mr-2'>
                <Link href='/publications' className={`inline-flex p-4 border-b-2 rounded-t-lg group ${classList.publications?.link}`}>
                  <RiEarthFill aria-hidden='true' className={`w-5 h-5 mr-2 ${classList.publications.icon}`} />Publicaciones
                </Link>
              </li>
              <li className='mr-2'>
                <Link href='/portfolios' className={`inline-flex p-4 border-b-2 rounded-t-lg group ${classList.portfolios.link}`}>
                  <BiCollection aria-hidden='true' className={`w-5 h-5 mr-2  ${classList.portfolios.icon}`} />Portafolios
                </Link>
              </li>
              <li className='mr-2'>
                <Link href='/projects' className={`inline-flex p-4 border-b-2 rounded-t-lg group ${classList.projects.link}`}>
                  <FaProjectDiagram aria-hidden='true' className={`w-5 h-5 mr-2  ${classList.projects.icon}`} />Proyectos
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='border-gray-200 p-4 flex flex-row'>
          <div className='w-full'>
            <form className='flex items-center'>
              <label htmlFor='simple-search' className='sr-only'>Buscar</label>
              <div className='relative w-full'>
                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                  <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' /></svg>
                </div>
                <input type='text' id='simple-search' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-devlio-purple-500 focus:border-devlio-purple-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-devlio-purple-500 dark:focus:border-devlio-purple-500' placeholder='Buscar...' required />
              </div>
              <button type='submit' className='p-2.5 ml-2 text-sm font-medium text-white bg-devlio-purple-700 rounded-lg border border-devlio-purple-700 hover:bg-devlio-purple-800 focus:ring-4 focus:outline-none focus:ring-devlio-purple-300 dark:bg-devlio-purple-600 dark:hover:bg-devlio-purple-700 dark:focus:ring-devlio-purple-800'><svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /></svg></button>
            </form>
          </div>
          <div className='hidden md:block ml-3'>
            <button className='inline-flex justify-center items-center p-2.5 pl-3 pr-3.5 text-sm font-medium text-center text-white rounded-lg border border-gray-300 bg-black dark:bg-gray-500 hover:bg-gray-500 focus:ring-4 focus:ring-devlio-purple-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'><FaPlus className='mr-2' />Añadir</button>
          </div>
          <FloatButton />
        </div>
        {children}
      </div>

    </Layout>
  )
}
