"use client"

import axios from "axios";
import { useState } from "react"

export default function AddProduct() {

    const [product, setProduct] = useState({
        name: "", price: "",
        description: "",
        variants: [{ color: "", stock: "", image: null }],
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value
        }))

    }

    const handleVariantChange = (index, e) => {
        const { name, value } = e.target;
        const newVariants = [...product.variants];
        newVariants[index][name] = value;
        setProduct((prev) => (
            {
                ...prev,
                variants: newVariants
            }
        ))


    }
    const handleImageChange = (index, e) => {
        const { files, name } = e.target;
        const newVariants = [...product.variants];
        newVariants[index][name] = files[0]
        console.log(newVariants);

        setProduct((prev) => (
            {
                ...prev,
                variants: newVariants
            }
        ))

    }
    const addVariant = () => {
        setProduct((prev) => ({
            ...prev,
            variants: [...prev.variants, { color: "", stock: "", image: null }],
        }));
    };
    const removeVariant = (index) => {
        const newVariants = [...product.variants];
        newVariants.splice(index, 1);
        setProduct((prev) => ({
            ...prev,
            variants: newVariants,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
     console.log(product);
     
        const formData = new FormData();

        // Basic product fields
        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('description', product.description);

        // Variants
        product.variants.forEach((variant, index) => {
            formData.append(`variants[${index}][color]`, variant.color);
            formData.append(`variants[${index}][stock]`, variant.stock);
            formData.append(`variants[${index}][image]`, variant.image);
        });
        try {
           const {data} =  await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/add-product`,formData)
           console.log(data);
           
            
        } catch (err) {
            console.error('Error sending form:', err);
        }

    }


    return (
        <div className='w-full h-screen py-20  overflow-auto'>
            <form onSubmit={handleSubmit} className="max-w-3xl rounded mx-auto p-5 shadow ">

                <h2 className="text-lg font-bold w-full text-left text-gray-600 mb-6">Add New Product</h2>

                <div>


                    <div className=" sm:flex gap-2 w-full">
                        <div className="mb-4 sm:w-1/2">
                            <label className="text-sm  text-gray-600 mb-1" htmlFor="">name</label>
                            <input onChange={handleChange} name="name" type="text" className="outline-none border border-gray-300 focus:border-gray-500 px-4 py-1.5 rounded block placeholder:text-gray-300 placeholder:text-sm w-full"
                                placeholder="enter product name" />
                        </div>
                        <div className="mb-4 sm:w-1/2">
                            <label className="text-sm  text-gray-600" htmlFor="">price</label>
                            <input onChange={handleChange} name="price" type="number" className="outline-none border border-gray-300 focus:border-gray-500 px-4 py-1.5 rounded block placeholder:text-gray-300 w-full placeholder:text-sm"
                                placeholder="price" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="text-sm  text-gray-600 mb-1" htmlFor="">description</label>
                        <textarea onChange={handleChange} className="outline-none w-full border rounded border-gray-300 focus:border-gray-500 px-4 py-1.5 block placeholder:text-gray-300  placeholder:text-sm"
                            placeholder="enter product details" name="description" id=""></textarea>
                    </div>
                    <p className="text-lg mb-4 text-gray-600">Product Variants</p>
                    {product.variants.map((Variant, index) => (


                        <div key={index} className="mb-4 border rounded border-gray-200 p-2">


                            <div className=" sm:flex gap-2 w-full">
                                <div className="mb-4 sm:w-1/2">
                                    <label className="text-sm  text-gray-600 mb-1" htmlFor="">color</label>
                                    <input onChange={(e) => handleVariantChange(index, e)} type="text"
                                        value={Variant.color}
                                        className="outline-none border border-gray-300 focus:border-gray-500 px-4 py-1.5 rounded block placeholder:text-gray-300 placeholder:text-sm w-full"
                                        placeholder="enter your product color" name="color" />
                                </div>
                                <div className="mb-4 sm:w-1/2">
                                    <label className="text-sm  text-gray-600" htmlFor="">stock</label>
                                    <input onChange={(e) => handleVariantChange(index, e)}
                                        value={Variant.stock}
                                        type="number" className="outline-none border border-gray-300 focus:border-gray-500 px-4 py-1.5 rounded block placeholder:text-gray-300 w-full placeholder:text-sm"
                                        name="stock" placeholder="stock" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center " >


                                <div className=' m-2'>
                                    <label htmlFor={`image-upload-${index}`} className='cursor-pointer w-24 h-24 inline-block'>
                                        <input type="file" id={`image-upload-${index}`} className='cursor-pointer hidden' name='image' onChange={(e) => handleImageChange(index, e)} />

                                        <img className='w-24 h-24 border-2  border-dashed rounded object-cover hover:opacity-80 transition  border-gray-500'
                                            src={product.variants[index].image ? URL.createObjectURL(product.variants[index].image) : "/upload.png"} alt="" />
                                    </label>
                                </div>

                                {product.variants.length > 1 && <button type="button" onClick={() => removeVariant(index)} className="text-sm text-red-800">remove</button>}

                            </div>


                        </div>
                    ))}

                    <button type="button" onClick={() => addVariant()} className="mb-4 text-gray-500 rounded border border-gray-500 hover:border-gray-800 py-1.5 px-4 bg-gray-100">+ Add Another Variant</button>

                    <div className="flex justify-center">
                        <button type="submit" className="w-full px-6 py-1.5 bg-gray-700 hover:bg-gray-800 transition-colors text-white rounded">Create product</button>
                    </div>
                </div>


            </form>


        </div>
    )
}
