import { FC, ReactNode } from 'react'
import { UrlObject } from 'url'

import dynamic from 'next/dynamic'

const LinkComponent = dynamic(() => import('next/link'))

interface Props {
  size?: 'small' | 'medium' | 'large'
  colorScheme?: 'primary' | 'secondary' | 'dark' | 'dogcatcher' | 'ouruniverse'
  inline?: boolean
  anchor?: boolean
  href?: string | UrlObject
  rightIcon?: ReactNode
}

const COLORS = {
  primary: 'bg-brandViolet text-brandWhite',
  secondary: 'bg-brandPink text-brandWhite',
  dark: 'bg-brandBg text-brandWhite',
  dogcatcher: 'bg-dogcatcherRed text-brandWhite',
  ouruniverse: 'bg-ouruniverseWhite text-brandWhite',
}
const SIZES = {
  small: 'text-base px-6 py-2',
  medium: 'text-lg px-8 py-3',
  large: 'text-xl px-12 py-4',
}

const Button: FC<Props> = ({
  size = 'medium',
  colorScheme = 'primary',
  inline = false,
  anchor = false,
  href = null,
  rightIcon,
  children,
}) => {
  if (anchor && !href) {
    console.warn('You need to pass a href as prop in order to use an anchor')
  }

  const buttonClassNames = `flex items-center justify-center rounded-[10px] gap-3 ${
    SIZES[size]
  } ${COLORS[colorScheme]} ${inline ? 'inline-flex' : 'flex'}`

  return (
    <>
      {anchor ? (
        <LinkComponent href={href || '#'}>
          <a className={buttonClassNames}>
            {children}
            {rightIcon || null}
          </a>
        </LinkComponent>
      ) : (
        <button className={buttonClassNames}>
          {children}
          {rightIcon || null}
        </button>
      )}
    </>
  )
}

export default Button