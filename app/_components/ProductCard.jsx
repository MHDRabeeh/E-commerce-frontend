"use client"
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useRouter } from "next/navigation";

export default function ProductCard({item}) {
    const router = useRouter()
    return (
        <div onClick={()=>router.push("/product-details/79868")} key={item} className="flex flex-col gap-1 max-w-xs   p-2">
            <div className="border-r relative border-gray-300 rounded-tr-lg overflow-hidden">
                <Image
                className="hover:scale-105 transition object-cover"
                 src={assets.formal} alt="" />
                  <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                    <Image
                        className="h-3 w-3"
                        src={assets.heart_icon}
                        alt="heart_icon"
                    />
                </button>
            </div>
            <div className="border-l border-t border-gray-300 rounded-l-lg p-2">



                <p className="md:text-base font-medium pt-2 w-full truncate">{"Casual shirt"}</p>
                <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">{" This is the best shirt you can buy"}</p>
                <div className="flex items-center gap-2">
                    <p className="text-xs">{4.5}</p>
                    <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Image
                                key={index}
                                className="h-3 w-3"
                                src={
                                    index < Math.floor(4)
                                        ? assets.star_icon
                                        : assets.star_dull_icon
                                }
                                alt="star_icon"
                            />
                        ))}
                    </div>
                </div>

                <div className="flex items-end justify-between w-full mt-1">
                    <p className="text-base font-medium">{"$"}{10}</p>
                    <button className=" max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition">
                        Buy now
                    </button>
                </div>
            </div>

        </div>
    )
}
