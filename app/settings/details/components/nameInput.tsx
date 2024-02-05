export default function NameInput() {
  return (
    <div className="my-5 flex w-4/5 align-baseline">
      <h3 className="w-2/5">Name</h3>
      <div className="flex flex-1 gap-3">
        <label htmlFor="first-name" className="sr-only">
          First Name
        </label>
        <input
          name="first-name"
          type="text"
          placeholder="First Name"
          className="flex-1 rounded-lg border py-2 pl-2 outline-none focus-within:border focus-within:border-violet-500"
        />
        <label htmlFor="last-name" className="sr-only">
          Last Name
        </label>
        <input
          name="last-name"
          type="text"
          placeholder="Last Name"
          className="flex-1 rounded-lg border py-2 pl-2 outline-none focus-within:border focus-within:border-violet-500"
        />
      </div>
    </div>
  )
}
