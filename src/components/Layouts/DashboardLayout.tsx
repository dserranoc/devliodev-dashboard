import Link from 'next/link'
import Layout from './Layout'
import { useRouter } from 'next/router'
import { RiEarthFill } from 'react-icons/ri'
import { FaProjectDiagram } from 'react-icons/fa'
import { BiCollection } from 'react-icons/bi'

export default function DashboardLayout ({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <Layout>
      <div className='border-gray-200'>
        <div className='flex mx-auto p-4'>
          <ul className='flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
            <li className='mr-2'>
              <Link href='/dashboard' className={`inline-flex p-4 border-b-2 rounded-t-lg group ${router.asPath === '/dashboard' ? 'text-devlio-purple-600 border-devlio-purple-600 dark:text-devlio-purple-500 dark:border-devlio-purple-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
                <RiEarthFill aria-hidden='true' className={`w-5 h-5 mr-2  ${router.asPath === '/dashboard' ? 'text-devlio-purple-600 dark:text-devlio-purple-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`} />Publicaciones
              </Link>
            </li>
            <li className='mr-2'>
              <Link href='/portfolios' className={`inline-flex p-4 border-b-2 rounded-t-lg group ${router.asPath === '/portfolios' ? 'text-devlio-purple-600 border-devlio-purple-600 dark:text-devlio-purple-500 dark:border-devlio-purple-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
                <BiCollection aria-hidden='true' className={`w-5 h-5 mr-2  ${router.asPath === '/portfolios' ? 'text-devlio-purple-600 dark:text-devlio-purple-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`} />Portafolios
              </Link>
            </li>
            <li className='mr-2'>
              <Link href='/projects' className={`inline-flex p-4 border-b-2 rounded-t-lg group ${router.asPath === '/projects' ? 'text-devlio-purple-600 border-devlio-purple-600 dark:text-devlio-purple-500 dark:border-devlio-purple-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
                <FaProjectDiagram aria-hidden='true' className={`w-5 h-5 mr-2  ${router.asPath === '/projects' ? 'text-devlio-purple-600 dark:text-devlio-purple-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`} />Proyectos
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='border-gray-200 flex grow '>
        <div className='max-w-screen-xl flex p-4'>{children}</div>
      </div>
    </Layout>
  )
}
