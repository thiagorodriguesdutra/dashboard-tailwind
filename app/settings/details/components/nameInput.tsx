export default function NameInput() {
  return (
    <div className="my-5 flex w-full flex-col gap-1 align-baseline sm:flex-row md:w-4/5">
      <h3 className="w-2/5 font-semibold">Name</h3>
      <div className="flex w-full gap-5">
        <label htmlFor="first-name" className=" sr-only">
          First Name
        </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="First Name"
          className="w-full flex-1 rounded-lg border p-2"
        />
        <label htmlFor="last-name" className=" sr-only">
          Last Name
        </label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Last Name"
          className="w-full flex-1 rounded-lg border p-2"
        />
      </div>
    </div>
  )
}
