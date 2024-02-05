import { User } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

interface AvatarProps {
  img?: StaticImageData
}

export default function Avatar({ img }: AvatarProps) {
  return (
    <div className="inline-flex  size-16 items-center justify-center rounded-full bg-violet-50">
      {img ? (
        <Image src={img} alt="" className="rounded-full object-cover" />
      ) : (
        <User size={32} className="rounded-full text-violet-600" />
      )}
    </div>
  )
}
