/*eslint-env es6*/
<template>
  <div>
    <q-field rounded filled stack-label>
      <template #control>
        <div class="self-center full-width no-outline" tabindex="0">
          DummyJSON: POST /comment
        </div>
      </template>
    </q-field>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input filled v-model="product" label="DummyJSON: POST /comment" hint="DummyJSON api POST comment" lazy-rules
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
import { ref, defineComponent } from "vue";
import { CommentCreateSchema } from "./../../../server/src/dummyjson/dummyjson.zod";
// import { CommentCreateSchema } from "@jlm/common";

const handleOnSubmit = async (title: string) => {
  const result = await fetch("http://localhost:3000/dummyjson/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      body: title,
      postId: 2,
      userId: 3,
      /* other product data */
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log("error", err));
  try {
    console.log("Front - result add comment", result);
    return CommentCreateSchema.parse(result);
  } catch (error) {
    throw new Error(
      "The response from DummyJSON doesn't match the expecting scheme",
    );
  }
};

export default defineComponent({
  name: "DummyApiAddComment",
  components: {},
  setup() {
    const $q = useQuasar();
    const product = ref("Here you can POST to DummyJSON");
    const accept = ref(true);

    return {
      product,
      accept,

      async onSubmit() {
        try {
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
              message: "You've added the comment",
              caption: "Just now",
              color: "secondary",
              position: "left",
            });
          }
        } catch (error) {
          $q.notify({
            message: "An error occured",
            color: "negative",
            position: "bottom",
          });
        }
      },
      // async onSubmitAuthController() {
      //     const result = await fetch('http://localhost:3000/auth/login', {
      //         method: 'GET',
      //         headers: { 'Content-Type': 'application/json' },
      //
      //     })
      //         .then(res => res.json())
      //         .then(console.log)
      //         .catch((err) => console.log(err));
      //     console.log("result", result);
      //     return result;
      //
      // },
      onReset() {
        product.value = "";
        accept.value = false;
      },
    };
  },
});
</script>
