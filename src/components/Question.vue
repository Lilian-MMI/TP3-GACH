<template>
  <div v-if="question">
    <div
      class="d-flex align-items-end quiz-title-bloc"
      v-for="quiz in listeQuiz"
      :key="quiz.id"
    >
      <h3 class="flex-fill quiz-title-text">{{ quiz.titre }}</h3>
      <button
        type="button"
        class="btn btn-secondary btn-sm"
        @click="selectQuiz(quiz.id)"
      >
        Lancer
      </button>
    </div>
  </div>
</template>

<script>

import { getQuiz } from "../data/quiz";
import { getQuizAjax } from "../data/ajax";

export default {
  name: "Question",
  props: ["listeQuestion"],
  data: function() {
    return {
      Question: null,
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.theme-title {
  margin-right: 1rem;
}
</style>
