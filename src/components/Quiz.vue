<template>
  <div id="example-1">
      <h2>{{ quiz.titre }}</h2>
      <!--Ajout du nombre de question-->
      Nombre de questions :
      {{ listeQuestions ? listeQuestions.length : 0 }}
      <br>
      Selection de la question : 
      <button
        v-for="question in listeQuestions"
        :key="question.id"
        @click="selectQuestion(question.id)"
      >
        {{ question.id }}
      </button>    
    
    <div v-for="question in listeQuestions" :key="question.titre"><br><h3>{{ question.titre }}</h3>
      <br><input type="radio" id="reponses1" name="Qreponses1">
      <label for="scales">{{ question['reponses'][0]['titre']}}</label>
      <br><input type="radio" id="reponses2" name="Qreponses2">
      <label for="scales">{{ question['reponses'][1]['titre']}}</label>
      <br><input type="radio" id="reponses3" name="Qreponses3">
      <label for="scales">{{ question['reponses'][2]['titre']}}</label>
    </div> <!-- div à remplacer par le composant Question --> 

    <!--<Question :idQuestion="idQuestion" @select-question="" /> A completer ultérieurement -->

  </div>
</template>
<script>
import { getQuiz } from "../data/quiz";
import { getQuizAjax } from "../data/ajax";

export default {
  name: "Quiz",
  props: ["idQuiz"],
  data: function() {
    return {
      listeQuestions: null
    };
  },
  watch: {
    idQuiz: function() {
      if (this.idQuiz) {
        getQuizAjax(this.idQuiz).then(json => {
          this.listeQuestions = json;
        });
      }
    }
  },
  computed: {
    quiz : function() {
      return getQuiz(this.idQuiz);
    }  
  },
  methods: {
    SelectQuestion: function(idQuestion) {
      this.idQuestion = idQuestion;
      this.$emit("select-question", idQuestion);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
