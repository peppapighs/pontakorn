import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Navbar = () => {
  return (
    <Disclosure as="header" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-end">
              <div className="hidden items-center space-x-4 sm:flex">
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition hover:bg-gray-700 hover:text-white"
                >
                  Works
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition hover:bg-gray-700 hover:text-white"
                >
                  About
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition hover:bg-gray-700 hover:text-white"
                >
                  Resume
                </a>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 transition hover:bg-gray-700 hover:text-white"
              >
                Works
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 transition hover:bg-gray-700 hover:text-white"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 transition hover:bg-gray-700 hover:text-white"
              >
                Resume
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
