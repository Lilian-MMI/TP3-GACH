<template>
  <main id="app" class="container-fluid">
    <div class="row vh-100">
      <div class="col-lg-4 theme-bloc">
        <ThemeSelect :listeTheme="listeTheme" @select-theme="onSelectTheme" />
        <Theme :idTheme="idTheme" @select-quiz="onSelectQuiz" />
      </div>
      <div class="col-lg-8">
        <Quiz :idQuiz="idQuiz" />
      </div>
    </div>
  </main>
</template>

<script>
import Theme from "./components/Theme.vue";
import ThemeSelect from "./components/ThemeSelect.vue";
import * as data from "./data/quiz";
import Quiz from "./components/Quiz.vue";

export default {
  name: "app",
  components: {
    Theme,
    ThemeSelect,
    Quiz
  },
  data: function() {
    return {
      listeTheme: data.listeTheme,
      idTheme: null,
      idQuiz: null
    };
  },
  methods: {
    onSelectTheme(idTheme) {
      this.idTheme = idTheme;
    },
    onSelectQuiz(idQuiz) {
      this.idQuiz = idQuiz;
    }
  }
};
</script>

<style>
.theme-bloc {
  padding-top: 1rem;
  background-color: #aca0c2;
}
.quiz-bloc {
  padding-top: 1rem;
}
</style>
