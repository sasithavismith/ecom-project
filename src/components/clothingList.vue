<template>
  <v-row justify="start" class="mb-10">
    <v-col
      lg="3"
      md="4"
      sm="6"
      cols="11"
      v-for="(item, index) in productData"
      :key="index"
    >
      <productBlock :itemData="item" />
    </v-col>
  </v-row>
</template>
<script>
import productBlock from "./productBlock.vue";
export default {
  components: {
    productBlock,
  },
  data() {
    return {};
  },
  props: {
    productData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
