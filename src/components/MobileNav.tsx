"use client"

import {Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"
import path from "path"
import { link } from "fs"


const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'skill',
        path: '/skill'
    },
    {
        name: 'experience',
        path: '/experience'
    },
    {
        name: 'project',
        path: '/project'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]


const MobileNav = () => {
  const pathname = usePathname()  
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <div className="text-[32px] text-accent">
                <CiMenuFries />
            </div>
        </SheetTrigger>
        <SheetContent className="flex flex-col">

            {/* logo*/}
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        nsyaghis<span className="text-accent">.</span>
                    </h1>
                </Link>
            </div>
            {/* nav*/}
            <nav className="flex flex-col justify-center items-center gap-7">
                {links.map((link, index) => {
                    return (
                        <Link 
                            href={link.path} 
                            key={index}
                            className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""} text-xl capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav