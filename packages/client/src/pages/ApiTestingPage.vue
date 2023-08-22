<template>
  <q-page class="fit row inline wrap justify-evenly items-center content-start">
    <youtube-list-playlists title="YoutubeScreen"></youtube-list-playlists>
    <dummy-api-add-product title="DummyApiAddProduct"></dummy-api-add-product>
    <dummy-api-add-comment title="DummyApiAddComment"></dummy-api-add-comment>
    <auth-backend title="DummyApiAddComment"></auth-backend>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import YoutubeScreen from "../components/YoutubeScreen.vue";
import YoutubeListPlaylists from "../components/YoutubeListPlaylists.vue";
import DummyApiAddProduct from "../components/DummyApiAddProduct.vue";
import DummyApiAddComment from "../components/DummyApiAddComment.vue";
import AuthBackend from "../components/AuthControllerBackend.vue";
// YoutubeScreen,
export default defineComponent({
  name: "YoutubePage",
  components: {
    DummyApiAddProduct,
    YoutubeListPlaylists,
    DummyApiAddComment,
    AuthBackend,
  },
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
