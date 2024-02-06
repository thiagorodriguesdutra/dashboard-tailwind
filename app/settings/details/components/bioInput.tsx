import {
  Bold,
  ChevronDown,
  Italic,
  Link2,
  List,
  ListOrdered,
} from 'lucide-react'

export default function BioInput() {
  return (
    <div className="my-5 flex w-full flex-col sm:flex-row md:w-4/5">
      <div className="w-2/5">
        <h3 className="py-1 font-semibold">Bio</h3>
        <div className="text-xs text-zinc-500">Write a short introduction.</div>
      </div>

      <div className="w-full">
        <div className="flex w-full flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4 md:w-4/5">
          <div className="mt-5 flex w-full justify-between rounded-lg border p-2 sm:mt-0">
            <div>Normal Text</div>
            <ChevronDown className="text-zinc-500" />
          </div>
          <div className="flex gap-2 text-zinc-400">
            <button title="Bold button" onClick={(e) => e.preventDefault()}>
              <Bold size={20} />
            </button>
            <button title="Italic button" onClick={(e) => e.preventDefault()}>
              <Italic size={20} />
            </button>
            <button
              title="Insert link button"
              onClick={(e) => e.preventDefault()}
            >
              <Link2 size={20} />
            </button>
            <button
              title="List unordered button"
              onClick={(e) => e.preventDefault()}
            >
              <List size={20} />
            </button>
            <button
              title="List ordered button"
              onClick={(e) => e.preventDefault()}
            >
              <ListOrdered size={20} />
            </button>
          </div>
        </div>
        <div className="mt-5 w-full sm:mt-3">
          <label htmlFor="bio"></label>
          <textarea
            name="bio"
            id="bio"
            className="h-32 w-full resize-none rounded-lg border p-2"
          />
        </div>
        <div className="text-sm text-zinc-500">{'0'} characters left</div>
      </div>
    </div>
  )
}
