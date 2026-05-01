type Props = { className?: string }

export function ZyynLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="nzg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00ff87" />
          <stop offset="1" stopColor="#00cc6a" />
        </linearGradient>
      </defs>
      {/* spade-like shape */}
      <path
        d="M20 4 L33 18 C36 22 34 28 30 30 C27 31.5 24 30.5 22 28 L22 32 L18 32 L18 28 C16 30.5 13 31.5 10 30 C6 28 4 22 7 18 Z"
        fill="url(#nzg)"
      />
      <path
        d="M20 12 L26 19 C27.2 20.5 26.5 22.7 25 23.5 C23.7 24.2 22.2 23.7 21.3 22.6 L20 21 L18.7 22.6 C17.8 23.7 16.3 24.2 15 23.5 C13.5 22.7 12.8 20.5 14 19 Z"
        fill="#0a0a0a"
        opacity="0.6"
      />
    </svg>
  )
}
