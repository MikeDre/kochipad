import React, { useContext, useState } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import logo from '../assets/img/kochiken-logo.svg';
import {
  MoonIcon,
  SunIcon,
  BellIcon,
  MenuIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
} from '../icons'
import { Avatar, Badge, Dropdown, DropdownItem, WindmillContext } from '@windmill/react-ui'

function Header() {
  const { mode, toggleMode } = useContext(WindmillContext)
  const { toggleSidebar } = useContext(SidebarContext)

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen)
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        <div>
          <a className="text-lg font-bold text-gray-800 dark:text-gray-200" href="/">
            <img src={logo} alt="KochiKen Logo" width="100" className="block lg:hidden" />
          </a>
        </div>
        <div>
          <ul className="flex items-center flex-shrink-0 space-x-6">
            {/* <!-- Theme toggler --> */}
            <li className="flex">
              <button
                className="rounded-md focus:outline-none focus:shadow-outline-purple"
                onClick={toggleMode}
                aria-label="Toggle color mode"
              >
                {mode === 'dark' ? (
                  <SunIcon className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <MoonIcon className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </li>
            {/* <!-- Notifications menu --> */}
            <li className="relative">
              <button
                className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                onClick={handleNotificationsClick}
                aria-label="Notifications"
                aria-haspopup="true"
              >
                <BellIcon className="w-5 h-5" aria-hidden="true" />
                {/* <!-- Notification badge --> */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                ></span>
              </button>

              <Dropdown
                align="right"
                isOpen={isNotificationsMenuOpen}
                onClose={() => setIsNotificationsMenuOpen(false)}
              >
                <DropdownItem tag="a" href="#" className="justify-between">
                  <span>Messages</span>
                  <Badge type="danger">13</Badge>
                </DropdownItem>
                <DropdownItem tag="a" href="#" className="justify-between">
                  <span>Sales</span>
                  <Badge type="danger">2</Badge>
                </DropdownItem>
                <DropdownItem onClick={() => alert('Alerts!')}>
                  <span>Alerts</span>
                </DropdownItem>
              </Dropdown>
            </li>
            {/* <!-- Profile menu --> */}
            <li className="relative">
              <button
                className="rounded-full focus:shadow-outline-purple focus:outline-none"
                onClick={handleProfileClick}
                aria-label="Account"
                aria-haspopup="true"
              >
                <Avatar
                  className="align-middle"
                  src="https://i.imgur.com/YRAJKSd.png"
                  alt=""
                  aria-hidden="true"
                />
              </button>
              <Dropdown
                align="right"
                isOpen={isProfileMenuOpen}
                onClose={() => setIsProfileMenuOpen(false)}
              >
                <DropdownItem tag="a" href="#">
                  <OutlinePersonIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                  <span>Profile</span>
                </DropdownItem>
                <DropdownItem tag="a" href="#">
                  <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem onClick={() => alert('Log out!')}>
                  <OutlineLogoutIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                  <span>Log out</span>
                </DropdownItem>
              </Dropdown>
            </li>
            <li>
              {/* <!-- Mobile hamburger --> */}
              <button
                className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
                onClick={toggleSidebar}
                aria-label="Menu"
              >
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
