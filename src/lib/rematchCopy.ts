export const REMATCH_LINE =
  "Not the right fit after your first paid lesson? We'll match you with a different tutor straight away, and you won't be charged for that lesson."

const REMATCH_FAQ_REST =
  "If your child's first paid lesson after the trial isn't the right fit, tell us and we'll match them with a different tutor straight away. You won't be charged for that lesson. This applies to the first paid lesson in each subject."

export const HOME_REMATCH_FAQ = {
  question: "What if my child doesn't get on with their tutor?",
  answer: `The 30-minute trial lesson is free. ${REMATCH_FAQ_REST}`,
}

export function subjectRematchFaq(subject: string) {
  return {
    question: `What if my child doesn't get on with their ${subject} tutor?`,
    answer: `The 30-minute trial lesson is free. ${REMATCH_FAQ_REST}`,
  }
}
