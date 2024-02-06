import Avatar from '@/components/avatar'
import UploadInput from './uploadInput'

export default function UploadForm() {
  return (
    <div className="my-5 flex h-auto w-full flex-col gap-2 sm:flex-row sm:gap-0 md:h-32 md:w-4/5">
      <div className="w-2/5">
        <h3 className="py-1 font-semibold">Your Photo</h3>
        <div className="text-xs text-zinc-500">
          This will be displayed on your profile.
        </div>
      </div>
      <div className="flex w-full flex-col items-baseline gap-4 sm:flex-row">
        <div className="self-start">
          <Avatar />
        </div>
        <UploadInput />
      </div>
    </div>
  )
}
