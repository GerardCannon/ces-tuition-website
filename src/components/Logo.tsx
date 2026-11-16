import { logoFooter, logoHeader } from '@/components/logoAssets'

const ALT = 'CES Tuition, Cannon Education Solutions'

const lockups = {
  header: logoHeader,
  footer: logoFooter,
} as const

export function Logo({
  className = '',
  variant = 'header',
}: {
  className?: string
  variant?: keyof typeof lockups
}) {
  const logo = lockups[variant]
  return (
    <img
      src={logo.src}
      alt={ALT}
      width={logo.width}
      height={logo.height}
      className={className}
    />
  )
}
