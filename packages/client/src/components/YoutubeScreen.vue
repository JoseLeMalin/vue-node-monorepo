<template>
  <div>
    <q-field rounded filled stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline" tabindex="0">Youtube get Playlist from channel ID</div>
      </template></q-field>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input filled v-model="channelId" label="Your Channel Id" hint="Youtube Channel ID" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']" />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="secondary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { useQuasar } from "quasar";
import { ref } from "vue";
import { youtubeChannelId } from "../../secrets/constants";


const handleOnSubmit = async () => {
  const abortController = new AbortController();
  const result = await fetch(
    `http://localhost:3000/youtube`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      signal: abortController.signal,
    }
  )
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log(err));
  console.log("result", result);
  return result;
};

export default {
  setup() {
    const $q = useQuasar();
    const channelId = ref(youtubeChannelId);
    const accept = ref(true);
    const text = ref("")
    return {
      channelId,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          handleOnSubmit();
          $q.notify({
            message: "Jim pinged you.",
            caption: "5 minutes ago",
            color: "secondary",
          });
        }
      },

      onReset() {
        channelId.value = "";
        accept.value = false;
      },
    };
  },
};
</script>
