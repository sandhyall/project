'use client'
import { Image, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { CiBellOn } from "react-icons/ci";

const navbar=()=> {
  return (
    <div className='m-2 bg-white text-black shadow-lg rounded-lg'>
        
        <div className='flex  gap-2 h-19 bg-blue-300 rounded-lg shadow-lg' >
        <p >Follow us :</p>
              <Link href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                <FaFacebook size={24} className='text-blue-600 hover:text-blue-700' />
              </Link>
              <Link href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                <FaGoogle size={24} className='text-red-600 hover:text-red-700' />
              </Link>

              <Link href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                <FaInstagram size={24} className='text-pink-600 hover:text-pink-700' />
              </Link>
              <Link href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin size={24} className='text-blue-600 hover:text-blue-700' />
              </Link>
              <div className='absolute  right-5'>
              <p > 015314038 , 9701002151</p>
              </div>
             </div>
             
<Navbar position='static'>
<NavbarBrand>
<Image
        width={200}
        alt="NextUI logo"
        src="/logo.png" 
        className='mb-6 '
      />
        
      </NavbarBrand>
      <NavbarContent >
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem><br></br>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Booking
          </Link>
        </NavbarItem><br></br>
        <NavbarItem>
          <Link color="foreground" href="#">
            Menu
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <CiBellOn className='  absolute inset-y-8 right-0 ml-2 ' size={30} />
      

      </Navbar>
    </div>
  )
}

export default navbar