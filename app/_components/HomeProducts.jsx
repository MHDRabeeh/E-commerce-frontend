import ProductCard from "./ProductCard";

export default function HomeProducts() {
    return (
        <div className="max-w-screen-xl mx-auto flex flex-col pt-14 ">

            <p className="text-2xl font-medium text-left w-full">Popular products</p>
            <div className="grid grid-cols-1 gap-8 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
                {
                    Array.from({ length: 5 }).map(() => (
                        <ProductCard />
                    ))
                }


            </div>

            <button className="w-fit mx-auto m-6 px-6 py-2.5 inline-block border rounded text-white bg-gray-200 hover:bg-gray-300 transition">See more</button>

        </div>
    )
}
