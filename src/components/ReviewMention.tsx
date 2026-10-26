import { Star } from '@phosphor-icons/react'

export function ReviewMention({ children }: { children: string }) {
  return (
    <p className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm sm:text-base text-white">
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-flex text-white" role="img" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={16} weight="fill" aria-hidden="true" />
          ))}
        </span>
        <span className="font-semibold">{children}</span>
      </span>
    </p>
  )
}
