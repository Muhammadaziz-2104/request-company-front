<template>
  <app-page title="Yordam" :back="true">
    <app-qustions v-for="item in questions" :key="item.title" :question="item"></app-qustions>
  </app-page>
</template>
<script>
import AppPage from "@/components/ui/AppPage.vue";
import AppQustions from "@/components/help/AppQustions.vue";

export default {
  setup() {
    const questions = [
      {
        title: 'Title1',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, beatae, deserunt dignissimos eius error eum explicabo itaque iure, laboriosam laudantium magni nostrum odio officia praesentium ratione sapiente tempora ut vitae!\n'
      },
      {
        title: 'Title2',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, beatae, deserunt dignissimos eius error eum explicabo itaque iure, laboriosam laudantium magni nostrum odio officia praesentium ratione sapiente tempora ut vitae!\n'
      },
      {
        title: 'Title3',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, beatae, deserunt dignissimos eius error eum explicabo itaque iure, laboriosam laudantium magni nostrum odio officia praesentium ratione sapiente tempora ut vitae!\n'
      },
      {
        title: 'Title4',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, beatae, deserunt dignissimos eius error eum explicabo itaque iure, laboriosam laudantium magni nostrum odio officia praesentium ratione sapiente tempora ut vitae!\n'
      },

    ]


    return {
      questions
    }
  },
  components: {AppQustions, AppPage},

}
</script>
<style>

</style>