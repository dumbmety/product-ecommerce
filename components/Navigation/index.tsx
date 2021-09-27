import { useState } from 'react'

import NavigationCart from './NavigationCart'
import NavigationSearch from './NavigationSearch'
import NavigationCountry from './NavigationCountry'
import NavigationAuth from './NavigationAuth'
import FlyoutMenus from './FlyoutMenus'
import NavigationLogo from './NavigationLogo'
import NavigationOpenMenu from './NavigationOpenMenu'
import MobileMenu from './MobileMenu'

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      <MobileMenu open={open} onClose={() => setOpen(false)} />

      <header className="relative bg-white">
        <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              <NavigationOpenMenu onOpen={() => setOpen(true)} />

              <NavigationLogo />

              <FlyoutMenus />

              <div className="ml-auto flex items-center">
                <NavigationAuth />
                <NavigationCountry />
                <NavigationSearch />
                <NavigationCart />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
