import { Star } from '@phosphor-icons/react'
import { googleRating } from '@/lib/googleRating'

const reviews = googleRating.count === 1 ? 'review' : 'reviews'
const visibleText = `${googleRating.rating} on Google \u00B7 ${googleRating.count} ${reviews}`
const spokenText = `Rated ${googleRating.rating} out of 5 on Google from ${googleRating.count} ${reviews}, opens in a new tab`

export function GoogleRatingMention() {
  return (
    <p className="text-center">
      <a
        href={googleRating.url}
        target="_blank"
        rel="noopener"
        className="inline-flex min-h-6 max-w-full items-center justify-center gap-1 rounded-sm px-1 text-sm font-semibold text-white underline decoration-white/80 underline-offset-4 outline-none hover:decoration-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-base"
      >
        <Star size={16} weight="fill" aria-hidden="true" className="shrink-0" />
        <span aria-hidden="true">{visibleText}</span>
        <span className="sr-only">{spokenText}</span>
      </a>
    </p>
  )
}
