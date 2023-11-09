import Link from 'next/link';
import NavBar from '../components/NavBar';
import './globals.css'; 
import {exo2,roboto} from './fonts';

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${ exo2.variable } ${ roboto.variable }`}>
            <body className="bg-gray-300 flex flex-col px-4 py-2 min-h-screen">
                <header className='py-7'>
                   <NavBar />
                </header>
                <main className="grow py-3">
                    {children}
                </main>
                <footer className=" bg-gray-900 text-green-300 border-t py-7 text-center text=xs">
                    SOFTWARE ENGINEERING PROJ - TEAM 3    
                </footer>
            </body>
        </html>
    );
}

//this is a template that will be applied to all the pages