type Props = { className?: string }

export function TrizzLogo({ className }: Props) {
  return (
    <img
      src="/TG LOGO.png"
      alt="Trizz Logo"
      className={`object-contain ${className ?? ''}`}
    />
  )
}
