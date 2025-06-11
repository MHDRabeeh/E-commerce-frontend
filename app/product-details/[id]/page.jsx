"use client"
import Header from "@/app/_components/Header";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

export default function page() {
    const [selectedColor, setSelectedColor] = useState(0)
    return (
        <>
            <Header />
            <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="px-5 lg:px-16 xl:px-20">
                        <div className="rounded-lg overflow-hidden bg-gray-500/10 mb-4">
                            <Image
                                src={assets.casual}
                                alt="alt"
                                className="w-full h-auto object-cover mix-blend-multiply"
                                width={1280}
                                height={720}
                            />
                        </div>

                        {/* <div className="grid grid-cols-4 gap-4">
                            {[assets.casual, assets.formal, assets.neckHead].map((image, index) => (
                                <div
                                    key={index}

                                    className="cursor-pointer rounded-lg overflow-hidden bg-gray-500/10"
                                >
                                    <Image
                                        src={image}
                                        alt="alt"
                                        className="w-full h-auto object-cover mix-blend-multiply"
                                        width={1280}
                                        height={720}
                                    />
                                </div>

                            ))}
                        </div> */}
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-3xl font-medium text-gray-800/90 mb-4">
                            {"productData.name"}
                        </h1>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-0.5">
                                <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                                <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                                <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                                <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                                <Image
                                    className="h-4 w-4"
                                    src={assets.star_dull_icon}
                                    alt="star_dull_icon"
                                />
                            </div>
                            <p>(4.5)</p>
                        </div>
                        <p className="text-gray-600 mt-3">
                            {"productData.description"}
                        </p>
                        <p className="text-3xl font-medium mt-6">
                            ${10}
                            <span className="text-base font-normal text-gray-800/60 line-through ml-2">
                                ${12}
                            </span>
                        </p>
                        <hr className="bg-gray-600 my-6" />
                        <div className="overflow-x-auto space-y-4">
                            <p className="text-gray-400 font-light text-lg uppercase">colors</p>
                            <div className="flex gap-2 items-center">
                                {
                                    ["red", "green", "blue"].map((items, index) => (
                                        <div className={`w-9 h-9 flex items-center justify-center ${selectedColor === index ? "border" : ""}`}>
                                            <div
                                            
                                                onClick={() => setSelectedColor(index)}
                                                style={{ backgroundColor: items }}
                                                key={index} className={`w-5 h-5 cursor-pointer`}>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>


                        </div>

                        <div className="flex items-center mt-10 gap-4">
                            <button className="w-full py-3.5 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
                                Add to Cart
                            </button>
                            <button className="w-full py-3.5 bg-gray-500 text-white hover:bg-gray-600 transition">
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
