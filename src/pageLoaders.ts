import type { ComponentType } from 'react'
import { AmericanCurriculum } from './pages/AmericanCurriculum.tsx'
import { AlevelTutor } from './pages/AlevelTutor.tsx'
import { BiologyTutor } from './pages/BiologyTutor.tsx'
import { BritishCurriculum } from './pages/BritishCurriculum.tsx'
import { ChemistryTutor } from './pages/ChemistryTutor.tsx'
import { EconomicsTutor } from './pages/EconomicsTutor.tsx'
import { EnglishTutor } from './pages/EnglishTutor.tsx'
import { Home } from './pages/Home.tsx'
import { IbCurriculum } from './pages/IbCurriculum.tsx'
import { IbMathsTutor } from './pages/IbMathsTutor.tsx'
import { MathsTutor } from './pages/MathsTutor.tsx'
import { NotFound } from './pages/NotFound.tsx'
import { PhysicsTutor } from './pages/PhysicsTutor.tsx'

// Pages are imported statically. A dynamic import() from the client entry put
// each page in a chunk that imported main-*.js, and main.tsx awaited that
// chunk, so the cycle never finished and React never hydrated.
export const pages: Record<string, ComponentType> = {
  home: Home,
  'british-curriculum': BritishCurriculum,
  ib: IbCurriculum,
  'american-curriculum': AmericanCurriculum,
  'igcse-gcse-maths-tutor': MathsTutor,
  'a-level-tutor': AlevelTutor,
  'chemistry-tutor': ChemistryTutor,
  'physics-tutor': PhysicsTutor,
  'biology-tutor': BiologyTutor,
  'english-tutor': EnglishTutor,
  'economics-tutor': EconomicsTutor,
  'ib-maths-tutor': IbMathsTutor,
  'not-found': NotFound,
}
