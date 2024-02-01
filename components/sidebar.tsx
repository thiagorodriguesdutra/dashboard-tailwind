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
    href: '/settings',
    icon: <Settings className="text-gray-700" />,
  },
]

export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState('/')

  function HandleLinkSelected(href: string) {
    setCurrentLink(href)
  }

  return (
    <div className="flex w-full max-w-80 flex-col justify-between border-r-2 border-r-slate-200 px-4 py-8">
      <div className="">
        <div className="">
          <Header />
        </div>
        <div className="">
          <Search />
        </div>
        <nav className="">
          <div className="flex flex-col gap-3">
            {firstSection.map((link, index) => {
              const linkIsSelected = currentLink === link.href
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`${linkIsSelected ? 'bg-violet-50' : ''}  flex justify-between rounded-md p-3`}
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
        </nav>
      </div>
      <div>
        <div className=" justify-self-end">
          {secondSection.map((link, index) => {
            const linkIsSelected = currentLink === link.href
            return (
              <Link
                key={index}
                href={link.href}
                className={`${linkIsSelected ? 'bg-violet-50' : ''}  flex justify-between rounded-md p-3`}
                onClick={() => HandleLinkSelected(link.href)}
              >
                <div className="inline-flex gap-2">
                  {link.icon}
                  <span className={linkIsSelected ? 'text-violet-700' : ''}>
                    {link.title}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
