"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import NavbarLogo from "./NavbarLogo"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { CompanyProfile, ListGalery, ListMenu, OurService } from "@/constant"
import { Button } from "../ui/button"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "services",
    href: "/services",
    description:
      "Our comitment is to deliver the best value products and the best services",
  },
  {
    title: "About Us",
    href: "/about",
    description:
      "We are coming from the value of helping our comunity training and providing them with the tailor skills",
  },
  {
    title: "Contact Us",
    href: "/contact",
    description:
      "We are providing support 24/7",
  },
  {
    title: "Galery Video",
    href: "/galer-videos",
    description: "",
  },
  {
    title: "Galery Picture",
    href: "/galey-pictures",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
 
]

export default function NavigationBar() {
  return (
    <NavigationMenu >
      <NavigationMenuList className="flex flex-col items-start justify-around">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company Profile</NavigationMenuTrigger>
          <NavigationMenuContent>
          <NavbarLogo/>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {CompanyProfile.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                 
                  {component.description}
                  
                 
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
          <NavigationMenuContent>
          <NavbarLogo/>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {OurService.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Galery</NavigationMenuTrigger>
          <NavigationMenuContent>
          <NavbarLogo/>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {ListGalery.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
