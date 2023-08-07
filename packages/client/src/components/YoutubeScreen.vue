<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input filled v-model="channelId" label="Your Channel Id" hint="Youtube Channel ID" lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']" />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { youtubeChannelId, googleAPIKey } from "../../secrets/constants";


const handleOnSubmit = async () => {
  const abortController = new AbortController();
  const result = await fetch(
    `http://localhost:3000/`,
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

  return result;
};

export default {
  setup() {
    const $q = useQuasar();
    const channelId = ref(youtubeChannelId);
    const accept = ref(true);

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
        channelId.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
