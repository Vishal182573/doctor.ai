"use client"
import React from 'react';
import { FaGithub, FaLinkedin,} from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import {APPLOGO} from "../../public/index"
import Image from "next/image";

interface FooterProps {
  name: string;
  email: string;
  phone: string;
}

const Footer: React.FC<FooterProps> = ({ name, email, phone}) => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-36">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Contact Details */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p><span className="font-bold">Name:</span> {name}</p>
            <p><span className="font-bold">Email:</span> {email}</p>
            <p><span className="font-bold">Phone:</span> {phone}</p>
          </div>
          {/* Social Icons */}
          <div className="flex-1 flex justify-center space-x-6">
            <a href="https://github.com/Vishal182573" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub size="2em" />
            </a>
            <a href="https://www.linkedin.com/in/vishal-sharma-368513258/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedin size="2em" />
            </a>
            <a href="https://leetcode.com/u/vishal3838sharma/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <SiLeetcode size="2em" />
            </a>
            <a href="https://www.geeksforgeeks.org/user/vishal3838sharma/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <SiGeeksforgeeks size="2em" />
            </a>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
             alt="Footer Image"
             src={APPLOGO}
             width="80"
             height="80"
             className="object-cover rounded-md" 
            />
          </div>
        </div>
        {/* Disclaimer */}
        <div className="mt-8 text-center md:text-left">
          <p className="text-sm font-light">*This platform uses machine learning models to provide results with certain accuracy. Use accordingly.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
