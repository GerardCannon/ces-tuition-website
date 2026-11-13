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
      className="fixed inset-x-0 top-0 z-[60] flex h-[38px] items-stretch bg-[#ffe24a] text-black"
    >
      <a
        href={href}
        data-goatcounter-click="free-lessons-banner-click"
        data-goatcounter-title="Free lessons banner click"
        className="flex min-w-0 flex-1 items-center justify-center whitespace-nowrap px-2 text-[clamp(9px,2.8vw,15px)] font-semibold leading-none tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-black md:tracking-normal"
      >
        {BANNER_TEXT}
      </a>
      <button
        type="button"
        aria-label="Close"
        data-free-lessons-banner-close
        data-goatcounter-click="free-lessons-banner-close"
        data-goatcounter-title="Free lessons banner close"
        className="flex w-8 shrink-0 items-center justify-center text-base leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-black"
      >
        <span aria-hidden="true">✕</span>
      </button>
    </div>
  )
}
