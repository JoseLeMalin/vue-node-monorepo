<template>
  <div>
    <q-field rounded filled stack-label>
      <template v-slot:control>
        <div class="self-center full-width no-outline" tabindex="0">
          Add new product to dummyjson.com
        </div>
      </template>
    </q-field>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="product"
        label="Product to add"
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
import { Http2ServerRequest } from "http2";
import { useQuasar } from "quasar";
import { defineComponent, PropType, computed, ref, toRef, Ref } from "vue";
// import { youtubeChannelId } from "../../secrets/constants";

const handleOnSubmit = async (title: string): Promise<string> => {
  const result = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      /* other product data */
    }),
  })
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log(err));

  console.log("result", result);
  return result.body as string;
};

export default defineComponent({
  name: "FormComponent",
  props: {
    inputValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: true,
    },
  },
  methods: {
    async handleOnSubmit() {
      this.$emit(await handleOnSubmit("ézqe"));
    },
  },
  setup() {
    const $q = useQuasar();
    const product = ref("Un produit LOUL");
    const accept = ref(true);

    return {
      product,
      accept,

      async onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          await handleOnSubmit(product.value);

          $q.notify({
            message: "You've added the product",
            caption: "Just now",
            color: "secondary",
            position: "left",
          });
        }
      },

      onReset() {
        product.value = "";
        accept.value = false;
      },
    };
  },
});
</script>
