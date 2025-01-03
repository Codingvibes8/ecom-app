import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import { Button } from '../../components/ui/button'
import { MenuIcon } from 'lucide-react'
import data from '@/lib/data'
import Search from './search'

export default function Header() {
    return (
        <header className='bg-amber-600  text-white'>
            <div className='px-2'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Link
                            href='/'
                            className='bg-yellow-300 flex items-center ring-4 rounded-3xl p-2 ring-amber-200 gap-2 header-button font-extrabold text-2xl m-1 cursor-pointer'
                        >
                            <Image
                                src='/logo-maker.svg'
                                width={40}
                                height={40}
                                alt={`${APP_NAME} logo`}
                            />
                            <span className={'text-blue-900 shadow-amber-50 shadow-2xl'}>{APP_NAME}</span>
                        </Link>
                    </div>
                    <div className='hidden md:block flex-1 max-w-xl'>
                        <Search />
                    </div>
                    <Menu />
                </div>
                <div className='md:hidden block py-2'>
                    <Search />
                </div>
            </div>
            <div className='flex items-center px-3 mb-[1px]  bg-gray-800'>
                <Button
                    variant='ghost'
                    className='header-button flex items-center gap-1 text-base [&_svg]:size-6'
                >
                    <MenuIcon />
                    All
                </Button>
                <div className='flex items-center flex-wrap gap-3 overflow-hidden   max-h-[42px]'>
                    {data.headerMenus.map((menu) => (
                        <Link
                            href={menu.href}
                            key={menu.href}
                            className='header-button !p-2'
                        >
                            {menu.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}