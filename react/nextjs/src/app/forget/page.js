'use client'
import { Button, Card, CardBody, Input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const ForgetPassword = () => {
  return (
    <div className='bg-slate-50 text-black flex flex-col min-h-screen items-center justify-center p-4'>
      <header className='text-center mb-6'>
        <h1 className='text-black-700 text-5xl mb-2'>Forgot Password</h1>
        <p className='text-lg'>You'll receive a verification message</p>
      </header>
      <Card className='w-full max-w-md p-6 rounded-lg shadow-lg'>
        <CardBody>
          <form>
            <Input
              fullWidth
              placeholder='Mobile Number'
              type='tel'
              required
              className='mb-6'
            />
            <Button 
              className='bg-blue-400 rounded p-4 w-full'
              type='submit'
            >
              <Link href='/password' passHref className='text-white'>
                 Next
              </Link>
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}

export default ForgetPassword
