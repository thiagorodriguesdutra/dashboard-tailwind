import { Search } from 'lucide-react'

export default function SearchComponent() {
  return (
    <form className="mb-3">
      <label className="sr-only">Search</label>
      <div className="leading-0 flex appearance-none items-center rounded-md border focus-within:border-2 focus-within:border-violet-500">
        <Search size={20} className="mx-2 text-gray-400" />
        <input
          type="search"
          className="w-full bg-transparent py-2 pr-2 outline-0"
          placeholder="Search"
        />
      </div>
    </form>
  )
}
