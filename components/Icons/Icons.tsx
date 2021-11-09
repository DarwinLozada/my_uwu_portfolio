import { FC } from 'react'

interface IconsProps {
  className?: string
}

export const Download: FC<IconsProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 20 18"
      fill="none"
      className={`fill-current stroke-current stroke-2 ${className}`}
    >
      <path
        d="M10.0001 11.55L13.4001 8.15001M10.0001 11.55V1.35001V11.55ZM10.0001 11.55L6.6001 8.15001L10.0001 11.55Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 13.25L2.02785 15.3623C2.11978 15.73 2.332 16.0565 2.63078 16.2899C2.92956 16.5232 3.29776 16.6499 3.67685 16.65H16.3231C16.7022 16.6499 17.0704 16.5232 17.3692 16.2899C17.668 16.0565 17.8802 15.73 17.9722 15.3623L18.5 13.25"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Planet: FC<IconsProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 27 26"
      fill="none"
      className={`fill-current stroke-current stroke-0 ${className}`}
    >
      <path d="M19.1685 15.6C19.2725 14.742 19.3505 13.884 19.3505 13C19.3505 12.116 19.2725 11.258 19.1685 10.4H23.5625C23.7705 11.232 23.9005 12.103 23.9005 13C23.9005 13.897 23.7705 14.768 23.5625 15.6H19.1685ZM16.8675 22.828C17.6475 21.385 18.2455 19.825 18.6615 18.2H22.4965C21.237 20.3688 19.2388 22.0116 16.8675 22.828ZM16.5425 15.6H10.4585C10.3285 14.742 10.2505 13.884 10.2505 13C10.2505 12.116 10.3285 11.245 10.4585 10.4H16.5425C16.6595 11.245 16.7505 12.116 16.7505 13C16.7505 13.884 16.6595 14.742 16.5425 15.6ZM13.5005 23.348C12.4215 21.788 11.5505 20.059 11.0175 18.2H15.9835C15.4505 20.059 14.5795 21.788 13.5005 23.348ZM8.30049 7.8H4.50449C5.751 5.62538 7.74772 3.97993 10.1205 3.172C9.34049 4.615 8.75549 6.175 8.30049 7.8ZM4.50449 18.2H8.30049C8.75549 19.825 9.34049 21.385 10.1205 22.828C7.7527 22.0112 5.75879 20.368 4.50449 18.2ZM3.43849 15.6C3.23049 14.768 3.10049 13.897 3.10049 13C3.10049 12.103 3.23049 11.232 3.43849 10.4H7.83249C7.72849 11.258 7.65049 12.116 7.65049 13C7.65049 13.884 7.72849 14.742 7.83249 15.6H3.43849ZM13.5005 2.639C14.5795 4.199 15.4505 5.941 15.9835 7.8H11.0175C11.5505 5.941 12.4215 4.199 13.5005 2.639ZM22.4965 7.8H18.6615C18.2546 6.1899 17.6521 4.63566 16.8675 3.172C19.2595 3.991 21.2485 5.642 22.4965 7.8ZM13.5005 0C6.31149 0 0.500488 5.85 0.500488 13C0.500488 16.4478 1.87013 19.7544 4.3081 22.1924C5.51526 23.3995 6.94837 24.3571 8.5256 25.0104C10.1028 25.6637 11.7933 26 13.5005 26C16.9483 26 20.2549 24.6304 22.6929 22.1924C25.1308 19.7544 26.5005 16.4478 26.5005 13C26.5005 11.2928 26.1642 9.60235 25.5109 8.02512C24.8576 6.44788 23.9 5.01477 22.6929 3.80761C21.4857 2.60045 20.0526 1.64288 18.4754 0.989566C16.8981 0.336255 15.2077 0 13.5005 0Z" />
    </svg>
  )
}

export const Clip: FC<IconsProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`fill-current stroke-current stroke-2 ${className}`}
      fill="none"
    >
      <path
        d="M11.5448 8.45596C10.7257 7.6372 9.61494 7.17725 8.45679 7.17725C7.29864 7.17725 6.18789 7.6372 5.36879 8.45596L2.27979 11.544C1.46067 12.3631 1.00049 13.474 1.00049 14.6325C1.00049 15.7909 1.46067 16.9018 2.27979 17.721C3.09891 18.5401 4.20987 19.0003 5.36829 19.0003C6.5267 19.0003 7.63767 18.5401 8.45679 17.721L10.0008 16.177"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.45679 11.5441C9.27589 12.3628 10.3866 12.8228 11.5448 12.8228C12.7029 12.8228 13.8137 12.3628 14.6328 11.5441L17.7218 8.45605C18.5409 7.63693 19.0011 6.52597 19.0011 5.36755C19.0011 4.20914 18.5409 3.09818 17.7218 2.27905C16.9027 1.45993 15.7917 0.999756 14.6333 0.999756C13.4749 0.999756 12.3639 1.45993 11.5448 2.27905L10.0008 3.82305"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}