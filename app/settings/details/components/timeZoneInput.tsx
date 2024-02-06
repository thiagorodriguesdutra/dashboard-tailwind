import { Clock, ChevronDown } from 'lucide-react'

const timeZoneList = [
  { label: 'Pacific Standard Time (PST)', value: 'PST', UTC: 'UTC−08:00' },
  // more...
]

export default function TimeZoneInput() {
  return (
    <div className="my-5 flex w-full flex-col gap-1 align-baseline sm:flex-row md:w-4/5">
      <h3 className="w-2/5 font-semibold">Timezone</h3>
      <div className="flex w-full justify-between rounded-lg border p-2">
        <div className="flex items-center gap-1">
          <Clock className="text-zinc-500" />
          <div className="flex gap-1">
            {timeZoneList.map((timeZone, index) => (
              <div key={index} className="flex gap-1">
                <div>{timeZone.label}</div>
                <div className="text-zinc-500">{timeZone.UTC}</div>
              </div>
            ))}
          </div>
        </div>
        <ChevronDown className="text-zinc-500" />
      </div>
    </div>
  )
}
