'use client';

// Nav.navbar.js
import Link from 'next/link'
import Image from 'next/image'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {ModeToggle} from "@/components/ThemeToggle";

type blogTypes = {
    collision: boolean;
}

const navbar = () => {
    return (
        <NavigationMenu className="z-10 flex max-w-full flex-1 items-center justify-end bg-gray-800 text-white shadow-lg p-4 sticky top-0">
            <div className="mr-auto flex justify-center items-center mb-4">
                <Link href="/">
                </Link>
            </div>
            <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem className="hover:bg-gray-700 rounded px-3 py-2">
                    <NavigationMenuLink href={'/'} className="block">Home</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="hover:bg-gray-700 rounded px-3 py-2">
                    <NavigationMenuLink href={'/about'} className="block">About</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="hover:bg-gray-700 rounded px-3 py-2">
                    <NavigationMenuLink href={'/contact'} className="block">Contact</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="hover:bg-gray-700 rounded px-3 py-2">
                    <NavigationMenuLink href={'/blog'} className="block">Blog</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="hover:bg-gray-700 rounded px-3 py-2">
                    <NavigationMenuLink href={'/contact'} className="block">Sign up</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="ml-4">
                    <ModeToggle />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}

export default navbar