async function getQuizAjax(idQuiz) {
  const resp = await fetch("../data/q${idQuiz}/quiz${idQuiz}");
  if (resp.ok) {
    const json = await resp.json();
    return json;
  } else throw new Error(resp.status);
}
