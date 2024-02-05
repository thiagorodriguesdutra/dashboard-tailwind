import { Mail } from 'lucide-react'

export default function EmailInput() {
  return (
    <div className="my-5 flex w-4/5 align-baseline">
      <h3 className="w-2/5">Email address</h3>
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <div className="leading-0 flex flex-1 appearance-none items-center rounded-lg border focus-within:border focus-within:border-violet-500">
        <Mail size={20} className="mx-2 text-gray-400" />
        <input
          name="email"
          type="email"
          className="w-full bg-transparent py-2 pr-2 outline-0"
          placeholder="Email"
        />
      </div>
    </div>
  )
}
