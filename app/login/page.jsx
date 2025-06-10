"use client"
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";


export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState({ email: "", password: "" })
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const validateForm = () => {
        const newErrors = { email: "", password: "" }
        let isValid = true

        if (!formData.email) {
            newErrors.email = "Email is required"
            isValid = false
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email"
            isValid = false
        }

        if (!formData.password) {
            newErrors.password = "Password is required"
            isValid = false
        } else if (formData.password.length < 6) {
            newErrors.password = "Minimum 6 characters"
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }
    console.log(errors);


    const handleSubmit = async () => {
        if (!validateForm()) return
        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, { ...formData });

            console.log(data);

            if (data.success) {
                router.push("/")
            }



        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div className='fixed inset-0 bg-black/25 backdrop-blur-sm flex justify-center items-center z-50'>
            <div className='w-full max-w-md  h-auto bg-white p-4 rounded-lg shadow-lg flex flex-col  gap-3 '>
                <div className=' flex flex-col items-center justify-center m-3'>
                    <Image src={'/logo.png'} width={55} height={55} alt='logo' />
                    <p className='text-lg '>Sign In</p>
                </div>

                <div>
                    <label className='text-sm' htmlFor="">Email</label>
                    <input onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} placeholder='example@gmail.com' type="email" className='border border-gray-300 outline-none focus:border-gray-500 block rounded px-4  py-1.5
                     w-full placeholder:text-gray-300' />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className='relative'>
                    <label className='text-sm' htmlFor="">Password</label>
                    <input onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))} placeholder="password" type={showPassword ? "text" : `password`} className='border border-gray-300 outline-none focus:border-gray-500 block rounded px-4  py-1.5
                     w-full placeholder:text-gray-300' />
                    <span onClick={() => setShowPassword(!showPassword)} className='absolute right-4 top-9 cursor-pointer'>
                        {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                    </span>
                     {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>
                <div className='mb-5 mt-2'>
                    <button onClick={handleSubmit} className='bg-gray-900 hover:bg-black cursor-pointer text-white font-medium  rounded w-full px-4 py-2'> Sign In</button>
                </div>
            </div>

        </div>
    )
}

