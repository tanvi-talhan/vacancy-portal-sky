import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/common/logo.png'
import { Link, Outlet } from 'react-router-dom'

const navigation = [
  { name: 'Home', to: '/nav/home', current: true },
  { name: 'Add Vacancy', to: '/nav/add-vacancy', current: false },
  { name: 'Add Candidate', to: '/nav/add-candidate', current: false },
  { name: 'View Candidates', to: '/nav/view-candidates', current: false },
  { name: 'Logout', to: '/nav/logout', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <>
      <Disclosure as="nav" className="bg-[#B7B597]">
        <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-green-100 hover:text-gray-50 ">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center bg-[#0f271c] rounded-xl p-1" >
                <img
                  alt="Your Company"
                  src={logo}
                  className="h-8 w-auto"
                />
              </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'hover:bg-[#6B8A7A] hover:text-black text-[#254336]' : 'text-[#254336] hover:text-black hover:bg-[#6B8A7A]',
                          'block rounded-md px-3 py-2 text-base font-medium',
                          item.name === 'Login' ? 'bg-green-300 hover:bg-green-500 text-green-950 hover:text-green-950' : '',
                          'block rounded-md px-3 py-2 text-base font-medium',
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                to={item.to}
                className={classNames(
                  item.current ? 'hover:bg-green-300 text-green-100 hover:text-green-950' : 'text-green-100 hover:bg-green-300 hover:text-green-950',
                  'block rounded-md px-3 py-2 text-base font-medium',
                  item.name === 'Login' ? 'bg-green-300 hover:bg-green-500 text-green-950 hover:text-green-950' : '',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure >
      <Outlet />
    </>
  )
}