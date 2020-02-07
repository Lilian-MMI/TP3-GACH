async function recupere_quizz() {
    const res = await fetch('q1/quiz1.json');
    if (res.ok){
       const json = await res.json();
       return json.quiz;
    }
    else throw new Error(res.status);
 }