import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
  color?: 'default' | 'primary'
}

export default function Button({ name, color, ...rest }: ButtonProps) {
  const colorIsDefault =
    color === 'default' ? 'border bg-transparent hover:bg-zinc-50' : ''
  const colorIsPrimary =
    color === 'primary' ? 'bg-violet-700 text-white hover:bg-violet-600' : ''

  return (
    <button
      className={`${colorIsDefault} ${colorIsPrimary} rounded-lg px-4 py-2`}
      {...rest}
    >
      {name}
    </button>
  )
}
