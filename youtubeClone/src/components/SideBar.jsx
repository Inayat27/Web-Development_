

function SideBar() {
  return (
    <aside className="flex h-[91vh] w-20  flex-col items-center  border-r bg-black px-5">
      <div className="mt-6 flex flex-1 flex-col ">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-4 ">

            <a
              className="flex transform   justify-center items-center rounded-lg  py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
              href="#"
            >
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
                className="h-5 w-5"
                aria-hidden="true"
              >
                <line x1="12" y1="20" x2="12" y2="10"></line>
                <line x1="18" y1="20" x2="18" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="16"></line>
              </svg>
              {/* <span className="mx-2 text-[15px] font-medium px-4 ">Dashboard</span> */}
            </a>
             <a
              className="flex transform   items-center rounded-lg  py-5 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
              href="#"
            >
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
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
              </svg>
              {/* <span className="mx-2 text-[15px] font-medium px-4">Sales</span> */}
            </a>
           
            
          </div>
        </nav>
      </div>
    </aside>

  )
}

export default SideBar