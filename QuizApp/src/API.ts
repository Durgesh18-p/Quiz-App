export type Question = {
  category : string,
  correct_answer : string,
  difficulty: string,
  incorrect_answer : string[],
  question : string,
  type : string
}

export type QuestionStatec= Question & {answers:string[]}

export enum Difficult {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficult) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
  const data = await ((await fetch(endpoint))).json()
  console.log(data)
}