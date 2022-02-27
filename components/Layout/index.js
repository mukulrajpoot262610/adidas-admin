import React from 'react'
import Navbar from './Navbar'
import { useRouter } from 'next/router'
import Sidebar from './Sidebar'
import Head from 'next/head'

const Layout = ({ children }) => {

    const router = useRouter()
    const check = router.pathname === '/'
    console.log(check)

    return (
        <>
            {
                <div className="flex min-h-screen">
                    {
                        check ? "" : <div className='w-2/12'>
                            <Sidebar />
                        </div>
                    }
                    <div className={`w-full ${check ? "w-full" : "w-10/12"}`}>
                        {children}
                    </div>
                </div>
            }
        </>

    )
}

export default Layout
