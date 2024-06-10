import Link from "next/link"
import Menu from "./Menu"

const NavBar = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
            <div className="h-full flex items-center justify-between">
            <div className="text-2xl tracking-wider" ><Link href="/">LOGO</Link></div>
            <Menu/>
            </div>
        </div> 
    )
}

export default NavBar