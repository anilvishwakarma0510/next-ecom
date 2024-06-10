"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {
    const [open, setOpen] = useState(false)
    console.log(open, "open")
    return (
        <div className=''>
            <Image 
            className="cursor-pointer"
            width={28}
            height={28}
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)} />

            {
                open && <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                    <Link href="/">Home</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Cart(1)</Link>
                    <Link href="/">Logout</Link>
                </div>
            }
        </div>
    )
}

export default Menu