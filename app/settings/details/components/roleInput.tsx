export default function RoleInput() {
  return (
    <div className="my-5 flex w-full flex-col gap-1 align-baseline sm:flex-row md:w-4/5">
      <h3 className="w-2/5 font-semibold">Role</h3>
      <div className="w-full">
        <label htmlFor="role" className=" sr-only">
          Role
        </label>
        <input
          type="text"
          name="role"
          id="role"
          placeholder="Role"
          className="w-full flex-1 rounded-lg border p-2"
        />
      </div>
    </div>
  )
}
