<template>
  <main id="app" class="container-fluid">
    <div class="row vh-100">
      <div class="col-lg-4 theme-bloc">
        <ThemeSelect :listeTheme="listeTheme" @select-theme="onSelectTheme" />
        <Theme :idTheme="idTheme" />
      </div>
      <div class="col-lg-8 quiz-bloc">QUIZ</div>
    </div>
  </main>
</template>

<script>
import Theme from "./components/Theme.vue";
import ThemeSelect from "./components/ThemeSelect.vue";
import * as data from "../data/quiz";

export default {
  name: "app",
  components: {
    Theme,
    ThemeSelect
  },
  data: function() {
    return {
      listeTheme: data.listeTheme,
      idTheme: null
    };
  },
  methods: {
    onSelectTheme(idTheme) {
      this.idTheme = idTheme;
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
