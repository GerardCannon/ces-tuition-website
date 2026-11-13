import { useAnalyticsRouteId } from '@/lib/goatcounter'

const BANNER_TEXT = 'Did you know CES families can earn free lessons? Find out how →'

export function FreeLessonsBanner() {
  const routeId = useAnalyticsRouteId()
  const href = routeId === 'home' ? '#free-lessons' : '/#free-lessons'

  return (
    <div
      data-free-lessons-banner
      role="region"
      aria-label="Free lessons"
      className="free-lessons-banner fixed inset-x-0 top-0 z-[60] flex items-stretch bg-[#ffe24a] text-black"
    >
      <a
        href={href}
        data-goatcounter-click="free-lessons-banner-click"
        data-goatcounter-title="Free lessons banner click"
        className="flex min-w-0 flex-1 items-center justify-center px-2 py-1.5 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-black sm:px-3 sm:py-0"
      >
        <span className="w-full text-[13px] font-semibold leading-tight sm:whitespace-nowrap sm:text-[15px] sm:font-medium sm:leading-none">
          {BANNER_TEXT}
        </span>
      </a>
      <button
        type="button"
        aria-label="Close"
        data-free-lessons-banner-close
        data-goatcounter-click="free-lessons-banner-close"
        data-goatcounter-title="Free lessons banner close"
        className="flex w-8 shrink-0 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-black sm:w-10"
      >
        <span aria-hidden="true" className="text-lg leading-none sm:text-2xl">✕</span>
      </button>
    </div>
  )
}
