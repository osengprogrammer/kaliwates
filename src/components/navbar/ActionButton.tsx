import React from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import NavigationBar from "./NavigationBar"

import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { ListMenu } from "@/constant";
function ActionButton() {
  return (
    <div >
        <div className="md:hidden">
      <Sheet >
        <SheetTrigger>
            <AlignJustify/>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {/* <SheetTitle>Are you sure absolutely sure?</SheetTitle> */}
            <SheetDescription>
              <NavigationBar/>
              {/* <div className="flex flex-col space-y-4 w-full text-lg text-black mt-10">
              {ListMenu.map((component) => (
                
                <Link 
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                   <Button variant="ghost">
                   {component.title}
                   </Button>
                 
                  </Link>
              
              ))}
           
               </div> */}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>
      <div className="hidden md:flex md:space-x-4 items-center justify-center">
        <Button
        className="text-md"
        variant={"ghost"}
        >
            Sign In
        </Button>
        <Button
        className="text-md bg-green-500"
        variant={"ghost"}
        >
            Get Started
        </Button>
      </div>
    </div>
  );
}

export default ActionButton;
