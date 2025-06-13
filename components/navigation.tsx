"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Vision & Mission', href: '/vision-mission' },
    { name: 'Academic', href: '/academic' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Messages', href: '/messages' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Title on the Left */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-14 h-14">
              <Image 
                src="/nursinglogo (1).png" 
                alt="Nursing Logo" 
                className="object-contain"
                width={56}
                height={56}
              />
            </div>
            <div className="text-lg md:text-xl font-bold text-gray-900">
              Swami Vivekanand School of Nursing
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 ml-auto">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            {/* Social Media Logos */}
            <Link href="https://www.instagram.com/svs_of_nursing/?hl=en" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/instagram.png" 
                alt="Instagram" 
                width={24} 
                height={24} 
                className="hover:opacity-80 transition"
              />
            </Link>
            <Link href="https://www.facebook.com/swamivivekanandschoolofnursing/" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/facebook.png" 
                alt="Facebook" 
                width={24} 
                height={24} 
                className="hover:opacity-80 transition"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-4 pb-4 space-y-1 bg-white border-t">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Social Media Logos in Mobile Menu */}
              <div className="flex space-x-4 mt-2 px-3">
                <Link href="https://www.instagram.com/svs_of_nursing/?hl=en" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src="/instagram.png" 
                    alt="Instagram" 
                    width={24} 
                    height={24} 
                    className="hover:opacity-80 transition"
                  />
                </Link>
                <Link href="https://www.facebook.com/swamivivekanandschoolofnursing/" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src="/facebook.png" 
                    alt="Facebook" 
                    width={24} 
                    height={24} 
                    className="hover:opacity-80 transition"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
