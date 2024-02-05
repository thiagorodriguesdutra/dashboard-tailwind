import { Bold, Italic, Link2, List, ListOrdered } from 'lucide-react'

export default function BioInput() {
  return (
    <div className="my-5 flex w-4/5">
      <div className="w-2/5">
        <h3 className="py-1">Bio</h3>
        <div className="text-xs text-zinc-500">Write a short introduction.</div>
      </div>
      <div className="flex-1">
        <div className="flex w-4/5 items-center gap-4">
          <select
            disabled
            className="flex-1 rounded-lg border p-3 focus-within:border-violet-700 focus:outline-none"
          >
            <option value="normal" className="">
              Normal text
            </option>
          </select>
          <div className="flex gap-2 text-zinc-400">
            <button onClick={(e) => e.preventDefault()}>
              <Bold size={20} />
            </button>
            <button onClick={(e) => e.preventDefault()}>
              <Italic size={20} />
            </button>
            <button onClick={(e) => e.preventDefault()}>
              <Link2 size={20} />
            </button>
            <button onClick={(e) => e.preventDefault()}>
              <List size={20} />
            </button>
            <button onClick={(e) => e.preventDefault()}>
              <ListOrdered size={20} />
            </button>
          </div>
        </div>
        <div className="mt-3">
          <label htmlFor="bio"></label>
          <textarea
            name="bio"
            id="bio"
            className="h-32 w-full rounded-lg border p-2 focus-within:border-violet-700 focus:outline-none"
          />
        </div>
        <div className="text-xxs text-zinc-500">{'0'} characters left</div>
      </div>
    </div>
  )
}
