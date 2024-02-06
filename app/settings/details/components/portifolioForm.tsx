import FileCard from './uploadStatusCard'
import UploadInput from './uploadInput'

export default function PortifolioForm() {
  return (
    <div className="my-5 flex w-full flex-col sm:flex-row md:w-4/5">
      <div className="w-2/5">
        <h3 className="py-1 font-semibold">Portfolio projects</h3>
        <div className="text-xs text-zinc-500">
          Share a few snippets of your work.
        </div>
      </div>
      <div className="mt-5 w-full md:mt-0">
        <UploadInput />
        <FileCard />
      </div>
    </div>
  )
}
