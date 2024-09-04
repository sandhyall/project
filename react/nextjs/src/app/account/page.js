'use client'
import { Button, Card, CardBody, Input } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const Account = () => {
  return (
    <div className='bg-slate-50 text-black flex flex-col min-h-screen items-center justify-center p-4'>
      <header className='text-center mb-6'>
        <p className='text-blue-700 text-5xl mb-2'>Create Account</p>
        <p>Begin your education journey with us</p>
      </header><br></br>
      <Card className='w-full max-w-md p-4  m-3 rounded-lg shadow-lg'>
        <CardBody>
          <form>
            <div className='mb-4 gap-3  rounded-s-lg'>
              <label htmlFor='fullName' className='block text-sm font-medium text-gray-700 '>
        
              </label>
              <Input 
                id='fullName'
                fullWidth
                placeholder='Full Name'
                type='text' // Changed to text for a name field
                required
              />
            </div><br></br>
            <div className='mb-4 gap-4rounded-s-lg'>
              <label htmlFor='mobileNumber' className='block text-sm font-medium text-gray-700'>
              
              </label>
              <Input 
                id='mobileNumber'
                fullWidth
                placeholder='Mobile Number'
                type='tel'
                required
              />
            </div>
            <Button className='bg-blue-400 rounded p-4 w-full mb-4'> <Link href='password'>Next</Link></Button>
            <p className='text-center'>
              Already have an account? <Link href={"/"} className='text-blue-600 hover:underline'>Sign Up</Link>
            </p>
            
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Account;
