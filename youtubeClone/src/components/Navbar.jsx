function Navbar() {
    return (
        <div className="relative w-full bg-black">
            <div className=" flex max-w-7xl items-center  py-3 ">
                <div className="inline-flex items-center px-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 cursor-pointer text-white"
                    >
                        <line x1="4" y1="12" x2="20" y2="12"></line>
                        <line x1="4" y1="6" x2="20" y2="6"></line>
                        <line x1="4" y1="18" x2="20" y2="18"></line>
                    </svg>
                </div>
                <div className="inline-flex items-center relative bottom-[2px]">
                    <span className="font-bold text-white">You<span className="text-red-600 text-xl">T</span>ube</span>
                </div>

                <div className="flex grow justify-center">
                    <input
                        className="flex h-10 w-[30vw]  rounded-md bg-black py-2 outline outline-gray-600 text-sm placeholder:text-gray-300  placeholder:px-3 focus:ring-1 focus:ring-gray-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Search"
                    />
                </div>
            </div>
        </div>

    )
}

export default Navbar