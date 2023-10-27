"use client"

import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {useTheme} from "next-themes";
import {MoonStar, Sun} from "lucide-react";
import {Image} from "@nextui-org/react";

const Header = () => {
    const {theme, setTheme} = useTheme()
    
    return (
        <Navbar isBordered={true} className="transition-all duration-500 bg-gray-200 dark:bg-gray-800">
            <NavbarBrand>
                <Image src={"/assets/images/logo.png"} width={50} height={50} />
            </NavbarBrand>

            <NavbarContent justify="center">
                <NavbarItem className={"text-green-700 dark:text-green-500 font-bold text-xl font-agbalumo"}>
                   RScores
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="" justify="end">
                {theme && theme === 'light' ? <Sun onClick={() => setTheme('dark')} /> : <MoonStar onClick={() => setTheme('light')}/>}
             </NavbarContent>
        </Navbar>
    )
}

export default Header