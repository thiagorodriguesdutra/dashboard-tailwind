import { UploadCloud } from 'lucide-react'

export default function UploadInput() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <label
        htmlFor="dropzone-file"
        className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <div className="flex size-10 items-center justify-center rounded-full bg-zinc-50">
            <UploadCloud className="rounded-full bg-zinc-100 p-1" />
          </div>
          <p className="mb-2 text-sm">
            <span className="font-semibold text-violet-700">
              Click to upload
            </span>{' '}
            or drag and drop
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input disabled id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  )
}
