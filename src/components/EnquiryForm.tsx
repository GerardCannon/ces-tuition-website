import { FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { WhatsappLogo } from '@phosphor-icons/react'
import { QuickChatLink } from '@/components/QuickChatLink'
import { RematchLine } from '@/components/RematchLine'
import { countWhatsappHomeForm } from '@/lib/bindGoatCounter'
import { useAnalyticsPage, whatsappClick } from '@/lib/goatcounter'
import { useWhatsappLink } from '@/lib/whatsapp'

const fieldClass = 'w-full rounded-lg border border-input bg-background px-3 py-2.5 text-base text-foreground outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'

export function EnquiryForm({
  embedded = false,
  defaultCurriculum = '',
  defaultSubject,
}: {
  embedded?: boolean
  defaultCurriculum?: string
  defaultSubject?: string
} = {}) {
  const whatsappHref = useWhatsappLink()
  const page = useAnalyticsPage()
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const details = [
      `Parent: ${String(data.get('parentName') || '').trim()}`,
      `Curriculum: ${String(data.get('curriculum') || '').trim()}`,
      `Subject: ${String(data.get('subject') || '').trim()}`,
      `Year group: ${String(data.get('yearGroup') || '').trim()}`,
    ].join('\n')
    // The homepage form records the click in script. Inner pages use the
    // data-goatcounter-click attribute on the submit button instead.
    if (page === 'home') countWhatsappHomeForm()
    window.location.href = whatsappHref(details)
  }

  const form = (
    <form onSubmit={onSubmit} className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
      <div>
        <label htmlFor="parent-name" className="block text-sm font-semibold text-foreground mb-1.5">
          Parent name
        </label>
        <input id="parent-name" name="parentName" type="text" required autoComplete="name" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="curriculum" className="block text-sm font-semibold text-foreground mb-1.5">
          Curriculum
        </label>
        <select id="curriculum" name="curriculum" required defaultValue={defaultCurriculum} className={fieldClass}>
          <option value="" disabled>Choose a curriculum</option>
          <option>IGCSE</option>
          <option>A-level</option>
          <option>IB</option>
          <option>American</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-1.5">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="For example, maths"
          className={fieldClass}
          {...(defaultSubject ? { defaultValue: defaultSubject } : {})}
        />
      </div>

      <div>
        <label htmlFor="year-group" className="block text-sm font-semibold text-foreground mb-1.5">
          Year group
        </label>
        <input id="year-group" name="yearGroup" type="text" required placeholder="For example, Year 10" className={fieldClass} />
      </div>

      <Button
        type="submit"
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 text-base"
        {...(page === 'home' ? {} : whatsappClick(page, 'form'))}
      >
        <WhatsappLogo size={22} weight="fill" aria-hidden="true" />
        Send on WhatsApp
      </Button>
      <p className="text-sm text-muted-foreground text-center leading-relaxed">
        This opens WhatsApp with your details filled in. This website does not store the form.
      </p>
      {page === 'home' && !embedded ? (
        <p className="text-center">
          <QuickChatLink placement="home-form" tone="on-light" />
        </p>
      ) : null}
    </form>
  )

  if (embedded) return form

  return (
    <section id="enquire" className="py-16 md:py-24 bg-muted/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Book your free 30-minute trial
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tell us your child's curriculum, subject and year group. WhatsApp opens with your message ready to send. We reply within the hour to arrange your free 30-minute trial. This page does not create an account.
            </p>
            <RematchLine tone="on-light" className="mt-3" />
          </div>
          {form}
        </div>
      </div>
    </section>
  )
}
