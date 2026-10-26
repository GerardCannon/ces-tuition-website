import type { ComponentType } from 'react'

export const pageLoaders: Record<string, () => Promise<ComponentType>> = {
  home: () => import('./pages/Home.tsx').then((module) => module.Home),
  'british-curriculum': () => import('./pages/BritishCurriculum.tsx').then((module) => module.BritishCurriculum),
  'igcse-gcse-maths-tutor': () => import('./pages/MathsTutor.tsx').then((module) => module.MathsTutor),
  'not-found': () => import('./pages/NotFound.tsx').then((module) => module.NotFound),
}
