async function recupere_quizz(z) {
   if (z == 1) { 
      const res = await fetch('../data/data/q1/quiz1.json');
      if (res.ok) {
         const json = await res.json();
         alert('oui');
         return json.question;
      }
      else throw new Error(res.status); 
   }
   else if (z == 2) { 
      const res = await fetch('../data/data/q2/quiz2.json');
      if (res.ok) {
         const json = await res.json();
         alert('oui');
         return json.question;
      }
      else throw new Error(res.status); 
   } 
}

async function verif_reponse() {

}