"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

import { ChevronDown, icons, Menu, Search, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../app/assets/images/logo.png";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const PublicNavbar =  () => {

      useEffect(() => {
                Aos.init({
                    duration: 1000, // animation duration in ms
                    once: true,     // whether animation should happen only once
                });
            }, []);

    const navItems = [
    
        { href: "/products", label: "New Drops 🔥" },
        { href: "#", label: "Men", icons: <ChevronDown className="h-4 font-bold" /> },
        { href: "#", label: "Women", icons: <ChevronDown className="h-4 font-bold" /> },

    ];

    return (
        <header data-aos="fade-down" className="flex justify-between max-w-7xl  p-4 rounded-2xl mx-auto md:justify-between items-center bg-white">

            <div>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {navItems.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            <span className="flex items-center justify-center ">
                                {link.label} {link.icons}
                            </span>
                        </Link>

                    ))}
                </nav>

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline">
                                <Menu></Menu>
                            </Button>
                        </SheetTrigger>
                        <SheetContent>


                            <SheetHeader>



                                {navItems.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}





                            </SheetHeader>


                        </SheetContent>
                    </Sheet>
                </div>

            </div>

            <Link className="text-xl font-semibold text-[#2563eb]" href={"/"}>
                <Image src={logo} alt="Logo" className="h-5 w-auto" />
            </Link>


            <div className="hidden md:block">


            </div>

            <div className="flex items-center justify-center space-x-3 lg:space-x-7">

                <Search className="hidden md:block " />

                <UserRound />
                <Button className="bg-[#FFA52F] rounded-full  ">0</Button>

            </div>

  

        </header>
    );
};

export default PublicNavbar;