<template>
  <q-page class="fit row inline wrap justify-evenly items-center content-start">
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
