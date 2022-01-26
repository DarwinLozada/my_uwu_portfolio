import { FC } from 'react'
import NextImage from 'next/image'

interface Props {
  src: string
  alt: string
  width: string
  height: string
}

const Image: FC<Props> = ({ src, alt, width, height }) => {
  return (
    <figure className="relative">
      <NextImage
        src={src}
        layout="intrinsic"
        alt={alt}
        width={width}
        height={height}
      />
    </figure>
  )
}

export default Image