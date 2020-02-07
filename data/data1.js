async function recupere_quizz() {
    const res = await fetch('../data/data/q1/quiz1.json');
    if (res.ok){
       const json = await res.json();
       return json.question;
    }
    else throw new Error(res.status);
 }