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
  const [currentLink, setCurrentLink] = useState('/settings/details')

  function HandleLinkSelected(href: string) {
    setCurrentLink(href)
  }

  const { links } = props
  return (
    <nav className="flex w-full gap-4 border-b">
      {links.map((link, index) => {
        const linkIsSelected = currentLink === link.href
        return (
          <Link
            key={index}
            href={link.href}
            className={`${linkIsSelected ? 'border-b-2 border-b-violet-700 text-violet-700' : ''} border-b-2 border-b-transparent py-2`}
            onClick={() => HandleLinkSelected(link.href)}
          >
            {link.label}
            <span
              className={`${link.badge <= 0 ? 'hidden' : ''} ml-1 rounded-2xl bg-zinc-100 px-2 py-0.5 text-xxs`}
            >
              {link.badge}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
