<template>
    <div>
        <form-component></form-component>
    </div>
</template>
  
<script lang="ts">
import { useQuasar } from "quasar";
import { ref, defineComponent } from "vue";
import FormComponent from "./FormComponent.vue"
// import { youtubeChannelId } from "../../secrets/constants";


const handleOnSubmit = async (title: string) => {

    const result = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title,
            /* other product data */
        })
    })
        .then(res => res.json())
        .then(console.log)
        .catch((err) => console.log(err));
    console.log("result", result);
    return result;
};

export default defineComponent({
    name: "DummyApiAddProduct",
    components: { FormComponent },
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
  