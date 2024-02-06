import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import usIcon from '@/public/united-states.png'

const countryList = [
  {
    label: 'United States',
    value: 'US',
    icon: usIcon,
    alt: `United States's flag`,
  },
  // Outros países...
]

export default function CountryInput() {
  return (
    <div className="my-5 flex w-full flex-col gap-1 align-baseline sm:flex-row md:w-4/5">
      <h3 className="w-2/5 font-semibold">Country</h3>
      <div className="flex w-full justify-between rounded-lg border p-2">
        {countryList.map((country, index) => (
          <div key={index} className="flex gap-1">
            <Image
              src={country.icon}
              alt={country.alt}
              className="size-6 object-cover"
            />
            <div>{country.label}</div>
          </div>
        ))}
        <ChevronDown className="text-zinc-500" />
      </div>
    </div>
  )
}
