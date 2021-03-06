import { FC, ReactNode } from 'react'

interface Props {
  icon: ReactNode
  text: string
  bgColor?: string
  textColor?: string
  size?: 'medium' | 'large'
}

const sizesClasses = {
  medium: 'py-2 px-3 gap-2 text-base',
  large: 'py-3 px-4 gap-2 text-lg',
}

const Badge: FC<Props> = ({ icon, bgColor, text, textColor, size = 'medium' }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`flex h-auto items-center justify-center whitespace-nowrap rounded-2xl leading-none ${sizesClasses[size]}`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex max-w-[1rem] leading-none">{icon}</div>
        <span style={{ color: textColor }}>{text.replace('_', ' ')}</span>
      </div>
    </div>
  )
}

export default Badge
