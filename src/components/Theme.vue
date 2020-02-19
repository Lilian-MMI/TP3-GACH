<template>
  <div>
    <div class="d-flex align-items-end quiz-title-bloc" v-if="theme">
      <h3 class="flex-fill quiz-title-text">Quiz 1 de {{ theme.titre }}</h3>
      <button type="button" class="btn btn-secondary btn-sm">Lancer</button>
    </div>
  </div>
</template>

<script>
import { getTheme } from "../../data/quiz";
export default {
  name: "Theme",
  props: ["idTheme"],
  data: function() {
    return {};
  },
  computed: {
    theme: function() {
      return getTheme(this.idTheme);
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
