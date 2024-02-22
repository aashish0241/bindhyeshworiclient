import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", route: "/", current: true },
  { name: "News Event", route: "/event", current: false },
  { name: "About us", route: "/about", current: false },
  { name: "Our Teacher", route: "/teacher", current: false },
  { name: "Contact Us", route: "/contact", current: false },
  { name: "Study Material", route: "/study", current: false },
  { name: "Our Location", route: "/map", current: false },
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
                <Disclosure.Button
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
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
                    className="h-8 w-auto rounded-full"
                    src="data:image/png;base64,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"
                    alt="School Logo"
                  />
                </div>
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.route}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        activeClassName="bg-gray-900 text-white"
                        exact={item.route === "/" ? true : false}
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
                    {/* Add your profile image here */}
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
                  href={item.route}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  activeClassName="bg-gray-900 text-white"
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
