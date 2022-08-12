import Link from 'next/link'

import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Navbar = () => {
  return (
    <Disclosure as="header" className="z-10 bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-end">
              <div className="hidden items-center space-x-4 sm:flex">
                <Link href="/">
                  <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition hover:bg-gray-700 hover:text-white">
                    Works
                  </a>
                </Link>
                <Link href="/about">
                  <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition hover:bg-gray-700 hover:text-white">
                    About
                  </a>
                </Link>
                <a
                  href="https://drive.google.com/file/d/1sAqpmVhjSSHcdCSlAvPm_kW2I7XFjn-c/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
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
              <Link href="/" passHref>
                <Disclosure.Button
                  as="a"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 transition hover:bg-gray-700 hover:text-white"
                >
                  Works
                </Disclosure.Button>
              </Link>
              <Link href="/about" passHref>
                <Disclosure.Button
                  as="a"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 transition hover:bg-gray-700 hover:text-white"
                >
                  About
                </Disclosure.Button>
              </Link>
              <Disclosure.Button
                as="a"
                href="https://drive.google.com/file/d/1sAqpmVhjSSHcdCSlAvPm_kW2I7XFjn-c/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
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
