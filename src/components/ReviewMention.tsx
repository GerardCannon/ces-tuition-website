import { Star } from '@phosphor-icons/react'

export function ReviewMention({ children }: { children: string }) {
  return (
    <p className="mx-auto max-w-xs text-center text-sm text-white sm:max-w-none sm:text-base">
      <span className="inline-flex translate-y-[-1px] align-middle text-white" role="img" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} size={16} weight="fill" aria-hidden="true" />
        ))}
      </span>{' '}
      <span className="font-semibold align-middle">{children}</span>
    </p>
  )
}
