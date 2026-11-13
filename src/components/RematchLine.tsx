import { REMATCH_LINE } from '@/lib/rematchCopy'
import { cn } from '@/lib/utils'

// Plain text. Not a link, and not a GoatCounter target.
export function RematchLine({
  tone,
  align = 'center',
  className,
}: {
  tone: 'on-primary' | 'on-light'
  align?: 'center' | 'start'
  className?: string
}) {
  return (
    <p
      className={cn(
        'max-w-2xl text-balance font-normal leading-relaxed',
        align === 'center' ? 'mx-auto' : 'mt-4 text-left',
        tone === 'on-primary'
          ? 'pb-3 text-xs text-white/80 sm:text-sm'
          : 'text-sm text-muted-foreground',
        className,
      )}
    >
      {REMATCH_LINE}
    </p>
  )
}
