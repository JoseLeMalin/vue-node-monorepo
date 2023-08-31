<template>
  <div>
    <q-field rounded filled stack-label>
      <template #control>
        <div class="self-center full-width no-outline" tabindex="0">
          Test auth controller backend
        </div>
      </template>
    </q-field>
    <q-form
      @submit="onSubmitAuthController"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="product"
        label="Your Channel Id"
        hint="Youtube Channel ID"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="secondary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { useQuasar } from "quasar";
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "AuthBackend",
  components: {},
  setup() {
    const $q = useQuasar();
    const product = ref("Un produit LOUL");
    const accept = ref(true);

    return {
      product,
      accept,

      async onSubmitAuthController() {
        const result = await fetch("http://localhost:3000/auth/login", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then(console.log)
          .catch((err) => console.log(err));
        console.log("result", result);
        return result;
      },
      onReset() {
        product.value = "";
        accept.value = false;
      },
    };
  },
});
</script>
