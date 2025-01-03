'use client'

import { ChevronUp } from 'lucide-react'
import { Button } from '../../components/ui/button'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

export default function Footer() {
    return (
        <footer className='bg-amber-600  text-white underline-link'>
            <div className='w-full'>
                <Button
                    variant='ghost'
                    className='bg-gray-800 w-full  rounded-none '
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <ChevronUp className='mr-2 h-4 w-4' />
                    Back to top
                </Button>
            </div>
            <div className='p-4'>
                <div className='flex justify-center  gap-3 text-sm'>
                    <Link href='/(home)/page.tsx'>Conditions of Use</Link>
                    <Link href='/(home)/page.tsx/'> Privacy Notice</Link>
                    <Link href='/(home)/page.tsx/'>Help</Link>
                </div>
                <div className='flex justify-center text-sm'>
                    <p> © 2000-2024, {APP_NAME}, Inc. or its affiliates</p>
                </div>
                <div className='mt-8 flex justify-center text-sm text-gray-400'>
                    1237, May Street, Mytown, London, NW3 6TY | +44 (123) 456-7890
                </div>
            </div>
        </footer>
    )
}