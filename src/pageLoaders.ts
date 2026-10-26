import type { ComponentType } from 'react'
import { BritishCurriculum } from './pages/BritishCurriculum.tsx'
import { Home } from './pages/Home.tsx'
import { MathsTutor } from './pages/MathsTutor.tsx'
import { NotFound } from './pages/NotFound.tsx'

// Pages are imported statically. A dynamic import() from the client entry put
// each page in a chunk that imported main-*.js, and main.tsx awaited that
// chunk, so the cycle never finished and React never hydrated.
export const pages: Record<string, ComponentType> = {
  home: Home,
  'british-curriculum': BritishCurriculum,
  'igcse-gcse-maths-tutor': MathsTutor,
  'not-found': NotFound,
}
