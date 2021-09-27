import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { SearchIcon, XIcon } from '@heroicons/react/outline'

export default function NavigationSearch() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex lg:ml-6">
        <button
          onClick={() => setOpen(true)}
          className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
        >
          <span className="sr-only">Search</span>
          <SearchIcon className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block divide-y-2 px-4 py-4 align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white py-2 flex items-center">
                  <SearchIcon className="p-2 w-8 h-8 rounded-full" />
                  <input
                    type="search"
                    className="flex-1 py-2 focus:outline-none"
                    placeholder="Search product..."
                  />
                  <XIcon
                    className="p-2 w-8 h-8 cursor-pointer rounded-full text-gray-700 hover:bg-gray-100 focus:bg-gray-200"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <div className="py-2 pt-4">
                  <h3 className="font-semibold text-lg">Recent</h3>
                  <ul className="py-2 space-y-2">
                    <li className="bg-gray-100 py-2 px-4 select-none cursor-pointer rounded-md hover:bg-indigo-600 hover:text-white">
                      Product 1
                    </li>
                    <li className="bg-gray-100 py-2 px-4 select-none cursor-pointer rounded-md hover:bg-indigo-600 hover:text-white">
                      Product 2
                    </li>
                    <li className="bg-gray-100 py-2 px-4 select-none cursor-pointer rounded-md hover:bg-indigo-600 hover:text-white">
                      Product 3
                    </li>
                  </ul>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
