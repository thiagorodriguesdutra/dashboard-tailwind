interface ProgressProps {
  value: number
}

export default function Progress({ value }: ProgressProps) {
  return (
    <div className="flex w-full items-center gap-3">
      <div className="sr-only">Downloading progress</div>
      <div className="h-2 w-full rounded-full bg-zinc-100">
        <div
          style={{ width: `${value}%` }}
          className="h-2 rounded-full bg-violet-600 p-0.5"
        />
      </div>
      <div>{`${value}%`}</div>
    </div>
  )
}
