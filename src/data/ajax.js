export async function getQuizAjax(idQuiz) {
  const res = await fetch(`../data/q${idQuiz}/quiz.json`);
  console.log(res.status);
  if (res.ok) {
    const json = await res.json();
    console.log(json);
    return json;
  } else throw new Error(res.status);
}
