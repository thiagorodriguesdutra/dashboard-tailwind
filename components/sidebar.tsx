'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from './header'
import Search from './search'
import {
  ChevronDown,
  Home,
  BarChart2,
  Layers,
  Flag,
  Users,
  Settings,
  LifeBuoy,
  CheckSquare,
  Menu,
} from 'lucide-react'

const firstSection = [
  { title: 'Home', href: '/', icon: <Home /> },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <BarChart2 />,
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <Layers />,
  },
  {
    title: 'Tasks',
    href: '/tasks',
    icon: <CheckSquare />,
  },
  {
    title: 'Reporting',
    href: '/reporting',
    icon: <Flag />,
  },
  { title: 'Users', href: '/users', icon: <Users /> },
]

const secondSection = [
  {
    title: 'Support',
    href: '/support',
    icon: <LifeBuoy className="text-gray-700" />,
  },
  {
    title: 'Settings',
    href: '/settings/details',
    icon: <Settings className="text-gray-700" />,
  },
]

export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState('/')

  function HandleLinkSelected(href: string) {
    setCurrentLink(href)
  }

  return (
    <div className="">
      <div className="hidden h-full max-w-80 border-r border-r-slate-200 px-4 lg:block">
        <div className="h-full">
          <Header />
          <Search />
          <nav className="relative h-full">
            <div className="flex flex-col gap-3">
              {firstSection.map((link, index) => {
                const linkIsSelected = currentLink === link.href
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className={`${linkIsSelected ? 'bg-violet-50' : ''}  flex justify-between rounded-lg p-2`}
                    onClick={() => HandleLinkSelected(link.href)}
                  >
                    <div className="inline-flex gap-2">
                      {link.icon}
                      <span className={linkIsSelected ? 'text-violet-700' : ''}>
                        {link.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={linkIsSelected ? 'text-violet-300' : ''}
                    />
                  </Link>
                )
              })}
            </div>
            <div className="absolute bottom-36 w-full">
              <div className="">
                {secondSection.map((link, index) => {
                  const linkIsSelected = currentLink === link.href
                  return (
                    <Link
                      key={index}
                      href={link.href}
                      className={`${linkIsSelected ? 'bg-violet-50' : ''}  flex justify-between rounded-lg p-2`}
                      onClick={() => HandleLinkSelected(link.href)}
                    >
                      <div className="inline-flex gap-2">
                        {link.icon}
                        <span
                          className={linkIsSelected ? 'text-violet-700' : ''}
                        >
                          {link.title}
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="mt-1 flex items-center justify-between border-b px-3 lg:hidden">
        <p className="bg-gradient-to-r from-violet-400 to-pink-600 bg-clip-text py-5 text-xl font-semibold  text-transparent">
          Blessed UI
        </p>
        <div>
          <button title="menu" onClick={(e) => e.preventDefault()}>
            <Menu />
          </button>
        </div>
      </div>
    </div>
  )
}
