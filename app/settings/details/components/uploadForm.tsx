import Avatar from '@/components/avatar'
import UploadInput from './uploadInput'

export default function UploadForm() {
  return (
    <div className="my-5 flex h-32 w-4/5">
      <div className="w-2/5">
        <h3 className="py-1">Your Photo</h3>
        <div className="text-xs text-zinc-500">
          This will be displayed on your profile.
        </div>
      </div>
      <div className="flex w-full flex-1 items-baseline gap-4">
        <div className="self-start">
          <Avatar />
        </div>
        <UploadInput />
      </div>
    </div>
  )
}
