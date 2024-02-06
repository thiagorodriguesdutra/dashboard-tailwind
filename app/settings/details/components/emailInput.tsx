import { Mail } from 'lucide-react'

export default function EmailInput() {
  return (
    <div className="my-5 flex w-full flex-col gap-1 align-baseline sm:flex-row md:w-4/5">
      <h3 className="w-2/5 font-semibold">Email</h3>
      <div className="relative mb-6 w-full">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
          <Mail size={24} className=" text-zinc-500" />
        </div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="text"
          id="email"
          className="block w-full rounded-lg border border-gray-300 p-2 ps-11"
          placeholder="Email"
        />
      </div>
    </div>
  )
}
