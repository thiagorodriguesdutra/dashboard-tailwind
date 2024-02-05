import Navigation from './components/navigation'

const navigationLinks = [
  { label: 'My Details', href: '/settings/details', badge: 0 },
  { label: 'Profile', href: '/settings/profile', badge: 0 },
  { label: 'Password', href: '/settings/password', badge: 0 },
  { label: 'Team', href: '/settings/team', badge: 4 },
  { label: 'Plan', href: '/settings/plan', badge: 0 },
  { label: 'Billing', href: '/settings/billing', badge: 2 },
  { label: 'Email', href: '/settings/email', badge: 0 },
  { label: 'Notification', href: '/settings/notification', badge: 0 },
  { label: 'Integration', href: '/settings/integration', badge: 0 },
  { label: 'API', href: '/settings/api', badge: 0 },
]

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="">
      <Navigation links={navigationLinks} />
      {children}
    </section>
  )
}
