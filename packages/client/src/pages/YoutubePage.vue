<template>
  <q-page class="row items-center justify-evenly">
    <youtube-screen title="YoutubeScreen"></youtube-screen>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import YoutubeScreen from "components/YoutubeScreen.vue";

export default defineComponent({
  name: "YoutubePage",
  components: { YoutubeScreen },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return props;
  },
});
</script>
