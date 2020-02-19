<template>
  <div v-if="theme">
    <div class="d-flex align-items-end quiz-title-bloc" v-for="quiz in listeQuiz" :key="quiz.id">
      <h3 class="flex-fill quiz-title-text">{{quiz.titre}}</h3>
      <button type="button" class="btn btn-secondary btn-sm">
        Lancer
      </button>
    </div>
  </div>
</template>

<script>
import { getTheme, getListeQuiz } from "../../data/quiz.js";
export default {
  name: "Theme",
  props: ["idTheme"],
  data: function() {
    return {
      idQuiz: null
    };
  },
  computed: {
    theme: function() {
      return getTheme(this.idTheme);
    },
    listeQuiz: function() {
      return getListeQuiz(this.idTheme);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quiz-title-bloc {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.quiz-title-text {
  margin: 0;
}
</style>
