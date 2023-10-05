'use client'

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


export default function HamburgerMenu () {
return (
    <NavigationMenu className="z-10 flex max-w-full flex-1 items-center justify-end bg-gray-800 text-white shadow-lg p-4 sticky top-0">
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuTrigger>
                    Hamburger
                </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={'/'}>Home</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={'/about'}>About</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={'/contact'}>Contact</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={'/blog'}>Blog</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={'/contact'}>Sign up</NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
);
};