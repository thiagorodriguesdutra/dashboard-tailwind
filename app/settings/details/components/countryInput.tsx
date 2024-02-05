import usIcon from '@/public/united-states.png'
import Image from 'next/image'
const countryList = [
  {
    label: 'United States',
    value: 'US',
    icon: usIcon,
    alt: `United states's flag`,
  },
  // more...
]

export default function CountryInput() {
  return (
    <div className="my-5 flex w-4/5 align-baseline">
      <h3 className="w-2/5">Country</h3>
      <div className="leading-0 flex flex-1 items-center gap-1 rounded-lg border p-2 text-sm focus-within:border-2 focus-within:border-violet-500">
        {countryList.map((country, index) => {
          return (
            <Image
              key={index}
              src={country.icon}
              className="size-5 object-cover"
              alt=""
            />
          )
        })}
        <label htmlFor="states" className="sr-only">
          Country
        </label>
        <select
          disabled
          name="states"
          className="flex-1 text-base focus-within:outline-none"
        >
          {countryList.map((country, index) => {
            return (
              <option
                key={index}
                value={country.value}
                className="w-full text-base "
              >
                {country.label}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}
