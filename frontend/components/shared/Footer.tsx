"use client"
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { APPLOGO } from "../../public/index";
import Image from "next/image";

interface FooterProps {
  name: string;
  email: string;
  phone: string;
}

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-300 hover:text-white transition-colors duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

const Footer: React.FC<FooterProps> = ({ name, email, phone }) => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p><span className="font-bold">Name:</span> {name}</p>
            <p><span className="font-bold">Email:</span> {email}</p>
            <p><span className="font-bold">Phone:</span> {phone}</p>
          </div>
          
          {/* Social Icons */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
            <div className="flex space-x-6">
              <SocialIcon href="https://github.com/Vishal182573" icon={<FaGithub size="2em" />} label="GitHub" />
              <SocialIcon href="https://www.linkedin.com/in/vishal-sharma-368513258/" icon={<FaLinkedin size="2em" />} label="LinkedIn" />
              <SocialIcon href="https://leetcode.com/u/vishal3838sharma/" icon={<SiLeetcode size="2em" />} label="LeetCode" />
              <SocialIcon href="https://www.geeksforgeeks.org/user/vishal3838sharma/" icon={<SiGeeksforgeeks size="2em" />} label="GeeksforGeeks" />
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center md:justify-end items-center">
            <Image
              alt="Footer Image"
              src={APPLOGO}
              width="120"
              height="120"
              className="object-cover rounded-md transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm font-light max-w-2xl mx-auto">
            *This platform uses machine learning models to provide results with certain accuracy. Results should be used in conjunction with professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

