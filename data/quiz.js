export const listeTheme = [
  {
    id: 1,
    titre: "La peinture"
  },
  {
    id: 2,
    titre: "La famille royale d'Angleterre"
  }
];

export const listeQuiz = [
  {
    id: 1,
    titre: "Les peintres de la renaissance",
    idTheme: 1
  },
  {
    id: 2,
    titre: "Le surréalisme",
    idTheme: 1
  },
  {
    id: 1,
    titre: "Quiz 1 pour theme 2",
    idTheme: 2
  },
  {
    id: 2,
    titre: "Quiz 2 pour theme 2",
    idTheme: 2
  }
];

export function getTheme(id) {
  return listeTheme.find(item => item.id === id);
}

export function getQuiz(id) {
  return listeQuiz.find(item => item.id === id);
}
/* Retourne les quiz qui ont comment paramètre l'id associé */
export function getListeQuiz(idTheme) {
  return listeQuiz.filter(item => item.idTheme === idTheme);
}

