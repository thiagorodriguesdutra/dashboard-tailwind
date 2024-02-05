import { Clock } from 'lucide-react'

const timeZoneList = [
  { label: 'Pacific Standard Time (PST)', value: 'PST', UTC: 'UTC−08:00' },
  // more...
]

export default function TimeZoneInput() {
  return (
    <div className="my-5 flex w-4/5 align-baseline">
      <h3 className="w-2/5">Timezone</h3>
      <div className="leading-0 flex flex-1 items-center gap-1 rounded-lg border p-2 text-sm focus-within:border-2 focus-within:border-violet-500">
        <Clock />
        <label htmlFor="timezone" className="sr-only">
          Timezone
        </label>
        <select
          disabled
          name="timezone"
          className="flex-1 text-base focus-within:outline-none"
        >
          {timeZoneList.map((zone, index) => {
            return (
              <option
                key={index}
                value={zone.value}
                className="w-full text-base"
              >
                {zone.label} {zone.UTC}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}
