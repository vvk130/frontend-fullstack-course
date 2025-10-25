import { DetailTable } from '@/components/DetailTable'
import { fetchItemById } from '@/fetch'
import type { QuestionDto } from '@/utils/dtos'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/quiz/$quizId')({
  loader: async ({ params: { quizId } }) => {
    return fetchItemById<QuestionDto>('api/question/', quizId)
  },
  component: RouteComponent,
})

function RouteComponent() {
  const quiz = Route.useLoaderData()
  return (<>
  <div>
    <h1>{quiz.questionSentence}</h1>
    <h2>Difficulty: {quiz.difficulty}</h2>
    <DetailTable data={quiz} />
    {quiz.options.map((option, index) => (
      <div key={index} className="horse-row">
        {option.text}
      </div>
    ))}
  </div>
  </>)
}
