'use client';

import { Button, Card, CardBody, Image, Input } from '@nextui-org/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleCheckboxChange = () => {
    setRememberMe(prevState => !prevState);
  };

  return (
    <div className='bg-slate-50 text-black flex flex-col min-h-screen items-center justify-center p-4'>
       
      <header className='text-center mb-6'>
      <Image
        width={300}
        alt="NextUI logo"
        src="/logo.png" 
        className='mb-6'
      />
        <p className='text-blue-400 text-2xl'>Hi! Welcome</p>
        <p>Let's get started on your education quest!</p>
      </header>

      <Card className='w-full max-w-md p-4 rounded-lg shadow-lg'>
        
        <CardBody>
          <form>
            <Input
              fullWidth
              placeholder='Mobile Number'
              type='tel'
              required
              className='mb-4'
            /><br></br>
            <div className='relative mb-4'>
              <Input
                fullWidth
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                required
              />
              <button
                type='button'
                onClick={togglePasswordVisibility}
                className='absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer'
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div><br></br>
            <div className='flex items-center mb-4'>
              <input
                id='rememberMe'
                type='checkbox'
                checked={rememberMe}
                onChange={handleCheckboxChange}
                className='mr-2'
              />
              <label htmlFor='rememberMe' className='cursor-pointer'>Remember Me</label>
            </div>
            <Button className='bg-blue-400 rounded p-4 w-full mb-4'>Sign In</Button>
            <p className='text-center mb-4'>
        <Link href='/forget'>Forget Password?</Link>
            </p>
            <p className='text-center'>
              Don't have an account? <Link href="/account" className='text-blue-600 hover:underline'>Sign Up</Link>
            </p>
            <p className='text-center'> constact Us:</p>
            <div className='flex justify-center gap-4'>
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

            </div><br></br>
            <div className='flex justify-center gap-4'>
            <FaPhoneAlt className='text-center' size={20} />
            <p className='text-center'> 015314038 , 9701002151</p>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
