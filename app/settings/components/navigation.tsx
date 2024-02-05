'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Link {
  label: string
  href: string
  badge: number
}

interface NavigationProps {
  links: Link[]
}

export default function Navigation(props: NavigationProps) {
  const [currentLink, setCurrentLink] = useState('/')

  function HandleLinkSelected(href: string) {
    setCurrentLink(href)
  }

  const { links } = props
  return (
    <nav className="border-0.5 flex w-full gap-4 border-b">
      {links.map((link, index) => {
        const linkIsSelected = currentLink === link.href
        return (
          <Link
            key={index}
            href={link.href}
            className={`${linkIsSelected ? 'border-b-2 border-violet-700 text-violet-700' : ''} py-2`}
            onClick={() => HandleLinkSelected(link.href)}
          >
            {link.label}
            <span
              className={`${link.badge <= 0 ? 'hidden' : ''} text-xxs ml-1 rounded-2xl bg-zinc-100 px-2 py-0.5`}
            >
              {link.badge}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
