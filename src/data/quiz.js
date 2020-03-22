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
    id: 3,
    titre: "Les membres de la famille royale",
    idTheme: 2
  }
];

export function getTheme(id) {
  return listeTheme.find(item => item.id === id);
}

export function getQuiz(id) {
  return listeQuiz.find(item => item.id === id);
}

// recherche les quiz rattachés à un thème dont l'id est
// passé en paramètre
export function getListeQuiz(idTheme) {
  return listeQuiz.filter(item => item.idTheme === idTheme);
}
