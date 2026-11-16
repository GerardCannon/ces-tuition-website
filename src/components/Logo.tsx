import { logoHeader } from '@/components/logoAssets'

const ALT = 'CES Tuition, Cannon Education Solutions'

/** Rendered lockup width. The header home link and the footer image both use this. */
export const logoLockupClass =
  'w-[calc(100vw-7.75rem)] max-w-[13.5rem] md:w-[8.5rem] md:max-w-[8.5rem] lg:w-[13rem] lg:max-w-[13rem] xl:w-[20rem] xl:max-w-none'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <img
      src={logoHeader.src}
      alt={ALT}
      width={logoHeader.width}
      height={logoHeader.height}
      className={className}
    />
  )
}
