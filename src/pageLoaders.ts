import type { ComponentType } from 'react'
import { AlevelTutor } from './pages/AlevelTutor.tsx'
import { BritishCurriculum } from './pages/BritishCurriculum.tsx'
import { Home } from './pages/Home.tsx'
import { IbCurriculum } from './pages/IbCurriculum.tsx'
import { MathsTutor } from './pages/MathsTutor.tsx'
import { NotFound } from './pages/NotFound.tsx'

// Pages are imported statically. A dynamic import() from the client entry put
// each page in a chunk that imported main-*.js, and main.tsx awaited that
// chunk, so the cycle never finished and React never hydrated.
export const pages: Record<string, ComponentType> = {
  home: Home,
  'british-curriculum': BritishCurriculum,
  ib: IbCurriculum,
  'igcse-gcse-maths-tutor': MathsTutor,
  'a-level-tutor': AlevelTutor,
  'not-found': NotFound,
}
