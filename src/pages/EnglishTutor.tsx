import { LevelEnquiry } from '@/components/LevelEnquiry'
import { FaqSection, PageSection, PageShell, withVisibleTrialHyphen } from '@/pages/PageShell.tsx'
import { englishCrumbs, englishFaqs } from '@/pages/englishTutorData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function EnglishTutor() {
  return (
    <PageShell
      crumbs={englishCrumbs}
      title="Online IGCSE, A‑level and IB English tutor for families in Dubai and the UAE"
      lede={
        <p>
          Strong reading and writing help in every subject, not only in English lessons. If your child is finding English difficult, or simply wants to feel more confident, we can help.
        </p>
      }
      ctaTitle="Book your free 30‑minute trial"
      ctaBody={
        <p>
          Send us your child's year group and exam board on WhatsApp. We reply within the hour.
        </p>
      }
    >
      <PageSection title="Our lessons">
        <p>
          Your child has one-to-one English lessons with our UK‑trained subject specialists on our interactive online whiteboard.
        </p>
        <p>
          Our whiteboard feels like an in-person lesson, because we share a fully interactive digital copybook with each student.
        </p>
        <p>
          Lessons last one or two hours, whichever suits you, and are scheduled through our app.
        </p>
        <p>
          To get started, simply message us on WhatsApp and we'll arrange a free 30‑minute trial lesson, so we can put your mind at ease.
        </p>
        <p>
          Lessons follow what your child is studying at school. If they're stuck on a piece of homework, we'll always start by working through it together. You can follow your child's progress in our app.
        </p>
      </PageSection>

      <PageSection title="How we help with English" muted>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Reading closely</h3>
          <p>
            Many English questions ask students to look carefully at a piece of writing and explain how it works. We read passages together and talk through what the writer is doing and why.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Planning longer answers</h3>
          <p>
            A good idea can get lost in a long answer. We help your child plan before they write, so each paragraph makes a clear point.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Using evidence</h3>
          <p>
            Answers usually need to be backed up with short quotations or examples. We practise choosing evidence and explaining it, rather than simply repeating it.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Writing to a time limit</h3>
          <p>
            Writing in an exam feels different from writing at home. We practise planning, writing and checking within a set time, so your child gets used to the pace.
          </p>
        </div>
      </PageSection>

      <PageSection title="Levels we teach">
        <p>
          We teach English at IGCSE and A-level, and in the IB MYP and Diploma Programme (DP).
        </p>
        <p>
          Our <a href="/curricula/ib/" className={linkClass}>IB page</a> explains more about how we support students in the MYP and the DP.
        </p>
        <LevelEnquiry
          levels={[
            { id: 'igcse-gcse', label: 'IGCSE English' },
            { id: 'alevel', label: 'A-level English' },
            { id: 'ib', label: 'IB English' },
          ]}
        />
        <p>
          We also teach <a href="/igcse-gcse-maths-tutor/" className={linkClass}>maths</a>, <a href="/chemistry-tutor/" className={linkClass}>chemistry</a>, <a href="/physics-tutor/" className={linkClass}>physics</a>, <a href="/biology-tutor/" className={linkClass}>biology</a> and <a href="/economics-tutor/" className={linkClass}>economics</a>.
        </p>
      </PageSection>

      <PageSection id="igcse-english" title="IGCSE English" muted>
        <p>
          We teach IGCSE English Language and English Literature live and online for students in Dubai, Abu Dhabi, Sharjah and across the UAE.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How IGCSE English is assessed</h3>
          <p>
            English Language is about reading unseen passages closely and writing for different purposes. English Literature is about studying set novels, plays and poems, and writing essays about them. Many schools enter students for both.
          </p>
          <p>
            <strong className="text-foreground">Edexcel International GCSE.</strong> English Language A has a 2-hour 15-minute exam on non-fiction texts and transactional writing (60%). Students then take either a 1-hour 30-minute exam on poetry and prose texts and imaginative writing (40%) or coursework (40%). English Language B is a single 3-hour exam (100%). English Literature has a 2-hour exam on poetry and modern prose (60%). Students then take either a 1-hour 30-minute exam on modern drama and literary heritage texts (40%) or coursework (40%).
          </p>
          <p>
            <strong className="text-foreground">Cambridge IGCSE.</strong> First Language English has a 2-hour Reading paper (50%). Students then take either a 2-hour Directed Writing and Composition paper (50%) or a coursework portfolio (50%).{' '}
            {/* Cambridge 0475 2027/2028 sentence: review after Nov 2027 (wording must be trimmed once the 2027 papers end). */}
            For exams from 2028, Literature in English has a 1-hour 30-minute Poetry and Prose paper (50%). Students then take either a 2-hour Drama and Unseen paper (50%) or coursework (50%). Both papers are open text. Students sitting Literature in English in 2027 follow the earlier structure. They take a 1-hour 30-minute Poetry and Prose paper (50%) and either a 1-hour 30-minute Drama paper (50%) or a 45-minute Drama paper (25%) with a 1-hour 15-minute Unseen paper or coursework (25%).
          </p>
          <p>
            <strong className="text-foreground">OxfordAQA International GCSE.</strong> English Language has a 2-hour Literary Non-Fiction and Composition paper (60%). Students then take either a 2-hour Source-Based Reading and Directed Writing paper (40%) or a non-exam assessment project (40%). English Literature has a 1-hour 30-minute Prose and Drama paper (40%). Students then take either a 2-hour 15-minute Poetry and Unseen Texts paper (60%) or a 1-hour 30-minute Poetry paper (40%) plus a non-exam assessment (20%).
          </p>
          <p>
            IGCSE English papers are not tiered: every student sits the same papers. For English Language, each board also offers an optional speaking assessment, which is reported separately from the main grade. Your child's school decides the board and whether coursework is used, so check with the school for the exact specification it follows.
          </p>
          <p>
            Edexcel's papers are on the <a href="https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-english-language-a-2016.html" target="_blank" rel="noopener" className={linkClass}>International GCSE English Language A</a>, <a href="https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-english-language-b-2016.html" target="_blank" rel="noopener" className={linkClass}>English Language B</a> and <a href="https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-english-literature-2016.html" target="_blank" rel="noopener" className={linkClass}>English Literature</a> pages. Cambridge's papers are on the <a href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-english-first-language-0500/" target="_blank" rel="noopener" className={linkClass}>Cambridge IGCSE First Language English (0500)</a> and <a href="https://www.cambridgeinternational.org/programmes-and-qualifications/english-literature-0475/" target="_blank" rel="noopener" className={linkClass}>Literature in English (0475)</a> pages. OxfordAQA's papers are on the <a href="https://www.oxfordaqa.com/qualification/international-gcse-english-language-9270/" target="_blank" rel="noopener" className={linkClass}>International GCSE English Language (9270)</a> and <a href="https://www.oxfordaqa.com/qualification/international-gcse-english-literature-9275/" target="_blank" rel="noopener" className={linkClass}>English Literature (9275)</a> pages.
          </p>
        </div>
      </PageSection>

      <PageSection id="a-level-english" title="A-level English">
        <p>
          A-level English goes into more depth than IGCSE, with longer essays and wider reading. For more on the step up to A-level, see our <a href="/a-level-tutor/" className={linkClass}>A-level page</a>.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How A-level English is assessed</h3>
          <p>
            <strong className="text-foreground">Edexcel International A Level.</strong> English Language and English Literature each have four exams. In English Language, the two International AS units last 1 hour 45 minutes each and the two A2 units last 2 hours each. Each unit is worth 25% of the International A Level. In English Literature, all four exams last 2 hours and are each worth 25%: Post-2000 Poetry and Prose; Drama; Poetry and Prose; and Shakespeare and Pre-1900 Poetry.
          </p>
          <p>
            <strong className="text-foreground">Cambridge International AS and A Level.</strong> English Language has four papers. Paper 1 Reading (2 hours 15 minutes) and Paper 2 Writing (2 hours) make up the AS Level, at 50% each. Paper 3 Language Analysis and Paper 4 Language Topics (2 hours 15 minutes each) complete the A Level, and each of the four papers is worth 25% of it. Literature in English has four 2-hour papers, each worth 25% of the A Level. The AS Level is Paper 1 Drama and Poetry and Paper 2 Prose and Unseen, and the A Level adds Paper 3 Shakespeare and Drama and Paper 4 Pre- and Post-1900 Poetry and Prose. Cambridge also offers an AS Level in Language and Literature in English, with two 2-hour papers, Paper 1 Writing and Paper 2 Drama, Poetry and Prose, worth 50% each.
          </p>
          <p>
            <strong className="text-foreground">OxfordAQA International AS and A Level.</strong> English Language and English Literature have the same structure. The two International AS papers last 2 hours each and are each worth 20% of the International A Level. The first A2 paper lasts 2 hours and is worth 30%. For the last 30%, students sit either a 2-hour 30-minute exam or a non-exam assessment: a language investigation in English Language, or two essays in English Literature.
          </p>
          <p>
            Your child's school decides the board and the options, so check with the school for the exact specification it follows.
          </p>
          <p>
            Edexcel's units are on the <a href="https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/english-language-2015.html" target="_blank" rel="noopener" className={linkClass}>International A Level English Language</a> and <a href="https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/english-literature-2015.html" target="_blank" rel="noopener" className={linkClass}>English Literature</a> pages. Cambridge's papers are on the <a href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-english-language-9093/" target="_blank" rel="noopener" className={linkClass}>Cambridge International AS and A Level English Language (9093)</a>, <a href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-english-literature-9695/" target="_blank" rel="noopener" className={linkClass}>Literature in English (9695)</a> and <a href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-english-language-and-literature-as-level-only-8695/" target="_blank" rel="noopener" className={linkClass}>AS Level Language and Literature in English (8695)</a> pages. OxfordAQA's papers are on the <a href="https://www.oxfordaqa.com/qualification/international-as-and-a-level-english-language-9670/" target="_blank" rel="noopener" className={linkClass}>International AS and A Level English Language (9670)</a> and <a href="https://www.oxfordaqa.com/qualification/international-as-and-a-level-english-literature-9675/" target="_blank" rel="noopener" className={linkClass}>English Literature (9675)</a> pages.
          </p>
        </div>
      </PageSection>

      <PageSection title="Where to begin" muted>
        <p>
          When you message us, it helps to tell us your child's year group, the exam board and what they find hardest, such as reading, essays or timed writing. If you're not sure of the board, your child's school will be able to tell you, or we can work it out together.
        </p>
      </PageSection>

      {/* Exam lengths keep an ordinary hyphen. The trial helper also rewrites "30-minute" inside "1-hour 30-minute exam". */}
      <FaqSection
        items={withVisibleTrialHyphen(englishFaqs).map((item) =>
          typeof item.answer === 'string'
            ? { ...item, answer: item.answer.split('30\u2011minute exam').join('30-minute exam') }
            : item,
        )}
      />
    </PageShell>
  )
}
