const ProductoCard = () => {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden pb-6">
        <div className="h-25 bg-gray-200"></div>
        <div className="mt-8 px-3">
            <div className="bg-gray-200 h-5 rounded mb-6"></div>

            <div className="bg-gray-200 h-4 rounded mb-2"></div>
            <div className="bg-gray-200 h-4 rounded mb-6"></div>

            <div className="flex">
                <div className=" bg-gray-200 mr-4 px-4 py-2 rounded"></div>
                <div className="h-4 bg-gray-200 px-4 py-2 rounded"></div>
            </div>
             <div className="bg-gray-200 h-4 rounded mt-8"></div>
        </div>
    </div>
  )
}

export default ProductoCard