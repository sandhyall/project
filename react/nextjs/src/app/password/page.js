'use client'
import { Button, Card, CardBody, Input } from '@nextui-org/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Password = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors = { password: '', confirmPassword: '' };

    // Basic password validation
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
      hasErrors = true;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      // Proceed with form submission logic here
      console.log('Form submitted with', { password, confirmPassword });
    }
  };

  return (
    <div className='bg-slate-50 text-black flex flex-col min-h-screen items-center justify-center p-4'>
      <header className='text-center mb-6'>
        <p className='text-black-700 text-5xl mb-2'>Set Password</p>
        <p>Create a password that's secure and easy to remember</p>
      </header>

      <Card className='w-full max-w-md p-4 m-3 rounded-lg shadow-lg'>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <div className='relative mb-4'>
              <Input
                fullWidth
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='pr-10'
              />
              <button
                type='button'
                onClick={togglePasswordVisibility}
                className='absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer'
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
            </div><br></br>

            <div className='relative mb-6'>
              <Input
                fullWidth
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='Confirm Password'
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='pr-10'
              />
              <button
                type='button'
                onClick={toggleConfirmPasswordVisibility}
                className='absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer'
                aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.confirmPassword && <p className='text-red-500 text-sm mt-1'>{errors.confirmPassword}</p>}
            </div>

            <Button className='bg-blue-400 rounded p-4 w-full mb-4' type='submit'><Link href={"./"}> Next</Link>
              
            </Button>

            <div className='text-center'>
              <p className='mb-2'>In order to protect your account, make sure your password is:</p>
              <ul className='list-disc list-inside'>
                <li>At least 6 characters long</li>
              </ul>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Password;
