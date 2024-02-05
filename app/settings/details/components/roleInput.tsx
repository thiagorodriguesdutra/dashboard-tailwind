export default function RoleInput() {
  return (
    <div className="my-5 flex w-4/5 align-baseline">
      <h3 className="w-2/5">Role</h3>
      <label htmlFor="role" className="sr-only">
        Role
      </label>
      <div className="leading-0 flex-1 appearance-none rounded-lg border pl-2 focus-within:border focus-within:border-violet-500">
        <input
          name="role"
          type="text"
          className="w-full bg-transparent p-2 outline-0"
          placeholder="Role"
        />
      </div>
    </div>
  )
}
