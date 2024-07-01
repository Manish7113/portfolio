'use client'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Navbar() {

    const [themeLoaded, setThemeLoaded] = useState(false);
    const [mode, setMode] = useState('light')
    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme) {
            document.querySelector('body').setAttribute('theme', theme);
            console.log(theme)
            setMode(theme)

        }
        setThemeLoaded(true);

    }, [])
    const handleMode = (mode = 'light') => {
        setMode(mode)
        document.querySelector('body').setAttribute('theme', mode);
        localStorage.setItem('theme', mode)

    }

    if (!themeLoaded) {
        return null;
    }
    return (
        <header>
            <nav className="d-flex justify-content-between align-items-center flex-wrap p-0 m-0 header pt-3 pb-3 ">
                <aside>
                    <h4 className='m-0 p-0 px-5' >Logo</h4>
                </aside>
                <div className="d-flex justify-content-between align-items-center gap-5 navbar fs-lgg cur-pointer fw-500 px-5">
                    <Link href='/' className='p-0 m-0 LinkHeading'>Resume</Link>
                   
                    <div>
                        {
                            mode === 'light' ? <button onClick={() => {
                                handleMode('dark')
                            }} >
                                <Icon icon="ph:moon-bold" className='m-0 p-0 ' />
                            </button> : <button onClick={() => {
                                handleMode('light')
                            }} >
                                <Icon icon="uil:sun" className='m-0 p-0 ' />
                            </button>
                        }
                    </div>

                </div>

            </nav>
        </header>
    )
}