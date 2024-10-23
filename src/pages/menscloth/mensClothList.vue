<template>
  <div class="overflow-hidden">
    <v-row no-gutters justify="center">
      <v-col cols="11">
        <sectionTitle :sectionTitle="'Men\'s Clothing'" />
        <clothingList :productData="mensproductData" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import http from "@/services/http-common";
import sectionTitle from "@/components/sectionTitle.vue";
import clothingList from "@/components/clothingList.vue";
export default {
  components: {
    sectionTitle,
    clothingList,
  },
  data() {
    return {
      mensproductData: [],
    };
  },
  mounted() {
    this.getwomensProductList();
  },
  methods: {
    getwomensProductList() {
      http({
        method: "get",
        url: "/products/category/men's clothing",
      })
        .then((response) => {
          this.mensproductData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

