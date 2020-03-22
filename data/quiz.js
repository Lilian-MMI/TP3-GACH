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
  }
];

export function getTheme(id) {
  return listeTheme.find(item => item.id === id);
}

export function getQuiz(id) {
  return listeQuiz.find(item => item.id === id);
}
