"use client"
import Image from "next/image";
import { IMAGE1, IMAGE2 } from "../../public";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useSession, signOut } from "next-auth/react";
import Link from 'next/link';
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { useRouter } from "next/navigation";

type Checked = DropdownMenuCheckboxItemProps["checked"]


export default function MainHeader() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // const { data: session, status } = useSession();

  const handleSignOut = () => {
    alert("User Logged Out");
    router.push("/api/auth/signout")
  };
  return (
    <header className="p-2 sticky top-0 z-50  text-sm lg:text-base">
      <section className="flex justify-between p-4 items-center shadow-xl border-black border-[1px] rounded-sm bg-white">
          <figure className="flex justify-center items-center space-x-5">
        <Link href={"/"}>
            <Image
              src={IMAGE2}
              alt="app-logo"
              width="70"
              height="70"
            />
        </Link>
        <div className="font-bold text-lg lg:text-2xl ">Doctor.Ai</div>
          </figure>
        <div className="flex justify-around space-x-2 lg:space-x-14 items-center">
          <Button className="hidden lg:block">
            <Link href={"/diagonise"}>
              Diagonise now
            </Link>
          </Button>
          <Button variant={"ghost"} className="hidden lg:block">
            <Link href={"/"}>
              Home
            </Link>
          </Button>
          <Button variant={"ghost"} className="hidden lg:block">
            <Link href={"/about"}>
              About
            </Link>
          </Button>
          <Button variant={"ghost"} className="hidden lg:block">
            <Link href={"/contact"} >
              Contact
            </Link>
          </Button>
          <div className="flex flex-col items-center">
          {/* {session && (
            <div className="mb-4 text-lg font-semibold">
              Welcome, {session.user.name}
            </div>
          )} */}
          <button
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Log Out
          </button>
        </div>
          <Link href={"/accountInfo"}>
            <Avatar className="border mr-5" >
              <AvatarFallback>
                {/* {session.user.name.charAt(0).toUpperCase()} */}
                V
              </AvatarFallback>
            </Avatar>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button onClick={toggleMenu} variant={"ghost"} className="lg:hidden ml-4">
                {isOpen ? <FaTimes size="1.5em" /> : <FaBars size="1.5em" />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 h-screen p-8 space-y-5">
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
              >
                <Button >
                  <Link href={"/diagonise"}>
                    Diagonise now
                  </Link>
                </Button>
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
              ><Button variant={"ghost"} >
                  <Link href={"/"}>
                    Home
                  </Link>
                </Button>
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
              ><Button variant={"ghost"} >
                  <Link href={"/about"}>
                    About
                  </Link>
                </Button>
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
              ><Button variant={"ghost"}>
                  <Link href={"/contact"} >
                    Contact
                  </Link>
                </Button>
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </header>
  );
}
