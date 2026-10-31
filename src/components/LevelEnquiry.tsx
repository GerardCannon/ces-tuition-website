import { WhatsappLogo } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { useAnalyticsPage, whatsappClick } from '@/lib/goatcounter'
import { whatsappUrl } from '@/lib/whatsapp'

export type LevelEnquiryItem = {
  id: string
  label: string
}

function levelMessage(label: string) {
  return `Hi Gerard, I'd like to ask about ${label} tuition for my child.`
}

export function LevelEnquiry({
  levels,
  heading = "Ask about your child's level",
  line = "Choose a level and WhatsApp opens with a message ready to send. Add your child's year group too, if you can.",
}: {
  levels: readonly LevelEnquiryItem[]
  heading?: string
  line?: string
}) {
  const page = useAnalyticsPage()
  return (
    <div className="max-w-full">
      <h3 className="text-xl font-bold text-foreground mb-2">{heading}</h3>
      <p>{line}</p>
      <div className="flex max-w-full flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
        {levels.map((level) => (
          <Button
            key={level.id}
            asChild
            variant="outline"
            className="h-auto min-h-12 w-full scroll-mb-24 whitespace-normal px-4 py-3 text-center text-base font-semibold text-foreground sm:w-auto"
          >
            <a
              href={whatsappUrl(levelMessage(level.label))}
              aria-label={`WhatsApp us about ${level.label}`}
              {...whatsappClick(page, 'level', level.id)}
              className="flex items-center justify-center gap-2"
            >
              <WhatsappLogo size={22} weight="fill" aria-hidden="true" />
              {level.label}
            </a>
          </Button>
        ))}
      </div>
    </div>
  )
}
