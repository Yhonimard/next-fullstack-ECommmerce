const ProductHeader = () => {
  return (
    <div className="h-[50vh] flex items-center flex-col">
      <h6 className="text-center m-auto font-bold text-2xl ">
        EXPLORE PRODUCTS
      </h6>
      <div className="w-full py-1 overflow-auto border-y-2">
        <div className="flex justify-center gap-2 w-fit sm:w-auto divide-x-2 ">
          {/* <button className="bg-gray-500 px-3 py-2 rounded hover:bg-gray-700 transition-all text-white active:bg-gray-500  ">
            category
          </button> */}
          <button className="px-3 py-2  hover:bg-gray-100 transition-all rounded-md active:bg-gray-200 ">
            category
          </button>
          <button className="px-3 py-2  hover:bg-gray-100 transition-all rounded-md active:bg-gray-200 ">
            category
          </button>
          <button className="px-3 py-2  hover:bg-gray-100 transition-all rounded-md active:bg-gray-200 ">
            category
          </button>
          <button className="px-3 py-2  hover:bg-gray-100 transition-all rounded-md active:bg-gray-200 ">
            category
          </button>
          <button className="px-3 py-2  hover:bg-gray-100 transition-all rounded-md active:bg-gray-200 ">
            category
          </button>
          <button className="px-3 py-2  hover:bg-gray-100 transition-all rounded-md active:bg-gray-200 ">
            category
          </button>
          <button className="px-3 py-2  hover:bg-gray-100 transition-all rounded-md active:bg-gray-200 ">
            category
          </button>
          <button className="px-3 py-2  hover:bg-gray-100 transition-all rounded-md active:bg-gray-200 ">
            category
          </button>
          <button className="px-3 py-2  hover:bg-gray-100 transition-all rounded-md active:bg-gray-200 ">
            category
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
