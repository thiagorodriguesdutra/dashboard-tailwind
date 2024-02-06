import React from 'react'
import Progress from '@/components/ui/progress'
import { CheckCircle2, File, Trash2 } from 'lucide-react'

const DATA = [
  {
    fileName: 'Tech design requirements.pdf',
    uploadedSizeQuantity: '200 KB',
    progressStatus: 100,
  },
  {
    fileName: 'Dashboard prototype recording.mp4',
    uploadedSizeQuantity: '16 MB',
    progressStatus: 40,
  },
  {
    fileName: 'Dashboard prototype FINAL.fig',
    uploadedSizeQuantity: '4.2 MB',
    progressStatus: 65,
  },
]

export default function UploadStatusCard() {
  return (
    <div>
      {DATA.map((item, index) => (
        <div
          key={index}
          className="mt-3 w-full rounded-lg border border-violet-500 p-6"
        >
          <div className="flex w-full gap-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-violet-50 p-2">
              <File size={16} className="text-violet-500" />
            </div>
            <div className="flex w-full items-baseline justify-between">
              <div className="self-end">
                <p className="font-medium">{item.fileName}</p>
                <span className="block text-zinc-500">
                  {item.uploadedSizeQuantity}
                </span>
              </div>
              {item.progressStatus >= 100 ? (
                <CheckCircle2
                  size={20}
                  className=" fill-violet-500 text-white"
                />
              ) : (
                <button
                  title="Stop downloading"
                  onClick={(e) => e.preventDefault()}
                >
                  <Trash2 size={20} />
                </button>
              )}
            </div>
          </div>
          <Progress value={item.progressStatus} />
        </div>
      ))}
    </div>
  )
}
