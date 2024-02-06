import { Search } from 'lucide-react'

export default function SearchComponent() {
  return (
    <div className="w-full">
      <div className="relative mb-6 w-full">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
          <Search size={24} className=" text-zinc-500" />
        </div>
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="search"
          className="block w-full rounded-lg border p-2 ps-11"
          placeholder="Search"
        />
      </div>
    </div>
  )
}
