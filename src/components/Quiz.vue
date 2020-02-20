<template>
  <h3>Quiz : {{ idQuiz }}</h3>
  <div>Question : {{ question.titre }}</div>
</template>

<script>
import { getQuizAjax } from "../data/jsonQuiz";
export default {
  name: "Quiz",
  props: ["idQuiz]"],
  data: function() {
    return {};
  },
  computed: {
    quiz: function() {
      const json = getQuizAjax(this.idQuiz);
    }
  }
};
</script>
