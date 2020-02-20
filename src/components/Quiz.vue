<template>
  <div v-if="theme">
    <div>
        Quiz : {{ idQuiz }}
  </div>
</template>

<script>
import {fsffds} from '../data/adefinir';
export default {
    name: "Quiz",
    props: ["idQuiz]"],
    data : function(){
        return{};
    },
    computed: {
        quiz: function(){
            return getQuizAjax(this.idQuiz);
        }
    }
}
</script>

