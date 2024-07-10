"use client"
import Image from "next/image";
import { IMAGE2 } from "../../public";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from 'next/link';
import { useState, useEffect, ReactNode } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

interface UserAvatarProps {}

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`p-2 sticky top-0 z-50 text-sm lg:text-base transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <section className="flex justify-between p-4 items-center rounded-sm">
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src={IMAGE2}
            alt="app-logo"
            width="70"
            height="70"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="font-bold text-lg lg:text-2xl">Doctor.Ai</div>
        </Link>
        <nav className="hidden lg:flex space-x-6">
          <Button variant={"default"}>
            <NavLink href="/bookAppointment">Book Appointment</NavLink>
          </Button>
          <Button variant={"ghost"}>
            <NavLink href="/">Home</NavLink>
          </Button>
          <Button variant={"ghost"}>
            <NavLink href="/about">About</NavLink>
          </Button>
          <Button variant={"ghost"}>
            <NavLink href="/contact">Contact</NavLink>
          </Button>
        </nav>
        <div className="flex items-center space-x-4">
          <UserAvatar />
          <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
            {isOpen ? <FaTimes size="1.5em" /> : <FaBars size="1.5em" />}
          </button>
        </div>
      </section>
      {isOpen && <MobileMenu />}
    </header>
  );
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="hover:text-blue-600 transition-colors duration-300">
      {children}
    </Link>
  );
}

function UserAvatar({}: UserAvatarProps) {
  const router = useRouter();
  const handleSignOut = () => {
    alert("User Logged Out");
    router.push("/api/auth/signout")
  };
  return (
    <div className="relative group">
      <Avatar className="border cursor-pointer transition-transform duration-300 group-hover:scale-110">
        <AvatarFallback>V</AvatarFallback>
      </Avatar>
      <div className="absolute right-0 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
        <Link href="/accountInfo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account Info</Link>
        <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 w-full text-left"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="lg:hidden bg-white shadow-md rounded-b-lg">
      <nav className="flex flex-col p-4 space-y-4">
        <Button variant={"default"}>
          <NavLink href="/bookAppointment">Book Appointment</NavLink>
        </Button>
        <Button variant={"ghost"}>
          <NavLink href="/">Home</NavLink>
        </Button>
        <Button variant={"ghost"}>
          <NavLink href="/about">About</NavLink>
        </Button>
        <Button variant={"ghost"}>
          <NavLink href="/contact">Contact</NavLink>
        </Button>
      </nav>
    </div>
  );
}
