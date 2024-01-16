import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "News Event", href: "/event", current: false },
  { name: "About us ", href: "/about", current: false },
  { name: "Our Teacher", href: "/teacher", current: false },
  { name: "Contact Us", href: "/contact", current: false },
  { name: "Student Study", href: "/study", current: false },
  { name: "Our Location", href: "/map", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto round-[50%]"
                    href="/home"
                    src="data:image/jpeg;base64,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"
                    alt="School Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        activeClassName="bg-gray-900 text-white"
                        exact={item.href === "/" ? true : false}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <NavLink to="/event">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </NavLink>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <span className="sr-only">Open user menu</span>
                    {/* <img
                      className="h-8 w-8 rounded-full"
                      alt=""
                    /> */}
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  ></Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
