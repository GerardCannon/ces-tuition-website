import { logoFooter, logoHeader } from '@/components/logoAssets'

const ALT = 'CES Tuition, Cannon Education Solutions'

const lockups = {
  header: logoHeader,
  footer: logoFooter,
} as const

/** Rendered lockup width. The header home link and the footer image both use this. */
export const logoLockupClass =
  'w-[calc(100vw-7.75rem)] max-w-[13.5rem] md:w-[8.5rem] md:max-w-[8.5rem] lg:w-[13rem] lg:max-w-[13rem] xl:w-[20rem] xl:max-w-none'

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
